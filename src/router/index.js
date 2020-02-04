import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Create from "@/components/Create.vue";
import Edit from "@/components/Edit.vue";
import Index from "@/components/Index.vue";
import NProgress from "nprogress";
Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
  // {
  //   path: "/contact",
  //   name: "contact",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Contact.vue")
  // },
  {
    path: "/create",
    name: "Create",
    component: Create
  },
  {
    path: "/edit",
    name: "Edit",
    component: Edit
  },
  {
    path: "/index",
    name: "Index",
    component: Index
  }
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

export default router;
