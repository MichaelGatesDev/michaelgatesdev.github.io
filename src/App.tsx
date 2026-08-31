import { useEffect, useState } from "react";
import "./App.css";
import {
  languages,
  useLanguageContext,
} from "./contexts/LanguageContext";

type Locale = "en" | "ja";
type Theme = "light" | "dark";

const copy = {
  en: {
    nav: {
      experience: "Experience",
      expertise: "Expertise",
      mobileApps: "Mobile Apps",
      contact: "Contact",
      resume: "Resume",
      label: "Primary navigation",
    },
    switchLanguage: "Switch to Japanese",
    switchToDark: "Switch to dark mode",
    switchToLight: "Switch to light mode",
    skip: "Skip to content",
    eyebrow: "Game & Full-Stack Engineer / Tokyo, Japan",
    headline: "Online game systems for console and PC.",
    introduction:
      "Software engineer with 6+ years of experience building networking technology, online services, and cross-platform applications.",
    languages: "English (native) / Japanese (JLPT N2)",
    sections: {
      gameDevelopment: "Game Development",
      mobileApps: "Mobile Apps",
      experience: "Experience",
      expertise: "Technical Expertise",
      education: "Education",
      contact: "Contact",
    },
    focus: [
      {
        title: "Networking & Services",
        description:
          "Game SDKs, web servers, and backend services built for production networking.",
      },
      {
        title: "Platform Integration",
        description:
          "Online service integration for PlayStation Network and Steam across console and desktop targets.",
      },
      {
        title: "Production Quality",
        description:
          "Automated testing, CI/CD, security remediation, and maintainable technical documentation.",
      },
    ],
    chariChizu: {
      platform: "Android / Personal Project",
      description:
        "Chari Chizu helps cyclists find legal bike parking around Tokyo and understand where bicycle parking is prohibited.",
      features: [
        "Browse official parking locations and practical details on an interactive map.",
        "Filter locations by cost, favorites, and current opening status.",
        "Review prohibited areas alongside guidance from Tokyo wards.",
      ],
      parkingView: "Legal parking locations",
      parkingAlt:
        "Chari Chizu map showing a bicycle parking location near Yurakucho Station",
      bannedView: "Prohibited parking guidance",
      bannedAlt:
        "Chari Chizu map showing a prohibited bicycle parking area in Arakawa City",
    },
    current: "Jun 2024 - Present",
    softGearRole: "Full-stack Developer / Tokyo",
    softGearPoints: [
      "Develop game networking SDKs, web servers, and services using the STRIX networking framework.",
      "Integrate online services including PlayStation Network and Steam.",
      "Maintain automated tests and bilingual English-Japanese technical documentation.",
    ],
    technergeticsDates: "Jul 2020 - Sep 2023",
    technergeticsRoles: [
      {
        title: "Associate Full-stack Developer",
        dates: "May 2022 - Sep 2023",
        points: [
          "Built cross-platform products with React Native, Kotlin, TypeScript, and GraphQL.",
          "Led technical delivery and introduced CI/CD with Jest, JUnit, and SonarQube.",
        ],
      },
      {
        title: "Junior Full-stack Developer",
        dates: "Jul 2020 - May 2022",
        points: [
          "Developed a large-scale Django application across its backend and frontend.",
          "Raised test coverage above 80% and resolved security vulnerabilities for certification.",
        ],
      },
    ],
    super8Dates: "Oct 2019 - Jan 2022",
    super8Role: "Full-stack Developer / Remote",
    super8Points: [
      "Designed and delivered a customized Omeka platform from requirements through deployment.",
    ],
    programming: "Programming",
    gameTechnology: "Game Technology",
    platforms: "Platforms",
    applications: "Backend & Applications",
    delivery: "Delivery",
    degree: "Bachelor of Science in Information Technology",
    educationDates: "Aug 2016 - May 2020",
    naganumaSchool: "The Naganuma School, Tokyo School of Japanese Language",
    naganumaCourse: "Communication Japanese Course",
    naganumaDates: "Oct 2023 - Jun 2024",
    contactTitle: "Professional inquiries",
    contactBody:
      "For opportunities, collaboration, or more information about my work, contact me by email or LinkedIn.",
    location: "Based in Tokyo, Japan",
  },
  ja: {
    nav: {
      experience: "職歴",
      expertise: "専門分野",
      mobileApps: "モバイルアプリ",
      contact: "お問い合わせ",
      resume: "履歴書",
      label: "メインナビゲーション",
    },
    switchLanguage: "Switch to English",
    switchToDark: "ダークモードに切り替える",
    switchToLight: "ライトモードに切り替える",
    skip: "本文へ移動",
    eyebrow: "ゲーム・フルスタックエンジニア / 東京",
    headline: "コンソール・PC向けオンラインゲームシステム。",
    introduction:
      "ネットワーク技術、オンラインサービス、クロスプラットフォームアプリケーションの開発に6年以上携わるソフトウェアエンジニアです。",
    languages: "英語（ネイティブ）/ 日本語（JLPT N2）",
    sections: {
      gameDevelopment: "ゲーム開発",
      mobileApps: "モバイルアプリ",
      experience: "職歴",
      expertise: "技術スキル",
      education: "学歴",
      contact: "お問い合わせ",
    },
    focus: [
      {
        title: "ネットワーク・サービス",
        description:
          "本番環境向けのゲームSDK、Webサーバー、バックエンドサービスを開発。",
      },
      {
        title: "プラットフォーム連携",
        description:
          "コンソール・デスクトップ向けのPlayStation Network、Steamオンラインサービス連携。",
      },
      {
        title: "品質・運用",
        description:
          "自動テスト、CI/CD、脆弱性対応、保守性の高い技術ドキュメントを重視。",
      },
    ],
    chariChizu: {
      platform: "Android / 個人プロジェクト",
      description:
        "Chari Chizuは、東京で合法的に駐輪できる場所を探し、駐輪禁止区域の案内を確認できるAndroidアプリです。",
      features: [
        "公式の駐輪場と利用情報をインタラクティブな地図で確認できます。",
        "料金、お気に入り、営業時間で駐輪場を絞り込めます。",
        "駐輪禁止区域と東京都内の各区が提供する案内を確認できます。",
      ],
      parkingView: "駐輪可能な場所",
      parkingAlt: "有楽町駅付近の駐輪場を表示するChari Chizuの地図",
      bannedView: "駐輪禁止区域の案内",
      bannedAlt: "荒川区の駐輪禁止区域を表示するChari Chizuの地図",
    },
    current: "2024年6月 - 現在",
    softGearRole: "フルスタック開発者 / 東京",
    softGearPoints: [
      "STRIXネットワークフレームワークを用いたゲームSDK、Webサーバー、サービスを開発。",
      "PlayStation Network、Steamなどのオンラインサービス連携を実装。",
      "自動テストおよび日英の技術ドキュメントを作成・保守。",
    ],
    technergeticsDates: "2020年7月 - 2023年9月",
    technergeticsRoles: [
      {
        title: "アソシエイト・フルスタック開発者",
        dates: "2022年5月 - 2023年9月",
        points: [
          "React Native、Kotlin、TypeScript、GraphQLを用いたクロスプラットフォーム開発。",
          "技術リードとして、Jest、JUnit、SonarQubeを用いたCI/CDを導入。",
        ],
      },
      {
        title: "ジュニア・フルスタック開発者",
        dates: "2020年7月 - 2022年5月",
        points: [
          "大規模Djangoアプリケーションのバックエンド・フロントエンドを開発。",
          "テストカバレッジ80%以上を達成し、認証取得に向けた脆弱性対応を実施。",
        ],
      },
    ],
    super8Dates: "2019年10月 - 2022年1月",
    super8Role: "フルスタック開発者 / リモート",
    super8Points: [
      "Omekaをベースにしたカスタムプラットフォームを要件定義からデプロイまで一貫して担当。",
    ],
    programming: "プログラミング",
    gameTechnology: "ゲーム技術",
    platforms: "プラットフォーム",
    applications: "バックエンド・アプリケーション",
    delivery: "開発・運用",
    degree: "情報技術学 理学士",
    educationDates: "2016年8月 - 2020年5月",
    naganumaSchool: "長沼スクール 東京日本語学校",
    naganumaCourse: "コミュニケーション日本語コース",
    naganumaDates: "2023年10月 - 2024年6月",
    contactTitle: "仕事に関するお問い合わせ",
    contactBody:
      "採用、協業、業務内容に関するお問い合わせは、メールまたはLinkedInよりご連絡ください。",
    location: "東京を拠点に活動",
  },
};

function App() {
  const { language, setLanguageContext } = useLanguageContext();
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light",
  );
  const locale: Locale = language.languageCode.startsWith("ja") ? "ja" : "en";
  const text = copy[locale];

  useEffect(() => {
    document.title =
      locale === "ja"
        ? "Michael Gates | ソフトウェアエンジニア"
        : "Michael Gates | Software Engineer";

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute(
      "content",
      locale === "ja"
        ? "東京を拠点にゲーム、プラットフォーム、フルスタックプロダクトを開発するバイリンガルソフトウェアエンジニア、Michael Gatesのポートフォリオ。"
        : "Michael Gates is a bilingual software engineer in Tokyo building games, platforms, and full-stack products.",
    );
  }, [locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#111312" : "#f4f3ef");

    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {
      // Ignore blocked storage; the in-memory selection remains active.
    }
  }, [theme]);

  const toggleLanguage = () => {
    setLanguageContext(locale === "en" ? languages[1] : languages[0]);
  };

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        {text.skip}
      </a>

      <header className="site-header">
        <nav className="nav container" aria-label={text.nav.label}>
          <a className="wordmark" href="#top">
            Michael Gates
          </a>
          <div className="nav-actions">
            <div className="nav-links">
              <a href="#mobile-apps">{text.nav.mobileApps}</a>
              <a href="#experience">{text.nav.experience}</a>
              <a href="#expertise">{text.nav.expertise}</a>
              <a href="#contact">{text.nav.contact}</a>
              <a
                href="https://drive.google.com/file/d/1f26YGZ4yx7CM3brDVKh5tgCGEidUaGMv/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                {text.nav.resume}
              </a>
            </div>
            <div className="nav-controls">
              <button
                className="theme-toggle"
                type="button"
                aria-label={
                  theme === "light" ? text.switchToDark : text.switchToLight
                }
                onClick={() =>
                  setTheme((currentTheme) =>
                    currentTheme === "light" ? "dark" : "light",
                  )
                }
              >
                {theme === "light" ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.2 15.2A8 8 0 0 1 8.8 3.8a8 8 0 1 0 11.4 11.4Z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                  </svg>
                )}
              </button>
              <button
                className="language-toggle"
                type="button"
                aria-label={text.switchLanguage}
                onClick={toggleLanguage}
              >
                {locale === "en" ? "日本語" : "English"}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero container" id="top">
          <div>
            <p className="eyebrow">{text.eyebrow}</p>
            <h1>{text.headline}</h1>
          </div>
          <div className="hero-aside">
            <p>{text.introduction}</p>
            <p>{text.languages}</p>
            <div className="contact-links">
              <a href="mailto:michaelgatesdev@gmail.com">Email</a>
              <a
                href="https://www.linkedin.com/in/michaelgatesdev/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/MichaelGatesDev/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://drive.google.com/file/d/1f26YGZ4yx7CM3brDVKh5tgCGEidUaGMv/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                {text.nav.resume}
              </a>
            </div>
          </div>
        </section>

        <section id="game-development">
          <div className="section-grid container">
            <h2 className="section-title">{text.sections.gameDevelopment}</h2>
            <div className="focus-grid">
              {text.focus.map((item, index) => (
                <article className="focus-item" key={item.title}>
                  <span className="focus-number">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="mobile-apps">
          <div className="section-grid container">
            <h2 className="section-title">{text.sections.mobileApps}</h2>
            <article className="mobile-project">
              <div className="mobile-project-copy">
                <p className="project-kicker">{text.chariChizu.platform}</p>
                <h3>Chari Chizu</h3>
                <p className="project-description">
                  {text.chariChizu.description}
                </p>
                <ul className="project-features">
                  {text.chariChizu.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="app-screenshots">
                <figure>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/chari-chizu-parking.jpg`}
                    alt={text.chariChizu.parkingAlt}
                    loading="lazy"
                  />
                  <figcaption>{text.chariChizu.parkingView}</figcaption>
                </figure>
                <figure>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/chari-chizu-banned-parking.jpg`}
                    alt={text.chariChizu.bannedAlt}
                    loading="lazy"
                  />
                  <figcaption>{text.chariChizu.bannedView}</figcaption>
                </figure>
              </div>
            </article>
          </div>
        </section>

        <section id="experience">
          <div className="section-grid container">
            <h2 className="section-title">{text.sections.experience}</h2>
            <ol className="timeline">
              <li className="timeline-item">
                <div className="timeline-date">{text.current}</div>
                <div>
                  <h3>SOFT GEAR</h3>
                  <p className="role">{text.softGearRole}</p>
                  <ul className="responsibilities">
                    {text.softGearPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-date">{text.technergeticsDates}</div>
                <div>
                  <h3>Technergetics</h3>
                  <div className="company-roles">
                    {text.technergeticsRoles.map((companyRole) => (
                      <div className="company-role" key={companyRole.title}>
                        <div className="role-heading">
                          <h4>{companyRole.title}</h4>
                          <span>{companyRole.dates}</span>
                        </div>
                        <ul className="responsibilities">
                          {companyRole.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-date">{text.super8Dates}</div>
                <div>
                  <h3>Super8Festivals</h3>
                  <p className="role">{text.super8Role}</p>
                  <ul className="responsibilities">
                    {text.super8Points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section id="expertise">
          <div className="section-grid container">
            <h2 className="section-title">{text.sections.expertise}</h2>
            <div className="skill-groups">
              <div className="skill-group">
                <h3>{text.programming}</h3>
                <p>C++ / C# / TypeScript / Python / Java / Kotlin / PHP</p>
              </div>
              <div className="skill-group">
                <h3>{text.gameTechnology}</h3>
                <p>Unreal Engine / Unity / STRIX / Blender</p>
              </div>
              <div className="skill-group">
                <h3>{text.platforms}</h3>
                <p>PlayStation 5 / Nintendo Switch 2 / Windows / macOS / Linux / Steam</p>
              </div>
              <div className="skill-group">
                <h3>{text.applications}</h3>
                <p>
                  Django / React / React Native / GraphQL / Node.js / Spring Boot
                </p>
              </div>
              <div className="skill-group">
                <h3>{text.delivery}</h3>
                <p>Unit & Integration Testing / CI/CD / Git / SonarQube / Technical Documentation</p>
              </div>
            </div>
          </div>
        </section>

        <section id="education">
          <div className="section-grid container">
            <h2 className="section-title">{text.sections.education}</h2>
            <div className="education-list">
              <div className="education-row">
                <div>
                  <h3>{text.naganumaSchool}</h3>
                  <p>{text.naganumaCourse}</p>
                </div>
                <span className="education-year">{text.naganumaDates}</span>
              </div>
              <div className="education-row">
                <div>
                  <h3>SUNY Plattsburgh</h3>
                  <p>{text.degree}</p>
                </div>
                <span className="education-year">{text.educationDates}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="section-grid container">
            <h2 className="section-title">{text.sections.contact}</h2>
            <div className="contact-panel">
              <div>
                <h3>{text.contactTitle}</h3>
                <p>{text.contactBody}</p>
              </div>
              <div className="contact-actions">
                <a
                  className="primary-link"
                  href="mailto:michaelgatesdev@gmail.com"
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/michaelgatesdev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner container">
          <p>&copy; {new Date().getFullYear()} Michael Gates</p>
          <p>{text.location}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
