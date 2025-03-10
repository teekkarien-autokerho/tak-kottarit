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
      <h2>Moottorin vikavalo syttyi</h2>
      <p>Näytäisi siltä, että jotain hajosi. Jos virhe toistuu, ole yhteydessä Autokerhon johtokuntaan.</p>
      <p>
        <span>{{ error?.statusCode ?? "Unknown error" }} : {{ error.message }}</span>
        </p>
      <button @click="handleError">Palaa aloitussivulle</button>
      </div>
  </div>
</template>
