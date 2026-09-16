<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const showWechat = ref(false)
</script>

<template>
  <nav class="mobile-contact-bar" aria-label="quick contact">
    <a class="bar-item" href="tel:021-69173481">
      <svg viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="none" stroke="currentColor" stroke-width="1.7">
        <path d="M4 5c0-1 1-2 2-2h2l2 4-2 2c1 2 3 4 5 5l2-2 4 2v2c0 1-1 2-2 2C10 18 6 14 4 5z" />
      </svg>
      <span>{{ t('contact.tel') }}</span>
    </a>
    <button type="button" class="bar-item" @click="showWechat = true">
      <svg viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="none" stroke="currentColor" stroke-width="1.7">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 9h16M9 9v11" />
      </svg>
      <span>{{ t('footer.wechatLabel') }}</span>
    </button>
    <RouterLink class="bar-item inquiry" to="/contact">
      <svg viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="none" stroke="currentColor" stroke-width="1.7">
        <path d="M21 11.5a8.5 8.5 0 1 1-4-7.2L21 3l-1.2 4.2c.7 1.2 1.2 2.7 1.2 4.3z" />
      </svg>
      <span>{{ t('products.inquire') }}</span>
    </RouterLink>

    <Teleport to="body">
      <div v-if="showWechat" class="wechat-mask" @click="showWechat = false">
        <div class="wechat-pop" @click.stop>
          <img :src="'/images/qrcode/wechat.webp'" alt="WeChat" width="92" height="92" />
          <p>{{ t('footer.wechat') }}</p>
          <button type="button" @click="showWechat = false">✕</button>
        </div>
      </div>
    </Teleport>
  </nav>
</template>

<style scoped>
.mobile-contact-bar { display: none; }
@media (max-width: 48em) {
  .mobile-contact-bar {
    display: flex;
    position: fixed;
    left: 0; right: 0; bottom: 0;
    z-index: 95;
    background: var(--bg-1);
    border-top: 1px solid var(--color-line);
    padding-bottom: env(safe-area-inset-bottom);
  }
  .bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.15rem;
    padding: 0.55rem 0;
    background: none;
    border: none;
    color: var(--color-text-dim);
    font-size: var(--font-xs);
    cursor: pointer;
  }
  .bar-item.inquiry { color: var(--color-primary); font-weight: 600; }
}
.wechat-mask {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: grid;
  place-items: center;
  background: rgba(10, 17, 28, 0.6);
}
.wechat-pop {
  position: relative;
  background: var(--bg-1);
  border-radius: var(--radius);
  padding: var(--space-5);
  text-align: center;
}
.wechat-pop img { width: 12rem; height: 12rem; border-radius: var(--radius-sm); background: #fff; padding: 0.35rem; }
.wechat-pop p { margin-top: var(--space-2); color: var(--color-text); }
.wechat-pop button {
  position: absolute;
  top: 0.5rem; right: 0.75rem;
  background: none; border: none;
  font-size: var(--font-lg);
  color: var(--color-text-faint);
  cursor: pointer;
}
</style>
