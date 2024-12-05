<script>
import {store} from "../store"
    export default {
      computed: {
        modules() {
          return store.state.modules
        }
      },
      data() {
        return {
          book : {
          }
        }
      },
      methods: {
        addBook() {
          store.addBook(this.book)
        }
      }
    }
</script>

<template>
    <div id="form">
        <h3 id="tituloForm">Añadir libro</h3>
        <form id="bookForm" method="post" @submit.prevent="addBook" novalidate>
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
          <button type="submit" id="submitButton">Añadir</button>
          <button type="reset">Reset</button>
        </form>
      </div>
</template>