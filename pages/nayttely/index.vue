<script setup lang="ts">
import { type ProjectCarList, type ProjectCar } from '../../types'

const { data: projectCarList } = await useSanityQuery<ProjectCarList>(groq`*[_type == "projectCarList"][0]`)
const { data: projects } = await useSanityQuery<ProjectCar[]>(groq`*[_type == "projectCar"]`)

</script>


<template>
  <div class="container">
    <h1 class="title">{{ projectCarList?.title }}</h1>
    <SanityContent v-if="projectCarList?.intro" :blocks="projectCarList.intro" />
  </div>
  <div class="container">
    <a 
      v-for="project in projects" 
      :key="project._id"
      class="card"
      :href="`/nayttely/${project.slug.current}`">
      <img 
        v-if="project.heroImage"
        class="card_img"
        :src="urlFor(project.heroImage).width(500).height(300).url()"
        alt="Cover image"
      />
      <div>
        <p class="card_info">{{ project.make }} {{ project.model }} {{ project.year }}</p>
        <h2 class="card_title">{{ project.title }}</h2>
        <p>{{ project.heroText }}</p>
        <p v-if="project.projectStarted">
          Projekti aloitettu: {{ new Date(project.projectStarted).toLocaleDateString('fi-FI') }}
        </p>
      </div>
    </a>  
  </div>
  <div class="container">
    <SanityContent v-if="projectCarList?.intro" :blocks="projectCarList.outro" />
  </div>
</template>

<style scoped>
.title {
  font-size: var(--font-size-10);
  font-family: var(--font-family-header);
  margin-bottom: 24px;
  color: white;
}
.card {
  display: flex;
  flex-direction: row;
  margin: 8px;
  gap: 32px;
  border-radius: 16px;
  color: white;
  text-decoration: none;

  &:hover {
    transform: scale(1.01);
    filter: brightness(105%);
    background-color: #151515;
    transition: transform 0.1s ease, filter 0.1s ease, background-color 0.1s ease;
  }

}
.card_img {
  height: 300px;
  
  border-radius: 16px;
}
.card_title {
  font-size: var(--font-size-8);
  margin: 0px;
}
.card_info {
  font-size: var(--font-size-1);
  margin-bottom: 8px;
}
</style>