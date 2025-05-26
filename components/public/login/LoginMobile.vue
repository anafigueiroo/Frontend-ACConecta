<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-white px-6 py-2">
    <img src="assets/images/logo-acc-conecta.png" alt="Logo ACConecta" class="w-60" />
    
    <h1 class="text-lg font-semibold text-gray-800 text-center">Atividades para horas complementares!</h1>
    <p class="text-sm text-gray-500 text-center mb-4">Faça login e acesse oportunidades de horas complementares!</p>

    <form class="w-full max-w-sm" @submit.prevent="entrar">
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">E-mail</label>
        <input
          type="email"
          id="email"
          class="mt-1 w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Digite seu e-mail"
        />
      </div>

      <div class="mb-1">
        <label for="password" class="block text-sm font-medium text-gray-700">Senha</label>
        <input
          type="password"
          id="password"
          class="mt-1 w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="********"
        />
      </div>

      <div class="flex justify-end text-sm mb-4">
        <NuxtLink to="/recuperar-senha" class="text-blue-600 underline">Esqueceu a sua senha?</NuxtLink>
      </div>

      <button
        type="submit"
        class="w-full bg-blue-500 hover:bg-blue-600 font-bold text-lg text-white py-3 px-6 rounded-full transition"
      >
        Entrar
      </button>

      <p class="text-center text-sm mt-4 text-gray-600">
        Não tem uma conta?
        <NuxtLink to="/public/register" class="text-blue-600 underline">Cadastre-se!</NuxtLink>
      </p>
    </form>
  </div>
</template>

<script setup>
    function entrar() {
        navigateTo('/aluno/home')
    }
</script>
