import { content } from '../lib/content';

export default function Trust() {
  const { trust } = content;
  if (!trust || !trust.clients || trust.clients.length === 0) return null;

  return (
    <section id="clients" className="py-[60px] md:py-[100px] border-b border-hair bg-mist">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="divider-label mb-4 md:mb-5">{trust.label} / 実績</div>

        <h2 className="font-jp text-[22px] md:text-[28px] lg:text-[32px] font-semibold leading-[1.4] mb-3 max-w-[820px]">
          {trust.heading}
        </h2>

        {trust.subheading && (
          <p className="font-jp text-[13px] md:text-[14px] leading-[1.85] text-sub max-w-[820px] mb-10 md:mb-14">
            {trust.subheading}
          </p>
        )}

        <ul
          className="grid gap-x-6 gap-y-5 md:gap-y-7 items-center"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))' }}
        >
          {trust.clients.map((c, i) => (
            <li
              key={i}
              className="flex items-center justify-center min-h-[64px] md:min-h-[80px]"
            >
              {c.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-[36px] md:max-h-[44px] w-auto object-contain opacity-70 hover:opacity-100 transition"
                />
              ) : (
                <span className="font-jp text-[14px] md:text-[15px] text-sub font-medium text-center px-2">
                  {c.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
