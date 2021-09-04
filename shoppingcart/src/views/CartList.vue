<template>
  <div id="cart">
    <div class="cart--header has-text-centered">
      <i class="fa fa-2x fa-shopping-cart"></i>
    </div>
    <p v-if="!cartItems.length" class="cart-empty-text has-text-centered">
      Add some items to the cart!
    </p>
    <ul>
      <!-- <CartListItem class="cart-item" v-for="(c,index) of cartItems" :key="index" :cartItem="c"/> -->
      <li class="cart-item" v-for="cartItem in cartItems" :key="cartItem.id">
          <CartListItem :cartItem="cartItem"/>
          
      </li>

      <div class="notification is-success">
        <p>
          Antal produkter totalt:
          <span class="has-text-weight-bold">{{ cartQuantity }}</span>
        </p>
      </div>
      <br>
    </ul>
    <div class="buttons">
    <button :disabled="!cartItems.length" class="button is-info">
      Gå till betalningen (<span class="has-text-weight-bold">sek {{ cartTotal }}</span>)
    </button>

 <button class="button is-danger is-outlined" @click="removeAllCartItems">
    <span>Töm kundvagnen</span>
    <span class="icon is-small">
      <i class="fas fa-times"></i>
    </span>
  </button>
       </div>
  </div>
</template>
<script>
import CartListItem from '../components/CartListItem.vue';
import {mapGetters} from "vuex";
export default {
    name: "CartList",
    components:{
        CartListItem
    },
    computed:{
        ...mapGetters(["cartItems", "cartTotal", "cartQuantity"])
    },
    created(){
      this.$store.dispatch("getCartItems")
      
    },
    methods:{
      async removeAllCartItems(){
          let deleteAllCartItems = await fetch ('/rest/cart', {
            method: 'DELETE'
          })
          this.$store.commit("deleteCartItems", deleteAllCartItems)
      },  
    }
}
</script>
<style>

   
</style>
