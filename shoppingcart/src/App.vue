<template>
  <div>
    <Navbar/>
    <div class="container mt-6">
      <div class="columns">
        <div class="column is-12 column--align-center">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  created(){
    this.$store.dispatch('getProductItems'),
    this.$store.dispatch('getCartItems')
  },
  
}
</script>
<style>
html,
body {
  height: 100%;
  background: #93a2b1;
}
</style>