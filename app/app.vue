<template>
  <div>
    <NuxtRouteAnnouncer />
    <nav class="nav">
      <NuxtLink to="/">首頁</NuxtLink>
      <NuxtLink to="/about">關於</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>

<style>
body { font-family: system-ui, sans-serif; margin: 0; padding: 24px; }
.nav { display: flex; gap: 16px; margin-bottom: 24px; }
</style>
