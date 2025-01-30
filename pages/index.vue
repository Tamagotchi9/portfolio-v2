<template>
  <SectionTitle :title="sectionTitle"/>
  <main id="sections">
    <Intro data-title="Intro"/>
    <Experience data-title="Experience"/>
  </main>
</template>

<script setup lang="ts">
import Intro from '~/components/Intro.vue'
import Experience from "~/components/Experience.vue"
import SectionTitle from "~/components/SectionTitle.vue";
import { ScrollTrigger } from "gsap/ScrollTrigger"

const sectionTitle = ref<string>('Intro')

const animateSectionTitle = (sections: HTMLCollection | []) => {
  Array.from(sections).forEach((section) => {
    if (section instanceof HTMLElement) {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
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