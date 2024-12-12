import { reactive } from 'vue'
import api from './api'
export const store = {
  state: reactive({
    books: [],
    modules: [],
    messages: [],
    booksOnCart: []
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
  },
  async editBook(book) {
    try {
      const response = await api.books.modify(book)
      const index = store.state.books.findIndex(libro => libro.id === response.data.id)
      if (index !== -1) {
        store.state.books.splice(index, 1)
      }
      store.state.books.push(book)
      store.addMessage('Libro editado correctamente')
    } catch(error) {
      store.addMessage(error)
    }
  },
  async addBookToCart(book) {
    try {
      store.state.booksOnCart.push(book)
      store.addMessage('Libro con ID: ' + book.id + ' añadido al carrito')
    } catch (error) {
      store.addMessage(error)
    }
  },
  async getBook(id) {
    try {
      const response = await api.books.getOne(id)
      return response.data
    } catch (error) {
      store.addMessage(error)
    }
  },
  deteleBookFromCart(id) {
    try {
      const index = store.state.booksOnCart.findIndex(book => book.id === id);
      if (index !== -1) {
        store.state.booksOnCart.splice(index, 1);
        store.addMessage('Libro ' + id + 'del carrito correctamente')
      }
    } catch (error) {
      store.addMessage(error)
    }
  }
}