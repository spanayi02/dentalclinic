export default function Grommet({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="brass" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#e8c98f" />
          <stop offset="45%" stopColor="#bd6b39" />
          <stop offset="100%" stopColor="#7e421c" />
        </radialGradient>
      </defs>
      <circle cx="20" cy="20" r="18" fill="url(#brass)" stroke="#5f3315" strokeWidth="0.75" />
      <circle cx="20" cy="20" r="7.5" fill="#eef0e6" stroke="#5f3315" strokeWidth="0.75" />
    </svg>
  );
}
