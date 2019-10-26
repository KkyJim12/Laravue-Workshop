<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Laravue-Workshop</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-if="this.email">
            <router-link to="/crud" class="nav-link">CRUD</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/show" class="nav-link">Show</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/slot" class="nav-link">Slot</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/props" class="nav-link">Props</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/watcher" class="nav-link">Watcher</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/computed" class="nav-link">Computed</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/vuex" class="nav-link">vuex</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/vuex2" class="nav-link">vuex-show</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto" v-if="this.email">
          <li class="nav-item">
            <router-link to="#" class="nav-link">{{this.username}}</router-link>
          </li>
          <li class="nav-item">
            <a href="#" @click="Logout()" class="nav-link">Logout</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto" v-else>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: localStorage.getItem("email"),
      username: localStorage.getItem("username")
    };
  },
  methods: {
    Logout() {
      localStorage.removeItem("id");
      localStorage.removeItem("email");
      localStorage.removeItem("username");
      window.location.href = "/";
    }
  }
};
</script>