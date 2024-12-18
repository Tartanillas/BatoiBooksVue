<script>
import {store} from '../store'
import { useDataStore } from '../stores/store';
import { mapState, mapActions } from 'pinia';
    export default {
        computed: {
            ...mapState(useDataStore, ['messages']),
        }, 
        methods: {
            ...mapActions(useDataStore, ['deleteMessage']),
        }
    }
</script>

<template>
    <div v-for="(message, index) in messages" class="alert alert-danger alert-dismissible" role="alert" id="messages"> {{message}} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" v-on:click="this.deleteMessage(index)">x</button></div>
</template>