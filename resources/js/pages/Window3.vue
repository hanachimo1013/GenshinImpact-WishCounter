<template>
  <div class="min-h-screen gradient-cyan">
    <!-- Header -->
    <div class="bg-black/40 backdrop-blur-md border-b border-cyan-400/20 sticky top-0 z-10">
      <div class="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <router-link to="/" class="text-3xl hover:text-cyan-200 transition text-white">← Back</router-link>
        <h1 class="text-3xl font-bold text-white">⚔️ Weapon Event Wishes</h1>
        <div class="w-12"></div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto px-6 py-12">
      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="card bg-white/10 backdrop-blur-xl border border-white/20 p-8 text-center rounded-xl">
          <p class="text-cyan-200 text-lg mb-2">Total Wishes</p>
          <p class="text-5xl font-bold text-white">{{ totalWishes }}</p>
        </div>
        <div class="card bg-white/10 backdrop-blur-xl border border-white/20 p-8 text-center rounded-xl">
          <p class="text-cyan-200 text-lg mb-2">5-Star Pulls</p>
          <p class="text-5xl font-bold text-yellow-300">{{ fiveStarPulls }}</p>
        </div>
        <div class="card bg-white/10 backdrop-blur-xl border border-white/20 p-8 text-center rounded-xl">
          <p class="text-cyan-200 text-lg mb-2">Pity Counter</p>
          <p class="text-5xl font-bold text-cyan-300">{{ pityCounter }}</p>
        </div>
      </div>

      <!-- Add Wish Card -->
      <div class="card bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-xl mb-12">
        <h2 class="text-2xl font-bold text-white mb-6">➕ Add a Wish</h2>
        <div class="flex gap-4">
          <input 
            v-model="rarity" 
            type="number" 
            placeholder="Rarity (3-5)" 
            min="3" 
            max="5"
            class="flex-1 px-4 py-3 bg-cyan-950/50 border border-cyan-400/30 rounded-lg text-white placeholder-cyan-300 focus:outline-none focus:border-cyan-300 transition"
          />
          <button 
            @click="addWish"
            class="btn-primary px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
          >
            Add
          </button>
        </div>
      </div>

      <!-- Recent Wishes -->
      <div class="card bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-xl">
        <h2 class="text-2xl font-bold text-white mb-6">📜 Recent Wishes</h2>
        <div v-if="wishes.length === 0" class="text-center py-12">
          <p class="text-cyan-300 text-lg">No wishes yet. Start tracking! ✨</p>
        </div>
        <div v-else class="space-y-3">
          <div 
            v-for="(wish, idx) in wishes.slice().reverse().slice(0, 15)" 
            :key="idx" 
            class="p-4 bg-white/5 border-l-4 rounded-lg transition hover:bg-white/10"
            :class="{
              'border-blue-500': wish.rarity === 3,
              'border-purple-500': wish.rarity === 4,
              'border-yellow-500': wish.rarity === 5,
            }"
          >
            <div class="flex justify-between items-center">
              <span class="text-white font-semibold">
                <span v-if="wish.rarity === 3">🟦</span>
                <span v-else-if="wish.rarity === 4">🟪</span>
                <span v-else>🟨</span>
                {{ wish.rarity }}-Star
              </span>
              <span class="text-cyan-300 text-sm">{{ wish.timestamp }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Window3',
  data() {
    return {
      wishes: [],
      rarity: 4,
      pityCounter: 0
    }
  },
  computed: {
    totalWishes() {
      return this.wishes.length;
    },
    fiveStarPulls() {
      return this.wishes.filter(w => w.rarity === 5).length;
    }
  },
  methods: {
    addWish() {
      const wish = {
        rarity: parseInt(this.rarity),
        timestamp: new Date().toLocaleString()
      };
      this.wishes.push(wish);
      this.pityCounter = wish.rarity === 5 ? 0 : this.pityCounter + 1;
      this.rarity = 4;
    }
  }
}
</script>
