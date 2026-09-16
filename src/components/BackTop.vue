<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > window.innerHeight
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <Transition name="fade">
    <button v-if="visible" type="button" class="back-top" :aria-label="t('common.backTop')" @click="toTop">
      <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.back-top {
  position: fixed;
  right: 1.25rem;
  bottom: 5.5rem;
  z-index: 90;
  width: 2.75rem;
  height: 2.75rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid var(--color-line);
  background: var(--bg-1);
  color: var(--color-text);
  cursor: pointer;
  box-shadow: 0 0.35rem 1.1rem rgba(27, 42, 61, 0.15);
  transition: all 0.2s;
}
.back-top:hover { color: var(--color-primary); border-color: var(--color-primary); }
@media (min-width: 48em) {
  .back-top { bottom: 1.5rem; }
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
