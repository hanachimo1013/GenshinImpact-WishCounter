<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <loading-spinner v-if="isSearching" :wishId="searchId" />
    <!-- Header -->
    <div class="bg-black/30 backdrop-blur-md border-b border-purple-500/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2">
          ✨ Genshin Impact Wish Counter
        </h1>
        <p class="text-purple-200 text-sm sm:text-base lg:text-lg">Track your wishes across multiple banners</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <!-- Search Box -->
      <div class="mb-8 sm:mb-12 lg:mb-16">
        <div class="card p-4 sm:p-6 lg:p-8 bg-black/40 backdrop-blur-xl border border-purple-500/20">
          <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">🔍 Wish Lookup</h2>
          <div class="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <input 
              v-model="searchId" 
              @keyup.enter="searchWindow"
              placeholder="Enter Wish ID..."
              type="text"
              class="flex-1 px-3 sm:px-5 py-2 sm:py-3 text-sm sm:text-base bg-purple-950/50 border border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 transition"
            />
            <button 
              @click="searchWindow"
              class="btn-primary px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-indigo-600 whitespace-nowrap"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <!-- Windows Grid - Responsive -->
      <div class="mb-8 sm:mb-12 lg:mb-16">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">📊 Your Wish Counters</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <!-- Window 1 -->
          <router-link 
            to="/window1" 
            class="card group bg-black/40 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/40 p-6 sm:p-8 lg:p-10 cursor-pointer transform hover:scale-105 transition-all"
          >
            <div class="mb-4 text-5xl sm:text-6xl lg:text-7xl">⭐</div>
            <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition">Standard Wishes</h3>
            <p class="text-sm sm:text-base text-purple-200 mb-4">Window 1</p>
            <div class="h-1 w-full bg-gradient-to-r from-purple-600 to-transparent rounded group-hover:from-purple-400 transition"></div>
          </router-link>

          <!-- Window 2 -->
          <router-link 
            to="/window2" 
            class="card group bg-black/40 backdrop-blur-xl border border-pink-500/20 hover:border-pink-400/40 p-6 sm:p-8 lg:p-10 cursor-pointer transform hover:scale-105 transition-all"
          >
            <div class="mb-4 text-5xl sm:text-6xl lg:text-7xl">👤</div>
            <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-pink-300 transition">Character Events</h3>
            <p class="text-sm sm:text-base text-pink-200 mb-4">Window 2</p>
            <div class="h-1 w-full bg-gradient-to-r from-pink-600 to-transparent rounded group-hover:from-pink-400 transition"></div>
          </router-link>

          <!-- Window 3 -->
          <router-link 
            to="/window3" 
            class="card group bg-black/40 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/40 p-6 sm:p-8 lg:p-10 cursor-pointer transform hover:scale-105 transition-all md:col-span-2 lg:col-span-1"
          >
            <div class="mb-4 text-5xl sm:text-6xl lg:text-7xl">⚔️</div>
            <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition">Weapon Events</h3>
            <p class="text-sm sm:text-base text-cyan-200 mb-4">Window 3</p>
            <div class="h-1 w-full bg-gradient-to-r from-cyan-600 to-transparent rounded group-hover:from-cyan-400 transition"></div>
          </router-link>
        </div>
      </div>

      <!-- Footer Info -->
      <div class="text-center text-purple-200/60 mt-8 sm:mt-12 lg:mt-16">
        <p class="text-xs sm:text-sm">Track your luck across all banners • Made with Vue 3 + Vite + Tailwind CSS</p>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from '../components/LoadingSpinner.vue'

export default {
  name: 'Home',
  components: {
    LoadingSpinner
  },
  data() {
    return {
      searchId: '',
      isSearching: false
    }
  },
  methods: {
    searchWindow() {
      if (!this.searchId.trim()) return
      
      this.isSearching = true
      this.$router.push(`/window/${this.searchId}`)
      this.isSearching = false
    }
  }
}
</script>
