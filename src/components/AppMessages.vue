<script>
import { useDataStore } from '../stores/store';
import { mapState, mapActions } from 'pinia';

export default {
    computed: {
        ...mapState(useDataStore, ['messages']),
    },
    methods: {
        ...mapActions(useDataStore, ['deleteMessage']),
    },
};
</script>

<template>
    <div>
        <div v-for="(message, index) in messages" :key="index" :class="['alert', `alert-${message.type}`]" role="alert" id="messages">
            {{ message.text }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="deleteMessage(index)">x</button>
        </div>
    </div>
</template>
