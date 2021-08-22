<template>
<div class="conatiner is-fluid">
  <div class="tile is-ancestor">
    <div class="tile is-parent" >
      
    </div><ProductListItem v-for="(c, index) of productItems" :key="index" :productItem="c" />
  </div> 
</div>
</template>

<script>
import ProductListItem from "../components/ProductListItem.vue";

export default {
  components:{
    ProductListItem
  },
  // Is a getter used to get data from vuex (store.js)
  computed: {
    // cars can be named to whatever..
    productItems(){
      // We access Vue properties by adding $ in front of them
      return this.$store.state.productItems
    }
  },
}
</script>

<style>

</style>