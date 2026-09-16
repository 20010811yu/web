<script setup>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import MobileContactBar from './components/MobileContactBar.vue'
import BackTop from './components/BackTop.vue'
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <FooterBar />
  <MobileContactBar />
  <BackTop />
</template>
