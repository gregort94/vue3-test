import { ref } from "vue"

const counter = ref(0)

const increaseCounter = () => {
  counter.value++
}

export const useCounterStore = () => ({counter, increaseCounter})