import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#EEEBF3]/80 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-7 w-7 rounded-lg bg-[#6C5CE7]" aria-hidden />
          <span className="text-[15px] font-extrabold tracking-[-0.03em] text-[#111217]">
            자습ON
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-[13px] font-semibold text-[#4E5968]">
          <Link href="/#features" className="hover:text-[#111217]">기능</Link>
          <Link href="/support" className="hover:text-[#111217]">고객 지원</Link>
          <Link href="/privacy" className="hover:text-[#111217]">개인정보</Link>
        </nav>
      </div>
    </header>
  );
}
