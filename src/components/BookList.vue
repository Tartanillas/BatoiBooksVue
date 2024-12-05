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
    }
</script>

<template>
    <div id="list">
        <book-item v-for="book in books" :key="book.id" :book="book"></book-item>
    </div>
</template>