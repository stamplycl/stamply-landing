import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

const UPDATED = "11 de septiembre de 2026";

export const metadata: Metadata = {
  title: "Política de Privacidad — Stamply",
  description:
    "Cómo Stamply recopila, usa, almacena y protege tu información, incluido el uso de datos de las APIs de Google (Gmail y Google Drive).",
  alternates: { canonical: "https://stamply.cl/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <LegalShell
      title="Política de Privacidad"
      subtitle="Cómo Stamply recopila, usa, almacena y protege tu información."
      updated={UPDATED}
    >
      <p>
        Esta Política de Privacidad describe cómo <strong>Stamply</strong> (&ldquo;Stamply&rdquo;,
        &ldquo;nosotros&rdquo;) recopila, utiliza, almacena y protege la información de las personas
        y organizaciones que usan nuestra plataforma (el &ldquo;Servicio&rdquo;), disponible en{" "}
        <a href="https://stamply.cl">stamply.cl</a> y{" "}
        <a href="https://app.stamply.cl">app.stamply.cl</a>. Al utilizar el Servicio aceptas las
        prácticas descritas en este documento.
      </p>

      <h2 id="datos-que-recopilamos">1. Información que recopilamos</h2>
      <p>Recopilamos la información necesaria para prestar el Servicio:</p>
      <ul>
        <li>
          <strong>Datos de cuenta:</strong> nombre, correo electrónico y credenciales de acceso de
          los usuarios del Servicio.
        </li>
        <li>
          <strong>Datos operativos que tú ingresas:</strong> información de causas, tribunales,
          trámites, clientes, documentos y demás datos que cargas para gestionar tu trabajo
          judicial.
        </li>
        <li>
          <strong>Datos de las APIs de Google</strong> que autorizas explícitamente al conectar
          Gmail o Google Drive (ver sección 3).
        </li>
        <li>
          <strong>Datos técnicos:</strong> registros de uso, dirección IP y datos del dispositivo,
          con fines de seguridad y funcionamiento del Servicio.
        </li>
      </ul>

      <h2 id="como-usamos">2. Cómo usamos la información</h2>
      <p>Utilizamos la información únicamente para:</p>
      <ul>
        <li>Proveer, mantener y mejorar el Servicio.</li>
        <li>Autenticar usuarios y proteger las cuentas.</li>
        <li>
          Ejecutar las acciones que solicitas, como enviar correos o respaldar documentos en tu
          Google Drive.
        </li>
        <li>Brindar soporte y comunicarnos contigo sobre el Servicio.</li>
        <li>Cumplir obligaciones legales aplicables.</li>
      </ul>

      <h2 id="datos-google">3. Uso de datos de las APIs de Google</h2>
      <p>
        Stamply ofrece integraciones opcionales con Google. Solo accedemos a datos de tu cuenta de
        Google si conectas la integración correspondiente, y solicitamos el acceso mínimo necesario:
      </p>

      <h3>3.1 Gmail (permiso <code>gmail.send</code>)</h3>
      <ul>
        <li>
          Usamos este permiso <strong>exclusivamente para enviar correos en tu nombre</strong> —por
          ejemplo, avisos de cobranza y documentos— desde tu propia cuenta de Gmail, cuando tú lo
          solicitas.
        </li>
        <li>
          <strong>No leemos, no importamos, no modificamos ni almacenamos</strong> los mensajes ni el
          contenido de tu bandeja de entrada. El permiso <code>gmail.send</code> no otorga acceso de
          lectura al buzón.
        </li>
      </ul>

      <h3>3.2 Google Drive (permiso <code>drive.file</code>)</h3>
      <ul>
        <li>
          Usamos este permiso para <strong>guardar en tu Google Drive los documentos que Stamply
          genera</strong> (respaldos de documentos firmados) dentro de la carpeta que tú elijas.
        </li>
        <li>
          El permiso <code>drive.file</code> limita nuestro acceso <strong>únicamente a los archivos
          y carpetas que Stamply crea o que tú seleccionas explícitamente</strong> mediante el
          selector de Google (Google Picker). <strong>No podemos ver ni acceder al resto de los
          archivos de tu Drive.</strong>
        </li>
      </ul>

      <div className="callout">
        <p>
          <strong>Uso Limitado.</strong> El uso y la transferencia que Stamply hace de la información
          recibida de las APIs de Google se ajustará a la{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de Datos de Usuario de los Servicios de las API de Google
          </a>
          , incluidos sus requisitos de Uso Limitado. No usamos los datos de Google para publicidad
          y no los vendemos ni los transferimos a terceros, salvo lo estrictamente necesario para
          prestar el Servicio, cumplir la ley o con tu consentimiento.
        </p>
      </div>

      <h3>3.3 Inteligencia artificial y datos de Google</h3>
      <div className="callout">
        <p>
          <strong>Los datos que recibimos a través de las APIs de Google nunca se usan para
          entrenar modelos de inteligencia artificial.</strong> Los permisos <code>gmail.send</code>{" "}
          y <code>drive.file</code> son de un solo sentido: los usamos únicamente para <em>enviar</em>{" "}
          correos y <em>guardar</em> archivos que Stamply genera; no leemos el contenido de tu
          bandeja de Gmail ni los archivos existentes en tu Drive, por lo que no hay datos de Google
          que puedan transferirse a un servicio de IA.
        </p>
        <p>
          Stamply usa inteligencia artificial (a través de OpenRouter, con modelos Gemma de Google)
          exclusivamente para procesar documentos legales que tú mismo cargas o generas dentro de la
          aplicación (revisión de plantillas, extracción de datos desde capturas del sitio público
          del Poder Judicial). Ninguno de estos procesos usa datos obtenidos vía las APIs de Gmail o
          Google Drive. El uso de estos datos derivados cumple con la{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de Uso Limitado de Google
          </a>
          .
        </p>
      </div>

      <h2 id="almacenamiento">4. Almacenamiento y conservación</h2>
      <p>
        Para mantener activa la integración, almacenamos de forma <strong>cifrada</strong> los tokens
        de autorización (tokens de actualización) que Google nos entrega. No almacenamos tu
        contraseña de Google. Conservamos tus datos mientras tu cuenta esté activa o según sea
        necesario para prestar el Servicio y cumplir obligaciones legales.
      </p>

      <h2 id="tus-controles">5. Tus controles y cómo revocar el acceso</h2>
      <p>Puedes revocar el acceso de Stamply a tu cuenta de Google en cualquier momento:</p>
      <ul>
        <li>
          Desde <strong>Configuración → Integraciones</strong> en la aplicación, usando el botón
          &ldquo;Desconectar&rdquo;; o
        </li>
        <li>
          Desde tu cuenta de Google, en{" "}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
          >
            myaccount.google.com/permissions
          </a>
          .
        </li>
      </ul>
      <p>
        Al revocar el acceso, dejamos de poder enviar correos o guardar archivos en tu Drive en tu
        nombre.
      </p>

      <h2 id="comparticion">6. Con quién compartimos información</h2>
      <p>
        No vendemos tu información. Podemos compartirla con proveedores que nos ayudan a operar el
        Servicio (por ejemplo, infraestructura de nube y envío de correo), sujetos a obligaciones de
        confidencialidad y solo en la medida necesaria. También podemos divulgarla cuando la ley lo
        exija.
      </p>

      <h2 id="seguridad">7. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger tu información, incluido
        el cifrado en tránsito (HTTPS) y el cifrado de credenciales sensibles en reposo. Ningún
        sistema es 100% infalible, pero trabajamos continuamente para resguardar tus datos.
      </p>

      <h2 id="cambios">8. Cambios a esta política</h2>
      <p>
        Podemos actualizar esta Política de Privacidad. Cuando lo hagamos, modificaremos la fecha de
        &ldquo;Última actualización&rdquo; en la parte superior y, si los cambios son sustanciales,
        te lo comunicaremos por medios razonables.
      </p>

      <h2 id="contacto">9. Contacto</h2>
      <p>
        Si tienes preguntas sobre esta Política o sobre el tratamiento de tus datos, escríbenos a{" "}
        <a href="mailto:soporte@stamply.cl">soporte@stamply.cl</a>.
      </p>
    </LegalShell>
  );
}
