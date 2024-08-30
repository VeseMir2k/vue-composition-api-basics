<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1>{{ title }}</h1>
      <slot />
      <button @click="handleButtonClick">Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>
// ~ PROPS
const props = defineProps({
  title: {
    type: String,
    default: "No title specified",
  },
});

// ~ EMITS
const emit = defineEmits(["hideModal"]);

// ~ HANDLE BUTTON CLICK
const handleButtonClick = () => {
  emit("hideModal");
};
</script>

<!---
<script>
export default {
  emits:['hideModal'],
  props: {
    title: {
      type: String,
      default: "No title specified",
    },
  },
};
</script>
-->

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
