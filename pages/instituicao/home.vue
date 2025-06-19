<template>
  <div class="min-h-screen bg-white">
    <main class="max-w-md mx-auto px-4 pt-6 pb-10">
      <!-- Campo de busca -->
      <div class="relative mb-4">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Buscar..."
          class="w-full p-3 pl-10 bg-gray-100 text-gray-800 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-3 top-3 w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m1.6-5.4A7.5 7.5 0 1110.5 3a7.5 7.5 0 017.5 7.5z" />
        </svg>
      </div>

      <!-- Lista de atividades -->
      <div class="bg-white shadow-md rounded-xl p-4 border">
        <h2 class="text-sm font-semibold text-gray-600 mb-4">Meus cadastros</h2>

        <div
          v-for="(item, index) in filteredActivities"
          :key="item.id"
          class="relative pl-6 pb-6"
        >
          <div class="absolute left-2 top-1 w-3 h-3 rounded-full bg-blue-500"></div>
          <div class="border-l-2 border-blue-500 pl-4">
            <h3 class="font-medium text-gray-800">{{ item.title }}</h3>
            <p class="text-sm text-gray-600">Tempo de atividade: {{ item.hours }} horas</p>
            <p class="text-sm text-blue-600 font-medium">{{ item.date }}</p>
            <div class="flex items-center justify-between mt-1">
              <span
                v-if="item.status === 'aberta'"
                class="text-xs text-green-700 bg-green-100 font-semibold px-2 py-0.5 rounded"
              >
                ABERTA
              </span>
              <span
                v-else
                class="text-xs text-white bg-blue-600 font-semibold px-2 py-0.5 rounded"
              >
                ENCERRADA
              </span>
              <input type="checkbox" :checked="item.selected" class="w-5 h-5 accent-blue-600" />
            </div>
          </div>
        </div>
      </div>

      <!-- Botão cadastrar -->
      <div class="mt-10">
        <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-full shadow-md transition">
          Cadastrar nova ACC
        </button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeTab = ref('home')
const searchQuery = ref('')

const activities = ref([
  {
    id: 1,
    title: 'Evento Corrida',
    hours: 4,
    date: '18/09/2024',
    status: 'aberta',
    selected: false
  },
  {
    id: 2,
    title: 'Evento Corrida 2',
    hours: 4,
    date: '18/09/2024',
    status: 'encerrada',
    selected: true
  }
])

const filteredActivities = computed(() =>
  activities.value.filter(item =>
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)
</script>
