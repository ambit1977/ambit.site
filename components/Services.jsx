import Link from 'next/link';
import { content } from '../lib/content';

export default function Services() {
  const { services } = content;

  return (
    <section id="services" className="py-[80px] md:py-[140px] border-b border-hair">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="divider-label mb-6 md:mb-8">Services / 事業領域</div>

        <h2 className="font-jp text-[30px] md:text-[42px] lg:text-[52px] tracking-h1 font-semibold leading-[1.25] mb-12 md:mb-20 max-w-[740px]">
          {services.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < services.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h2>

        <div className="space-y-4 md:space-y-5 max-w-[860px]">
          {services.items.map((item) => (
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
