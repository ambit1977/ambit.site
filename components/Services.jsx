import Link from 'next/link';
import { content } from '../lib/content';

export default function Services() {
  const { services } = content;
  const core = services.items.find((s) => s.isCore);
  const others = services.items.filter((s) => !s.isCore);

  return (
    <section id="services" className="py-[80px] md:py-[140px] border-b border-hair">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="divider-label mb-6 md:mb-8">Services / 事業領域</div>

        <h2 className="font-jp text-[30px] md:text-[42px] lg:text-[52px] tracking-h1 font-semibold leading-[1.25] mb-6 md:mb-8 max-w-[820px]">
          {services.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < services.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h2>

        {services.intro && (
          <p className="font-jp text-[15px] md:text-[17px] leading-[1.95] text-sub max-w-[780px] mb-12 md:mb-16">
            {services.intro}
          </p>
        )}

        {/* Core service: AI Consulting */}
        {core && (
          <Link
            href={`/services/${core.slug}/`}
            className="card-hover block border-2 border-ink rounded p-7 md:p-12 max-w-[1100px] mb-12 md:mb-14 bg-ink text-white hover:bg-black"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-10">
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-white/60 mb-4">
                  Core service ─ {core.id} / {core.label}
                </div>
                <h3 className="font-jp text-[24px] md:text-[32px] lg:text-[38px] font-semibold leading-[1.3] mb-5 md:mb-6">
                  {core.title}
                </h3>
                <p className="font-jp text-[15px] md:text-[17px] leading-[1.95] text-white/85 max-w-[720px]">
                  {core.summary}
                </p>
              </div>
              <div className="arrow shrink-0 text-[24px] text-white md:mt-2">→</div>
            </div>
          </Link>
        )}

        {/* Other 4 services */}
        <div className="divider-label mb-5 md:mb-6">AIで再設計する4領域</div>
        <div className="space-y-4 md:space-y-5 max-w-[1100px]">
          {others.map((item) => (
            <Link
              key={item.id}
              href={`/services/${item.slug}/`}
              className="card-hover border border-hair rounded p-6 md:p-8 block group"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="min-w-0">
                  <div className="cat-label mb-3 md:mb-4">
                    {item.id} / {item.label}
                  </div>
                  <h3 className="font-jp text-[18px] md:text-[22px] font-semibold mb-2.5 leading-[1.45]">
                    {item.title}
                  </h3>
                  {item.summary && (
                    <p className="font-jp text-[14px] md:text-[15px] leading-[1.9] text-sub">
                      {item.summary}
                    </p>
                  )}
                </div>
                <div className="arrow shrink-0 text-[20px] md:text-[24px] mt-1 text-caption">→</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
