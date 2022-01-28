var path = require('path')

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/'),
                Api: path.resolve(__dirname, 'src/api/'),
            },
            extensions: ['*', '.js', '.vue', '.json']
        },
    },
    lintOnSave: false,
    devServer: {
        disableHostCheck: true,
        overlay: false,
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8180',
                changeOrigin: true
            }
        }
    }
}