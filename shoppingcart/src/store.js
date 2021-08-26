import { createStore } from 'vuex'

const state = {
  productItems: [],
  cartItems: []
  
}

const mutations = {
  updateProductItems(state, productItems){
    state.productItems = productItems
    console.log(productItems)
  },
  updateCartItems(state, cartItems){
    state.cartItems = cartItems
    console.log(cartItems)
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
  /* async addCartItem(){

    let response = await fetch('/rest/cart', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(response)
      
    })
    let data = await response.json()
    console.log(data)

  } */

}

const getters = {
  cartItems: state => state.cartItems,
  cartTotal: state => {
    return state.cartItems.reduce((acc, cartItem) => {
      return (cartItem.quantity * cartItem.price) + acc;
    }, 0).toFixed(2);
  },
  cartQuantity: state => {
    return state.cartItems.reduce((acc, cartItem) => {
      return cartItem.quantity + acc;
    }, 0);
  },
  productItems: state => state.productItems,
  productItemById: (state) => (id) => {
    return state.productItems.find(productItem => productItem.id === id)
  }
}

export default createStore({state, mutations, actions, getters})