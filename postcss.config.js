module.exports={
    plugins: [
        require("autoprefixer"),
        require('postcss-px2rem')({
            remUnit: 75,
            exclude: /node_modules/i
        })
    ]
}