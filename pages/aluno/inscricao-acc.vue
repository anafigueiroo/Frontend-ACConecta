<template>
  <div class="px-4 py-6 bg-white-100 min-h-screen text-gray-800">
    <h2 class="text-center text-lg font-semibold mb-4">INSCREVA-SE ACC</h2>

    <div class="max-w-md mx-auto bg-white rounded-xl shadow p-5 space-y-3">
      <div>
        <span class="font-semibold">Empresa</span><br />
        Nome da Empresa
      </div>

      <div>
        <span class="font-semibold">E-mail</span><br />
        email@gmail.com
      </div>

      <div>
        <span class="font-semibold">Tempo de atividade</span><br />
        4 HORAS
      </div>

      <div>
        <span class="font-semibold">Data da realização</span><br />
        03/10/2024
      </div>

      <div>
        <span class="font-semibold">Endereço</span><br />
        Avenida - Praça central
      </div>

      <div>
        <span
          class="inline-block px-3 py-1 rounded-full text-xs font-semibold text-green-700 bg-green-100 border border-green-300 mt-2"
        >
          VAGAS DISPONÍVEIS: 7
        </span>
      </div>

      <button
        @click="abrirModal"
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-full mt-2 transition"
      >
        INSCREVER-SE
      </button>
    </div>

    <div
        v-if="mostrarModal"
        class="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-xl shadow-lg py-6 px-10 w-100 text-center space-y-3 relative">
        <div class="flex justify-center">
          <img src="assets/images/logo-acc-conecta.png" alt="Mini Logo" class="w-20 h-20" />
        </div>

        <h3 class="text-lg font-semibold text-gray-800">Confirmar Inscrição?</h3>
        <p class="text-sm text-gray-600">
          Você está prestes a confirmar sua inscrição para participar da ACC.
        </p>

        <div class="flex justify-between gap-3 pt-2">
          <button
            @click="fecharModal"
            class="flex-1 border border-blue-500 text-blue-500 font-semibold py-2 rounded-full hover:bg-blue-50"
          >
            Cancelar
          </button>
          <button
            @click="confirmarInscricao"
            class="flex-1 bg-blue-500 text-white font-semibold py-2 rounded-full hover:bg-blue-600"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mostrarModal = ref(false)

const abrirModal = () => {
  mostrarModal.value = true
}

const fecharModal = () => {
  mostrarModal.value = false
}

const router = useRouter()

const confirmarInscricao = () => {
  fecharModal()
  alert('Inscrição confirmada com sucesso!')
  router.push('/aluno/historico')
}
</script>