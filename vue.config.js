const target = "https://port-0-servernode-m3cudz5w505940d1.sel4.cloudtype.app";

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
      },
      '^/send-email': {
        target,
        changeOrigin: true,
        secure:false,
      },
      '^/kakaopay': {
        target,
        changeOrigin: true,
        secure:false
      },
      '^/payment/confirm' : {
        target,
        changeOrigin: true,
        secure:false
      },
      '^/fileDownload': {
        target,
        changeOrigin: true,
        secure:false,
      },
      '^/fileUpload': {
        target,
        changeOrigin: true,
        secure:false,
      },
      '^/boardUpdate': {
        target,
        changeOrigin: true,
        secure:false,
      },
      '^/boardFileUpdate': {
        target,
        changeOrigin: true,
        secure:false,
      },
      '^/deleteAllFile': {
        target,
        changeOrigin: true,
        secure:false,
      },
      '^/boardDelete': {
        target,
        changeOrigin: true,
        secure:false,
      }
   
    
    },
  }

}