<template>
  <div class="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
    <!-- <div class="shrink-0">
      <a :href="blog._path">
        <img class="h-28 w-28 hover:translate-y-1" :src="blog.image" :alt="blog.title" loading="lazy" />
      </a>
    </div> -->

    <div class="flex flex-col gap-y-3">
      <a class="hover:text-cyan-400" :href="blog._path">
        <div class="text-lg font-semibold">{{ blog.title }}</div>
      </a>

      <p class="text-gray-400">{{ blog.description }}</p>
      <div class="flex flex-col md:flex-row">
        <a :href="blog._path" class="px-2 py-1 text-sm bg-slate-700 rounded hover:bg-sky-800"><p class="text-gray-100 hover:text-white">Read more</p> </a>
        <div class="ml-5 flex flex-wrap gap-2 w-max">
          <Tag v-for="(category, index) in blog.categories" :key="index" :color="platformToClass[category]">{{ category }}</Tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { platformToClass } from '~/constant/color-tags'

const props = defineProps({
  blog: Object
})
console.log(props.blog._path)
</script>
