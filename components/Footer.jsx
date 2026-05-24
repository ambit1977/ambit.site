import Link from 'next/link';
import { content } from '../lib/content';

export default function Footer() {
  const { services } = content;

  return (
    <footer className="bg-paper border-t border-hair">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12 md:mb-16">
          {/* Logo / tagline */}
          <div className="md:col-span-4">
            <Link href="/" className="wordmark text-[20px] block mb-3">AMBIT</Link>
            <p className="font-jp text-[13px] leading-[1.8] text-sub max-w-[280px]">
              データを、事業の意思決定言語にする。
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <div className="cat-label mb-4">Services</div>
            <ul className="space-y-2.5">
              {services.items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}/`}
                    className="font-jp text-[14px] text-ink underline-hover"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="cat-label mb-4">Contact</div>
            <ul className="space-y-2.5">
              <li>
                <Link href="/contact/" className="font-jp text-[14px] text-ink underline-hover">
                  お問い合わせフォーム →
                </Link>
              </li>
              <li>
                <a href="mailto:info@ambit.go2020.tokyo" className="font-mono text-[13px] text-ink underline-hover">
                  info@ambit.go2020.tokyo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 md:pt-10 border-t border-hair flex flex-col md:flex-row md:items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-sub tracking-[0.12em] uppercase">
            © {new Date().getFullYear()} AMBIT. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-sub tracking-[0.12em] uppercase">
            Data Governance × Web Analytics × AdTech
          </p>
        </div>
      </div>
    </footer>
  );
}
