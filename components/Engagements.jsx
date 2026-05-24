import { content } from '../lib/content';

export default function Engagements() {
  const { engagements } = content;

  return (
    <section id="engagements" className="py-[80px] md:py-[140px] border-b border-hair">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="divider-label mb-6 md:mb-8">Engagements / 契約形態</div>

        <h2 className="font-jp text-[30px] md:text-[42px] lg:text-[52px] tracking-h1 font-semibold leading-[1.25] mb-12 md:mb-20 max-w-[740px]">
          {engagements.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < engagements.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-[960px]">
          {engagements.items.map((item) => (
            <div
              key={item.title}
              className={`border border-hair rounded p-7 md:p-10 ${item.highlight ? 'bg-highlight' : ''}`}
            >
              <h4 className="font-jp text-[20px] md:text-[22px] font-semibold mb-4">
                {item.title}
              </h4>
              <p className="font-jp text-[14px] md:text-[15px] leading-[1.95] text-sub mb-6">
                {item.description}
              </p>
              <div className="text-signal font-mono text-[13px] md:text-[14px] font-semibold">
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
