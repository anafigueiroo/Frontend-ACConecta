export default defineNuxtRouteMiddleware((to) => {
  const tipoUsuario = useCookie('tipoUsuario');

  if (!tipoUsuario.value) {
    return navigateTo('/');
  }

  if (tipoUsuario.value === 'aluno' && to.path.startsWith('/instituicao')) {
    return navigateTo('/unauthorized');
  }

  if (tipoUsuario.value === 'instituicao' && to.path.startsWith('/aluno')) {
    return navigateTo('/unauthorized');
  }
})
