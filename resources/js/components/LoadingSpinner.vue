<template>
  <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12 text-center">
      <div class="mb-6 flex justify-center">
        <div class="relative w-16 h-16">
          <!-- Google-style spinner with 4 colored segments -->
          <div class="absolute inset-0 animate-spin rounded-full"
               style="background: conic-gradient(
                 from 0deg,
                 #4285F4 0deg,
                 #4285F4 90deg,
                 #EA4335 90deg,
                 #EA4335 180deg,
                 #FBBC04 180deg,
                 #FBBC04 270deg,
                 #34A853 270deg,
                 #34A853 360deg
               );">
          </div>
          <!-- Inner white circle to create ring effect -->
          <div class="absolute inset-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"></div>
        </div>
      </div>
      <h2 class="text-2xl font-bold text-white mb-2">Searching...</h2>
      <p class="text-purple-200">Looking up wish ID: <span class="font-semibold text-purple-100">{{ wishId }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    wishId: {
      type: String,
      default: ''
    }
  }
}
</script>
