import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { content } from '../lib/content';

export default function Contact() {
  const { contact } = content;
  const [form, setForm] = useState(
    Object.fromEntries(contact.fields.map((f) => [f.name, '']))
  );
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name) => (e) => {
    setForm({ ...form, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // GTM dataLayer event push
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'contact_form_submit',
        form_company: form.company,
        form_budget: form.budget || 'unset',
      });
    }

    // Compose mailto body
    const lines = contact.fields
      .map((f) => `■ ${f.label}\n${form[f.name] || '（未記入）'}`)
      .join('\n\n');
    const body = encodeURIComponent(
      `${lines}\n\n---\nSent from https://ambit.go2020.tokyo/contact/`
    );
    const subject = encodeURIComponent(`[AMBIT お問い合わせ] ${form.company || form.name || '無題'}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact — AMBIT</title>
        <meta name="description" content="AMBIT へのご相談・お問い合わせはこちらから。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Contact — AMBIT" />
      </Head>

      <Header />

      <main className="min-h-screen pt-[80px] md:pt-[110px]">
        {/* Breadcrumb */}
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-6 md:py-8">
          <nav className="text-[12px] font-mono text-sub tracking-[0.08em]">
            <Link href="/" className="underline-hover">HOME</Link>
            <span className="mx-2">/</span>
            <span className="text-ink">CONTACT</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="border-b border-hair pb-12 md:pb-20">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="divider-label mb-6 md:mb-8">{contact.title}</div>
            <h1 className="font-jp text-[32px] md:text-[48px] lg:text-[64px] font-semibold leading-[1.15] mb-8 md:mb-10 max-w-[900px]">
              {contact.heading}
            </h1>
            <p className="font-jp text-[15px] md:text-[18px] leading-[1.9] text-sub max-w-[700px] whitespace-pre-line">
              {contact.intro}
            </p>
          </div>
        </section>

        {/* Form + Contact Methods */}
        <section className="py-[60px] md:py-[120px] border-b border-hair">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-8">
              <div className="divider-label mb-6 md:mb-8">§ Form</div>

              {submitted ? (
                <div className="border border-hair rounded p-8 md:p-10 bg-highlight">
                  <h3 className="font-jp text-[20px] md:text-[24px] font-semibold mb-4">
                    メーラーが起動しました
                  </h3>
                  <p className="font-jp text-[14px] md:text-[15px] leading-[1.8] text-sub mb-4">
                    お使いのメールクライアントが起動していない場合は、お手数ですが下記アドレスに直接ご連絡ください。
                  </p>
                  <a href={`mailto:${contact.email}`} className="font-mono text-[15px] underline-hover">
                    {contact.email}
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-7">
                  {contact.fields.map((f) => (
                    <div key={f.name}>
                      <label htmlFor={f.name} className="block font-jp text-[13px] md:text-[14px] font-medium mb-2">
                        {f.label}
                        {f.required && <span className="text-signal ml-1">*</span>}
                      </label>
                      {f.type === 'textarea' ? (
                        <textarea
                          id={f.name}
                          name={f.name}
                          required={f.required}
                          rows={6}
                          placeholder={f.placeholder}
                          value={form[f.name]}
                          onChange={handleChange(f.name)}
                          className="w-full border border-hair rounded px-4 py-3 font-jp text-[14px] md:text-[15px] leading-[1.7] focus:outline-none focus:border-ink transition"
                        />
                      ) : f.type === 'select' ? (
                        <select
                          id={f.name}
                          name={f.name}
                          required={f.required}
                          value={form[f.name]}
                          onChange={handleChange(f.name)}
                          className="w-full border border-hair rounded px-4 py-3 font-jp text-[14px] md:text-[15px] focus:outline-none focus:border-ink transition bg-white"
                        >
                          <option value="">選択してください</option>
                          {f.options.map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          id={f.name}
                          name={f.name}
                          type={f.type}
                          required={f.required}
                          placeholder={f.placeholder}
                          value={form[f.name]}
                          onChange={handleChange(f.name)}
                          className="w-full border border-hair rounded px-4 py-3 font-jp text-[14px] md:text-[15px] focus:outline-none focus:border-ink transition"
                        />
                      )}
                    </div>
                  ))}

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-ink text-white px-8 py-4 rounded text-[15px] font-medium hover:bg-black transition"
                    >
                      送信する（メーラー起動）
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m0 0L7 3m4 4L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                    <p className="font-jp text-[12px] text-sub mt-3 leading-[1.7]">
                      ※ 送信ボタンを押すと、お使いのメールアプリに内容が入った状態で起動します。<br />
                      　ご自身で内容を確認のうえ送信してください。
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Direct contact methods */}
            <aside className="lg:col-span-4">
              <div className="divider-label mb-6 md:mb-8">§ Direct</div>
              <div className="border border-hair rounded p-6 md:p-7 space-y-6">
                {contact.methods.map((m) => (
                  <div key={m.label}>
                    <div className="cat-label mb-2">{m.label}</div>
                    <a href={m.href} className="font-mono text-[14px] md:text-[15px] underline-hover break-all">
                      {m.value}
                    </a>
                    {m.note && (
                      <p className="font-jp text-[12px] text-sub mt-2 leading-[1.6]">{m.note}</p>
                    )}
                  </div>
                ))}

                <div className="pt-5 border-t border-hair">
                  <div className="cat-label mb-2">Response Time</div>
                  <p className="font-jp text-[13px] leading-[1.7] text-sub">{contact.responseTime}</p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
