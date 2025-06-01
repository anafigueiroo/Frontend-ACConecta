export function useAuth() {
  const tipoUsuario = useCookie('tipoUsuario', {
    path: '/',
    maxAge: 30 * 60,
    sameSite: 'lax',
    secure: false
  });

  const nomeUsuario = useCookie('nomeUsuario', {
    path: '/',
    maxAge: 30 * 60,
    sameSite: 'lax',
    secure: false
  });

  function login(tipo: 'aluno' | 'instituicao', nome: string) {
    tipoUsuario.value = tipo;
    nomeUsuario.value = nome;
  }

  function logout() {
    tipoUsuario.value = null;
    nomeUsuario.value = null;
  }

  return { tipoUsuario, nomeUsuario, login, logout }
}
