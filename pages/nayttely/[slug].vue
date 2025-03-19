<script setup lang="ts">
import { type ProjectCar } from '../../types'

const route = useRoute()

const query = groq`*[_type == "projectCar" && slug.current == $slug][0]`

const { data: project } = await useSanityQuery<ProjectCar>(query, {
  slug: route.params.slug,
})

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}

const description = project.value.body ? portableTextToPlainText(project.value.body) : undefined

useSeoMeta({
  title: project.value.title ? `${project.value.title} projekti - Teekkarien Autokerho` : undefined,
  ogTitle: project.value.title ? `${project.value.title} projekti - Teekkarien Autokerho` : undefined,
  ogDescription: description ?? project.value.heroText,
  ogImage: project.value.heroImage ? `${urlFor(project.value.heroImage).width(1200).url()}`: undefined,
  ogLocale: "fi_FI",
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="content">
    <div v-if="project !== null" class="breadcrumbs">
      <a class="breadcrumb" href="/nayttely">← takaisin listaan</a>
    </div>
    <section v-if="project !== null" class="hero-container">
      <div class="hero-content">
        <div class="hero-text-content">
          <h1 class="hero-title">{{ project.title }}</h1>
          <p class="hero-text">{{ project.heroText }}</p>
          <p class="hero-text" v-if="project.projectStarted">
            Projekti aloitettu: {{ new Date(project.projectStarted).toLocaleDateString('fi-FI') }}
          </p>
          <p class="hero-text" v-if="project.owner">Omistaja: {{ project.owner }}</p>
          <p class="hero-text" v-if="project.make">Merkki: {{ project.make }}</p>
          <p class="hero-text" v-if="project.model">Malli: {{ project.model }}</p>
          <p class="hero-text" v-if="project.year">Vuosi: {{ project.year }}</p>
          <p class="hero-text" v-if="project.engine">Moottori: {{ project.engine }}</p>  
        </div>
        <div class="hero-image" v-if="project.heroImage">
          <img :src="urlFor(project.heroImage).height(1000).url()" :alt="project.title" />
        </div>
      </div>
    </section>
    <section v-if="project !== null" class="container">
      <div v-if="project.body">
        <CustomSanityContent :blocks="project.body" />
      </div>
      <h2 v-if="project.photos.length">Kuvia projektista:</h2>
      <div v-if="project.photos.length" class="photo-gallery">
        <photoCard v-for="photo in project.photos" :key='photo.photo?._id' :imageWithText="photo" />
      </div>  
    </section>
  </div>
</template>

<style scoped>
.breadcrumbs {
  margin: 16px 16px 0;
  
  @media (min-width: 575px) {
    margin: 32px 32px 0;
  }
  @media (min-width: 1300px) {
    margin: 32px 64px 0;
  }
}

.breadcrumb {
  padding: 4px;
  color: var(--primary-red);
  text-decoration: none;
  font-size: 14px;

  @media (min-width: 1300px) {
    font-size: 16px;
  }
}

.content {
  display: flex;
  flex-direction: column;
  background-color: var(--black-background);
  color: var(--white-text);
}

.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--white-text);
}
.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px;
  color: var(--white-text);
}
.hero-content {
  display: flex;
  flex-direction: column-reverse;
  align-items: start;
  justify-content: space-between;
  gap: 32px;

  @media (min-width: 575px) {
    flex-direction: row;
    gap: 64px;
  }
}

.hero-text-content {
  flex: 2;
}
.hero-image {
  flex: 3;
}

.hero-image img {
  border-radius: 4px;
  width: 100%;
  max-height: 500px;
  object-fit: cover;

  @media (min-width: 575px) {
    border-radius: 8px;
    width: none;
  }
}

.hero-title {
  margin: 0 0 16px;
  color: var(--white-text);
  font-size: var(--font-size-7);
  font-family: var(--font-family-header);

  @media (min-width: 575px) {
    font-size: var(--font-size-7);
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-10);
  }
}

.hero-text {
  font-size: var(--font-size-2);
  margin: 4px 0;

  @media (min-width: 768px) {
    margin: 8px 0;
    font-size: var(--font-size-4);
  }
  @media (min-width: 1024px) {
    margin: 16px 0;
  }
}

.photo-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
}
</style>
