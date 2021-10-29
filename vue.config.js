module.exports = {
    lintOnSave: false,
    devServer: {
        overlay: false,
        proxy: {
            '/api': {
                target: 'http://localhost:8180',
                changeOrigin: true
            }
        }
    }
}