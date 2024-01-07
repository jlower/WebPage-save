import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '深圳市安跃企业服务有限公司',
  description: '一家专注于规范企业财务的第三方服务企业',
  head: [['link', { rel: 'icon', href: '../img/icon/annyue-logo-64x64.ico' }]],
  // 站点将部署到的 base URL。如果计划在子路径（例如 GitHub 页面）下部署站点，
  // 则需要设置此项。如果计划将站点部署到 https://foo.github.io/bar/，
  // 那么应该将 base 设置为 “/bar/”。它应该始终以 /开头和结尾。base 会自动添加到其他选项中以 / 开头的所有 URL 前面，因此只需指定一次。
  base: '/',
  
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: '../img/annyue-logo.svg',
    siteTitle: '深圳市安跃企业服务',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    // 社交链接
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' },

      // 微信
      {
        icon: { svg: '<svg t="1704625647815" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4277" width="200" height="200"><path d="M1010.8 628c0-141.2-141.3-256.2-299.9-256.2-168 0-300.3 115.1-300.3 256.2 0 141.4 132.3 256.2 300.3 256.2 35.2 0 70.7-8.9 106-17.7l96.8 53-26.6-88.2c70.9-53.2 123.7-123.7 123.7-203.3zM618 588.8c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40c0 22-17.9 40-40 40z m194.3-0.3c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" fill="#00C800" p-id="4278"></path><path d="M366.3 106.9c-194.1 0-353.1 132.3-353.1 300.3 0 97 52.9 176.6 141.3 238.4l-35.3 106.2 123.4-61.9c44.2 8.7 79.6 17.7 123.7 17.7 11.1 0 22.1-0.5 33-1.4-6.9-23.6-10.9-48.3-10.9-74 0-154.3 132.5-279.5 300.2-279.5 11.5 0 22.8 0.8 34 2.1C692 212.6 539.9 106.9 366.3 106.9zM247.7 349.2c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z m246.6 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" fill="#00C800" p-id="4279"></path></svg>' },
        link: ''
      },
    ]
  }
})
