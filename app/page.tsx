import Link from 'next/link';
import {
  Timer,
  CalendarClock,
  LineChart,
  MapPin,
  Trophy,
  BellRing,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const features = [
  {
    icon: Timer,
    title: '공부 시간 자동 기록',
    desc: '타이머를 누르는 순간부터 과목·쉬는 시간·집중 패턴까지 자동 기록됩니다.',
  },
  {
    icon: MapPin,
    title: '실시간 좌석 현황',
    desc: '빈 자리, 공부 중, 휴식 중 상태를 실시간으로 확인하고 원하는 자리에 바로 착석.',
  },
  {
    icon: CalendarClock,
    title: '오늘의 계획과 추천',
    desc: '학원 데이터를 바탕으로 오늘 집중할 과목과 분량을 알려드립니다.',
  },
  {
    icon: LineChart,
    title: '주간·월간 리포트',
    desc: '공부 시간, 목표 달성률, 과목 밸런스를 한눈에. 부모·선생님과도 공유 가능.',
  },
  {
    icon: Trophy,
    title: '학원 내 랭킹',
    desc: '같은 공간에서 공부하는 친구들과 건강하게 경쟁하며 동기를 유지합니다.',
  },
  {
    icon: BellRing,
    title: '똑똑한 알림',
    desc: '입실/퇴실·목표 달성·휴식 타이밍 등 필요한 순간에만 조용히 알려줍니다.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E1F6] bg-white/70 px-3 py-1 text-[12px] font-semibold tracking-tight text-[#6C5CE7] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              학원 자습실 전용 학습 관리
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] text-[#111217] sm:text-6xl">
              집중은 스스로,
              <br className="hidden sm:inline" />
              기록은 <span className="text-[#6C5CE7]">자습ON</span>이.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-[#4E5968] sm:text-[17px]">
              공부 시간 자동 측정, 좌석 현황, 오늘의 목표, 학원 내 랭킹까지.
              <br className="hidden sm:inline" />
              한 앱에서 학습의 리듬을 만드세요.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="#download"
                className="press-scale inline-flex items-center justify-center rounded-full bg-[#111217] px-6 py-3 text-[14px] font-bold text-white hover:bg-black"
              >
                앱 다운받기
              </Link>
              <Link
                href="#features"
                className="press-scale inline-flex items-center justify-center rounded-full border border-[#EEEBF3] bg-white px-6 py-3 text-[14px] font-bold text-[#111217] hover:border-[#D9D5E8]"
              >
                기능 둘러보기
              </Link>
            </div>
            <p className="mt-4 text-[12px] text-[#8B95A1]">
              iOS · Android 출시 준비 중
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 text-center">
            {[
              { k: '자동', v: '공부 시간 기록' },
              { k: '실시간', v: '좌석 현황' },
              { k: '데이터로', v: '학습 인사이트' },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-[#EEEBF3] bg-white/80 p-4 backdrop-blur"
              >
                <div className="text-[13px] font-bold text-[#6C5CE7]">{s.k}</div>
                <div className="mt-1 text-[13px] font-semibold text-[#111217]">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-2xl">
            <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#6C5CE7]">
              Features
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-[#111217] sm:text-4xl">
              학원 자습실을 위한
              <br />
              정밀한 학습 도구.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#4E5968]">
              자습ON은 학원 운영 데이터와 학생의 실시간 학습 흐름을 이어 붙여, 공부의
              맥락을 놓치지 않게 돕습니다.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-[#EEEBF3] bg-white p-6 hover:border-[#D9D5E8] hover:shadow-[0_10px_30px_-12px_rgba(108,92,231,0.25)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0EEFF] text-[#6C5CE7]">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-[16px] font-bold tracking-[-0.02em] text-[#111217]">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#4E5968]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#6C5CE7]">
                Privacy First
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-[#111217] sm:text-4xl">
                학생 데이터는
                <br />
                꼭 필요한 만큼만.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#4E5968]">
                자습ON은 학습 관리에 필요한 최소한의 정보만 수집하고, 학원 관리자 외에
                외부 어떤 서비스에도 판매·공유하지 않습니다. 모든 통신은 HTTPS로
                암호화되며, 저장된 자격 증명은 OS 보안 저장소에 보관됩니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/privacy"
                  className="press-scale inline-flex items-center justify-center rounded-full border border-[#111217] bg-[#111217] px-5 py-2.5 text-[13px] font-bold text-white hover:bg-black"
                >
                  개인정보 처리방침 보기
                </Link>
                <Link
                  href="/support"
                  className="press-scale inline-flex items-center justify-center rounded-full border border-[#EEEBF3] bg-white px-5 py-2.5 text-[13px] font-bold text-[#111217] hover:border-[#D9D5E8]"
                >
                  고객 지원
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                { icon: ShieldCheck, k: '최소 수집', v: '아이디·이름·학번·전화번호(선택)·학습 기록' },
                { icon: ShieldCheck, k: '암호화 전송', v: '모든 API 통신은 TLS 1.2+ 이상' },
                { icon: ShieldCheck, k: '안전한 저장', v: '토큰은 iOS Keychain / Android Keystore' },
                { icon: ShieldCheck, k: '제3자 공유 없음', v: '광고·마케팅 네트워크에 공유하지 않음' },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex items-start gap-3 rounded-2xl border border-[#EEEBF3] bg-white p-4"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EAF7F1] text-[#00B894]">
                    <row.icon className="h-4 w-4" aria-hidden />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#111217]">{row.k}</p>
                    <p className="mt-0.5 text-[13px] text-[#4E5968]">{row.v}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-[#111217] sm:text-5xl">
            오늘, 집중의 리듬을 시작하세요.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[#4E5968] sm:text-[17px]">
            자습ON은 iOS와 Android 앱 스토어에 곧 출시됩니다. 사전 체험을 원하시는 학원
            운영자는 아래로 연락 주세요.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:hyphendev2025@gmail.com?subject=%5B%EC%9E%90%EC%8A%B5ON%5D%20%EC%82%AC%EC%A0%84%20%EC%B2%B4%ED%97%98%20%EB%AC%B8%EC%9D%98"
              className="press-scale inline-flex items-center justify-center rounded-full bg-[#6C5CE7] px-7 py-3 text-[14px] font-bold text-white hover:bg-[#5A4BD1]"
            >
              학원 운영자 문의
            </a>
            <Link
              href="/support"
              className="press-scale inline-flex items-center justify-center rounded-full border border-[#EEEBF3] bg-white px-7 py-3 text-[14px] font-bold text-[#111217] hover:border-[#D9D5E8]"
            >
              자주 묻는 질문
            </Link>
          </div>
          <p className="mt-4 text-[12px] text-[#8B95A1]">
            App Store · Google Play 출시 예정
          </p>
        </div>
      </section>
    </>
  );
}
