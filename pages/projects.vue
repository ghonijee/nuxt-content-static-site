<template>
  <Section>
    <div class="text-center">
      <h1 class="text-3xl font-bold">List Projects</h1>

      <div class="mt-3 text-gray-200">Berikut adalah beberapa project yang pernah saya buat.</div>
      <!-- <div class="text-gray-200">karena tidak semua project yang saya kerjakan dapat di publish, jadi hanya beberapa project yang sifatnya opensource atau project pribadi saya</div> -->
    </div>
  </Section>

  <Section>
    <div class="flex flex-col gap-6">
      <Project v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </Section>
</template>

<script setup>
const projects = await queryContent('/projects').sort({ id: -1 }).find()
</script>
