<template>
  <div>
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-12">
          <h1>Manual Register !!</h1>
          <div class="alert alert-success" v-if="this.messages">{{this.messages}}</div>
          <hr />
        </div>
      </div>
      <div class="form">
        <label>Desirename</label>
        <input v-model="username" class="form-control" type="text" placeholder="Desire Name" />
        <div class="alert alert-danger" v-if="this.errors.username">{{this.errors.username}}</div>
        <label>Email</label>
        <input v-model="email" class="form-control" type="email" placeholder="Email" />
        <div class="alert alert-danger" v-if="this.errors.email">{{this.errors.email}}</div>
        <label>Password</label>
        <input v-model="password" class="form-control" type="password" placeholder="Password" />
        <div class="alert alert-danger" v-if="this.errors.password">{{this.errors.password}}</div>
        <label>Password Again</label>
        <input
          v-model="password_again"
          class="form-control"
          type="password"
          placeholder="Password Again"
        />
        <div class="alert alert-danger" v-if="this.errors.password_again">{{this.errors.password_again}}</div>
        <button @click="Register()" class="btn btn-success form-control mt-3">Sign Up!!</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.alert-danger {
  background-color:red;
}
</style>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password_again: "",
      messages: "",
      errors: ""
    };
  },
  methods: {
    Register() {
      axios
        .post("/api/register", {
          username: this.username,
          email: this.email,
          password: this.password,
          password_again: this.password_again
        })
        .then(response => {
          this.messages = response.data.messages;
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>