<script>
import {store} from "../store"
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
            ...mapActions(useDataStore, ['deteleBookFromCart', 'deleteAllBooksFromCart']),
        }
    }
</script>

<template>
    <h1>Carrito de libros</h1>
    <div id="list">
        <book-item v-for="book in booksOnCart" :key="book.id" :book="book">
            <button type="button" @click="deteleBookFromCart(book.id)"><span class="material-icons">delete</span></button>
        </book-item>
    </div>
        <button type="button" @click=""><span class="material-icons">local_atm</span></button>
        <button type="button" @click="deleteAllBooksFromCart"><span class="material-icons">close</span></button>
</template>