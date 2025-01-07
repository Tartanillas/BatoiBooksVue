import { createRouter, createWebHistory } from 'vue-router'
import BookList from "../views/BookList.vue"
import AddBook from "../views/AddBook.vue"
import AppCart from "../views/AppCart.vue"
import AboutView from "../views/AboutView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BookList,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/addBook',
      name: 'addBook',
      component: AddBook
    },
    {
      path: '/cart',
      name: 'cart',
      component: AppCart
    },
    {
      path: '/editBook/:id',
      name: 'edit',
      component: AddBook,
      props: true
    }
  ],
})

export default router
