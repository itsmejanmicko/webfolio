

export default function ConnectionLines() {
  return (
   <div className="absolute inset-0 pointer-events-none">
   <svg className="w-full h-full" viewBox="0 0 400 400">
<line
  x1="200"
  y1="200"
  x2="100"
  y2="100"
  stroke="url(#glow)"
  strokeWidth="2"
  className="animate-glow-line"
/>
<line
  x1="200"
  y1="200"
  x2="300"
  y2="100"
  stroke="url(#glow)"
  strokeWidth="2"
  className="animate-glow-line"
/>
<line
  x1="200"
  y1="200"
  x2="100"
  y2="300"
  stroke="url(#glow)"
  strokeWidth="2"
  className="animate-glow-line"
/>
<line
  x1="200"
  y1="200"
  x2="300"
  y2="300"
  stroke="url(#glow)"
  strokeWidth="2"
  className="animate-glow-line"
/>
<defs>
  <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stopColor="#0EA5E9" stopOpacity="1" />
    <stop offset="100%" stopColor="#A78BFA" stopOpacity="1" />
  </linearGradient>
</defs>
</svg>
</div>
  )
}
