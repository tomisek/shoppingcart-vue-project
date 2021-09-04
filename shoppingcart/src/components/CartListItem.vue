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
   beforeUpdate(){
      
   }, 
   methods:{
    async updateCartItemQuantity(){

          let cartItemToUpdate = {
          product_quantity: this.cartItem.product_quantity + 1,
          }
          let cartItemUp = await fetch('/rest/cart/' + this.cartItem.id, {
            method: 'PATCH', 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(cartItemToUpdate)
          })
          console.log(cartItemUp)
          if(cartItemUp.ok){
              
              this.$store.dispatch("getCartItems", this.cartItem)
          }
          },
    async deleteCartItemById(){
        let cartItemToDelete = await fetch('/rest/cart/' + this.cartItem.id, {
          method: 'DELETE'
        })
        if(cartItemToDelete.ok){
          this.$store.commit("removeCartItem", this.cartItem)
        }
      },
    async cartItemQuantityDown(){
        let cartItemToDowngrade = {
          id: this.cartItem.id,
          product_url: this.cartItem.product_url,
          product_category: this.cartItem.product_category,
          product_name: this.cartItem.product_name,
          product_quantity: this.cartItem.product_quantity - 1,
          retal_price: this.cartItem.retail_price
        }
        let cartItemDown = await fetch('/rest/cart/' + this.cartItem.id, {
          method: 'PUT',
          headers: {"Content-Type": "application/json, charset=UTF-8"},
          body: JSON.stringify(cartItemToDowngrade)
        })
        console.log(cartItemDown)
        console.log(cartItemToDowngrade)
        console.log(this.cartItem)
       
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
 .cart-item__details{
   background-color: rgb(229, 246, 252);
 }
.delete-button__modify{
  float: right;
  margin-right: 120px;
  color: red;
}
</style>