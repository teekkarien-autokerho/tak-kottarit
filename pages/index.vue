<script setup lang="ts">
import { type FrontPage } from '../types'

const query = groq`*[_type == "frontPage"][0]{ _id, title, heroImage, heroText, HeroFlipText, body }`
const { data: frontPage } = await useSanityQuery<FrontPage>(query)
</script>

<template>
  <section 
  v-if="frontPage !==null"
  class="hero"
  :style="{
      backgroundImage: frontPage.heroImage
        ? `url(${urlFor(frontPage.heroImage).width(2000).height(800).url()})`
        : undefined
    }"
  >
  <div class="hero-container">
    <h1 class="hero-title">{{ frontPage.title }}</h1>
    <p class="hero-text">{{ frontPage.heroText }}
      <span 
        v-if="frontPage.HeroFlipText !== undefined"
        class="hero-flip-text"
        >
        {{ frontPage.HeroFlipText[Math.floor(Math.random() * frontPage.HeroFlipText.length)] }}
      </span>
    </p>
  </div>
  </section>
  <section v-if="frontPage !==null" class="container">
    <SanityContent v-if="frontPage.body" :blocks="frontPage.body" />
  </section>
</template>


<style>

.hero {
  display: flex;
  flex-direction: column;
  justify-content: end;
  min-height: 350px;
  padding: 32px;
  background-size: cover;
  background-position: center;
  color: white;

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
</style>