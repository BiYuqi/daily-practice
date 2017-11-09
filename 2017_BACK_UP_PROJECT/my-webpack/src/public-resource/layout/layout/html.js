const config = require('configModule')
const noJquery = require('withoutJqueryModule')

const layout = require('./html.ejs')
const header = require('../../components/header/html.ejs')
const footer = require('../../components/footer/html.ejs')
const navBar = require('../../components/nav-bar/html.ejs')

/* 整理渲染公用部分所用到的模板变量 */

const pf = {
    pageTitle: '',
    constructInsideUrl: noJquery.constructInsideUrl
}

const moduleExports = {
    /* 处理各个页面传入而有需要在公用区域用到的参数 */

    init({ pageTitle }) {
        pf.pageTitle = pageTitle;
        return this
    },

    run(content) {
        //页头组件需要加载css/js等，因此需要比较多的变量
        const componentRenderData = Object.assign({}, config, pf);
        const renderData = {
            header: header(componentRenderData),
            footer: footer(componentRenderData),
            navBar: navBar(componentRenderData),
            content,
        }
        return layout(renderData)
    }
}
module.exports = moduleExports;
