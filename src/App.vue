<template>
  <main style="text-align: center; font-family: sans-serif; padding: 50px;">
    <h1 style="color: #4f46e5;">UniDone</h1>
    <h2>Student Deadline Manager</h2>
    <p>Статус: {{ status }}</p>
  </main>
</template>

<script setup>
import { ref } from 'vue'
const status = ref(import.meta.env.VITE_APP_STATUS || 'Local Development')
</script>