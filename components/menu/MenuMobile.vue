<template>
  <header class="flex justify-between items-center px-4 py-1 bg-white">
    <img src="assets/images/logo-acc-conecta.png" alt="Logo" class="h-14" />
    <div class="flex items-center space-x-4">
      <IconUser />
      <IconMenu />
    </div>
  </header>
</template>

<script setup>
import { User as IconUser, Menu as IconMenu } from 'lucide-vue-next' // ou qualquer lib de ícones
</script>
