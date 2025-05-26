export function useAuth() {
  const tipoUsuario = useCookie('tipoUsuario')

  function login(tipo: 'aluno' | 'instituicao') {
    tipoUsuario.value = tipo
  }

  function logout() {
    tipoUsuario.value = null
  }

  return { tipoUsuario, login, logout }
}