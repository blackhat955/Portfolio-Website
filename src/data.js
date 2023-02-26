const data = {
  header: [
    {
      name: 'Home',
      active: true,
    },
    {
      name: 'About',
      active: true,
    },
    {
      name: 'Skills',
      active: true,
    },
    {
      name: 'Experience',
      active: true,
    },
    {
      name: 'Portfolio',
      active: true,
    },
    {
      name: 'Blog',
      active: false,
    },
    {
      name: 'Testimonial',
      active: false,
    },
    {
      name: 'Contact',
      active: true,
    },
  ],
  home: {
    name: 'Durgesh Tiwari',
    post: 'MERN & Android Developer',
    email: 'durgesh.tiw98@gmail.com',
    contact: '',
    address: 'Mumbai',
    social: [
      {
        icon: 'fa fa-linkedin',
        link: 'https://www.linkedin.com/in/bimaleshseth/',
      },
      { icon: 'fa fa-github', link: 'https://github.com/Bimalesh-Seth' },
      { icon: 'fa fa-instagram', link: 'https://github.com/Bimalesh-Seth' },
      { icon: 'fa fa-twitter', link: 'https://github.com/Bimalesh-Seth' },
    ],
    image: 'durgeshtiwaripng.png',
  },
  about: {
    describe:
      "Hello, I'm Durgesh Tiwari, I have experience developing robust software for different Companies. I have worked for several companies based in India and abroad. I will be looking for hearing from you and am excited to join you.",
    techs: [
      'JavaScript',
      'Python',
      'NodeJS',
      'ReactJS',
      'Dart',
      'C++'
      // "Java",
    ],
    resume: 'Resume.pdf',
  },
  service: [
    // {
    //   title: "UI Design",
    //   content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
    //             diam nonummy nibh euismod tincidunt ut laoreet dolore magna
    //             aliquam erat volutpat.`,
    //   icon: "fa fa-bullseye purple-color",
    // },
    {
      title: 'Web Development',
      content: `I'm familiar React, NodeJS, ExpressJS,C++ and  also know about full stacks like MERN and MEVN. `,
      icon: 'fa fa-code iron-color',
    },
    {
      title: "App Development",
      content: `I have developed various solutions related to Android. I worked with different startups which rigorously involve to create such products and trying to provide a robust architecture that can fulfill user and client demand. `,
      icon: "fa fa-android iron-color",
    },
  ],
  techs: [
    // {
    //   name: "Asana",
    //   url: "techs/asana1.svg",
    // },
    {
      name: "Bitbucket",
      url: "techs/bitbucket.svg",
    },
    {
      name: "Express",
      url: "techs/express.svg",
    },
    {
      name: 'Firebase',
      url: 'techs/firebase.svg',
    },
    {
      name: 'Git',
      url: 'techs/git.svg',
    },
    // {
    //   name: "Github",
    //   url: "techs/github.svg",
    // },
    {
      name: 'Jest',
      url: 'techs/jest.svg',
    },
    {
      name: 'JavaScript',
      url: 'techs/js.svg',
    },
    {
      name: 'MongoDB',
      url: 'techs/mongodb.svg',
    },
    {
      name: 'MySQL',
      url: 'techs/mysql.svg',
    },
    {
      name: 'NodeJS',
      url: 'techs/nodejs.svg',
    },
    // {
    //   name: "PHP",
    //   url: "techs/PHP.svg",
    // },
    // {
    //   name: "Postman",
    //   url: "techs/postman.svg",
    // },
    {
      name: 'Python',
      url: 'techs/python.svg',
    },
    {
      name: 'Slack',
      url: 'techs/slack.svg',
    },
    {
      name: 'VS Code',
      url: 'techs/vscode.svg',
    },
    {
      name: 'VueJS',
      url: 'techs/vuejs.svg',
    },
    {
      name: 'React',
      url: 'techs/react.svg',
    },
  ],
  skills: {
    technical: [
      { name: 'JavaScript', per: '80' },
      { name: 'ExpressJS', per: '75' },
      { name: 'ReactJS', per: '73' },
      { name: 'C++', per: '60' },
      { name: 'Flutter', per: '65' },
      // { name: "PHP", per: "58" },
      // { name: "Java", per: "52" },
      // { name: "Flutter", per: "45" },
    ],
    professional: [
      { name: 'Communication', per: '90' },
      { name: 'Team Work', per: '80' },
      { name: 'Project Management', per: '71' },
      { name: 'Creativity', per: '75' },
    ],
  },
  experiences: {
    education: [
      {
        name: 'Bachelor of Engineering (B.E.)',
        university: 'University of Mumbai',
        year: '2019 - 2022',
        describe: `I did complete my bachelor's from one of the prestigious universities of India with a CGPA of 9.2. Here I had to learn core subjects like Networking, Operating Systems, Data Structure & Algorithms, and Applied Mathematics.
         `,
      },
      {
        name: 'Higher Secondary',
        university: 'Uttar-Pradesh Board',
        year: '2016-2017',
        describe: `I have secured 80% with distinction in PCM and scored 87% percent in total. Here I learned the basic of mathematics that is crucial for the transition to being a prodigious engineer `,
      },
    ],
    work: [
      {
        designation: ' Software Engineer Intern ',
        company: 'ByteLearn U.S.A',
        period: 'July, 2022 - Sep, 2022',
        responsibility: [
          'Written code for the MPU SOLVER a Cognitive Sense of the bot which help to reduce time complexity by 15% indecision making.',
          'Using the JINJA template to render the output and reduce the variables which are not paramount to the process, thusincreases overall Productivity',
        ]
      },
      {
        designation: 'Full Stack developer',
        company: 'Edufied Pvt Ltd (Singapore)',
        period: 'Jan, 2022 - Feb, 2022',
        responsibility: [
          // 'Wrote testcase in JEST Framework.',
          // 'Fixed bugs in existing application.',
          // 'Wrote scripts as per requirement.',
          'Used lazy loading techniques to unsubscribe Observable, which was not necessary to the process, resulting in reducing memory leak and overall loading time that enhancing collective performance',
          'Introducing more threads that simultaneously operate DOM and JS threads in parallel, enhancing the capacity for web processing. Together, these elements enhance performance of the application by 30%',
        ],
      },
      {
        designation: 'Node JS Developer ',
        company: 'Programmers Army',
        period: 'Sep, 2020 - Nov, 2020',
        responsibility: [
          // 'Wrote testcase in JEST Framework.',
          // 'Fixed bugs in existing application.',
          // 'Wrote scripts as per requirement.',
          'Replaced outdated Php code with (NodeJS), which is more effective, to cut the time that it takes to verify all credentials by 23ms.',
          'Fix a critical issue that unexpectedly caused database information to be populated on the main website.',
        ],
      },
    ],
  },
  portfolio: {
    categories: ['NodeJS', 'React', 'VueJS'],
    projects: [
      {
        category: 'NodeJS',
        title: 'MutiuserAuthentication',
        subTitle: 'User Authentication API',
        image: 'projects/NK/nk2.png',
        description: `Enables developers to avoid writing additional code for user authentication and authorization, saving them 30% of their
        work`,
        techs: ['NodeJS', 'ExpressJS', 'EJS', 'MongoDB', 'NPM','Postman'],
        link: '',
        pics: [
          {
            link: 'projects/NK/nk1.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/NK/nk2.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/NK/nk3.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/NK/nk4.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/NK/nk5.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/NK/nk6.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/NK/nk7.png',
            title: '',
            info: '',
          },
        ],
      },
      {
        category: 'NodeJS',
        title: 'Medihub',
        subTitle: 'Local Pharma Management System',
        image: 'projects/MH/mh2.png',
        description: `The idea was to manage local medical shop and serve people of their locality
in a very efficient manner. A user can do enquiry for medicine and place order
for those medicine from their nearby medical shops.
`,
        techs: [
          'HTML',
          'CSS',
          'JS',
          'ExpressJS',
          'NodeJS',
          'EJS',
          'VueJS',
          'MongoDB',
        ],
        link: '',
        pics: [
          {
            link: 'projects/MH/mh1.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/MH/mh2.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/MH/mh3.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/MH/mh4.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/MH/mh5.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/MH/mh6.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/MH/mh7.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/MH/mh8.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/MH/mh9.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/MH/mh10.png',
            title: '',
            info: '',
          },
        ],
      },

      {
        category: 'VueJS',
        title: 'Sunfresh Mart',
        subTitle: 'A Grocery Website',
        image: 'projects/GV/GV1.png',
        description: `
A website to purchase to purchase groceries online. A user can add any item to favorite to view that item later and to cart to purchase that item. On Checkout, You will be asked delivery details and your order details will reach to us through WhatsApp. You don't need to login.`,
        techs: ['VueJS', 'Firebase', 'HTML', 'CSS', 'JS'],
        link: 'https://sunfreshmart-19f98.web.app/',
        pics: [
          {
            link: 'projects/GV/GV1.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/GV/GV2.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/GV/GV3.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/GV/GV4.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/GV/GV5.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/GV/GV6.png',
            title: '',
            info: '',
          },
        ],
      },
      {
        category: 'React',
        title: 'Invoice Generator',
        subTitle: 'A web app to generate invoice.',
        image: 'projects/I/i2.png',
        description: `A web application to generate in invoice specific for mobile shop. My client needed an application to generate invoice for customers. It should be an offline application. In this application, basic details of customer & purchased product details are needed to generate invoice. Shop owner can print invoice or generate pdf via "Save as PDF" option in print.`,
        techs: ['React', 'HTML', 'CSS', 'JS'],
        link: 'https://bimalesh-seth.github.io/Invoice/',
        pics: [
          {
            link: 'projects/I/i1.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/I/i2.png',
            title: '',
            info: '',
          },
          {
            link: 'projects/I/i3.png',
            title: '',
            info: '',
          },
        ],
      },
    ],
  },
  blogs: [
    {
      title: 'A life without the daily traffic jams',
      link: '#',
      img: 'assets/images/b-3.png',
      date: '24.11.19',
      info: `It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout`,
    },
    {
      title: 'Mounts of paper work to remember the way',
      link: '#',
      img: 'assets/images/b-1.png',
      date: '24.11.19',
      info: `It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout`,
    },
    {
      title: 'Proportion are what’s really needed',
      link: '#',
      img: 'assets/images/b-2.png',
      date: '24.11.19',
      info: `It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout`,
    },
  ],
  reviews: [
    {
      img: 'assets/images/c-1.png',
      name: 'John Mike',
      said: `Absolute wonderful ! I am completely blown away.The very
                    best.I was amazed at the quality`,
      post: 'CEO, Author.Inc',
    },
    {
      img: 'assets/images/c-1.png',
      name: 'John Mike',
      said: `Absolute wonderful ! I am completely blown away.The very
                    best.I was amazed at the quality`,
      post: 'CEO, Author.Inc',
    },
    {
      img: 'assets/images/c-1.png',
      name: 'John Mike',
      said: `Absolute wonderful ! I am completely blown away.The very
                    best.I was amazed at the quality`,
      post: 'CEO, Author.Inc',
    },
    {
      img: 'assets/images/c-1.png',
      name: 'John Mike',
      said: `Absolute wonderful ! I am completely blown away.The very
                    best.I was amazed at the quality`,
      post: 'CEO, Author.Inc',
    },
    {
      img: 'assets/images/c-1.png',
      name: 'John Mike',
      said: `Absolute wonderful ! I am completely blown away.The very
                    best.I was amazed at the quality`,
      post: 'CEO, Author.Inc',
    },
    {
      img: 'assets/images/c-1.png',
      name: 'John Mike',
      said: `Absolute wonderful ! I am completely blown away.The very
                    best.I was amazed at the quality`,
      post: 'CEO, Author.Inc',
    },
  ],
};

export default data;
