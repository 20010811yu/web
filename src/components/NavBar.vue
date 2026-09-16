<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { setLocale } from '../i18n'
import { applyRouteSeo } from '../seo'
import { imgSrc } from '../utils/img'

const { t, locale } = useI18n()
const route = useRoute()
const menuOpen = ref(false)

const links = computed(() => [
  { to: '/', key: 'nav.home' },
  { to: '/products', key: 'nav.products' },
  { to: '/about', key: 'nav.about' },
  { to: '/news', key: 'nav.news' },
  { to: '/careers', key: 'nav.careers' },
  { to: '/contact', key: 'nav.contact' },
])

function isActive(to) {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}

function toggleLang() {
  setLocale(locale.value === 'zh' ? 'en' : 'zh')
  applyRouteSeo(route)
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="navbar">
    <div class="container navbar-inner">
      <RouterLink to="/" class="brand" @click="closeMenu">
        <img class="brand-logo" :src="imgSrc('images/logo.png')" alt="Yinkai logo" />
        <span class="brand-name">{{ t('footer.company') }}<small>YINKAI PRECISION MACHINERY</small></span>
      </RouterLink>

      <nav class="nav-links" aria-label="main">
        <RouterLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="nav-link"
          :class="{ active: isActive(l.to) }"
        >{{ t(l.key) }}</RouterLink>
      </nav>

      <div class="nav-actions">
        <button class="lang-btn" type="button" @click="toggleLang">
          <svg viewBox="0 0 24 24" width="1.1em" height="1.1em" fill="none" stroke="currentColor" stroke-width="1.6">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
          </svg>
          {{ t('common.switchLang') }}
        </button>
        <button class="burger" type="button" :aria-expanded="menuOpen" aria-label="menu" @click="menuOpen = !menuOpen">
          <span /><span /><span />
        </button>
      </div>
    </div>

    <Transition name="drawer">
      <nav v-if="menuOpen" class="mobile-menu" @click.self="closeMenu">
        <RouterLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="mobile-link"
          :class="{ active: isActive(l.to) }"
          @click="closeMenu"
        >{{ t(l.key) }}</RouterLink>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(0.75rem);
  border-bottom: 1px solid var(--color-line);
}
.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.25rem;
  gap: var(--space-4);
}
.brand { display: flex; align-items: center; gap: var(--space-3); min-width: 0; }
.brand-logo { width: 2.75rem; height: 2.75rem; object-fit: contain; flex-shrink: 0; }
.brand-name {
  font-weight: 700;
  font-size: 1.05rem;
  line-height: 1.3;
  color: var(--color-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.brand-name small {
  display: block;
  font-size: 0.65rem;
  color: var(--color-text-faint);
  letter-spacing: 0.14em;
  font-weight: 500;
}
.nav-links { display: flex; gap: var(--space-5); }
.nav-link {
  font-size: var(--font-md);
  color: var(--color-text-dim);
  padding: var(--space-2) 0;
  position: relative;
  transition: color 0.2s;
}
.nav-link:hover, .nav-link.active { color: var(--color-text); }
.nav-link.active::after {
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: -0.25rem;
  height: 0.125rem;
  border-radius: 0.125rem;
  background: var(--color-primary);
}
.nav-actions { display: flex; align-items: center; gap: var(--space-3); }
.lang-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  background: transparent;
  border: 1px solid var(--color-line);
  color: var(--color-text-dim);
  font-size: var(--font-sm);
  padding: 0.45rem 0.9rem;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.2s;
}
.lang-btn:hover { color: var(--color-primary); border-color: var(--color-primary); }
.burger { display: none; background: none; border: none; cursor: pointer; padding: var(--space-2); }
.burger span {
  display: block;
  width: 1.5rem; height: 0.125rem;
  background: var(--color-text);
  margin: 0.35rem 0;
  border-radius: 0.125rem;
}
.mobile-menu {
  display: none;
  flex-direction: column;
  padding: var(--space-3) var(--space-5) var(--space-5);
  border-top: 1px solid var(--color-line);
  background: var(--bg-1);
}.mobile-link {
  padding: var(--space-3) 0;
  font-size: var(--font-lg);
  color: var(--color-text-dim);
  border-bottom: 1px solid var(--color-line);
}
.mobile-link.active { color: var(--color-primary); }
.drawer-enter-active, .drawer-leave-active { transition: all 0.25s ease; }
.drawer-enter-from, .drawer-leave-to { opacity: 0; transform: translateY(-0.5rem); }

@media (max-width: 48em) {
  .nav-links { display: none; }
  .burger { display: block; }
  .mobile-menu { display: flex; }
}
</style>
