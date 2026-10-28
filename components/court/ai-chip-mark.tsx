/** Monoline chip taken from the user's reference, using Stamply's spark colour. */
export function AiChipMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false">
      <g stroke="currentColor" strokeWidth="1.9" strokeLinecap="square">
        <path d="M15 2v5M24 2v5M33 2v5M15 41v5M24 41v5M33 41v5M2 15h5M2 24h5M2 33h5M41 15h5M41 24h5M41 33h5" />
        <rect x="7" y="7" width="34" height="34" rx="4" strokeWidth="2.2" />
        <rect x="12" y="12" width="24" height="24" strokeWidth="1.9" />
      </g>
      <text x="24" y="29" textAnchor="middle" fill="currentColor" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="600">AI</text>
    </svg>
  );
}
