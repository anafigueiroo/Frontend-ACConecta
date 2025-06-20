<template>
  <div class="bg-white flex flex-col items-center">
    <h1 class="text-xl font-semibold text-gray-800 m-6">
      Meus Cadastros
    </h1>

    <div class="w-full max-w-md mb-4 relative">
      <input
        v-model="busca"
        type="text"
        placeholder="Buscar atividade..."
        class="w-full p-3 pl-10 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
      />
      <svg
        class="w-5 h-5 text-gray-500 absolute left-3 top-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-4.35-4.35m1.6-5.4A7.5 7.5 0 1110.5 3a7.5 7.5 0 017.5 7.5z"
        />
      </svg>
    </div>

    <div class="relative w-full max-w-md border-l-2 border-blue-500 pl-6 space-y-6">
      <div
        v-for="(evento, index) in eventosFiltrados"
        :key="index"
        class="relative bg-white rounded-xl shadow-sm p-4"
      >
        <div
          class="absolute -left-3 top-5 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow"
        ></div>

        <h2 class="font-semibold text-gray-800">{{ evento.nome }}</h2>
        <p class="text-sm text-gray-600">Tempo de atividade: {{ evento.tempo }}</p>
        <p class="text-sm text-blue-600 font-medium">{{ evento.data }}</p>

        <span
          class="inline-block mt-2 px-3 py-0.5 text-[11px] font-semibold rounded-full shadow-sm"
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
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const busca = ref('')

const eventos = ref([
  { nome: 'Evento Corrida', tempo: '4 horas', data: '18/09/2024', status: 'ABERTA' },
  { nome: 'Evento Corrida 2', tempo: '4 horas', data: '18/09/2024', status: 'ABERTA' },
  { nome: 'Evento Corrida 3', tempo: '4 horas', data: '18/09/2024', status: 'ENCERRADA' },
  { nome: 'Evento Corrida 4', tempo: '4 horas', data: '18/09/2024', status: 'CANCELADA' },
])

const eventosFiltrados = computed(() =>
  eventos.value.filter(e =>
    e.nome.toLowerCase().includes(busca.value.toLowerCase())
  )
)
</script>
