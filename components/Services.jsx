import { content } from '../lib/content';

export default function Services() {
  const { services } = content;

  return (
    <section id="services" className="py-[160px] border-b border-hair">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="divider-label mb-12">§ Services</div>

        <h2 className="font-jp text-[56px] tracking-h1 font-semibold leading-[1.1] mb-24 max-w-[700px]">
          {services.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < services.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h2>

        <div className="space-y-6 max-w-[800px]">
          {services.items.map((item) => (
            <a key={item.id} href="#" className="card-hover border border-hair rounded p-8 block group">
              <div className="flex items-start justify-between">
                <div>
                  <div className="cat-label mb-4">{item.id} / {item.label}</div>
                  <h3 className="font-jp text-[20px] font-semibold">
                    {item.title}
                  </h3>
                </div>
                <div className="arrow">→</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
