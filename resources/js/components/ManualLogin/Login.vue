<template>
  <div>
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-12">
          <h1>Manual Login !!</h1>
          <div class="alert alert-danger" v-if="this.messages">{{this.messages}}</div>
          <hr />
        </div>
      </div>
      <div class="form">
        <label>Email</label>
        <input v-model="email" class="form-control" type="email" placeholder="Email" />
        <div class="alert alert-danger" v-if="this.errors.email">{{this.errors.email}}</div>
        <label>Password</label>
        <input v-model="password" class="form-control" type="password" placeholder="Password" />
        <div class="alert alert-danger" v-if="this.errors.password">{{this.errors.password}}</div>
        <button @click="Login()" class="btn btn-success form-control mt-3">Sign in!!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: "",
      messages: "",
      email: "",
      password: ""
    };
  },
  methods: {
    Login() {
      axios
        .post("/api/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          localStorage.id = response.data.id;
          localStorage.username = response.data.username;
          localStorage.email = response.data.email;
          window.location.href = '/';
        })
        .catch(error => {
          if (error.response.status == 422) {
            this.errors = error.response.data.errors;
          }

          if (error.response.status == 401) {
            this.messages = error.response.data.messages;
          }
        });
    }
  }
};
</script>