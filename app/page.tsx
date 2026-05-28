import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import {
  BarChart3,
  BellRing,
  CheckCircle2,
  ChevronRight,
  Flame,
  GraduationCap,
  ImageIcon,
  LockKeyhole,
  Palette,
  ShieldCheck,
  Sparkles,
  Sprout,
  Star,
  Timer,
  Trophy,
  WandSparkles,
} from 'lucide-react';

const growthStages = [
  { image: '/studyon/rpg/stage_01.png', title: '새싹', label: '첫 입실' },
  { image: '/studyon/rpg/stage_02.png', title: '잎새', label: '3일 연속' },
  { image: '/studyon/rpg/stage_03.png', title: '줄기', label: '퀘스트 완료' },
  { image: '/studyon/rpg/stage_04.png', title: '꽃봉오리', label: '목표 달성' },
  { image: '/studyon/rpg/stage_05.png', title: '만개', label: '레벨업' },
];

const features = [
  {
    icon: LockKeyhole,
    title: '집중 모드',
    desc: '공부 중에는 자습ON 안에서 목표와 기록에만 머물도록 흐름을 설계했습니다.',
  },
  {
    icon: Trophy,
    title: '퀘스트와 포인트',
    desc: '입실, 계획 완료, 주간 복습을 경험치와 포인트로 연결해 동기를 이어갑니다.',
  },
  {
    icon: Palette,
    title: '테마 커스터마이징',
    desc: '목표 대학, 배경 이미지, 컬러 테마, 캐릭터 성장 상태를 학생이 직접 고릅니다.',
  },
  {
    icon: BarChart3,
    title: '주간 리포트',
    desc: '이번 주 공부량과 과목 균형을 그래프와 달성률로 바로 확인합니다.',
  },
];

const themeCards = [
  { image: '/studyon/theme/theme_mint.png', title: 'Mint Focus', tone: '차분한 시작' },
  { image: '/studyon/theme/theme_sky.png', title: 'Sky Goal', tone: '목표 대학 배경' },
  { image: '/studyon/theme/theme_coral.png', title: 'Coral Boost', tone: '퀘스트 몰입' },
  { image: '/studyon/theme/theme_night.png', title: 'Night Study', tone: '야간 자습' },
];

const weeklyBars = [54, 72, 61, 88, 76, 94, 67];

export default function HomePage() {
  return (
    <>
      <section className="hero-stage">
        <Image
          src="/studyon/app/lockscreen.jpg"
          alt=""
          fill
          priority
          className="hero-stage__bg"
          sizes="100vw"
        />
        <div className="hero-stage__veil" />
        <div className="hero-stage__content">
          <div className="hero-copy">
            <span className="eyebrow">
              <Sparkles className="h-4 w-4" aria-hidden />
              자습실 집중을 RPG처럼 키우는 학습 앱
            </span>
            <h1>자습ON</h1>
            <p>
              핸드폰을 켰을 때 공부 흐름이 끊기지 않도록, 입실부터 집중 모드,
              퀘스트, 포인트, 성장 캐릭터, 주간 리포트까지 한 화면에서 이어집니다.
            </p>
            <div className="hero-actions">
              <Link href="#experience" className="button button-dark">
                업데이트 보기
                <ChevronRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/support" className="button button-light">
                고객 지원
              </Link>
            </div>
          </div>

          <div className="hero-product" aria-label="자습ON 앱 화면 미리보기">
            <div className="phone phone-main">
              <div className="phone-screen">
                <div className="status-row">
                  <span>오늘의 집중</span>
                  <strong>Lv. 12</strong>
                </div>
                <div className="focus-ring">
                  <Image
                    src="/studyon/rpg/stage_04.png"
                    alt="성장 중인 자습ON 캐릭터"
                    width={210}
                    height={250}
                    priority
                  />
                </div>
                <div className="mission-panel">
                  <p>오늘의 퀘스트</p>
                  <strong>수학 90분 집중</strong>
                  <span>+120 XP · +30 point</span>
                </div>
                <div className="mini-tabs" aria-hidden>
                  <span className="active" />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
            <div className="floating-card card-study">
              <Timer className="h-5 w-5" aria-hidden />
              <div>
                <span>집중 타이머</span>
                <strong>01:28:16</strong>
              </div>
            </div>
            <div className="floating-card card-streak">
              <Flame className="h-5 w-5" aria-hidden />
              <div>
                <span>연속 자습</span>
                <strong>7일</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section section-tight">
        <div className="section-head">
          <span className="eyebrow dark">
            <WandSparkles className="h-4 w-4" aria-hidden />
            Legend Update
          </span>
          <h2>켜놓고 방치하는 앱이 아니라, 공부하게 만드는 앱으로.</h2>
          <p>
            이번 랜딩은 실제 업데이트 방향을 그대로 보여줍니다. 집중을 막는 흐름은 줄이고,
            보상과 커스터마이징은 학생이 매일 만지고 싶게 설계했습니다.
          </p>
        </div>

        <div className="feature-grid">
          {features.map(({ icon: Icon, title, desc }) => (
            <article className="feature-card" key={title}>
              <div className="feature-icon">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div className="copy-block">
          <span className="eyebrow dark">
            <Sprout className="h-4 w-4" aria-hidden />
            Growth RPG
          </span>
          <h2>공부하면 캐릭터가 자랍니다.</h2>
          <p>
            출석, 집중 시간, 목표 달성, 주간 복습이 경험치로 바뀝니다. 학생은 퀘스트를
            완료하면서 새싹을 키우고, 포인트로 테마와 꾸미기 요소를 열 수 있습니다.
          </p>
          <div className="quest-list">
            {[
              '입실 후 30분 무중단 집중',
              '오늘 목표 3개 중 2개 완료',
              '주간 리포트 확인 후 회고 작성',
            ].map((quest) => (
              <div key={quest}>
                <CheckCircle2 className="h-5 w-5" aria-hidden />
                <span>{quest}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="growth-lane">
          {growthStages.map((stage, index) => (
            <article className="growth-card" key={stage.title}>
              <span>{stage.label}</span>
              <Image src={stage.image} alt={`${stage.title} 캐릭터`} width={180} height={180} />
              <strong>{stage.title}</strong>
              <small>Stage {index + 1}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section theme-section">
        <div className="section-head compact">
          <span className="eyebrow dark">
            <ImageIcon className="h-4 w-4" aria-hidden />
            Custom Theme
          </span>
          <h2>목표와 취향을 화면에 걸어둡니다.</h2>
          <p>
            대학 로고, 동기부여 사진, 야간 자습 배경처럼 학생이 직접 고른 이미지가
            공부 시작 화면의 분위기를 만듭니다.
          </p>
        </div>
        <div className="theme-grid">
          {themeCards.map((theme) => (
            <article className="theme-card" key={theme.title}>
              <Image src={theme.image} alt={`${theme.title} 테마`} width={520} height={292} />
              <div>
                <strong>{theme.title}</strong>
                <span>{theme.tone}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dashboard-section">
        <div className="dashboard-panel">
          <div className="dashboard-top">
            <div>
              <span>Weekly Report</span>
              <strong>이번 주 24시간 30분</strong>
            </div>
            <Star className="h-6 w-6" aria-hidden />
          </div>
          <div className="bar-chart" aria-label="요일별 공부량 그래프">
            {weeklyBars.map((height, index) => (
              <span key={index} style={{ '--bar-height': `${height}%` } as CSSProperties} />
            ))}
          </div>
          <div className="dashboard-metrics">
            <div>
              <span>목표 달성</span>
              <strong>88%</strong>
            </div>
            <div>
              <span>획득 XP</span>
              <strong>1,840</strong>
            </div>
            <div>
              <span>포인트</span>
              <strong>420P</strong>
            </div>
          </div>
        </div>
        <div className="copy-block">
          <span className="eyebrow dark">
            <BarChart3 className="h-4 w-4" aria-hidden />
            Study Analytics
          </span>
          <h2>막대그래프처럼 바로 읽히는 공부 기록.</h2>
          <p>
            이번 주에 얼마나 공부했는지, 어느 과목이 부족한지, 목표를 얼마나 달성했는지
            학생과 학원이 같은 데이터로 확인합니다.
          </p>
          <div className="signal-list">
            <span>과목별 균형</span>
            <span>연속 공부일</span>
            <span>목표 달성률</span>
            <span>입실 리듬</span>
          </div>
        </div>
      </section>

      <section className="section safety-section">
        <div className="safety-card">
          <ShieldCheck className="h-8 w-8" aria-hidden />
          <h2>심사와 운영에 필요한 페이지까지 정리했습니다.</h2>
          <p>
            개인정보 처리방침과 고객 지원 페이지를 같은 도메인에서 제공해 App Store
            심사 중 404가 발생하지 않도록 구성합니다.
          </p>
          <div className="hero-actions centered">
            <Link href="/privacy" className="button button-dark">
              개인정보 처리방침
            </Link>
            <Link href="/support" className="button button-light">
              고객 지원
            </Link>
          </div>
        </div>
      </section>

      <section id="download" className="final-cta">
        <div>
          <GraduationCap className="h-8 w-8" aria-hidden />
          <h2>오늘의 자습을 켜는 순간, 성장도 같이 시작됩니다.</h2>
          <p>자습ON은 학원 자습실과 학생의 공부 루틴을 하나의 경험으로 연결합니다.</p>
          <a
            href="mailto:hyphendev2025@gmail.com?subject=%5B%EC%9E%90%EC%8A%B5ON%5D%20%EB%8F%84%EC%9E%85%20%EB%AC%B8%EC%9D%98"
            className="button button-dark"
          >
            도입 문의
            <BellRing className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </section>
    </>
  );
}
