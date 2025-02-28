<template>
  <header
    id="header"
    ref="header"
    class="p-4 pb-0 fixed w-full z-10"
    :class="{ 'backdrop-blur-md': isScrolled, 'backdrop-blur-0': !isScrolled }"
  >
    <nav
      class="flex md:justify-between items-center m-1 border-b-1 border-white p-4 w-full"
    >
      <div>
        <a href="#landing" class="sm:p-2"
          ><h6 class="font-bebas nav-text text-2xl">Alma Cruz Hernández</h6></a
        >
        <h6 class="text-white font-bebas hidden md:inline md:text-lg">
          FULL STACK WEB DEVELOPER
        </h6>
      </div>
      <Sidebar />
      <div>
        <ul class="hidden space-x-2 md:inline">
          <li class="nav-text text-md md:text-lg">
            <a
              class="btn line-btn-dark btn-icon btn-radius text-md sm:text-lg"
              target="_blank"
              href="/cv/CV _ Alma Cruz Hernández.pdf"
            >
              resume
            </a>
          </li>
          <li class="nav-text text-md sm:text-lg">
            <a href="#about-section">about</a>
          </li>
          <li class="nav-text text-md sm:text-lg">
            <a href="#works-section">works</a>
          </li>
          <li class="nav-text text-md sm:text-lg">
            <a href="#contact-section">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Sidebar from "./Sidebar.vue";
const header = ref(null);
const isScrolled = ref(false);

const updateAnimation = () => {
  const scroll_position = window.scrollY;
  if (!header) return;
  if (scroll_position !== 0) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", () => {
    requestAnimationFrame(updateAnimation);
  });
});
onUnmounted(() => {
  window.removeEventListener("scroll", updateAnimation);
});
</script>

<style lang="scss" scoped></style>
