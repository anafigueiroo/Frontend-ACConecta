<template>
  <div class="bg-white min-h-screen flex items-center justify-center px-4 py-10">
    <div class="w-full max-w-md text-center">
      <h2 class="text-xl font-semibold text-gray-800 mb-6">Alterar cadastro</h2>

      <form @submit.prevent="alterarDados" class="space-y-5 text-left">

        <div>
          <label for="nome" class="block text-sm font-medium text-gray-900 mb-1">Nome</label>
          <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-blue-400">
            <input type="text" v-model="nome" id="nome" placeholder="Informe seu nome"
              class="w-full py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md" />
          </div>
        </div>

        <div>
          <label for="cpf" class="block text-sm font-medium text-gray-900 mb-1">CPF</label>
          <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-blue-400">
            <input type="text" id="cpf" placeholder="Informe seu CPF"
              class="w-full py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md" />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-900 mb-1">E-mail</label>
          <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-blue-400">
            <input type="email" id="email" placeholder="Informe seu e-mail"
              class="w-full py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md" />
          </div>
        </div>

        <div>
          <label for="telefone" class="block text-sm font-medium text-gray-900 mb-1">Telefone</label>
          <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-blue-400">
            <input type="text" id="telefone" placeholder="Informe seu telefone"
              class="w-full py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md" />
          </div>
        </div>

        <div>
          <Listbox as="div" v-model="selected">
            <ListboxLabel class="block text-sm font-medium text-gray-900 mb-1">Curso</ListboxLabel>
            <div class="relative">
              <ListboxButton
                class="relative w-full cursor-default rounded-md bg-white py-3.5 pl-3 pr-10 text-left text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-blue-400 sm:text-sm">
                <span class="block truncate">{{ selected.name }}</span>
                <ChevronUpDownIcon class="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </ListboxButton>

              <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <ListboxOptions
                  class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 sm:text-sm">
                  <ListboxOption v-for="curso in cursos" :key="curso.id" :value="curso" v-slot="{ active, selected }">
                    <li :class="[active ? 'bg-blue-500 text-white' : 'text-gray-900', 'relative cursor-pointer select-none py-2 pl-3 pr-9']">
                      <span :class="selected ? 'font-semibold' : 'font-normal'" class="block truncate">{{ curso.name }}</span>
                      <span v-if="selected" class="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600">
                        <CheckIcon class="h-5 w-5" />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>

        <div>
          <label for="qtd_horas" class="block text-sm font-medium text-gray-900 mb-1">Horas necessárias</label>
          <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-blue-400">
            <input type="text" id="qtd_horas" placeholder="Informe a quantidade de horas"
              class="w-full py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-md" />
          </div>
        </div>

        <div class="pt-4 space-y-3">
          <button type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-full transition">
            Atualizar
          </button>
          <button type="submit"
            class="w-full border border-blue-400 text-blue-500 font-semibold py-3 rounded-full hover:bg-blue-50 transition">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { ChevronUpDownIcon } from '@heroicons/vue/16/solid'
import { CheckIcon } from '@heroicons/vue/20/solid'

const cursos = [
  { id: 1, name: 'Ciências da Computação' },
  { id: 2, name: 'Agronomia' },
  { id: 3, name: 'Ciências Contábeis' },
  { id: 4, name: 'Sistemas de Informação' },
]

const selected = ref(cursos[0])
const nome = ref('')

const router = useRouter()

function alterarDados() {
      router.push('/aluno/user')
}
</script>