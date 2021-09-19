module.exports = {
    devServer: {
        overlay: false,
        devServer: {
            proxy: {
                '/api': {
                    target: 'http://localhost:8180',
                    changeOrigin: true
                }
            },
        }
    }
}