<template>
  <div class="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
    <div class="shrink-0">
      <a :href="project._path">
        <img class="h-28 w-28 hover:translate-y-1" :src="project.image" :alt="project.title" loading="lazy" />
      </a>
    </div>

    <div>
      <div class="flex flex-col items-center gap-y-2 md:flex-row">
        <a class="hover:text-cyan-400" :href="project._path">
          <div class="text-lg font-semibold">{{ project.title }}</div>
        </a>

        <div class="ml-3 flex flex-wrap gap-2" v-for="(category, index) in project.platform" :key="index">
          <Tag :color="platformToClass[category]">{{ category }}</Tag>
        </div>
      </div>

      <p class="mt-3 text-gray-400">{{ project.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { platformToClass } from '~/constant/color-tags'

const props = defineProps({
  project: Object
})
</script>
