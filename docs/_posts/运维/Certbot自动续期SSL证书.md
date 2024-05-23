---
category: 运维
tags:
  - 教程
  - Certbot
date: 2024-05-22
permalink: /devlop/certbot.html
title: Certbot自动续期SSL证书
---

Certbot自动续期SSL证书相关的一些安装、命令、操作记录。

<!-- more -->

## Certbot 基础

### 安装 Certbot

```shell
// 安装 snapd
$ sudo apt install snapd
// 安装 certbot
$ sudo snap install --classic certbot
$ sudo ln -s /snap/bin/certbot /usr/bin/certbot
$ 
$ ln -s /usr/local/nginx/sbin/nginx /usr/bin/nginx
ln -s /usr/local/nginx/conf/ /etc/nginx

```

### 常用命令

```cmd
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

```cmd
## 设置zsh为默认shell
chsh -s /bin/zsh

## 安装oh-my-zsh
sh -c "$(curl -fsSL https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh)"

## 安装语法高亮插件：zsh-syntax-highlighting
git clone --depth=1 https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

## 安装自动补全插件：zsh-autosuggestions
git clone --depth=1 https://github.com/zsh-users/zsh-autosuggestions.git ${ZSH_CUSTOM:-${ZSH:-~/.oh-my-zsh}/custom}/plugins/zsh-autosuggestions

## 打开配置文件
open ~/.zshrc

## 修改配置文件
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