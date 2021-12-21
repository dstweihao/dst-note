import { defineClientAppEnhance } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons-vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.use(ElementPlus)
    Object.keys(ElIcons).forEach(key => {
        app.component(key, ElIcons[key])
    })
})