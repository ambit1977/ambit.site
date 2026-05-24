import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { content } from '../lib/content';

// HubSpot Forms API のフィールドマッピング
// 各フィールドの name は HubSpot 側のプロパティ内部名に合わせる
// （HubSpot 標準: email, firstname, company, jobtitle, message）
const HUBSPOT_FIELD_MAP = {
  company: 'company',
  name: 'firstname',
  email: 'email',
  role: 'jobtitle',
  budget: 'budget_range',     // HubSpotで作るカスタムプロパティ
  message: 'message',
};

export default function Contact() {
  const { contact } = content;
  const { hubspot } = contact;
  const hubspotConfigured = Boolean(hubspot?.portalId && hubspot?.formGuid);

  const [form, setForm] = useState(
    Object.fromEntries(contact.fields.map((f) => [f.name, '']))
  );
  const [status, setStatus] = useState('idle');  // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (name) => (e) => {
    setForm({ ...form, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!hubspotConfigured) {
      setStatus('error');
      setErrorMsg('お問い合わせフォームは現在設定中です。お手数ですが下記メールアドレス宛にご連絡ください。');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    // HubSpot Forms API のペイロード形式
    const payload = {
      submittedAt: Date.now(),
      fields: contact.fields
        .filter((f) => form[f.name])  // 入力されたものだけ送信
        .map((f) => ({
          objectTypeId: '0-1',  // Contacts
          name: HUBSPOT_FIELD_MAP[f.name] || f.name,
          value: form[f.name],
        })),
      context: {
        pageUri: typeof window !== 'undefined' ? window.location.href : '',
        pageName: 'AMBIT - Contact',
      },
    };

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${hubspot.portalId}/${hubspot.formGuid}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || `HTTP ${res.status}`);
      }

      // GTM dataLayer push
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'contact_form_submit',
          form_company: form.company,
          form_budget: form.budget || 'unset',
        });
      }

      setStatus('success');
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
      setErrorMsg(`送信に失敗しました（${err.message}）。お手数ですが下記メールアドレス宛にご連絡ください。`);
    }
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

              {status === 'success' ? (
                <div className="border border-hair rounded p-8 md:p-10 bg-highlight">
                  <h3 className="font-jp text-[20px] md:text-[24px] font-semibold mb-4">
                    送信が完了しました
                  </h3>
                  <p className="font-jp text-[14px] md:text-[15px] leading-[1.8] text-sub mb-4">
                    ご相談ありがとうございます。<br />
                    内容を確認のうえ、<strong className="text-ink">{contact.responseTime}</strong>
                  </p>
                  <p className="font-jp text-[13px] leading-[1.8] text-sub">
                    返信が届かない場合は、お手数ですが下記アドレスにも直接ご連絡ください。
                  </p>
                  <a href={`mailto:${contact.email}`} className="font-mono text-[14px] underline-hover mt-2 inline-block">
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
                          disabled={status === 'submitting'}
                          className="w-full border border-hair rounded px-4 py-3 font-jp text-[14px] md:text-[15px] leading-[1.7] focus:outline-none focus:border-ink transition disabled:opacity-50"
                        />
                      ) : f.type === 'select' ? (
                        <select
                          id={f.name}
                          name={f.name}
                          required={f.required}
                          value={form[f.name]}
                          onChange={handleChange(f.name)}
                          disabled={status === 'submitting'}
                          className="w-full border border-hair rounded px-4 py-3 font-jp text-[14px] md:text-[15px] focus:outline-none focus:border-ink transition bg-white disabled:opacity-50"
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
                          disabled={status === 'submitting'}
                          className="w-full border border-hair rounded px-4 py-3 font-jp text-[14px] md:text-[15px] focus:outline-none focus:border-ink transition disabled:opacity-50"
                        />
                      )}
                    </div>
                  ))}

                  {status === 'error' && (
                    <div className="border border-signal rounded p-4 bg-white">
                      <p className="font-jp text-[13px] md:text-[14px] leading-[1.7] text-signal">
                        {errorMsg}
                      </p>
                      <a href={`mailto:${contact.email}`} className="font-mono text-[14px] underline-hover mt-2 inline-block">
                        {contact.email}
                      </a>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center gap-2 bg-ink text-white px-8 py-4 rounded text-[15px] font-medium hover:bg-black transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="2" opacity="0.25" />
                            <path d="M12 7a5 5 0 0 0-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                          送信中…
                        </>
                      ) : (
                        <>
                          送信する
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m0 0L7 3m4 4L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </>
                      )}
                    </button>
                    {!hubspotConfigured && (
                      <p className="font-jp text-[12px] text-signal mt-3 leading-[1.7]">
                        ⚠ フォームは現在設定中です。下記メールアドレスに直接ご連絡ください。
                      </p>
                    )}
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
