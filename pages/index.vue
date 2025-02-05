<template>
  <div>
    <h2>Main Page</h2>
    <div>Count: {{ counter.count }}</div>
    <button @click="counter.increment">add count</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'

const counter = useCounterStore()
</script>
