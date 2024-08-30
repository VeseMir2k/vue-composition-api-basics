<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1><slot name="title" /></h1>
      <slot />
      <button>Hide modal</button>
    </div>
  </teleport>
</template>

<script setup></script>

<style scoped>
.modal {
  background-color: beige;
  color: black;
  padding: 30px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

p {
  margin-bottom: 10px;
}
</style>
