<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Sharing</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>

    <!-- <NavBar></NavBar> -->
    <transition>
      <keep-alive>
        <router-view>

        </router-view>
      </keep-alive>
    </transition>
      </div>
</template>

<script>
//import Navbar from "./components/NavBar.vue"


export default {
  name: "App",
  components: {
  }
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  text-align: left;
  background-color: #D3D3D3;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: 	#FF4500;
}
</style>
