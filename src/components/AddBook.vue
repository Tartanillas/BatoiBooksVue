<script>
    export default {
        
    }
</script>

<template>
    <div id="form">
        <h3 id="tituloForm">Añadir libro</h3>
        <form id="bookForm" novalidate>
          <div id="divIdLibro">
            Id: <input type="text" id="id-libro" readonly>
          </div>
          <div>
            <label for="id-module">Módulo:</label>
            <select id="id-module" required>
              <option value="">- Selecciona un módulo -</option>
            </select>
            <span class="error"></span>
          </div>

          <div>
            <label for="publisher">Editorial:</label>
            <input type="text" id="publisher" required>
            <span class="error"></span>
          </div>

          <div>
            <label for="price">Precio:</label>
            <input type="number" id="price" min="0" step="0.01" required>
            <span class="error"></span>
          </div>

          <div>
            <label for="pages">Páginas:</label>
            <input type="number" id="pages" required min="0" step="1">
            <span class="error"></span>
          </div>

          <div>
            <label>Estado:</label>
            <label for="good"></label>
              <input type="radio" id="status" name="status" value="good" required>Good
            <label for="new"></label>
              <input type="radio" id="status" name="status" value="new" required>New
            <label for="bad"></label>
              <input type="radio" id="status" name="status" value="bad" required>Bad
              <br>
            <span class="error"></span>
          </div>

          <div>
            <label for="comments">Comentarios:</label>
            <textarea id="comments"></textarea>
            <span class="error"></span>
          </div>
          <button type="submit" id="submitButton">Añadir</button>
          <button type="reset">Reset</button>
        </form>
      </div>
</template>