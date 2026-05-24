import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 header-blur border-b border-hair">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 h-[56px] md:h-[68px] flex items-center justify-between">
        <Link href="/" className="wordmark text-[15px]">AMBIT</Link>
        <nav className="flex items-center gap-4 md:gap-9 text-[13px] md:text-[14px]">
          <Link href="/#about" className="hidden sm:inline underline-hover">About</Link>
          <Link href="/#services" className="underline-hover">Services</Link>
          <Link href="/#engagements" className="hidden md:inline underline-hover">Engagements</Link>
          <Link
            href="/contact/"
            className="ml-0 md:ml-2 inline-flex items-center gap-2 bg-ink text-white px-3 md:px-4 py-2 rounded text-[13px] font-medium hover:bg-black transition"
          >
            Contact
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 6h6m0 0L6 3m3 3L6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}
