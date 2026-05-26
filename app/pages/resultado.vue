<script setup lang="ts">
import Header from '~/components/header.vue'

const { pontuacao, totalPerguntas, codigoFinal, reiniciar } = useQuiz()
const router = useRouter()

function jogarNovamente() {
  reiniciar()
  router.push('/')
}

const mensagem = computed(() => {
  const p = pontuacao.value
  if (p === totalPerguntas) return { emoji: '💍', titulo: 'Perfeito!', texto: 'mandou bem!' }
  if (p >= 7)              return { emoji: '💕', titulo: 'Muito amor!', texto: 'Talvez na proxima!' }
  if (p >= 5)              return { emoji: '🌹', titulo: 'Quase lá!', texto: 'Foi quase!' }
  return                          { emoji: '💌', titulo: 'Não deu!', texto: 'Mas o amor supera tudo, né?' }
})
</script>

<template>
  <div>
    <Header />

    <div
      class="min-h-screen flex flex-col items-center justify-center gap-6 px-4 py-10"
      style="background: linear-gradient(160deg, #fff0f5 0%, #ffe4ee 50%, #ffd6e7 100%); font-family: 'Nunito', sans-serif;"
    >

      <!-- título -->
      <div class="text-center">
        <h2 class="text-pink-900 text-3xl font-bold mb-1">Resultado</h2>
        <p class="text-pink-500 text-sm font-medium w-72 mx-auto leading-relaxed">
          Tira print dessa tela e nos mande no Instagram para participar dos sorteios!
        </p>
      </div>

      <!-- card principal -->
      <div
        class="w-full max-w-md rounded-3xl shadow-xl px-8 py-10 flex flex-col items-center gap-6"
        style="background: rgba(255,255,255,0.80); backdrop-filter: blur(12px); border: 1px solid rgba(255,182,193,0.4);"
      >

        <!-- emoji + mensagem -->
        <div class="text-6xl animate-bounce">{{ mensagem.emoji }}</div>
        <div class="text-center">
          <p class="text-pink-800 text-2xl font-bold">{{ mensagem.titulo }}</p>
          <p class="text-pink-500 text-sm mt-1">{{ mensagem.texto }}</p>
        </div>

        <!-- pontuação -->
        <div class="flex items-end gap-2">
          <span class="text-6xl font-bold text-pink-500" style="font-family: 'Inter', sans-serif;">
            {{ pontuacao }}
          </span>
          <span class="text-2xl text-pink-300 mb-2 font-medium">/ {{ totalPerguntas }}</span>
        </div>

        <!-- barra de acertos -->
        <div class="w-full h-3 bg-pink-100 rounded-full overflow-hidden">
          <div
            class="h-3 rounded-full transition-all duration-700"
            style="background: linear-gradient(90deg, #f472b6, #e11d48);"
            :style="{ width: ((pontuacao / totalPerguntas) * 100) + '%' }"
          />
        </div>

        <!-- divisor -->
        <div class="w-full border-t border-pink-100" />

        <!-- código especial -->
        <div class="flex flex-col items-center gap-1">
          <span class="text-pink-400 text-xs font-semibold uppercase tracking-widest">Seu código especial</span>
          <span
            class="text-2xl font-bold tracking-[0.2em] text-pink-800 bg-pink-50 border border-pink-200 rounded-2xl px-6 py-3"
            style="font-family: 'Inter', sans-serif;"
          >
            {{ codigoFinal }}
          </span>
        </div>

      </div>

      <!-- botão tentar novamente -->
      <button
        class="px-10 py-4 rounded-full text-white font-bold text-base shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
        style="background: linear-gradient(135deg, #f472b6, #e11d48);"
        @click="jogarNovamente"
      >
        Tentar novamente 🔁
      </button>

    </div>
  </div>
</template>