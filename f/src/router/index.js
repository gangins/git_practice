import Vue from "vue";
import VueRouter from "vue-router";
import DoorView from "@/views/DoorView.vue";
import HomeView from "@/views/HomeView.vue";
import TopRatedView from "@/views/TopRatedView.vue";
import MovieDetailView from "@/views/MovieDetailView.vue";
import ArticleView from "@/views/ArticleView.vue";
import ArticleDetailView from "@/views/ArticleDetailView.vue";

import SignUpView from "@/views/SignUpView";
import LogInView from "@/views/LogInView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "DoorView",
    component: DoorView,
  },

  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/TopRatedView",
    name: "TopRatedView",
    component: TopRatedView,
  },
  {
    path: "/movie/:id",
    name: "MovieDetailView",
    component: MovieDetailView,
  },
  {
    path: "/articles/",
    name: "ArticleView",
    component: ArticleView,
  },
  {
    path: "/articles/:id",
    name: "ArticleDetailView",
    component: ArticleDetailView,
  },

  // Auth
  {
    path: "/signup",
    name: "SignUpView",
    component: SignUpView,
  },

  {
    path: "/login",
    name: "LogInView",
    component: LogInView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
