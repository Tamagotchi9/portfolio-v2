<template>
  <section class="w-full grid place-items-center py-[100px]">
    <div class="container">
      <h2 class="font-headline font-bold text-5xl text-center mb-[80px]">Projects</h2>
      <div class="grid grid-cols-3 gap-4">
        <Card
          v-for="(card, idx) in projectCards"
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

</script>

<style scoped>

</style>
