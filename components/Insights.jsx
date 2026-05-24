import { content } from '../lib/content';

const TYPE_META = {
  article: { label: '寄稿・記事', tone: 'bg-highlight text-signal' },
  talk:    { label: '登壇',      tone: 'bg-ink text-white' },
  press:   { label: 'メディア掲載', tone: 'bg-mist text-ink' },
};

function formatDate(d) {
  if (!d) return '';
  // YYYY-MM もしくは YYYY-MM-DD に対応
  return d.replace('-', '.').replace('-', '.');
}

export default function Insights() {
  const { insights } = content;
  if (!insights || !insights.items || insights.items.length === 0) return null;

  return (
    <section id="insights" className="py-[80px] md:py-[140px] border-b border-hair">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="divider-label mb-6 md:mb-8">{insights.label} / 発信</div>

        <h2 className="font-jp text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.3] mb-5 max-w-[820px]">
          {insights.heading}
        </h2>

        {insights.subheading && (
          <p className="font-jp text-[14px] md:text-[16px] leading-[1.95] text-sub max-w-[760px] mb-12 md:mb-16">
            {insights.subheading}
          </p>
        )}

        <ul className="border-t border-hair max-w-[1100px]">
          {insights.items.map((item, i) => {
            const meta = TYPE_META[item.type] || TYPE_META.article;
            const Inner = (
              <div className="grid grid-cols-12 gap-3 md:gap-6 py-5 md:py-7 items-start">
                <div className="col-span-3 sm:col-span-2 font-mono text-[12px] md:text-[13px] text-caption tracking-[0.06em] pt-1">
                  {formatDate(item.date)}
                </div>
                <div className="col-span-9 sm:col-span-2">
                  <span className={`inline-flex items-center px-2.5 py-1 text-[10px] md:text-[11px] font-mono tracking-[0.1em] uppercase rounded ${meta.tone}`}>
                    {meta.label}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-8">
                  <h3 className="font-jp text-[15px] md:text-[17px] font-semibold leading-[1.55] mb-1">
                    {item.title}
                  </h3>
                  <p className="font-jp text-[13px] md:text-[14px] text-sub leading-[1.85]">
                    {item.outlet}
                    {item.url && (
                      <span className="ml-2 text-signal">↗</span>
                    )}
                  </p>
                </div>
              </div>
            );

            return (
              <li key={i} className="border-b border-hair">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block card-hover px-2 -mx-2 rounded"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div className="px-2 -mx-2">{Inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
