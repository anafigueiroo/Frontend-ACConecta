<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Conteúdo Principal -->
    <main class="flex-1 flex items-center justify-center p-6">
      <div class="w-full max-w-xl bg-white p-6 rounded-2xl shadow-lg">
        <h1 class="text-2xl font-bold text-center mb-6 text-gray-800">Cadastro de Atividade</h1>

        <!-- Formulário -->
        <form @submit.prevent="handleSubmit" class="space-y-5">
          <div>
            <label for="titulo" class="block text-sm font-medium text-gray-700">Título</label>
            <input
              v-model="form.titulo"
              type="text"
              id="titulo"
              placeholder="Texto do campo"
              class="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label for="descricao" class="block text-sm font-medium text-gray-700">Descrição</label>
            <textarea
              v-model="form.descricao"
              id="descricao"
              placeholder="Texto do campo"
              rows="3"
              class="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label for="tempo" class="block text-sm font-medium text-gray-700">Tempo</label>
            <input
              v-model="form.tempo"
              type="text"
              id="tempo"
              placeholder="4 horas"
              class="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label for="data" class="block text-sm font-medium text-gray-700">Data</label>
            <input
              v-model="form.data"
              type="date"
              id="data"
              class="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label for="local" class="block text-sm font-medium text-gray-700">Local</label>
            <input
              v-model="form.local"
              type="text"
              id="local"
              placeholder="Texto do campo"
              class="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            Cadastrar
          </button>
        </form>
      </div>
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
