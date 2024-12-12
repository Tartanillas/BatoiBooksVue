<script>
import {store} from "../store"
import BookItem from "./BookItem.vue"
    export default {
        components: {
            BookItem
        },
        computed: {
            books() {
                return store.state.books;
            }
        },
        methods: {
            deleteBook(book) {
                store.deleteBook(book.id)
            },
            addToCart(book) {
                store.addBookToCart(book)
            },
            editBook(book) {
                this.$router.push({ name: "edit", params: { id: book.id } });
            }
        }
    }
</script>

<template>
    <div id="list">
        <book-item v-for="book in books" :key="book.id" :book="book">
        <button class="addCart" @click="addToCart(book)"><span class="material-icons">add_shopping_cart</span></button>
        <button class="editBook" @click="editBook(book)"><span class="material-icons">edit</span></button>
        <button class="remove" @click="deleteBook(book)"><span class="material-icons">delete</span></button>
        </book-item>
    </div>
</template>