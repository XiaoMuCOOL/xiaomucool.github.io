---
category: 运维
tags:
  - 教程
  - homebrew
date: 2024-05-13
permalink: /devlop/homebrew.html
title: Mu教程系列：Homebrew 基础
---

homebrew相关的一些安装、命令、操作记录。

<!-- more -->

## Homebrew 基础

### 安装 Homebrew

```shell
// 安装
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

// 如果安装报错运行：
$ git config --global --unset http.proxy
$ git config --global --unset https.proxy

// 安装成功后
$ (echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/xxx/.zprofile
$ eval "$(/opt/homebrew/bin/brew shellenv)"

// 测试是否安装成功
$ brew --version

```

### 常用命令

```shell
## 查询
brew search name

## 安装
brew install name

## 卸载
brew uninstall name

## 更新
brew updata

## 查看配置信息
brew config

## 查看已安装的包
brew list

```

### 配置 zsh

```shell
## 设置zsh为默认shell
chsh -s /bin/zsh

## 安装oh-my-zsh
sh -c "$(curl -fsSL https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh)"

## 安装语法高亮插件：zsh-syntax-highlighting
git clone --depth=1 https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

## 安装自动补全插件：zsh-autosuggestions
git clone --depth=1 https://github.com/zsh-users/zsh-autosuggestions.git ${ZSH_CUSTOM:-${ZSH:-~/.oh-my-zsh}/custom}/plugins/zsh-autosuggestions

## 安装 powerlevel10k 主题
cd ~/.oh-my-zsh/themes && ls
git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

## 打开配置文件
open ~/.zshrc

## 修改配置文件
ZSH_THEME="powerlevel10k/powerlevel10k"
plugins=(
    git
    # other plugins...
    zsh-syntax-highlighting
    zsh-autosuggestions
    z
)

```


[1]:https://hub.docker.com/editions/community/docker-ce-desktop-windows
[2]:https://hub.docker.com/signup