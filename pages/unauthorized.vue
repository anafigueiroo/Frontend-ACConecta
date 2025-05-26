<template>
  <div class="flex flex-col items-center justify-center min-h-screen px-6 bg-white-50 text-center">
    <img src="assets/images/logo-acc-conecta.png" alt="ACCconecta" class="w-50" />

    <h1 class="text-2xl font-semibold text-gray-800 mb-2">Acesso não autorizado</h1>
    <p class="text-gray-600 mb-6">
      Você não tem permissão para acessar esta página.<br>
    </p>

    <NuxtLink to="/">
      <button class="bg-blue-500 text-white px-10 py-3 rounded-full shadow hover:bg-blue-600 transition">
        Fazer Login
      </button>
    </NuxtLink>
  </div>
</template>