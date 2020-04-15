<template>
<div>
  <form @submit.prevent="addTestimony">
    <input v-model="name" placeholder="Name">
    <p></p>
    <textarea v-model="testimony" placeholder="Write anything here "></textarea>
    <br />
    <button type="submit">Submit</button>
  </form>

</div>
</template>

<script>
export default {
  name: 'createTestimony',
  data() {
    return {
      name: '',
      testimony: '',
    }
  },
  methods: {

    addTestimony() {
      this.$root.$data.addTestimony(this.name, this.testimony);
      this.name = "";
      this.testimony = "";
    },
  }
}
</script>

<style scoped>
input {
  font-size: 1.2em;
  height: 30px;
  width: 200px;
}

textarea {
  font-size: 1.6em;
  width: 100%;
  max-width: 500px;
  height: 100px;
}

button {
  margin-top: 20px;
  font-size: 1.2em;
}
</style>
