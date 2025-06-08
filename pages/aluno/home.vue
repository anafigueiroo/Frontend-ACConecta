<template>
  <div class="flex flex-col justify-center items-center m-5">
    <h1 class="text-xl font-semibold text-gray-800">
      Seja bem-vindo(a), {{ nomeUsuario ? nomeUsuario : 'Carregando...' }}!
    </h1>
  </div>
  <div class="flex justify-center items-center p-4">
    <div class="bg-white rounded-2xl shadow-md p-5 w-full max-w-xs sm:max-w-sm md:max-w-md">
      <h2 class="text-gray-800 font-bold text-lg">Horas concluídas</h2>
      <p class="text-blue-500 text-sm">Percentual de horas realizadas</p>

      <div class="relative w-full aspect-square max-w-[220px] mx-auto">
        <Doughnut :data="data" :options="options" />
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-2xl font-bold text-gray-800 drop-shadow">72%</div>
        </div>
      </div>

      <p class="text-center text-gray-400 text-xs">*Dashboard não interativo</p>
    </div>
  </div>
</template>

<script setup lang="ts"> 
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController
} from 'chart.js'
import { Doughnut } from 'vue-chartjs';
import { onMounted, ref } from 'vue'

ChartJS.register(ArcElement, Tooltip, Legend, DoughnutController)

const data = {
  labels: ['Concluída', 'Pendente'],
  datasets: [{
    data: [72, 28],
    backgroundColor: ['#A3D9B1', '#4A90E2'],
    borderWidth: 0
  }]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '60%',
  plugins: {
    legend: { display: false },
  }
}

const tipoUsuario = ref('')
const nomeUsuario = ref('')

onMounted(() => {
  const auth = useAuth()
  tipoUsuario.value = auth.tipoUsuario.value ?? ''
  nomeUsuario.value = auth.nomeUsuario.value ?? ''
})

console.log('Usuário em sessão:', tipoUsuario.value)
console.log('Usuário em sessão:', nomeUsuario.value)

definePageMeta({
  middleware: ['auth']
})
</script>