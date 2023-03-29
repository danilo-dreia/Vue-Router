import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: function() {
      return import("@/components/HelloWorld.vue");
    }
  },
  {
    path: "/route1",
    name: "route1",
    component: function() {
      return import("@/views/Route1.vue");
    }
  },
  {
    path: "/route2",
    name: "route2",
    component: function() {
      return import("@/views/Route2.vue");
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
