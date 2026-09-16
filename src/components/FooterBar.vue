<script setup>
import { useI18n } from 'vue-i18n'
import { products } from '../data'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div class="col brand-col">
        <div class="brand">
          <img class="brand-logo" src="/images/logo.png" alt="Yinkai logo" loading="lazy" />
          <span class="brand-name">{{ t('footer.company') }}</span>
        </div>
        <p class="dim">{{ t('contact.addressValue') }}</p>
      </div>

      <div class="col">
        <h4>{{ t('footer.quickLinks') }}</h4>
        <ul>
          <li><RouterLink to="/about">{{ t('nav.about') }}</RouterLink></li>
          <li><RouterLink to="/news">{{ t('nav.news') }}</RouterLink></li>
          <li><RouterLink to="/careers">{{ t('nav.careers') }}</RouterLink></li>
          <li><RouterLink to="/contact">{{ t('nav.contact') }}</RouterLink></li>
        </ul>
      </div>

      <div class="col">
        <h4>{{ t('footer.products') }}</h4>
        <ul>
          <li v-for="p in products" :key="p.id">
            <RouterLink to="/products">{{ t(`products.items.${p.id}.name`) }}</RouterLink>
          </li>
        </ul>
      </div>

      <div class="col">
        <h4>{{ t('footer.contact') }}</h4>
        <ul class="contact-list">
          <li>{{ t('contact.tel') }}：021-69173481</li>
          <li>{{ t('contact.email') }}：lujiacao@yinkaish.com</li>
          <li>{{ t('contact.fax') }}：{{ t('contact.faxValue') }}</li>
        </ul>
        <div class="qr-row">
          <figure>
            <img src="/images/qrcode/wechat.webp" :alt="t('footer.wechat')" loading="lazy" />
            <figcaption>{{ t('footer.wechat') }}</figcaption>
          </figure>
          <figure>
            <img src="/images/qrcode/douyin.webp" :alt="t('footer.douyin')" loading="lazy" />
            <figcaption>{{ t('footer.douyin') }}</figcaption>
          </figure>
        </div>
      </div>
    </div>

    <div class="container footer-bottom">
      <span>{{ t('footer.copyright', { year }) }}</span>
      <span class="icp">{{ t('footer.icp') }}</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-line);
  background: var(--bg-1);
  padding-top: var(--space-7);
  margin-top: var(--space-section);
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1.4fr 1.2fr;
  gap: var(--space-6);
  padding-bottom: var(--space-7);
}
.brand { display: flex; align-items: center; gap: var(--space-3); margin-bottom: var(--space-4); }
.brand-logo { width: 2.75rem; height: 2.75rem; object-fit: contain; flex-shrink: 0; }
.brand-name { font-weight: 700; font-size: var(--font-md); color: var(--color-text); }
h4 {
  font-size: var(--font-md);
  margin-bottom: var(--space-4);
  color: var(--color-text);
}
.col li { margin-bottom: var(--space-2); }
.col a { color: var(--color-text-dim); font-size: var(--font-sm); transition: color 0.2s; }
.col a:hover { color: var(--color-primary); }
.dim { color: var(--color-text-dim); font-size: var(--font-sm); }
.contact-list li { color: var(--color-text-dim); font-size: var(--font-sm); }
.qr-row { display: flex; gap: var(--space-4); margin-top: var(--space-4); }
.qr-row figure { text-align: center; margin: 0; }
.qr-row img {
  width: 5.5rem; height: 5.5rem;
  border-radius: var(--radius-sm);
  background: #fff;
  padding: 0.25rem;
}
.qr-row figcaption { color: var(--color-text-dim); font-size: var(--font-xs); margin-top: var(--space-1); }
.footer-bottom {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding-top: var(--space-4);
  padding-bottom: var(--space-4);
  border-top: 1px solid var(--color-line);
  color: var(--color-text-faint);
  font-size: var(--font-xs);
}
@media (max-width: 48em) {
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
</style>
