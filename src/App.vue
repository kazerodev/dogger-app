<script setup>
const themeOverrides = {
  common: {
    primaryColor: '#2d8a4e',
    primaryColorHover: '#3fae6f'
  }
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <div class="app">
      <header class="header">
        <router-link to="/" class="logo">Dogger App</router-link>
      </header>
      <main class="main">
        <router-view v-slot="{ Component }">
          <transition name="page" mode="out-in">
            <component :is="Component" :key="$route.path" />
          </transition>
        </router-view>
      </main>
    </div>
  </n-config-provider>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #f4f6f8;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(14px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-14px);
}
</style>

<style scoped>
.app {
  min-height: 100vh;
}

.header {
  background: linear-gradient(135deg, #2d8a4e, #3fae6f);
  padding: 1rem 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}

.logo {
  color: white;
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: none;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}
</style>
