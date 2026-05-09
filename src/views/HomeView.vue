<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { products } from "../data/ProductFeatured.js";

// Assets
import modelMen from "../assets/Images/model-men.jpg";
import modelWomen from "../assets/Images/model-women.jpg";
import modelSport from "../assets/Images/model-sport.jpg";

const router = useRouter();

// --- CART LOGIC ---
const cartItems = ref([]);
const isCartOpen = ref(false);
const showAlert = ref(false);
const addToCart = (product) => {
  cartItems.value.push(product);
  showAlert.value = true;
  setTimeout(() => {
    showAlert.value = false;
  }, 1000);
};
const removeFromCart = (index) => {
  cartItems.value.splice(index, 1);
};

const handleNavigation = (event) => {
  const path = event.target.value;
  if (path) router.push(path);
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 relative overflow-x-hidden">
    <!-- 1. CART SIDEBAR (DRAWER) -->
       <transition
      enter-active-class="transform transition duration-500 ease-out"
      enter-from-class="opacity-0 -translate-y-10 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transform transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-10"
    >
      <div 
        v-if="showAlert" 
        class="fixed top-10 right-1 -translate-x-1/2 z-[100] bg-green-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce"
      >
        <i class="fa-solid fa-circle-check text-xl"></i>
        <p class="font-bold">Added to cart successfully!</p>
      </div>
    </transition>
    <div
      class="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out p-6"
      :class="isCartOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="flex justify-between items-center border-b pb-4 mb-4">
        <h2 class="text-xl font-bold">Your Cart ({{ cartItems.length }})</h2>
        <button
          @click="isCartOpen = false"
          class="text-gray-500 hover:text-black text-2xl"
        >
          &times;
        </button>
      </div>

      <!-- Empty State -->
      <div
        v-if="cartItems.length === 0"
        class="text-center py-10 text-gray-400"
      >
        <p>Your cart is empty.</p>
      </div>

      <!-- Items List -->
      <div class="space-y-4 overflow-y-auto max-h-[70vh]">
        <div
          v-for="(item, index) in cartItems"
          :key="index"
          class="flex items-center justify-between bg-slate-200 p-3 rounded-lg shadow-xl"
        >
          <div class="flex items-center gap-3  ">
            <span class="text-2xl w-[50px] h-[50px] ">
              <img :src="item.img" class="w-full rounded-md h-full" alt="">
            </span>
            <div>
              <p class="font-semibold text-md">{{ item.name }}</p>
              <p class="text-red-600 text-x font-semibold">{{ item.price }}</p>
            </div>
          </div>
          <button
            @click="removeFromCart(index)"
            class="text-red-400  hover:text-red-600"
          >
            <i class="fa-solid fa-trash-can text-md"></i>
          </button>
        </div>
      </div>

      <!-- Checkout Button -->
      <div v-if="cartItems.length > 0" class="absolute bottom-6 left-6 right-6">
        <button
          class="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all"
        >
          Checkout Now
        </button>
      </div>
    </div>

    <!-- Overlay when cart is open -->
    <div
      v-if="isCartOpen"
      @click="isCartOpen = false"
      class="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
    ></div>

    <!-- HERO SECTION -->
    <section
      class="bg-gradient-to-r rounded-lg shadow-xl from-blue-300 to-blue-500 text-white m-4"
    >
      <div
        class="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between"
      >
        <div class="md:w-1/2 space-y-4">
          <h1 class="text-4xl md:text-5xl font-bold leading-tight">
            Upgrade Your Style with D-Shop
          </h1>
          <p class="text-white/80 text-lg">
            Premium shirts, modern fashion, and best quality collections.
          </p>
          <div class="flex items-center gap-4 pt-4">
            <div class="relative">
              <select
                @change="handleNavigation"
                class="appearance-none bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold cursor-pointer outline-none"
              >
                <option value="" disabled selected>Shop Now</option>
                <option value="/men">Men</option>
                <option value="/women">Women</option>
              </select>
            </div>
            <RouterLink
              to="/not-404"
              class="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all"
              >Explore</RouterLink
            >
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center mt-10 md:mt-0 animate-bounce">
          <div class="text-8xl">🛍️</div>
        </div>
      </div>
    </section>

    <!-- CATEGORIES -->
    <section class="max-w-6xl mx-auto px-6 py-16">
      <h2 class="text-2xl font-bold mb-8 text-gray-800">Shop by Category</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div
          v-for="(img, cat) in {
            Men: modelMen,
            Women: modelWomen,
            Sport: modelSport,
          }"
          :key="cat"
          class="bg-white p-2 lg:w-[75%] rounded-xl shadow hover:shadow-xl text-center group h-[300px] lg:h-[380px] "
        >
          <div class="h-[75%]  overflow-hidden rounded">
            <img
              class="h-full w-full group-hover:scale-110 transition-transform"
              :src="img"
              :alt="cat"
            />
          </div>
          <h3 class="mt-3 font-semibold">{{ cat }}</h3>
          <RouterLink
            :to="'/' + cat.toLowerCase()"
            class="block mt-2 bg-green-400 py-1 rounded-xl text-white font-bold"
            >View All</RouterLink
          >
        </div>
      </div>
    </section>

    <!-- FEATURED PRODUCTS -->
    <section class="bg-white py-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-2xl font-bold text-gray-800">Featured Products</h2>

          <!-- CART ICON CLICK TRIGGER -->
          <div
            @click="isCartOpen = true"
            class="relative cursor-pointer text-blue-600 hover:scale-110 transition-transform"
          >
            <i class="fa-solid fa-cart-shopping text-3xl"></i>
            <span
              v-if="cartItems.length > 0"
              class="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full"
            >
              {{ cartItems.length }}
            </span>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="item in products"
            :key="item.name"
            class="bg-gray-50 p-2 rounded-xl group border hover:border-blue-200 transition-all lg:h-[500px] h-[350px]  "
          >
            <div
              class="lg:h-[75%] h-[60%] text-6xl text-center hover:shadow-4xl transition-transform"
            >
              <img :src="item.img" class="w-full h-full rounded-md" alt="" />
            </div>
            <h3 class="mt-4 font-semibold text-center">{{ item.name }}</h3>
            <p class="text-red-500 font-extrabold">{{ item.price }}</p>

            <button
              @click="addToCart(item)"
              class="mt-4 w-full bg-sky-300 text-white py-2 rounded-md font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
