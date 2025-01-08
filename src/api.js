import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const books = {
    getAll: () => apiClient.get(`/books`),
    getOne: (id) => apiClient.get(`/books/${id}`),
    create: (book) => apiClient.post(`/books`, book),
    modify: (book) => apiClient.put(`/books/${book.id}`, book),
    delete: (id) => apiClient.delete(`/books/${id}`),
    getBookByUserAndModule: (userId, moduleCode) => apiClient.get(`/books?userId=${userId}&moduleCode=${moduleCode}`)
}

const modules = {
  getAll: () => apiClient.get(`/modules`),
  getOne: (code) => apiClient.get(`/modules/${code}`),
}

export default {
    books, modules
}