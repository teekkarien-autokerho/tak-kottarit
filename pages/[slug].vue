<script setup lang="ts">
import { type Page } from '../types'

const route = useRoute()

const query = groq`*[_type == "page" && slug.current == $slug][0]{
  ...,
  topics[] {
    ...,
    files[] {
      ...,
      'url':asset->url,
      'originalFilename': asset->originalFilename,
    }
  },
}`

const { data: page } = await useSanityQuery<Page>(query, {
  slug: route.params.slug,
})
</script>

<template>
  <div class="content">
    <section 
    v-if="page !==null"
    class="hero"
    :class="{
      'short-hero': !page.heroImage,
      'hero-text-red': page.heroTextColor === 'red',
      'hero-text-white': page.heroTextColor === 'white',
    }",
    :style="{
      backgroundImage: page.heroImage ? `
        linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(233, 229, 229, 0.1) 70%, rgba(233, 229, 229, 1) 100%),
        url(${urlFor(page.heroImage).width(2000).height(800).url()})
      ` : undefined,
      backgroundPosition: page.heroPosition || 'center',
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
    <topic v-for="topic in page.topics" :key="topic.title" :topic="topic" />
  </div>
</template>


<style scoped>
.content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #e9e5e5;
  color: #000000;
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: end;
  min-height: 250px;
  padding: 32px;
  background-size: cover;
  background-position: center;

  @media (min-width: 575px) {
    min-height: 300px;
    padding: 32px 64px;
  }
  @media (min-width: 1024px) {
    min-height: 400px;
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

.short-hero-title {
    font-size: var(--font-size-7);
    margin-bottom: 18px;
    z-index: 10;
}
</style>