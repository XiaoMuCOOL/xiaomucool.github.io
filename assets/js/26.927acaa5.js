(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{546:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("介绍下本博客的搭建流程，主要用到静态站点生成"),a("code",[t._v("vuepress")]),t._v("、自动化部署"),a("code",[t._v("github actions")]),t._v("、和阿里云OSS。")]),t._v(" "),a("h2",{attrs:{id:"搭建流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建流程"}},[t._v("#")]),t._v(" 搭建流程")]),t._v(" "),a("ul",[a("li",[t._v("在"),a("code",[t._v("dev 分支")]),t._v("使用"),a("code",[t._v("Vuepress")]),t._v("写博客")]),t._v(" "),a("li",[a("code",[t._v("push")]),t._v("到"),a("code",[t._v("github")])]),t._v(" "),a("li",[a("code",[t._v("github actions")]),t._v("自动生成静态页面部署到"),a("code",[t._v("master分支")])]),t._v(" "),a("li",[a("code",[t._v("github actions")]),t._v("自动部署到"),a("code",[t._v("阿里云OSS")])]),t._v(" "),a("li",[t._v("完成，查看"),a("a",{attrs:{href:"https://xiaomucool.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("xiaomucool.github.io"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://xiaomucool.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("xiaomucool.com"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"使用vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用vuepress"}},[t._v("#")]),t._v(" 使用Vuepress")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress"),a("OutboundLink")],1),t._v("是Vue 驱动的静态网站生成器，支持"),a("a",{attrs:{href:"https://guides.github.com/features/mastering-markdown/",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown"),a("OutboundLink")],1),t._v("语法、"),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("Emoji"),a("OutboundLink")],1),t._v("图标。")]),t._v(" "),a("p",[t._v("我们先来安装它：")]),t._v(" "),a("div",{staticClass:"language-cmd extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm i vuepress -S\n")])])]),a("p",[a("code",[t._v("Vuepress")]),t._v("默认主题适合写接口文档，我们还要安装适合博客的主题"),a("a",{attrs:{href:"https://github.com/meteorlxy/vuepress-theme-meteorlxy",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-meteorlxy"),a("OutboundLink")],1),t._v("：")]),t._v(" "),a("div",{staticClass:"language-cmd extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm i vuepress-theme-meteorlxy -S\n")])])]),a("p",[t._v("环境安装好了，我们开始写文章吧！文章存放目录为："),a("code",[t._v("docs/_posts/**/*.md")]),t._v("，它会默认读取这个文件夹下的md文件。")]),t._v(" "),a("p",[t._v("主题"),a("code",[t._v("vuepress-theme-meteorlxy")]),t._v("需要配置一些参数，详情请见"),a("a",{attrs:{href:"https://vuepress-theme-meteorlxy.meteorlxy.cn/posts/2019/02/26/theme-guide-zh.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("主题指南"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("配置好主题后，在"),a("code",[t._v("package.json")]),t._v("文件下增加：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("运行：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 本地实时查看博客效果\nnpm run dev\n\n// 构建HTML页面\nnpm run build\n")])])]),a("p",[t._v("访问"),a("code",[t._v("http://localhost:8080/")]),t._v("就能看到属于你的博客页面了。")]),t._v(" "),a("h2",{attrs:{id:"部署到github-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署到github-pages"}},[t._v("#")]),t._v(" 部署到Github Pages")]),t._v(" "),a("p",[t._v("首先要开启"),a("code",[t._v("GitHub Pages")]),t._v("，开启方法是：仓库"),a("code",[t._v("Setting -> GitHub Pages")]),t._v("，"),a("code",[t._v("Source")]),t._v("选择"),a("code",[t._v("master branch")]),t._v("，访问"),a("code",[t._v("[用户名].github.io/[仓库名]")]),t._v("就能看到效果了。")]),t._v(" "),a("p",[t._v("如果想要在"),a("code",[t._v("[用户名].github.io")]),t._v("根目录下访问，必须设置仓库名为："),a("code",[t._v("[用户名].github.io")])]),t._v(" "),a("p",[a("code",[t._v("GitHub Pages")]),t._v("会自动寻找"),a("code",[t._v("index.html")]),t._v("或"),a("code",[t._v("README.MD")]),t._v("作为网站入口。")]),t._v(" "),a("h3",{attrs:{id:"使用github-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用github-actions"}},[t._v("#")]),t._v(" 使用Github Actions")]),t._v(" "),a("p",[a("code",[t._v("Actions")]),t._v("是自动化运维，持续集成服务，不了解的可以看我这篇文章："),a("a",{attrs:{href:"/devlop/github-actions"}},[t._v("《Mu教程系列：Github Actions 基础》")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("需求：")])]),t._v(" "),a("p",[t._v("我们把代码提交到"),a("code",[t._v("dev分支")]),t._v("，希望"),a("code",[t._v("Actions")]),t._v("可以自动"),a("code",[t._v("npm run build")]),t._v("并且把生成的"),a("code",[t._v("HTML文件")]),t._v("提交到"),a("code",[t._v("master分支")])]),t._v(" "),a("p",[a("strong",[t._v("实现：")])]),t._v(" "),a("p",[t._v("首先在"),a("code",[t._v("dev分支")]),t._v("下创建"),a("code",[t._v(".github/workflows/github_pages.yml")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Github Pages\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 触发事件：push到dev")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" dev\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 部署到master分支\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 更新代码\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@master\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 安装Node\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v1\n    \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 构建HTML\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n        npm i\n        npm run build")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 发布\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" peaceiris/actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages@v2.8.0\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("PERSONAL_TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.PERSONAL_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("PUBLISH_BRANCH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("PUBLISH_DIR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist\n")])])]),a("p",[t._v("我们主要使用到了"),a("a",{attrs:{href:"https://github.com/marketplace/actions/github-pages-action#%EF%B8%8F-static-site-generators-with-nodejs",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("peaceiris/actions-gh-pages")]),a("OutboundLink")],1),t._v("这个action，其中：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("PUBLISH_DIR")]),t._v("是Vuepress生成HTML文件的目录")]),t._v(" "),a("li",[a("code",[t._v("PUBLISH_BRANCH")]),t._v("是你要提交的分支")]),t._v(" "),a("li",[a("code",[t._v("PERSONAL_TOKEN")]),t._v("在你项目的"),a("code",[t._v("Settings -> Secrets")]),t._v("里设置，"),a("code",[t._v("Secret Value")]),t._v("在："),a("code",[t._v("个人Settings -> Developer settings -> Personal access tokens")]),t._v("里设置。")])]),t._v(" "),a("p",[t._v("至此，我们访问"),a("code",[t._v("[用户名].pages.io")]),t._v("就能看到我们自己的博客了！非常完美！离成功只差最后一步了！")]),t._v(" "),a("h2",{attrs:{id:"使用阿里云oss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用阿里云oss"}},[t._v("#")]),t._v(" 使用阿里云OSS")]),t._v(" "),a("p",[t._v("默认已有域名和SSL证书。")]),t._v(" "),a("p",[a("strong",[t._v("创建OSS：")])]),t._v(" "),a("p",[t._v("进入阿里云对象存储OSS控制台，点击"),a("code",[t._v("创建 Bucket")]),t._v("，区域选择"),a("code",[t._v("中国（香港）")]),t._v("（国内节点绑定自定义域名需要备案），读写权限选择"),a("code",[t._v("公共读")]),t._v("。")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("基础设置 -> 静态页面")]),t._v("设置首页和404页面，在"),a("code",[t._v("域名管理 -> 绑定用户域名")]),t._v("，绑定自定义域名。")]),t._v(" "),a("p",[a("strong",[t._v("创建accesskeys：")])]),t._v(" "),a("p",[t._v("阿里云控制台点击头像，选择"),a("code",[t._v("accesskeys")]),t._v("，点击"),a("code",[t._v("创建AccessKey")]),t._v("按钮，然后在Github项目里的"),a("code",[t._v("Settings -> Secrets")]),t._v("设置"),a("code",[t._v("AccessKeyID")]),t._v("和"),a("code",[t._v("AccessKeySecret")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("编写Github Actions：")])]),t._v(" "),a("p",[t._v("创建"),a("code",[t._v(".github/workflows/oss.yml")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Ali OSS\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 触发事件：push到oss")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" oss\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 部署到阿里云对象存储\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 更新代码\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@master\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 安装Node\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v1\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node-version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"12.x"')]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 构建HTML\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n        npm i\n        npm run build")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 连接OSS\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" manyuanrong/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ossutil@v2.0\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 地域节点，在控制台查看")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" oss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hongkong.aliyuncs.com\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 刚刚创建的id和secret")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("access-key-id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.OSS_ACCESS_KEY_ID "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("access-key-secret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.OSS_ACCESS_KEY_SECRET "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 发布到OSS\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ossutil cp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rf docs/.vuepress/dist/ oss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//xiaomucool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("blog/\n")])])]),a("p",[t._v("然后访问你的域名，就能看到你的博客了！我知道你的心情是喜悦的，但是一定要坚持写文章！加油，共勉！")])])}),[],!1,null,null,null);s.default=n.exports}}]);