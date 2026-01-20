<template>
  <wish-window
    :window-id="1"
    title="⭐ Standard Wishes"
    theme-color="purple"
    pity-color="purple"
    gradient-class="gradient-purple"
    button-gradient="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700"
  />
</template>

<script>
import WishWindow from './WishWindow.vue'

export default {
  name: 'Window1',
  components: {
    WishWindow
  }
}
</script>
