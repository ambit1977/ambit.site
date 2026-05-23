import { content } from '../lib/content';

export default function Engagements() {
  const { engagements } = content;

  return (
    <section className="py-[160px] border-b border-hair">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="divider-label mb-12">§ How We Work</div>

        <h2 className="font-jp text-[56px] tracking-h1 font-semibold leading-[1.1] mb-24 max-w-[700px]">
          {engagements.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < engagements.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h2>

        <div className="grid grid-cols-2 gap-8 max-w-[900px]">
          {engagements.items.map((item) => (
            <div 
              key={item.title} 
              className={`border border-hair rounded p-10 ${item.highlight ? 'bg-highlight' : ''}`}
            >
              <h4 className="font-jp text-[20px] font-semibold mb-4">
                {item.title}
              </h4>
              <p className="font-jp text-[14px] leading-[1.8] text-sub mb-6">
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
