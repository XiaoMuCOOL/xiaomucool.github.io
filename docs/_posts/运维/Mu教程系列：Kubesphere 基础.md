---
category: 运维
tags:
  - 教程
  - Kubesphere
date: 2020-01-02
permalink: /运维/kubesphere
title: Mu教程系列：Kubesphere 基础
vssue-title: Mu教程系列
vssue-id: 8
---

Kubesphere，读作：库伯思菲尔。

<!-- more -->

## Kubesphere

Kubesphere，读作：库伯思菲尔。[官网文档][2]

### 安装

1. 下载KubeKey

    ```shell
    export KKZONE=cn
    curl -sfL https://get-kk.kubesphere.io | VERSION=v1.2.1 sh -
    ```

2. 安装Kubesphere

    ```shell
    chmod +x kk
    # 如果没装conntrack
    # apt install conntrack
    ./kk create cluster --with-kubernetes v1.21.5 --with-kubesphere v3.2.1
    ```

3. 配置服务器安全组 `30880`，就可以访问到界面了。

### 使用

1. 创建用户
2. 创建企业空间，并邀请用户成为企业空间成员
3. 创建项目，并在 `项目设置 > 项目成员` 中邀请用户
4. 开启 `devOps`,在 `集群管理 > CRD` 搜索 `clusterconfiguration` 进入，在 `ks-installer` 右侧选择 `编辑 YAML`：

    ```ymal
    devops:
        enabled: true # 将“false”更改为“true”
    ```
    可以通过 `Kubectl` 查看安装日志：
    
    ```shell
    kubectl logs -n kubesphere-system $(kubectl get pod -n kubesphere-system -l app=ks-install -o jsonpath='{.items[0].metadata.name}') -f
    ```

### 部署应用

1. 在 `配置 > 保密字典` 中添加数据库密码和阿里云镜像仓库
2. 在 `存储 > 数据卷` 中添加一个数据卷
3. 在 `应用负载 > 应用 > 自制应用` 中创建一个应用，并添加服务
4. 已 `MySQL` 为例添加无状态服务：
    - **基本信息**中填写名称
    - **容器组设置**中添加容器，搜索 `mysql:5.7` 点击 `使用默认端口`，点击**高级设置**设置下CPU和内存配额，**环境变量**中添加 `TZ` 和 `MYSQL_ROOT_PASSWORD`
    - **存储卷设置**中点击 `挂载存储卷`，现有存储卷选择你之前创建的数据卷，选择读写，挂载路径填写 `/var/lib/mysql`
    - **高级设置**中外部访问模式选择 `NodePort`
等 `应用负载 > 工作负载 > 部署` 中的 `mysql-v1` 显示为运行中，就能访问到 `MySQL` 了，外网端口在 `应用负载 > 服务` 中查看，是自动生成的如：`31859`

[2]:https://kubesphere.io/zh/docs/quick-start/all-in-one-on-linux/
[3]:https://kubernetes.io/zh/docs