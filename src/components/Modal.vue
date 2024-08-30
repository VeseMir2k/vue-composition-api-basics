<template>
  <teleport to=".modals-container">
    <div
      v-if="modelValue"
      class="modal"
    >
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('update:modelValue', false)">Hide modal</button>
      <div>UserName is: {{ userData.username }}</div>
    </div>
  </teleport>
</template>

<script setup>
  // ~ IMPORTS
  import { inject } from 'vue';

  // ~ PROPS
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'No title specified',
    },
  });

  // ~ EMITS
  const emit = defineEmits(['update:modelValue']);

  // ~ USER DATA
  const userData = inject('userData');
</script>

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
