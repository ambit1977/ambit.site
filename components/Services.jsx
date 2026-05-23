import { content } from '../lib/content';

export default function Services() {
  const { services } = content;

  return (
    <section id="services" className="py-[80px] md:py-[160px] border-b border-hair">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="divider-label mb-8 md:mb-12">§ Services</div>

        <h2 className="font-jp text-[32px] md:text-[44px] lg:text-[56px] tracking-h1 font-semibold leading-[1.15] md:leading-[1.1] mb-14 md:mb-24 max-w-[700px]">
          {services.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < services.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h2>

        <div className="space-y-4 md:space-y-6 max-w-[800px]">
          {services.items.map((item) => (
            <a key={item.id} href="#" className="card-hover border border-hair rounded p-5 md:p-8 block group">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="cat-label mb-3 md:mb-4">{item.id} / {item.label}</div>
                  <h3 className="font-jp text-[17px] md:text-[20px] font-semibold">
                    {item.title}
                  </h3>
                </div>
                <div className="arrow shrink-0">→</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
