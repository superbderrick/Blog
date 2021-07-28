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
      description: ['¡Hola! Amigo :)', 'こんにちは! 友達 :)', '你好! 朋友 :) ','Hey! Mate :)','안녕하세요! 반가워요 :)'],
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
        techStack: ['Unity', 'Android','iOS'],
        thumbnailUrl: 'bsc.png',
        links: {
          post: '/babysharkcoloringbook',
          googlePlay: 'https://play.google.com/store/apps/details?id=kr.co.smartstudy.babysharkcoloring_android_googlemarket&hl=en_US&gl=US',
          appStore: 'https://apps.apple.com/kr/app/baby-shark-coloring-book/id1286586207?l=en',
        },
      },

      {
        title: 'Pinkfong Plus Membership service',
        description:
          'Developing a pinkfong membership client SDK for Unity Platforms using Unity plugin interface and each native sdks (Android, iOS ) pinkfong Membership service enable to provide On/offline service connection and member management and it could provide own digital products and services such as coupon codes and support Multi-platform use of digital products available',
        techStack: ['Unity', 'Android','iOS','SDK'],
        thumbnailUrl: 'membership.jpg',
        links: {
          post: '/pinkfong-membership',
        },
      },

      {
        title: 'Snow AR camera platform project',
        description:
        'Participated Snow AR camera platfrom project and developed Android camera features using unity native plugins',
        techStack: ['Unity', 'Android'],
        thumbnailUrl: 'unitylogo.png',
        links: {
          post: '/experience/snowar',
        },
      },
      {
        title: 'KT Narle app project',
        description:
        'In order to optimize the customer’s app, developed to building a system to test the complexity of each screen (custom unity editor development) ',
        techStack: ['Unity', 'Android'],
        thumbnailUrl: 'unitylogo.png',
        links: {
          post: '/experience/ktnarle',
        },
      },

      {
        title: 'BTS World Project',
        description:
        'Developed for special Unity SDK for BTS World Game (consortium project), Role: PM and Lead Engineer - Feature development - Product preparation and documentation, supply to customer  ',
        techStack: ['Unity', 'Android' ,'iOS'],
        thumbnailUrl: 'bts.png',
        links: {
          post: '/experience/btsworld',
        },
      },

   
    ],
  },
};
