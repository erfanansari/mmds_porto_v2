const shapes = [
  {
    className: 'absolute top-[15%] left-[10%] w-44 h-44 rounded-[2.5rem] bg-gradient-to-br from-brand-purple-light/10 to-brand-purple/5 rotate-12',
    style: { animation: 'float 20s ease-in-out infinite' },
  },
  {
    className: 'absolute top-[55%] right-[8%] w-52 h-52 rounded-full bg-gradient-to-tl from-brand-purple-light/8 via-brand-purple/4 to-transparent rotate-45',
    style: { animation: 'float 24s ease-in-out 3s infinite' },
  },
  {
    className: 'absolute top-[22%] right-[22%] w-28 h-28 rounded-3xl bg-brand-purple-light/8 -rotate-12',
    style: { animation: 'float 18s ease-in-out 6s infinite' },
  },
];

const lines = [
  {
    className: 'absolute top-[38%] left-[5%] w-60 h-px bg-gradient-to-r from-transparent via-brand-purple-light/12 to-transparent rotate-[15deg]',
    style: { animation: 'float 22s ease-in-out 2s infinite' },
  },
  {
    className: 'absolute top-[68%] right-[8%] w-44 h-px bg-gradient-to-l from-transparent via-brand-purple-light/10 to-transparent -rotate-[10deg]',
    style: { animation: 'float 19s ease-in-out 5s infinite' },
  },
];

const dots = [
  { className: 'absolute top-[18%] left-[30%] w-4 h-4 rounded-full bg-brand-purple-light/20', style: { animation: 'geo-pulse 6s ease-in-out infinite' } },
  { className: 'absolute top-[52%] right-[25%] w-3 h-3 rounded-full bg-brand-purple/15', style: { animation: 'geo-pulse 8s ease-in-out 2s infinite' } },
  { className: 'absolute top-[33%] right-[42%] w-5 h-5 rounded-full bg-brand-purple-light/14', style: { animation: 'geo-pulse 7s ease-in-out 4s infinite' } },
  { className: 'absolute bottom-[28%] left-[48%] w-3 h-3 rounded-full bg-brand-purple-light/10', style: { animation: 'geo-pulse 9s ease-in-out 1s infinite' } },
];

const rings = [
  { className: 'absolute top-[10%] right-[33%] w-20 h-20 rounded-full border border-brand-purple-light/8' },
  { className: 'absolute bottom-[22%] left-[22%] w-16 h-16 rounded-full border border-brand-purple/6' },
];

const GeometricBg = () => (
  <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none" aria-hidden="true">
    <div
      className="absolute top-1/2 left-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-brand-purple-light/8 via-brand-purple/4 to-transparent"
      style={{ animation: 'geo-spin-slow 90s linear infinite' }}
    />
    {shapes.map((s, i) => <div key={`s${i}`} className={s.className} style={s.style} />)}
    {lines.map((l, i) => <div key={`l${i}`} className={l.className} style={l.style} />)}
    {dots.map((d, i) => <div key={`d${i}`} className={d.className} style={d.style} />)}
    {rings.map((r, i) => <div key={`r${i}`} className={r.className} />)}
  </div>
);

export default GeometricBg;
