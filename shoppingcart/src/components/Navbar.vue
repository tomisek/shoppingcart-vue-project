<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/inventory" class="button is-primary">
               <strong> Våra produkter</strong>
              </router-link>
              <router-link to="/cart"  class="button is-warning">   <p>
              Antal produkter i varukorgen:
              <span> {{cartQuantity}}</span> </p>
              </router-link>
            </div>
          </div>
      </div>
    </nav>
</template>
<script>
import {mapGetters} from "vuex"
export default {
    name: "Navbar",
    computed: {
    ...mapGetters([
      'cartQuantity',
    ])
  },
}
</script>