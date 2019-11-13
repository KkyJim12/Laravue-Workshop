<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>CRUD Workshop</h1>
        <router-link to="/create" class="btn btn-success">Create</router-link>
        <hr />
        <vuetable ref="vuetable"
          api-url="/api/product"
          :fields="['name', 'price']"
          data-path=""
        ></vuetable>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getProductList();
  },
  data() {
    return {
      product: []
    };
  },
  methods: {
    getProductList() {
      axios
        .get("/api/product")
        .then(response => {
          this.product = response.data;
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    Delete(id) {
      axios
        .delete("/api/product/" + id)
        .then(response => {
          this.getProductList();
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>