<template>
  <h2 class="text-xl font-semibold text-center text-gray-800 m-6">{{ titulo }}</h2>

  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 space-y-4">
    <div class="flex gap-2">
      <span
        class="px-3 py-1 rounded-md text-xs font-semibold bg-orange-300 text-orange-800"
      >
        {{ empresa.toUpperCase() }}
      </span>

      <span
        class="px-3 py-1 rounded-md text-xs font-semibold"
        :class="{
          'bg-green-200 text-green-800': status === 'concluido',
          'bg-yellow-100 text-yellow-700': status === 'pendente',
          'bg-red-100 text-red-700': status === 'cancelado',
        }"
      >
        {{ status.toUpperCase() }}
      </span>
    </div>

    <div class="text-sm text-gray-700 space-y-2">
      <div>
        <span class="font-semibold text-gray-800">Descrição</span><br />
        {{ descricao }}
      </div>
      <div>
        <span class="font-semibold text-gray-800">Tempo de atividade</span><br />
        {{ tempo }}
      </div>
      <div>
        <span class="font-semibold text-gray-800">Data da realização</span><br />
        {{ data }}
      </div>
      <div>
        <span class="font-semibold text-gray-800">Endereço</span><br />
        {{ endereco }}
      </div>
    </div>

    <div v-if="status === 'concluido'" class="pt-2 space-y-4">
      <button
        @click="baixarCertificado"
        class="w-full bg-blue-500 hover:bg-blue-600 font-bold text-lg text-white py-3 px-6 rounded-full transition flex items-center justify-center gap-2"
      >
      <Download class="w-5 h-5" />
      Baixar certificado
    </button>

      <div class="text-center">
        <p class="text-sm text-gray-700">Avalie a instituição!</p>
        <div class="flex justify-center gap-1 mt-1">
          <svg
            v-for="n in 5"
            :key="n"
            @click="avaliar(n)"
            :class="[
              'h-6 w-6 cursor-pointer transition duration-150 ease-in-out',
              n <= selectedRating ? 'text-yellow-400' : 'text-gray-400',
            ]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Download } from 'lucide-vue-next'

const props = defineProps({
  titulo: {
    type: String,
    default: 'EVENTO CORRIDA',
  },
  empresa: {
    type: String,
    default: 'EMPRESA 3',
  },
  status: {
    type: String,
    default: 'concluido',
  },
  descricao: {
    type: String,
    default: 'Descrição breve do que foi realizado no evento',
  },
  tempo: {
    type: String,
    default: '4 HORAS',
  },
  data: {
    type: String,
    default: '03/10/2024',
  },
  endereco: {
    type: String,
    default: 'Avenida - Praça central',
  },
})

const selectedRating = ref(0)

const baixarCertificado = () => {
  alert('Baixar certificado clicado!')
}

const avaliar = (rating) => {
  selectedRating.value = rating
  alert(`Você avaliou com ${rating} estrelas!`)
}
</script>

<style scoped></style>