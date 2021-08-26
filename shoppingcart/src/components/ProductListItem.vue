<template>
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h4>{{ productItem.product_name }}</h4>
          <a
            class="button is-rounded is-pulled-left"
            @click="addCartItem(productItem)"
          >
            <strong>Add to Cart</strong>
          </a>
          <br />
          <p class="mt-4">
            {{ productItem.product_category }}
          </p>
        </div>
        <div class="media">
          <div class="media-content">
            <a href="url" class="title is-6">{{ productItem.product_url }}</a>   
          </div>
          <div class="media-right">
            <a class="button is-primary is-light">
              <strong>sek {{ productItem.retail_price }}</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: ["productItem"],
  methods: {
      /* ...mapActions(["addCartItem"]), */
      async addCartItem(){
        
        let newCartProduct = {
          id: this.productItem.id,
          productUrl: this.productItem.product_url,
          productName: this.productItem.product_name,
          productCategory: this.productItem.product_category,
          retailPrice: this.productItem.retail_price,
          quantity: 1
        }
        let cartItem = await fetch('/rest/cart', {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(newCartProduct),
        
        })
        //console.log(newCartProduct)
        let cartProducts = this.$store.state.cartItems
        let cartProductExists = false;
        cartProducts.map((cartProduct) =>  {
          if(cartProduct.id === newCartProduct.id){
            cartProduct.quantity++;
            cartProductExists = true;
          }
        });
        if(!cartProductExists) cartProducts.push(newCartProduct);
        console.log(cartProducts) //ITS WORKING UNTIL HERE!!!!!!!
        
        cartItem = await cartItem.json()

        this.$store.commit('updateCartItems', cartProducts)
       
        console.log(cartItem)


      }

  }
  
};
</script>