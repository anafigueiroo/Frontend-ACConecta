<template>
  <div class="grid grid-cols-2 h-screen">
    <div class="bg-white flex flex-col justify-center items-center p-10">
      <img src="assets/images/logo-acc-conecta.png" alt="Logo ACConecta" class="w-80" />
      <h2 class="text-xl text-gray-800 font-semibold mb-2">Atividades para horas complementares!</h2>
      <p class="text-gray-500 text-center w-2/3">
        Faça login e acesse oportunidades de horas complementares!
      </p>
    </div>

    <div class="flex items-center justify-center">
      <div class="bg-white p-10 rounded-xl shadow-lg w-full max-w-xl h-[90vh] flex flex-col">
       <div class="flex flex-col items-center mb-1">
          <img src="assets/images/logo-acc-conecta.png" alt="Mini Logo" class="w-10 h-10 mb-2" />
          <h1 class="text-xl font-semibold text-gray-800">Cadastro de conta</h1>
        </div>

        <div class="flex justify-center mb-6 gap-2">
          <button
            @click="tipo = 'aluno'"
            :class="[
              'px-10 py-1 rounded',
              tipo === 'aluno' ? 'bg-blue-500 text-white' : 'bg-blue-200 hover:bg-blue-300 text-white'
            ]"
          >
            Aluno
          </button>
          <button
            @click="tipo = 'instituicao'"
            :class="[
              'px-6 py-1 rounded',
              tipo === 'instituicao' ? 'bg-blue-500 text-white' : 'bg-blue-200 hover:bg-blue-300 text-white'
            ]"
          >
            Instituição
          </button>
        </div>

        <div class="overflow-y-auto flex-1 px-2 scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-100">
            <component :is="formComponent" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import FormAluno from '@/components/public/register/form/FormAluno.vue'
    import FormInstituicao from '@/components/public/register/form/FormInstituicao.vue'

    const tipo = ref('aluno')

    const formComponent = computed(() => {
        return tipo.value === 'aluno' ? FormAluno : FormInstituicao
    })
</script>
