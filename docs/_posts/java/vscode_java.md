---
category: Java
tags:
  - vscode
  - 后端
  - 环境搭建
  - Java
date: 2020-01-12
title: VScode搭建JAVA开发环境
draft: false
---

自从转到前端后，已经好久没弄过`JAVA`了，`VScode`非常强大，那就用它来搭建一套`JAVA`的开发环境吧。

<!-- more -->

## 安装

#### JDK

官网下载[jdk][1]，然后一步步安装就行，我安装目录为：`C:/Program Files/Java/jdk1.8.0_191`。

#### Mevan

[maven][2]官网下载`JAR`包，解压至`JAVA`安装目录，我的在`C:/Program Files/Java/apache-maven-3.6.3`。

打开`apache-maven-3.6.3/conf/settings.xml`，添加阿里云仓库，默认仓库比较慢：
```xml
<!-- 阿里云仓库 -->
<mirror>
  <id>alimaven</id>
  <mirrorOf>central</mirrorOf>
  <name>aliyun maven</name>
  <url>http://maven.aliyun.com/nexus/content/repositories/central/</url>
</mirror>
<mirror>
  <id>nexus-aliyun</id>
  <mirrorOf>*</mirrorOf>
  <name>Nexus aliyun</name>
  <url>http://maven.aliyun.com/nexus/content/groups/public</url>
</mirror>
```

#### VScode

在`VScode`的`Extensions(Ctrl+Shift+X)`菜单下搜索`Java Extension Pack`和`Spring Boot Extension Pack`插件开发包，并安装。

然后在`文件->首选项->设置`里点击`在setting.json中编辑`：
```json
"java.home": "C:\\Program Files\\Java\\jdk1.8.0_191",
"maven.terminal.useJavaHome": true,
"maven.executable.path": "C:\\Program Files\\Java\\apache-maven-3.6.3\\bin\\mvn",
"java.configuration.maven.userSettings": "C:\\Program Files\\Java\\apache-maven-3.6.3\\conf\\settings.xml",
"maven.terminal.customEnv": [
  {
    "environmentVariable": "JAVA_HOME",
    "value": "C:\\Program Files\\Java\\jdk1.8.0_191"
  }
]
```

环境基本配置完成了，最重要的是实战了。

[1]:https://www.oracle.com/technetwork/java/javase/downloads/index.html
[2]:https://maven.apache.org/download.cgi
