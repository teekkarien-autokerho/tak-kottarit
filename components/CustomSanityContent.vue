<script setup lang="ts">
import type { PortableTextBlock } from "@portabletext/types";

defineProps({
  blocks: {
    type: Array<PortableTextBlock>,
    required: true,
  },
});
</script>

<template>
  <div class="contents">
    <SanityContent :blocks="blocks" />
  </div>
</template>


<style scoped>

:deep(h2) {
  margin: 24px 0;
  font-size: 24px;

  @media (min-width: 575px) {
    font-size: 32px;
  }
  @media (min-width: 1024px) {
    font-size: 42px;
  }
}

:deep(h3) {
  margin: 18px 0 8px;
  font-size: var(--font-size-4);

  @media (min-width: 575px) {
    margin: 24px 0 12px;
    font-size: var(--font-size-5);
  }
  @media (min-width: 1024px) {
    margin: 32px 0 18px;
    font-size: var(--font-size-6);
  }
}

:deep(h4) {
  margin: 16px 0 8px;
  font-size: var(--font-size-3);

  @media (min-width: 575px) {
    margin: 20px 0 12px;
    font-size: var(--font-size-4);
  }
  @media (min-width: 1024px) {
    margin: 24px 0 16px;
    font-size: var(--font-size-5);
  }
}

:deep(h5) {
  margin: 12px 0 8px;
  font-size: var(--font-size-3);

  @media (min-width: 575px) {
    margin: 16px 0 10px;
    font-size: var(--font-size-3);
  }
  @media (min-width: 1024px) {
    margin: 20px 0 12px;
    font-size: var(--font-size-4);
  }
}

:deep(p) {
  margin: 8px 0;
  font-size: var(--font-size-2);

  @media (min-width: 575px) {
    margin: 12px 0;
    font-size: var(--font-size-2);
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-3);
  }
}
</style>