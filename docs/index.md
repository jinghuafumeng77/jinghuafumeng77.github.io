---

  layout: home
  hero:
    image: 
      src: /images/logo.jpg
      alt: 菁华浮梦
    name: 测试页面
    text: 页面文本
    tagline: 收集有一大批前端相关的技术网站，包括Vue、React等技术资料的生态网站，方便快速访问。
    actions:
    - theme: brand
      text: 开始使用
      link: /markdown-examples
    - theme: alt
      text: 前往测试页面
      link: /test
  features:
  - title: UnoCSS
    details: Unocss是一种基于PurgeCSS的CSS框架,它可以帮助你更简洁、更高效地编写CSS。 Unocss的语法非常简单,它采用了类似于Tailwind CSS的类名方式。
    link: https://unocss.dev/
    linkText: 了解更多
  - title: Vue3
    details: 渐进式JavaScript框架.
    link: https://cn.vuejs.org/
    linkText: 了解更多
  - title: vitePress
    details: Vite & Vue Powered Static Site Generator.
    link: https://vitepress.dev/zh/
  - title: Pinia
    details: 符合直觉的Vue.js 状态管理库.
    link: https://pinia.vuejs.org/zh/
  - title: Vuex
    details: 是一个专为 Vue.js 应用程序开发的状态管理模式.
    link: https://vuex.vuejs.org/zh/
  - title: Vue Router
    details: Vue.js 的官方路由,为 Vue.js 提供富有表现力、可配置的、方便的路由.
    link: https://router.vuejs.org/zh/
    
---
## Hero配置
```ts
interface Hero {
  // `text` 上方的字符，带有品牌颜色
  // 预计简短，例如产品名称
  name?: string

  // hero 部分的主要文字，
  // 被定义为 `h1` 标签
  text: string

  // `text` 下方的标语
  tagline?: string

  // text 和 tagline 区域旁的图片
  image?: ThemeableImage

  // 主页 hero 部分的操作按钮
  actions?: HeroAction[]
}

type ThemeableImage =
  | string
  | { src: string; alt?: string }
  | { light: string; dark: string; alt?: string }

interface HeroAction {
  // 按钮的颜色主题，默认为 `brand`
  theme?: 'brand' | 'alt'

  // 按钮的标签
  text: string

  // 按钮的目标链接
  link: string

  // 链接的 target 属性
  target?: string

  // 链接的 rel 属性
  rel?: string
}
```

## Feature配置信息
```ts
interface Feature {
  // 在每个 feature 框中显示图标
  icon?: FeatureIcon

  // feature 的标题
  title: string

  // feature 的详情
  details: string

  // 点击 feature 组件时的链接，可以是内部链接，也可以是外部链接。
  //
  //
  // 例如 `guide/reference/default-theme-home-page` 或 `https://example.com`
  link?: string

  // feature 组件内显示的链接文本，最好与 `link` 选项一起使用
  //
  //
  // 例如 `Learn more`, `Visit page` 等
  linkText?: string

  // `link` 选项的链接 rel 属性
  //
  // 例如 `external`
  rel?: string

  // `link` 选项的链接 target 属性
  target?: string
}

type FeatureIcon =
  | string
  | { src: string; alt?: string; width?: string; height: string }
  | {
      light: string
      dark: string
      alt?: string
      width?: string
      height: string
    }
```