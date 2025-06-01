<template>
 <form @submit.prevent="fazerLoginComoInstituicao">
    <div class="mb-4">
        <label for="nome" class="block text-sm/6 font-medium text-gray-900">Nome</label>
        <div class="mt-2 flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-400">
            <input type="nome" v-model="nome" name="nome" id="nome" class="block min-w-0 grow py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Informe o nome da instituição"/>
        </div>
    </div>

    <div class="mb-4">
        <label for="cnpj" class="block text-sm/6 font-medium text-gray-900">CNPJ</label>
        <div class="mt-2 flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-400">
            <input type="cnpj" name="cnpj" id="cnpj" class="block min-w-0 grow py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Informe seu CNPJ"/>
        </div>
    </div>

    <div class="mb-4">
        <label for="telefone" class="block text-sm/6 font-medium text-gray-900">Telefone</label>
        <div class="mt-2 flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-400">
            <input type="telefone" name="telefone" id="telefone" class="block min-w-0 grow py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Informe seu telefone"/>
        </div>
    </div>

    <div class="mb-4">
        <label for="email" class="block text-sm/6 font-medium text-gray-900">E-mail</label>
        <div class="mt-2 flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-400">
            <input type="email" name="email" id="email" class="block min-w-0 grow py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Informe seu e-mail"/>
        </div>
    </div>

    <div class="mb-4">
        <label for="password" class="block text-sm/6 font-medium text-gray-900">Senha</label>
        <div class="mt-2 flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-400">
            <input type="password" name="password" id="password" class="block min-w-0 grow py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="********"/>
        </div>
    </div>

    <button
        type="submit"
        class="w-full bg-blue-500 hover:bg-blue-600 font-bold text-lg text-white py-3 px-6 rounded-3xl transition"
    > Cadastrar </button>

    <p class="text-center text-sm mt-4 text-gray-600">
        Já possui uma conta?
        <NuxtLink to="/public/register" class="text-blue-600 hover:underline">Faça login!</NuxtLink>
    </p>
  </form>
</template>

<script setup>
import { ref } from 'vue'
const { login } = useAuth()

const nome = ref('')

function fazerLoginComoInstituicao() {
  login('instituicao', nome.value)
  navigateTo('/')
}
</script>