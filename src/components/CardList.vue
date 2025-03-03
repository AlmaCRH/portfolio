<template>
  <div class="text-center mt-5" v-for="(job, index) in jobsExperience">
    <span
      :key="index"
      :data-id="job.title"
      class="text-white font-bebas text-7xl cursor-pointer hover:text-[#fffa9d] active:text-[#fffa9d]"
      @click.stop="showCard(job.title)"
    >
      {{ job.title }}
    </span>
  </div>

  <Card
    v-for="(job, index) in jobsExperience"
    :id="index"
    :img="images[index]"
    :key="job.title"
    :title="job.title"
    :text="job.text"
    :link="job.link"
    :isVisible="visibleCardId === job.title"
    @close="closeCard"
  />
</template>

<script setup>
import Card from "./Card.vue";
import jobsExperience from "./jobsExperience.js";
import { ref, onMounted, onUnmounted, onBeforeMount } from "vue";
const visibleCardId = ref(null);

const img = ref(null);
const images = ref([]);

const handleBackground = () => {
  for (let i = 0; i < jobsExperience.length; i++) {
    images.value[i] = new Image();
    images.value[i].src = jobsExperience[i].img;
  }
};
const showCard = (id) => {
  visibleCardId.value = id;
};

const closeCard = () => {
  visibleCardId.value = null;
};

const handleClickOutside = (e) => {
  const card = document.querySelector(".work-card:not(.hidden)");
  if (card && !card.contains(e.target)) {
    closeCard();
  }
};

onBeforeMount(() => {
  handleBackground();
}),
  onMounted(() => {
    window.addEventListener("click", handleClickOutside);
  });

onUnmounted(() => {
  window.removeEventListener("click", handleClickOutside);
});
</script>
