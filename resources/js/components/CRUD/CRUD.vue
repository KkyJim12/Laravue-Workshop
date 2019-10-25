<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>CRUD Workshop</h1>
        <router-link to="/create" class="btn btn-success">Create</router-link>
        <hr />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(show,index) in product">
              <th scope="row">1</th>
              <td>{{show.name}}</td>
              <td>{{show.price}}</td>
              <td>
                <router-link :to="'/edit/'+show.id" class="btn btn-warning">Edit</router-link>
              </td>
              <td>
                <button @click="Delete(show.id)" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
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