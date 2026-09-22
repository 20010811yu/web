<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import PageHero from '../components/PageHero.vue'
import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'
import site from '../data/content/site.json'
import { tv } from '../utils/i18n-value'

const { t } = useI18n()

const formRef = ref()
const form = reactive({ name: '', phone: '', email: '', message: '' })

const rules = {
  name: [{ required: true, message: () => t('contact.form.rules.name'), trigger: 'blur' }],
  phone: [{ pattern: /^[\d\-+ ]{6,20}$/, message: () => t('contact.form.rules.phone'), trigger: 'blur' }],
  email: [{ type: 'email', message: () => t('contact.form.rules.email'), trigger: 'blur' }],
  message: [{ required: true, message: () => t('contact.form.rules.message'), trigger: 'blur' }],
}

async function submit() {
  await formRef.value.validate()
  // 前端模拟提交：后续对接后端接口
  ElMessage.success(t('contact.form.success'))
  formRef.value.resetFields()
}
</script>

<template>
  <div>
    <PageHero :title="t('contact.title')" :subtitle="t('contact.subtitle')" :eyebrow="'CONTACT'" />

    <section class="block">
      <div class="container contact-grid">
        <div class="info card">
          <h3>{{ t('contact.infoTitle') }}</h3>
          <ul>
            <li>
              <strong>{{ t('contact.address') }}</strong>
              <p class="dim">{{ tv(site.address) }}</p>
            </li>
            <li>
              <strong>{{ t('contact.tel') }}</strong>
              <p class="dim">021-69173481</p>
              <p class="dim">{{ tv(site.manager1) }} {{ site.telMobile1 }}</p>
              <p class="dim">{{ tv(site.manager2) }} {{ site.telMobile2 }}</p>
            </li>
            <li>
              <strong>{{ t('contact.email') }}</strong>
              <p class="dim">{{ site.email }}</p>
            </li>
            <li>
              <strong>{{ t('contact.fax') }}</strong>
              <p class="dim">{{ site.fax }}</p>
            </li>
          </ul>
        </div>

        <div class="form-wrap card">
          <h3>{{ t('contact.formTitle') }}</h3>
          <el-form ref="formRef" :model="form" :rules="rules" label-position="top" size="large">
            <el-form-item :label="t('contact.form.name')" prop="name">
              <el-input v-model="form.name" :placeholder="t('contact.form.name')" />
            </el-form-item>
            <el-form-item :label="t('contact.form.phone')" prop="phone">
              <el-input v-model="form.phone" :placeholder="t('contact.form.phone')" />
            </el-form-item>
            <el-form-item :label="t('contact.form.email')" prop="email">
              <el-input v-model="form.email" :placeholder="t('contact.form.email')" />
            </el-form-item>
            <el-form-item :label="t('contact.form.message')" prop="message">
              <el-input v-model="form.message" type="textarea" :rows="4" :placeholder="t('contact.form.message')" />
            </el-form-item>
            <el-button type="primary" size="large" @click="submit">{{ t('contact.form.submit') }}</el-button>
          </el-form>
        </div>
      </div>

      <div class="container">
        <!-- 地图占位：后续接入地图服务 -->
        <div class="map-placeholder">MAP</div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: var(--space-6);
  margin-bottom: var(--space-6);
}
.info, .form-wrap { padding: var(--space-6); }
h3 { font-size: var(--font-lg); margin-bottom: var(--space-5); }
.info li { margin-bottom: var(--space-5); }
.info strong { color: var(--color-primary); font-size: var(--font-md); display: block; margin-bottom: var(--space-1); }
.map-placeholder {
  height: 16rem;
  display: grid;
  place-items: center;
  border-radius: var(--radius);
  border: 1px dashed var(--color-line);
  color: var(--color-text-faint);
  letter-spacing: 0.5em;
}
@media (max-width: 62em) {
  .contact-grid { grid-template-columns: 1fr; }
}
</style>
