<template>
    <NuxtLink to="/aluno/duvidas-frequentes" class="top-4 left-4 text-gray-600 hover:text-blue-500">
      <ArrowLeft class="w-6 h-6" />
    </NuxtLink>
  <div class="flex flex-col items-center px-4 py-6 max-w-md mx-auto sm:max-w-lg md:max-w-2xl">
    <h1 class="text-xl font-bold text-gray-800 mb-6">
      Envio do certificado
    </h1>
    <p>
      1. Entre no portal <strong>Minha UNO</strong> utilizando seu login e senha; <br>
      2. Navegue até Protocolo Digital; <br>
      3. Selecione Atividades Complementares: <br>
      4. Faça Upload do Certificado: Clique na opção para fazer upload do certificado. 
      Selecione o arquivo do seu certificado em PDF ou imagem. Certifique-se de que o documento esteja legível 
      e completo. <br>
      5. Confirme o Envio: Após selecionar o arquivo, clique em "Enviar" ou "Confirmar" para finalizar o processo. <br>
      6. Acompanhe o Status: Você pode acompanhar o status do seu envio no mesmo recurso do Protocolo Digital.
    </p>    
    <img src="assets/images/imagem-ilustrativa-notebooks.jpg" alt="Imagem ilustrativa notebooks" class="w-60 m-8" />
  </div>
</template>

<script setup>
import { ArrowLeft } from 'lucide-vue-next'
</script>