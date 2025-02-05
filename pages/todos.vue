<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <div>
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGetTodos } from '~/queries/todos/useGetTodos'

const { data: todos } = await useGetTodos()
</script>
