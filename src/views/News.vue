<script setup>
import { useI18n } from 'vue-i18n'
import PageHero from '../components/PageHero.vue'
import { newsList } from '../data'
import { imgSrc } from '../utils/img'

const { t } = useI18n()
</script>

<template>
  <div>
    <PageHero :title="t('news.title')" :subtitle="t('news.subtitle')" :eyebrow="'NEWS'" />
    <section class="block">
      <div class="container">
        <div class="news-list">
          <RouterLink
            v-for="n in newsList"
            :key="n.id"
            :to="`/news/${n.id}`"
            class="card news-item"
          >
            <div class="date-box">
              <strong>{{ t(`news.items.${n.id}.date`).slice(8, 10) }}</strong>
              <span>{{ t(`news.items.${n.id}.date`).slice(0, 7) }}</span>
            </div>
            <img class="thumb" :src="imgSrc(n.image)" :alt="t(`news.items.${n.id}.title`)" loading="lazy" />
            <div class="body">
              <h2>{{ t(`news.items.${n.id}.title`) }}</h2>
              <p class="dim">{{ t(`news.items.${n.id}.summary`) }}</p>
              <span class="more">{{ t('news.readMore') }} →</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.news-list { display: grid; gap: var(--space-5); max-width: 56rem; margin: 0 auto; }
.news-item {
  display: flex;
  gap: var(--space-5);
  padding: var(--space-6);
  align-items: center;
}
.date-box {
  display: grid;
  place-items: center;
  gap: 0.125rem;
  flex-shrink: 0;
  width: 5rem; height: 5rem;
  border-radius: var(--radius-sm);
  background: rgba(0, 196, 140, 0.08);
  border: 1px solid rgba(0, 196, 140, 0.3);
  color: var(--color-primary);
}
.date-box strong { font-size: var(--font-2xl); line-height: 1.1; }
.date-box span { font-size: var(--font-xs); color: var(--color-text-dim); }
.thumb {
  width: 10rem;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}
.body h2 { font-size: var(--font-lg); margin-bottom: var(--space-2); }
.more { color: var(--color-primary); font-size: var(--font-sm); }
@media (max-width: 48em) {
  .news-item { flex-direction: column; align-items: flex-start; }
}
</style>
