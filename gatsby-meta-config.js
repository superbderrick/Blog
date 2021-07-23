module.exports = {
  title: `jinyoung.dev`,
  description: `Derrick's Blog`,
  language: `en`, 
  siteUrl: `https://www.jinyoung.dev`,
  ogImage: `/og-image.png`, //
  comments: {
    utterances: {
      repo: `superbderrick/NewBlog`,
    },
  },
  ga: 'UA-90863637-2', // Google Analytics Tracking ID
  author: {
    name: `Derrick`,
    bio: {
      role: `Software Engineer`,
      description: ['¡Hola!', 'こんにちは!', '你好!'],
      thumbnail: 'zoomkoding.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/superbderrick`,
      linkedIn: `https://www.linkedin.com/in/sensational`,
      email: `kang.derrick@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
    
      {
        date: '2012.12 ~ 2017.12',
        activity: 'Software Engineer at Kinemaster,NexPlayer',
        links: {
          demo: 'https://nexplayersdk.com/'
        }
      },
  
      {
        date: '2017.12 ~ 2018.12',
        activity: 'Lead Software Engineer at Kinemaster,NexPlayer',
        links: {
          demo: 'https://nexplayersdk.com/'
        }
      },

      {
        date: '2018.12 ~ 2020.03',
        activity: 'Developer Relationship Engineer at Unity Technologies',
        links: {
          demo: 'https://unity.com/',
        },
      },
      {
        date: '2020.03 ~ 2021.04',
        activity: 'Software Engineer at SmartStudy',
        links: {
          demo: 'https://www.smartstudy.co.kr/en/',
        },
      },
      {
        date: '2021.04 ~ ',
        activity: 'Lead Engineer at SmartStudy',
        links: {
          demo: 'https://www.smartstudy.co.kr/en/',
        }
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'Baby Shark Coloring Book',
        description:
          'Participated in Baby Shark Coloring Book project, Implemented some features like Sound manager part to regulate some multiple sound effects and background music volumes with users save values and Implemented SNS share feature, a little bit UGUI development and research to make non game app with Unity',
        techStack: ['unity', 'android','iOS'],
        thumbnailUrl: 'bsc.png',
        links: {
          post: '/babysharkcoloringbook',
          googlePlay: 'https://play.google.com/store/apps/details?id=kr.co.smartstudy.babysharkcoloring_android_googlemarket&hl=en_US&gl=US',
          appStore: 'https://apps.apple.com/kr/app/baby-shark-coloring-book/id1286586207?l=en',
        },
      },

      {
        title: 'Pinkfong Plus Membership service sdk development',
        description:
          'Developing a pinkfong membership client SDK for Unity Platforms using Unity plugin interface and each native sdks (Android, iOS ) pinkfong Membership service enable to provide On/offline service connection and member management and it could provide own digital products and services such as coupon codes and support Multi-platform use of digital products available',
        techStack: ['unity', 'android','iOS','sdk development','unity plugin development'],
        thumbnailUrl: 'membership.jpg',
        links: {
          post: '/pinkfong-membership',
        },
      },
      // {
      //   title: '개발 블로그 테마 개발',
      //   description:
      //     '간단한 테마를 활용하여 개발 블로그를 만들고 운영하다 보니 점점 블로그를 내가 원하는 형태로 만들고 싶게 되었습니다. 입사 전 시기를 활용해서 원하는 기능과 디자인이 있는 블로그 테마를 만들게 되었습니다.',
      //   techStack: ['gatsby', 'react'],
      //   thumbnailUrl: 'zoomkoding.png',
      //   links: {
      //     post: '/why-dev-blog',
      //     github: 'https://github.com/zoomkoding/college-timetable',
      //     demo: 'https://gatsby-starter-zoomkoding.netlify.app',
      //   },
      // },
      // {
      //   title: '2020 우아한테크캠프 참여',
      //   description:
      //     '스타트업에서 앱 개발을 하면서 좋은 개발에 대한 갈증이 매우 크던 중에 좋은 기회를 잡게 되어 참여하게 되었습니다. 2달 간 몰입해서 좋은 사람들과 웹 개발을 경험하며, 많이 배우고 성장할 수 있었던 시간이었습니다.',
      //   techStack: ['react', 'nodejs'],
      //   thumbnailUrl: 'woowa-tech.png',
      //   links: {
      //     post: '/woowa-tech-camp-final',
      //     github: 'https://github.com/woowa-techcamp-2020/bmart-6',
      //   },
      // },
      // {
      //   title: '대학시간(대학교 수강신청 보조 웹 앱) 개발',
      //   description:
      //     '학생들이 예비 수강 신청 과정에서 겪게 되는 불편함을 개선할 수 있는 웹 서비스를 개발하였습니다. 첫 서비스를 진행한 2021년 1학기에만 전체 학생의 절반 가량이 서비스를 경험했고, 사용한 학생들로부터 고맙다는 이야기를 여러 경로로 전달 받게 되었습니다. 개발이 줄 수 있는 좋은 영향력를 많이 느꼈던 프로젝트였습니다.',
      //   techStack: ['react', 'nodejs'],
      //   thumbnailUrl: 'timetable.png',
      //   links: {
      //     post: '/college-timetable-development',
      //     github: 'https://github.com/zoomkoding/college-timetable',
      //     demo: 'http://www.timetable.college',
      //   },
      // },
    ],
  },
};
