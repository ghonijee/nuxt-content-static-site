<template>
  <Section>
    <div class="text-center">
      <h1 class="text-3xl font-bold">List Blogs</h1>

      <div class="mt-3 text-gray-200">Ini merupakan dokumentasi dan opini pribadi saya.</div>
      <div class="text-gray-200">Silakan dibaca dan ambil manfaatnya, jika ada kritik dan saran silakan hubungi lewat contact yang tersedia</div>
    </div>
  </Section>
  <Section>
    <div class="flex flex-col gap-6">
      <Blog v-for="blog in blogs" :key="blog._id" :blog="blog" />
    </div>
  </Section>
</template>

<script setup>
const blogs = await queryContent('/blog').sort({ _id: -1 }).find()
</script>
