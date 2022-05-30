---
# category: 其他
# tags:
#   - 项目
#   - git
date: 2020-01-26
title: 5iuse项目Git工作流
vssue: false
draft: true
---

5iuse-admin项目工作流程介绍。

<!-- more -->

## 后端流程

**后端项目仓库：[5iuse-admin][1]**

### 分支

- [dev][2]：后端默认在`dev`分支开发，可以提交完成一半的代码，不用提交`5iuse-ui`文件。
- [master][3]：当要发版时合并到`master`分支，并确保程序可以运行。


**注意：** 项目自动生成的`5iuse-ui`代码请提交到前端仓库[5iuse][4]的[generate][5]分支。

```git{6-7}
# 平时在dev分支开发
# TODO

# 发布时切换到master分支
$ git checkout master
# 合并dev分支
$ git merge dev
# 如果有冲突请解决冲突后提交，没有冲突直接push
$ git add .
$ git commit -m '解决冲突'
$ git push origin master
```

在`master`分支提交是会触发`github actions`自动构建，所以务必保证`master`分支上的代码是可运行的！

最正规的做法是写好测试用例，然后在`Dockerfile`里如果不通过就不会构建。

## 前端流程

**前端项目仓库：[5iuse][4]**

### 分支

- [generate][5]：后端提交项目自动生成的`5iuse-ui`代码。
- [dev][6]：前端默认在`dev`分支下开发，但是要先合并`generate`分支的代码。
- [master][7]：当要发版时合并到`master`分支。

```git{8,12}
# 平时在dev分支
# TODO

# 后端更新了generate分支代码，则合并
$ git checkout generate
$ git pull origin generate
$ git checkout dev
$ git merge generate

# 完成开发，要发布版本时，合并到master分支
$ git checkout master
$ git merge dev
# 如果有冲突请解决冲突后提交
$ git add .
$ git commit -m '解决冲突'
$ git push origin master
```

**同样可以自动触发前端构建，自动更新。**

[1]:https://github.com/xiaomucool/5iuse-admin
[2]:https://github.com/XiaoMuCOOL/5iuse-admin/tree/dev
[3]:https://github.com/XiaoMuCOOL/5iuse-admin/tree/master
[4]:https://github.com/XiaoMuCOOL/5iuse
[5]:https://github.com/XiaoMuCOOL/5iuse/tree/generate
[6]:https://github.com/XiaoMuCOOL/5iuse/tree/dev
[7]:https://github.com/XiaoMuCOOL/5iuse/tree/master
