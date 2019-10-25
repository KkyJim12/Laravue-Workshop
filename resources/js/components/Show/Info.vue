<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>ProductInfo</h1>
          <hr />
          <h1>{{this.name}}</h1>
          <h3>{{this.price}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getProductInfo();
  },
  data() {
    return {
      name: "",
      price: ""
    };
  },
  methods: {
    getProductInfo() {
      axios
        .get("/api/product/" + this.$route.params.id)
        .then(response => {
          this.name = response.data.name;
          this.price = response.data.price;
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>