<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal-dark">
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('update:modelValue', false)">Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>
// ~ PROPS
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "No title specified",
  },
});

// ~ EMITS
const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped>
.modal-dark {
  background-color: #333;
  color: white;
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
