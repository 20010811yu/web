<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <div class="page-hero">
    <div class="container">
      <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.page-hero {
  padding: var(--space-8) 0 var(--space-7);
  background:
    radial-gradient(60rem 20rem at 70% -10%, rgba(0, 196, 140, 0.12), transparent),
    radial-gradient(50rem 18rem at 15% 120%, rgba(59, 130, 246, 0.1), transparent),
    var(--bg-1);
  border-bottom: 1px solid var(--color-line);
}
.eyebrow {
  font-size: var(--font-sm);
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: var(--space-3);
}
h1 { font-size: var(--font-2xl); font-weight: 800; }
.subtitle { margin-top: var(--space-3); color: var(--color-text-dim); font-size: var(--font-lg); }
</style>
