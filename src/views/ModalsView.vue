<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <Modal
      v-if="showModal"
      @hide-modal="showModal = false"
      title="This is a modal (via prop)"
    >
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum hic
        nesciunt, labore, pariatur blanditiis porro magnam culpa quisquam ipsum
        neque eos numquam tempora doloribus quas possimus recusandae nulla odit!
        Blanditiis?
      </p>
    </Modal>
  </div>
</template>

<script setup>
// ~ imports
import { ref } from "vue";
import Modal from "@/components/Modal.vue";

// ~ modals
const showModal = ref(false);
</script>

<!--
<script>
import Modal from "@/components/Modal.vue";

export default {
  components: {
    Modal,
  },
};
</script>
-->
