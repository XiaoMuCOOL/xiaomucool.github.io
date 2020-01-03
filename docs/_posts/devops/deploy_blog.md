---
category: 运维
tags:
  - 教程
  - github actions
  - ci/cd
  - vuepress
date: 2020-01-02
title: 搭建个人博客
top: 1
draft: false
---

介绍下本博客的搭建流程，主要用到静态站点生成`vuepress`、自动化部署`github actions`、和阿里云OSS。

<!-- more -->

## 搭建流程

- 在`dev 分支`使用`Vuepress`写博客
- `push`到`github`
- `github actions`自动生成静态页面部署到`master分支`
- `github actions`自动部署到`阿里云OSS`
- 完成，查看[xiaomucool.pages.io][2]和[xiaomucool.com][3]

## 使用Vuepress

[`Vuepress`][1]是Vue 驱动的静态网站生成器，支持[`markdown`][6]语法、[`Emoji`][5]图标。

我们先来安装它：
```cmd
npm i vuepress -S
```

`Vuepress`默认主题适合写接口文档，我们还要安装适合博客的主题[`vuepress-theme-meteorlxy`][4]：
```cmd
npm i vuepress-theme-meteorlxy -S
```

环境安装好了，我们开始写文章吧！文章存放目录为：`docs/_posts/**/*.md`，它会默认读取这个文件夹下的md文件。

主题`vuepress-theme-meteorlxy`需要配置一些参数，详情请见[文档][7]

在`package.json`文件下增加：
```json{2-3}
"scripts": {
  "dev": "vuepress dev docs",
  "build": "vuepress build docs"
},
```

运行：
```
// 本地实时查看博客效果
npm run dev

// 构建HTML页面
npm run build
```

访问`http://localhost:8080/`就能看到属于你的博客页面了。

## 部署到Github Pages

首先要开启`GitHub Pages`，开启方法是：仓库`Setting -> GitHub Pages`，`Source`选择`master branch`，访问`[用户名].github.io/[仓库名]`就能看到效果了。

如果想要在`[用户名].github.io`根目录下访问，必须设置仓库名为：`[用户名].github.io`

`GitHub Pages`会自动寻找`index.html`或`README.MD`作为网站入口。

### 使用Github Actions

`Actions`是自动化运维，持续集成服务，不了解的可以看我这篇[教程][8]。

**需求**

我们把代码提交到`dev分支`，希望`Actions`可以自动`npm run build`并且把生成的`HTML文件`提交到`master分支`

**实现**
首先在`dev分支`下创建`.github/workflows/github_pages.yml`：
```yml
name: Github Pages
# 触发事件：push到dev
on:
  push:
    branches:
      - dev
jobs:
  deploy:
    name: 部署到master分支
    runs-on: ubuntu-latest
    steps:
    - name: 更新代码
      uses: actions/checkout@master

    - name: 安装Node
      uses: actions/setup-node@v1
    
    - name: 构建HTML
      run: |
        npm i
        npm run build
    
    - name: 发布
      uses: peaceiris/actions-gh-pages@v2.8.0
      env:
        PERSONAL_TOKEN: ${{ secrets.PERSONAL_TOKEN }}
        PUBLISH_BRANCH: master
        PUBLISH_DIR: docs/.vuepress/dist
```
我们主要使用到了[`peaceiris/actions-gh-pages`][9]这个action，其中：
- `PUBLISH_DIR`是Vuepress生成HTML文件的目录
- `PUBLISH_BRANCH`是你要提交的分支
- `PERSONAL_TOKEN`在你项目的`Settings -> Secrets`里设置，`Secret Value`在：`个人Settings -> Developer settings -> Personal access tokens`里设置。

至此，我们访问[用户名].pages.io就能看到我们自己的博客内容了！感谢！

## 使用阿里云OSS

// TODO


[1]:https://vuepress.vuejs.org/zh/
[2]:https://xiaomucool.pages.io
[3]:https://xiaomucool.com
[4]:https://github.com/meteorlxy/vuepress-theme-meteorlxy
[5]:https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json]:https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json
[6]:https://guides.github.com/features/mastering-markdown/
[7]:https://vuepress-theme-meteorlxy.meteorlxy.cn/posts/2019/02/26/theme-guide-zh.html
[8]:/_posts/devops/github_actions
[9]:https://github.com/marketplace/actions/github-pages-action#%EF%B8%8F-static-site-generators-with-nodejs
