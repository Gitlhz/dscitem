module.exports = {
    devServer: {
        host: "0.0.0.0",
        port: "9527",
        open: true,
        proxy: {
            "/api": {
                //http://114.215.173.225:3000/api/v1/category/categorylist/858
                //http://192.168.0.161:3000/api/v1/category
                // target: "http://114.215.173.225:3000/api/",
                // https://x.dscmall.cn/api/catalog/list
                target: "https://x.dscmall.cn/api/",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                },
            }
        }
    }
}