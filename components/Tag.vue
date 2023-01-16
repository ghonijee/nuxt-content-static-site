<script setup>
const props = defineProps(['color'])
// var className = ref(props.color)
</script>
<template>
  <div class="rounded-md px-2 py-1 text-xs font-semibold" :class="props.color">
    <slot />
  </div>
</template>
