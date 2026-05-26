<script setup lang="ts">
const { perguntaAtual, indiceAtual, totalPerguntas,
        respostas, finalizado, responder, avancar } = useQuiz()

const router = useRouter()

const respostaAtual = computed(
  () => respostas.value[indiceAtual.value] ?? null
)

const progresso = computed(
  () => ((indiceAtual.value / totalPerguntas) * 100).toFixed(0)
)

function avancarOuFinalizar() {
  if (finalizado.value) {
    router.push('/resultado')
  } else {
    avancar()
  }
}
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center px-4 py-10"
    style="background: linear-gradient(160deg, #fff0f5 0%, #ffe4ee 50%, #ffd6e7 100%); font-family: 'Nunito', sans-serif;"
  >

    <!-- header -->
    <div class="w-full max-w-md mb-6">
      <div class="flex justify-between items-center mb-2">
        <span class="text-pink-400 text-sm font-semibold">Pergunta {{ indiceAtual + 1 }} de {{ totalPerguntas }}</span>
        <span class="text-pink-300 text-sm">{{ progresso }}%</span>
      </div>

      <!-- barra de progresso -->
      <div class="w-full h-2 bg-pink-100 rounded-full overflow-hidden">
        <div
          class="h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full transition-all duration-500"
          :style="{ width: progresso + '%' }"
        />
      </div>
    </div>

    <!-- card principal -->
    <div
      class="w-full max-w-md rounded-3xl shadow-xl overflow-hidden"
      style="background: rgba(255,255,255,0.75); backdrop-filter: blur(12px); border: 1px solid rgba(255,182,193,0.4);"
    >
      <PerguntaCard
        :pergunta="perguntaAtual"
        :resposta-selecionada="respostaAtual"
        @selecionar="responder"
      />
    </div>

    <!-- botão próxima -->
    <transition name="fade">
      <button
        v-if="respostaAtual !== null"
        class="mt-8 px-10 py-4 rounded-full text-white font-bold text-base shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
        style="background: linear-gradient(135deg, #f472b6, #e11d48);"
        @click="avancarOuFinalizar"
      >
        {{ finalizado ? '💌 Ver resultado' : 'Próxima →' }}
      </button>
    </transition>

  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>