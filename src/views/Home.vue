<script setup>
import { imgSrc } from '../utils/img'
import { useI18n } from 'vue-i18n'
import { history, newsList, partners, businessImages } from '../data'

const { t } = useI18n()

const stats = [
  { value: '2004', suffix: '', label: 'hero.stats.founded.label' },
  { value: '100', suffix: '+', label: 'hero.stats.partners.label' },
  { value: '150', suffix: '+', label: 'hero.stats.employees.label' },
  { value: '50', suffix: '+', label: 'hero.stats.cities.label' },
]

const historyPreview = history.slice(-4)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg" aria-hidden="true" />
      <div class="container hero-inner">
        <p class="badge">{{ t('hero.badge') }}</p>
        <h1>{{ t('hero.title') }}</h1>
        <p class="subtitle">{{ t('hero.subtitle') }}</p>
        <div class="hero-cta">
          <RouterLink to="/products" class="btn btn-primary">{{ t('hero.cta') }}</RouterLink>
          <RouterLink to="/contact" class="btn btn-ghost">{{ t('hero.ctaSecondary') }}</RouterLink>
        </div>
        <div class="hero-stats">
          <div v-for="s in stats" :key="s.label" class="stat">
            <strong>{{ s.value }}<em>{{ s.suffix }}</em></strong>
            <span>{{ t(s.label) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品与服务 -->
    <section v-reveal class="block">
      <div class="container">
        <div class="section-title">
          <p class="eyebrow">{{ t('home.business.eyebrow') }}</p>
          <h2>{{ t('home.business.title') }}</h2>
          <div class="bar" />
        </div>
        <div class="grid-3">
          <RouterLink
            v-for="(item, key) in { line: 1, palletizing: 1, vision: 1 }"
            :key="key"
            v-reveal
            to="/products" class="card biz-card"
          >
            <div class="biz-photo">
              <img :src="imgSrc(businessImages[key])" :alt="t(`home.business.items.${key}.name`)" width="870" height="576" loading="lazy" />
            </div>
            <div class="biz-head">
              <div class="biz-icon">
                <svg viewBox="0 0 24 24" width="1.75em" height="1.75em" fill="none" stroke="currentColor" stroke-width="1.5">
                  <template v-if="key === 'line'">
                    <path d="M3 17h18M5 17V9l4-3 4 3v8M13 17v-6h6v6" />
                  </template>
                  <template v-else-if="key === 'palletizing'">
                    <path d="M4 20h16M6 20v-5h12v5M8 15v-3h8v3M10 12V9h4v3" />
                  </template>
                  <template v-else>
                    <circle cx="12" cy="12" r="3.2" />
                    <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z" />
                  </template>
                </svg>
              </div>
              <h3>{{ t(`home.business.items.${key}.name`) }}</h3>
            </div>
            <p class="dim">{{ t(`home.business.items.${key}.desc`) }}</p>
            <span class="more">{{ t('home.business.more') }} →</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- 关于速览 -->
    <section v-reveal class="block about-band">
      <div class="container about-grid">
        <div>
          <p class="eyebrow">{{ t('home.about.eyebrow') }}</p>
          <h2>{{ t('home.about.title') }}</h2>
          <p class="dim summary">{{ t('home.about.summary') }}</p>
          <RouterLink to="/about" class="btn btn-ghost">{{ t('home.about.more') }}</RouterLink>
        </div>
        <div class="about-photo card">
          <img :src="imgSrc('/images/about/company.webp')" :alt="t('home.about.title')" width="866" height="465" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- 发展历程 -->
    <section v-reveal class="block">
      <div class="container">
        <div class="section-title">
          <p class="eyebrow">{{ t('home.history.eyebrow') }}</p>
          <h2>{{ t('home.history.title') }}</h2>
          <div class="bar" />
        </div>
        <div class="timeline">
          <div v-for="h in historyPreview" :key="h.year" v-reveal class="timeline-item">
            <strong>{{ h.year }}</strong>
            <p class="dim">{{ t(`history.${h.textKey}`) }}</p>
          </div>
        </div>
        <div class="center">
          <RouterLink to="/about" class="btn btn-ghost">{{ t('home.history.more') }}</RouterLink>
        </div>
      </div>
    </section>

    <!-- 合作伙伴 -->
    <section v-reveal class="block">
      <div class="container">
        <div class="section-title">
          <p class="eyebrow">{{ t('home.partners.eyebrow') }}</p>
          <h2>{{ t('home.partners.title') }}</h2>
          <p class="dim">{{ t('home.partners.summary') }}</p>
        </div>
        <div class="partner-wall">
          <!-- 旧站 logo 未附公司名，先以 logo 直链展示；无法加载时显示占位 -->
          <div v-for="p in partners" :key="p.id" v-reveal class="card partner">
            <img :src="imgSrc(p.logo)" :alt="`partner-${p.id}`" loading="lazy" @error="$event.target.style.display = 'none'" />
          </div>
        </div>
      </div>
    </section>

    <!-- 新闻速览 -->
    <section v-reveal class="block">
      <div class="container">
        <div class="section-title">
          <p class="eyebrow">{{ t('home.news.eyebrow') }}</p>
          <h2>{{ t('home.news.title') }}</h2>
          <div class="bar" />
        </div>
        <div class="grid-2">
          <RouterLink v-for="n in newsList" :key="n.id" v-reveal :to="`/news/${n.id}`" class="card news-card">
            <time>{{ t(`news.items.${n.id}.date`) }}</time>
            <h3>{{ t(`news.items.${n.id}.title`) }}</h3>
            <p class="dim">{{ t(`news.items.${n.id}.summary`) }}</p>
            <span class="more">{{ t('news.readMore') }} →</span>
          </RouterLink>
        </div>
        <div class="center">
          <RouterLink to="/news" class="btn btn-ghost">{{ t('home.news.more') }}</RouterLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section v-reveal class="cta-band">
      <div class="container center">
        <h2>{{ t('home.cta.title') }}</h2>
        <RouterLink to="/contact" class="btn btn-primary btn-lg">{{ t('home.cta.button') }}</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  padding: var(--space-8) 0 var(--space-7);
  overflow: hidden;
  color: #e8eef5;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background:
    url('/images/banner/factory-hero.svg') center / cover no-repeat;
  z-index: -1;
}
.hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10, 17, 28, 0.72) 0%, rgba(10, 17, 28, 0.35) 55%, rgba(10, 17, 28, 0.9) 100%);
}
.hero { position: relative; }
.badge {
  display: inline-block;
  font-size: var(--font-sm);
  color: var(--color-primary);
  border: 1px solid rgba(0, 196, 140, 0.4);
  border-radius: 2rem;
  padding: 0.3rem 1rem;
  margin-bottom: var(--space-4);
}
.hero h1 { font-size: var(--font-hero); font-weight: 800; line-height: 1.25; max-width: 56rem; }
.hero .subtitle { margin: var(--space-4) 0 var(--space-6); color: #b8c4d2; font-size: var(--font-lg); }
.hero-cta { display: flex; gap: var(--space-4); flex-wrap: wrap; }
.hero .btn-ghost { color: #e8eef5; border-color: rgba(232, 238, 245, 0.4); }
.hero .btn-ghost:hover { border-color: var(--color-primary); color: #fff; }
.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-5);
  margin-top: var(--space-8);
  padding-top: var(--space-5);
  border-top: 1px solid var(--color-line);
}
.stat strong { font-size: var(--font-2xl); font-weight: 800; color: var(--color-primary); display: block; }
.stat em { font-style: normal; font-size: var(--font-lg); }
.stat span { color: #9aa8b8; font-size: var(--font-sm); }

.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-5); }
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-5); }
.biz-card { padding: var(--space-5); }
.biz-photo {
  margin: calc(var(--space-5) * -1) calc(var(--space-5) * -1) var(--space-4);
  aspect-ratio: 3 / 2;
  overflow: hidden;
  border-radius: var(--radius) var(--radius) 0 0;
}
.biz-photo img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
.biz-card:hover .biz-photo img { transform: scale(1.05); }
.biz-head { display: flex; align-items: center; gap: var(--space-3); margin-bottom: var(--space-3); }
.biz-head .biz-icon { margin-bottom: 0; }
.biz-icon {
  display: inline-grid;
  place-items: center;
  width: 3rem; height: 3rem;
  border-radius: var(--radius-sm);
  color: var(--color-primary);
  background: rgba(0, 168, 120, 0.1);
  flex-shrink: 0;
}
.biz-card h3 { font-size: var(--font-lg); margin-bottom: var(--space-2); }
.more { color: var(--color-primary); font-size: var(--font-sm); }

.about-band { background: var(--bg-1); border-block: 1px solid var(--color-line); }
.about-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: var(--space-7); align-items: center; }
.about-grid .eyebrow { color: var(--color-primary); font-size: var(--font-sm); letter-spacing: 0.35em; text-transform: uppercase; }
.about-grid h2 { font-size: var(--font-xl); margin: var(--space-2) 0 var(--space-4); }
.summary { margin-bottom: var(--space-5); }
.about-photo {
  overflow: hidden;
  aspect-ratio: 866 / 465;
}
.about-photo img { width: 100%; height: 100%; object-fit: cover; }

.timeline {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-5);
  margin-bottom: var(--space-6);
}
.timeline-item { border-top: 0.1875rem solid var(--color-primary); padding-top: var(--space-3); }
.timeline-item strong { font-size: var(--font-xl); color: var(--color-primary); }

.partner-wall {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: var(--space-4);
}
.partner {
  display: grid;
  place-items: center;
  aspect-ratio: 2.4 / 1;
  padding: var(--space-3);
  overflow: hidden;
}
.partner img { max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; }

.news-card { padding: var(--space-6); }
.news-card time { color: var(--color-text-faint); font-size: var(--font-sm); }
.news-card h3 { margin: var(--space-2) 0; font-size: var(--font-lg); }
.news-card p { margin-bottom: var(--space-3); }

.center { text-align: center; margin-top: var(--space-6); }

.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-md);
  padding: 0.7rem 1.8rem;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.25s;
}
.btn-lg { padding: 0.9rem 2.4rem; font-size: var(--font-lg); }
.btn-primary {
  color: #04120c;
  font-weight: 600;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
}
.btn-primary:hover { filter: brightness(1.12); transform: translateY(-0.125rem); }
.btn-ghost { border: 1px solid var(--color-line); color: var(--color-text); }
.btn-ghost:hover { border-color: var(--color-primary); color: var(--color-primary); }

.cta-band {
  padding: var(--space-8) 0;
  background:
    radial-gradient(50rem 16rem at 50% 120%, rgba(0, 196, 140, 0.15), transparent),
    var(--bg-dark);
  border-block: 1px solid var(--color-line);
  color: #e8eef5;
}
.cta-band h2 { font-size: var(--font-xl); margin-bottom: var(--space-5); }
.cta-band .center { margin-top: 0; }

@media (max-width: 62em) {
  .grid-3, .grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .about-grid { grid-template-columns: 1fr; }
  .partner-wall { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .timeline { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 48em) {
  .grid-3, .grid-2, .timeline { grid-template-columns: 1fr; }
  .partner-wall { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .hero-stats { grid-template-columns: 1fr 1fr; }
}
</style>
