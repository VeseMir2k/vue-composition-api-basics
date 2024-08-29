<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <div v-if="showModal" class="modal">
      <h1>This is a modal</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum hic
        nesciunt, labore, pariatur blanditiis porro magnam culpa quisquam ipsum
        neque eos numquam tempora doloribus quas possimus recusandae nulla odit!
        Blanditiis?
      </p>
      <button @click="showModal = false">Hide modal</button>
    </div>
  </div>
</template>

<script setup>
// & imports
import { ref } from "vue";

// & modals
const showModal = ref(false);
</script>

<style scoped>
.modal {
  background-color: beige;
  color: black;
  padding: 30px;
}

p {
  margin-bottom: 10px;
}
</style>
