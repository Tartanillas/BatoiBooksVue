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
            ...mapActions(useDataStore, ['deteleBookFromCart']),
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
</template>