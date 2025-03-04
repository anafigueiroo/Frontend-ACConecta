<template>
  <NuxtRouteAnnouncer />

  <div class="flex flex-col items-center justify-center min-h-screen p-5 bg-white">
    <div>
      <img src="assets/images/logo-acc-conecta.png" alt="ACC Conecta" class="w-60">
    </div>

    <h1 class="text-center text-lg font-semibold text-gray-700">
      Descubra atividades para suas horas complementares!
    </h1>
    <p class="text-center text-gray-500 text-sm mt-2">
      Faça login e encontre oportunidades para se destacar na Unochapecó!
    </p>

    <div class="w-full max-w-xs mt-5 mx-0 flex flex-col items-center">
      <BaseLinkButton href="/login" primary> Entrar</BaseLinkButton>
      <BaseLinkButton href="/register"> Cadastre-se</BaseLinkButton>
    </div>

    <a href="/login" class="mt-4 text-sm text-gray-500 hover:underline">
      Esqueceu a sua senha?
    </a>
  </div>
</template>