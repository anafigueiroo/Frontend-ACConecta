<template>
  <div class="bg-white flex items-center justify-center px-4 py-10">
    <div class="w-full max-w-md text-center">
      <h2 class="text-xl font-semibold text-gray-800 mb-6">Alterar cadastro</h2>

      <form @submit.prevent="alterarDados" class="space-y-5 text-left">

        <div>
          <label for="nome" class="block text-sm font-medium text-gray-900 mb-1">Nome</label>
          <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-blue-400">
            <input type="text" v-model="nome" id="nome" placeholder="Informe seu nome"
              class="w-full py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md" />
          </div>
        </div>

        <div>
          <label for="cpf" class="block text-sm font-medium text-gray-900 mb-1">CNPJ</label>
          <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-blue-400">
            <input type="text" id="cpf" placeholder="Informe seu CPF"
              class="w-full py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md" />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-900 mb-1">E-mail</label>
          <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-blue-400">
            <input type="email" id="email" placeholder="Informe seu e-mail"
              class="w-full py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md" />
          </div>
        </div>

        <div>
          <label for="telefone" class="block text-sm font-medium text-gray-900 mb-1">Telefone</label>
          <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-blue-400">
            <input type="text" id="telefone" placeholder="Informe seu telefone"
              class="w-full py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md" />
          </div>
        </div>

        <div class="pt-4 space-y-3">
          <button type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-full transition">
            Atualizar
          </button>
          <button type="submit"
            class="w-full border border-blue-400 text-blue-500 font-semibold py-3 rounded-full hover:bg-blue-50 transition">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const nome = ref('')

const router = useRouter()

function alterarDados() {
      router.push('/instituicao/user')
}
</script>