<template>
  <div class="window">
    <div class="window-header">
      <router-link to="/" class="back-btn">← Back</router-link>
      <h1>Window 1 - Standard Wishes</h1>
    </div>
    
    <div class="window-content">
      <div class="stats">
        <div class="stat-card">
          <h3>Total Wishes</h3>
          <p class="stat-value">{{ totalWishes }}</p>
        </div>
        <div class="stat-card">
          <h3>5-Star Pulls</h3>
          <p class="stat-value">{{ fiveStarPulls }}</p>
        </div>
        <div class="stat-card">
          <h3>Pity Counter</h3>
          <p class="stat-value">{{ pityCounter }}</p>
        </div>
      </div>

      <div class="add-wish">
        <h2>Add a Wish</h2>
        <div class="input-group">
          <input v-model="rarity" type="number" placeholder="Rarity (3-5)" min="3" max="5" />
          <button @click="addWish">Add Wish</button>
        </div>
      </div>

      <div class="recent-wishes">
        <h2>Recent Wishes</h2>
        <div v-if="wishes.length === 0" class="empty-state">
          No wishes yet
        </div>
        <div v-else class="wishes-list">
          <div v-for="(wish, idx) in wishes.slice(-10)" :key="idx" class="wish-item" :class="'rarity-' + wish.rarity">
            {{ wish.rarity }}-Star • {{ wish.timestamp }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Window1',
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

<style scoped>
.window {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

.window-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  margin-bottom: 2rem;
}

.back-btn {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: opacity 0.2s;
}

.back-btn:hover {
  opacity: 0.8;
}

.window-content {
  max-width: 1000px;
  margin: 0 auto;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 8px;
  color: white;
  text-align: center;
}

.stat-card h3 {
  margin: 0 0 0.5rem 0;
  opacity: 0.9;
}

.stat-value {
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
}

.add-wish {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.add-wish h2 {
  margin-top: 0;
  color: #667eea;
}

.input-group {
  display: flex;
  gap: 0.5rem;
}

.input-group input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.input-group button {
  padding: 0.75rem 1.5rem;
  background-color: #667eea;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.input-group button:hover {
  background-color: #5568d3;
}

.recent-wishes {
  background: white;
  padding: 2rem;
  border-radius: 8px;
}

.recent-wishes h2 {
  margin-top: 0;
  color: #667eea;
}

.empty-state {
  text-align: center;
  color: #999;
  padding: 2rem;
}

.wishes-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.wish-item {
  padding: 1rem;
  border-radius: 4px;
  background-color: #f5f5f5;
}

.wish-item.rarity-3 {
  border-left: 4px solid #89a5ab;
}

.wish-item.rarity-4 {
  border-left: 4px solid #b19cd9;
}

.wish-item.rarity-5 {
  border-left: 4px solid #f6b93b;
  font-weight: bold;
}
</style>
