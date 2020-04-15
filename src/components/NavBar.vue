<template>
<div id="nav">
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
  <router-link to="/contact">Contact</router-link>
</div>
<transition>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</transition>
</div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
