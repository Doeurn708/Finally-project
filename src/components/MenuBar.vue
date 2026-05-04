  <script setup>
  import { RouterLink } from "vue-router";
  import { ref } from "vue";

  const isMenuOpen = ref(false);
  // const isActive = ref(false)
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  const closeMenu = () => {
    isMenuOpen.value = false;
  };
  </script>

  <template>
    <div
      class="bg-blue-600 flex justify-between px-5 text-white items-center text-xl h-[50px] sticky top-0 z-50"
    >
      <div class="text-2xl font-bold cursor-pointer">
        <h1>D-Shop</h1>
      </div>

      <!-- Desktop Menu -->
      <div class="w-[30%] hidden px-5 lg:flex justify-between lg:gap-[90px] font-thin">
        <RouterLink
          class="hover:text-yellow-200"
          active-class="text-yellow-200 underline font-semibold"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="hover:text-yellow-200"
          active-class="text-yellow-200 underline font-semibold"
          to="/men"
          >Men</RouterLink
        >
        <RouterLink
          class="hover:text-yellow-200"
          active-class="text-yellow-200 underline font-semibold"
          to="/women"
          >Women</RouterLink
        >
      </div>

      <!-- Mobile Hamburger Menu Button -->
      <div class="flex lg:hidden cursor-pointer" @click="toggleMenu">
        <i :class="isMenuOpen ? 'fa-solid fa-xmark':'fa-solid fa-bars'" 
        class="text-2xl"></i>
      </div>

      <!-- Icons (Right Side) -->
      <div class="lg:flex gap-8 px-5 hidden">
        <i class="fas fa-home hover:text-blue-900 cursor-pointer"></i>
        <i class="fas fa-user hover:text-blue-900 cursor-pointer"></i>
        <i class="fas fa-shopping-cart hover:text-blue-900 cursor-pointer"></i>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div
      v-if="isMenuOpen"
      class="lg:hidden bg-blue-700 text-white shadow-lg absolute w-full top-[50px] left-0 z-40"
    >
      <div class="flex flex-col gap-4 px-5 py-4">
        <RouterLink
          class="hover:text-yellow-200 transition"
          active-class="text-yellow-200 underline font-semibold"
          to="/"
          @click="closeMenu"
          >Home</RouterLink
        >
        <RouterLink
          class="hover:text-yellow-200 transition"
          active-class="text-yellow-200 underline font-semibold"
          to="/men"
          @click="closeMenu"
          >Men</RouterLink
        >
        <RouterLink
          class="hover:text-yellow-200 transition"
          active-class="text-yellow-200 underline font-semibold"
          to="/women"
          @click="closeMenu"
          >Women</RouterLink
        >
        <hr class="border-blue-500 my-2" />
        <div class="flex gap-6 text-lg pb-2">
          <i class="fas fa-home hover:text-blue-300 cursor-pointer"></i>
          <i class="fas fa-user hover:text-blue-300 cursor-pointer"></i>
          <i class="fas fa-shopping-cart hover:text-blue-300 cursor-pointer"></i>
        </div>
      </div>
    </div>
  </template>