import { createStore } from 'vuex'


const state = {
  productItems: [],
  cartItems: [],
}

const mutations = {
  updateProductItems(state, productItems){
    state.productItems = productItems
    console.log(productItems)
  },
  updateCartItems(state, cartItems){
    state.cartItems = cartItems
    console.log(cartItems)
  },
  deleteCartItems(state, payload){
    state.cartItems = []
    console.log(payload)
  },
  appendCartItem(state, cartItemToAppend){
    state.cartItems.push(cartItemToAppend)
  },
  removeCartItem(state, cartItemToRemove){
    state.cartItems = state.cartItems.filter(cartItem => cartItem != cartItemToRemove)
  }
  
}

const actions = {
  async getProductItems(store){
    let response = await fetch('/rest/items')
    let data  = await response.json()
    console.log(data)

    store.commit('updateProductItems', data)
  },
  async getCartItems(store){
    let response = await fetch('/rest/cart')
    let data = await response.json()
    console.log(data)

    store.commit('updateCartItems', data)
  },

}

const getters = {
  cartItems: state => state.cartItems,
  cartTotal: state => {
    return state.cartItems.reduce((acc, cartItem) => {
      return (cartItem.product_quantity * cartItem.retail_price) + acc;
    }, 0).toFixed(2);
  },
  cartQuantity: state => {
    return state.cartItems.reduce((acc, cartItem) => {
      return cartItem.product_quantity + acc;
    }, 0);
  },
  productItems: state => state.productItems,
}

export default createStore({state, mutations, actions, getters})