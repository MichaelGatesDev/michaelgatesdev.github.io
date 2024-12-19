interface Language {
  displayName: string;
  countryCode: string;
  languageCode: string;
}

interface Skill {
  title: string;
  subref: string;
  skills: string[];
}

interface Project {
  title: string;
  description: string;
  preview: string;
  source: string | undefined;
  demo: string | undefined;
}

interface Photo {
  title: string;
  url: string;
}

interface PhotoSection {
  title: String;
  photos: Photo[];
}

interface Video {
  url: string;
}


interface Strings {
  me: {
    name: string;
    about: {
      who: {
        title: string;
        body: string;
      }
      how: {
        title: string;
        body: string;
      }
      why: {
        title: string;
        body: string;
      }
    },
  };
  navigation: {
    primary: {
      home: string;
      about: string;
      skills: string;
      portfolio: string;
      contact: string;
      resume: string;
    },
  };
  skills: {
    generalEngineering: string;
    frontend: string;
    backend: string;
    game: string;
    mobile: string;
    art: string;
    general: string;
    language: string;
  },
  portfolio: {
    programming: string;
    photography: {
      title: string;
      concert: string;
      portrait: string;
      street: string;
      travel: string;
    };
    videography: string;
  },
  contact: string;
}