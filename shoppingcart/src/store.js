import { createStore } from 'vuex'

// State is a place where our global variables goes.
const state = {
  productItems: [],
  cartItems: []
  
}

// Mutations are functions that change or manipulate the state
// NOTE: do not ever make changes to state variables directly.
const mutations = {
  setItems(state, productItems){
    state.productItems = productItems
    console.log(productItems)
  },
  
}

// Are the asyncronous functions 
const actions = {
  async getProductItems(store){
    let response = await fetch('/rest/items')
    let data  = await response.json()
    console.log(data)

    // We replace state.cars with the cars we grabbed.
    store.commit('setItems', data)
  }
}

export default createStore({state, mutations, actions})