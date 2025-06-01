import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuth } from './useAuth'

export function useMenu() {
  const route = useRoute()
  const { tipoUsuario } = useAuth()

  const menuAluno = [
    { label: 'Home', link: '/aluno/home' },
    { label: 'Histórico de Atividades', link: '/aluno/home' },
    { label: 'Instituições', link: '/aluno/home' },
     { label: 'Atividades disponíveis', link: '/aluno/home' },
  ]

  const menuInstituicao = [
    { label: 'Home Instituição', link: '/instituicao/home' },
    { label: 'Gerenciar Cursos', link: '/instituicao/home' },
  ]

  const rotasSemMenu = ['/', '/unauthorized', '/public/register']

  const mostrarMenu = computed(() => {
    return !!tipoUsuario.value && !rotasSemMenu.includes(route.path)
  })

  const menuItems = computed(() => {
    if (tipoUsuario.value === 'aluno') return menuAluno
    if (tipoUsuario.value === 'instituicao') return menuInstituicao
    return []
  })

  return { mostrarMenu, menuItems }
}