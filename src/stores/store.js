import { defineStore } from 'pinia'
import api from '../api'

export const useDataStore = defineStore('data', {
    state() {
        return {
            books: [],
            modules: [],
            messages: [],
            booksOnCart: JSON.parse(localStorage.getItem('booksOnCart')) || []
        }
    },
    getters: {

    },
    actions: {
        async populateBooks() {
            try {
                const response = await api.books.getAll()
                this.books = response.data
            } catch (error) {
                this.addMessage(error)
            }
        },
        async populateModules() {
            try {
                const response = await api.modules.getAll()
                this.modules = response.data
            } catch (error) {
                this.addMessage(error)
            }
        },
        async addBook(book) {
            try {
                const response = await api.books.create(book)
                this.books.push(response.data)
                this.addMessage('Libro añadido correctamente')
            } catch (error) {
                this.addMessage(error)
            }
        },
        async deleteBook(id) {
            try {
                await api.books.delete(id);
                const index = this.books.findIndex(book => book.id === id);
                if (index !== -1) {
                    this.books.splice(index, 1);
                    this.addMessage('Libro borrado correctamente')
                }
            } catch (error) {
                this.addMessage(error)
            }
        },
        async addMessage(message) {
            this.messages.push(message)
        },
        async deleteMessage(index) {
            this.messages.splice(index, 1);
        },
        async editBook(book) {
            try {
                const response = await api.books.modify(book)
                const index = this.books.findIndex(libro => libro.id === response.data.id)
                if (index !== -1) {
                    this.books.splice(index, 1)
                }
                this.books.push(book)
                this.addMessage('Libro editado correctamente')
            } catch (error) {
                this.addMessage(error)
            }
        },
        async addBookToCart(book) {
            try {
                this.booksOnCart.push(book)
                this.updateLocalStorage()
                this.addMessage('Libro con ID: ' + book.id + ' añadido al carrito')
            } catch (error) {
                this.addMessage(error)
            }
        },
        async getBook(id) {
            try {
                const response = await api.books.getOne(id)
                return response.data
            } catch (error) {
                this.addMessage(error)
            }
        },
        deleteBookFromCart(id) {
            try {
                const index = this.booksOnCart.findIndex(book => book.id === id);
                if (index !== -1) {
                    this.booksOnCart.splice(index, 1);
                    this.updateLocalStorage()
                    this.addMessage('Libro con ID: ' + id + ' eliminado del carrito')
                }
            } catch (error) {
                this.addMessage(error)
            }
        },
        updateLocalStorage() {
            localStorage.setItem('booksOnCart', JSON.stringify(this.booksOnCart));
        },
        deleteAllBooksFromCart() {
            this.booksOnCart = []
            this.updateLocalStorage()
            this.addMessage('Carrito vaciado correctamente')
        }
    }
})
