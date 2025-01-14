<script setup lang="ts">
import { type ProjectCar } from '../../types'

const route = useRoute()

const query = groq`*[_type == "projectCar" && slug.current == $slug][0]`
const { data: project } = await useSanityQuery<ProjectCar>(query, {
  slug: route.params.slug,
})
</script>

<template>
  <section v-if="project !== null" class="hero-container">
    <div class="hero-content">
      <div class="hero-text-content">
        <h1 class="hero-title">{{ project.title }}</h1>
        <p class="hero-text">{{ project.heroText }}</p>
        <p v-if="project.projectStarted">
          Projekti aloitettu: {{ new Date(project.projectStarted).toLocaleDateString('fi-FI') }}
        </p>
        <p v-if="project.owner">Omistaja: {{ project.owner }}</p>
        <p v-if="project.make">Merkki: {{ project.make }}</p>
        <p v-if="project.model">Malli: {{ project.model }}</p>
        <p v-if="project.year">Vuosi: {{ project.year }}</p>
        <p v-if="project.engine">Moottori: {{ project.engine }}</p>  
      </div>
      <div class="hero-image" v-if="project.heroImage">
        <img :src="urlFor(project.heroImage).height(500).url()" :alt="project.title" />
      </div>
    </div>
  </section>
  <section v-if="project !== null" class="container">
    <div v-if="project.body">
      <SanityContent :blocks="project.body" />
    </div>
    <h2 v-if="project.photos.length">Kuvia projektista:</h2>
    <div v-if="project.photos.length" class="photo-gallery">
      <photoCard v-for="photo in project.photos" :key="photo.photo._id" :imageWithText="photo" />
    </div>
    
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 128px;
  color: white;
}
.hero-content {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 64px;
}

.hero-text-content {
  flex: 1;
}

.hero-image img {
  border-radius: 8px;
}

.hero-title {
  font-size: var(--font-size-10);
  margin-bottom: 16px;
}

.hero-text {
  font-size: var(--font-size-6);
  margin: 8px 0px;
}

.photo-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
}
</style>
