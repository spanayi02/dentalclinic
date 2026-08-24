export default function ToothMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path
        d="M100 46c-28 0-46 17-46 39 0 15 6 22 9 40 3 18 5 40 8 52 3 12 8 16 13 16 8 0 9-13 12-30 2-11 3-18 4-18s2 7 4 18c3 17 4 30 12 30 5 0 10-4 13-16 3-12 5-34 8-52 3-18 9-25 9-40 0-22-18-39-46-39z"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M78 66c6-5 13-7 22-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
