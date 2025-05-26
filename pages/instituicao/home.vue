<template>home instituicao</template>

<script setup lang="ts">

const { tipoUsuario } = useAuth();

console.log('Usuário em sessão:', tipoUsuario.value);

 definePageMeta({
        middleware: ['auth']
    })
</script>
