import { perguntas } from './perguntas'

export function useQuiz() {
  const indiceAtual = useState('quiz:indice', () => 0)
  const respostas = useState<number[]>('quiz:respostas', () => [])

  const perguntaAtual = computed(() => perguntas[indiceAtual.value])
  const totalPerguntas = perguntas.length

 const pontuacao = computed(() =>
  respostas.value.filter((r, i) => r === perguntas[i]?.correta).length
)

  const codigoFinal = computed(() => {
    const base = btoa(`quiz:${pontuacao.value}/${totalPerguntas}`)
    return base.slice(0, 8).toUpperCase()
  })

  const finalizado = computed(
    () => respostas.value.length === totalPerguntas
  )

  function responder(indice: number) {
    if (respostas.value[indiceAtual.value] !== undefined) return
    respostas.value[indiceAtual.value] = indice
  }

  function avancar() {
    if (indiceAtual.value < totalPerguntas - 1) {
      indiceAtual.value++
    }
  }

  function reiniciar() {
    indiceAtual.value = 0
    respostas.value = []
  }

  return {
    perguntaAtual, totalPerguntas, indiceAtual,
    respostas, pontuacao, codigoFinal,
    finalizado, responder, avancar, reiniciar,
  }
}