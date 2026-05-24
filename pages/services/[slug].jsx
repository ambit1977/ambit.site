import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { content } from '../../lib/content';

export async function getStaticPaths() {
  return {
    paths: content.services.items.map((s) => ({ params: { slug: s.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const service = content.services.items.find((s) => s.slug === params.slug);
  const others = content.services.items.filter((s) => s.slug !== params.slug);
  return { props: { service, others } };
}

export default function ServiceDetail({ service, others }) {
  return (
    <>
      <Head>
        <title>{service.title} — AMBIT</title>
        <meta name="description" content={service.summary} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${service.title} — AMBIT`} />
        <meta property="og:description" content={service.summary} />
      </Head>

      <Header />

      <main className="min-h-screen pt-[80px] md:pt-[110px]">
        {/* Breadcrumb */}
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-6 md:py-8">
          <nav className="text-[12px] font-mono text-sub tracking-[0.08em]">
            <Link href="/" className="underline-hover">HOME</Link>
            <span className="mx-2">/</span>
            <Link href="/#services" className="underline-hover">SERVICES</Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{service.label}</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="border-b border-hair pb-16 md:pb-24">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="divider-label mb-6 md:mb-8">{service.id} / {service.label}</div>
            <h1 className="font-jp text-[32px] md:text-[48px] lg:text-[64px] font-semibold leading-[1.15] mb-8 md:mb-10 max-w-[900px]">
              {service.title}
            </h1>
            <p className="font-jp text-[16px] md:text-[20px] leading-[1.8] text-sub max-w-[800px]">
              {service.summary}
            </p>
          </div>
        </section>

        {/* Problems */}
        <section className="py-[60px] md:py-[120px] border-b border-hair">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <div className="divider-label mb-4">§ Problems</div>
              <h2 className="font-jp text-[24px] md:text-[32px] font-semibold leading-[1.3]">
                こんな課題に<br />応えます
              </h2>
            </div>
            <ul className="md:col-span-8 space-y-4 md:space-y-5">
              {service.problems.map((p, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="font-mono text-[12px] text-sub mt-1.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <p className="font-jp text-[15px] md:text-[17px] leading-[1.8]">{p}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-[60px] md:py-[120px] border-b border-hair">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <div className="divider-label mb-4">§ Deliverables</div>
              <h2 className="font-jp text-[24px] md:text-[32px] font-semibold leading-[1.3]">
                提供する<br />主な成果物
              </h2>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.deliverables.map((d, i) => (
                <div key={i} className="border border-hair rounded p-5 md:p-6">
                  <div className="font-mono text-[11px] text-sub mb-2">D-{String(i + 1).padStart(2, '0')}</div>
                  <p className="font-jp text-[14px] md:text-[15px] leading-[1.7]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-[60px] md:py-[120px] border-b border-hair">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="divider-label mb-6 md:mb-8">§ Process</div>
            <h2 className="font-jp text-[24px] md:text-[32px] font-semibold leading-[1.3] mb-10 md:mb-16 max-w-[700px]">
              進め方
            </h2>
            <div className="space-y-6 md:space-y-8 max-w-[900px]">
              {service.process.map((p) => (
                <div key={p.step} className="grid grid-cols-12 gap-4 md:gap-8 pb-6 md:pb-8 border-b border-hair last:border-b-0">
                  <div className="col-span-2 md:col-span-1">
                    <div className="font-mono text-[14px] md:text-[16px] text-signal font-semibold">{p.step}</div>
                  </div>
                  <div className="col-span-10 md:col-span-11">
                    <h3 className="font-jp text-[17px] md:text-[20px] font-semibold mb-2">{p.title}</h3>
                    <p className="font-jp text-[14px] md:text-[15px] leading-[1.8] text-sub">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Who */}
        <section className="py-[60px] md:py-[120px] border-b border-hair">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="divider-label mb-6 md:mb-8">§ For Who</div>
            <h2 className="font-jp text-[24px] md:text-[32px] font-semibold leading-[1.3] mb-10 md:mb-12 max-w-[700px]">
              こんな組織に<br className="md:hidden" />お勧めします
            </h2>
            <ul className="space-y-3 md:space-y-4 max-w-[800px]">
              {service.forWho.map((w, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-signal font-semibold mt-1">▸</span>
                  <p className="font-jp text-[15px] md:text-[17px] leading-[1.8]">{w}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-[80px] md:py-[140px] border-b border-hair bg-highlight">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 text-center">
            <h2 className="font-jp text-[28px] md:text-[40px] font-semibold leading-[1.3] mb-6 md:mb-8">
              まずは、現状の<br className="md:hidden" />聞き取りから。
            </h2>
            <p className="font-jp text-[14px] md:text-[16px] leading-[1.8] text-sub mb-10 md:mb-12 max-w-[600px] mx-auto">
              初回 30 分の壁打ちは無料です。<br />
              具体的な発注検討前のご相談でも歓迎します。
            </p>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-ink text-white px-8 py-4 rounded text-[15px] font-medium hover:bg-black transition">
              相談する
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m0 0L7 3m4 4L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </section>

        {/* Other services */}
        <section className="py-[60px] md:py-[120px]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="divider-label mb-6 md:mb-8">§ Other Services</div>
            <h2 className="font-jp text-[24px] md:text-[32px] font-semibold leading-[1.3] mb-10 md:mb-14 max-w-[700px]">
              その他のサービス
            </h2>
            <div className="space-y-4 max-w-[900px]">
              {others.map((o) => (
                <Link key={o.slug} href={`/services/${o.slug}/`} className="card-hover border border-hair rounded p-5 md:p-7 block group">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="cat-label mb-2 md:mb-3">{o.id} / {o.label}</div>
                      <h3 className="font-jp text-[16px] md:text-[18px] font-semibold">{o.title}</h3>
                    </div>
                    <div className="arrow shrink-0">→</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
