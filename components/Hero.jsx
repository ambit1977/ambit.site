import { content } from '../lib/content';

export default function Hero() {
  const { hero } = content;

  return (
    <section id="hero" className="pt-[180px] pb-[160px] border-b border-hair">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="reveal d1 mb-20">
          <span className="divider-label">CASE 2 / Text-Focused</span>
        </div>

        <div className="reveal d2 mb-12 max-w-[800px]">
          <h1 className="text-[88px] leading-[0.95] tracking-display font-semibold">
            {hero.tagline.split('\n').map((line, i) => (
              <span key={i}>
                {line === hero.taglineHighlight ? <span className="italic font-normal">{line}</span> : line}
                {i < hero.tagline.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h1>
        </div>

        <div className="reveal d3 mb-24 max-w-[700px]">
          <p className="font-jp text-[28px] leading-[1.5] font-medium">
            {hero.subheading}
          </p>
        </div>

        <div className="reveal d4 max-w-[640px] mb-20">
          {hero.body.map((paragraph, i) => (
            <p key={i} className="font-jp text-[16px] leading-[1.9] text-sub" style={{marginTop: i > 0 ? '1.5rem' : 0}}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="reveal d5 space-y-12 mb-24 max-w-[560px]">
          {hero.pillars.map((pillar) => (
            <div key={pillar.number}>
              <div className="flex items-center gap-3 mb-4">
                <div className="accent-line"></div>
                <div className="cat-label">Pillar {pillar.number}</div>
              </div>
              <h3 className="font-jp text-[18px] font-semibold mb-2">
                {pillar.title}
              </h3>
              <p className="font-jp text-[14px] leading-[1.8] text-sub">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal d5 flex items-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 bg-ink text-white px-6 py-3.5 rounded text-[14px] font-medium hover:bg-black transition">
            {hero.cta.primary}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m0 0L7 3m4 4L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#services" className="text-[14px] font-medium underline-hover">
            {hero.cta.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
