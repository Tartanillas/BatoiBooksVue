<script>
import { useDataStore } from '../stores/store';
import { mapState, mapActions } from 'pinia';
import BookItem from "./BookItem.vue"
    export default {
        components: {
            BookItem
        },
        computed: {
            ...mapState(useDataStore, ['booksOnCart']),
        },
        methods: {
            ...mapActions(useDataStore, ['deleteBookFromCart', 'deleteAllBooksFromCart', 'makePurchase']),
        }
    }
</script>

<template>
    <h1>Carrito de libros</h1>
    <div id="list">
        <book-item v-for="book in booksOnCart" :key="book.id" :book="book">
            <button type="button" @click="deleteBookFromCart(book.id)"><span class="material-icons">delete</span></button>
        </book-item>
    </div>
        <button class="botonCarrito" type="button" @click="makePurchase"><span class="material-icons">check_circle</span></button>
        <button class="botonCarrito" type="button" @click="deleteAllBooksFromCart"><span class="material-icons">close</span></button>
</template>