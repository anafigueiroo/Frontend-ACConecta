<template>
    <NuxtLink to="/aluno/duvidas-frequentes" class="top-4 left-4 text-gray-600 hover:text-blue-500">
      <ArrowLeft class="w-6 h-6" />
    </NuxtLink>
  <div class="flex flex-col items-center px-4 py-6 max-w-md mx-auto sm:max-w-lg md:max-w-2xl">
    <h1 class="text-xl font-bold text-gray-800 mb-6">
      O que são ACCs?
    </h1>
    <p>
      As horas complementares são uma parte importante da formação acadêmica, especialmente em cursos de graduação.
      Elas se referem a atividades que vão além da carga horária regular das disciplinas do curso e têm como 
      objetivo proporcionar uma formação mais ampla e diversificada ao estudante. <br><br>
      Essas horas podem ser acumuladas por meio de diversas atividades, como:
    </p>

    <p>
        <strong>1. Participação em palestras e seminários:</strong> 
        Eventos que abordam temas relevantes para a área. <br>
    
        <strong>2. Estágios:</strong> 
        Experiências práticas em empresas. <br>

        <strong>3. Cursos extracurriculares:</strong> 
        Aulas ou workshops que complementam a formação.
    </p>    
    <img src="assets/images/imagem-ilustrativa-lousa.jpg" alt="Imagem ilustrativa lousa" class="w-60 mt-8" />
  </div>
</template>

<script setup>
import { ArrowLeft } from 'lucide-vue-next'
</script>