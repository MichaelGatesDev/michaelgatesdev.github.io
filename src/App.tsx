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
    eyebrow: "Unreal Engine & Game Engineer / Tokyo, Japan",
    headline: "Unreal Engine frameworks and online game systems for console and PC.",
    introduction:
      "Software engineer specializing in Unreal Engine and game technology, with 6+ years across game frameworks, online services, backend, web, and mobile.",
    languages: "English (native) / Japanese (professional, JLPT N2)",
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
        title: "Unreal Engine Frameworks",
        description:
          "Reusable Unreal Engine 5 plugins and game frameworks in C++ for Nintendo Switch 2, PlayStation 5, and PC.",
      },
      {
        title: "Platform Integration",
        description:
          "PlayStation Network and Steam online services, plus platform-specific debugging on Nintendo Switch 2 and PlayStation 5.",
      },
      {
        title: "Game Servers",
        description:
          "Game servers and RESTful APIs built with Kotlin and Spring Boot, backed by unit and integration tests.",
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
    softGearRole: "Software Engineer / Tokyo (Hybrid)",
    softGearPoints: [
      "Developed a reusable game framework as an Unreal Engine 5 plugin supporting Nintendo Switch 2, PlayStation 5, and PC.",
      "Integrated platform online services, including PlayStation Network and Steam, into the framework.",
      "Troubleshot and debugged platform-specific issues on Nintendo Switch 2 and PlayStation 5.",
      "Built an Unreal Engine test client for testing game features and backend services.",
      "Designed and built game servers and backend services, including RESTful APIs, with Kotlin and Spring Boot.",
      "Wrote and maintained unit and integration tests for clients and servers.",
      "Wrote and translated technical documentation between English and Japanese in Confluence.",
    ],
    technergeticsDates: "Jul 2020 - Sep 2023",
    technergeticsLocation: "Utica, NY",
    technergeticsRoles: [
      {
        title: "Associate Full Stack Software Engineer",
        dates: "May 2022 - Sep 2023",
        points: [
          "Served as team lead and engineering lead across multiple projects.",
          "Developed cross-platform iOS and Android apps with React Native (Expo) and native Kotlin.",
          "Implemented CI/CD pipelines for unit testing (Jest, JUnit) and static code analysis (SonarQube).",
        ],
      },
      {
        title: "Junior Full Stack Software Engineer",
        dates: "Jul 2020 - May 2022",
        points: [
          "Developed backend and frontend features for a large-scale Django web application.",
          "Led development of key new features and presented them to stakeholders.",
          "Helped the project achieve CTF certification by raising test coverage above 80% and remediating CVEs.",
        ],
      },
    ],
    super8Dates: "Oct 2019 - Aug 2022",
    super8Role: "Full Stack Developer / Plattsburgh, NY",
    super8Points: [
      "Owned end-to-end development of an Omeka-based PHP website, from design through testing and deployment.",
      "Designed custom themes and wrote a custom plugin extending Omeka's core functionality.",
    ],
    programming: "Programming",
    gameTechnology: "Game Technology",
    platforms: "Platforms",
    applications: "Backend & Web",
    tools: "Tools",
    ai: "AI",
    degree: "B.S. in Information Technology",
    awards:
      "Outstanding Graduate in Information Technology / Presidential Award for Student Excellence / Student Staff Award",
    educationDates: "Aug 2016 - May 2020",
    naganumaSchool: "The Naganuma School, Tokyo School of Japanese Language",
    naganumaCourse: "Japanese Language Program",
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
    eyebrow: "Unreal Engine・ゲームエンジニア / 東京",
    headline: "コンソール・PC向けのUnreal Engineフレームワークとオンラインゲームシステム。",
    introduction:
      "Unreal Engineを中心としたゲーム技術を専門とするソフトウェアエンジニアです。ゲームフレームワーク、オンラインサービス、バックエンド、Web、モバイル開発に6年以上携わっています。",
    languages: "英語（ネイティブ）/ 日本語（ビジネスレベル、JLPT N2）",
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
        title: "Unreal Engineフレームワーク",
        description:
          "Nintendo Switch 2・PlayStation 5・PC対応の再利用可能なUnreal Engine 5プラグイン・ゲームフレームワークをC++で開発。",
      },
      {
        title: "プラットフォーム連携",
        description:
          "PlayStation Network・Steamのオンラインサービス連携と、Nintendo Switch 2・PlayStation 5での不具合調査・デバッグ。",
      },
      {
        title: "ゲームサーバー",
        description:
          "KotlinとSpring BootによるゲームサーバーとRESTful APIを、単体テスト・結合テストとともに開発。",
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
    softGearRole: "ソフトウェアエンジニア / 東京（ハイブリッド）",
    softGearPoints: [
      "Unreal Engine 5プラグインとして、Nintendo Switch 2・PlayStation 5・PCに対応した再利用可能なゲームフレームワークを開発。",
      "PlayStation Network、Steamなどのプラットフォームオンラインサービスをフレームワークに統合。",
      "Nintendo Switch 2およびPlayStation 5におけるプラットフォーム固有の不具合の調査・デバッグ。",
      "ゲーム機能およびバックエンドサービスの検証用Unreal Engineテストクライアントを開発。",
      "KotlinとSpring Bootを用いて、RESTful APIを含むゲームサーバーおよびバックエンドサービスを設計・開発。",
      "クライアントおよびサーバーの単体テスト・結合テストの作成・保守。",
      "Confluenceにて技術ドキュメントを作成し、英語・日本語間の翻訳を担当。",
    ],
    technergeticsDates: "2020年7月 - 2023年9月",
    technergeticsLocation: "米国ニューヨーク州ユーティカ",
    technergeticsRoles: [
      {
        title: "アソシエイト フルスタックソフトウェアエンジニア",
        dates: "2022年5月 - 2023年9月",
        points: [
          "複数プロジェクトでチームリーダー兼エンジニアリングリードを担当。",
          "React Native（Expo）およびネイティブKotlinを用いて、iOS・Android向けモバイルアプリを開発。",
          "単体テスト（Jest、JUnit）および静的コード解析（SonarQube）のCI/CDパイプラインを構築。",
        ],
      },
      {
        title: "ジュニア フルスタックソフトウェアエンジニア",
        dates: "2020年7月 - 2022年5月",
        points: [
          "大規模なDjango Webアプリケーションのバックエンドおよびフロントエンド開発を担当。",
          "主要な新機能の開発を主導し、ステークホルダー向けにプレゼンテーションを実施。",
          "テストカバレッジを80%以上に向上させ、CVEに対応することで、プロジェクトのCTF認定取得に貢献。",
        ],
      },
    ],
    super8Dates: "2019年10月 - 2022年8月",
    super8Role: "フルスタック開発者 / 米国ニューヨーク州プラッツバーグ",
    super8Points: [
      "OmekaベースのPHP Webサイトについて、設計からテスト・デプロイまで一貫して担当。",
      "カスタムテーマを設計・実装し、Omekaのコア機能を拡張するカスタムプラグインを開発。",
    ],
    programming: "プログラミング言語",
    gameTechnology: "ゲーム技術",
    platforms: "プラットフォーム",
    applications: "バックエンド・Web",
    tools: "ツール",
    ai: "AI",
    degree: "情報技術専攻（理学士）",
    awards:
      "情報技術分野 優秀卒業生賞 / 学長賞（Presidential Award for Student Excellence）/ 学生スタッフ賞",
    educationDates: "2016年8月 - 2020年5月",
    naganumaSchool: "長沼スクール 東京日本語学校",
    naganumaCourse: "日本語課程",
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
  const resumeUrl = `${process.env.PUBLIC_URL}/resume/resume-${locale}.pdf`;

  useEffect(() => {
    document.title =
      locale === "ja"
        ? "Michael Gates | ソフトウェアエンジニア"
        : "Michael Gates | Software Engineer";

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute(
      "content",
      locale === "ja"
        ? "東京を拠点に、Unreal Engineを中心としたゲームフレームワークやオンラインゲームシステムを開発するバイリンガルソフトウェアエンジニア、Michael Gatesのポートフォリオ。"
        : "Michael Gates is a bilingual software engineer in Tokyo specializing in Unreal Engine game frameworks and online game systems.",
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
                href={resumeUrl}
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
                href={resumeUrl}
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
                  <p className="role">{text.technergeticsLocation}</p>
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
                <h3>{text.gameTechnology}</h3>
                <p>Unreal Engine 5 (C++, plugin development) / Unity / Blender</p>
              </div>
              <div className="skill-group">
                <h3>{text.platforms}</h3>
                <p>
                  Nintendo Switch 2 / PlayStation 5 / PC / PlayStation Network /
                  Steam
                </p>
              </div>
              <div className="skill-group">
                <h3>{text.programming}</h3>
                <p>C++ / C# / Kotlin / Java / TypeScript / Python / Rust / PHP</p>
              </div>
              <div className="skill-group">
                <h3>{text.applications}</h3>
                <p>
                  Spring Boot / Django / GraphQL / React / React Native (Expo) /
                  Vite
                </p>
              </div>
              <div className="skill-group">
                <h3>{text.tools}</h3>
                <p>
                  Git / CI/CD / Jest / JUnit / SonarQube / Confluence / Jira /
                  Redmine / YouTrack
                </p>
              </div>
              <div className="skill-group">
                <h3>{text.ai}</h3>
                <p>Claude / Codex</p>
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
                  <p className="education-awards">{text.awards}</p>
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
