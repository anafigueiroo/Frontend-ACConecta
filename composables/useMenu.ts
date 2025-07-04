import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuth } from './useAuth'

export function useMenu() {
  const route = useRoute()
  const { tipoUsuario } = useAuth()

  const menuAluno = [
    { label: 'Home', link: '/aluno/home' },
    { label: 'Histórico de Atividades', link: '/aluno/historico' },
    { label: 'Instituições', link: '/aluno/list-instituicoes' },
     { label: 'Atividades Disponíveis', link: '/aluno/listagem-accs' },
  ]

  const menuInstituicao = [
    { label: 'Home Instituição', link: '/instituicao/home' },
    { label: 'Meus Cadastros', link: '/instituicao/listagem-accs' },
    { label: 'Cadastro de Atividade', link: '/instituicao/cadastrar-acc' },
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