<template>
  <div class="bg-white flex items-center justify-center">
    <div class="w-full max-w-md text-center">
      <h2 class="text-xl font-semibold text-gray-800 m-6">Cadastro de Atividade</h2>

      <form @submit.prevent="cadastrar" class="space-y-5 text-left">

        <div>
          <label for="titulo" class="block text-sm font-medium text-gray-900 mb-1">Título</label>
          <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-blue-400">
            <input type="text" id="titulo" placeholder="Informe o titulo"
              class="w-full py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md" />
          </div>
        </div>

        <div>
          <label for="descricao" class="block text-sm font-medium text-gray-700">Descrição</label>
          <textarea
            id="descricao"
            placeholder="Texto do campo"
            rows="3"
            class="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
           ></textarea>
        </div>

        <div>
          <label for="tempo" class="block text-sm font-medium text-gray-900 mb-1">Tempo</label>
          <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-blue-400">
            <input type="text" id="tempo" placeholder="Informe o tempo"
              class="w-full py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md" />
          </div>
        </div>

        <div>
          <label for="data" class="block text-sm font-medium text-gray-700">Data</label>
          <input
            type="date"
            id="data"
            class="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
        </div>

        <div>
          <label for="local" class="block text-sm font-medium text-gray-900 mb-1">Local</label>
          <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-blue-400">
            <input type="local" id="local" placeholder="Informe o local"
              class="w-full py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md" />
          </div>
        </div>

        <div class="pt-4 space-y-3">
          <button type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-full transition">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>

const router = useRouter()

function cadastrar() {
  router.push('/instituicao/listagem-accs')
}
</script>