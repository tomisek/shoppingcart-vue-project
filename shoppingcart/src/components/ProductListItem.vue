<template>
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h4>{{ productItem.product_name }}</h4>
          <a  
            class="button is-info is-inverted is-pulled-left"
            @click="addCartItem(productItem)"
          >
            <strong>{{addMeToCart}}</strong>
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
            <span class="box">
              <strong>sek {{ productItem.retail_price }}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "ProductListItem",
  props: ["productItem"],
  data(){
    return{
      addMeToCart: "Lägg i varukorgen",
    }
  },
  methods: {
      addCartItem(){
          let newCartProduct = {id: this.productItem.id,
          productUrl: this.productItem.product_url,
          productName: this.productItem.product_name,
          productCategory: this.productItem.product_category,
          retailPrice: this.productItem.retail_price,
          quantity: 1}
     
          let cartProducts = this.$store.state.cartItems     
          let cartProductExists = false;
        cartProducts.map((cartProduct) =>  {
          if(cartProduct.id === newCartProduct.id){
            cartProduct.quantity ++;
            cartProductExists = true;
            this.addMeToCart = "Inlagd i varukorgen"
            let added = window.confirm("Produkten redan inlagd. Vill du fortsätta till varukorgen?")
            if(added){
                 this.$router.push('/cart')
            }else{
                return false
            } 
          }
        });
        if(!cartProductExists){
            this.$store.dispatch('addingNewItems', newCartProduct)    
            this.addMeToCart = "Inlagd i varukorgen"
            this.$store.dispatch("getCartItems")    
        }     
        }
  },
  
};
</script>
<style scoped>
.card{
  background-color: rgb(183, 243, 186);
}
</style>