<script>
import {store} from "../store"
    export default {
      props: {
        id: String
      },
      computed: {
        modules() {
          return store.state.modules
        }
      },
      data() {
        return {
          book: {}
        }
      },
      watch: {
        id(newValue) {
          if (!newValue) {
            this.book = []
          } else {
            this.cargarLibro()
          }
        },
      },
      methods: {
        addBook() {
          if (!this.id) {
            store.addBook(this.book)
          } else {
            store.editBook(this.book)
          }
        },
        redirectList() {
          this.$router.push('/')
        },
        async cargarLibro() {
          if (this.id) {
            this.book = await store.getBook(this.id)
        }
        }
      },
      mounted() {
        this.cargarLibro()
      },
    }
</script>

<template>
    <div id="form">
        <h3 v-if="!this.id">Añadir libro</h3>
        <h3 v-else>Editar libro</h3>
        <form id="bookForm" method="post" @submit.prevent="addBook" @submit="redirectList" novalidate>
          <div id="divIdLibro" style="display: none;">
            Id: <input type="text" id="id-libro" readonly>
          </div>
          <div>
            <label for="id-module">Módulo:</label>
            <select id="id-module" required v-model="book.moduleCode">
              <option value="undefined">- Selecciona un módulo -</option>
              <option v-for="module in modules" :key="module.code" :value="module.code">{{ module.cliteral }}</option>
            </select>
            <span class="error"></span>
          </div>

          <div>
            <label for="publisher">Editorial:</label>
            <input type="text" id="publisher" required v-model="book.publisher">
            <span class="error"></span>
          </div>

          <div>
            <label for="price">Precio:</label>
            <input type="number" id="price" min="0" step="0.01" required v-model="book.price">
            <span class="error"></span>
          </div>

          <div>
            <label for="pages">Páginas:</label>
            <input type="number" id="pages" required min="0" step="1" v-model="book.pages">
            <span class="error"></span>
          </div>

          <div>
            <label>Estado:</label>
            <label for="good"></label>
              <input type="radio" id="status" name="status" value="good" required v-model="book.status">Good
            <label for="new"></label>
              <input type="radio" id="status" name="status" value="new" required v-model="book.status">New
            <label for="bad"></label>
              <input type="radio" id="status" name="status" value="bad" required v-model="book.status">Bad
              <br>
            <span class="error"></span>
          </div>

          <div>
            <label for="comments">Comentarios:</label>
            <textarea id="comments" v-model="book.comments"></textarea>
            <span class="error"></span>
          </div>
          <button type="submit" v-if="!this.id">Añadir</button>
          <button type="submit" v-else>Editar</button>
          <button type="reset" v-if="!this.id">Reset</button>
          <button type="button" v-else @click="cargarLibro">Reset datos</button>
        </form>
      </div>
</template>