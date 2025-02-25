<script setup lang="ts">
import { type Page } from '../types'

const route = useRoute()

const query = groq`*[_type == "page" && slug.current == $slug][0]`
const { data: page } = await useSanityQuery<Page>(query, {
  slug: route.params.slug,
})
</script>

<template>
  <section 
  v-if="page !==null"
  :class='page.heroImage ? "hero" : "hero short-hero"'
  :style="{
      backgroundImage: page.heroImage
        ? `url(${urlFor(page.heroImage).width(2000).height(800).url()})`
        : undefined
    }"
  >
  <div :class='page.heroImage ? "hero-container" : "short-hero-container"'>
    <h1 
      :class='page.heroImage ? "hero-title" : "short-hero-title"'
    >{{ page.title }}</h1>
    <p class="hero-text">{{ page.heroText }}
    </p>  
  </div>
  </section>
  <section v-if="page !==null" class="container">
    <SanityContent v-if="page.body" :blocks="page.body" />
  </section>
</template>


<style scoped>
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

.short-hero {
  min-height: 100px;
  justify-content: center;
  align-items: center;
}

.hero-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
}

.short-hero-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

.short-hero-title {
    font-size: var(--font-size-7);
    margin-bottom: 18px;
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

</style>