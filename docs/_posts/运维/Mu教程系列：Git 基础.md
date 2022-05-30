---
category: 运维
tags:
  - 教程
  - git
date: 2020-01-04
permalink: /devlop/git
title: Mu教程系列：Git 基础
vssue-id: 4
---

Git相关的一些操作记录。

<!-- more -->

## git commit 提交规范
本 Git 提交规范参考了 `AngularJS` 在 `Github` 上的提交记录，并且中文翻译了一下。

**格式：** 
```git
类型：commit的简短描述
```

**类型分为：（:star:代表常用）**

- 功能：新功能（feature）:star:
- 补丁：修复bug（fix）:star:
- 优化：性能优化（perf）:star:
- 构建：构建过程或辅助、build工具的变动（chore）
- 重构：某个已有功能重构（refactor）
- 文档：文档改变（docs）
- 测试：增加测试（test）
- 风格：代码格式改变，文件目录改变等（style）
- 撤销：撤销某次 commit（revert）

**简短描述：**

已动词开头，必须包含功能模块名称，结尾无需标点符号，不超过50个字符。

**例子：**

```git
功能：添加用户模块导出功能
补丁：解决用户模块导出功能BUG
// 如果有BUG编号（简短表述固定为：BUG #编号）
补丁：BUG #122
重构：更新用户模块导出功能
```


## 稀疏检出

稀疏检出：只检出你配置的文件夹。

```git
git config core.sparseCheckout true
echo "document/" >> .git/info/sparse-checkout
```

然后正常`pull`、`checkout`、`merge`都只会对你配置的`document`文件夹下生效。

关闭稀疏检出：

```git
echo "/*" > .git/info/sparse-checkout
git read-tree -mu HEAD

git config core.sparseCheckout false
rm -rf .git/info/sparse-checkout
```

## 删除已add文件

```git
$ git rm --cached 'file path' #删除缓存，不物理删除
$ git rm --f 'file path'  #删除缓存并物理删除

# -r 向下递归删除
# -f 强制删除

$ git rm -rf --cached 'folder' #删除‘folder’下所有东西
```
## 删除未跟踪文件
```git
$ git clean -nxfd

# -r 删除untracked files
# -fd 连untracked的目录一起删除
# -xfd 连.gitignore的untrack 文件/目录也一起删掉
# -n 提示会删掉哪些文件
```

## 还原到远程版本
```git
$ git fetch origin 'branch-name'
$ git reset --hard 'origin/branch-name'
```

## 忽略跟踪

```git
$ git update-index --assume-unchanged /path/to/file
```

## 恢复跟踪

```git
$ git update-index --no-assume-unchanged /path/to/file
```

## 删除远程commit

```git
$ git reset --hard [commitID]
$ git push origin HEAD:master --force
```

## 日志查看

```git
# 简略日志信息
$ git log --stat
# 每次提交的内容差异(-2是最近两次)
$ git log -p -2
# 创建别名 `Git\etc\gitconfig`
[alias]
 lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
```

## 标签

```git
# 创建带有说明的标签
$  git tag -a v0.1 -m "version 0.1 初始化"
# 为某一个commit打标签
$   git tag v0.2 [commitID]
```

## github加速

修改`C:/Windows/system32/drivers/etc/hosts`文件：

```cmd
151.101.44.249 github.global.ssl.fastly.net
192.30.253.113 github.com
103.245.222.133 assets-cdn.github.com
23.235.47.133 assets-cdn.github.com
203.208.39.104 assets-cdn.github.com
204.232.175.78 documentcloud.github.com
204.232.175.94 gist.github.com
107.21.116.220 help.github.com
207.97.227.252 nodeload.github.com
199.27.76.130 raw.github.com
107.22.3.110 status.github.com
204.232.175.78 training.github.com
207.97.227.243 www.github.com
185.31.16.184 github.global.ssl.fastly.net
185.31.18.133 avatars0.githubusercontent.com
185.31.19.133 avatars1.githubusercontent.com
```

然后在`CMD`运行：`ipconfig /flushdns`刷新。
