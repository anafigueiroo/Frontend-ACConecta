<template>
  <div class="flex flex-col justify-center items-center m-5">
    <h1 class="text-xl font-semibold mb-4 text-gray-800 mb-5">
      Seja bem-vindo(a), {{ nomeUsuario ? nomeUsuario : 'Carregando...' }}!
    </h1>
  <div class="relative w-[250px] h-[250px]">
    <Doughnut :data="data" :options="options" />
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-2xl font-bold">72%</div>
    </div>
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