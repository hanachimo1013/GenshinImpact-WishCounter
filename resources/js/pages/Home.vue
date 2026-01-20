<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- Header -->
    <div class="bg-black/30 backdrop-blur-md border-b border-purple-500/20">
      <div class="max-w-6xl mx-auto px-6 py-8">
        <h1 class="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
          ✨ Genshin Impact Wish Counter
        </h1>
        <p class="text-purple-200 text-lg">Track your wishes across multiple banners</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto px-6 py-12">
      <!-- Search Box -->
      <div class="mb-12">
        <div class="card p-8 bg-black/40 backdrop-blur-xl border border-purple-500/20">
          <h2 class="text-2xl font-bold text-white mb-4">🔍 Wish Lookup</h2>
          <div class="flex gap-3">
            <input 
              v-model="searchId" 
              @keyup.enter="searchWindow"
              placeholder="Enter Wish ID..."
              type="text"
              class="flex-1 px-5 py-3 bg-purple-950/50 border border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 transition"
            />
            <button 
              @click="searchWindow"
              class="btn-primary bg-gradient-to-r from-purple-600 to-indigo-600"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <!-- Windows Grid -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-white mb-8">📊 Your Wish Counters</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Window 1 -->
          <router-link 
            to="/window1" 
            class="card group bg-black/40 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/40 p-8 cursor-pointer transform hover:scale-105 transition-all"
          >
            <div class="mb-4 text-4xl">⭐</div>
            <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition">Standard Wishes</h3>
            <p class="text-purple-200 mb-4">Window 1</p>
            <div class="h-1 w-full bg-gradient-to-r from-purple-600 to-transparent rounded group-hover:from-purple-400"></div>
          </router-link>

          <!-- Window 2 -->
          <router-link 
            to="/window2" 
            class="card group bg-black/40 backdrop-blur-xl border border-pink-500/20 hover:border-pink-400/40 p-8 cursor-pointer transform hover:scale-105 transition-all"
          >
            <div class="mb-4 text-4xl">👤</div>
            <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-pink-300 transition">Character Events</h3>
            <p class="text-pink-200 mb-4">Window 2</p>
            <div class="h-1 w-full bg-gradient-to-r from-pink-600 to-transparent rounded group-hover:from-pink-400"></div>
          </router-link>

          <!-- Window 3 -->
          <router-link 
            to="/window3" 
            class="card group bg-black/40 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/40 p-8 cursor-pointer transform hover:scale-105 transition-all"
          >
            <div class="mb-4 text-4xl">⚔️</div>
            <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition">Weapon Events</h3>
            <p class="text-cyan-200 mb-4">Window 3</p>
            <div class="h-1 w-full bg-gradient-to-r from-cyan-600 to-transparent rounded group-hover:from-cyan-400"></div>
          </router-link>
        </div>
      </div>

      <!-- Footer Info -->
      <div class="text-center text-purple-200/60 mt-12">
        <p class="text-sm">Track your luck across all banners • Made with Vue 3 + Vite</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      searchId: ''
    }
  },
  methods: {
    searchWindow() {
      if (this.searchId) {
        this.$router.push(`/window/${this.searchId}`);
      }
    }
  }
}
</script>
