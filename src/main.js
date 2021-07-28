import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import MapDetail from "./components/MapDetail.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/country/:code", component: MapDetail }
  ]
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
