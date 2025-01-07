<script>
import { useDataStore } from '../stores/store';
import { mapState, mapActions } from 'pinia';
import BookItem from "../components/BookItem.vue"
    export default {
        components: {
            BookItem
        },
        computed: {
            ...mapState(useDataStore, ['books',  'totalDeLibros', 'bookOnCart']),
        },
        methods: {
            ...mapActions(useDataStore, ['deleteBook', 'addBookToCart']),
            editarLibro(book) {
                this.$router.push({name: 'edit', params: {id: book.id}});
            }
        }
}
</script>

<template>
    <h1>Total de libros: {{ totalDeLibros }}</h1>
    <div id="list">
        <book-item v-for="book in books" :key="book.id" :book="book">
        <button class="addCart" @click="addBookToCart(book)" v-if="!bookOnCart(book.id)"><span class="material-icons">add_shopping_cart</span></button>
        <button class="editBook" @click="editarLibro(book)"><span class="material-icons">edit</span></button>
        <button class="remove" @click="deleteBook(book.id)"><span class="material-icons">delete</span></button>
        </book-item>
    </div>
</template>