<script setup lang="ts">
import { type Topic } from '../types'

const { topic } = defineProps<{ topic: Topic }>()
</script>


<template>
  <section class="container">
    <h2 class="title">{{ topic.title }}</h2>
    <img 
        v-if="topic.image"
        class="image"
        :src="urlFor(topic.image).width(800).url()"
        alt="Cover image"
        
      />
      <CustomSanityContent v-if="topic.body" :blocks="topic.body" />
    <div v-if="topic.files && topic.files.length" class="file-list">
      <file v-for="file in topic.files" :key="file._key" :file="file" />
    </div>
  </section>
</template>


<style scoped>

.container {
  display: flex;
  flex-direction: column;
  margin: 32px 16px;

  @media (min-width: 575px) {
    margin: 0 auto ;
  }
  @media (min-width: 1024px) {
    max-width: 800px;
  }
 
}

.title {
  margin: 24px 0;
  font-size: 24px;

  @media (min-width: 575px) {
    font-size: 32px;
  }
  @media (min-width: 1024px) {
    font-size: 42px;
  }
}

.image {
  width: auto;
  border-radius: 8px;
  margin-bottom: 16px;

  @media (min-width: 575px) {
    max-width: 600px;
  }
  @media (min-width: 1024px) {
    max-width: 800px;
    border-radius: 16px;
  }
}

.file-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
