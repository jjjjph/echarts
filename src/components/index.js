import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import CompLine from './CompLine.vue'

function plugin(app){
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
    app.component('CompLine',CompLine)
}

export default plugin
