<script setup>
import { ref, onMounted } from 'vue'
import RegisterDesktop from '@/components/public/register/RegisterDesktop.vue'
import RegisterMobile from '@/components/public/register/RegisterMobile.vue'

const isMobile = ref(null)

onMounted(() => {
  const checkSize = () => {
    isMobile.value = window.innerWidth < 768
  }

  checkSize()
  window.addEventListener('resize', checkSize)
})
</script>

<template>
  <div v-if="isMobile !== null">
    <component :is="isMobile ? RegisterMobile : RegisterDesktop" />
  </div>
</template>
