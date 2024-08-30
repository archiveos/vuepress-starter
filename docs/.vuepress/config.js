module.exports = {
    title: '修道院公学的技术博客',
    description: '',
    base: '/',
    theme: 'reco',
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    themeConfig: {
        // lastUpdated: '上次更新',
        // subSidebar: 'auto',
        // nav: [
        //     { text: '首页', link: '/' },
        //     { 
        //         text: '', 
        //         items: [
        //             { text: 'Github', link: '' },
        //             { text: '掘金', link: '' }
        //         ]
        //     }
        // ],
        sidebar: [
            // {
            //     title: '欢迎学习',
            //     path: '/',
            //     collapsable: false,
            //     children: [
            //         { title: "学前必读", path: "/" }
            //     ]
            // },
            {
              title: "微信支付开发",
              // path: '',
              collapsable: false,
              children: [
                { title: "微信支付开发（一）--微信支付介绍和接入指引", path: "/article/微信支付开发（一）--微信支付介绍和接入指引/home" },
                { title: "微信支付开发（二）--支付安全（证书、秘钥、签名）", path: "/article/微信支付开发（二）--支付安全（证书、秘钥、签名）/home" }
              ],
            }
          ]
    }
}