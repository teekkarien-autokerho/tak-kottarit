<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { headerPages } from "#build/imports";

const route = useRoute()

const isMenuOpen = ref(false);
const menuRef = ref<HTMLElement | null>(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = (event: Event) => {
  if (
    isMenuOpen.value &&
    menuRef.value &&
    !menuRef.value.contains(event.target as Node)
  ) {
    isMenuOpen.value = false;
  }
};

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeMenu);
  document.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
  document.removeEventListener("click", closeMenu);
  document.removeEventListener("keydown", handleEscape);
});
</script>

<template>
  <header class="header">
      <div class="header-content">
        <a class="header-link header-link-logo" href="/">
          <img class="header-logo" height="40" src="/tak_logo.svg" alt="Teekkarien Autokerho" />
        </a>
        <a class="header-name" href="/">Teekkarien Autokerho</a>
        <div class="header-spacer"></div>
        <div class="header-links">
          <a 
            v-for="page in headerPages" 
            class="header-link"
            :class="{ 'header-link-highlight': route.params.slug === page?.slug }"
            :key="page?.slug" 
            :href="page?.href"
            >{{ page?.title }}
          </a>
        </div>
        <button class="burger-menu-toggle" @click.stop="toggleMenu">
        ☰
        </button>
      </div>
      <nav v-if="isMenuOpen" ref="menuRef" class="mobile-menu">
        <a 
          v-for="page in headerPages" 
          class="mobile-menu-item" 
          :class="{ 'header-link-highlight': route.params.slug === page?.slug }"
          :key="page?.slug" 
          :href="page?.href"
          @click="isMenuOpen = false"
        >
          {{ page?.title }}
        </a>
      </nav>
    </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  padding: 12px  16px;
  z-index: 10;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: #111111;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

  @media (min-width: 575px) {
    padding: 12px 24px;
  }

  @media (min-width: 1024px) {
    padding: 12px 24px;
  }
}

.header-content {
  display: flex;
  align-items: center;
  flex: 1;
  gap: 18px;
  font-size: var(--font-size-2);
  text-decoration: none;
  color: #ed1e24;

  @media (min-width: 575px) {
    gap: 16px;
    font-size: var(--font-size-2);
  }

  @media (min-width: 1024px) {
    gap: 18px;
    font-size: var(--font-size-3);
  }
  @media (min-width: 1300px) {
    gap: 24px;
    font-size: var(--font-size-4);
  }
}

.header-name {
  font-size: var(--font-size-5);
  font-family: var(--font-family-header);
  font-weight: 800;
  color: #ed1e24;
  text-decoration: none;

  @media (min-width: 575px) {
    font-size: var(--font-size-5);
  }

  @media (min-width: 1124px) {
    font-size: var(--font-size-6);
  }
}

.header-spacer {
  flex: 1;
}

.header-links {
  display: none;
  gap: 12px;

  @media (min-width: 900px) {
    display: flex;
  }
  @media (min-width: 1024px) {
    gap: 18px;
  }
}

.header-link {
  font-weight: 500;
  color: #ed1e24;
  text-decoration: none;
  text-wrap: nowrap; 
}

.header-link-logo {
  display: none;

  @media (min-width: 440px) {
   display: flex;
  }
}

.header-link:hover {
  color: #f14b50;
  cursor: pointer;
  text-decoration: underline;
}

.header-link-highlight {
  text-decoration: underline;
}

.header-logo {
  padding: 4px;
  height: 40px;
}

.burger-menu-toggle {
  display: block;
  font-size: 24px;
  background: none;
  border: none;
  color: #ed1e24;
  cursor: pointer;
  box-shadow: none;

  @media (min-width: 575px) {
    padding: 8px 16px;
  }
  @media (min-width: 900px) {
    display: none;
  }
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.mobile-menu-item {
  color: #ed1e24;
  text-decoration: none;
  font-size: var(--font-size-3);
  padding: 8px 10px;
}

.mobile-menu-item:hover {
  color: #f14b50;
  cursor: pointer;
}
</style>
