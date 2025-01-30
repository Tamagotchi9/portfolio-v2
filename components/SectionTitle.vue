<template>
  <div class="fixed top-1/2 left-0 -rotate-90">
    <p id="section-title" class="min-w-[500px] h-full font-headline text-3xl text-center italic">&lt;section&gt;{{title}}&lt;/section&gt;</p>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

const animateTitle = () => {
  $gsap.fromTo('#section-title', { opacity: 0, skewX: 80 }, { opacity: 1, skewX: 0, ease: 'power1.in' })
}

watch(() => props.title, () => {
  animateTitle()
})

</script>

<style scoped></style>