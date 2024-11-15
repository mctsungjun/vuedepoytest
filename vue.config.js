// const target = "https://port-0-nodeservertest-m3cudz5w505940d1.sel4.cloudtype.app";

//로컬
const target = "http://localhost:3000";

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
