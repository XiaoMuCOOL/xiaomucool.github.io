---
category: 运维
tags:
  - 教程
  - Linux
date: 2020-01-03
permalink: /devlop/linux.html
title: Mu教程系列：Linux 基础
vssue-title: Mu教程系列
vssue-id: 8
---

服务器、常用软件的基本命令介绍。

<!-- more -->

## Linux基本命令

```shell
// 基本
$ cat /etc/issue   // 查看系统版本
$ lsb_release -a   // 查看系统版本
$ df -hl           // 查看磁盘信息

// 操作文件
$ ls               // 查看
$ mkdir folderName // 新建文件夹
$ touch fileName   // 新建文件
$ cd folderName    // 进入
$ rm -fr fileName  // 删除
$ pwd              // 打印当前路径
$ mv folderName1 folderName2           // 重命名
`注：folderName2存在则覆盖，文件名是folderName1，否则重命名为folderName2，同时移动所有文件`
$ cp -r /tmp/a /root/a                 // 复制文件

// 查看系统状况
$ ps -aux | grep name                  // 查看进程
$ netstat -apn                         // 查看所有端口
$ netstat -apn | grep 8080             // 查看精确端口
$ kill 32102                           // 关闭进程(进程PID)
$ which nohup                          // 查看命令绝对路径
$ nohup xxxx &                         // 后台运行

$ df -h                                // 查看系统磁盘使用情况
$ find / -size +50M |xargs ls -lh      // 查找大于50M的文件
$ find / -iname *.txt                  // 查找以.txt结尾的文件,不许分大小
$ find / -iname *.txt -a -iname "a*"   // 查找以a开头和以.txt结尾的文件
$ find / -iname *.txt -a -iname "a*" -fprint /a.txt   // 查找以a开头和以.txt结尾的文件并输出到a.txt
$ cat /dev/null > /opt/git/error.log   // 清空文件
$ du -sh /var/lib/docker/containers/   // 查看文件夹大小
$ ps -aux | grep -v grep | grep [PID]  // 通过PID查看是哪儿个服务

# 压缩
$ tar -cvf [文件名].tar [文件目录]       // 压缩成.tar格式,压缩率最低,速度最快
$ tar -xvf [文件名].tar -C [文件目录]    // 解压.tar文件到指定目录,目录必须存在

$ tar -zcvf [文件名].gz [文件目录]       // 压缩成.gz格式,压缩率适中
$ tar -zxvf [文件名].tar.gz -C [文件目录]    // 解压.gz文件到指定目录,目录必须存在

$ tar -jcvf [文件名].bz2 [文件目录]      // 压缩成.bz2格式,压缩率最高,速度最慢
$ tar -jxvf [文件名].tar.bz2 -C [文件目录]   // 解压.bz2文件到指定目录,目录必须存在

# 传输文件
$ scp a.txt root@192.168.0.10:/home/  // 传输本服务器a.txt文件到远程服务器的home文件夹下，-r 参数传输文件夹，-v 参数显示详情

# 下载ftp文件
$ wget -b -t 5 ftp://root:xxx@47.103.81.123/home/mysql-20220727.tar.gz
```

## VI基本命令

```shell
$ i              // 编辑模式
$ v              // visual模式
$ ZZ             // 保存退出
$ :q!            // 不保存退出
$ fg             // 打开后台

$ j              // 下
$ k              // 上
$ h              // 左
$ l              // 右
$ d              // 剪切操作
$ y              // 复制操作
$ p              // 粘贴操作
$ ^              // 跳至行首
$ $              // 跳至行尾
$ gg             // 跳至文首
$ G              // 跳至最后
$ 5gg/5G         // 调至第5行

$ dd             // 删除光标所在行
$ ggdG           // 清空
$ ggVG           // 全选

$ :%s/old/new/g   // 搜索整个文件，将所有的old替换为new

// 多行插入
$ ctrl + v     // 进入块编辑模式
$ hjkl         // 选择多行
$ shift + i    // 块模式下插入

```

# 更改Ubuntu镜像源
```shell
vi /etc/apt/sources.list

ggdG
i

deb http://mirrors.aliyun.com/ubuntu/ xenial main
deb-src http://mirrors.aliyun.com/ubuntu/ xenial main

deb http://mirrors.aliyun.com/ubuntu/ xenial-updates main
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-updates main

deb http://mirrors.aliyun.com/ubuntu/ xenial universe
deb-src http://mirrors.aliyun.com/ubuntu/ xenial universe
deb http://mirrors.aliyun.com/ubuntu/ xenial-updates universe
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-updates universe

deb http://mirrors.aliyun.com/ubuntu/ xenial-security main
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-security main
deb http://mirrors.aliyun.com/ubuntu/ xenial-security universe
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-security universe

apt-get update

apt-get upgrade

```

## Nginx
[中文文档][1]

```shell
# 启动/重启/停止
$ nginx           #启动
$ nginx -s reload #重启
$ nginx -s stop   #快速停止
$ nginx -s quit   #正常停止
```

## TensorFlow

[中文文档][0]
### 安装
```js
$ docker run -it --rm -v /d/docker_data/tf/notebooks:/tf/notebooks -p 8888:8888 tensorflow/tensorflow:latest-py3-jupyter
```

[0]:http://www.tensorfly.cn/tfdoc/get_started/os_setup.html
[1]:http://www.nginx.cn/nginx-how-to