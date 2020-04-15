import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;


let data = {
  currentID : 1,
  testimonies:[],
  addTestimony(name,testimony){
    this.testimonies.push({
      id: this.currentID,
      name: name,
      testimony: testimony
    });
    this.currentID += 1;
  },

  getTestimonies(){
    return this.testimonies;
  }
}

new Vue({
  router,
  data:data,
  render: h => h(App)
}).$mount("#app");
