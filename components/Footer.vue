<template>
  <footer class="border-t-2 border-gray p-5">
    <div class="container">
      <div class="flex items-center justify-between">
        <div>
          <Button variant="link" @click="goToSection('intro')">Intro</Button>
          <Button variant="link" @click="goToSection('experience')">Experience</Button>
          <Button variant="link" @click="goToSection('projects')">Projects</Button>
        </div>
        <div class="flex items-center gap-x-5">
          <a href="https://www.linkedin.com/in/dima-voloshko-660922130/" target="_blank">
            <img class="w-[32px]" :src="Linkedin" alt="linkedin icon">
          </a>
          <a href="https://github.com/Tamagotchi9" target="_blank">
            <img class="w-[32px]" :src="Github" alt="github icon">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Button } from '~/components/ui/button'
import Linkedin from "~/assets/images/svg/linkedin.svg";
import Github from "~/assets/images/svg/github.svg";

const goToSection = (sectionName: string) => {
  const section = document.getElementById(sectionName)
  section?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>

</style>
