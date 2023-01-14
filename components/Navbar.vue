<template>
  <div class="mx-auto max-w-screen-lg text px-6 pt-6 lg:px-8">
    <div>
      <nav class="flex h-9 items-center justify-between" aria-label="Global">
        <div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
          <NuxtLink href="/">
            <div class="flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
              <svg class="mr-1 h-10 w-10 stroke-cyan-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M0 0h24v24H0z" stroke="none"></path>
                <rect x="3" y="12" width="6" height="8" rx="1"></rect>
                <rect x="9" y="8" width="6" height="12" rx="1"></rect>
                <rect x="15" y="4" width="6" height="16" rx="1"></rect>
                <path d="M4 20h14"></path>
              </svg>
              AhmadYunus
            </div>
          </NuxtLink>
        </div>
        <div class="flex lg:hidden">
          <button type="button" @click="dialogMenu = !dialogMenu" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <!-- Heroicon name: outline/bars-3 -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end lg:gap-x-12">
          <NuxtLink href="/blogs" class="font-semibold text-gray-200 hover:text-white">Blogs</NuxtLink>
          <NuxtLink href="/projects" class="font-semibold text-gray-200 hover:text-white">Projects</NuxtLink>
        </div>
      </nav>
      <!-- Mobile menu, show/hide based on menu open state. -->
      <div role="dialog" aria-modal="false" v-if="dialogMenu">
        <div focus="false" class="fixed inset-0 z-10 overflow-y-auto bg-slate-900 px-6 py-6 lg:hidden">
          <div class="flex h-9 items-center justify-between">
            <NuxtLink href="/">
              <div class="flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
                <svg class="mr-1 h-10 w-10 stroke-cyan-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M0 0h24v24H0z" stroke="none"></path>
                  <rect x="3" y="12" width="6" height="8" rx="1"></rect>
                  <rect x="9" y="8" width="6" height="12" rx="1"></rect>
                  <rect x="15" y="4" width="6" height="16" rx="1"></rect>
                  <path d="M4 20h14"></path>
                </svg>
                AhmadYunus
              </div>
            </NuxtLink>
            <div class="flex">
              <button type="button" @click="dialogMenu = !dialogMenu" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <!-- Heroicon name: outline/x-mark -->
                <svg class="h-6 w-6 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-400/10">Blogs</a>
                <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-400/10">Projects</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let dialogMenu = ref(false)
</script>
