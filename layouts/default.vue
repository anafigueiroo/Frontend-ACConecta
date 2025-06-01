<template>
  <div>
    <component :is="isMobile ? MenuMobile : MenuDesktop" v-if="mostrarMenu" :items="menuItems" /> 
    <main class="px-6 py-4">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useMenu } from '~/composables/useMenu'
import MenuDesktop from '~/components/menu/MenuDesktop.vue'
import MenuMobile from '~/components/menu/MenuMobile.vue'

const { mostrarMenu, menuItems } = useMenu()

const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>