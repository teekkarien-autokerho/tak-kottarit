<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps<{ error: NuxtError }>()

const handleError = async () => {
  await clearError({ redirect: '/' })
  await navigateTo('/')
  reloadNuxtApp()
}

</script>

<template>
  <div class="content">
    <div class="container">
      <h1 class="title">Moottorin vikavalo syttyi</h1>
      <p>Näytäisi siltä, että jotain hajosi. Jos virhe toistuu, ole yhteydessä Autokerhon johtokuntaan.</p>
      <p>
        <span>{{ error?.statusCode ?? "Unknown error" }} : {{ error.message }}</span>
      </p>
      <button @click="handleError">Palaa aloitussivulle</button>
    </div>
  </div>
</template>


<style scoped>

.title {
  font-size: var(--font-size-4);
}
</style>
