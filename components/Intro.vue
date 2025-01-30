<template>
  <div id="intro" class="w-full h-screen grid place-items-center py-20">
    <div class="flex items-center gap-x-6 max-w-[1400px]">
      <div id="avatar" class="max-w-lg w-full h-full border border-black rounded-lg p-4">
        <img class="max-w-full h-auto" :src="HeroImage" alt="Hero image">
      </div>
      <div id="intro-content">
        <div class="font-headline font-bold text-5xl mb-8 intro__title">{{ typedTitle }}</div>
        <p class="font-headline text-2xl">
          Passionate engineer dedicated to crafting clean, efficient,
          and maintainable code. With a strong focus on continuous learning
          and improvement, I thrive on solving challenges and delivering
          user-centric experiences. My commitment to detail and drive
          for excellence ensure that every project not only meets but exceeds expectations.
        </p>
      </div>
    </div>
    <div id="slide-arrow-block" class="absolute left-1/2 bottom-[25px] z-[1] transform -translate-x-1/2 flex flex-col items-center">
      <img id="slide-arrow" class="max-w-[64px]" :src="ArrowDown" alt="Scroll down arrow">
      <div class="order-2">Scroll down</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroImage from '~/assets/images/avatar.jpg'
import ArrowDown  from '~/assets/images/svg/arrow-down.svg'
const { $gsap } = useNuxtApp()

const onMountAnimation = () => {
  $gsap.from('#intro-content', { duration: 1, y: -500, opacity: 0  })
  $gsap.to('#intro-content', { duration: 1, y: 0, ease: 'power.in', opacity: 1 })
  $gsap.from('#avatar', { duration: 1, y: -500, opacity: 0  })
  $gsap.to('#avatar', { duration: 1, y: 0, ease: 'power.in', opacity: 1 })
  $gsap.to('#slide-arrow', { y: -50, repeat: -1, yoyo: true })
  $gsap.to('#slide-arrow-block', {
    scrollTrigger: {
      trigger: '#experience',
      start: 'top center'
    },
    opacity: 0
  })
  startTextAnimation(0)
}

const typedTitle = ref<string>('')
const title = 'Hello, my name is Dmytro Voloshko! I\'m Frontend Developer'

const typeWriter = (text: string, i: number, fnCallback: Function) => {
  if (i < (text.length)) {
    typedTitle.value += text.substring(0, i+1)

    setTimeout(function() {
      typeWriter(text, i + 1, fnCallback)
    }, 100);
  } else if (typeof fnCallback === 'function') {
    setTimeout(fnCallback, 0);
  }
}
const startTextAnimation = (i: number) => {
  if (typeof title[i] === 'undefined') {
    setTimeout(function() {
      typedTitle.value = ''
      startTextAnimation(0);
    }, 10000);
  }
  if (title[i]) {
    typeWriter(title[i], 0, function(){
      startTextAnimation(i + 1);
    });
  }
}

onMounted(() => {
  onMountAnimation()
})
</script>

<style>
.intro__title {
  border-right: 5px solid #8F257D;
  animation:
    typing 2s steps(40, end) infinite,
    blink-caret .75s step-end infinite;
}
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #8F257D; }
}
</style>