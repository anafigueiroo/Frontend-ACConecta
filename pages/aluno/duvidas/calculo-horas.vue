<template>
    <NuxtLink to="/aluno/duvidas-frequentes" class="top-4 left-4 text-gray-600 hover:text-blue-500">
      <ArrowLeft class="w-6 h-6" />
    </NuxtLink>
  <div class="flex flex-col items-center px-4 py-6 max-w-md mx-auto sm:max-w-lg md:max-w-2xl">
    <h1 class="text-xl font-bold text-gray-800 mb-6">
      Como calcular as horas?
    </h1>
    <p>
      Na graduação, as horas complementares são essenciais para a formação. Para muitos cursos, é exigido 
      um total de 200 horas complementares, sendo que 50% dessas horas devem ser voltadas para atividades 
      extensionistas. <br><br>
      Passo a passo para o cálculo: <br>
    
      <strong>1. Total de Horas Complementares: O total exigido é de 200 horas.</strong> <br>
    
      <strong>2. Horas Extensionistas: Calcule 50% do total.</strong> <br>

      Portanto, você deve dedicar 100 horas a atividades extensionistas.
    </p>    
    <img src="assets/images/imagem-ilustrativa-explicacao.jpg" alt="Imagem ilustrativa explicação" class="w-60 m-8" />
    <p>
        <strong>Horas de Outras Atividades: </strong>
        As restantes 100 horas podem ser preenchidas com outras atividades complementares, como estágios, 
        cursos extracurriculares, participação em seminários, entre outras.
    </p>
  </div>
</template>

<script setup>
import { ArrowLeft } from 'lucide-vue-next'
</script>