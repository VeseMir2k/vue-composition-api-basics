<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>
        Show dark modals?
        <input type="checkbox" v-model="showDarkModals" />
      </label>
    </div>
    <button @click="showModal = true">Show modal</button>
    <component
      v-model="showModal"
      :is="showDarkModals ? ModalDark : Modal"
      title="This is a modal (via prop)"
    >
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum hic
        nesciunt, labore, pariatur blanditiis porro magnam culpa quisquam ipsum
        neque eos numquam tempora doloribus quas possimus recusandae nulla odit!
        Blanditiis?
      </p>
    </component>
  </div>
</template>

<script setup>
// ~ imports
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import ModalDark from "@/components/ModalDark.vue";

// ~ modals
const showDarkModals = ref(false);
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
