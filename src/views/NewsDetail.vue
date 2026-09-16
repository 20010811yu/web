<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, RouterLink } from 'vue-router'
import PageHero from '../components/PageHero.vue'
import { newsList } from '../data'
import { applyNewsSeo } from '../seo'

const { t, tm } = useI18n()
const route = useRoute()

const item = computed(() => newsList.find((n) => n.id === route.params.id) || newsList[0])
applyNewsSeo(item.value.id, t(`news.items.${item.value.id}.title`), t(`news.items.${item.value.id}.summary`))
const paragraphs = computed(() => {
  const msgs = tm(`news.items.${item.value.id}.body`)
  return Array.isArray(msgs) ? msgs : [String(msgs)]
})
const others = computed(() => newsList.filter((n) => n.id !== item.value.id))
const idx = computed(() => newsList.findIndex((n) => n.id === item.value.id))
const prevItem = computed(() => (idx.value > 0 ? newsList[idx.value - 1] : null))
const nextItem = computed(() => (idx.value < newsList.length - 1 ? newsList[idx.value + 1] : null))
</script>

<template>
  <div>
    <PageHero
      :title="t(`news.items.${item.id}.title`)"
      :eyebrow="t(`news.items.${item.id}.date`)"
    />
    <section class="block">
      <div class="container article">
        <p v-for="(p, i) in paragraphs" :key="i" class="dim para">{{ p }}</p>
        <RouterLink to="/news" class="back">← {{ t('news.back') }}</RouterLink>

        <div class="adjacent">
          <RouterLink v-if="prevItem" :to="`/news/${prevItem.id}`" class="adj-link">
            ← {{ t(`news.items.${prevItem.id}.title`) }}
          </RouterLink>
          <span v-else />
          <RouterLink v-if="nextItem" :to="`/news/${nextItem.id}`" class="adj-link next">
            {{ t(`news.items.${nextItem.id}.title`) }} →
          </RouterLink>
        </div>

        <h3 class="related-title">{{ t('news.related') }}</h3>
        <ul>
          <li v-for="o in others" :key="o.id">
            <RouterLink :to="`/news/${o.id}`" class="dim">
              {{ t(`news.items.${o.id}.date`) }} · {{ t(`news.items.${o.id}.title`) }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.article { max-width: 50rem; }
.para { margin-bottom: var(--space-4); font-size: var(--font-lg); line-height: 1.9; }
.back {
  display: inline-block;
  margin-top: var(--space-5);
  color: var(--color-primary);
  font-size: var(--font-md);
}
.related-title { margin: var(--space-7) 0 var(--space-4); font-size: var(--font-lg); }
.adjacent {
  display: flex;
  justify-content: space-between;
  gap: var(--space-4);
  flex-wrap: wrap;
  margin-top: var(--space-6);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-line);
}
.adj-link { color: var(--color-text-dim); font-size: var(--font-sm); max-width: 45%; }
.adj-link:hover { color: var(--color-primary); }
.adj-link.next { margin-left: auto; text-align: right; }
li { margin-bottom: var(--space-2); }
li a:hover { color: var(--color-primary); }
</style>
