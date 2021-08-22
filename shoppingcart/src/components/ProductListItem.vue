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
            <p class="title is-6">{{ productItem.product_url }}</p>
            <!-- <p class="subtitle is-7">{{ productItem.email }}</p> -->
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
export default {
  props: ["productItem"],
  /* methods: {
    async deleteCar() {
      // console.log(this.car)
      let carToDelete = await fetch('/rest/cars/' + this.car.id, {
        method: 'DELETE'
      })
      console.log(carToDelete)

      if(carToDelete.ok){
        this.$store.commit("removeCar", this.car);
      }
    },
  }, */
};
</script>