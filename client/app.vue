<template>
  <div id="app">
    <Header></Header>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.vue'
export default {
  components: {
    Header,
    Footer,
  },
  mounted(){
     this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
     });
  }
}
</script>

<style lang="stylus" scoped>

</style>


