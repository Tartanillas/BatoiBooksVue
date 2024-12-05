import { reactive } from 'vue'
import api from './api'
export const store = {
  state: reactive({
    books: [],
    modules: []
  }),
  async populateBooks() {
    try {

      const response = await api.books.getAll()
      store.state.books = response.data 
    } catch (response) {
      console.log(response.message);
    }
  },
  async populateModules() {
    try {
      const response = await api.modules.getAll()
      store.state.modules = response.data
    } catch (response) {
      console.log(response.message);
    }
  },
  async addBook(book) {
    try {
      const response = await api.books.create(book)
      store.state.books.push(response.data)
    } catch (response) {
      console.log(response.error);
    }
  }
}