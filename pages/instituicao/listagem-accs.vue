<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Conteúdo principal -->
    <main class="p-6 max-w-3xl mx-auto">
      <!-- Campo de busca -->
      <div class="mb-6">
        <input
          type="text"
          v-model="busca"
          placeholder="Buscar..."
          class="w-full p-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Lista de eventos -->
      <div class="relative border-l-4 border-blue-400 pl-6 space-y-6">
        <div
          v-for="(evento, index) in eventosFiltrados"
          :key="index"
          class="relative bg-white rounded-xl shadow-md p-4"
        >
          <!-- Bolinha da linha do tempo -->
          <div class="absolute -left-3 top-4 w-4 h-4 bg-blue-500 border-4 border-white rounded-full shadow"></div>

          <h2 class="font-bold text-gray-700">{{ evento.nome }}</h2>
          <p class="text-sm text-gray-500">Tempo de atividade: {{ evento.tempo }}</p>
          <p class="text-sm text-blue-600">{{ evento.data }}</p>

          <span
            class="inline-block px-3 py-1 text-xs font-semibold rounded-full mt-2"
            :class="{
              'bg-green-100 text-green-700': evento.status === 'ABERTA',
              'bg-blue-100 text-blue-700': evento.status === 'ENCERRADA',
              'bg-red-100 text-red-700': evento.status === 'CANCELADA'
            }"
          >
            {{ evento.status }}
          </span>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const busca = ref('')

const eventos = ref([
  { nome: 'Evento Corrida', tempo: '4 horas', data: '18/09/2024', status: 'ABERTA' },
  { nome: 'Evento Corrida 2', tempo: '4 horas', data: '18/09/2024', status: 'ABERTA' },
  { nome: 'Evento Corrida 3', tempo: '4 horas', data: '18/09/2024', status: 'ABERTA' },
  { nome: 'Evento Corrida 4', tempo: '4 horas', data: '18/09/2024', status: 'ENCERRADA' },
  { nome: 'Evento Corrida 5', tempo: '4 horas', data: '18/09/2024', status: 'ENCERRADA' },
  { nome: 'Evento Corrida 6', tempo: '4 horas', data: '18/09/2024', status: 'CANCELADA' },
])

const eventosFiltrados = computed(() =>
  eventos.value.filter(e =>
    e.nome.toLowerCase().includes(busca.value.toLowerCase())
  )
)
</script>
