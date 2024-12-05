import { reactive } from 'vue'
import api from './api'
export const store = {
  state: reactive({
    books: [],
    modules: []
  }),
  async populateBooks() {
    const response = await api.books.getAll()
    store.state.books = response.data 
  },
  async populateModules() {
    const response = await api.modules.getAll()
    store.state.modules = response.data
  },
}