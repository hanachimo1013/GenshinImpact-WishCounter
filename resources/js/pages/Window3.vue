<template>
  <wish-window
    :window-id="3"
    title="⚔️ Weapon Event Wishes"
    theme-color="cyan"
    pity-color="cyan"
    gradient-class="gradient-cyan"
    button-gradient="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
  />
</template>

<script>
import WishWindow from './WishWindow.vue'

export default {
  name: 'Window3',
  components: {
    WishWindow
  }
}
</script>
