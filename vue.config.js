module.exports = {
    devServer: {
        proxy: {
            '/v1': {
                target: '172.168.0.101:5000',
                changeOrigin: true,
                pathRewrite: {
                    '^/v1': ''
                }
            }
        }
    }
}