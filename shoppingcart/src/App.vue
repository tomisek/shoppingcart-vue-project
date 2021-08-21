<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view/>
  </div>
</template>

<script>


export default{
  created() {
    this.$store.dispatch('getProductItems')
  },
}
</script>