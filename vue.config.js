module.exports = {
    devServer: {
        proxy: {
            '/v1': {
                target: 'http://0.0.0.0:5000',
                changeOrigin: true,
                pathRewrite: {
                    '^/v1': ''
                }
            }
        }
    }
}
