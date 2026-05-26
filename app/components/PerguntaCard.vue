<script setup>
const props = defineProps({
  pergunta: Object,
  respostaSelecionada: { type: Number, default: null },
})
const emit = defineEmits(['selecionar'])

const selecionado = ref(null)

watch(() => props.pergunta, () => {
  selecionado.value = null
})

function selecionar(i) {
  if (selecionado.value !== null) return
  selecionado.value = i
  emit('selecionar', i)
}

function classeOpcao(i) {
  if (selecionado.value === null)
    return 'border-2 border-pink-200 bg-white/60 text-pink-900 hover:bg-pink-50 hover:border-pink-400'
  if (i === props.pergunta.correta)
    return 'border-2 border-green-400 bg-green-50 text-green-800'
  if (i === selecionado.value)
    return 'border-2 border-red-300 bg-red-50 text-red-700'
  return 'border-2 border-pink-100 bg-white/30 text-pink-300 opacity-50'
}
</script>

<template>
  <div class="flex flex-col items-center px-6 py-8">

    <!-- coração decorativo -->
    <div class="text-4xl mb-6 animate-pulse">♥</div>

    <!-- pergunta -->
    <p
      class="text-pink-950 text-2xl md:text-3xl font-bold text-center leading-snug mb-10"
      style="font-family: 'Nunito', sans-serif;"
    >
      {{ pergunta.texto }}
    </p>

    <!-- opções -->
    <div class="flex flex-col gap-3 w-full max-w-md">
      <button
      
        v-for="(opcao, i) in pergunta.opcoes"
        :key="i"
        :class="['rounded-2xl px-6 py-4 text-base font-semibold transition-all duration-300 w-full text-left', classeOpcao(i)]"
        style="font-family: 'Nunito', sans-serif;"
        @click="selecionar(i)"
      >
        <span class="mr-3 text-pink-300">{{ ['A', 'B', 'C', 'D'][i] }}.</span>
        {{ opcao }}
      </button>
    </div>

  </div>
</template>