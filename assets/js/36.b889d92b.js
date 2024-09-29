(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{416:function(a,t,s){"use strict";s.r(t);var r=s(1),n=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("Portainer 基本介绍。")]),a._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),t("h3",{attrs:{id:"安装-portainer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-portainer"}},[a._v("#")]),a._v(" 安装 - Portainer")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 初始化 swarm 集群  ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" swarm init --advertise-addr "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("IP地址"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建 portainer 挂载目录")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" /home/portainer\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 以 swarm service 建立 portainer 管理 ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" portainer "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--publish")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9000")]),a._v(":9000 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--replicas")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--constraint")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'node.role == manager'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--mount")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("bind,src"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("//var/run/docker.sock,dst"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/var/run/docker.sock "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--mount")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("bind,src"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("//opt/portainer,dst"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/data "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nportainer/portainer-ce:sts "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" unix:///var/run/docker.sock\n")])])]),t("h2",{attrs:{id:"常用功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用功能"}},[a._v("#")]),a._v(" 常用功能")]),a._v(" "),t("h3",{attrs:{id:"添加其他服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加其他服务器"}},[a._v("#")]),a._v(" 添加其他服务器")]),a._v(" "),t("p",[a._v("操作路径：")]),a._v(" "),t("blockquote",[t("ul",[t("li",[a._v("Environments -> add environment -> Agent -> Docker Swarm")])])]),a._v(" "),t("p",[a._v("然后在服务器运行：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 初始化Swarm集群")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" swarm init --advertise-addr "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("IP地址"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置不保存容器历史，默认是5")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" swarm update --task-history-limit "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置每天定时清理镜像")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("crontab")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" * * * /usr/bin/docker image prune "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cron")]),a._v(" restart\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("crontab")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" network create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--driver")]),a._v(" overlay "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  portainer_agent_network\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" portainer_agent "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--network")]),a._v(" portainer_agent_network "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9001")]),a._v(":9001/tcp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--mode")]),a._v(" global "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--constraint")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'node.platform.os == linux'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--mount")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("bind,src"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("//var/run/docker.sock,dst"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/var/run/docker.sock "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--mount")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("bind,src"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("//var/lib/docker/volumes,dst"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/var/lib/docker/volumes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  harbor.ant-lord.com/library/portainer-agent:2.20.3\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 服务器安装docker插件")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" plugin "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" grafana/loki-docker-driver:2.9.2 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--alias")]),a._v(" loki --grant-all-permissions\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 修改docker配置")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"log-driver"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"loki"')]),a._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"log-opts"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"loki-url"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://139.224.223.183:3100/loki/api/v1/push"')]),a._v(",\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"max-size"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"50m"')]),a._v(",\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"max-file"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"10"')]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(",\nsystemctl daemon-reload\nsystemctl restart "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n")])])]),t("p",[a._v("成功后填入：")]),a._v(" "),t("blockquote",[t("ul",[t("li",[a._v("Name：随便")]),a._v(" "),t("li",[a._v("Environment URL：[IP地址]:9001")]),a._v(" "),t("li",[a._v("Public IP ：[IP地址]")])])]),a._v(" "),t("p",[a._v("然后点击 "),t("code",[a._v("+ Add environment")]),a._v(" 按钮就添加成功了。")]),a._v(" "),t("p",[a._v("可能会遇到"),t("code",[a._v("rpc error: code = Unknown desc = warning: incomplete log stream.")]),a._v("问题，是因为swarm证书到期了。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" swarm update --cert-expiry 867240h0m0s\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" swarm ca "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--rotate")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" openssl x509 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-text")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-noout")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看 docker 信息")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" system info\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);