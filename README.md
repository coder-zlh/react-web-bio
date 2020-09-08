## 内网穿透访问本地react项目显示Invalid Host header
原因：新版的webpack-dev-server出于安全考虑，默认检查hostname，如果它不是配置内的，将会中断访问。
解决方案：修改webpack的devServer中配置项。
    devServer: {
            disableHostCheck: true, //内网穿透可以访问
    },