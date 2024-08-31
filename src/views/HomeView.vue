<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <h3>Hard-coded counter title:</h3>

    <div>
      <button class="btn">--</button>
      <button class="btn">-</button>
      <span class="counter">0</span>
      <button class="btn">+</button>
      <button class="btn">++</button>
    </div>

    <p>This counter is odd/even</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input
        type="text"
        v-autofocus
      />
    </div>
  </div>
</template>

<script setup>
  // ~ IMPORTS
  import { ref, onMounted } from 'vue';
  import { vAutofocus } from '@/directives/vAutofocus';

  // ~ APP TITLE
  const appTitle = 'My Amazing Counter App';

  const appTitleRef = ref(null);

  onMounted(() => {
    console.log(`The app title is ${appTitleRef.value.offsetWidth}px wide!`);
  });
</script>

<!-- 
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    myComputedProperty() {
      // perform logic based on a data property
      return "my result";
    },
  },
  watch: {
    count(newCount, olCount) {
      if (newCount == 20) alert("dsadad");
    },
  },
  mounted() {
    console.log("mounted");
  },
  unmounted() {
    console.log("unmounted");
  },

  directives: {
    autofocus: {
      mounted(el) {
        el.focus();
      },
    },
  },
};
</script>
-->

<style>
  .home {
    text-align: center;
    padding: 20px;
  }
  .btn,
  .counter {
    font-size: 40px;
    margin: 10px;
  }

  .edit {
    margin-top: 60px;
  }
</style>
