<template>
  <div class="about">
    <h1>This is a page about our Savior, Redeemer: Jesus Christ</h1>
    <img src='../assets/jesuschristredrobe_large.jpg'/>

    <h2> See yours and others testimony down below </h2>

    <div v-for="testimony in testimonies" v-bind:key = "testimony.id">
        <div class = "submitedTestimony">
          <h3>{{testimony.name}}'s testimony</h3>
          <p>{{testimony.testimony}}</p>
        </div>
    </div>
        <p> goes to home page and share more! </p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data(){
    return {}
  },
  computed: {
    testimonies(){
      return this.$root.$data.getTestimonies();
    }
  }

}
</script>

<style>
.submitedTestimony {
 border-style: groove;
 text-align: left;
 padding: 1px;
}

</style>
