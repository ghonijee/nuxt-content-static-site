<template>
  <div class="rounded-md px-2 py-1 text-xs font-semibold" :class="color">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps(['color'])
</script>
