<template>
  <div id="experience">
    <div class="container">
      <Card
        :id="`card${idx}`"
        v-for="(card, idx) in cards"
        :key="idx"
        class="w-2/4 mb-5 last:mb-0"
      >
        <CardHeader>
          <CardTitle>{{ card.title }}</CardTitle>
          <CardDescription>{{ card.period }}</CardDescription>
        </CardHeader>
        <CardContent>
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
  </div>
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

const { $gsap } = useNuxtApp()

const cards = [
  {
    title: 'Frontend Developer at Checkbox',
    period: '2022 October - present',
    description: `<p>
        Developed from scratch a frontend of <a class="underline" href="https://my.dubidoc.com.ua">Dubidoc project (Ukrainian e-document management service)</a>
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
    description: `<p>Developed and styled interactive web pages for e-health HARTMANN ecommerce platform. Built many sections of product like checkout, shopping cart, refactored code for readability and reduced components dependencies.</p>`,
    technologies: ['Vue 2', 'Vuex', 'Bootstrap 4', 'Storybook', 'VeeValidate', 'JavaScript'],
  },
  {
    title: 'Frontend Developer at Beyond',
    period: '2022 October - present',
    description: `<p>Built customize UI pages for SaaS e-gaming platform, solving unusual tasks, handling data in Vuex, built generic components for future use-cases.</p>`,
    technologies: ['Vue 2', 'Vuex', 'JavaScript'],
  }
]

onMounted(() => {
  $gsap.fromTo('#card0', { x: 0 }, { scrollTrigger: '#experience', duration: 1, x: '100%', ease: 'none'})
  $gsap.fromTo('#card1', { x: '100%' }, { scrollTrigger: '#experience', ease: 'none', duration: 1, x: 0 })
  $gsap.fromTo('#card2', { x: 0 }, { scrollTrigger: '#experience', duration: 1, x: '100%', ease: 'none'})
})

</script>

<style scoped>

</style>