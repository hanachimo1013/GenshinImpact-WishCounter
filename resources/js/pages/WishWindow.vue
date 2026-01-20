<template>
  <div :class="`min-h-screen ${gradientClass}`">
    <!-- Header -->
    <div :class="`bg-black/40 backdrop-blur-md border-b border-${themeColor}-400/20 sticky top-0 z-10`">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between">
        <router-link to="/" class="text-2xl sm:text-3xl hover:text-white transition text-white">← Back</router-link>
        <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold text-white hidden sm:block">{{ title }}</h1>
        <div class="w-8 sm:w-12"></div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-16">
      <!-- Stats Grid - Responsive -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 mb-6 sm:mb-12 lg:mb-16">
        <div class="card bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-6 lg:p-8 text-center rounded-xl">
          <p :class="`text-${themeColor}-200 text-xs sm:text-sm lg:text-lg mb-1 sm:mb-2`">Total Wishes</p>
          <p class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{{ totalWishes }}</p>
        </div>
        <div class="card bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-6 lg:p-8 text-center rounded-xl">
          <p :class="`text-${themeColor}-200 text-xs sm:text-sm lg:text-lg mb-1 sm:mb-2`">5-Star Pulls</p>
          <p class="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-300">{{ fiveStarPulls }}</p>
        </div>
        <div class="card bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-6 lg:p-8 text-center rounded-xl">
          <p :class="`text-${themeColor}-200 text-xs sm:text-sm lg:text-lg mb-1 sm:mb-2`">Pity Counter</p>
          <p :class="`text-3xl sm:text-4xl lg:text-5xl font-bold text-${pityColor}-300`">{{ pityCounter }}</p>
        </div>
      </div>

      <!-- Add Wish Card -->
      <div class="card bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-6 lg:p-8 rounded-xl mb-6 sm:mb-12 lg:mb-16">
        <h2 class="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-6">➕ Add a Wish</h2>
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <input 
            v-model.number="rarity" 
            type="number" 
            placeholder="Rarity (3-5)" 
            min="3" 
            max="5"
            @keyup.enter="addWish"
            :class="`flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-${themeColor}-950/50 border border-${themeColor}-400/30 rounded-lg text-white placeholder-${themeColor}-300 focus:outline-none focus:border-${themeColor}-300 transition`"
          />
          <button 
            @click="addWish"
            :class="`btn-primary px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base ${buttonGradient} whitespace-nowrap`"
            :disabled="isLoading"
          >
            {{ isLoading ? 'Adding...' : 'Add' }}
          </button>
        </div>
        <p v-if="error" class="text-red-400 text-sm mt-2">{{ error }}</p>
      </div>

      <!-- Recent Wishes -->
      <div class="card bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-6 lg:p-8 rounded-xl">
        <h2 class="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">📜 Recent Wishes</h2>
        <div v-if="wishes.length === 0" class="text-center py-8 sm:py-12">
          <p :class="`text-${themeColor}-300 text-sm sm:text-base lg:text-lg`">No wishes yet. Start tracking! ✨</p>
        </div>
        <div v-else class="space-y-2 sm:space-y-3">
          <div 
            v-for="(wish, idx) in wishes.slice().reverse().slice(0, 15)" 
            :key="idx" 
            class="p-3 sm:p-4 bg-white/5 border-l-4 rounded-lg transition hover:bg-white/10"
            :class="{
              'border-blue-500': wish.rarity === 3,
              'border-purple-500': wish.rarity === 4,
              'border-yellow-500': wish.rarity === 5,
            }"
          >
            <div class="flex justify-between items-center flex-col sm:flex-row gap-2 sm:gap-0">
              <span class="text-white font-semibold text-sm sm:text-base">
                <span v-if="wish.rarity === 3">🟦</span>
                <span v-else-if="wish.rarity === 4">🟪</span>
                <span v-else>🟨</span>
                {{ wish.rarity }}-Star
              </span>
              <span :class="`text-${themeColor}-300 text-xs sm:text-sm`">{{ formatDate(wish.timestamp) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { wishService } from '../services/supabase'

export default {
  props: {
    windowId: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    themeColor: {
      type: String,
      default: 'purple'
    },
    pityColor: {
      type: String,
      default: 'purple'
    },
    buttonGradient: {
      type: String,
      default: 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700'
    },
    gradientClass: {
      type: String,
      default: 'gradient-purple'
    }
  },
  data() {
    return {
      wishes: [],
      rarity: 4,
      pityCounter: 0,
      isLoading: false,
      error: null
    }
  },
  computed: {
    totalWishes() {
      return this.wishes.length
    },
    fiveStarPulls() {
      return this.wishes.filter(w => w.rarity === 5).length
    }
  },
  methods: {
    formatDate(timestamp) {
      if (!timestamp) return ''
      return new Date(timestamp).toLocaleString()
    },
    async addWish() {
      if (!this.rarity || this.rarity < 3 || this.rarity > 5) {
        this.error = 'Rarity must be between 3 and 5'
        return
      }

      this.isLoading = true
      this.error = null

      const { data, error } = await wishService.addWish(this.windowId, this.rarity)
      if (error) {
        this.error = error.message || 'Failed to add wish'
      } else if (data && data.length > 0) {
        this.wishes.unshift(data[0])
        this.pityCounter = this.rarity === 5 ? 0 : this.pityCounter + 1
        this.rarity = 4
      }
      this.isLoading = false
    },
    async loadWishes() {
      this.error = null
      const { data, error } = await wishService.getWishes(this.windowId)
      if (error) {
        this.error = error.message || 'Failed to load wishes'
      } else if (data && data.length > 0) {
        this.wishes = data
        const lastFiveStar = data.findIndex(w => w.rarity === 5)
        this.pityCounter = lastFiveStar >= 0 ? lastFiveStar : data.length
      }
    }
  },
  mounted() {
    this.loadWishes()
  }
}
</script>
