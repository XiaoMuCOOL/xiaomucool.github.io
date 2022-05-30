---
category: 运维
tags:
  - 教程
  - docker
date: 2022-05-30
permalink: /devlop/docker1.html
title: Docker 教程（一）：初识
vssue-title: Docker 教程
vssue-id: 7
---

Docker相关的一些安装、命令、操作记录。

<!-- more -->

## Docker 基本概念

### Windows 安装 Docker

- [下载][1]
- [注册][2]

**打开`CMD`或`Powershell`就可以愉快的玩耍Docker了**

### Ubuntu 安装 Docker

```shell
// Ubuntu 自带docker.io源
sudo apt install docker.io -y
```
### 常用命令

```cmd
// 基本
docker version // 查看版本详情
docker -v      // 查看版本简单版

// 搜索
docker search ubuntu

// 拉取
docker pull ubuntu:latest // tag：最新版
docker images             // 查看本地镜像

// 创建(类似安装系统)
docker run -it -p 8080:8080 ubuntu /bin/bash  // -it表示打开并保持stdout，并分配一个终端（pseudo-tty）
docker run -d -p 80:80 --name [myname] nginx

// 退出
exit                     // 容器关闭，状态为：Exit
快捷键 ctrl+p ctrl+q     // 后台运行，状态为：Up
docker ps -a             // 查看状态

// 操作容器
docker start CONTAINERID              // 启动
docker stop CONTAINERID               // 停止
docker restart CONTAINERID            // 重启
docker attach CONTAINERID             // 进入
docker exec -it CONTAINERID /bin/bash // 进入（如创建时未it）

// 提交镜像到本地仓库
docker commit -m "msg" -a "Author" CONTAINERID 用户名/仓库名:tag

// 删除镜像
docker rm CONTAINERID  // 必须先删除所有容器
docker rmi IMAGESID    // 接着删除镜像

// 提交镜像到hub
docker push 用户名/仓库名:tag

```

### Dockerfile常用参数

```cmd
FROM        // 指定构建镜像的基础源镜像
MAINTAINER  // 维护者的信息
RUN         // 在当前镜像基础上执行指定命令
CMD         // 启动容器时提供一个默认的命令执行选项
EXPOSE      // 服务端容器对外映射的本地端口
ENV         // 指定一个环节变量，会被后续RUN指令使用，并在容器运行时保留
ADD         // 复制本地主机文件、目录或者远程文件URLS从并且添加到容器指定路径中，支持正则模糊匹配
COPY        // 复制新文件或者目录从并且添加到容器指定路径中 
VOLUME      // 创建一个可以从本地主机或其他容器挂载的挂载点
WORKDIR     // 为后续的RUN、CMD、ENTRYPOINT指令配置工作目录。可以使  用多个WORKDIR指令，后续命令如果参数是相对路径，则会基于之前命令指  定的路径

// 构建镜像
docker build -t name 目录 // 当前目录用`.`表示
```

### WSL相关问题

打开`PowerShell`,运行：

```cmd
ubuntu config --default-user root  // 默认root登录

// 进入ubuntu系统，设置默认连接windows的守护进程
vi ~/.bashrc                               // 打开
export DOCKER_HOST=tcp://127.0.0.1:2375    // 最后一行添加
source ~/.bashrc                           // 运行下
```

### docker-compose.yml常用参数

```cmd
version: "3"
services:
  web:                              # 自定义服务名叫web
    image: username/repo:tag
    deploy:
      replicas: 5                   # 运行5个实例作为一个服务
      resources:
        limits:
          cpus: "0.1"               # 每个实例最多使用10%CPU
          memory: 50M               # 每个实例最多使用50MB的RAM
      restart_policy:
        condition: on-failure       # 如果容器出错，立即重启
    ports:
      - "4000:80"
    networks:
      - webnet                      # 负载平衡网络
networks:
  webnet:
```

### Swarm 常用命令

```cmd
// 基本
docker swarm init                                // 初始化swarm
docker stack deploy -c docker-compose.yml name   // 部署新堆栈或更新现有堆栈

docker stack ls                                 // 列出现有堆栈
docker service ls                               // 查看服务
docker service ps name                          // 查看实例
docker container ls -q                          // 查看所有容器id
docker stack rm name                            // 退出程序
docker swarm leave --force                      // 退出swarm
systemctl restart docker                        // 重启swarm

```

### 使用UI工具 - Portainer
```cmd
# 初始化 swarm 集群  
docker swarm init --advertise-addr [IP地址] 

# 创建 portainer 挂载目录
mkdir -p /home/portainer

# 以 swarm service 建立 portainer 管理 
docker service create \
--name portainer \
--publish 9000:9000 \
--replicas=1 \
--constraint 'node.role == manager' \
--mount type=bind,src=//var/run/docker.sock,dst=/var/run/docker.sock \
--mount type=bind,src=//home/portainer,dst=/data \
portainer/portainer-ce \
-H unix:///var/run/docker.sock
```

### 使用阿里云镜像库
```cmd
# 登陆
docker login --username=master@bingblue.com registry.cn-shanghai.aliyuncs.com

# 提交
docker tag [ImageId] registry.cn-shanghai.aliyuncs.com/bingblue/[镜像名]:[镜像版本号]
docker push registry.cn-shanghai.aliyuncs.com/bingblue/[镜像名]:[镜像版本号]
```

### Docker images 版本区分
- `alpine`: linux发行版,只有5M,几乎无软件仓库支持
- `stretch`: Debian 9 的代号,2017年发行
- `jessie`: Debian 8 的代号,2015年发行
- `wheezy`: Debian 7 的代号,2013年发行
- `slim`: 瘦身版,比如`xxx-jessie-slim`就是基于`jessie`的瘦身版
- `perl`: nginx支持perl模块的版本
- `mainline`: nginx目前主力在做的版本,可以说是开发版
- `stable`: 稳定版
- `chakracore`: 基于Edge浏览器的`ChakraCore`引擎的node版本

**总结：推荐使用`alpine`，其次推荐`slim`**

## 实战：项目部署

### 一、编写docker-compose.yml文件

```compose
version: '3.6'
services:
  # nginx 略...
  # mysql 略...
  # xbjh_admin 略...
  # xbjh 略...
networks:
  bingblue:
    driver: overlay
    ipam:
      driver: default
      config:
        - subnet: 10.88.0.0/16
```
**然后上传到服务器，目录`/root/yml/docker-compose.yml`**

### 二、部署
```shell
# 初始化Swarm集群
docker swarm init --advertise-addr [IP地址]

# 创建目录
mkdir nginx             // 并在此目录下上传Nginx配置文件 default.conf
mkdir mysql
mkdir xbjh_admin
mkdir xbjh_admin/file
mkdir xbjh_admin/log

# 登陆阿里云私有库账号
docker login --username=master@bingblue.com registry.cn-shanghai.aliyuncs.com

# 进入yml目录
cd /root/yml

# 部署新堆栈或更新现有堆栈
docker stack deploy -c docker-compose.yml [堆栈名称] --with-registry-auth
```

### 三、项目更新
```shell
# 修改docker-compose.yml并上传
cd /root/yml

# 更新现有堆栈
docker stack deploy -c docker-compose.yml xbjh --with-registry-auth

# 单独重启某个Service
docker service update --force [Service ID]
```

### 四、注意事项

- :white_check_mark: 记得阿里云配置安全组入方向规则
- :white_check_mark: 配置HTTPS和CDN时要设置: `协议跟随回源`


[1]:https://hub.docker.com/editions/community/docker-ce-desktop-windows
[2]:https://hub.docker.com/signup