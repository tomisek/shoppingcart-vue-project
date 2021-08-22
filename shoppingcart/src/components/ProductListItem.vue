<template>
  <div>
    <h3>Name: {{ productItem.product_name }}</h3>
    <h3>Price: {{ productItem.retail_price }}</h3>
    
    <a @click="additem">Add to cart</a>
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
<style scoped>
div {
  background-color: rgb(236, 227, 214);
  display: inline-block;
  border: 1px solid grey;
  border-radius: 5px;
  width: 300px;
  margin: 40px 10px 0 10px;
  padding: 10px;
  box-shadow: 0 0 5px 2px rgb(109, 108, 108);
}



a {
  margin-top: -330px;
  cursor: pointer;
  user-select: none;
}


</style>