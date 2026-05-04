<script setup>
import { ref } from 'vue'

const currentYear = new Date().getFullYear()

const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: 'i-ph-facebook-logo' },
    { name: 'Instagram', href: '#', icon: 'i-ph-instagram-logo' },
    { name: 'Twitter', href: '#', icon: 'i-ph-twitter-logo' },
    { name: 'GitHub', href: '#', icon: 'i-ph-github-logo' },
  ],
}
</script>

<template>
  <footer class="bg-gray-900" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <!-- Brand Section -->
        <div class="space-y-8">
          <h1 class="text-2xl font-bold text-white">D-shop</h1>
          <p class="text-sm leading-6 text-gray-300">
            Making the world a better place through constructing elegant hierarchies.
          </p>
          <div class="flex space-x-6">
            <a v-for="item in footerNavigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-300">
              <span class="sr-only">{{ item.name }}</span>
              <!-- Replace with actual SVG or Icon Component -->
              <div :class="item.icon" class="h-6 w-6" />
            </a>
          </div>
        </div>

        <!-- Navigation Grid -->
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">Solutions</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in footerNavigation.solutions" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">Support</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in footerNavigation.support" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in footerNavigation.company" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-xs leading-5 text-gray-400">
          &copy; {{ currentYear }} Your Company, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>