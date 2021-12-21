import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { path } from '@vuepress/utils'

export default defineUserConfig<DefaultThemeOptions>({
  bundlerConfig: {
    // 可以看Vuepress 2.X官方文档相关chainWebpack的信息，如果报错，需依赖webpack-chain
    chainWebpack: (config, isServer, isBuild) => {
      config.module
        .rule()
        .test(/\.m?jsx?$/)
        .resolve.set('fullySpecified', false)
    }
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],
})