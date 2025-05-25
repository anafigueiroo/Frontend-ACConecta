<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-white px-6 py-2">
    <div class="flex col-2 items-center mb-1">
          <img src="assets/images/logo-acc-conecta.png" alt="Mini Logo" class="w-15 h-15" />
          <h1 class="text-l font-semibold text-gray-800">ACConecta</h1>
    </div>

    <h1 class="text-xl font-bold text-gray-800 mb-3 mt-5">Cadastro de conta</h1>

    <div class="flex justify-center space-x-2 mb-6">
          <button
            @click="tipo = 'aluno'"
            :class="[
              'px-15 py-1 rounded',
              tipo === 'aluno' ? 'bg-blue-500 text-white' : 'bg-blue-200 hover:bg-blue-300 text-white'
            ]"
          >
            Aluno
          </button>
          <button
            @click="tipo = 'instituicao'"
            :class="[
              'px-12 py-1 rounded',
              tipo === 'instituicao' ? 'bg-blue-500 text-white' : 'bg-blue-200 hover:bg-blue-300 text-white'
            ]"
          >
            Instituição
          </button>
        </div>

        <div class="w-full max-w-2xl mx-auto px-4 sm:px-6">
          <component :is="formComponent" />
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