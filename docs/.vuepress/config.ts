import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // Webpack 打包工具的配置项
  bundlerConfig: {
    // 查看下方
    chainWebpack: (config, isServer, isBuild) => {
      // config.resolve.extensions.add('.mjs')
      // https://github.com/webpack/webpack/issues/11467#issuecomment-691873586
      config.module
        .rule()
        .test(/\.m?jsx?$/)
        .resolve.set('fullySpecified', false)
        // .end()
        // .type('javascript/auto')
    }

  }
})