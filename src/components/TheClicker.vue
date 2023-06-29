<template>
  <div>
    <h3>TheClicker</h3>
    <button @click="increaseCounter">Click me too</button>
  </div>
</template>

<script setup lang="ts">
import {useCounterStore} from '../stores/counterStore'
const {increaseCounter} = useCounterStore()
</script>
