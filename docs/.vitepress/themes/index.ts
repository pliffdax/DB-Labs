import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Тут можна додати глобальні або власні компоненти
  },
} satisfies Theme
