import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="site-shell sticky top-0 z-40">
      <div className="mx-auto flex h-14 max-w-[1180px] items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="brand-mark" aria-hidden>ON</span>
          <span className="text-[15px] font-extrabold text-[#14120f]">
            자습ON
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-[13px] font-bold text-[#5f645f]">
          <Link href="/#experience" className="hover:text-[#14120f]">업데이트</Link>
          <Link href="/support" className="hover:text-[#14120f]">고객 지원</Link>
          <Link href="/privacy" className="hidden hover:text-[#14120f] sm:inline">개인정보</Link>
        </nav>
      </div>
    </header>
  );
}
