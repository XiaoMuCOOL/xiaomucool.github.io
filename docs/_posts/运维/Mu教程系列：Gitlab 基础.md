---
category: 运维
tags:
  - 教程
  - gitlab
date: 2020-01-06
permalink: /devlop/gitlab.html
title: Mu教程系列：Gitlab 基础
vssue-title: Mu教程系列
vssue-id: 8
---

Gitlab 相关的一些安装、命令、操作记录。

<!-- more -->

## 安装 gitlab
```shell
sudo apt update               // 更新软件源
sudo apt install docker.io -y // 安装docker

docker pull gitlab/gitlab-ee:latest  // 拉取镜像

docker run -d  -p 443:443 -p 80:80 -p 22:22 --name gitlab --restart always -v /home/gitlab/config:/etc/gitlab -v /home/gitlab/logs:/var/log/gitlab -v /home/gitlab/data:/var/opt/gitlab gitlab/gitlab-ee
```
gitlab结果：`6e6b93f21e379e40a50a2468025d10d82067d9c0a6635ac0fe1090fc59fd4c4b`

```shell
vim /home/gitlab/config/gitlab.rb

# 配置http协议所使用的访问地址,不加端口号默认为80
external_url 'http://47.103.58.85'

# 配置ssh协议所使用的访问地址和端口
gitlab_rails['gitlab_ssh_host'] = '47.103.58.85'
gitlab_rails['gitlab_shell_ssh_port'] = 22 # 此端口是run时22端口映射的22端口

docker restart gitlab
```

gitlab 用户名:root  初始密码：在config里，Weijin@Root

```shell
docker run -d  -p 443:443 -p 80:80 -p 222:22 --name gitlab-ce --restart always -v /home/gitlab/config:/etc/gitlab -v /home/gitlab/logs:/var/log/gitlab -v /home/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce
```
结果：`3125c038a09574b76a390dcda2a895b2f2402b7b78b5451891ece17358a1b510`

# 启动/重启 Runner
```shell
 docker run -d -p 8093:8093 --name gitlab-runner --restart always \
     -v /home/gitlab-runner/config:/etc/gitlab-runner \
     -v /var/run/docker.sock:/var/run/docker.sock \
     gitlab/gitlab-runner:latest
```
结果：`bab6921ec13264ab84d364590f7c8bd3a3a969739a044a5abf1e67f249c043ab`

### 注册runner

```shell
# 手动填写参数
docker run --rm -it -v /home/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner register
# 或命令行预设参数
docker  run --rm -it gitlab/gitlab-runner register -n \
       --url http://47.103.58.85 \
       --registration-token tsiKxKgEm648JnzaSSMz \
       --tag-list saas-dev\
       --executor docker \
       --docker-image docker \
       --docker-volumes /home/gitlab-runner/.m2:/root/.m2 \
       --docker-volumes /home/gitlab-runner/.npm:/root/.npm \
       --docker-volumes /home/gitlab-runner/config:/etc/gitlab-runner \
       --docker-volumes /var/run/docker.sock:/var/run/docker.sock \
       --description "docker镜像saas-dev服务器"
```

# 辣鸡runner，配置要写死docker版本，不然哭死你

`/home/gitlab-runner/config/config.toml`

```YML
concurrent = 4      # 并发运行数量，建议设置为CPU数量
check_interval = 0

[session_server]
  session_timeout = 1800

[[runners]]
  name = "docker镜像saas-dev服务器"
  url = "http://47.103.58.85"
  token = "Czy9o_uDiect-k4UMF-6"
  executor = "docker"
  [runners.custom_build_dir]
  [runners.cache]
    [runners.cache.s3]
    [runners.cache.gcs]
    [runners.cache.azure]
  [runners.docker]
    tls_verify = false
    image = "docker:19.03.12"
    privileged = true
    disable_entrypoint_overwrite = false
    oom_kill_disable = false
    disable_cache = false
    volumes = ["/var/run/docker.sock:/var/run/docker.sock","/cache"]
    shm_size = 0
```

### 验证runner

```shell
docker run --rm -it -v /home/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner verify
```

## Gitlab-CI 配置

[.gitlab-ci.yml][0]

```yml
# 默认
default:
  # 默认镜像
  image: ruby:3.0
  # 如果要启动运行命令或脚本
  image:
    # 镜像名称
    name: ruby:2.6
    # 命令或脚本
    entrypoint: ["/bin/bash"]
  # 额外的 Docker 镜像来运行脚本。services 镜像链接到 image 关键字中指定的镜像
  services:
    - name: my-postgres:11.7
      alias: db-postgres
      entrypoint: ["/usr/local/bin/db-postgres"]
      command: ["start"]
# 阶段
stages:
  # 阶段名称
  - build
  - test
# 自定义变量
variables:
  # 变量 key: value
  DEPLOY_VARIABLE: "default-deploy"
# 流水线
workflow:
  # 规则
  rules:
    # 具体规则
    - if: '$CI_PIPELINE_SOURCE == "schedule"'
      # 当 IF 为 true 时，是否执行流水线
      when: never
    - if: '$CI_PIPELINE_SOURCE == "push"'
      when: never
    # 除了上面指定的规则是 never，其他都是 always
    - when: always
# 作业/任务
job1:
  # 所属阶段
  stage: build
  # 镜像
  image: ruby:3
  # 规则
  rules:
    - if: '$CI_MERGE_REQUEST_SOURCE_BRANCH_NAME =~ /^feature/ && $CI_MERGE_REQUEST_TARGET_BRANCH_NAME != $CI_DEFAULT_BRANCH'
      when: never
    - if: '$CI_MERGE_REQUEST_SOURCE_BRANCH_NAME =~ /^feature/'
      when: manual
      allow_failure: true
    - if: '$CI_MERGE_REQUEST_SOURCE_BRANCH_NAME'
  # 执行脚本
  script:
    - echo "Check the ruby version, then build some Ruby project files:"
    - ruby -v
    - rake
# 作业/任务
job2:
  stage: test
  script:
    - echo "If the files are built successfully, test other files with a different command:"
    - rake test2

```



[0]:https://docs.gitlab.cn/jh/ci/yaml/index.html
[1]:https://docs.docker.com/engine/reference/commandline/push/
[1]:https://jihulab.com/gitlab-cn/gitlab/-/tree/master/.gitlab/ci