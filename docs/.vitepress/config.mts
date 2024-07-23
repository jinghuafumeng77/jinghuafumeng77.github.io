import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "新建VietPress",
  description: "描述",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // siteTitle: false,
    logo: '../images/logo.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '实例', link: '/markdown-examples' },
      { text: '测试', link: '/test' },
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: '实例',
        items: [
          { text: '例证', link: '/markdown-examples' },
          { text: 'API实例', link: '/api-examples' }
        ]
      },
      {
        text: 'Test',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Evan You'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jinghuafumeng77/jinghuafumeng77.github.io' }
    ]
  }
})
