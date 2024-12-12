<script>
export default {
    props: {
        book: {
        type: Object,
        required: true
        }
    },
};
</script>

<template>
  <div>
    <img :src="book.photo">
    <div>
        <h5>Libro {{book.id}}</h5>
        <h5>{{book.cliteral}}</h5>
        <h5>{{book.publisher}}</h5>
        <h5>{{book.pages}} páginas</h5>
        <h5>Estado: {{book.status}}</h5>
        <h5>{{book.soldDate || "En venta"}}</h5>
        <h5>{{book.comments}}</h5>
        <h5><strong>{{book.price}}€</strong></h5>
        <slot></slot>
    </div>
  </div>
</template>
