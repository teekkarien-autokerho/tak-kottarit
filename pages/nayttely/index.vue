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
    <h2 class="list-title">Projektit</h2>
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
      <div class="card-text">
        <p class="card-info">{{ project.make }} {{ project.model }} {{ project.year }}</p>
        <h3 class="card-title">{{ project.title }}</h3>
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
  color: white;
  margin: 0;
  font-size: var(--font-size-7);
  font-family: var(--font-family-header);

  @media (min-width: 575px) {
    font-size: var(--font-size-8);
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-9);
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

.container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.list-title {
  font-size: var(--font-size-5);
  margin: 0;
  color: white;

  @media (min-width: 575px) {
    font-size: var(--font-size-6);
  }
}

.card {
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  gap: 8px;
  border-radius: 8px;
  text-decoration: none;
  color: #ced2d9;
  

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0;
    border-radius: 16px;
  }

  &:hover {
    transform: scale(1.01);
    filter: brightness(105%);
    box-shadow: 0 0 8px 2px #262626;
    background-color: #262626;
    transition: transform 0.1s ease, filter 0.1s ease, background-color 0.1s ease;
  }
}

.card-img {
  width: auto;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  @media (min-width: 768px) {
    width: 400px;
    border-radius: 8px;
  }

  @media (min-width: 1024px) {
    height: 300px;
    width: auto;
    border-radius: 16px;
  }
}

.card-text {
  padding: 8px;
  @media (min-width: 768px) {
    padding: 16px;
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