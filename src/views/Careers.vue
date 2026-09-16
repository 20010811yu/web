<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageHero from '../components/PageHero.vue'
import { jobs } from '../data'
import { tv } from '../utils/i18n-value'

const { t, tm, rt } = useI18n()

const benefitsList = computed(() => {
  const msgs = tm('careers.benefits')
  return Array.isArray(msgs)
    ? msgs.map((m) => ({ name: rt(m.name), desc: rt(m.desc) }))
    : []
})

function reqs(job) {
  return job.reqs.map(tv)
}
</script>

<template>
  <div>
    <PageHero :title="t('careers.title')" :subtitle="t('careers.subtitle')" :eyebrow="'CAREERS'" />

    <section class="block">
      <div class="container">
        <div class="section-title">
          <h2>{{ t('careers.benefitsTitle') }}</h2>
          <div class="bar" />
        </div>
        <div class="benefits">
          <div v-for="(item, i) in benefitsList" :key="i" class="card benefit">
            <h3>{{ item.name }}</h3>
            <p class="dim">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="block band">
      <div class="container">
        <div class="section-title">
          <h2>{{ t('careers.jobsTitle') }}</h2>
          <div class="bar" />
        </div>
        <el-collapse accordion class="jobs">
          <el-collapse-item v-for="j in jobs" :key="j.id" :name="j.id">
            <template #title>
              <span class="job-title">{{ tv(j.title) }}</span>
            </template>
            <p class="dim">{{ tv(j.desc) }}</p>
            <h4>{{ t('careers.reqsTitle') }}</h4>
            <ul class="reqs">
              <li v-for="(r, i) in reqs(j)" :key="i" class="dim">{{ r }}</li>
            </ul>
          </el-collapse-item>
        </el-collapse>
        <p class="hint">{{ t('careers.contactHint') }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.benefits {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-5);
}
.benefit { padding: var(--space-5); }
.benefit h3 { font-size: var(--font-md); color: var(--color-primary); margin-bottom: var(--space-2); }
.band { background: var(--bg-1); border-block: 1px solid var(--color-line); }
.jobs { max-width: 56rem; margin: 0 auto; }
.job-title { font-size: var(--font-lg); font-weight: 600; }
.jobs h4 { margin: var(--space-3) 0 var(--space-2); color: var(--color-primary); }
.reqs li { position: relative; padding-left: var(--space-5); margin-bottom: var(--space-1); }
.reqs li::before {
  content: '';
  position: absolute;
  left: 0; top: 0.75em;
  width: 0.4rem; height: 0.4rem;
  border-radius: 50%;
  background: var(--color-primary);
}
.hint {
  text-align: center;
  margin-top: var(--space-6);
  color: var(--color-primary);
  font-size: var(--font-md);
}
@media (max-width: 62em) {
  .benefits { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 48em) {
  .benefits { grid-template-columns: 1fr; }
}
</style>
