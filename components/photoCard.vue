<script setup lang="ts">
  import { type ImageWithText } from '../types'

  const { imageWithText } = defineProps<{imageWithText: ImageWithText}>()
  const isModalOpen = ref(false);

  const toggleModal = () => {
    isModalOpen.value = !isModalOpen.value;
  };

</script>

<template>
  <div class="photo-card">
    <img
      v-if="imageWithText.photo"
      :src="urlFor(imageWithText.photo).maxHeight(1000).url()"
      class="photo"
      @click="toggleModal"
    />
    <p>{{ imageWithText.photoText }}</p>
    <div v-if="isModalOpen" class="modal" @click="toggleModal">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="toggleModal">×</button>
        <img class="photo-large" :src="urlFor(imageWithText.photo).url()" />
        <p>{{ imageWithText.photoText }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.photo-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.photo {
  border-radius: 8px;
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  cursor: pointer;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(30, 30, 30, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px;
  max-width: 90%;
  max-height: 90%;
}

.modal-content img {
  width: auto;
  max-height: 80vh;
  max-width: 80vw;
  object-fit: contain;
  border-radius: 8px;
}

.close-button {
  position: absolute;
  top: -20px;
  right: -14px;
  padding: 8px;
  background: none;
  border: none;
  font-size: 32px;
  font-weight: bold;
  color: white;
  cursor: pointer;
}

.close-button:hover {
  color: red; /* Optional: change color on hover for better visibility */
}
</style>