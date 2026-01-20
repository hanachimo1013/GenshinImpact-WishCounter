<template>
  <wish-window
    :window-id="2"
    title="👤 Character Event Wishes"
    theme-color="pink"
    pity-color="pink"
    gradient-class="gradient-pink"
    button-gradient="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700"
  />
</template>

<script>
import WishWindow from './WishWindow.vue'

export default {
  name: 'Window2',
  components: {
    WishWindow
  }
}
</script>
