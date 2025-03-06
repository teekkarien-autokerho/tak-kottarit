<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

const { heroText, texts } = defineProps<{ heroText: string; texts: string[] }>();

const flipText = ref<string | null>(null);
const currentIndex = ref<number>(0);
const typingDelay = 3000; // Time before backspacing starts
const backspaceSpeed = 1000; // Backspacing animation duration
const typingSpeed = 2000; // Typing speed duration

const shuffleTexts = async () => {
  currentIndex.value = Math.floor(Math.random() * texts.length);

  while (true) {
    flipText.value = null; // Force re-render
    await nextTick();
    flipText.value = texts[currentIndex.value];

    // Wait before backspacing
    await new Promise((resolve) => setTimeout(resolve, typingDelay));

    // Add backspace effect by setting the text to an empty string
    flipText.value = "";

    // Wait for backspace animation to complete
    await new Promise((resolve) => setTimeout(resolve, backspaceSpeed));

    // Move to the next word
    currentIndex.value = (currentIndex.value + 1) % texts.length;
  }
};

onMounted(shuffleTexts);
</script>

<template>
  <div>
    <span class="hero-container">
      <span class="hero-text">{{ heroText }}&nbsp;</span>
      <span v-if="flipText !== null" key="animated-text" class="hero-flip-text">
        {{ flipText }}
      </span>
    </span>
  </div>
</template>

<style scoped>
.hero-container {
  display: inline-flex;
  align-items: baseline;
}

.hero-text {
  display: inline;
}

.hero-flip-text {
  overflow: hidden;
  border-right: 0.15em solid white;
  white-space: nowrap;
  display: inline-block;
  max-width: 0; /* Start hidden */
  animation: 
    typing 2s steps(20, end) forwards, 
    blink-caret 0.75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { max-width: 0; }
  to { max-width: 100%; }
}

/* The backspacing effect */
@keyframes backspace {
  from { max-width: 100%; }
  to { max-width: 0; }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: white; }
}

/* Apply backspacing animation when text is being removed */
.hero-flip-text:empty {
  animation: backspace 1s steps(20, end) forwards;
}
</style>
