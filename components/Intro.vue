<template>
  <section id="intro" class="w-full h-full lg:h-screen grid xl:place-items-center py-5 md:py-10 xl:py-20 overflow-hidden">
    <div v-show="readyToAnimate" class="container">
      <div class="flex items-start xl:items-center flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-10">
        <div id="avatar" class="w-full md:w-1/2 xl:max-w-lg h-full">
          <img class="max-w-full h-auto rounded-lg" :src="HeroImage" alt="Hero image">
        </div>
        <div id="intro-content" class="w-full md:w-1/2">
          <h1 class="font-headline font-bold text-3xl xl:text-5xl  mb-4 xl:mb-8">
            Hello, I'm <br/>
            <span class="border-r-[6px] border-black animate-typing-effect">{{ typedTitle }}</span>
          </h1>
          <p class="font-headline text-md xl:text-2xl max-w-[500px]">
            Passionate engineer who keeps make your frontend better.
          </p>
        </div>
      </div>
    </div>
    <div id="slide-arrow-block" class="absolute left-1/2 bottom-0 xl:bottom-[25px] z-[1] transform -translate-x-1/2 flex flex-col items-center">
      <img id="slide-arrow" class="max-w-[32px] lg:max-w-[64px]" :src="ArrowDown" alt="Scroll down arrow">
      <div class="order-2">Scroll down</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroImage from '~/assets/images/avatar.jpg'
import ArrowDown  from '~/assets/images/svg/arrow-down.svg'
const { $gsap } = useNuxtApp()

const onMountAnimation = () => {
  readyToAnimate.value = true
  $gsap.from('#intro-content', { duration: 1, y: 1500, opacity: 0  })
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

const readyToAnimate = ref<boolean>(false)
const typedTitle = ref<string>('')
const titles = ['Dmytro Voloshko', 'Frontend developer', 'Ukrainian', 'Cat lover']
let isReversed = false

const typeWriter = (text: string, i: number, fnCallback: Function) => {
  if (!isReversed && i < text.length) {
    typedTitle.value = text.substring(0, i + 1)

    setTimeout(function() {
      typeWriter(text, i + 1, fnCallback)
    }, 150);
  } else if ((i === text.length || isReversed) && i !== 0) {
    isReversed = true
    if (i === text.length) {
      setTimeout(() => {
        typedTitle.value = text.substring(0, i - 1)

        setTimeout(function() {
          typeWriter(text, i - 1, fnCallback)
        }, 100);
      }, 2000)
    } else {
      typedTitle.value = text.substring(0, i - 1)

      setTimeout(function() {
        typeWriter(text, i - 1, fnCallback)
      }, 100);
    }
  } else if (typeof fnCallback === 'function') {
    fnCallback()
  }
}
const startTextAnimation = (i: number) => {
  if (typeof titles[i] === 'undefined') {
    startTextAnimation(0);
  }
  if (i < titles[i]?.length) {
    typeWriter(titles[i], 0, function() {
      isReversed = false
      startTextAnimation(i + 1);
    });
  }
}

onMounted(() => {
  onMountAnimation()
})
</script>

<style scoped>
</style>
