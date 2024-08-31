import { nextTick, reactive, computed, watch, onMounted } from 'vue';

const counterData = reactive({
  count: 0,
  title: 'My counter',
});

export function useCounter() {
  watch(
    () => counterData.count,
    (newCount) => {
      if (newCount === 20) {
        alert('Way to go! You made it 20!!');
      }
    }
  );

  const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0) return 'even';
    else return 'odd';
  });

  const increaseCounter = async (amount, e) => {
    counterData.count += amount;

    await nextTick();
    console.log('do something when counter has updated in the dom');
  };

  const decreaseCounter = (amount) => {
    counterData.count -= amount;
  };

  onMounted(() => {
    console.log('Do stuff related to Counter');
  });

  return { counterData, oddOrEven, increaseCounter, decreaseCounter };
}
