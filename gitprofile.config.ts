// gitprofile.config.ts
const CONFIG = {
  github: { username: 'Ryotaro-Fujiwara-san' },

  base: '/My-Engineer-portfolio/',

  // ← ここに「bio」「customPages」は置かない（未対応のため）

  projects: {
    github: {
      display: true,
      header: 'My Projects',
      mode: 'manual',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: { forks: false, projects: [] },
      },
      manual: {
        projects: ['Ryotaro-Fujiwara-san/capstone', 'arifszn/pandora'],
      },
    },

    // customProjects は使わない（削除）

    external: {
      header: 'Highlights',
      projects: [
        {
          title: 'Degree（学位）',
          description: 'MSIT @ UoPeople (2027)',
          imageUrl:
            'https://ryotaro-fujiwara-san.github.io/My-Engineer-portfolio/degree/bachelor.jpg',
          link:
            'https://ryotaro-fujiwara-san.github.io/My-Engineer-portfolio/degree/',
        },
        // 必要なら他のカードをここに追加
      ],
    },
  },

  seo: { title: 'Portfolio of Ariful Alam', description: '', imageURL: '' },

  social: {
    linkedin: 'www.linkedin.com/in/ryotaro-fujiwara',
    phone: '',
    email: 'expo70314911@gmail.com',
  },

  resume: { fileUrl: 'https://jp.docworkspace.com/d/sIM3Ox4-nAe-G5sUG' },

  skills: [
    'PHP', 'Laravel', 'JavaScript', 'React.js', 'Node.js', 'Nest.js', 'MySQL',
    'PostgreSQL', 'Git', 'Docker', 'PHPUnit', 'CSS', 'Antd', 'Tailwind',
  ],

  experiences: [
    { company: 'Company Name', position: 'Position', from: 'September 2021', to: 'Present', companyLink: 'https://example.com' },
    { company: 'Company Name', position: 'Position', from: 'July 2019', to: 'August 2021', companyLink: 'https://example.com' },
  ],

  certifications: [
    { name: 'Lorem ipsum', body: 'Lorem ipsum dolor sit amet', year: 'March 2022', link: 'https://example.com' },
  ],

  educations: [
    { institution: 'Institution Name', degree: 'Degree', from: '2015', to: '2019' },
    { institution: 'Institution Name', degree: 'Degree', from: '2012', to: '2014' },
  ],

  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],

  blog: { source: 'dev', username: 'arifszn', limit: 2 },
  googleAnalytics: { id: '' },
  hotjar: { id: '', snippetVersion: 6 },

  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light','dark','cupcake','bumblebee','emerald','corporate','synthwave',
      'retro','cyberpunk','valentine','halloween','garden','forest','aqua',
      'lofi','pastel','fantasy','wireframe','black','luxury','dracula','cmyk',
      'autumn','business','acid','lemonade','night','coffee','winter','dim',
      'nord','sunset','caramellatte','abyss','silk','procyon',
    ],
  },

  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
