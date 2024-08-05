import { Friends } from './friends'

export interface Resource {
  name: string
  logo: string
  desc: string
  href: string
  tags?: string[]
}

export interface ResourceCategory {
  name: string
  resources: Resource[]
}

const friends: Resource[] = Friends.map(f => {
  return {
    ...f,
    name: f.title,
    desc: f.description,
    logo: f.avatar!,
    href: f.website,
  }
})

export const resourceData: ResourceCategory[] = [
  {
    name: '友链 👨‍💻',
    resources: friends,
  },
  {
    name: '每周必刷🔥',
    resources: [
    ],
  },
  {
    name: 'AI Tools🧠',
    resources: [
      {
        name: 'ChatGPT',
        desc: 'ChatGPT是一种基于人工智能的自然语言处理模型，用于提供广泛的文本理解和生成功能。',
        logo: '/img/resource/ChatGPT.png',
        href: 'https://chat.openai.com/',
      },
      {
        name: 'Perplexity',
        desc: 'Perplexity是一种衡量语言模型预测能力的指标，它衡量模型对给定文本序列的预测困惑程度。',
        logo: '/img/resource/Perplexity.png',
        href: 'https://www.perplexity.ai/',
      },
    ],
  },
  {
    name: '站点 🖥️',
    resources: [
      {
        name: 'Developer Roadmap',
        desc: 'Roadmap to becoming a web developer.',
        logo: '/img/resource/roadmap.png',
        href: 'https://roadmap.sh/',
      },
      {
        name: 'Shields.io',
        desc: '为你的开源项目生成高质量小徽章图标',
        logo: '/img/resource/shields.png',
        href: 'https://shields.io/',
        tags: ['图标', '首页'],
      },
      {
        name: 'namae',
        desc: 'namae可让您给您的应用程序、Web服务或组织起一个好名字',
        logo: '/img/resource/namae.png',
        href: 'https://namae.dev/',
        tags: ['起名'],
      },
      {
        name: 'Quick Reference',
        desc: '为开发人员分享快速参考备忘清单【速查表】',
        logo: '/img/resource/quick reference.svg',
        href: 'https://jaywcjlove.github.io/reference',
        tags: ['手册'],
      },
      {
        name: 'Can I use',
        desc: '对浏览器支持的 API 兼容性查询',
        logo: 'https://caniuse.com/img/favicon-128.png',
        href: 'https://caniuse.com',
        tags: ['手册'],
      },
      {
        name: 'NGINX 配置',
        desc: '配置高性能、安全、稳定的NGINX服务器的最简单方法',
        logo: '/img/resource/digitalocean.png',
        href: 'https://www.digitalocean.com/community/tools/nginx',
        tags: ['nginx'],
      },
      {
        name: '那些免费的砖',
        desc: '发现免费可商用的资源',
        logo: 'https://img.thosefree.com/static/logo.png',
        href: 'https://www.thosefree.com/',
        tags: [''],
      },
      {
        name: '正则大全',
        desc: '🦕 常用正则大全, 支持web / vscode / idea / Alfred Workflow多平台',
        logo: '/img/resource/any-rule.ico',
        href: 'https://any-rule.vercel.app/',
        tags: [''],
      },
    ],
  },
  {
    name: '文档 📘',
    resources: [
      {
        name: 'Docker — 从入门到实践',
        desc: 'Docker中文文档',
        logo: '/img/resource/Docker.png',
        href: 'https://yeasy.gitbook.io/docker_practice',
        tags: ['文档'],
      },
    ],
  },
  {
    name: '工具 🛠️',
    resources: [
      {
        name: '在线工具',
        desc: '在线工具,开发人员工具,代码格式化、压缩、加密、解密,下载链接转换,ico图标制作,字帖生成',
        logo: 'https://tool.lu/favicon.ico',
        href: 'https://tool.lu/',
        tags: ['工具'],
      },
      {
        name: '菜鸟工具',
        desc: '菜鸟工具，为开发设计人员提供在线工具，提供在线PHP、Python、 CSS、JS 调试，中文简繁体转换，进制转换等工具',
        logo: '/img/resource/runoob.png',
        href: 'https://c.runoob.com/',
        tags: ['工具'],
      },
      {
        name: 'ProcessOn',
        desc: '免费在线流程图思维导图',
        logo: 'https://processon.com/favicon.ico',
        href: 'https://processon.com/',
        tags: ['工具', '思维导图'],
      },
      {
        name: 'Terminal Gif Maker',
        desc: '在线生成 Terminal GIF',
        logo: 'https://www.terminalgif.com/favicon.ico',
        href: 'https://www.terminalgif.com',
        tags: [],
      },

      {
        name: 'AST Explorer',
        desc: '一个 Web 工具，用于探索由各种解析器生成的 AST 语法树',
        logo: 'https://astexplorer.net/favicon.png',
        href: 'https://astexplorer.net/',
        tags: ['工具', '格式转换'],
      },
      {
        name: 'transform',
        desc: '各类数据格式与对象转换',
        logo: 'https://transform.tools/static/favicon.png',
        href: 'https://transform.tools',
        tags: ['工具', '格式转换'],
      },
      {
        name: 'Hoppscotch',
        desc: '开源 API 开发生态系统',
        logo: '/img/resource/hoppscotch.png',
        href: 'https://hoppscotch.io/',
        tags: ['api'],
      },
      {
        name: 'JsonT.run',
        desc: '一个简洁的在线 JSON 解析器',
        logo: 'https://www.jsont.run/favicon.ico',
        href: 'https://www.jsont.run/',
        tags: ['工具'],
      },
      {
        name: 'Apifox',
        desc: 'API 文档、API 调试、API Mock、API 自动化测试',
        logo: '/img/resource/apifox.png',
        href: 'https://www.apifox.cn/',
        tags: ['工具'],
      },
    ],
  },
  {
    name: '代码托管',
    resources: [
      {
        name: 'GitHub',
        desc: '全球最大的软件项目托管平台，发现优质开源项目',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        href: 'https://github.com/',
        tags: ['GitHub', '代码托管'],
      },
      {
        name: 'Gitee',
        desc: 'Gitee 是中国领先的基于 Git 的代码托管平台，类似于全球知名的 GitHub',
        logo: '/img/resource/gitee.ico',
        href: 'https://gitee.com/',
        tags: ['代码托管'],
      },
      {
        name: 'Gitlab',
        desc: '更快地交付安全代码，部署到任何云，并推动业务成果',
        logo: 'https://gitlab.com/uploads/-/system/group/avatar/6543/logo-extra-whitespace.png?width=64',
        href: 'https://gitlab.com/',
        tags: ['代码托管'],
      },
    ],
  },
  {
    name: '网站托管',
    resources: [
      {
        name: 'Vercel',
        desc: 'Vercel将最好的开发人员体验与对最终用户性能的执着关注相结合',
        logo: 'https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png',
        href: 'https://vercel.com',
        tags: ['网站托管'],
      },
    ],
  },
  {
    name: '在线代码',
    resources: [
      {
        name: 'CodesandBox',
        desc: 'CodeSandbox是一个在线代码编辑器和原型工具，可以更快地创建和共享web应用程序',
        logo: 'https://codesandbox.io/favicon.ico',
        href: 'https://codesandbox.io/',
        tags: ['在线代码'],
      },
      {
        name: 'CodePen',
        desc: '是构建、测试和发现前端代码的最佳场所',
        logo: 'https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico',
        href: 'https://codepen.io/',
        tags: ['在线代码'],
      },
      {
        name: 'Stackblitz',
        desc: 'Stackblitz在流程中保持即时的开发体验。没有更多的小时储存/拉/安装本地-只需点击，并开始编码',
        logo: '/img/resource/stackblitz.png',
        href: 'https://stackblitz.com/',
        tags: ['在线代码'],
      },
      {
        name: 'vscode.dev',
        desc: 'vscode官方提供在线Web版vscode代码编写网站',
        logo: 'https://vscode.dev/static/stable/favicon.ico',
        href: 'https://vscode.dev/',
        tags: ['在线代码'],
      },
      {
        name: 'Sandpack',
        desc: '用于创建实时运行的代码编辑经验',
        logo: 'https://sandpack.codesandbox.io/favicon.ico',
        href: 'https://sandpack.codesandbox.io/',
        tags: ['在线代码'],
      },
    ],
  },
  {
    name: '字体图标',
    resources: [
      {
        name: 'iconify',
        desc: '数千个图标，一个统一的框架',
        logo: 'https://icon-sets.iconify.design/favicon.ico',
        href: 'https://icon-sets.iconify.design/',
        tags: ['图标'],
      },
      {
        name: 'icones',
        desc: 'Icon Explorer with Instant searching, powered by Iconify',
        logo: 'https://icones.js.org/favicon.svg',
        href: 'https://icones.js.org/',
        tags: ['图标'],
      },
      {
        name: 'iconfont',
        desc: 'iconfont-国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        logo: 'https://img.alicdn.com/imgextra/i4/O1CN01EYTRnJ297D6vehehJ_!!6000000008020-55-tps-64-64.svg',
        href: 'https://www.iconfont.cn/',
        tags: ['图标'],
      },
      {
        name: 'feathericons',
        desc: '简单美丽的开源图标',
        logo: 'https://feathericons.com/favicon.ico',
        href: 'https://feathericons.com/',
        tags: ['图标'],
      },
      {
        name: 'undraw',
        desc: '一个不断更新的设计项目与美丽的SVG图像，使用完全免费',
        logo: 'https://undraw.co/apple-touch-icon.png',
        href: 'https://undraw.co/',
        tags: ['插画', 'svg'],
      },
      {
        name: 'igoutu',
        desc: '图标、插图、照片、音乐和设计工具',
        logo: '/img/resource/igoutu.png',
        href: 'https://igoutu.cn/',
        tags: ['插画', 'svg'],
      },
      {
        name: 'Emojiall',
        desc: 'Emoji表情大全',
        logo: 'https://www.emojiall.com/apple-touch-icon.png',
        href: 'https://www.emojiall.com/zh-hans',
        tags: ['图标', 'emoji'],
      },
      {
        name: '渐变色网站',
        desc: '数百万个自动生成的渐变的网站',
        logo: 'https://gradihunt.com/favicon.ico',
        href: 'https://gradihunt.com/',
        tags: ['配色', '背景'],
      },
      {
        name: '谷歌字体',
        desc: '一个生成渐变色背景的网站',
        logo: '/img/resource/google_fonts.ico',
        href: 'https://googlefonts.cn/',
        tags: ['字体'],
      },
      {
        name: 'Typing SVG',
        desc: '一个动态生成的可自定义 SVG 打字效果',
        logo: '/img/resource/typing-svg.png',
        href: 'https://readme-typing-svg.herokuapp.com/demo/',
        tags: ['字体'],
      },
    ],
  },
  {
    name: '站点生成',
    resources: [
      {
        name: 'VitePress',
        desc: 'Vue 驱动并使用Vite构建的静态网站生成器',
        logo: 'https://vuepress.vuejs.org/hero.png',
        href: 'https://vitepress.vuejs.org',
        tags: ['前端', 'Vue', '静态站点'],
      },
      {
        name: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        logo: 'https://vuepress.vuejs.org/hero.png',
        href: 'https://vuepress.vuejs.org',
        tags: ['前端', 'Vue', '静态站点'],
      },
      {
        name: 'Docusaurus',
        desc: '快速构建以内容为核心的最佳网站',
        logo: '/img/resource/docusaurus.svg',
        href: 'https://docusaurus.io',
        tags: ['前端', 'React', '静态站点'],
      },
      {
        name: 'Hexo',
        desc: '快速、简洁且高效的博客框架',
        logo: 'https://hexo.io/favicon.ico',
        href: 'https://hexo.io',
        tags: ['前端', '静态站点'],
      },
      {
        name: 'GitBook',
        desc: 'GitBook帮助您为用户发布漂亮的文档，并集中您的团队的知识进行高级协作',
        logo: 'https://assets-global.website-files.com/600ead1452cf056d0e52dbed/6246d2036225eac4d74cff27_Favicon_Blue.png',
        href: 'https://www.gitbook.com/',
        tags: ['前端', '静态站点'],
      },
      {
        name: 'Docsify',
        desc: 'docsify 可以快速帮你生成文档网站',
        logo: 'https://docsify.js.org/_media/icon.svg',
        href: 'https://docsify.js.org',
        tags: ['前端', '静态站点'],
      },
      {
        name: 'WordPress',
        desc: 'WordPress是一款能让您建立出色网站、博客或应用程序的开源软件',
        logo: 'https://s.w.org/images/wmark.png',
        href: 'https://cn.wordpress.org/',
        tags: ['前端', '站点'],
      },
    ],
  },
  {
    name: 'Github',
    resources: [
      {
        name: 'Gitstar Ranking',
        desc: '针对用户、组织和存储库的非官方 GitHub 星级排名',
        logo: '/img/resource/github.ico',
        href: 'https://gitstar-ranking.com/',
        tags: [],
      },
      {
        name: 'Metrics',
        desc: 'Create your own metrics',
        logo: '/img/resource/github.ico',
        href: 'https://metrics.lecoq.io/',
        tags: [],
      },
      {
        name: 'Github主页 README 生成器',
        desc: '一个Github 个人主页 README 生成器',
        logo: '/img/resource/github.ico',
        href: 'https://rahuldkjain.github.io/gh-profile-readme-generator/',
        tags: [],
      },
      {
        name: 'Github 统计生成器',
        desc: 'Github 在你的 README 中获取动态生成的 GitHub 统计信息！',
        logo: '/img/resource/github.ico',
        href: 'https://github.com/anuraghazra/github-readme-stats',
        tags: [],
      },
    ],
  },
]
