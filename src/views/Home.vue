<template>
  <div class="home">
    <testimony msg="Welcome to My testimony page"  />
    <h1>submit your testimony here</h1>
    <createTestimony/>
    <p>See yours and others testimony
    <button v-on:click="Go"> here</button>
  </p>
  </div>
</template>

<script>
// @ is an alias to /src
import testimony from "@/components/Testimony.vue";
import createTestimony from "@/components/createTestimony.vue"

export default {
  name: "Home",
  components: {
    testimony,
    createTestimony,

  },

  methods:{
    Go:function(){
      this.$router.push('about')
    }
  }
};
</script>
