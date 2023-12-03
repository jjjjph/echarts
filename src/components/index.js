import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import CompLine from './CompLine.vue'
import CompBar from './CompBar.vue'
import CompPie from './CompPie.vue'
import CompStackedLine from './CompStackedLine.vue'
import CompDataZoom from './CompDataZoom.vue'

function plugin(app){
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
    app.component('CompLine',CompLine)
    app.component('CompBar',CompBar)
    app.component('CompPie',CompPie)
    app.component('CompStackedLine',CompStackedLine)
    app.component('CompDataZoom',CompDataZoom)
}

export default plugin
