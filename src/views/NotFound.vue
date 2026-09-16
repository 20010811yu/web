<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="notfound">
    <p class="code">404</p>
    <h1>{{ t('notfound.title') }}</h1>
    <p class="hint">{{ t('notfound.hint') }}</p>
    <RouterLink class="home-btn" to="/">{{ t('notfound.backHome') }}</RouterLink>
  </section>
</template>

<style scoped>
.notfound {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  text-align: center;
  padding: var(--space-6) var(--space-4);
}
.code {
  font-size: 4rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
}
h1 {
  font-size: var(--font-xl);
  color: var(--color-text);
}
.hint {
  color: var(--color-text-dim);
}
.home-btn {
  margin-top: var(--space-2);
  padding: 0.6rem 1.6rem;
  border-radius: var(--radius-sm);
  background: var(--color-primary);
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}
</style>
