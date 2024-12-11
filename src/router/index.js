import { createRouter, createWebHistory } from 'vue-router'
import BookList from "../components/BookList.vue"
import AddBook from "../components/AddBook.vue"
import AppCart from "../components/AppCart.vue"
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
