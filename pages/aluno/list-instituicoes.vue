<template>
  <div class="bg-white text-gray-800 px-4 py-6">
    <div class="max-w-xl mx-auto">
      <h1 class="text-center text-xl font-semibold mb-6">Instituições parceiras</h1>

      <div class="relative mb-6">
        <input
          v-model="busca"
          type="text"
          placeholder="Buscar..."
          class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Search class="w-5 h-5 absolute left-3 top-2.5 text-gray-500" />
      </div>

      <div class="space-y-4">
        <div
          v-for="(inst, index) in instituicoesFiltradas"
          :key="index"
          class="flex items-center justify-between p-4 bg-white shadow rounded-lg transition hover:shadow-md"
        >
          <div class="flex items-center gap-4">
            <div class="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white">
              <User class="w-5 h-5" />
            </div>
            <div>
              <h3 class="font-semibold text-sm">{{ inst.nome }}</h3>
              <p class="text-sm text-gray-500">{{ inst.email }}</p>
              <div class="text-yellow-400 text-sm mt-1">
                <span v-for="i in inst.estrelas" :key="i">★</span>
              </div>
            </div>
          </div>
         <div class="text-2xl text-gray-600">
            <ArrowRight class="w-5 h-5" />
        </div>
        </div>

        <p v-if="instituicoesFiltradas.length === 0" class="text-center text-sm text-gray-500">
          Nenhuma instituição encontrada.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Search, ArrowRight, User } from 'lucide-vue-next'

const busca = ref('')

const instituicoes = ref([
  { nome: 'Instituição 1', email: 'empresa1@email.com', estrelas: 5 },
  { nome: 'Instituição 2', email: 'empresa2@exemplo.com', estrelas: 4 },
  { nome: 'Instituição 3', email: 'empresa3@universidade.com', estrelas: 3 },
  { nome: 'Instituição 4', email: 'empresa4@email.com', estrelas: 5 },
  { nome: 'Instituição 5', email: 'empresa5@email.com', estrelas: 4 },
])

const instituicoesFiltradas = computed(() =>
  instituicoes.value.filter(inst =>
    inst.nome.toLowerCase().includes(busca.value.toLowerCase())
  )
)
</script>