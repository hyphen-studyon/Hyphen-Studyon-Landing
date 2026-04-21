import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[#EEEBF3] bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded-md bg-[#6C5CE7]" aria-hidden />
          <span className="text-[14px] font-extrabold tracking-[-0.03em] text-[#111217]">
            자습ON
          </span>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[#4E5968]">
          <Link href="/support" className="hover:text-[#111217]">고객 지원</Link>
          <Link href="/privacy" className="hover:text-[#111217]">개인정보 처리방침</Link>
          <a href="mailto:hyphendev2025@gmail.com" className="hover:text-[#111217]">hyphendev2025@gmail.com</a>
        </nav>
        <p className="text-[12px] text-[#8B95A1]">© 2026 hyphen. All rights reserved.</p>
      </div>
    </footer>
  );
}
