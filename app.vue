<template>
  <h1>Hello world</h1>
  <button type="button" @click="count++">
    Count is: {{ count }}
  </button>
</template>

<script lang="ts" setup>
const count = ref<number>(0);
</script>
