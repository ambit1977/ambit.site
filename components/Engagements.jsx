import { content } from '../lib/content';

export default function Engagements() {
  const { engagements } = content;

  return (
    <section className="py-[80px] md:py-[160px] border-b border-hair">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="divider-label mb-8 md:mb-12">§ How We Work</div>

        <h2 className="font-jp text-[32px] md:text-[44px] lg:text-[56px] tracking-h1 font-semibold leading-[1.15] md:leading-[1.1] mb-14 md:mb-24 max-w-[700px]">
          {engagements.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < engagements.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-[900px]">
          {engagements.items.map((item) => (
            <div
              key={item.title}
              className={`border border-hair rounded p-6 md:p-10 ${item.highlight ? 'bg-highlight' : ''}`}
            >
              <h4 className="font-jp text-[18px] md:text-[20px] font-semibold mb-3 md:mb-4">
                {item.title}
              </h4>
              <p className="font-jp text-[14px] leading-[1.8] text-sub mb-5 md:mb-6">
                {item.description}
              </p>
              <div className="text-signal font-mono text-[13px] font-semibold">
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
