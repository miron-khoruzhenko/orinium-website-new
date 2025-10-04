export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="35" height="35" fill="black" />
      <rect x="55" y="10" width="35" height="35" fill="black" />
      <rect x="10" y="55" width="35" height="35" fill="black" />
      <circle cx="72.5" cy="72.5" r="17.5" fill="black" />
    </svg>
  )
}
