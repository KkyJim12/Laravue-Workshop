<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Show Product</h1>
          <hr />
        </div>
        <div class="col-md-3" v-for="show in productList">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">{{show.name}}</h5>
              <p class="card-text">{{show.price}}</p>
              <router-link :to="'/show/info/'+show.id" class="btn btn-primary form-control">Info</router-link>
            </div>
          </div>
        </div>
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
      productList: []
    };
  },
  methods: {
    getProductList() {
      axios
        .get("/api/product")
        .then(response => {
          this.productList = response.data;
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  },
};
</script>