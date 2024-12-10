import { reactive } from 'vue'
import api from './api'
export const store = {
  state: reactive({
    books: [],
    modules: [],
    messages: []
  }),
  async populateBooks() {
    try {
      const response = await api.books.getAll()
      store.state.books = response.data 
    } catch (error) {
      store.addMessage(error)
    }
  },
  async populateModules() {
    try {
      const response = await api.modules.getAll()
      store.state.modules = response.data
    } catch (error) {
      store.addMessage(error)
    }
  },
  async addBook(book) {
    try {
      const response = await api.books.create(book)
      store.state.books.push(response.data)
      store.addMessage('Libro añadido correctamente')
    } catch (error) {
      store.addMessage(error)
    }
  },
  async deleteBook(id) {
    try {
      await api.books.delete(id);
      const index = store.state.books.findIndex(book => book.id === id);
      if (index !== -1) {
        store.state.books.splice(index, 1);
        store.addMessage('Libro borrado correctamente')
      }
    } catch (error) {
      store.addMessage(error)
    }
  },
  async addMessage(message) {
    store.state.messages.push(message)
  },
  async deleteMessage(index) {
      store.state.messages.splice(index, 1);
  }
}