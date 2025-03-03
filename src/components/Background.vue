<template>
  <img
    src="/frames/ezgif-frame-001.webp"
    ref="img"
    loading="lazy"
    alt="An animation of a changing nebula"
    class="fixed top-0 left-0 size-full object-cover z-[-1]"
  />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const img = ref(null);
const images = ref([]);
const max_frames = 100;

const handleBackground = () => {
  if (window.innerWidth >= 1280) {
    for (let i = 1; i <= max_frames; i++) {
      images.value[i] = new Image();
      images.value[i].src = `/frames/ezgif-frame-${i
        .toString()
        .padStart(3, "0")}.webp`;
    }
  }
};

const updateBackgroundAnimation = () => {
  const scroll_position = window.scrollY;
  const scroll_fraction =
    scroll_position / document.documentElement.scrollHeight;
  const frame = Math.floor(scroll_fraction * max_frames) || 1;
  if (window.innerWidth > 1280) {
    img.value.src = images.value[frame].src;
  }
};

onMounted(() => {
  window.addEventListener("scroll", () => {
    requestAnimationFrame(updateBackgroundAnimation);
  });

  window.addEventListener("resize", handleBackground);

  handleBackground();
});

onUnmounted(() => {
  window.removeEventListener("scroll", () => {
    requestAnimationFrame(updateBackgroundAnimation);
  });
  window.removeEventListener("resize", handleBackground);
});
</script>
