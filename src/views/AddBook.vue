<script>
import { useDataStore } from '../stores/store';
import { mapState, mapActions } from 'pinia';
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from 'yup';
    export default {
      components: {
        Form,
        Field,
        ErrorMessage
      },
      props: {
        id: String
      },
      computed: {
        ...mapState(useDataStore, ['modules']),
      },
      data() {
        const mySchema = yup.object({
          idModule: yup.string('El módulo debe ser una cadena de texto').required('El módulo es obligatorio'),
          publisher: yup.string('La editorial debe ser una cadena de texto').required('La editorial es obligatoria'),
          price: yup.number('El precio debe ser numérico').min(0, 'El precio debe ser mayor o igual a 0').required('El precio es obligatorio'),
          pages: yup.number('El número de páginas debe ser numérico').min(0, 'El número de páginas debe ser mayor o igual a 0').integer('El número de páginas tiene que ser un número entero').required('El número de páginas es obligatorio'),
          status: yup.string('El estado debe ser una cadena de texto').required('El estado es obligatorio')
        })
        return {
          book: {},
          mySchema
        }
      },
      watch: {
        id(newValue) {
          if (!newValue) {
            this.book = {}
          } else {
            this.cargarLibro()
          }
        },
      },
      methods: {
        ...mapActions(useDataStore, ['addBook', 'editBook', 'getBook']),
        submitBook(values) {
          if (!this.id) {
            this.addBook(values)
          } else {
            this.editBook(values)
          }
          this.redirectList()
        },
        redirectList() {
          this.$router.push('/')
        },
        async cargarLibro() {
          if (this.id) {
            this.book = await this.getBook(this.id)
        }
        }
      },
      mounted() {
        this.cargarLibro()
      },
    }
</script>

<template>
    <div id="form">
        <h3 v-if="!this.id">Añadir libro</h3>
        <h3 v-else>Editar libro</h3>
        <Form id="bookForm" method="post" @submit="submitBook" :validation-schema="mySchema">
          <div id="divIdLibro" style="display: none;">
            Id: <Field type="text" name="idBook" readonly />
          </div>
          <div>
            <label for="idModule">Módulo:</label>
            <Field as="select" name="idModule" v-model="book.moduleCode">
              <option value="">- Selecciona un módulo -</option>
              <option v-for="module in modules" :key="module.code" :value="module.code">{{ module.cliteral }}</option>
            </Field>
            <ErrorMessage name="idModule" />
          </div>

          <div>
            <label for="publisher">Editorial:</label>
            <Field type="text" name="publisher" v-model="book.publisher" />
            <ErrorMessage name="publisher" />
          </div>

          <div>
            <label for="price">Precio:</label>
            <Field type="number" name="price" step="0.01" v-model="book.price" />
            <ErrorMessage name="price" />
          </div>

          <div>
            <label for="pages">Páginas:</label>
            <Field type="number" name="pages" step="1" v-model="book.pages" />
            <ErrorMessage name="pages" />
          </div>

          <div>
            <label>Estado:</label>
              <Field type="radio" name="status" value="good" v-model="book.status" />Good
              <Field type="radio" name="status" value="new" v-model="book.status" />New
              <Field type="radio" name="status" value="bad" v-model="book.status" />Bad
            <ErrorMessage name="status" />
          </div>

          <div>
            <label for="comments">Comentarios:</label>
            <Field as="textarea" id="comments" v-model="book.comments" />
          </div>
          <button type="submit" v-if="!this.id">Añadir</button>
          <button type="submit" v-else>Editar</button>
          <button type="reset" v-if="!this.id">Reset</button>
          <button type="button" v-else @click="cargarLibro">Reset datos</button>
        </Form>
      </div>
</template>