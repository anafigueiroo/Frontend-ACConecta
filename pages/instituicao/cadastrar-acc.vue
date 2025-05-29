<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Cabeçalho -->
    <header class="bg-white p-4 flex justify-between items-center shadow-sm">
      <div class="flex items-center">
        <!-- Placeholder para o logo -->
        <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
      <div class="flex items-center space-x-3">
        <!-- Ícone de usuário -->
        <div class="w-6 h-6 bg-gray-300 rounded-full"></div>
        <!-- Ícone de menu -->
        <div class="w-6 h-6 flex flex-col justify-center space-y-1">
          <span class="block w-full h-0.5 bg-gray-600"></span>
          <span class="block w-full h-0.5 bg-gray-600"></span>
          <span class="block w-full h-0.5 bg-gray-600"></span>
        </div>
      </div>
    </header>

    <!-- Conteúdo Principal -->
    <main class="flex-1 p-6">
      <h1 class="text-xl font-semibold text-center mb-6">Cadastro de Atividade</h1>

      <!-- Formulário -->
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Título -->
        <div>
          <label for="titulo" class="block text-sm font-medium text-gray-700">Título</label>
          <input
            v-model="form.titulo"
            type="text"
            id="titulo"
            placeholder="Texto do campo"
            class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Descrição -->
        <div>
          <label for="descricao" class="block text-sm font-medium text-gray-700">Descrição</label>
          <textarea
            v-model="form.descricao"
            id="descricao"
            placeholder="Texto do campo"
            rows="3"
            class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <!-- Tempo -->
        <div>
          <label for="tempo" class="block text-sm font-medium text-gray-700">Tempo</label>
          <input
            v-model="form.tempo"
            type="text"
            id="tempo"
            placeholder="4 horas"
            class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Data -->
        <div>
          <label for="data" class="block text-sm font-medium text-gray-700">Data</label>
          <input
            v-model="form.data"
            type="date"
            id="data"
            class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Local -->
        <div>
          <label for="local" class="block text-sm font-medium text-gray-700">Local</label>
          <input
            v-model="form.local"
            type="text"
            id="local"
            placeholder="Texto do campo"
            class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Botão Cadastrar -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white p-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
        >
          Cadastrar
        </button>
      </form>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  titulo: '',
  descricao: '',
  tempo: '',
  data: '',
  local: '',
})

const handleSubmit = () => {
  console.log('Formulário enviado:', form.value)
}
</script>