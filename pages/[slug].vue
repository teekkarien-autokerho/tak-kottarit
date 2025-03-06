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
    <section>
      <div
        v-if="page !==null"
        class="hero"
        :class="{
          'hero-text-red': page.heroTextColor === 'red',
          'hero-text-white': page.heroTextColor === 'white',
        }",
        :style="{
          backgroundImage: page.heroImage ? `
            linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, 95%, rgba(0, 0, 0, 1) ),
            url(${urlFor(page.heroImage).width(2000).height(800).url()})
          ` : undefined,
          backgroundPosition: page.heroPosition || 'center',
        }"
      ></div>
      <div class='hero-container'>
        <h1 class='hero-title'>{{ page.title }}</h1>
        <p v-if="page?.heroText" class="hero-text">{{ page.heroText }}</p>  
      </div>
    </section>
      <div>
      <section v-if="page !==null" class="container">
        <SanityContent v-if="page.body" :blocks="page.body" />
      </section>
      <topic v-for="topic in page.topics" :key="topic.title" :topic="topic" />
    </div>
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
  flex-direction: column;;
  min-height: 250px;
  padding: 32px;
  background-size: cover;

  @media (min-width: 575px) {
    min-height: 300px;
    padding: 32px 64px;
  }
  @media (min-width: 1024px) {
    min-height: 400px;
    padding: 64px 128px;
  }
}


.hero-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 24px 32px 0;
  gap: 16px;
  color: #000000;

  @media (min-width: 575px) {
    max-width: var(--max-width-1);
    padding: 0 32px;
    margin: 32px auto 0;
  }
  @media (min-width: 768px) {
    max-width: var(--max-width-2);
  }
}

.hero-title {
  margin: 0;
}

.hero-text {
    font-size: var(--font-size-4);
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