<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <div class="mx-auto mt-5 max-w-prose">
        <div class="text-center">
          <h1 class="text-3xl font-bold">{{ doc.title }}</h1>

          <div class="mt-1 text-sm text-gray-200">{{ doc.createdAt }}</div>
        </div>
        <div class="prose prose-invert mt-8 prose-img:rounded-lg">
          <ContentRenderer :value="doc" />
        </div>
      </div>
    </ContentDoc>
  </main>
</template>

<script setup>
// console.log($content)
</script>
