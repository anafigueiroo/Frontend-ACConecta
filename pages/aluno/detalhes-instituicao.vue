<template>
  <div class="bg-white text-gray-800 min-h-screen px-4 py-6">
    <div class="max-w-xl mx-auto text-center">
      <div class="flex flex-col items-center mb-6">
        <div class="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
          <User class="w-8 h-8 text-gray-500" />
        </div>
        <h2 class="text-lg font-semibold mt-4">{{ instituicao.nome }}</h2>
        <p class="text-sm text-gray-500">{{ instituicao.email }}</p>
      </div>

      <div class="text-left mb-4">
        <span class="text-xs bg-green-100 text-green-600 font-medium px-3 py-1 rounded-full">
          ATIVIDADES DISPONÍVEIS
        </span>
      </div>

      <div class="relative border-l-2 border-blue-400 ml-1 space-y-6">
        <div
          v-for="(atividade, index) in atividades"
          :key="index"
          class="relative pl-6"
        >
          <span class="absolute -left-2 top-1.5 w-3 h-3 bg-blue-400 rounded-full"></span>

          <div
            class="bg-white shadow rounded-lg p-4 flex justify-between items-start text-left hover:shadow-md transition cursor-pointer"
            @click="irParaDetalhes"
          >
            <div>
              <h3 class="font-semibold text-sm mb-1">{{ atividade.titulo }}</h3>
              <p class="text-sm text-gray-600">Tempo de atividade: {{ atividade.tempo }}</p>
              <p class="text-sm text-blue-500 mt-1">{{ atividade.data }}</p>
            </div>
            <ArrowRight class="w-5 h-5 text-blue-500 mt-1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, User } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()

const instituicao = {
  nome: 'Instituição',
  email: 'empresa@gmail.com',
}

const atividades = [
  { titulo: 'Evento Corrida', tempo: '4 horas', data: '08/10/2024' },
  { titulo: 'Doação de Sangue', tempo: '4 horas', data: '19/10/2024' },
  { titulo: 'Mundo das profissões', tempo: '5 horas', data: '09/11/2024' },
]

const irParaDetalhes = () => {
  router.push('/aluno/detalhes-acc')
}
</script>