<template>
  <div class="w-[95%] m-auto h-[400px] bg-slate-300 rounded-lg mt-21">
    <Swiper
      :navigation="true"
      :modules="modules"
      :autoplay="{
        delay: 1500,
        disableOnInteraction: false,
      }"
      class="mySwiper h-[100%] w-[90%]"
    >
      <SwiperSlide class="w-[100%] h-[100%]">
        <div class="w-[100%] h-[100%]">
          <img :src="All" alt="" class="w-[100%] h-[100%] object-center" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="w-[100%] h-[100%]">
          <img :src="Men" alt="" class="w-[100%] h-[100%] object-center" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="w-[100%] h-[100%]">
          <img :src="Women" alt="" class="w-[100%] h-[100%] object-center" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import All from "../assets/Images/ALL.jpg";
import Men from "../assets/Images/Men.jpg";
import Women from "../assets/Images/women.jpg";
import { Swiper, SwiperSlide } from "swiper/vue";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// modules
import { Autoplay,Pagination, Navigation } from "swiper/modules";

// register modules
const modules = [Autoplay, Pagination, Navigation];
</script>
