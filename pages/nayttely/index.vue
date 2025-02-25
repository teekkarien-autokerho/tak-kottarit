<script setup lang="ts">
import { type ProjectCarList, type ProjectCar } from '../../types'

const { data: projectCarList } = await useSanityQuery<ProjectCarList>(groq`*[_type == "projectCarList"][0]`)
const { data: projects } = await useSanityQuery<ProjectCar[]>(groq`*[_type == "projectCar"]`)

</script>


<template>
  <div class="container">
    <h1 class="title">{{ projectCarList?.title }}</h1>
    <div class="intro">
      <SanityContent v-if="projectCarList?.intro" :blocks="projectCarList.intro" />
    </div>
  </div>
  <div class="container">
    <a 
      v-for="project in projects" 
      :key="project._id"
      class="card"
      :href="`/nayttely/${project.slug.current}`">
      <img 
        v-if="project.heroImage"
        class="card-img"
        :src="urlFor(project.heroImage).width(500).height(300).url()"
        alt="Cover image"
      />
      <div>
        <p class="card-info">{{ project.make }} {{ project.model }} {{ project.year }}</p>
        <h2 class="card-title">{{ project.title }}</h2>
        <div class="card-info">
          <p>{{ project.heroText }}</p>
          <p v-if="project.projectStarted">
            Projekti aloitettu: {{ new Date(project.projectStarted).toLocaleDateString('fi-FI') }}
          </p>
      </div>
      </div>
    </a>  
  </div>
  <div class="container">
    <SanityContent v-if="projectCarList?.intro" :blocks="projectCarList.outro" />
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 24px;
  color: white;
  font-size: var(--font-size-7);
  font-family: var(--font-family-header);

  @media (min-width: 575px) {
    font-size: var(--font-size-7);
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-10);
  }
}

.intro {
  font-size: var(--font-size-2);
  margin: 4px 0;

  @media (min-width: 575px) {
    margin: 8px 0;
    font-size: var(--font-size-3);
  }
}

.card {
  display: flex;
  flex-direction: column;
  margin: 8px;
  gap: 16px;
  border-radius: 16px;
  color: white;
  text-decoration: none;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 32px;
  }

  &:hover {
    transform: scale(1.01);
    filter: brightness(105%);
    background-color: #151515;
    transition: transform 0.1s ease, filter 0.1s ease, background-color 0.1s ease;
  }

}

.card-img {
  width: auto;
  border-radius: 16px;


  @media (min-width: 1024px) {
    height: 300px;
    width: auto;
  }
}

.card-title {
  margin: 4px 0;
  font-size: var(--font-size-5);

  @media (min-width: 1024px) {
    font-size: var(--font-size-8);
  }
}

.card-info {
  margin: 4px 0;
  font-size: var(--font-size-1);

  @media (min-width: 1024px) {
    margin-bottom: 8px;
  }
}
</style>