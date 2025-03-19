<script lang="ts">
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>


<template>
    <TopNav />
    <main>
      <NuxtPage />
    </main>
    <footer class="footer">
      <div class="footer-links">
        <a class="footer-link" v-for="page in footerPages" :key="page.slug" :href="page.href">{{ page.title }}</a>
      </div>
      <div class="footer-links">
        <a class="footer-link" href="http://old.teekkarienautokerho.fi/varauskalenteri/">Varauskalenteri</a>
      </div>
      <div class="footer-links">
        <a class="footer-link" href="https://www.instagram.com/teekkarienautokerho/">
          <img class="header-logo"  height="25" src="/instagram_logo.svg" alt="Teekkarien Autokerho" />
        </a>
      </div>
      <p class="footer-copyright">
        Copyright Teekkarien Autokerho ry {{ currentYear }}
      </p>
    </footer>
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

  --white-text: #ced2d9;
  --black-text: #101112;

  --white-background: #e9e5e5;
  --grey-background: #232323;
  --footer-background: #282828;
  --black-background: #131212;
  --topnav-background: #111111;

  --primary-red: #ed1e24;
  --light-red: #f14b50;



  --max-width-0: 320px;
  --max-width-1: 600px;
  --max-width-2: 1024px;

  background-color: var(--white-background);
  color: var(--black-text);
}


html {
  background-color: var(--white);
  font-family: var(--font-family-text), sans-serif;
  text-size-adjust: 100%;
}

body {
  margin: 0;
}

button {
  padding: 8px 16px;
  border-radius: 4px;
  border-width: 0;
  background-color: var(--primary-red);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  color: #e9e5e5;
  font-family: var(--font-family-header);
  font-size: var(--font-size-4);

  @media (min-width: 575px) {
    padding: 12px 24px;
    border-radius: 8px;
    font-size: var(--font-size-5);
  }
}

button:hover {
    background-color: #c2161c;
    cursor: pointer;
  }

.container {
  margin: 16px 16px;
  color: #000000;

  @media (min-width: 575px) {
    max-width: var(--max-width-1);
    padding: 0 32px;
    margin: 24px auto;
  }
  @media (min-width: 768px) {
    max-width: var(--max-width-2);
    margin: 32px auto;
  }
}

.hero-text {
    font-size: var(--font-size-3);
    margin: 4px 0;

    @media (min-width: 575px) {
      margin: 8px 0;
      font-size: var(--font-size-5);
    }
    @media (min-width: 1024px) {
      margin: 16px 0;
      font-size: var(--font-size-7);
    }
}

.hero-title {
  font-size: var(--font-size-7);
  font-family: var(--font-family-header);
  margin-bottom: 12px;

  @media (min-width: 575px) {
    font-size: var(--font-size-8);
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-10);
  }
}

.hero-text-red {
  color: var(--primary-red);
}
.hero-text-white {
  color: var(--white-text);
}
</style>

<style scoped>
main {
  padding-top: 69px;
  background-color: var(--black-background);
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: var(--space-5) var(--space-3);
  background-color: var(--footer-background);
}

.footer-link {
  font-size: var(--font-size-1);
  line-height: var(--line-height-1);
  display: flex;
  align-items: center;
  gap: 2px;
  color: var(--primary-red);
  text-decoration: none;
}

.footer-link:hover {
  color: var(--light-red);
  cursor: pointer;
  text-decoration: underline;
}

.footer-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: 575px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
}

.footer-copyright {
  font-size: var(--font-size-0);
  line-height: var(--line-height-1);
  color: #b7b7b8;
}
</style>