<template>
  <div class="bg-white text-gray-800 px-4 py-6">
    <div class="max-w-xl mx-auto">
      <h1 class="text-center text-xl font-semibold mb-4">Atividades Disponíveis</h1>

      <div class="relative mb-3">
        <input
          v-model="busca"
          type="text"
          placeholder="Buscar..."
          class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <Search class="w-5 h-5 absolute left-3 top-2.5 text-gray-500" />
      </div>

      <button
        class="flex items-center gap-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-3 py-1 mb-4"
      >
        <Filter class="w-4 h-4" /> Filtrar
      </button>

      <div class="space-y-4">
        <div
          v-for="(atividade, index) in atividadesFiltradas"
          :key="index"
          class="px-6 py-4 bg-white shadow rounded-lg"
        >
          <h3 class="font-semibold text-center text-lg mb-1">{{ atividade.titulo }}</h3>
          <p class="text-m text-gray-600 mb-1">{{ atividade.descricao }}</p>
          <p class="text-green-500 text-m font-semibold">{{ atividade.duracao }}</p>
          <p class="text-gray-400 text-m mb-3">{{ atividade.endereco }}</p>

          <button
            @click="irParaDetalhes"
            class="w-full bg-blue-500 text-white text-sm py-3 rounded-full hover:bg-blue-600 transition font-medium"
          >
            Quero me inscrever
          </button>
        </div>

        <p v-if="atividadesFiltradas.length === 0" class="text-center text-sm text-gray-500">
          Nenhuma atividade encontrada.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Search, Filter } from 'lucide-vue-next'

const busca = ref('')

const atividades = ref([
  {
    titulo: 'Título da ACC 1',
    descricao: 'Descrição breve da ACC.',
    duracao: '4 horas',
    endereco: 'Endereço do local'
  },
  {
    titulo: 'Título da ACC 2',
    descricao: 'Descrição breve da ACC.',
    duracao: '4 horas',
    endereco: 'Endereço do local'
  },
  {
    titulo: 'Título da ACC 3',
    descricao: 'Descrição breve da ACC.',
    duracao: '4 horas',
    endereco: 'Endereço do local'
  }
])

const atividadesFiltradas = computed(() =>
  atividades.value.filter(a =>
    a.titulo.toLowerCase().includes(busca.value.toLowerCase()) ||
    a.descricao.toLowerCase().includes(busca.value.toLowerCase()) ||
    a.endereco.toLowerCase().includes(busca.value.toLowerCase())
  )
)

const router = useRouter()

const irParaDetalhes = () => {
  router.push('/aluno/inscricao-acc')
}
</script>