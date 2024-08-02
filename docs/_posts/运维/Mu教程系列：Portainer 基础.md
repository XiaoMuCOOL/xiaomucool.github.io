---
category: 运维
tags:
  - 教程
  - Linux
date: 2022-07-27
permalink: /devlop/portainer.html
title: Mu教程系列：Portainer 基础
vssue-title: Mu教程系列
vssue-id: 8
---

Portainer 基本介绍。

<!-- more -->

## 简介

### 安装 - Portainer
```shell
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
--mount type=bind,src=//opt/portainer,dst=/data \
portainer/portainer-ce:sts \
-H unix:///var/run/docker.sock
```

## 常用功能

### 添加其他服务器

操作路径：
>- Environments -> add environment -> Agent -> Docker Swarm

然后在服务器运行：

```shell
# 初始化Swarm集群
docker swarm init --advertise-addr [IP地址]
# 设置不保存容器历史，默认是5
docker swarm update --task-history-limit 1

docker network create \
  --driver overlay \
  portainer_agent_network

docker service create \
  --name portainer_agent \
  --network portainer_agent_network \
  -p 9001:9001/tcp \
  --mode global \
  --constraint 'node.platform.os == linux' \
  --mount type=bind,src=//var/run/docker.sock,dst=/var/run/docker.sock \
  --mount type=bind,src=//var/lib/docker/volumes,dst=/var/lib/docker/volumes \
  harbor.ant-lord.com/library/portainer-agent:2.20.3
```

成功后填入：

>- Name：随便
>- Environment URL：[IP地址]:9001
>- Public IP ：[IP地址]

然后点击 `+ Add environment` 按钮就添加成功了。


可能会遇到`rpc error: code = Unknown desc = warning: incomplete log stream.`问题，是因为swarm证书到期了。

```shell
docker swarm update --cert-expiry 867240h0m0s
docker swarm ca --rotate | openssl x509 -text -noout
# 查看 docker 信息
docker system info
```

[0]:http://www.tensorfly.cn/tfdoc/get_started/os_setup.html
[1]:http://www.nginx.cn/nginx-how-to