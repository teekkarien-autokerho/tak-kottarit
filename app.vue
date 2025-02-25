<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>


<template>
  <div class="page">
    <TopNav />
    <main>
      <NuxtPage />
    </main>
    <footer class="footer">
      <div class="footer_links">
        <a class="footer__text" v-for="page in footerPages" :key="page.slug" :href="page.href">{{ page.title }}</a>
      </div>
      <p class="footer__text">
        Copyright Teekkarien Autokerho ry {{ currentYear }}
      </p>
    </footer>
  </div>
</template>

<style>
:root {
  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 20px;
  --space-5: 32px;
  --space-6: 52px;
  --space-7: 84px;
  --space-8: 136px;
  --space-9: 220px;

  --font-family-header: Racing Sans One, serif;
  --font-family-text: Roboto;

  --font-size-0: 12px;
  --font-size-1: 14px;
  --font-size-2: 16px;
  --font-size-3: 18px;
  --font-size-4: 20px;
  --font-size-5: 24px;
  --font-size-6: 30px;
  --font-size-7: 36px;
  --font-size-8: 48px;
  --font-size-9: 60px;
  --font-size-10: 72px;

  --line-height-0: 16px;
  --line-height-1: 20px;
  --line-height-2: 24px;
  --line-height-3: 28px;
  --line-height-4: 28px;
  --line-height-5: 32px;
  --line-height-6: 36px;
  --line-height-7: 40px;
  --line-height-8: 48px;
  --line-height-9: 60px;
  --line-height-10: 72px;
  --line-height-11: 96px;
  --line-height-12: 128px;

  --white: #fff;
  --black: #101112;
  --gray-200: #ced2d9;  
  --gray-600: #6e7683;
  --blue-600: #1e61cd;
  --magenta-100: #f9d7eb;

  --max-width-0: 320px;
  --max-width-1: 768px;
  --max-width-2: 1024px;

  background-color: #111111;
  color: #ced2d9;
}

html {
  background-color: var(--white);
  font-family: var(--font-family-text), sans-serif;
  text-size-adjust: 100%;
}

body {
  margin: 0;
}

.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  margin: 72px auto;
  color: #ced2d9;

  @media (min-width: 575px) {
    max-width: var(--max-width-1);
    padding: 0 var(--space-4);
  }
  @media (min-width: 768px) {
    max-width: var(--max-width-2);
  }
}
</style>

<style scoped>
main {
  margin-top: 45px;
  min-height: 1000px;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: var(--space-5) var(--space-3);
  background-color: #000;

  & .footer__text {
    font-size: var(--font-size-1);
    line-height: var(--line-height-1);
    display: flex;
    align-items: center;
    gap: 2px;
    color:#ed1e24;
  }
}
.footer_links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: 575px) {
    flex-direction: row;
  }
}

@media (min-width: 575px) {
  main {
    margin-top: unset;
  }
}
</style>