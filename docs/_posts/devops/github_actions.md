---
category: 运维
tags:
  - 教程
  - github actions
  - ci/cd
date: 2020-01-01
title: Github Actions 教程
draft: false
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

## 常用Action

我们可以在[官方市场][3]里搜索所有`action`，比较常用的有：

- checkout
- ...

::: tip 注意
:loudspeaker: 触发事件见[文档][1]、工作流程语法见[文档][2]
:::

[1]:https://help.github.com/cn/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows
[2]:https://help.github.com/cn/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
[3]:https://github.com/marketplace?type=actions
