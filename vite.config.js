const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        detailProduct: resolve(__dirname, 'detail.html'),
        products: resolve(__dirname, 'products.html'),
        index1: resolve(__dirname, 'index1.html'),

        index2: resolve(__dirname, 'index2.html'),

        index3: resolve(__dirname, 'index3.html'),

        index4: resolve(__dirname, 'index4.html'),
        
        index5: resolve(__dirname, 'index5.html'),


      }
    }
  }
})