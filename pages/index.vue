<script setup lang="ts">
import { type FrontPage } from '../types'

const query = groq`*[_type == "frontPage"][0]`
const { data: frontPage } = await useSanityQuery<FrontPage>(query)

</script>



<template>
  <div class="content">
    <section 
    v-if="frontPage !==null"
    class="hero"
    :class="{
      'hero-text-red': frontPage.heroTextColor === 'red',
      'hero-text-white': frontPage.heroTextColor === 'white',
    }"
    :style="{
        backgroundImage: frontPage.heroImage
          ? `url(${urlFor(frontPage.heroImage).width(2000).height(800).url()})`
        : undefined,
        backgroundPosition: frontPage.heroPosition || 'center',
      }"
    >
      <div class="hero-container">
        <h1 class="hero-title">{{ frontPage.title }}</h1>
        <p class="hero-text">
          <flipText 
            v-if="frontPage.HeroFlipText && frontPage.heroText"
            :hero-text="frontPage.heroText"
            :texts="frontPage.HeroFlipText"
          />
        </p>
      </div>
    </section>
    <section v-if="frontPage !==null" class="container">
      <SanityContent v-if="frontPage.body" :blocks="frontPage.body" />
    </section>
    <section v-if="frontPage !==null" class="container">
      <img
        v-if="frontPage.picture"
        class="picture"
        :src="urlFor(frontPage.picture).width(1000).url()"
        alt="Cover image"
      />
    </section>
</div>
</template>


<style scoped>
.content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #232323;
  color: #ced2d9;
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: end;
  min-height: 350px;
  padding: 32px;
  background-size: cover;

  @media (min-width: 575px) {
    min-height: 400px;
    padding: 32px 64px;
  }
  @media (min-width: 1024px) {
    min-height: 500px;
    padding: 64px 128px;
  }
}

.hero-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
}

.hero-title {
  font-size: var(--font-size-7);
  font-family: var(--font-family-header);
  margin-bottom: 24px;

  @media (min-width: 575px) {
    font-size: var(--font-size-7);
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-10);
  }
}

.hero-text {
  font-size: var(--font-size-3);
  margin: 4px 0;

  @media (min-width: 575px) {
    margin: 8px 0;
    font-size: var(--font-size-5);
  }
  @media (min-width: 1024px) {
    margin: 16px 0;
    font-size: var(--font-size-7);
  }
}

.hero-flip-text {
  text-decoration: underline;
}

.container {
  display: flex;
  flex-direction: column;
  color: #ced2d9;
}

.picture {
  width: auto;
  border-radius: 8px;
  margin-bottom: 16px;

  @media (min-width: 575px) {
    max-width: 600px;
  }
  @media (min-width: 1024px) {
    max-width: 800px;
    border-radius: 8px;
  }
}
</style>