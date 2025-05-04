<script setup>
import { ref, onMounted } from 'vue'
import LoginDesktop from '~/components/LoginDesktop.vue'
import LoginMobile from '~/components/LoginMobile.vue'

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
    <component :is="isMobile ? LoginMobile : LoginDesktop" />
  </div>
</template>
