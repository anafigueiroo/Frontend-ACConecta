<template>
  <NuxtRouteAnnouncer />

  <div class="grid grid-cols-2 h-screen">
    <div class="bg-white flex flex-col justify-center items-center p-10">
      <img src="assets/images/logo-acc-conecta.png" alt="Logo ACConecta" class="w-80" />
      <h2 class="text-xl text-gray-800 font-semibold mb-2">Atividades para horas complementares!</h2>
      <p class="text-gray-500 text-center w-2/3">
        Faça login e acesse oportunidades de horas complementares!
      </p>
    </div>

    <div class="flex items-center justify-center">
      <div class="bg-white p-10 rounded-xl shadow-lg w-full max-w-xl">
        <div class="flex flex-col items-center mb-6">
          <img src="assets/images/logo-acc-conecta.png" alt="Mini Logo" class="w-15 h-15 mb-2" />
          <h1 class="text-xl font-semibold text-gray-800">Bem-vindo(a)!</h1>
        </div> 

        <form @submit.prevent="entrar">
          <div class="mb-4">
            <label for="email" class="block text-sm/6 font-medium text-gray-900">E-mail</label>
            <div class="mt-2">
              <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-400">
                <input type="email" name="email" id="email" class="block min-w-0 grow py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Informe seu e-mail"/>
              </div>
            </div>
          </div>

          <div class="mb-4">
            <label for="password" class="block text-sm/6 font-medium text-gray-900">Senha</label>
            <div class="mt-2">
              <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-400">
                <input type="password" name="password" id="password" class="block min-w-0 grow py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="********"/>
              </div>
            </div>
          </div>

          <div class="flex justify-between items-center mb-4">
            <label class="flex items-center text-sm">
              <input type="checkbox" class="mr-2" />
              Remember me
            </label>
            <NuxtLink to="/cadastro-acc" class="text-sm text-blue-600 hover:underline">
              Esqueceu a sua senha?
            </NuxtLink>
          </div>

          <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 font-bold text-lg text-white py-3 px-6 rounded-3xl transition"
          >
            Entrar
          </button>

          <p class="text-center text-sm mt-4 text-gray-600">
            Não tem uma conta?
            <NuxtLink to="/public/register" class="text-blue-600 hover:underline">Cadastre-se!</NuxtLink>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const { tipoUsuario } = useAuth()

    function entrar() {
      if (!tipoUsuario.value) {
        navigateTo('/public/register');
      }
      else {
        navigateTo('/' + tipoUsuario.value + '/home');
      }
    }
</script>