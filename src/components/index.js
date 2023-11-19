import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import CompLine from './CompLine.vue'
import CompBar from './CompBar.vue'
import CompPie from './CompPie.vue'

function plugin(app){
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
    app.component('CompLine',CompLine)
    app.component('CompBar',CompBar)
    app.component('CompPie',CompPie)
}

export default plugin
