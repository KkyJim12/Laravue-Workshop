<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Create Product</h1>
          <label>Product Name</label>
          <input v-model="name" type="text" placeholder="Product Name" class="form-control" />
          <label>Product Price</label>
          <input v-model="price" type="number" placeholder="Product Price" class="form-control" />
          <button @click="Create()" class="btn btn-success form-control mt-3">Create !!</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            name:'',
            price:''
        }
    },
    methods: {
        Create() {
            axios.post('/api/product',{
                name:this.name,
                price:this.price
            }).then(response=>{
                this.$router.push('/crud');
            }).catch(error=>{
                console.log(error.response);
            });
        }
    }
};
</script>