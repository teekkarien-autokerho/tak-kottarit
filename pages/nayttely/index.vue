<script setup lang="ts">
import { type ProjectCarListPage, type ProjectCar } from '../../types'

const { data: projectCarListPage } = await useSanityQuery<ProjectCarListPage>(groq`*[_type == "projectCarList"][0]`)

const { data: projectsCars } = await useSanityQuery<ProjectCar[]>(groq`*[_type == "projectCar"] | order(dateTime(projectStarted + 'T00:00:00Z') desc)`)

</script>


<template>
  <div class="content">
  <div class="container">
    <h1 class="title">{{ projectCarListPage?.title }}</h1>
    <div class="intro">
      <CustomSanityContent v-if="projectCarListPage?.intro" :blocks="projectCarListPage.intro" />
    </div>
  </div>
  <div class="container">
    <h2 class="list-title">Projektit</h2>
    <a 
      v-for="projectsCar in projectsCars" 
      :key="projectsCar._id"
      class="card"
      :href="`/nayttely/${projectsCar.slug.current}`">
      <img 
        v-if="projectsCar.heroImage"
        class="card-img"
        :src="urlFor(projectsCar.heroImage).width(500).height(300).url()"
        alt="Cover image"
      />
      <div class="card-text">
        <p class="card-info">{{ projectsCar.make }} {{ projectsCar.model }} {{ projectsCar.year }}</p>
        <h3 class="card-title">{{ projectsCar.title }}</h3>
        <div class="card-info">
          <p>{{ projectsCar.heroText }}</p>
          <p v-if="projectsCar.projectStarted">
            Projekti aloitettu: {{ new Date(projectsCar.projectStarted).toLocaleDateString('fi-FI') }}
          </p>
      </div>
      </div>
    </a>  
  </div>
  <div class="container">
    <CustomSanityContent v-if="projectCarListPage?.intro" :blocks="projectCarListPage.outro" />
  </div>
</div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  background-color: var(--black-background);
  color: var(--white-text);
}

.title {
  color: var(--white-text);
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
  color: var(--white-text);
}

.list-title {
  font-size: var(--font-size-5);
  margin: 8px 0;
  color: var(--white-text);

  @media (min-width: 575px) {
    font-size: var(--font-size-6);
  }
}

.card {
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 8px;
  border-radius: 8px;
  text-decoration: none;
  color: var(--white-text);  

  @media (min-width: 768px) {
    flex-direction: row;
    border-radius: 16px;
  }

  &:hover {
    transform: scale(1.01);
    filter: brightness(105%);
    box-shadow: 0 0 8px 2px #141313;
    background-color: #141313;
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