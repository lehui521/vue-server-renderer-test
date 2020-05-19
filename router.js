import Router from "vue-router"
import Vue from "vue"
Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      // ...
      {path:"/",component:()=>import("./src/components/home.vue")},
      {path:"/item/:id",component:()=>import("./src/components/item.vue")}
    ]
  })
}