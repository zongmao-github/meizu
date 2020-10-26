const path = require('path')

module.exports = {
    chainWebpack: config =>{
        const types = [ 'vue-modules', 'vue', 'normal-modules', 'normal'];
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    },
    devServer:{
        host: '0.0.0.0',
        port: 8088,
        hot: true,
        open: false,
        before: app =>{}
    }
}

function addStyleResource(rule){
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns:[
                path.resolve(__dirname, './static/style/common.less'),
                path.resolve(__dirname, './static/style/main.less')
            ]
        })
}