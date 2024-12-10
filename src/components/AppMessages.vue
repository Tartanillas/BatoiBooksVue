<script>
import {store} from '../store'
    export default {
        computed: {
            messages() {
                return store.state.messages
            }
        }, 
        methods: {
            delMessage(index) {
                store.deleteMessage(index)
            }
        }
    }
</script>

<template>
    <div v-for="(message, index) in messages" class="alert alert-danger alert-dismissible" role="alert" id="messages"> {{message}} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" v-on:click="delMessage(index)">x</button></div>
</template>