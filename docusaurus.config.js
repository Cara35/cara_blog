const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '帕帕尼的博客',
  tagline: '积跬步成千里，积小流成江海',
  favicon: 'img/logo.png',

  titleDelimiter: '-',
  url: 'https://cara.online',      // 网站的 url 地址
  baseUrl: '/',                     // 解析后的地址，如果设为 wsite，则 url 解析为https://xxx.xx/site
  projectName: 'Cara35.github.io', // {username}.github.io
  organizationName: 'Cara35',      // username
  deploymentBranch: 'main',         // 部署的默认分支,如果部署到同一个仓库下则可不指定
  onBrokenLinks: 'ignore',          // 编译遇到死链怎么处理  default：throw
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),

          // 删除 editUrl 以删除 “编辑此页” 按钮
          // editUrl:
          //   'https://github.com/HorizonRDK/tros_doc/blob/develop/',
        },
        blog: {
          showReadingTime: true,

          // 删除 editUrl 以删除 “编辑此页” 按钮
          // editUrl:
          //   'https://github.com/HorizonRDK/tros_doc/blob/develop/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "PPN's Blog",
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            label: 'NOTE',
            position: 'left',
            to: '/',
            type: 'doc',
            // 注意：这个应与/docs目录下的introduce.md名字对应
            docId: 'introduce',
          },
          {
            to: '/resources',
            label: '友链&导航站',
            position: 'right',
          },
          {
            href: 'https://github.com/RoboPPN',
            label: 'Github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} 帕帕尼 Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
      },
    }),

    themes: [
      // ... Your other themes.
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          // ... Your options.
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          language: ["en", "zh"],
          highlightSearchTermsOnTargetPage: true,
          explicitSearchResultPath: true,
          docsRouteBasePath: '/',
          // For Docs using Chinese, The `language` is recommended to set to:
          // ```
          // language: ["en", "zh"],
          // ```
        },
      ],
    ],
};

module.exports = config;
