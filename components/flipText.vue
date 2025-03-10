<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

const { heroText, texts } = defineProps<{ heroText: string; texts: string[] }>();

const flipText = ref<string | null>(null);
const currentIndex = ref<number>(0);
const backspacing = ref<boolean>(false);
const startDelay = 500;
const typingDelay = 5000;
const backspaceDelay = 3000;

const shuffleTexts = async () => {
  currentIndex.value = Math.floor(Math.random() * texts.length);

  await new Promise((resolve) => setTimeout(resolve, startDelay));

  while (true) {
    flipText.value = texts[currentIndex.value];
    await new Promise((resolve) => setTimeout(resolve, typingDelay));

    backspacing.value = true

    await new Promise((resolve) => setTimeout(resolve, backspaceDelay));

    backspacing.value = false
    currentIndex.value = (currentIndex.value + 1) % texts.length;
  }
};

onMounted(shuffleTexts);
</script>

<template>
  <div>
    <span class="hero-container">
      <span class="hero-text">{{ heroText }}&nbsp;</span>
      <span
        v-if="flipText !== null"
        key="animated-text"
        class="hero-flip-text"
        :class="{
          'backspacing': backspacing,
          'typing': !backspacing
        }"
        :aria-empty="flipText === '' ? 'true' : 'false'"
      >
        {{ flipText }}
      </span>
    </span>
  </div>
</template>

<style scoped>
.hero-container {
  display: inline-flex;
  flex-direction: column;
  align-items: baseline;

  @media (min-width: 575px) {
    flex-direction: row;
  }
}

.hero-text {
  white-space: nowrap;
  display: inline;
}

.hero-flip-text {
  overflow: hidden;
  border-right: 0.1em solid white;
  white-space: nowrap;
  display: inline-block;
  max-width: 0;
}
.typing {
  animation: 
    typing 2s steps(40, end) forwards, 
    blink-caret 0.75s step-end infinite;
}
.backspacing {
  animation: 
    backspace 2s steps(40, end) forwards,
    blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from { max-width: 0; }
  to { max-width: 100%; }
}

@keyframes backspace {
  from { max-width: 100%; }
  to { max-width: 0; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: white; }
}
</style>
