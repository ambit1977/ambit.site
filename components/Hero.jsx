import Link from 'next/link';
import { content } from '../lib/content';

export default function Hero() {
  const { hero } = content;

  return (
    <section id="hero" className="pt-[110px] md:pt-[180px] pb-[80px] md:pb-[160px] border-b border-hair">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Tagline */}
        <div className="reveal d2 mb-8 md:mb-12 max-w-[820px]">
          <h1 className="text-[40px] md:text-[64px] lg:text-[80px] leading-[1.08] tracking-display font-semibold">
            {hero.tagline.split('\n').map((line, i) => (
              <span key={i}>
                {line === hero.taglineHighlight ? <span className="italic font-normal">{line}</span> : line}
                {i < hero.tagline.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h1>
        </div>

        {/* Subheading */}
        <div className="reveal d3 mb-12 md:mb-20 max-w-[760px]">
          <p className="font-jp text-[20px] md:text-[24px] lg:text-[28px] leading-[1.6] font-medium">
            {hero.subheading}
          </p>
        </div>

        {/* Body copy */}
        <div className="reveal d4 max-w-[680px] mb-14 md:mb-24 prose-jp">
          {hero.body.map((paragraph, i) => (
            <p
              key={i}
              className="font-jp text-[16px] md:text-[17px] leading-[1.95] text-sub"
              style={{ marginTop: i > 0 ? '1.4rem' : 0 }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Pillars */}
        <div className="reveal d5 max-w-[680px] mb-16 md:mb-24">
          {hero.pillarsLabel && (
            <h2 className="font-jp text-[18px] md:text-[20px] font-semibold mb-8 md:mb-10 text-ink">
              {hero.pillarsLabel}
            </h2>
          )}
          <div className="space-y-10 md:space-y-12">
            {hero.pillars.map((pillar) => (
              <div key={pillar.number}>
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="accent-line" />
                  <div className="font-mono text-[12px] font-semibold tracking-[0.08em] text-signal">
                    {pillar.number}
                  </div>
                </div>
                <h3 className="font-jp text-[18px] md:text-[20px] font-semibold mb-3 leading-[1.5]">
                  {pillar.title}
                </h3>
                <p className="font-jp text-[15px] md:text-[16px] leading-[1.95] text-sub">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal d5 flex flex-col sm:flex-row sm:items-center gap-4">
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center gap-2 bg-ink text-white px-7 py-4 rounded text-[15px] font-medium hover:bg-black transition"
          >
            {hero.cta.primary}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8m0 0L7 3m4 4L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a href="#services" className="text-[15px] font-medium underline-hover px-2">
            {hero.cta.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
