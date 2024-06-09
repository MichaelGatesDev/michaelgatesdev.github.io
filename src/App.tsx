import { Popover } from '@headlessui/react';
import { CodeBracketSquareIcon, FilmIcon } from '@heroicons/react/20/solid';
import LocalizedStrings from 'react-localization';
import './App.css';
import LanguageSelector from './components/LanguageSelector';
import { useLanguageContext } from './contexts/LanguageContext';
import PhotoGallery from './components/PhotoGallery';



const strings = new LocalizedStrings<Strings>({
  "en": {
    me: {
      name: "Michael Gates",
      about: {
        who: {
          title: "About Me",
          body: "I am a fullstack developer, game developer and modder, and a foreign language enthusiast. I am always looking to take on the next opportunity, face new challenges, meet new people, and work diligently towards success.",
        },
        how: {
          title: "My Origin",
          body: "I have been a gamer for as long as I can remember. My passion for video games led me to an early start in software development, creating my first program in VB.net at age 10. In highschool, I attended CV-TEC Plattsburgh, NY and studied Digital Art & Design where I learned the principles of digital media and web programming, as well as 3D design and animation.",
        },
        why: {
          title: "My Goal",
          body: "I aim to build and deliver software and experiences which have a positive lasting impact on its users. I also aim to connect to persons around the globe to share culture and language.",
        },
      },
    },
    navigation: {
      primary: {
        home: "Home",
        about: "About",
        skills: "Skills",
        portfolio: "Portfolio",
        contact: "Contact",
        resume: "Resume",
      },
    },
    skills: {
      generalEngineering: "General Engineering",
      frontend: "Frontend Development",
      backend: "Backend Development",
      game: "Game Development",
      art: "Art & design",
      general: "Misc",
      language: "Language",
    },
    portfolio: {
      programming: "Programming",
      photography: {
        title: "Photography",
        concert: "Concert",
        portrait: "Portrait",
        street: "Street",
        travel: "Travel",
      },
      videography: "Videography"
    },
    contact: "If you have any questions and/or would like to discuss my portfolio in greater detail, please contact me via one of the methods below.",
  } as Strings,
  "ja": {
    me: {
      name: "マイケル・ゲイツ",
      about: {
        who: {
          title: "自己紹介",
          body: "私はフルスタックエンジニアとゲームデベロッパーと外来語オタクです。いつも次の機会を探していて、新しい挑戦を会いたいし、新しい人とも会いたいし、成功を収めるようになりたいです。",
        },
        how: {
          title: "始まり",
          body: "若い時からゲームをやっていて、その理由で「ソフトウェアやゲームなどを作りたいなー」と思って、8歳の時に初めてのプログラムを作りました。高校生の時、CV-TEC Plattsburghの学校に通学してコンピューターアートとかデザインとかウェブプログラミングとか3Dなどを学習しました。",
        },
        why: {
          title: "目標",
          body: "使われるためソフトを作りたいです。色々の国に旅行して文化や国語も勉強したいです。",
        },
      },
    },
    navigation: {
      primary: {
        home: "ホーム",
        about: "自己紹介",
        skills: "経験",
        portfolio: "ポートフォリオ",
        contact: "連絡先",
        resume: "履歴書"
      },
    },
    skills: {
      generalEngineering: "エンジニア",
      frontend: "フロントエンド",
      backend: "バックエンド",
      game: "ゲーム",
      art: "アートとデザイン",
      general: "いろいろ",
      language: "言語",
    },
    portfolio: {
      programming: "プログラミング",
      photography: {
        title: "写真撮影",
        concert: "コンサート",
        portrait: "横顔",
        street: "街頭",
        travel: "旅行",
      },
      videography: "ビデオ撮影"
    },
    contact: "もし質問があれば、ぜひご連絡を送ってください。"
  } as Strings,
});

const skillsFrontend = ["HTML5", "CSS3", "React", "React Native", "Tailwind", "Bootstrap",];
const skillsBackend = ["Javascript", "Typescript", "Python", "Java", "PHP", "Node", "GraphQL", "PostgreSQL", "S3", "AI/ML", "Omeka", "Django", "Laravel", "Spring",];
const skillsGeneralEngineering = ["Jira", "Confluence", "YouTrack", "GitLab", "GitHub", "BitBucket", "Docker", "CI/CD", "Unit Testing", "E2E Testing", "Figma", "UML",];
const skillsGameDev = ["Unity", "Unreal Engine", "C#", "C++", "Blender", "Audacity", "Ultimate Unwrap 3D", "Networking"];
const skillsDesign = ["Adobe Photoshop", "Adobe Lightroom Classic", "Adobe Premiere Pro", "Adobe Illustrator", "Adobe XD", "Sony Vegas", "OBS Studio", "Photography", "Videography"];
const skillsGeneral = ["Leadership", "Course Instruction", "Social Media", "Translation", "Interpretation", "Transcription", "Audio/Visual", "Computer Hardware",];
const skillsLanguages = ["English (native)", "Japanese (JLPT N2)", "Spanish (elementary)", "Korean (elementary)"];

function App() {
  const { language, } = useLanguageContext();
  strings.setLanguage(language.languageCode.split("-")[0]);


  const skills: Skill[] = [
    {
      title: strings.skills.generalEngineering,
      subref: "generaleng",
      skills: skillsGeneralEngineering,
    },
    {
      title: strings.skills.frontend,
      subref: "frontend",
      skills: skillsFrontend,
    },
    {
      title: strings.skills.backend,
      subref: "backend",
      skills: skillsBackend,
    },
    {
      title: strings.skills.game,
      subref: "gamedev",
      skills: skillsGameDev,
    },
    {
      title: strings.skills.art,
      subref: "design",
      skills: skillsDesign,
    },
    {
      title: strings.skills.general,
      subref: "general",
      skills: skillsGeneral,
    },
    {
      title: strings.skills.language,
      subref: "languages",
      skills: skillsLanguages,
    },
  ];

  const projects: Project[] = [
    {
      title: "VRU (UE)",
      description: "VRU is an Unreal Engine remake of the once-famous VRMMO 'vSide' (formerly known as The PCD Lounge).",
      preview: process.env.PUBLIC_URL + '/images/project-vru-ue.png',
      source: undefined,
      demo: "https://www.youtube.com/watch?v=B6eXKCLvZ2c",
    },
    {
      title: "VRU (Unity)",
      description: "VRU is a Unity remake of the once-famous VRMMO 'vSide' (formerly known as The PCD Lounge). ",
      source: undefined,
      preview: process.env.PUBLIC_URL + '/images/project-vru-unity.jpg',
      demo: "https://www.youtube.com/watch?v=sqcJ-hL9tbo",
    },
    {
      title: "VRU Website",
      description: "The VRU website is a remake of the once-famous VRMMO 'vSide' (formerly known as The PCD Lounge) website.",
      source: undefined,
      preview: process.env.PUBLIC_URL + '/images/project-vru-web.png',
      demo: "https://www.youtube.com/watch?v=dElNhXw_J8I",
    },
    {
      title: "Super8Festivals",
      description: "Super8Festivals is a book written by Isabel Arredondo. This Omeka-based website serves supplemental material and is a resource for educational use.",
      source: "https://github.com/Super8Festivals",
      preview: process.env.PUBLIC_URL + '/images/project-s8f.png',
      demo: "",
    },
    {
      title: "Tutoring Hub",
      description: "Tutoring Hub is a web platform which allows students to find the best tutor for them.",
      source: "https://github.com/coding-hub-org/tutoring-hub",
      preview: process.env.PUBLIC_URL + '/images/project-tutoring-hub.png',
      demo: "",
    },
  ];

  const photoSections: PhotoSection[] = [
    {
      title: strings.portfolio.photography.concert,
      photos: [
        {
          title: "",
          url: process.env.PUBLIC_URL + '/images/photos/concert/20240523-DSC09376 (Small).jpg',
        },
        {
          title: "",
          url: process.env.PUBLIC_URL + '/images/photos/concert/20180706-IMG_1491 (Small).jpg',
        },
        {
          title: "",
          url: process.env.PUBLIC_URL + '/images/photos/concert/20180707-IMG_2585 (Small).jpg',
        },
        {
          title: "",
          url: process.env.PUBLIC_URL + '/images/photos/concert/20180707-IMG_2715 (Small).jpg',
        },
      ],
    },
    {
      title: strings.portfolio.photography.portrait,
      photos: [
        {
          title: "",
          url: process.env.PUBLIC_URL + '/images/photos/portrait/20180513-IMG_8140 (Small).jpg',
        },
        {
          title: "",
          url: process.env.PUBLIC_URL + '/images/photos/portrait/20180513-IMG_8397 (Small).jpg',
        },
        {
          title: "",
          url: process.env.PUBLIC_URL + '/images/photos/portrait/20190212-IMG_7303 (Small).jpg',
        },
        {
          title: "",
          url: process.env.PUBLIC_URL + '/images/photos/portrait/20240301-DSC07038 (Small).jpg',
        },
      ],
    },
    {
      title: strings.portfolio.photography.street,
      photos: [
        {
          title: "",
          url: process.env.PUBLIC_URL + '/images/photos/street/20181123-IMG_5893 (Small).jpg',
        },
        {
          title: "",
          url: process.env.PUBLIC_URL + '/images/photos/street/DSC00170 (Small).jpg',
        },
        {
          title: "",
          url: process.env.PUBLIC_URL + '/images/photos/street/20240315-DSC07092 (Small).jpg',
        },
        {
          title: "",
          url: process.env.PUBLIC_URL + '/images/photos/street/20240428-DSC07845 (Small).jpg',
        },
      ],
    },
    {
      title: strings.portfolio.photography.travel,
      photos: [
        {
          title: "",
          url: process.env.PUBLIC_URL + '/images/photos/travel/20221106-DSC03436 (Small).jpg',
        },
        {
          title: "",
          url: process.env.PUBLIC_URL + '/images/photos/travel/20221104-DSC03187 (Small).jpg',
        },
        {
          title: "",
          url: process.env.PUBLIC_URL + '/images/photos/travel/20191218-IMG_1802 (Small).jpg',
        },
        {
          title: "",
          url: process.env.PUBLIC_URL + '/images/photos/travel/20240401-DSC07740 (Small).jpg',
        },
      ],
    },
  ];

  const videos: Video[] = [
    { url: "https://www.youtube.com/embed/LxZ59e_ZPQ8", },
    { url: "https://www.youtube.com/embed/llH_VwUnr9w", },
    { url: "https://www.youtube.com/embed/-3UkdXIkekk", },
    { url: "https://www.youtube.com/embed/0Qa3c6ins5I", },
    { url: "https://www.youtube.com/embed/Usvlw6Zo8fY", },
    { url: "https://www.youtube.com/embed/885joTCa3qw", },
    { url: "https://www.youtube.com/embed/JuQmxB5vPI0", },
    { url: "https://www.youtube.com/embed/T4OCrGO00s8", },
    { url: "https://www.youtube.com/embed/Bpqq4khaTKs", },
    { url: "https://www.youtube.com/embed/gzaJ5gb-4og", },
    { url: "https://www.youtube.com/embed/CVpxg-MfJYk", },
  ];



  const navItem = (item: { title: string, href: string }) => (
    <a href={item.href} className="text-sm font-semibold leading-6 text-gray-900" key={item.href}>
      {item.title}
    </a>
  );

  const navItems: { title: string; href: string; }[] = [
    // { title: strings.navigation.primary.home, href: "#home" },
    { title: strings.navigation.primary.about, href: "#about" },
    { title: strings.navigation.primary.skills, href: "#skills" },
    { title: strings.navigation.primary.portfolio, href: "#portfolio" },
    { title: strings.navigation.primary.contact, href: "#contact" },
    { title: strings.navigation.primary.resume, href: "https://drive.google.com/file/d/1YfOHZfo5jC9qUGb_KuvjZhS2zibUklME/view?usp=sharing" },
  ];

  const section = (id: string, header: string, children: React.ReactNode,) => {

    const sectionHeader = (text: string) => (
      <h2 className="font-bold text-center relative pb-2 text-5xl mb-12 after:block after:w-2/3 after:h-1 after:bg-[#007bff] after:absolute after:transform after:-translate-x-1/2 after:left-1/2 after:top-14">
        {text}
      </h2>
    );

    return (
      <section id={id} className='mb-20 pt-40 px-10'>
        <div className='flex flex-col justify-center items-center'>
          {sectionHeader(header)}
        </div>
        {children}
      </section>
    );
  };



  const skillTag = (item: any) => (
    <li className='bg-gray-100 rounded-md px-2 py-1 hover:bg-gray-200'>
      <span>{item}</span>
    </li>
  );

  const project = (project: Project) => (
    <div className="rounded-md bg-gray-100 min-w-[100px] min-h-[200px] shadow-md relative group" key={project.title}>
      <img src={project.preview} alt={project.title} className="w-full h-full absolute object-cover rounded-tl-md rounded-tr-md group-hover:blur group-hover:brightness-50 group-hover:transition-all" />
      <div className="relative hidden group-hover:flex flex-col justify-center items-center w-full h-full">
        <h4 className="font-bold pb-2 text-2xl text-center text-white">
          {project.title}
        </h4>
        <ul className='flex flex-row text-white'>
          {project.source && (
            <li>
              <a href={project.source} target="_blank" title="Source Code">
                <CodeBracketSquareIcon style={{ height: 40, }} />
              </a>
            </li>
          )}
          {project.demo && (
            <li>
              <a href={project.demo} target="_blank" title="Demonstration">
                <FilmIcon style={{ height: 40, }} />
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );

  const photo = (photo: Photo) => (
    <img src={photo.url} alt={photo.title} className="w-[150px] h-[150px] object-cover rounded-xl" />
  );

  const video = (video: Video) => (
    <iframe width="400" height="250" src={video.url}></iframe>
  );

  return (
    <div className="App min-h-screen flex flex-col">

      <header className="sticky top-0 bg-white z-10 shadow-md z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
          <div className="flex-1">
            <a href="#" className="p-1.5">
              <h1 className='font-bold text-2xl'>{strings.me.name}</h1>
            </a>
          </div>
          <Popover.Group className="flex gap-x-12">
            {navItems.map(navItem)}
          </Popover.Group>
          <div className="flex flex-1 justify-end">
            <LanguageSelector />
          </div>
        </nav>
      </header>

      <main className='container mx-auto'>

        {section("about", strings.navigation.primary.about, (
          <div className="lg:grid lg:grid-cols-2 lg:gap-10">
            <div className='mb-10 lg:mb-0'>
              <img src={process.env.PUBLIC_URL + '/images/me-platts.jpg'} alt="My Image" className='w-full h-full object-contain rounded-2xl' />
            </div>
            <div className=''>
              <h3 className="font-bold text-center pb-2 text-4xl mb-4">
                {strings.me.name}
              </h3>

              <div className='mb-6'>
                <h4 className='font-bold pb-2 text-xl'>
                  {strings.me.about.who.title}
                </h4>
                <p>
                  {strings.me.about.who.body}
                </p>
              </div>

              <div className='mb-6'>
                <h4 className='font-bold pb-2 text-xl'>
                  {strings.me.about.how.title}
                </h4>
                <p>
                  {strings.me.about.how.body}
                </p>
              </div>

              <div className='mb-6'>
                <h4 className='font-bold pb-2 text-xl'>
                  {strings.me.about.why.title}
                </h4>
                <p>
                  {strings.me.about.why.body}
                </p>
              </div>
            </div>
          </div>
        ))}

        {section("skills", strings.navigation.primary.skills, (
          skills.map((skill) => (
            <div className="grid grid-cols-1 gap-2 mb-10" key={skill.subref}>
              <h3 className="font-bold pb-2 text-2xl">
                {skill.title}
              </h3>
              <ul className='flex flex-row flex-wrap gap-x-4 gap-y-2'>
                {skill.skills.map(skillTag)}
              </ul>
            </div>
          ))
        ))}


        {section("portfolio", strings.navigation.primary.portfolio, (
          <>
            <div className='mb-10'>
              <h3 className="font-bold pb-2 text-2xl mb-4">
                Programming
              </h3>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 text-center'>
                {projects.map(project)}
              </div>
            </div>

            <div className='mb-10'>
              <h3 className="font-bold pb-2 text-2xl mb-4">
                {strings.portfolio.photography.title}
              </h3>
              <div className='grid lg:grid-cols-1 xl:grid-cols-2 gap-10'>
                {photoSections.map((section) => (
                  <div className='mb-4'>
                    <h4 className="font-bold pb-2 text-xl mb-2">
                      {section.title}
                    </h4>
                    <PhotoGallery
                      photos={
                        section.photos.map((photo) => ({ src: photo.url, alt: photo.title, }))
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className='mb-10'>
              <h3 className="font-bold pb-2 text-2xl mb-4">
                {strings.portfolio.videography}
              </h3>
              <div className='grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 text-center'>
                {videos.map((video))}
              </div>
            </div>
          </>
        ))}


        {section("contact", strings.navigation.primary.contact, (
          <div>
            <p className='text-center mb-4'>
              {strings.contact}
            </p>
            <ul className='flex flex-row justify-center gap-4'>
              <li>
                <a href="https://www.linkedin.com/in/michaelgatesdev/" target="_blank" title="">
                  <i className="bi bi-linkedin text-blue-500" style={{ fontSize: 50, }}></i>
                </a>
              </li>
              <li>
                <a href="mailto:michaelgatesdev@gmail.com" target="_blank" title="">
                  <i className="bi bi-envelope text-blue-500" style={{ fontSize: 50, }}></i>
                </a>
              </li>
            </ul>
          </div>
        ))}

      </main>
      <footer className="bg-gray-100 p-10 text-center">
        <p className='mb-4'>
          &copy; {new Date().getFullYear()} Michael Gates
        </p>

        <p>Powered by React</p>
      </footer>
    </div>
  );
}

export default App;
