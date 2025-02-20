<template>
  <main id="sections" class="h-full">
    <Intro data-title="Intro"/>
    <Experience data-title="Experience"/>
    <Projects data-title="Pet Projects"/>
  </main>
</template>

<script setup lang="ts">
import Intro from '~/components/Intro.vue'
import Experience from "~/components/Experience.vue"
import Projects from '~/components/Projects.vue'
import { ScrollTrigger } from "gsap/ScrollTrigger"

const sectionTitle = ref<string>('Intro')

const animateSectionTitle = (sections: HTMLCollection | []) => {
  Array.from(sections).forEach((section) => {
    if (section instanceof HTMLElement) {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: 'bottom center',
        onEnter: () => {
          sectionTitle.value = section.dataset.title || ''
        },
        onEnterBack: () => {
          sectionTitle.value = section.dataset.title || ''
        },
      });
    }
  })
}

onMounted(() => {
  const sectionsWrapper = document.getElementById('sections')
  const sections = sectionsWrapper?.children
  if (sections) {
    animateSectionTitle(sections)
  }
})
</script>

<style scoped>

</style>
