// Grabado en trazos de una fotografía, con el mismo lenguaje que la fachada del
// login (court-particles.ts): rejilla fija en pantalla, trazos diagonales cuya
// longitud y opacidad salen de la luz de la foto, y una órbita lenta en
// perspectiva con un barrido de luz. Aquí la "máscara" es la luminancia.
export const PHOTO_TRACE_SPACING = 4.8;
const ORBIT_DEGREES = 7;
const BUCKET_COUNT = 16;
/** Margen extra al cubrir el lienzo, para que la órbita nunca deje bordes vacíos. */
const OVERSCAN = 1.14;

type Luma = { values: Float32Array; width: number; height: number };

const cache = new Map<string, Promise<Luma>>();

export function loadPhotoLuma(src: string): Promise<Luma> {
  let promise = cache.get(src);
  if (promise) return promise;
  promise = (async () => {
    const image = new Image();
    image.src = src;
    await image.decode();
    const width = image.naturalWidth;
    const height = image.naturalHeight;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) throw new Error("Canvas unavailable");
    context.drawImage(image, 0, 0);
    const rgba = context.getImageData(0, 0, width, height).data;
    const values = new Float32Array(width * height);
    for (let i = 0; i < values.length; i++) {
      const l = (rgba[i * 4] * 0.299 + rgba[i * 4 + 1] * 0.587 + rgba[i * 4 + 2] * 0.114) / 255;
      // Contraste de grabado: sombras profundas, luces que dibujan.
      values[i] = Math.pow(Math.min(1, Math.max(0, (l - 0.08) / 0.8)), 1.15);
    }
    return { values, width, height };
  })().catch((error) => {
    cache.delete(src);
    throw error;
  });
  cache.set(src, promise);
  return promise;
}

function sample(luma: Luma, x: number, y: number): number {
  if (x < 0 || y < 0 || x >= luma.width - 1 || y >= luma.height - 1) return 0;
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const i = iy * luma.width + ix;
  const upper = luma.values[i] * (1 - fx) + luma.values[i + 1] * fx;
  const lower = luma.values[i + luma.width] * (1 - fx) + luma.values[i + luma.width + 1] * fx;
  return upper * (1 - fy) + lower * fy;
}

export function createPhotoTracePainter(canvas: HTMLCanvasElement, luma: Luma) {
  const context = canvas.getContext("2d", { alpha: true });
  if (!context) return null;
  let buckets: Float32Array[] = [];
  const counts = new Uint32Array(BUCKET_COUNT);
  let width = 0;
  let height = 0;
  let ratio = 1;

  function resize(nextWidth: number, nextHeight: number) {
    width = nextWidth;
    height = nextHeight;
    ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(width * ratio));
    canvas.height = Math.max(1, Math.round(height * ratio));
    const capacity = Math.ceil(width / PHOTO_TRACE_SPACING + 1) * Math.ceil(height / PHOTO_TRACE_SPACING + 1) * 3;
    buckets = Array.from({ length: BUCKET_COUNT }, () => new Float32Array(capacity));
  }

  function draw(seconds: number) {
    if (!width || !height || !context) return;
    const phase = (seconds * Math.PI * 2) / 22;
    const sway = Math.sin(phase);
    const yaw = (sway * ORBIT_DEGREES * Math.PI) / 180;
    const pitch = (Math.cos(phase) * 0.8 * Math.PI) / 180;
    const cy = Math.cos(yaw);
    const sy = Math.sin(yaw);
    const cp = Math.cos(pitch);
    const sp = Math.sin(pitch);
    const focal = 1400;
    const centerX = width * 0.5;
    const centerY = height * 0.5;
    // "cover": la foto llena todo el ancho y el alto, con margen para la órbita.
    const scale = Math.max(width / luma.width, height / luma.height) * OVERSCAN;
    const lightPosition = width * (0.5 + sway * 0.4);
    counts.fill(0);

    const rows = Math.ceil(height / PHOTO_TRACE_SPACING) + 1;
    const columns = Math.ceil(width / PHOTO_TRACE_SPACING) + 1;
    for (let row = 0; row < rows; row++) {
      const y = row * PHOTO_TRACE_SPACING;
      const v = y - centerY;
      for (let column = 0; column < columns; column++) {
        const x = column * PHOTO_TRACE_SPACING;
        const u = x - centerX;
        const depth = 1 / (1 - (u * sy) / (cy * cp * focal) + (v * sp) / (cp * focal));
        const worldX = (u * depth) / cy;
        const worldY = (v * depth - sy * sp * worldX) / cp;
        const shade = sample(luma, worldX / scale + luma.width / 2, worldY / scale + luma.height / 2);
        if (shade < 0.04) continue;
        const distance = (x - lightPosition) / (width * 0.22);
        const sweep = 0.24 * Math.exp(-distance * distance);
        const shimmer = 0.035 * Math.sin(seconds * 1.1 + y * 0.013 + x * 0.005);
        const intensity = Math.min(1, shade * (1 + sweep + shimmer));
        const opacity = 0.05 + intensity * 0.9;
        const bucket = Math.min(BUCKET_COUNT - 1, Math.floor(opacity * BUCKET_COUNT));
        const half = (1.3 + intensity * PHOTO_TRACE_SPACING * 1.35) / (Math.SQRT2 * 2);
        const offset = counts[bucket] * 3;
        buckets[bucket][offset] = x;
        buckets[bucket][offset + 1] = y;
        buckets[bucket][offset + 2] = half;
        counts[bucket]++;
      }
    }

    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);
    context.lineCap = "butt";
    for (let i = 0; i < BUCKET_COUNT; i++) {
      if (!counts[i]) continue;
      const traces = buckets[i];
      context.beginPath();
      context.strokeStyle = `rgba(234,233,252,${(i + 1) / BUCKET_COUNT})`;
      context.lineWidth = 0.7 + (i / BUCKET_COUNT) * 1.25;
      for (let j = 0; j < counts[i] * 3; j += 3) {
        const x = traces[j];
        const y = traces[j + 1];
        const half = traces[j + 2];
        context.moveTo(x - half, y + half);
        context.lineTo(x + half, y - half);
      }
      context.stroke();
    }
  }

  return { resize, draw };
}
