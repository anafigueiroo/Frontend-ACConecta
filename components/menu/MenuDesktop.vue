<template>
  <header class="flex items-center justify-between px-10 shadow-md bg-white h-20">
    <div class="flex items-center space-x-10">
      <img src="assets/images/logo-acc-conecta.png" alt="Logo" class="h-16 pxr-10" />
      <nav class="flex space-x-14 text-gray-800">
        <NuxtLink
          v-for="item in items"
          :key="item.link"
          :to="item.link"
          class="hover:text-blue-600 font-medium"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </div>

     <div class="flex items-center space-x-4">
      <NuxtLink
        v-if="tipoUsuario"
        :to="`/${tipoUsuario}/user`"
        class="text-gray-800 hover:text-blue-600 transition-colors"
      >
        <IconUser class="w-6 h-6" />
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useAuth } from '#imports' // ou o caminho correto do seu projeto
  import { User as IconUser } from 'lucide-vue-next'

  defineProps({ items: Array })

  const tipoUsuario = ref('')

  onMounted(() => {
    const auth = useAuth()
    tipoUsuario.value = auth.tipoUsuario.value ?? ''
  })
</script>