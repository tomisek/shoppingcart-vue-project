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
  updateCartItems(state, payload){
    state.cartItems = payload
    console.log(payload)
  }
  
}

const actions = {
  async getProductItems(store){
    let response = await fetch('/rest/items')
    let data  = await response.json()
    console.log(data)

    store.commit('updateProductItems', data)
  },
  /* async getCartItems(store){
    let response = await fetch('/rest/cart')
    let data = await response.json()
    console.log(data)

    store.commit('updateCartItems', data)
  }, */

}

const getters = {
  cartItems: state => state.cartItems,
  cartTotal: state => {
    return state.cartItems.reduce((acc, cartItem) => {
      return (cartItem.quantity * cartItem.retailPrice) + acc;
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