import { defineConfig } from 'vitepress'
import markdownPlantuml from 'markdown-it-plantuml'
import markdownAdmonition from 'markdown-it-admonition'
import markdownTaskLists from 'markdown-it-task-lists'

export default defineConfig({
  title: 'DB-Labs',
  description: 'Лабораторні роботи з дисципліни "Організація баз даних"',
  lang: 'uk',
  base: '/DB-Labs/', // базовий URL для розгортання на GitHub Pages

  head: [
    ['link', { rel: 'icon', href: '' }], // у href за бажанням можна вказати URL до іконки
  ],

  themeConfig: {
    outline: [1, 4],

    nav: [
      { text: 'Початок', link: '/' },
      { text: 'Документація', link: '/other/intro/README' },
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        items: [
          {
            text: 'Вступ',
            link: '/other/intro/README',
          },
          {
            text: 'Розроблення загальних вимог до системи',
            link: '/other/requirements/README',
            items: [
              { text: 'Аналіз предметної області', link: '/Lab1/README' },
              { text: 'Потреби зацікавлених сторін', link: '/Lab2/README' },
            ],
          },
          {
            text: 'Розроблення вимог до функціональности системи',
            link: '/Lab3/README',
          },
          {
            text: 'Проектування інформаційного забезпечення',
            link: '/Lab4/README',
          },
          {
            text: 'Реалізація інформаційного та програмного забезпечення',
            link: '/Lab5/README',
          },
          {
            text: 'Тестування працездатності системи',
            link: '/Lab6/README',
          },
          {
            text: 'Висновки',
            link: '/other/conclusion/README',
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pliffdax/DB-Labs' }, // посилання на ваш репозиторій
    ],

    footer: {
      copyright: 'MIT Licensed | Copyright © 2025 Pliffdax'
    },
  },

  markdown: {
    config: (md) => {
      md.set({ html: true })
      md.use(markdownPlantuml)
      md.use(markdownAdmonition)
      md.use(markdownTaskLists)
    }
  },
})