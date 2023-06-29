<template>
  <div>
    <h3>TheCounter</h3>
    <slot name="default" :counter="counter">
      <p>Count: {{ counter }}</p>
    </slot>
    <button @click="increaseCounter">Click me</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "../stores/counterStore";
const {increaseCounter, counter} = useCounterStore()
</script>