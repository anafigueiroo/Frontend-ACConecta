<template>
 <form>
    <div class="mb-4">
        <label for="nome" class="block text-sm/6 font-medium text-gray-900">Nome</label>
        <div class="mt-2">
            <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-400">
                <input type="nome" name="nome" id="nome" class="block min-w-0 grow py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Informe seu nome"/>
            </div>
        </div>
    </div>
    <div class="mb-4">
        <label for="cpf" class="block text-sm/6 font-medium text-gray-900">CPF</label>
        <div class="mt-2">
            <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-400">
                <input type="cpf" name="cpf" id="cpf" class="block min-w-0 grow py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Informe seu CPF"/>
            </div>
        </div>
    </div>
    <div class="mb-4">
        <label for="email" class="block text-sm/6 font-medium text-gray-900">E-mail</label>
        <div class="mt-2">
        <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-400">
            <input type="email" name="email" id="email" class="block min-w-0 grow py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Informe seu e-mail"/>
        </div>
        </div>
    </div>
    <div class="mb-4">
        <label for="telefone" class="block text-sm/6 font-medium text-gray-900">Telefone</label>
        <div class="mt-2">
        <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-400">
            <input type="telefone" name="telefone" id="telefone" class="block min-w-0 grow py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Informe seu telefone"/>
        </div>
        </div>
    </div>
    
    <div class="mb-4">
    <Listbox as="div" v-model="selected">
    <ListboxLabel class="block text-sm/6 font-medium text-gray-900">Curso</ListboxLabel>
    <div class="relative mt-2">
      <ListboxButton class="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-3.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        <span class="col-start-1 row-start-1 flex items-center gap-3 pr-6">
          <span class="block truncate">{{ selected.name }}</span>
        </span>
        <ChevronUpDownIcon class="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm">
          <ListboxOption as="template" v-for="curso in cursos" :key="curso.id" :value="curso" v-slot="{ active, selected }">
            <li :class="[active ? 'bg-indigo-600 text-white outline-hidden' : 'text-gray-900', 'relative cursor-default py-2 pr-9 pl-3 select-none']">
              <div class="flex items-center">
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{ curso.name }}</span>
              </div>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="size-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
  </div>

    <div class="mb-4">
        <label for="qtd_horas" class="block text-sm/6 font-medium text-gray-900">Horas necessárias</label>
        <div class="mt-2">
        <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-400">
            <input type="qtd_horas" name="qtd_horas" id="qtd_horas" class="block min-w-0 grow py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Informe a quantidade de horas"/>
        </div>
        </div>
    </div>

          <div class="mb-4">
            <label for="password" class="block text-sm/6 font-medium text-gray-900">Senha</label>
            <div class="mt-2">
              <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-400">
                <input type="password" name="password" id="password" class="block min-w-0 grow py-3.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="********"/>
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
          >
            Cadastrar
          </button>

          <p class="text-center text-sm mt-4 text-gray-600">
            Já possui uma conta?
            <NuxtLink to="/public/register" class="text-blue-600 hover:underline">Faça login!</NuxtLink>
          </p>
        </form>
</template>

<script setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { ChevronUpDownIcon } from '@heroicons/vue/16/solid'
import { CheckIcon } from '@heroicons/vue/20/solid'

const cursos = [
  {
    id: 1,
    name: 'Ciências da Computação',
  },
  {
    id: 2,
    name: 'Agronomia',
  },
  {
    id: 3,
    name: 'Ciências contábeis',
  },
  {
    id: 4,
    name: 'Sistemas de Informação',
  },
]

const selected = ref(cursos[0])

function handleSubmit() {
  alert('Aluno cadastrado!')
}

</script>
