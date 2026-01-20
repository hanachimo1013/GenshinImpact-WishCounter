<template>
  <div class="window">
    <div class="window-header">
      <router-link to="/" class="back-btn">← Back</router-link>
      <h1>Search Result: {{ id }}</h1>
    </div>
    
    <div class="window-content">
      <div class="search-result">
        <h2>Window ID: {{ id }}</h2>
        <p>Details for the searched window ID will appear here.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WindowDetail',
  props: ['id']
}
</script>

<style scoped>
.window {
  min-height: 100vh;
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
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
}

.window-content {
  max-width: 1000px;
  margin: 0 auto;
}

.search-result {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
}

.search-result h2 {
  color: #fa709a;
  margin-top: 0;
}
</style>
