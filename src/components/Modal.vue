<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1>This is a modal</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum hic
        nesciunt, labore, pariatur blanditiis porro magnam culpa quisquam ipsum
        neque eos numquam tempora doloribus quas possimus recusandae nulla odit!
        Blanditiis?
      </p>
      <button>Hide modal</button>
    </div>
  </teleport>
</template>

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
