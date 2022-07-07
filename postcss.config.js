module.exports = {
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      // rootValue 设置设计稿量出来的尺寸除以多少  设置基准字体大小
      rootValue ({ file }) {
        // indexOf 找是否包含  如果包含值大于0  如果不包含值-1
        return (file.indexOf('vant') !== -1 || file.indexOf('github-markdown-css') !== -1) ? 37.5 : 75
      },
      // propLisr 设置有哪些样式属性名  比如width heigth可以转换
      propList: ['*']
    }
  }
}
