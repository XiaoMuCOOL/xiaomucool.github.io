---
category: 运维
tags:
  - 教程
  - github actions
date: 2020-01-05
permalink: /devlop/github-actions.html
title: Mu教程系列：Github Actions 基础
vssue-id: 2
---

`Github Actions`是`GitHub`推出的持续集成服务（CI/CD），可以放弃`Jenkins`了，节省一台服务器。

<!-- more -->

## 基本概念

- workflow：工作流程
- job：任务
- step：步骤
- action：动作/命令

文件存放于项目根目录下的`.github/workflows/**.yml`

## 基本语法
```yml
# test.yml

# 名称：未设置取文件名
name: test
# 触发事件
on:
  # 推送事件
  push:
    # 分支
    branches:
      - master
  # 定时任务
  schedule:
    # 国际标准时间21点，北京时间5点
    - cron: '0 21 * * *'
# 任务
jobs:
  # 任务ID
  job1:
    # 任务说明
    name: 第一个任务
    # 虚拟机环境：windows-latest、ubuntu-latest、macOS-latest
    runs-on: ubuntu-latest
    # 步骤
    steps:
      # 步骤说明
      - name: 步骤
        # 条件判断：总是运行always、上一步成功success、上一步失败failure
        if: always()
        # 环境变量
        evn:
          HOME_PATH: ../home
        # 使用action
        uses: actions/checkout@v1
        # 使用Docker
        uses: docker://node:alpine
        # 运行命令
        run: |
          npm install
          npm run build

  job2:
    name: 第二个任务
    # 前任务的依赖关系
    needs: job1
```


::: tip 注意
:loudspeaker: 触发事件见[文档][1]、工作流程语法见[文档][2]
:::

## 常用Action

我们可以在[官方市场][3]里搜索所有`action`，比较常用的有：

| 名称                     | 功能            |
| ------------------------ |:--------------:| 
| [actions/checkout][4]    |    更新代码     |
| [actions/setup-node][5]  |   安装Nodejs    |
| [peaceiris/actions-gh-pages][6] | 提交生成代码到某个分支 |
| [manyuanrong/setup-ossutil][7] | 提交生成代码到阿里云OSS |
| [bingblue/send-nodemailer][8] | 发送邮件 |
| [稍后更新][9] | 发送短信 |
| [elgohr/Publish-Docker-Github-Action][10] | 发布Docker到私有库 |



[1]:https://help.github.com/cn/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows
[2]:https://help.github.com/cn/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
[3]:https://github.com/marketplace?type=actions
[4]:https://github.com/marketplace/actions/checkout
[5]:https://github.com/marketplace/actions/setup-node-js-for-use-with-actions
[6]:https://github.com/marketplace/actions/github-pages-action
[7]:https://github.com/marketplace/actions/setup-ossutil
[8]:https://github.com/marketplace/actions/send-nodemailer
[9]:https://github.com/marketplace/actions/
[10]:https://github.com/marketplace/actions/publish-docker
[11]:https://github.com/marketplace/actions/
