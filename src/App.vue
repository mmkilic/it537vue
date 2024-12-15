<template>
  <div id="app">
    <!-- Navigation Bar -->
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="./">WordGame</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="./" class="text-secondary">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/about" class="text-secondary">About</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- Vue views -->
    <div class="container">
      <router-view/>
    </div>

    <!-- Footer -->
    <footer class="footer mt-auto py-1 bg-dark">
      <div class="container">
        <p class="text-light">&copy; 2021 Copyright by Mehmet KILIC</p>
      </div>
    </footer>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
