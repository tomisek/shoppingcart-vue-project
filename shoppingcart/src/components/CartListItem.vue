<template>
  <div class="box">
    <div class="cart-item__details">
      <p class="is-inline">{{cartItem.productName}}</p>
      <div>
        <span class="cart-item--price has-text-info has-text-weight-bold">
        sek {{cartItem.retailPrice}} X {{cartItem.quantity}}
        </span>

        <span>
          <i class="fa fa-arrow-circle-up cart-item__modify" @click="addCartItem(cartItem)"></i>
          <i class="fa fa-arrow-circle-down cart-item__modify" @click="removeCartItem(cartItem)"></i>
        </span>
      </div>

    </div>
  </div>
</template>
<script>

export default {
   props: ["cartItem"]
    
}
</script>