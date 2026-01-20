<template>
  <div class="home">
    <h1>Genshin Impact Wish Counter</h1>
    <p>Welcome! Search for a wish ID or navigate to a window.</p>
    
    <div class="search-box">
      <input 
        v-model="searchId" 
        @keyup.enter="searchWindow"
        placeholder="Enter Wish ID..."
        type="text"
      />
      <button @click="searchWindow">Search</button>
    </div>

    <div class="windows-grid">
      <router-link to="/window1" class="window-card">
        <h2>Window 1</h2>
        <p>Standard Wishes</p>
      </router-link>
      <router-link to="/window2" class="window-card">
        <h2>Window 2</h2>
        <p>Character Event Wishes</p>
      </router-link>
      <router-link to="/window3" class="window-card">
        <h2>Window 3</h2>
        <p>Weapon Event Wishes</p>
      </router-link>
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

<style scoped>
.home {
  padding: 2rem;
  text-align: center;
}

h1 {
  color: #42b983;
  margin-bottom: 1rem;
}

.search-box {
  margin: 2rem 0;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.search-box input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-box button {
  padding: 0.5rem 1.5rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-box button:hover {
  background-color: #369970;
}

.windows-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.window-card {
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.2s;
}

.window-card:hover {
  transform: translateY(-5px);
}

.window-card h2 {
  margin: 0 0 0.5rem 0;
}

.window-card p {
  margin: 0;
  opacity: 0.9;
}
</style>
