<template>
  <div class="flex flex-col items-center px-4 py-6 max-w-md mx-auto sm:max-w-lg md:max-w-2xl">
    <div class="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mb-4">
      <IconUser class="w-10 h-10 text-gray-500" />
    </div>

    <div class="text-center mb-6">
      <h2 class="text-lg font-semibold text-gray-800">Instituição</h2>
      <p class="text-sm text-gray-600 underline">empresa@gmail.com</p>
    </div>

    <div class="bg-gray-100 text-sm text-gray-700 p-4 rounded-md w-full mb-6">
      <p class="mb-2"><strong>CNPJ:</strong> xxx.xxx.xxx-xx</p>
      <p class="mb-2"><strong>Telefone:</strong> (49) 98899-9988</p>
    </div>

    <div class="w-full space-y-4 mb-4">
      <NuxtLink to="update-cadastro" class="justify-self-center">
        <button class="grid grid-cols-[1fr_auto] items-center w-full bg-blue-400 text-white py-4 px-4 rounded-full hover:bg-blue-500 mt-4">
          <span class="justify-self-center">Alterar cadastro</span>
          <ArrowRight class="w-5 h-5" />
        </button>
      </NuxtLink>
      <button class="w-full border-2 border-blue-400 text-blue-600 py-4 rounded-full font-semibold hover:bg-blue-50 mt-4">
        Alterar senha
      </button>
    </div>

    <div class="flex justify-between items-center w-full text-sm text-gray-600 mt-4">
      <NuxtLink to="/" class="underline hover:text-red-600">Excluir conta</NuxtLink>
      <button class="flex items-center gap-1 hover:text-red-600" @click="sair">
        <LogOut class="w-4 h-4" />
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
    import { User as IconUser, ArrowRight, LogOut } from 'lucide-vue-next'

    const router = useRouter()
    const { logout } = useAuth()

    function sair() {
    logout()
    router.push('/')
    }
</script>