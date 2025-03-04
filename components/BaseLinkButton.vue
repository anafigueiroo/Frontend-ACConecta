<template>
  <a
    :href="href"
    :class="[
      'w-full py-2 rounded-lg font-medium transition duration-200 p-2 m-2 text-center', 
      primary ? 'bg-blue-500 text-white hover:bg-blue-600' : 'border border-blue-500 text-blue-500 hover:bg-blue-100',
      customClass
    ]"
  >
    <slot />
  </a>
</template>

<script setup>
  defineProps({
    primary: Boolean, 
    href: String,   
    customClass: String
  })
</script>
