<template>
  <div class="bg-white text-gray-800">
    <div class="max-w-xl mx-auto">
      <h1 class="text-center text-xl font-semibold m-6">Histórico de Atividades</h1>

      <section class="mb-8">
        <h2 class="text-lg font-semibold mb-4">Pendentes</h2>
        <div class="relative border-l-2 border-blue-400 ml-1 space-y-6">
          <ItemHistorico
            @click="irParaDetalhes"
            titulo="Evento Teste"
            tempo="4 horas"
            data="18/09/2024"
            empresa="Empresa 3"
          />
        </div>
      </section>

      <section>
        <h2 class="text-lg font-semibold mb-4">Concluídas</h2>
        <div class="relative border-l-2 border-blue-400 ml-1 space-y-6">
          <ItemHistorico
            @click="irParaDetalhes"
            titulo="Evento Corrida"
            tempo="4 horas"
            data="18/09/2024"
            empresa="Empresa 3"
          />
          <ItemHistorico
            @click="irParaDetalhes"
            titulo="Doação Sangue"
            tempo="4 horas"
            data="18/09/2024"
            empresa="Empresa 3"
          />
          <ItemHistorico
            @click="irParaDetalhes"
            titulo="Mundo das profissões"
            tempo="8 horas"
            data="18/09/2024"
            empresa="Empresa 3"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import ItemHistorico from '~/components/aluno/historico/ItemHistorico.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface Atividade {
  titulo: string
  empresa: string
  status: string
  descricao: string
  tempo: string
  data: string
  endereco: string
}

const irParaDetalhes = () => {
    navigateTo('/aluno/detalhes-acc');
}
</script>