<template>
  <NuxtLink to="/aluno/user" class="top-4 left-4 text-gray-600 hover:text-blue-500">
    <ArrowLeft class="w-6 h-6" />
  </NuxtLink>
  <div class="flex flex-col items-center px-4 py-6 max-w-md mx-auto sm:max-w-lg md:max-w-2xl">
    <h1 class="text-xl font-semibold text-gray-800 mb-6">
      Dúvidas Frequentes
    </h1>
    <div class="w-full space-y-4 mb-4">
      <NuxtLink to="duvidas/conceito-accs" class="justify-self-center">
        <button class="grid grid-cols-[1fr_auto] mb-4 items-center w-full bg-blue-300 text-white py-4 px-4 rounded-full hover:bg-blue-400">
          <span class="justify-self-center">O que são ACCs?</span>
          <ArrowRight class="w-5 h-5" />
        </button>
      </NuxtLink>
      <NuxtLink to="duvidas/calculo-horas" class="justify-self-center">
        <button class="grid grid-cols-[1fr_auto] mb-4 items-center w-full bg-blue-300 text-white py-4 px-4 rounded-full hover:bg-blue-400">
          <span class="justify-self-center">Como calcular as horas?</span>
          <ArrowRight class="w-5 h-5" />
        </button>
      </NuxtLink>
      <NuxtLink to="duvidas/envio-certificado" class="justify-self-center">
        <button class="grid grid-cols-[1fr_auto] mb-4 items-center w-full bg-blue-300 text-white py-4 px-4 rounded-full hover:bg-blue-400">
          <span class="justify-self-center">Envio do certificado</span>
          <ArrowRight class="w-5 h-5" />
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
    import { ArrowRight, ArrowLeft } from 'lucide-vue-next'
</script>