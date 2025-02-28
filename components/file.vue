<script setup lang="ts">
import type { File } from '../types'

const { file } = defineProps<{ file: File }>()

</script>


<template>
  <a
    v-if="file"
    :href="file.url" 
    target="_blank"
  >
    {{file.originalFilename}}
  </a>
</template>
