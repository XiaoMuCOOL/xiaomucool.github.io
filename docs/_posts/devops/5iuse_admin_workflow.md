---
category: 文档
tags:
  - 项目
  - git
date: 2020-01-26
title: 5iuse-admin Git工作流
vssue: false
---

5iuse-admin项目工作流程介绍。

<!-- more -->

## 后端流程

后端默认在`dev`分支开发。

当要发版时合并到`master`分支：

```git{3,4}
# 切换到master分支
$ git checkout master
# 合并dev分支
$ git merge dev
# 如果有冲突请解决冲突后提交
$ git add .
$ git commit -m '解决冲突'
$ git push origin master
```

在`master`分支提交是会触发`github actions`自动构建，所以务必保证`master`分支上的代码是可运行的！

最正规的做法是写好测试用例，然后在`Dockerfile`里如果不通过就不会构建。

## 前端流程

前端默认在`frontend-dev`分支下开发，但是要先合并`master`分支下的`/5iuse-ui`文件夹。

```git{5-10}
# 在master分支
$ git checkout master
# 先新建一个临时分支
$ git checkout -b temp
# 1.先删除所有文件
# 2.只检出5iuse-ui文件夹
# 3.提交commit
$ git checkout master 5iuse-ui/
$ git add .
$ git commit -m '只更新5iuse-ui文件夹'
# 切换到frontend-dev分支
$ git checkout frontend-dev
# 合并temp分支
$ git merge temp
# 如果有冲突请解决冲突后提交
$ git add .
$ git commit -m '解决冲突'
$ git push origin frontend-dev
# 删除temp分支
$ git branch -D temp
```

**这样子`master`分支和`frontend-dev`分支上更新`5iuse-ui`的内容都能保留，不会被覆盖。**

当要发版时合并到`frontend`分支：

```git{3,4}
# 切换到frontend分支
$ git checkout frontend
# 合并frontend-dev分支
$ git merge frontend-dev
# 如果有冲突请解决冲突后提交
$ git add .
$ git commit -m '解决冲突'
$ git push origin frontend
```

同样可以自动触发前端构建，自动更新。
