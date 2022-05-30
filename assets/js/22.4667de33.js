(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{536:function(e,s,t){"use strict";t.r(s);var a=t(5),v=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Kubesphere，读作：库伯思菲尔。")]),e._v(" "),t("h2",{attrs:{id:"kubesphere"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubesphere"}},[e._v("#")]),e._v(" Kubesphere")]),e._v(" "),t("p",[e._v("Kubesphere，读作：库伯思菲尔。"),t("a",{attrs:{href:"https://kubesphere.io/zh/docs/quick-start/all-in-one-on-linux/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网文档"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("下载KubeKey")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("KKZONE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("cn\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -sfL https://get-kk.kubesphere.io "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("VERSION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("v1.2.1 "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" -\n")])])])]),e._v(" "),t("li",[t("p",[e._v("安装Kubesphere")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" +x kk\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 如果没装conntrack")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# apt install conntrack")]),e._v("\n./kk create cluster --with-kubernetes v1.21.5 --with-kubesphere v3.2.1\n")])])])]),e._v(" "),t("li",[t("p",[e._v("配置服务器安全组 "),t("code",[e._v("30880")]),e._v("，就可以访问到界面了。")])])]),e._v(" "),t("h3",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("创建用户")])]),e._v(" "),t("li",[t("p",[e._v("创建企业空间，并邀请用户成为企业空间成员")])]),e._v(" "),t("li",[t("p",[e._v("创建项目，并在 "),t("code",[e._v("项目设置 > 项目成员")]),e._v(" 中邀请用户")])]),e._v(" "),t("li",[t("p",[e._v("开启 "),t("code",[e._v("devOps")]),e._v(",在 "),t("code",[e._v("集群管理 > CRD")]),e._v(" 搜索 "),t("code",[e._v("clusterconfiguration")]),e._v(" 进入，在 "),t("code",[e._v("ks-installer")]),e._v(" 右侧选择 "),t("code",[e._v("编辑 YAML")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language-ymal extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("devops:\n    enabled: true # 将“false”更改为“true”\n")])])]),t("p",[e._v("可以通过 "),t("code",[e._v("Kubectl")]),e._v(" 查看安装日志：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("kubectl logs -n kubesphere-system "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("kubectl get pod -n kubesphere-system -l "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("app")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("ks-install -o "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("jsonpath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'{.items[0].metadata.name}'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -f\n")])])])])]),e._v(" "),t("h3",{attrs:{id:"部署应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署应用"}},[e._v("#")]),e._v(" 部署应用")]),e._v(" "),t("ol",[t("li",[e._v("在 "),t("code",[e._v("配置 > 保密字典")]),e._v(" 中添加数据库密码和阿里云镜像仓库")]),e._v(" "),t("li",[e._v("在 "),t("code",[e._v("存储 > 数据卷")]),e._v(" 中添加一个数据卷")]),e._v(" "),t("li",[e._v("在 "),t("code",[e._v("应用负载 > 应用 > 自制应用")]),e._v(" 中创建一个应用，并添加服务")]),e._v(" "),t("li",[e._v("已 "),t("code",[e._v("MySQL")]),e._v(" 为例添加无状态服务：\n"),t("ul",[t("li",[t("strong",[e._v("基本信息")]),e._v("中填写名称")]),e._v(" "),t("li",[t("strong",[e._v("容器组设置")]),e._v("中添加容器，搜索 "),t("code",[e._v("mysql:5.7")]),e._v(" 点击 "),t("code",[e._v("使用默认端口")]),e._v("，点击"),t("strong",[e._v("高级设置")]),e._v("设置下CPU和内存配额，"),t("strong",[e._v("环境变量")]),e._v("中添加 "),t("code",[e._v("TZ")]),e._v(" 和 "),t("code",[e._v("MYSQL_ROOT_PASSWORD")])]),e._v(" "),t("li",[t("strong",[e._v("存储卷设置")]),e._v("中点击 "),t("code",[e._v("挂载存储卷")]),e._v("，现有存储卷选择你之前创建的数据卷，选择读写，挂载路径填写 "),t("code",[e._v("/var/lib/mysql")])]),e._v(" "),t("li",[t("strong",[e._v("高级设置")]),e._v("中外部访问模式选择 "),t("code",[e._v("NodePort")]),e._v("\n等 "),t("code",[e._v("应用负载 > 工作负载 > 部署")]),e._v(" 中的 "),t("code",[e._v("mysql-v1")]),e._v(" 显示为运行中，就能访问到 "),t("code",[e._v("MySQL")]),e._v(" 了，外网端口在 "),t("code",[e._v("应用负载 > 服务")]),e._v(" 中查看，是自动生成的如："),t("code",[e._v("31859")])])])])])])}),[],!1,null,null,null);s.default=v.exports}}]);