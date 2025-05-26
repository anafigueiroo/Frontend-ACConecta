<template>
  <button @click="fazerLogout" class="bg-red-500 text-white px-4 py-2 rounded">
    Sair
  </button>
</template>

<script setup lang="ts">
const { logout } = useAuth()

function fazerLogout() {
  logout()
}

const { tipoUsuario } = useAuth()

console.log('Usuário em sessão:', tipoUsuario.value)

 definePageMeta({
        middleware: ['auth']
    })
</script>

   
