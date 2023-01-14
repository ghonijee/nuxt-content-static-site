<template>
  <Section>
    <Section>
      <div class="flex flex-col-reverse items-center gap-y-8 md:flex-row md:justify-between md:gap-x-24">
        <div>
          <h1 class="text-2xl text-center md:text-left lg:text-3xl font-bold">Halo, saya Ahmad Yunus 👋</h1>
          <div class="mt-6 text-md lg:text-lg leading-10">
            <p>Software Engineer asal Malang, Jawa Timur, ID.</p>
            <p>Sekarang bekerja remote untuk Floo.ID, sebuah software agency di Sidoarjo yang membuat aplikasi untuk beberapa client korporasi. Biasa bekerja dengan beberapa stack teknologi seperti:</p>
            <ul class="list-disc mx-8 mt-4">
              <li>Flutter untuk mobile Apps</li>
              <li>Laravel sebagai Backend API & Backoffice</li>
              <li>Vue JS untuk Web Frontend</li>
            </ul>
            <div class="mt-4"></div>
            <p>Sedang ngulik juga teknologi bahasa pemrograman lain seperti:</p>
            <ul class="list-disc mx-8">
              <li>Python untuk task tugas sederhana</li>
              <li>Golang untuk REST API</li>
            </ul>
          </div>
        </div>

        <div class="shrink-0 flex flex-col items-center">
          <img src="~/assets/profile.jpeg" alt="Profile Yunus" class="h-44 w-44 md:h-5/6 lg:h-72 md:w-72 rounded-full object-cover border-4 border-gray-200" />
          <div class="mt-4 flex gap-x-6">
            <a href="https://www.linkedin.com/in/yunus-afghoni" target="_blank"><Icon name="logos:linkedin-icon" class="w-8 h-12" /> </a>
            <a href="mailto: akughoni@gmail.com" target="_blank"><Icon name="logos:google-gmail" class="w-8 h-12" /> </a>
            <a href="https://github.com/ghonijee" target="_blank"><Icon name="fa:github-square" class="w-8 h-12" /> </a>
            <a href="https://github.com/yunus-floo" target="_blank"><Icon name="fontisto:github" class="w-8 h-12" /> </a>
            <a href="https://twitter.com/ghonijee" target="_blank"><Icon name="logos:twitter" class="w-8 h-12" /> </a>
          </div>
        </div>
      </div>
    </Section>
    <Section title="Recent Projects">
      <div class="flex flex-col gap-6">
        <Project v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </Section>
    <Section title="Recent Blogs">
      <div class="flex flex-col gap-6">
        <Blog v-for="blog in blogs" :key="blog._id" :blog="blog" />
      </div>
    </Section>
  </Section>
</template>

<script setup>
const projects = await queryContent('/projects').sort({ id: -1 }).limit(3).find()
const blogs = await queryContent('/blog').limit(5).find()
</script>
