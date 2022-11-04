---
category: 运维
tags:
  - 教程
  - outline
  - shadowsocks
date: 2020-01-01
permalink: /devlop/vpn.html
title: Mu教程系列：VPN 搭建
vssue-title: Mu教程系列
vssue-id: 8
---

`shadowsocks`、`outline` 的搭建。

<!-- more -->

## 删除阿里云云盾、安骑士等安全组件

不删除可能有被封 IP 风险，所以自己百度下如何删除吧，也可参考此操作。
```shell
# 卸载阿里云盾
wget http://update.aegis.aliyun.com/download/uninstall.sh
chmod +x uninstall.sh
./uninstall.sh
# 卸载阿里云安骑士
wget http://update.aegis.aliyun.com/download/quartz_uninstall.sh
chmod +x quartz_uninstall.sh
./quartz_uninstall.sh
# 清理阿里云文件
pkill aliyun-service
rm -fr /etc/init.d/agentwatch /usr/sbin/aliyun-service /usr/local/aegis*

# 查看是否还存在阿里云服务
ps -ef | grep -v grep | grep -i aliyun-service

# 屏蔽云盾IP
iptables -I INPUT -s 140.205.201.0/28 -j DROP
iptables -I INPUT -s 140.205.201.16/29 -j DROP
iptables -I INPUT -s 140.205.201.32/28 -j DROP
iptables -I INPUT -s 140.205.225.192/29 -j DROP
iptables -I INPUT -s 140.205.225.200/30 -j DROP
iptables -I INPUT -s 140.205.225.184/29 -j DROP
iptables -I INPUT -s 140.205.225.183/32 -j DROP
iptables -I INPUT -s 140.205.225.206/32 -j DROP
iptables -I INPUT -s 140.205.225.205/32 -j DROP
iptables -I INPUT -s 140.205.225.195/32 -j DROP
iptables -I INPUT -s 140.205.225.204/32 -j DROP
```

## 安装docker
```shell
// 更新
sudo apt update
// Ubuntu 自带docker.io源
sudo apt install docker.io -y
```

## 下载shadowsocks镜像
```shell
// 下载镜像
sudo docker pull mritd/shadowsocks
// 启动镜像
sudo docker run -dt --name ss -p [端口]:6443 mritd/shadowsocks -s "-s 0.0.0.0 -p 6443 -m aes-256-cfb -k [密码] –fast-open"
```

**成功！**

然后下载客户端配置下设置，就能愉快的访问P站学习了。

客户端下载：[windows][3]、[android][4]、[mac][5]
`IOS` 暂无官方客服端，如果想要支持 iPhone，那就搭建 Outline 吧，但 Outline 协议听说比较老，容易被封。

## 搭建 Outline 服务器

安装好 `Docker` 后，在服务器输入命令：

```shell
sudo bash -c "$(wget -qO- https://raw.githubusercontent.com/Jigsaw-Code/outline-server/master/src/server_manager/install_scripts/install_server.sh)"
```

然后设置防火墙，允许端口 `TCP 18339`, `TCP and UDP 47902` 通过。

下载 [Outline Manager][1]并安装。

打开 `Outline Manager` 添加服务器，选择最后一项`随时随地安装 Outline`，在第二步输入框内填入刚刚服务器生成的 `apiUrl` 开头的 `JSON` 字符串。我的为：

```json
{"apiUrl":"[IP]","certSha256":"[密钥]"}
```
点击完成即添加成功服务器。

然后点击`添加新密钥`，输入名称，点击分享，复制生成的 `ss://` 开头链接给客户端使用即可链接！

最后，下载 [Outline Client][2] 应用程序。到目前为止，它支持 macOS，Windows，Linux，ChromeOS，iOS 和 Android。

在应用程序中，点击加号按钮，粘贴密钥，然后连接到服务器。

**方便！完美！**

[1]:https://github.com/Jigsaw-Code/outline-releases/tree/master/manager
[2]:https://getoutline.org/
[3]:https://github.com/shadowsocks/shadowsocks-windows/releases
[4]:https://github.com/shadowsocks/shadowsocks-android/releases
[5]:https://github.com/shadowsocks/ShadowsocksX-NG/releases
[6]:https://www.cnblogs.com/lvchengda/p/12788080.html
[7]:https://149.129.76.190:18339/wo3CR0G07sadmE0ymIlgYw
[8]:A6C5B19B75370A6FBDAF8AA052155A259F1BC095EC7D99CCC053906EF7872AC9