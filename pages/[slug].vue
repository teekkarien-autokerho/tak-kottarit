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
  min-height: 500px;
  padding: 32px 128px;
  background-size: cover;
  background-position: center;
  color: white;
}
.short-hero{
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
  font-size: var(--font-size-10);
  margin-bottom: 24px;
}
.short-hero-title {
    font-size: var(--font-size-7);
    margin-bottom: 18px;
}
.hero-text {
    font-size: var(--font-size-6);
}
</style>