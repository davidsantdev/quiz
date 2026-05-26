<script setup lang="ts">
import Header from '~/components/header.vue';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { Gift, Play, Sparkle, Trophy } from '@lucide/vue';
</script>



<template>
    <div  class=" flex-col h-400">
        <Header/>
        <div class="flex flex-col gap-2 justify-center items-center">
            <div >
                 <DotLottieVue class="md:w-[400px] md:h-[400px] h-[250px] w-[250px]" autoplay loop src="https://lottie.host/1ff55b23-2657-4d76-b039-54dde3118d39/uT6MfA96cq.lottie" />

            </div>


        


            
            <h1 class="text-gray-900 md:text-[70px] text-[40px] md:leading-15 leading-10 text-center" style="font-family: 'Nunito', sans-serif; font-weight: 1000;">
                Complete o quiz e  ganhe um <span class="text-pink-500">premio</span> 
            </h1>

            <p class="text-gray-500 w-[80%] text-center m-5"  style="font-family: 'inter', sans-serif; font-weight: 500;">
                Os primeiros ganhadores que mandarem sua pontuação em nosso instagram estarão recebendo um vale compras
            </p>


<div class="flex gap-0 rounded-2xl overflow-hidden shadow-xl shadow-pink-100 border border-pink-100">
  <!-- Item 1 -->
  <div class="flex-1 flex flex-col items-center gap-3 px-5 py-6 bg-white border-r border-pink-100 hover:bg-pink-50 transition-colors duration-200">
    <div class="bg-gradient-to-br from-pink-100 to-pink-200 w-14 h-14 rounded-2xl flex justify-center items-center shadow-sm">
      <Trophy :size="26" class="text-pink-600" />
    </div>
    <div class="text-center">
      <h3 class="text-gray-900 font-semibold text-sm leading-snug">Participe grátis</h3>
      <p class="text-gray-400 text-xs mt-0.5 leading-relaxed">Rápido, fácil e divertido!</p>
    </div>
  </div>

  <!-- Item 2 -->
  <div class="flex-1 flex flex-col items-center gap-3 px-5 py-6 bg-white border-r border-pink-100 hover:bg-pink-50 transition-colors duration-200">
    <div class="bg-gradient-to-br from-pink-100 to-pink-200 w-14 h-14 rounded-2xl flex justify-center items-center shadow-sm">
      <Gift :size="26" class="text-pink-600" />
    </div>
    <div class="text-center">
      <h3 class="text-gray-900 font-semibold text-sm leading-snug">Ganhe prêmios</h3>
      <p class="text-gray-400 text-xs mt-0.5 leading-relaxed">Os primeiros a pontuar<br>e postar no Instagram levam!</p>
    </div>
  </div>

  <!-- Item 3 -->
  <div class="flex-1 flex flex-col items-center gap-3 px-5 py-6 bg-white hover:bg-pink-50 transition-colors duration-200">
    <div class="bg-gradient-to-br from-pink-100 to-pink-200 w-14 h-14 rounded-2xl flex justify-center items-center shadow-sm">
      <Sparkle :size="26" class="text-pink-600" />
    </div>
    <div class="text-center">
      <h3 class="text-gray-900 font-semibold text-sm leading-snug">Mostre que sabe!</h3>
      <p class="text-gray-400 text-xs mt-0.5 leading-relaxed">Responda e conquiste!</p>
    </div>
  </div>
</div>

          <NuxtLink to="/quiz" class="group mt-10 relative flex items-center gap-3 bg-pink-500 hover:bg-pink-600 active:scale-95 transition-all duration-200 rounded-2xl px-6 py-3.5 shadow-lg shadow-pink-200 cursor-pointer">
  <span class="bg-white/20 group-hover:bg-white/30 transition-colors duration-200 rounded-xl h-10 w-10 flex justify-center items-center shrink-0">
    <Play :size="18" class="text-white translate-x-0.5" />
  </span>
  <span class="text-white font-semibold text-lg tracking-wide">Começar Quiz</span>
</NuxtLink>
        
            
        </div>
        
    </div>
</template>

