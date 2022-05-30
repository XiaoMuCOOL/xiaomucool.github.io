module.exports = {
  // 网站 Title
  title: 'XiaoMuCOOL 🌏 世界',
  // 网站描述
  description: 'XiaoMuCOOL 🌏 世界',
  // 网站语言
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  // 使用的主题
  // theme: 'meteorlxy',
  // 主题配置
  themeConfig: {
    // 主题语言，参考下方 [主题语言] 章节
    lang: 'zh-CN',
    // 个人信息（没有或不想设置的，删掉对应字段即可）
    personalInfo: {
      // 昵称
      nickname: '小牧COOL',
      // 个人简介 (支持 HTML)
      description: '什么？不健身的程序员不是一个好的博主！',

      // 电子邮箱
      email: 'xiaomucool@bingblue.com',

      // 所在地
      location: '中国-上海',

      // 组织
      organization: '滨清科技.Inc CTO',

      // 头像
      // 设置为外部链接
      avatar: '/img/avatar.jpg',
      // 或者放置在 .vuepress/public 文件夹，例如 .vuepress/public/img/avatar.jpg
      // avatar: '/img/avatar.jpg',
      

      // 社交平台帐号信息
      sns: {
        // QQ群 帐号和链接
        qqgroup: {
          account: '215259343',
          link: 'https://jq.qq.com/?_wv=1027&k=5tyQDAd',
        },

        // 微信 帐号和链接
        wechat: {
          account: 'xiaomucool',
          link: 'javascript:;',
        },

        // 公众号 帐号和链接
        gongzhonghao: {
          account: '小牧的技术世界',
          link: 'javascript:;',
        },

        // 新浪微博 帐号和链接
        weibo: {
          account: '@小-_-牧',
          link: 'https://weibo.com/xiaomucool',
        },

        // 知乎 帐号和链接
        zhihu: {
          account: '小牧COOL',
          link: 'https://www.zhihu.com/people/xiaomucool',
        },

        // 掘金 帐号和链接
        juejin: {
          account: '小牧COOL',
          link: 'https://juejin.cn/user/2400989125279943',
        },

        // 简书 帐号和链接
        jianshu: {
          account: '小牧COOL',
          link: 'https://www.jianshu.com/u/0f8eeb9fe72b',
        },

        // 思否 帐号和链接
        sifou: {
          account: '小牧COOL',
          link: 'https://segmentfault.com/u/xiaomucool',
        },
        
        // Github 帐号和链接
        github: {
          account: 'XiaoMuCOOL',
          link: 'https://github.com/xiaomucool',
        },

        // 语雀 帐号和链接
        yuque: {
          account: '小牧COOL',
          link: 'https://www.yuque.com/xiaomucool',
        },

        // 我来 帐号和链接
        wolai: {
          account: 'xiaomucool',
          link: 'https://www.wolai.com/xiaomucool/',
        },
        
        // CSDN 帐号和链接
        csdn: {
          account: '小牧COOL',
          link: 'https://blog.csdn.net/a59769507',
        },

        // 微信群 帐号和链接
        // wechatgroup: {
        //   account: 'xiaomucool',
        //   link: 'javascript:;',
        // },

        // QQ 帐号和链接
        // qq: {
        //   account: '895355044',
        //   link: 'javascript:;',
        // },
      },
    },

    // 上方 header 的相关设置 (可选)
    header: {
      // header 的背景，可以使用图片，或者随机变化的图案（geopattern）
      background: {
        // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
        // url: '/assets/img/bg.jpg',

        // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
        useGeo: true,
      },

      // 是否在 header 显示标题
      showTitle: true,
    },

    // 底部 footer 的相关设置 (可选)
    footer: {
      // 是否显示 Powered by VuePress
      poweredBy: false,

      // 是否显示使用的主题
      poweredByTheme: false,

      // 添加自定义 footer (支持 HTML)
      custom: 'Copyright &copy;2022 & Powered By <a href="https://xiaomucool.com" target="_blank">小牧COOL</a>',
    },

    // 个人信息卡片相关设置 (可选)
    infoCard: {
      // 卡片 header 的背景，可以使用图片，或者随机变化的图案（geopattern）
      headerBackground: {
        // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
        // url: '/assets/img/bg.jpg',

        // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
        useGeo: true,
      },
    },

    // 是否显示文章的最近更新时间
    lastUpdated: true,

    // 顶部导航栏内容
    nav: [
      { text: '🏠 首页', link: '/', exact: true },
      { text: '🗂️ 分类', link: '/posts/', exact: true },
      { text: '📔 随笔', link: '/随笔/年度计划安排', exact: true },
    ],

    // 评论配置，参考下方 [页面评论] 章节
    comments: {
      owner: 'xiaomucool',
      repo: 'xiaomucool.github.io',
      clientId: '6d2ec1bfe82c75ff7330',
      clientSecret: '5a71379652e218da7836a2a156c25cec483ea8e9',
      autoCreateIssue: process.env.NODE_ENV !== 'development'
    },

    // 分页配置 (可选)
    pagination: {
      perPage: 20,
    },

    // 默认页面（可选，默认全为 true）
    defaultPages: {
      // 是否允许主题自动添加 Home 页面 (url: /)
      home: true,
      // 是否允许主题自动添加 Posts 页面 (url: /posts/)
      posts: true,
    },
  },
}
