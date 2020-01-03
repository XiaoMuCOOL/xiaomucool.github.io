(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{248:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("介绍下本博客的搭建流程，主要用到静态站点生成"),e("code",[t._v("vuepress")]),t._v("、自动化部署"),e("code",[t._v("github actions")]),t._v("、和阿里云OSS。")]),t._v(" "),e("h2",{attrs:{id:"搭建流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建流程"}},[t._v("#")]),t._v(" 搭建流程")]),t._v(" "),e("ul",[e("li",[t._v("在"),e("code",[t._v("dev 分支")]),t._v("使用"),e("code",[t._v("Vuepress")]),t._v("写博客")]),t._v(" "),e("li",[e("code",[t._v("push")]),t._v("到"),e("code",[t._v("github")])]),t._v(" "),e("li",[e("code",[t._v("github actions")]),t._v("自动生成静态页面部署到"),e("code",[t._v("master分支")])]),t._v(" "),e("li",[e("code",[t._v("github actions")]),t._v("自动部署到"),e("code",[t._v("阿里云OSS")])]),t._v(" "),e("li",[t._v("完成，查看"),e("a",{attrs:{href:"https://xiaomucool.pages.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("xiaomucool.pages.io"),e("OutboundLink")],1),t._v("和"),e("a",{attrs:{href:"https://xiaomucool.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("xiaomucool.com"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"使用vuepress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用vuepress"}},[t._v("#")]),t._v(" 使用Vuepress")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("Vuepress")]),e("OutboundLink")],1),t._v("是Vue 驱动的静态网站生成器，支持"),e("a",{attrs:{href:"https://guides.github.com/features/mastering-markdown/",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("markdown")]),e("OutboundLink")],1),t._v("语法、"),e("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json%5D:https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("Emoji")]),e("OutboundLink")],1),t._v("图标。")]),t._v(" "),e("p",[t._v("我们先来安装它：")]),t._v(" "),e("div",{staticClass:"language-cmd extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm i vuepress -S\n")])])]),e("p",[e("code",[t._v("Vuepress")]),t._v("默认主题适合写接口文档，我们还要安装适合博客的主题"),e("a",{attrs:{href:"https://github.com/meteorlxy/vuepress-theme-meteorlxy",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("vuepress-theme-meteorlxy")]),e("OutboundLink")],1),t._v("：")]),t._v(" "),e("div",{staticClass:"language-cmd extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm i vuepress-theme-meteorlxy -S\n")])])]),e("p",[t._v("环境安装好了，我们开始写文章吧！文章存放目录为："),e("code",[t._v("docs/_posts/**/*.md")]),t._v("，它会默认读取这个文件夹下的md文件。")]),t._v(" "),e("p",[t._v("主题"),e("code",[t._v("vuepress-theme-meteorlxy")]),t._v("需要配置一些参数，详情请见"),e("a",{attrs:{href:"https://vuepress-theme-meteorlxy.meteorlxy.cn/posts/2019/02/26/theme-guide-zh.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("主题指南"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("配置好主题后，在"),e("code",[t._v("package.json")]),t._v("文件下增加：")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("p",[t._v("运行：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 本地实时查看博客效果\nnpm run dev\n\n// 构建HTML页面\nnpm run build\n")])])]),e("p",[t._v("访问"),e("code",[t._v("http://localhost:8080/")]),t._v("就能看到属于你的博客页面了。")]),t._v(" "),e("h2",{attrs:{id:"部署到github-pages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署到github-pages"}},[t._v("#")]),t._v(" 部署到Github Pages")]),t._v(" "),e("p",[t._v("首先要开启"),e("code",[t._v("GitHub Pages")]),t._v("，开启方法是：仓库"),e("code",[t._v("Setting -> GitHub Pages")]),t._v("，"),e("code",[t._v("Source")]),t._v("选择"),e("code",[t._v("master branch")]),t._v("，访问"),e("code",[t._v("[用户名].github.io/[仓库名]")]),t._v("就能看到效果了。")]),t._v(" "),e("p",[t._v("如果想要在"),e("code",[t._v("[用户名].github.io")]),t._v("根目录下访问，必须设置仓库名为："),e("code",[t._v("[用户名].github.io")])]),t._v(" "),e("p",[e("code",[t._v("GitHub Pages")]),t._v("会自动寻找"),e("code",[t._v("index.html")]),t._v("或"),e("code",[t._v("README.MD")]),t._v("作为网站入口。")]),t._v(" "),e("h3",{attrs:{id:"使用github-actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用github-actions"}},[t._v("#")]),t._v(" 使用Github Actions")]),t._v(" "),e("p",[e("code",[t._v("Actions")]),t._v("是自动化运维，持续集成服务，不了解的可以看我这篇文章："),e("a",{attrs:{href:"/_posts/devops/github_actions"}},[t._v("《Github Actions 教程》")]),t._v("。")]),t._v(" "),e("p",[e("strong",[t._v("需求：")])]),t._v(" "),e("p",[t._v("我们把代码提交到"),e("code",[t._v("dev分支")]),t._v("，希望"),e("code",[t._v("Actions")]),t._v("可以自动"),e("code",[t._v("npm run build")]),t._v("并且把生成的"),e("code",[t._v("HTML文件")]),t._v("提交到"),e("code",[t._v("master分支")])]),t._v(" "),e("p",[e("strong",[t._v("实现：")])]),t._v(" "),e("p",[t._v("首先在"),e("code",[t._v("dev分支")]),t._v("下创建"),e("code",[t._v(".github/workflows/github_pages.yml")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Github Pages\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 触发事件：push到dev")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" dev\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 部署到master分支\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 更新代码\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@master\n\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 安装Node\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v1\n    \n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 构建HTML\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n        npm i\n        npm run build")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 发布\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" peaceiris/actions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("gh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages@v2.8.0\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("PERSONAL_TOKEN")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.PERSONAL_TOKEN "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("PUBLISH_BRANCH")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("PUBLISH_DIR")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist\n")])])]),e("p",[t._v("我们主要使用到了"),e("a",{attrs:{href:"https://github.com/marketplace/actions/github-pages-action#%EF%B8%8F-static-site-generators-with-nodejs",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("peaceiris/actions-gh-pages")]),e("OutboundLink")],1),t._v("这个action，其中：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("PUBLISH_DIR")]),t._v("是Vuepress生成HTML文件的目录")]),t._v(" "),e("li",[e("code",[t._v("PUBLISH_BRANCH")]),t._v("是你要提交的分支")]),t._v(" "),e("li",[e("code",[t._v("PERSONAL_TOKEN")]),t._v("在你项目的"),e("code",[t._v("Settings -> Secrets")]),t._v("里设置，"),e("code",[t._v("Secret Value")]),t._v("在："),e("code",[t._v("个人Settings -> Developer settings -> Personal access tokens")]),t._v("里设置。")])]),t._v(" "),e("p",[t._v("至此，我们访问"),e("code",[t._v("[用户名].pages.io")]),t._v("就能看到我们自己的博客了！非常完美！离成功只差最后一步了！")]),t._v(" "),e("h2",{attrs:{id:"使用阿里云oss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用阿里云oss"}},[t._v("#")]),t._v(" 使用阿里云OSS")]),t._v(" "),e("p",[t._v("// TODO")])])}),[],!1,null,null,null);s.default=n.exports}}]);