<template>
  <div
    v-if="isVisible"
    :data-id="title"
    ref="workCard"
    class="work-card w-92 rounded-lg shadow-sm dark:bg-[#121212] dark:border-[#121212] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  >
    <img class="rounded-t-lg" :src="img.src" :alt="title" />
    <div class="p-5 bg-[#121212] rounded-b-lg">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
        {{ title }}
      </h5>
      <p class="mb-3 font-normal text-gray-400">{{ text }}</p>
      <div class="flex justify-between w-full">
        <a
          :href="link"
          target="_blank"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-black bg-[#fffa9d] rounded-lg hover:bg-[#cbc887]"
          >See the project</a
        >
        <button
          @click="$emit('close')"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-black bg-[#9a9a9a] rounded-lg hover:bg-[#cbc887]"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  text: String,
  img: Object,
  link: String,
  id: Number,
  isVisible: Boolean,
});
</script>
