---
category: 运维
tags:
  - 教程
  - Linux
date: 2024-11-29
permalink: /devlop/k3s.html
title: Mu教程系列：K3S 基础
vssue-title: Mu教程系列
vssue-id: 9
---

K3S 基本介绍。

<!-- more -->

## 简介

### 安装
```shell
# 国内
export INSTALL_K3S_EXEC="--docker"
export K3S_NODE_NAME=pai-uat
# 用于将 server 或 agent 加入集群的共享 secret
# export K3S_TOKEN=
# 设置了 K3S_URL，它将默认为“agent”。如果未设置K3S_URL，它将默认为“server”
# export K3S_URL=
curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn sh -
# 查看安装状态
k3s kubectl get nodes
# 获取服务器token
sudo cat /var/lib/rancher/k3s/server/node-token

#### node节点
# pai-uat
curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn K3S_URL=https://47.116.185.125:6443 K3S_TOKEN=K10079c5ea9ef1f946802293ddcb49e674eabb24ee5ee31715efb7fc8fb4239ab11::server:21722011e203fc101d886bb49f77979b sh - --system-default-registry "https://dockerproxy.net"
# pai-api 172.28.95.181 139.224.45.9
curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn K3S_URL=https://139.224.45.9:6443 K3S_TOKEN=K10c43088886544d0d4ad2be78502d691291e14acd94ec0ecbec918686d0bdfb255::server:e544c7e219ec32e2fa72cc76f7dc5c78 sh -
# pai-srv 172.28.95.187 106.14.43.112
curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn K3S_URL=https://106.14.43.112:6443 K3S_TOKEN=K105abb45f1cbfbdc91b1c9d99e5e3d4645ef674dcc91a856abc10fe34e9725abdb::server:15bd3579a84b3fd4e08038cc3e3ea39c sh -
# 设置节点标签
kubectl label nodes pai-log kubernetes.io/role=worker

# 设置私有仓库
kubectl create secret docker-registry harbor --docker-server=harbor.ant-lord.com --docker-username=robot$gitlabci --docker-password=Dq17Su75M1SlAVdiHPlGawW5qhxXTBXt

# 删除k3s
# 对于master节点：
/usr/local/bin/k3s-uninstall.sh
# 对于agent节点：
/usr/local/bin/k3s-agent-uninstall.sh
# 主节点踢掉
k3s kubectl drain pai-log --ignore-daemonsets --delete-emptydir-data
k3s kubectl delete node pai-log
# 在主节点查看node安装状态
k3s kubectl get nodes

# 查看某个服务的状态
sudo kubectl get pods -n portainer

# 安装helm
snap install helm --classic
helm repo update
export KUBECONFIG=/etc/rancher/k3s/k3s.yaml
helm upgrade --install ingress-nginx ingress-nginx \
  --repo https://kubernetes.github.io/ingress-nginx \
  --namespace ingress-nginx --create-namespace


# 查看集群的运行情况
kubectl get nodes -owide
kubectl get all -A -owide
kubectl api-resources -o wide
kubectl describe nodes k3s-node-01
kubectl -n kube-system describe deploy coredns

# 安装
kubectl apply -f https://downloads.portainer.io/ce2-20/portainer-agent-k8s-lb.yaml
kubectl delete -f https://downloads.portainer.io/ce2-20/portainer-agent-k8s-lb.yaml

sudo kubectl get pods -n portainer
kubectl describe pod -n portainer portainer-agent-694c6ddbd5-w6p7k

# 如果遇见docker.io/rancher/mirrored-pause:3.6报错，则执行
kubectl get pods -n kube-system
kubectl describe pod -n kube-system svclb-traefik-7c1e2c3e-r6zg8
docker pull dockerproxy.net/rancher/mirrored-coredns-coredns:1.12.0
docker pull harbor.ant-lord.com/library/portainer-agent:2.20.3
docker pull dockerproxy.net/rancher/mirrored-pause:3.6
docker pull dockerproxy.net/rancher/klipper-lb:v0.4.9
docker pull dockerproxy.net/bitnami/etcd:3.5
docker pull dockerproxy.net/rancher/klipper-helm:v0.9.3-build20241008
docker tag dockerproxy.net/rancher/mirrored-coredns-coredns:1.12.0 rancher/mirrored-coredns-coredns:1.12.0
docker tag harbor.ant-lord.com/library/portainer-agent:2.20.3 portainer/agent:2.20.3
docker tag dockerproxy.net/rancher/mirrored-pause:3.6 rancher/mirrored-pause:3.6
docker tag dockerproxy.net/rancher/klipper-lb:v0.4.9 rancher/klipper-lb:v0.4.9
docker tag dockerproxy.net/bitnami/etcd:3.5 bitnami/etcd:3.5
docker tag dockerproxy.net/rancher/klipper-helm:v0.9.3-build20241008 rancher/klipper-helm:v0.9.3-build20241008
docker rmi dockerproxy.net/rancher/mirrored-coredns-coredns:1.12.0 harbor.ant-lord.com/library/portainer-agent:2.20.3 dockerproxy.net/rancher/mirrored-pause:3.6 dockerproxy.net/rancher/klipper-lb:v0.4.9 dockerproxy.net/bitnami/etcd:3.5

docker pull harbor.ant-lord.com/library/portainer-agent:2.20.3
docker tag harbor.ant-lord.com/library/portainer-agent:2.20.3 portainer/agent:2.20.3
docker rmi harbor.ant-lord.com/library/portainer-agent:2.20.3

```

## 常用功能
# 删除pod重新创建
kubectl delete pod portainer-agent-694c6ddbd5-l6667 -n portainer
kubectl delete -n kube-system pod coredns-ccb96694c-qm72l

# 查看deployment
kubectl get deployments -n kube-system
kubectl edit deployment coredns -n kube-system
kubectl describe pod -n kube-system coredns-667bcf6fbf-j8hqm

### 添加其他服务器

操作路径：
>- Environments -> add environment -> Agent -> Docker Swarm


[0]:https://docs.rancher.cn/docs/k3s/cluster-access/_index
[1]:https://docs.k3s.io/zh/
[2]:https://doc.traefik.io/traefik
[3]:https://dtm.pub/deploy/base.html#%E6%B3%A8%E6%84%8F%E7%82%B9