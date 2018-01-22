const Myplugin = {install (Vue, options) {
  Vue.mixin({
    mounted () {
      console.log('Mounted!!!!')
    }
  })
}
}
export default Myplugin
