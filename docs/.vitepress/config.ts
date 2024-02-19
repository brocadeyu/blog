import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '',
  title: 'Brocadeyu',
  description: 'Thoughts & Blogs',
  titleTemplate: 'Brocadeyu',
  head: [['link', { rel: 'icon', href: '/shark.svg' }]],
  markdown: {
    theme: 'material-theme-ocean',
    lineNumbers: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/shark.svg',
    outline: {
      label: '目录',
    },
    lastUpdatedText: 'Updated Date',
    nav: [
      { text: '首页', link: '/', activeMatch: '' },
      { text: '博客', link: '/Blog', activeMatch: '' },
      // {
      //   text: 'NodeJs',
      //   link: '/nodejs',
      //   activeMatch: '/nodejs',
      // },
      // {
      //   text: 'Dropdown Menu1',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },
      // {
      //   text: '三剑客',
      //   items: [
      //     { text: 'HTML', link: '...' },
      //     { text: 'CSS', link: '...' },
      //     { text: 'JavaScript', link: '...' },
      //   ],
      // },
      {
        text: '笔记',
        items: [
          {
            // Title for the section.
            text: 'lang',
            items: [
              {
                text: 'JavaScript',
                link: '/JavaScript',
                activeMatch: 'JavaScript',
              },
              {
                text: 'TypeScript',
                link: '/TypeScript',
                activeMatch: 'TypeScript',
              },
              { text: 'WebGL', link: '/WebGL', activeMatch: 'WebGL' },
              { text: 'WebGPU', link: '/WebGPU', activeMatch: 'WebGPU' },
            ],
          },
          {
            // Title for the section.
            text: '_',
            items: [
              { text: 'Web APIs', link: '...' },
              { text: 'NodeJS', link: '...' },
              { text: 'NestJS', link: '...' },
              { text: '设计模式', link: '...' },
              { text: '算法', link: '...' },
            ],
          },
          // {
          //   // Title for the section.
          //   text: 'Web2D3D',
          //   items: [
          //     { text: 'Leaflet', link: '...' },
          //     { text: 'OpenLayer', link: '...' },
          //     { text: 'Cesium', link: '...' },
          //     { text: 'Three', link: '...' },
          //   ],
          // },
        ],
      },
      // {
      //   text: '基础篇',
      //   items: [
      //     { text: '标准库', link: '...' },
      //     { text: 'Web APIs', link: '...' },
      //     { text: 'Nodejs', link: '...' },
      //     // { text: '网络', link: '...' },
      //   ],
      // },
      // {
      //   text: '算法篇',
      //   items: [],
      // },
      {
        text: '面试',
        items: [
          {
            // Title for the section.
            text: '基础篇',
            items: [
              { text: 'HTML', link: '...' },
              { text: 'CSS', link: '...' },
              { text: 'JavaScript', link: '...' },
            ],
          },
          {
            // Title for the section.
            text: '进阶篇',
            items: [
              { text: 'React', link: '...' },
              { text: 'Vue', link: '...' },
              { text: 'Nodejs', link: '...' },
            ],
          },
          {
            // Title for the section.
            text: '高阶篇',
            items: [
              { text: '建设中', link: '...' },
              { text: '敬请期待', link: '...' },
            ],
          },
        ],
      },
      {
        text: '更多',
        items: [
          { text: '手写题', link: '/item-1' },
          { text: '原理篇', link: '/item-1' },
          // { text: 'Item A', link: '/item-1' },
          // { text: 'Item A', link: '/item-1' },
        ],
      },
      // {
      //   text: 'Merchandise',
      //   link: 'https://www.thegithubshop.com/',
      //   target: '_blank', //_self
      //   rel: 'sponsored',
      // },
    ],

    sidebar: [
      {
        text: '导航',
        // collapsed: false, // 可折叠
        items: [
          { text: 'JavaScript', link: '/JavaScript' },
          { text: '标准库', link: '/js-1' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/brocadeyu' },
      {
        icon: {
          svg: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="zhuzhan-icon"><title>bilibili</title></title><path fill-rule="evenodd" clip-rule="evenodd" d="M3.73252 2.67094C3.33229 2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z" fill="currentColor"></path></svg>',
        },
        link: 'https://space.bilibili.com/385737616?spm_id_from=333.1007.0.0',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright© 1999-2022 Brocadeyu',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
  },
})
