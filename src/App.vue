<script>
import logoBatoi from "/logoBatoi.png"
import AppMenu from "./components/AppMenu.vue"
import AppMessages from "./components/AppMessages.vue"
import BookList from "./views/BookList.vue"
import AddBook from "./views/AddBook.vue"
import AppCart from "./views/AppCart.vue"
import AboutView from "./views/AboutView.vue"
import { useDataStore } from './stores/store'
import { mapActions } from 'pinia'
export default {
  components: {
    AppMenu,
    AppMessages,
    BookList,
    AddBook,
    AppCart,
    AboutView,
  },
  data() {
    return {
      logoBatoi: logoBatoi,
    }
  },
  methods: {
    ...mapActions(useDataStore, ['populateBooks', 'populateModules']),
  },
  mounted() {
      this.populateBooks()
      this.populateModules()
  }
}
</script>

<template>
  <div>
    <h1>BatoiBooks</h1>
    <img alt="Logo Batoi" class="logo" :src="logoBatoi" width="125" height="125" />
    <app-menu></app-menu>
    <app-messages></app-messages>
    <router-view></router-view>
    <!--<book-list></book-list>
    <add-book></add-book>
    <app-cart></app-cart>
    <about-view></about-view>-->
    <footer>Miguel Ángel Martínez</footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons')

</style>
