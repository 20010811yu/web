<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageHero from '../components/PageHero.vue'
import { history } from '../data'

const { t, tm, rt } = useI18n()
const certs = ['iso', 'hightech', 'special']
const intro = computed(() => {
  const msgs = tm('about.intro')
  return Array.isArray(msgs) ? msgs.map(rt) : [String(msgs)]
})
</script>

<template>
  <div>
    <PageHero :title="t('about.hero')" :eyebrow="'ABOUT YINKAI'" />

    <section class="block">
      <div class="container">
        <div class="section-title">
          <h2>{{ t('about.introTitle') }}</h2>
          <div class="bar" />
        </div>
        <div class="intro">
          <p v-for="(para, i) in intro" :key="i" class="dim">{{ para }}</p>
        </div>
      </div>
    </section>

    <section class="block band">
      <div class="container">
        <div class="section-title">
          <h2>{{ t('about.certsTitle') }}</h2>
          <div class="bar" />
        </div>
        <div class="certs">
          <div v-for="c in certs" :key="c" class="card cert">
            <svg viewBox="0 0 24 24" width="1.5em" height="1.5em" fill="none" stroke="currentColor" stroke-width="1.6">
              <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.4 7.2 16.9l.9-5.4L4.2 7.7l5.4-.8L12 2z" />
            </svg>
            {{ t(`home.about.certs.${c}`) }}
          </div>
        </div>
      </div>
    </section>

    <section class="block">
      <div class="container">
        <div class="section-title">
          <h2>{{ t('about.historyTitle') }}</h2>
          <div class="bar" />
        </div>
        <el-timeline class="timeline">
          <el-timeline-item
            v-for="h in history"
            :key="h.year"
            :timestamp="String(h.year)"
            :type="h.year === 2024 ? 'primary' : ''"
            placement="top"
          >
            <p class="dim">{{ t(`history.${h.textKey}`) }}</p>
          </el-timeline-item>
        </el-timeline>
      </div>
    </section>
  </div>
</template>

<style scoped>
.intro { max-width: 55rem; margin: 0 auto; display: grid; gap: var(--space-4); }
.intro p { font-size: 1.25rem; line-height: 1.9; }
.band { background: var(--bg-1); border-block: 1px solid var(--color-line); }
.certs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
}
.cert {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-5);
  font-size: var(--font-md);
}
.cert svg { color: var(--color-primary); flex-shrink: 0; }
.timeline { max-width: 50rem; margin: 0 auto; }
.timeline p { padding-bottom: var(--space-2); font-size: 1.15rem; }
.timeline :deep(.el-timeline-item__timestamp) { font-size: 1.05rem; font-weight: 600; }
@media (max-width: 48em) {
  .certs { grid-template-columns: 1fr; }
}
</style>
