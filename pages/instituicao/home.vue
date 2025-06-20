<template>
  <div class="min-h-screen bg-white flex flex-col items-center py-6 px-4">
    <h1 class="text-xl font-semibold text-gray-800">
      Seja bem-vindo(a), Instituição!
    </h1>

    <div class="relative w-full max-w-md m-6">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Buscar atividade..."
        class="w-full py-2 pl-10 pr-4 rounded-full shadow-sm border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-300 focus:outline-none"
      />
      <Search class="w-5 h-5 absolute left-3 top-2.5 text-gray-500" />
    </div>

    <div class="bg-white rounded-xl shadow-md p-4 w-full max-w-md">
      <h2 class="text-sm font-semibold text-gray-700 mb-3">Meus cadastros</h2>

      <div v-for="(item, index) in filteredActivities" :key="item.id" class="relative pl-6 pb-6">
        <div
          v-if="index !== filteredActivities.length - 1"
          class="absolute left-3 top-3 w-px h-full bg-blue-500"
        ></div>

        <div class="absolute left-2 top-2.5 w-2 h-2 rounded-full bg-blue-500"></div>

        <div class="pl-2">
          <h3 class="text-m font-semibold text-gray-800">{{ item.title }}</h3>
          <p class="text-sm text-gray-600">Tempo de atividade: {{ item.hours }} horas</p>
          <p class="text-sm text-blue-600 font-medium">{{ item.date }}</p>

          <div class="flex items-center justify-between mt-1">
            <span
              v-if="item.status === 'aberta'"
              class="text-[10px] px-6 py-1 rounded bg-green-100 text-green-800 font-semibold"
            >
              ABERTA
            </span>
            <span
              v-else
              class="text-[10px] px-3 py-1 rounded bg-blue-100 text-blue-800 font-semibold"
            >
              ENCERRADA
            </span>

            <input
              type="checkbox"
              v-model="item.selected"
              class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>

    <button
      @click="irParaCadastroAcc()"
      class="mt-8 w-full max-w-md bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-full shadow-md transition"
    >
      Cadastrar nova ACC
    </button>
  </div>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next'
import { ref, computed } from 'vue'

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

const irParaCadastroAcc = () => {
  navigateTo('/instituicao/cadastrar-acc')
}

</script>
