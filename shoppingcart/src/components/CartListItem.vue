<template>
  <div class="box">
    <div class="cart-item__details">
      <p class="is-inline">{{cartItem.product_name}}</p>
      <div>
        <span class="cart-item--price has-text-info has-text-weight-bold">
        sek {{cartItem.retail_price}} X     
       
          <i class="fas fa-arrow-circle-up cart-item__modify" @click="updateCartItemQuantity(cartItem)"></i>
           {{cartItem.product_quantity}}
          <i class="fas fa-arrow-circle-down cart-item__modify" @click="cartItemQuantityDown(cartItem)"></i>
           
          <i class="fas fa-trash delete-button__modify" @click="deleteCartItemById(cartItem)"></i>

        </span>
      </div>

    </div>
  </div>
</template>
<script>
export default {
   name: 'CartListItem',
   props: ["cartItem"],
   methods:{
      updateCartItemQuantity(){
          
          let cartItemToUpdate = {
          id: this.cartItem.id,
          product_quantity: this.cartItem.product_quantity +1,
          }
          this.$store.dispatch("cartItemQuantityUp", cartItemToUpdate)
          

          },
          
      deleteCartItemById(){
            console.log()
            let cartItemIdToDelete = this.cartItem.id
            this.$store.dispatch('deleteCartById', cartItemIdToDelete)
      },
        cartItemQuantityDown(){
        let cartItemToDowngrade = {
          id: this.cartItem.id,
          product_url: this.cartItem.product_url,
          product_category: this.cartItem.product_category,
          product_name: this.cartItem.product_name,
          product_quantity: this.cartItem.product_quantity - 1,
          retal_price: this.cartItem.retail_price
        }
        this.$store.dispatch('cartItemDown', cartItemToDowngrade)
       
        if(this.cartItem.product_quantity !== 0){
          this.$store.dispatch("getCartItems", this.cartItem)     
        }
      }
   }   
}
</script>
<style scoped>
 .cart-item__modify{
   color: red;
 }
 .box{
   background-color: rgb(229, 246, 252);
 }
.delete-button__modify{
  float: right;
  margin-right: 120px;
  color: red;
}
</style>