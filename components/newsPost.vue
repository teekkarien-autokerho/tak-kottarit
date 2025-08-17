<script setup lang="ts">
import type { NewsPost } from '~/types';

const { newsPostRef } = defineProps<{ newsPostRef: string }>()

const query = groq`*[_type == "newsPost" && _id == $id][0]{
  _id,
  title,
  body,
  image {
    ...,
    'url': asset->url
  },
  link {
    url,
    page->{
      _id,
      slug
    },
    text
  }
}`;

const { data: newsPost, pending, error } = useSanityQuery<NewsPost>(query, {
  id: newsPostRef,
});

</script>

<template>
  <div v-if="pending">Loading…</div>
  <div v-else-if="error">Error loading news post</div>
  <div class="newsPost" v-else-if="newsPost && newsPost._id">
    <img
      v-if="newsPost.image"
      class="picture"
      :src="urlFor(newsPost.image).url()"
      alt="Cover image"
    />
    <div class="newsPost-content">
      <h3 class="newsPost-title">{{ newsPost.title }}</h3>
      <CustomSanityContent
        v-if="newsPost.body"
        :blocks="newsPost.body"
      />
      <a
        v-if="newsPost.link"
        class="newsPost-button"
        :href="newsPost.link.url ?? (newsPost.link.page?.slug.current ? '/' + newsPost.link.page.slug.current : '#')"
        :target="newsPost.link.url ? '_blank' : undefined"
        :rel="newsPost.link.url ? 'noopener noreferrer' : undefined"
      >
        <button>{{ newsPost.link?.text }}</button>
      </a>
    </div>
  </div>
</template>

<style scoped>
.newsPost {
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-bottom: 32px;

  @media (min-width: 575px) {
    flex-direction: row;
  }
}
.newsPost-content {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
}
.newsPost-button {
  justify-self: end;
}
.picture {
  object-fit: cover;
  @media (min-width: 575px) {
    max-height: 300px;
  }
}
</style>