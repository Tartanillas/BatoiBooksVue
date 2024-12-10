<script>
import {store} from "../store"
export default {
    props: {
        book: {
        type: Object,
        required: true
        }
    },
    methods: {
      deleteBook() {
          store.deleteBook(this.book.id)
      }
    }
};
</script>

<template>
  <div>
    <img :src="book.photo">
    <div>
        <h5>Libro {{book.id}}</h5>
        <h5>{{book.moduleCode}}</h5>
        <h5>{{book.publisher}}</h5>
        <h5>{{book.pages}} páginas</h5>
        <h5>Estado: {{book.status}}</h5>
        <h5>{{book.soldDate || "En venta"}}</h5>
        <h5>{{book.comments}}</h5>
        <h5><strong>{{book.price}}€</strong></h5>
        <button class="addCart"><span class="material-icons">add_shopping_cart</span></button>
        <button class="editBook"><span class="material-icons">edit</span></button>
        <button class="remove" @click="deleteBook"><span class="material-icons">delete</span></button>
    </div>
  </div>
</template>
