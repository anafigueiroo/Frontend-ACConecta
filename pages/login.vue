<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-5 bg-white">
    <div>
      <img src="assets/images/logo-acc-conecta.png" alt="ACC Conecta" class="w-60">
    </div>

    <div class="w-full max-w-xs mx-0 flex flex-col items-center">
      <BaseInput
        label="Email"
        placeholder="Digite seu email"
        type="email"
        name="email"
        id="email"
        :validationRules="[
          emailValidation
        ]"
      />

      <BaseInput
        label="Nome"
        placeholder="Digite seu nome"
        name="name"
        id="name"
        :validationRules="[
          nameValidation
        ]"
      />

      <BaseLinkButton href="/login" primary class="mt-8"> Entrar</BaseLinkButton>
    </div>

    <a href="/register" class="mt-4 text-sm text-gray-500 hover:underline">
      Não tem uma conta? Cadastre-se
    </a>
  </div>
</template>

<script setup>
  const emailValidation = (value) => {
    if (!value.includes('@')) {
      return { valid: false, message: 'Por favor, insira um email válido.' };
    }
    return { valid: true, message: '' };
  };

  const nameValidation = (value) => {
    if (value.length < 8) {
      return { valid: false, message: 'O nome deve ter pelo menos 8 caracteres.' };
    }
    return { valid: true, message: '' };
  };
</script>