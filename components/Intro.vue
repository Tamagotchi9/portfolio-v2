<template>
  <div class="w-full h-screen grid place-items-center">
    <div class="flex items-center gap-x-6 max-w-[1400px]">
      <Avatar id="avatar" size="xl">
        <AvatarImage :src="HeroImage"/>
        <AvatarFallback>DV</AvatarFallback>
      </Avatar>
      <div id="intro-content">
        <div class="font-headline font-bold text-6xl mb-8">Dmytro Voloshko</div>
        <p class="font-headline text-2xl">
          Passionate engineer dedicated to crafting clean, efficient,
          and maintainable code. With a strong focus on continuous learning
          and improvement, I thrive on solving challenges and delivering
          user-centric experiences. My commitment to detail and drive
          for excellence ensure that every project not only meets but exceeds expectations.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarImage, AvatarFallback } from '~/components/ui/avatar'
import HeroImage from '~/assets/images/avatar.jpg'
import { gsap } from 'gsap'

const onMountAnimation = () => {
  gsap.from('#intro-content', { duration: 1, y: -500, opacity: 0  })
  gsap.to('#intro-content', { duration: 1, y: 0, ease: 'power.in', opacity: 1 })
  gsap.from('#avatar', { duration: 1, y: -500, opacity: 0  })
  gsap.to('#avatar', { duration: 1, y: 0, ease: 'power.in', opacity: 1 })
}

onMounted(() => {
  onMountAnimation()
})
</script>

<style scoped>
</style>