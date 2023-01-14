<template>
  <div class="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
    <div class="shrink-0">
      <img class="h-28 w-28 hover:translate-y-1" :src="project.image" :alt="project.title" loading="lazy" />
    </div>

    <div>
      <div class="flex flex-col items-center gap-y-2 md:flex-row">
        <a class="hover:text-cyan-400">
          <div class="text-lg font-semibold">{{ project.title }}</div>
        </a>

        <div class="ml-3 flex flex-wrap gap-2">
          <Tag v-for="(category, index) in project.platform" :key="index" :color="platformToClass[category]">{{ category }}</Tag>
        </div>
      </div>

      <p class="mt-3 text-gray-400">{{ project.description }}</p>
      <div class="mt-3 flex gap-x-2">
        <a :href="project.link.git" v-if="project.link.git" target="_blank" rel="noopener noreferrer"><Icon name="mdi:github" class="w-10 h-10 p-2 rounded text-center align-middle text-fuchsia-500 bg-sky-900 hover:text-white hover:bg-slate-500" /></a>
        <a :href="project.link.web" v-if="project.link.web" target="_blank" rel="noopener noreferrer"><Icon name="ph:globe-simple" class="w-10 h-10 p-2 rounded text-center align-middle text-fuchsia-500 bg-sky-900 hover:text-white hover:bg-slate-500" /></a>
        <a :href="project.link.package" v-if="project.link.package" target="_blank" rel="noopener noreferrer"><Icon name="ph:package" class="w-10 h-10 p-2 rounded text-center align-middle text-fuchsia-500 bg-sky-900 hover:text-white hover:bg-slate-500" /> </a>
      </div>
      <!-- {{ project }} -->
    </div>
  </div>
</template>

<script setup>
import { platformToClass } from '~/constant/color-tags'

const props = defineProps({
  project: Object
})
</script>
