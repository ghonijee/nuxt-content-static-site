<template>
  <div class="mx-auto max-w-screen-lg px-3 py-6">
    <div v-if="title != null" class="mb-6 text-2xl font-bold">
      {{ title }}
    </div>
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>