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
    <header class="header">
      <div class="header__title">
        <a class="header__link" href="/">
          <img class="header__logo"  height="40px" src="/tak_logo.svg" alt="Teekkarien Autokerho" />
        </a>
        <a class="header_name" href="/">Teekkarien Autokerho</a>
        <div class="header__spacer"></div>
        <a class="header__link" v-for="page in headerPages" :key="page.slug" :href="page.href">{{ page.title }}</a>
      </div>

    </header>
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
  color: white;

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
}

.header {
  display: flex;
  padding: 0 var(--space-1);
  border-bottom: 1px solid #ced2d9;

  z-index: 10;
  background: var(--white);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

  & .header__title {
    display: flex;
    align-items: center;
    flex: 1;
    
    font-size: var(--font-size-3);
    text-decoration: none;
    color: var(--black);
  }
  & .header_name  {
    font-size: var(--font-size-5);
    font-family: var(--font-family-header);
    font-weight: 800;
    color: #ed1e24;
    text-decoration: none;
  }
  & .header__spacer {
    flex: 1;
  }
  & .header__link {
    font-weight: 500;
    color: #ed1e24;
    text-decoration: none;
    &:hover { 
      color: #f14b50;
      cursor: pointer;
    }
  }

  & .header__logo {
    height: 56px;
  }
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
  gap: 8px;
}

@media (min-width: 575px) {
  .container {
    max-width: var(--max-width-1);
    padding: 0 var(--space-4);
  }

  main {
    margin-top: unset;
  }

  .header {
    position: unset;
    border-bottom: none;
    
    padding: var(--space-3) var(--space-5);
    background-color: #111111;
    

    & .header__title {
      gap: 24px;
      font-size: var(--font-size-5);
      color: #ed1e24;
    }
  }

}

.preview-toggle {
  backdrop-filter: blur(12px);
  border-radius: 0.25rem;
  bottom: 1rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  color: #1f2937;
  display: block;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  position: fixed;
  right: 1rem;
  text-align: center;
  text-decoration: none;
  z-index: 50;
}

.preview-toggle:hover {
  background-color: #ef4444;
  color: #ffffff;
}

.preview-toggle span:first-child {
  display: block;
}
.preview-toggle:hover span:first-child {
  display: none;
}

.preview-toggle span:last-child {
  display: none;
}
.preview-toggle:hover span:last-child {
  display: block;
}
</style>