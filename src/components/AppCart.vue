<script>
import {store} from "../store"
import BookItem from "./BookItem.vue"
    export default {
        components: {
            BookItem
        },
        computed: {
            books() {
                return store.state.booksOnCart
            }
        },
        methods: {
            delBookFromCart(id) {
                store.deteleBookFromCart(id)
            }
        }
    }
</script>

<template>
    <h1>Carrito de libros</h1>
    <div id="list">
        <book-item v-for="book in books" :key="book.id" :book="book">
            <button type="button" @click="delBookFromCart(book.id)"><span class="material-icons">delete</span></button>
        </book-item>
    </div>
</template>