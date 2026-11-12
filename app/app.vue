<template>
  <div class="min-h-screen p-6 font-sans">
    <NuxtRouteAnnouncer />
    <nav class="mb-6 flex gap-4">
      <NuxtLink
        to="/"
        class="text-blue-600 underline"
      >
        首頁
      </NuxtLink>
      <NuxtLink
        to="/about"
        class="text-blue-600 underline"
      >
        關於
      </NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>
