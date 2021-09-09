import { createStore } from 'vuex'

const state = {
  productItems: [],
  cartItems: [],
}

const mutations = {
  updateProductItems(state, productItems){
    state.productItems = productItems
    //console.log(productItems)
  },
  updateCartItems(state, cartItems){
    state.cartItems = cartItems
    //console.log(cartItems)
  },
  deleteCartItems(state, payload){
    state.cartItems = []
    //console.log(payload)
  },
  /* appendCartItem(state, cartItemToAppend){
    state.cartItems.push(cartItemToAppend)
  },
  removeCartItem(state, cartItemToRemove){
    state.cartItems = state.cartItems.filter(cartItem => cartItem != cartItemToRemove)
  } */
}
const actions = {
  async getProductItems({commit}){
    let response = await fetch('/rest/items')
    let data  = await response.json()
    //console.log(data)

    commit('updateProductItems', data)
  },
  
  async getCartItems(store){
    let response = await fetch('/rest/cart')
    let data = await response.json()
    //console.log(data)

    store.commit('updateCartItems', data)
  },
  
  async addingNewItems({dispatch}, newCartProduct){
    let response = await fetch('/rest/cart', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(newCartProduct)
    })
    let data = await response.json()
    dispatch('getCartItems')
  },
  
  async removeAllOurCartItems({commit}){
    let response = await fetch('/rest/cart', {
      method: 'DELETE'
    })
    commit('deleteCartItems')
  },
  async deleteCartById({dispatch}, cartItemIdToDelete){
    let response = await fetch('/rest/cart/'+ cartItemIdToDelete, {
      method: 'DELETE'
    })
    dispatch('getCartItems')
  },
  async cartItemQuantityUp({dispatch}, cartItemToUpdate){
    let itemUp = {product_quantity: cartItemToUpdate.product_quantity}
    console.log(itemUp)
    let response = await fetch ('/rest/cart/' + cartItemToUpdate.id, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(itemUp)
    })
    dispatch('getCartItems')

  },
  async cartItemDown({dispatch}, cartItemToDowngrade){
    let response = await fetch ('/rest/cart/' + cartItemToDowngrade.id, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(cartItemToDowngrade)
    })
    dispatch('getCartItems')
  }
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