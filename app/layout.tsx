import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://studyon.hyphen.it.com'),
  title: {
    default: '자습ON — 학원 자습실 스마트 관리',
    template: '%s · 자습ON',
  },
  description:
    '자습ON은 학원 자습실 학습을 자동으로 기록·분석하는 앱입니다. 공부 시간, 좌석, 목표, 랭킹을 한 번에 관리하세요.',
  applicationName: '자습ON',
  keywords: ['자습ON', '자습실 관리', '학원 앱', '공부 시간 기록', '집중 타이머', '학원 자습실', '수학 학원'],
  authors: [{ name: 'hyphen' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://studyon.hyphen.it.com',
    title: '자습ON — 학원 자습실 스마트 관리',
    description:
      '공부 시간 자동 기록, 실시간 좌석 현황, 오늘의 목표와 랭킹까지. 자습ON으로 학습 리듬을 만드세요.',
    siteName: '자습ON',
  },
  twitter: {
    card: 'summary_large_image',
    title: '자습ON — 학원 자습실 스마트 관리',
    description:
      '공부 시간 자동 기록, 실시간 좌석 현황, 오늘의 목표와 랭킹까지.',
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: '#6C5CE7',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-screen antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
