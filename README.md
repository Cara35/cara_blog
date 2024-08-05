<h2 align="center">
Cara 的个人博客
</h2><br>

<pre align="center">
 Build with 🦖<a href="https://docusaurus.io/">Docusaurus</a> 
</pre>

<p align="center">
<br>
<a href="https://kuizuo.cn">🖥 Online Preview</a>
<br><br> 
<a href="https://vercel.com/new/clone?repository-url=https://github.com/kuizuo/blog/tree/main&project-name=blog&repo-name=blog" rel="nofollow"><img src="https://vercel.com/button"></a>
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/kuizuo/blog" rel="nofollow"><img src="https://www.netlify.com/img/deploy/button.svg"></a>
<a href="https://stackblitz.com/github/kuizuo/blog" rel="nofollow"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"></a>
</p>

## 👋 Introduction

我会将我的学习过程总结为文档的形式，方便我后续需要用到的时候能够快速查找，并乐意与他人分享。

## 📊 Catalogue

```bash
├── docs                        # 文档/笔记
│   └── doc.md  
├── data                        
│   ├── friends.tsx             # 友链
│   └── resources.tsx           # 资源
├── src
│   ├── components              # 组件
│   │   ├── HomepageFeatures
│   │   └── Tooltip              
│   ├── css                     # 自定义CSS
│   │   └── custom.css
│   └── pages                   # 自定义页面
│       ├── friends             
│       ├── resources           
│       ├── markdown-page.md
│       └── index.module.css
├── static                      # 静态资源文件
│   └── img                     # 静态图片
│       ├── friend              
│       ├── resource            
│       └── logo.png
├── babel.config.js
├── docusaurus.config.js        # 站点的配置信息
├── package.json
├── package-lock.json
├── README.md
├── sidebars.js                 # 文档的侧边栏
└── yarn.lock
```
## 📥 Start

```bash
cd blog

yarn install

yarn start
```

Build

```bash
yarn build

npm run serve
```


## 📝License

[MIT](./LICENSE)

