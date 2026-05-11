// gitprofile.config.ts
const CONFIG = {
  github: { username: 'Ryotaro-Fujiwara-san' },

  base: '/My-Engineer-portfolio/',

  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'manual',
      automatic: {
        sortBy: 'updated',
        limit: 8,
        exclude: { forks: false, projects: [] },
      },
      manual: {
        // ここにあなたのリポジトリを指定（pandoraは削除済み）
        projects: [
            'Ryotaro-Fujiwara-san/credit-scoring-transformer',
            'Ryotaro-Fujiwara-san/capstone',
            'Ryotaro-Fujiwara-san/LinguaReactor-Pro'
        ],
      },
    },

    // ↓ここが重要！ビジネス視点をアピールするために「external」を使って詳細を書きます
    external: {
      header: 'Strategic AI Projects',
      projects: [
        {
          title: 'Profit-Driven Credit Scoring AI',
          description:
            'FinTechにおける信用スコアリングの革新。最新のDeep Learning (FT-Transformer) とFocal Lossを用い、単なる予測精度(AUC)ではなく「期待利益の最大化」を目的関数に据えた実務直結型AIモデル。',
          imageUrl: 'https://img.icons8.com/fluency/96/bullish.png',
          link: 'https://github.com/Ryotaro-Fujiwara-san/credit-scoring-transformer',
        },
      ],
    },
  },

  seo: { title: 'Portfolio of Ryotaro Fujiwara', description: 'AI Engineer & Data Scientist Portfolio', imageURL: '' },

  social: {
    linkedin: 'www.linkedin.com/in/ryotaro-fujiwara',
    phone: '',
    email: 'expo70314911@gmail.com',
  },

  resume: { fileUrl: 'https://jp.docworkspace.com/d/sIM3Ox4-nAe-G5sUG' },

  skills: [
    // AIエンジニアとしてアピールするため、Python関連を先頭に移動
    'Python', 'PyTorch', 'Machine Learning', 'Transformer', 'Data Science',
    'PHP', 'Laravel', 'JavaScript', 'React.js', 'Node.js', 'MySQL',
    'PostgreSQL', 'Git', 'Docker', 'Tailwind',
  ],

  experiences: [
    // 必要に応じて書き換えてください（とりあえずプレースホルダーのままにしています）
    { company: 'Company Name', position: 'Position', from: 'September 2021', to: 'Present', companyLink: 'https://example.com' },
    { company: 'Company Name', position: 'Position', from: 'July 2019', to: 'August 2021', companyLink: 'https://example.com' },
  ],

  certifications: [
    { name: 'Lorem ipsum', body: 'Lorem ipsum dolor sit amet', year: 'March 2022', link: 'https://example.com' },
  ],

  educations: [
    { institution: 'Institution Name', degree: 'Degree', from: '2015', to: '2019' },
  ],

  publications: [
    // 論文などの実績がまだなければ、空にして非表示にすることも可能です
  ],

  blog: { source: 'dev', username: 'arifszn', limit: 2 },
  googleAnalytics: { id: '' },
  hotjar: { id: '', snippetVersion: 6 },

  themeConfig: {
    defaultTheme: 'corporate', // ビジネス向けに「corporate」テーマに変更（お好みでlofiに戻してもOK）
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light','dark','corporate','lofi','business','dracula','night',
    ],
  },

  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a>`,
  enablePWA: true,
};

export default CONFIG;
