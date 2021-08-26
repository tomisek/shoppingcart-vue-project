<template>
<div class="conatiner is-fluid">
  <div class="tile is-ancestor">
    <div class="tile is-parent" v-for="productItem in productItems" :key="productItem.id" >
    <ProductListItem :productItem="productItem"/>
  </div> 
</div>
</template>

<script>
import ProductListItem from "../components/ProductListItem.vue";
import {mapGetters} from 'vuex';
export default {
  components:{
    ProductListItem
  },
  
  computed: {
    productItems(){
      return this.$store.state.productItems
    },
    ...mapGetters(['productItems'])
  },
}
</script>