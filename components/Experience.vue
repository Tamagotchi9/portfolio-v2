<template>
  <section id="experience" class="w-full grid place-items-center py-20">
    <div class="container">
      <h2 class="font-headline font-bold text-5xl text-center mb-[80px]">Experience</h2>
      <Card
        :id="`card${idx}`"
        v-for="(card, idx) in cards"
        :key="idx"
        class="w-2/4 mb-5 last:mb-0 hover:drop-shadow-lg relative"
      >
        <CardHeader>
          <CardTitle>{{ card.title }}</CardTitle>
          <CardDescription>{{ card.period }}</CardDescription>
        </CardHeader>
        <CardContent>
          <img v-if="idx === 1 && isAnimationFinished" :src="Arrow" alt="arrow" class="max-w-[200px] h-auto absolute -right-[180px] bottom-[55px]">
          <img v-if="idx === 2 && isAnimationFinished" :src="CurlyArrow" alt="curly arrow" class="max-w-[150px] h-auto absolute -left-[155px] bottom-[70px] rotate-180">
          <div v-html="card.description"></div>
        </CardContent>
        <CardFooter>
          <Badge
            v-for="(badge, idx) in card.technologies"
            :key="idx"
            class="mr-1 last:mr-0"
          >{{badge}}</Badge>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '~/components/ui/card'
import { Badge } from "~/components/ui/badge";
import CurlyArrow from '~/assets/images/curly-arrow.png'
import Arrow from '~/assets/images/arrow.png'

const { $gsap } = useNuxtApp()

const cards = [
  {
    title: 'Frontend Developer at Checkbox',
    period: '2022 October - present',
    description: `<p>
        Developed from scratch a frontend of <a class="underline" href="https://my.dubidoc.com.ua" target="_blank">Dubidoc project (Ukrainian e-document management service)</a>
for more than 20,000 active users. Delivered a bunch of features from simple CRUD pages to PDF generation/rendering in web,
    creating widget for client integrations.
    Accomplished features caveats like PDF manipulating, frontend optimizations.
    Migrated project from Nuxt 2 to Nuxt 3.
</p>`,
    technologies: ['Nuxt 2-3', 'Vuex', 'VuexORM', 'Pinia', 'Vuetify 2-3', 'VeeValidate', 'JavaScript'],
  },
  {
    title: 'Frontend Developer at Valtech',
    period: '2021 September - 2022 October',
    description: `<p>Developed and styled interactive web pages for <a class="underline" href="https://www.hartmann.info/de-de/" target="_blank">e-health HARTMANN ecommerce platform</a>. Built many sections of product like checkout, shopping cart, refactored code for readability and reduced components dependencies.</p>`,
    technologies: ['Vue 2', 'Vuex', 'Bootstrap 4', 'Storybook', 'VeeValidate', 'JavaScript'],
  },
  {
    title: 'Frontend Developer at Beyond',
    period: '2022 October - present',
    description: `<p>Built customize UI pages for SaaS e-gaming platform, solving unusual tasks, handling data in Vuex, built generic components for future use-cases.</p>`,
    technologies: ['Vue 2', 'Vuex', 'JavaScript'],
  }
]

const isAnimationFinished = ref(false)
const animateCards = () => {
  $gsap.fromTo('#card0', { x: 0 }, { scrollTrigger: {
      trigger: '#experience',
      start: 'top center'
    }, duration: 1, x: '100%', ease: 'none' })
  $gsap.fromTo('#card1', { x: '100%' }, { scrollTrigger: {
      trigger: '#experience',
      start: 'top center'
    }, ease: 'none', duration: 1, x: 0 })
  $gsap.fromTo('#card2', { x: 0 }, { scrollTrigger: {
      trigger: '#experience',
      start: 'top center'
    }, duration: 1, x: '100%', ease: 'none', onComplete: () => { isAnimationFinished.value = true } })
}

onMounted(() => {
  animateCards()
})

</script>

<style scoped>

</style>
