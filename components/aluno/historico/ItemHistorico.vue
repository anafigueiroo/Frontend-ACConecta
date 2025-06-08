<template>
  <div class="relative flex items-start gap-4 hover:bg-gray-100 p-1">
    <div class="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full border-2 border-white"></div>

    <div class="pl-8 flex-1">
      <div v-if="subtitulo" class="text-sm text-gray-600">{{ subtitulo }}</div>
      <div class="font-semibold">{{ titulo }}</div>
      <div class="text-sm text-gray-600">Tempo de atividade: {{ tempo }}</div>
      <div class="text-sm text-blue-500">{{ data }}</div>
      <div class="text-sm text-gray-600">{{ empresa }}</div>
    </div>

    <div class="text-2xl text-gray-600">
      <ArrowRight class="w-5 h-5" />
    </div>
  </div>
</template>

<script setup>
    import { ArrowRight } from 'lucide-vue-next'

    defineProps({
        titulo: String,
        tempo: String,
        data: String,
        empresa: String,
        subtitulo: String
    });
</script>
