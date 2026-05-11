<template>
  <!-- 1. Overlay (Dims the screen when cart is open) -->
  <div 
    v-if="isCartOpen" 
    @click="isCartOpen = false" 
    class="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
  ></div>

  <!-- 2. Cart Sidebar -->
  <div 
    :class="[
      'fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transition-transform duration-300 p-6 flex flex-col',
      isCartOpen ? 'translate-x-0' : 'translate-x-full'
    ]"
  >
    <div class="flex justify-between items-center border-b pb-4 mb-4">
      <h2 class="text-xl font-bold font-serif">My Cart ({{ cart.length }})</h2>
      <button @click="isCartOpen = false" class="text-gray-400 hover:text-black">
        <i class="fa-solid fa-xmark text-2xl"></i>
      </button>
    </div>

    <!-- Scrollable Items List -->
    <div class="flex-grow overflow-y-auto">
      <div v-if="cart.length === 0" class="text-center py-20 text-gray-400">
        Your cart is empty.
      </div>

      <div 
        v-for="(item, idx) in cart" 
        :key="idx" 
        class="flex gap-4 mb-6 border-b pb-4"
      >
        <img :src="item.picture" class="w-16 h-16 object-cover rounded-lg" />
        <div class="flex-grow">
          <h3 class="text-xs font-bold line-clamp-1">{{ item.title }}</h3>
          <p class="text-[10px] text-gray-500">Size: {{ item.chosenSize }}</p>
          <div class="flex justify-between items-center mt-1">
            <p class="text-emerald-600 font-bold">${{ item.price }}</p>
            <!-- Delete Button -->
            <button @click="removeFromCart(idx)" class="text-red-400 hover:text-red-600">
              <i class="fa-solid fa-trash-can text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer with Total -->
    <div v-if="cart.length > 0" class="border-t pt-4">
      <div class="flex justify-between items-center mb-4 font-bold">
        <span>Total:</span>
        <span class="text-xl">${{ cartTotal }}</span>
      </div>
      <button class="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-black transition-colors">
        Checkout
      </button>
    </div>
  </div>

  <!-- 3. Header & Navigation -->
  <div class="text-2xl px-1 py-2 font-thin">
    <RouterLink to="/" class="flex items-center gap-2 text-slate-700 hover:text-emerald-600">
      <i class="fa-regular fa-circle-left text-lg"></i>
      <span class="font-light text-sm tracking-wide">Back</span>
    </RouterLink>
  </div>

  <h1 class="text-center font-serif text-5xl py-5">Women Shop</h1>

  <!-- 4. Bag Icon with Badge -->
  <div class="px-7 flex justify-start mb-4">
    <div @click="isCartOpen = true" class="relative inline-block cursor-pointer group">
      <i class="fa-solid fa-bag-shopping text-3xl group-hover:text-blue-500 transition-colors"></i>
      <span 
        v-if="cart.length > 0" 
        class="absolute -top-2 -right-2 bg-red-600 text-white text-[11px] font-bold h-5 w-5 flex items-center justify-center rounded-full"
      >
        {{ cart.length }}
      </span>
    </div>
  </div>

  <!-- 5. Product Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-5 w-full mx-auto pb-10">
    <div
      v-for="(pro, index) in womenProduct"
      :key="index"
      class="relative bg-white rounded-md overflow-hidden shadow-sm border hover:shadow-xl flex flex-col h-[480px]"
    >
      <!-- Discount Badge -->
      <p class="absolute left-3 top-3 z-10 bg-red-400 px-3 py-0.5 text-xs font-semibold text-white rounded-lg">
        {{ pro.top_dis }}%
      </p>

      <div class="w-full h-[55%] overflow-hidden">
        <img :src="pro.picture" class="w-full h-full object-cover p-2 rounded-xl hover:scale-105 duration-300" />
      </div>

      <div class="px-3 font-serif mt-2">
        <h1 class="text-sm font-black mb-1 truncate">{{ pro.title }}</h1>
        <h1 class="text-red-500 text-lg font-bold">${{ pro.price }}</h1>
      </div>

      <!-- Size Selection Logic -->
      <div class="px-3 mt-2">
        <div class="text-gray-400 text-[10px] mb-1">Select Size:</div>
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="s in pro.size"
            :key="s"
            @click="selectedSizes[index] = s"
            :class="[
              'text-[10px] font-bold border px-2 py-1 rounded transition-colors cursor-pointer',
              selectedSizes[index] === s
                ? 'bg-blue-600 border-blue-600 text-white'
                : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-200',
            ]"
          >
            {{ s }}
          </span>
        </div>
      </div>

      <!-- Add to Cart Button -->
      <div class="mt-auto pb-4 text-center px-7">
        <button 
          @click="addToCart(pro, index)"
          class=" bg-blue-500 hover:bg-transparent hover:border hover:border-3 hover:text-black duration-500 active:scale-95 transition-all px-7 rounded-xl py-2 text-white text-sm font-semibold"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import { womenProduct } from "../data/WomenProduct";
// State
const selectedSizes = ref({}); // Tracks size for each product by index
const cart = ref([]);          // Global cart array
const isCartOpen = ref(false); // Sidebar toggle

// Functions
const addToCart = (product, index) => {
  const chosenSize = selectedSizes.value[index];

  if (!chosenSize) {
    alert("Please select a size first!");
    return;
  }

  // Create a cart item object
  const item = {
    ...product,
    chosenSize,
    cartId: Date.now() // Unique ID
  };

  cart.value.push(item);
  isCartOpen.value = true; // Open sidebar automatically
};

const removeFromCart = (index) => {
  cart.value.splice(index, 1);
};

// Computed: Total Price
const cartTotal = computed(() => {
  return cart.value.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
});
</script>