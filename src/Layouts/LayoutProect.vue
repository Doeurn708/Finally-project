<script setup >
import FooterPage from "../components/FooterPage.vue";
import SlideBanner from "../components/SlideBanner.vue";
</script>

<template>
  <div>
    <SlideBanner />
    <div class="mt-3 font-black text-4xl text-center">
      <h1
        class="relative inline-block after:content-[''] after:absolute after:h-[4px] after:bg-red-600 after:w-full after:bottom-0 after:right-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-400 hover:after:scale-x-100"
      >
        WEllCOME TO D-shop
      </h1>
    </div>
    <main class="w-[95%] m-auto mt-4 py-5 bg-slate-100 rounded-lg">
      <RouterView />
    </main>
    <FooterPage/>
  </div>
</template>
