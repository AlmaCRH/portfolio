<template>
  <button
    id="menu"
    ref="menu"
    @click="openMenu"
    class="w-10 space-y-2 md:hidden ml-auto"
  >
    <div class="border-1 border-white"></div>
    <div class="border-1 border-white"></div>
    <div class="border-1 border-white"></div>
  </button>
  <div
    id="sidebar"
    ref="sidebar"
    class="w-[200px] h-screen fixed top-0 right-[-200px] bg-[#2d2d2d] md:hidden p-5 z-50"
    :class="{ opened: isOpen, closed: !isOpen }"
  >
    <span
      @click="closeMenu"
      class="text-white absolute top-2 right-2 cursor-pointer"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-8 self-end"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        ></path>
      </svg>
    </span>
    <ul class="flex flex-col p-5 space-y-5">
      <li class="nav-text text-2xl">
        <a
          class="btn line-btn-dark btn-icon btn-radius"
          target="_blank"
          href="/cv/CV _ Alma Cruz Hernández.pdf"
        >
          RESUME
        </a>
      </li>
      <li class="nav-text text-2xl">
        <a href="#about-section">ABOUT</a>
      </li>
      <li class="nav-text text-2xl">
        <a href="#works-section">WORKS</a>
      </li>
      <li class="nav-text text-2xl">
        <a href="#contact-section">CONTACT</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const sidebar = ref(null);
const menu = ref(null);
const isResizing = ref(false);
const isOpen = ref(null);

//Close the menu on resize
const handleResize = () => {
  isResizing.value = true;
  isOpen.value = false;
  clearTimeout(window.resizeTimeout);
  window.resizeTimeout = setTimeout(() => {
    sidebar.value.classList.remove("closed");
    isResizing.value = false;
  }, 100);
};

//Close the menu on scroll
const handleScroll = () => {
  if (!isResizing.value) {
    isOpen.value = false;
  }
};

const handleClickOutside = (e) => {
  if (
    !sidebar.value.contains(e.target) &&
    sidebar.value.classList.contains("opened") &&
    !menu.value.contains(e.target)
  ) {
    isOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("click", handleClickOutside);
});

const openMenu = () => {
  isOpen.value = true;
};

const closeMenu = () => {
  isOpen.value = false;
};
</script>

<style lang="scss" scoped></style>
