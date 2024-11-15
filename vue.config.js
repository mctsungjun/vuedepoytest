const target = "https://nodeservertest:3000";

//로컬
// const target = "http://localhost:3000";

module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '^/api': {
        target,
        changeOrigin: true,
        secure:false,
      },
      '^/upload': {
        target,
        changeOrigin: true,
        secure:false,
      },
      '^/download': {
        target,
        changeOrigin: true,
        secure:false,
      }
    },
  }

}
