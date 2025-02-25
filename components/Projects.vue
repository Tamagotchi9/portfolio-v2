<template>
  <section id="projects" class="w-full grid place-items-center py-5 md:py-10 xl:py-20">
    <div class="container">
      <h2 class="font-headline font-bold text-2xl md:text-3xl xl:text-5xl text-center mb-[20px] md:mb-[40px] xl:mb-[80px]">Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Card
          v-for="(card, idx) in projectCards"
          :id="`projectCard${idx}`"
          :key="idx"
          @click="navigateTo(card.link, { external: true, open: { target: '_blank' } })"
          class="cursor-pointer hover:drop-shadow-lg"
        >
          <CardHeader>
            <img :src="card.image" alt="">
          </CardHeader>
          <CardContent>
            <CardTitle class="mb-5">{{ card.name }}</CardTitle>
            <CardDescription>{{ card.description }}</CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import meetupsThumbnail from '@/assets/images/meetups.png'
import cryptoThumbnail from '@/assets/images/cryptonomicon.png'
import kanbanThumbnail from '@/assets/images/kanban-board.png'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '~/components/ui/card'
import { useResponsive } from '~/composables/useResponsive'

const { $gsap } = useNuxtApp()

const { xlDevice } = useResponsive()

const projectCards = [
  {
    name: 'Meetups service',
    description:
        'Web app for planning offline meetups. View meetups, create meetups, join meetups, detailed information and meetup agenda. Authentication, calendar view of meetups and more.',
    image: meetupsThumbnail,
    link: 'https://meetup-service.netlify.app/'
  },
  {
    name: 'Crypto dashboard',
    description: 'Crypto dashboard - check cryptocurrencies prices in real time.',
    image: cryptoThumbnail,
    link: 'https://leafy-valkyrie-e1ccfa.netlify.app/'
  },
  {
    name: 'Kanban board',
    description: 'Kanban board - simple scrum board to plan sprints with your team!',
    image: kanbanThumbnail,
    link: 'https://kanban-board123.netlify.app/'
  }
]

const animateCards = () => {
  $gsap.fromTo('#projectCard0', { y: 400, opacity: 0 }, { scrollTrigger: {
      trigger: '#projects',
    }, duration: 1, y: 0, opacity: 1, ease: 'power1.in' })
  $gsap.fromTo('#projectCard1', { y: 400, opacity: 0 }, { scrollTrigger: {
      trigger: '#projects',
    }, duration: 1, y: 0, opacity: 1, ease: 'power1.in' })
  $gsap.fromTo('#projectCard2', { y: 400, opacity: 0 }, { scrollTrigger: {
      trigger: '#projects',
    }, duration: 1, y: 0, opacity: 1, ease: 'power1.in' })
}

onMounted(() => {
  if (xlDevice) {
    animateCards()
  }
})

</script>

<style scoped>

</style>
