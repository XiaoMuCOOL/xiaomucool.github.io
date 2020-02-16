(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{248:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("5iuse-admin项目工作流程介绍。")]),t._v(" "),r("h2",{attrs:{id:"后端流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#后端流程"}},[t._v("#")]),t._v(" 后端流程")]),t._v(" "),r("p",[r("strong",[t._v("后端项目仓库："),r("a",{attrs:{href:"https://github.com/xiaomucool/5iuse-admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("5iuse-admin"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"分支"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[t._v("#")]),t._v(" 分支")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/XiaoMuCOOL/5iuse-admin/tree/dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("dev"),r("OutboundLink")],1),t._v("：后端默认在"),r("code",[t._v("dev")]),t._v("分支开发，可以提交完成一半的代码，不用提交"),r("code",[t._v("5iuse-ui")]),t._v("文件。")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/XiaoMuCOOL/5iuse-admin/tree/master",target:"_blank",rel:"noopener noreferrer"}},[t._v("master"),r("OutboundLink")],1),t._v("：当要发版时合并到"),r("code",[t._v("master")]),t._v("分支，并确保程序可以运行。")])]),t._v(" "),r("p",[r("strong",[t._v("注意：")]),t._v(" 项目自动生成的"),r("code",[t._v("5iuse-ui")]),t._v("代码请提交到前端仓库"),r("a",{attrs:{href:"https://github.com/XiaoMuCOOL/5iuse",target:"_blank",rel:"noopener noreferrer"}},[t._v("5iuse"),r("OutboundLink")],1),t._v("的"),r("a",{attrs:{href:"https://github.com/XiaoMuCOOL/5iuse/tree/generate",target:"_blank",rel:"noopener noreferrer"}},[t._v("generate"),r("OutboundLink")],1),t._v("分支。")]),t._v(" "),r("div",{staticClass:"language-git extra-class"},[r("div",{staticClass:"highlight-lines"},[r("br"),r("br"),r("br"),r("br"),r("br"),r("div",{staticClass:"highlighted"},[t._v(" ")]),r("div",{staticClass:"highlighted"},[t._v(" ")]),r("br"),r("br"),r("br"),r("br"),r("br")]),r("pre",{pre:!0,attrs:{class:"language-git"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 平时在dev分支开发")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TODO")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发布时切换到master分支")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git checkout master")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并dev分支")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git merge dev")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果有冲突请解决冲突后提交，没有冲突直接push")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git add .")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git commit"),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v(" -m")]),t._v(" ")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'解决冲突'")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git push origin master")]),t._v("\n")])])]),r("p",[t._v("在"),r("code",[t._v("master")]),t._v("分支提交是会触发"),r("code",[t._v("github actions")]),t._v("自动构建，所以务必保证"),r("code",[t._v("master")]),t._v("分支上的代码是可运行的！")]),t._v(" "),r("p",[t._v("最正规的做法是写好测试用例，然后在"),r("code",[t._v("Dockerfile")]),t._v("里如果不通过就不会构建。")]),t._v(" "),r("h2",{attrs:{id:"前端流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前端流程"}},[t._v("#")]),t._v(" 前端流程")]),t._v(" "),r("p",[r("strong",[t._v("前端项目仓库："),r("a",{attrs:{href:"https://github.com/XiaoMuCOOL/5iuse",target:"_blank",rel:"noopener noreferrer"}},[t._v("5iuse"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"分支-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分支-2"}},[t._v("#")]),t._v(" 分支")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/XiaoMuCOOL/5iuse/tree/generate",target:"_blank",rel:"noopener noreferrer"}},[t._v("generate"),r("OutboundLink")],1),t._v("：后端提交项目自动生成的"),r("code",[t._v("5iuse-ui")]),t._v("代码。")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/XiaoMuCOOL/5iuse/tree/dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("dev"),r("OutboundLink")],1),t._v("：前端默认在"),r("code",[t._v("dev")]),t._v("分支下开发，但是要先合并"),r("code",[t._v("generate")]),t._v("分支的代码。")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/XiaoMuCOOL/5iuse/tree/master",target:"_blank",rel:"noopener noreferrer"}},[t._v("master"),r("OutboundLink")],1),t._v("：当要发版时合并到"),r("code",[t._v("master")]),t._v("分支。")])]),t._v(" "),r("div",{staticClass:"language-git extra-class"},[r("div",{staticClass:"highlight-lines"},[r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("div",{staticClass:"highlighted"},[t._v(" ")]),r("br"),r("br"),r("br"),r("div",{staticClass:"highlighted"},[t._v(" ")]),r("br"),r("br"),r("br"),r("br"),r("br")]),r("pre",{pre:!0,attrs:{class:"language-git"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 平时在dev分支")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TODO")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 后端更新了generate分支代码，则合并")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git checkout generate")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git pull origin generate")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git checkout dev")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git merge generate")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 完成开发，要发布版本时，合并到master分支")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git checkout master")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git merge dev")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果有冲突请解决冲突后提交")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git add .")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git commit"),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v(" -m")]),t._v(" ")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'解决冲突'")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git push origin master")]),t._v("\n")])])]),r("p",[r("strong",[t._v("同样可以自动触发前端构建，自动更新。")])])])}),[],!1,null,null,null);e.default=s.exports}}]);