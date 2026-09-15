<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import PageHero from '../components/PageHero.vue'
import { products } from '../data'
import { productParams, L as paramLabels } from '../data/params'
import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'

const { t, tm, rt, locale } = useI18n()
const activeId = ref(products[0].id)
const active = () => products.find((p) => p.id === activeId.value)
const advantages = () => {
  const msgs = tm(`products.items.${activeId.value}.advantages`)
  return Array.isArray(msgs) ? msgs.map(rt) : [String(msgs)]
}

// 双语值取值：字符串原样，对象按当前语言
const tv = (v) => (typeof v === 'string' ? v : v[locale.value])
const paramLabelOf = (k) => (paramLabels[k] ? paramLabels[k][locale.value] : k)
// 当前产品线的型号列表；view: 'grid' 型号卡片 | 'detail' 单型号参数
const models = computed(() => productParams[activeId.value] || [])
const activeModelIndex = ref(null)
watch(activeId, () => { activeModelIndex.value = null })
const currentModel = computed(() => (activeModelIndex.value == null ? null : models.value[activeModelIndex.value]))
const modelLabel = (m) => (typeof m.name === 'string' ? `${m.name}（${tv(m.sub)}）` : `${tv(m.name)}`)

function selectLine(id) {
  activeId.value = id
  activeModelIndex.value = null
}
function selectModel(i) {
  activeModelIndex.value = i
}
</script>

<template>
  <div>
    <PageHero :title="t('products.title')" :subtitle="t('products.subtitle')" />

    <section class="block">
      <div class="container">
        <div class="product-layout">
          <aside class="product-nav">
            <template v-for="p in products" :key="p.id">
              <button
                type="button"
                class="nav-item"
                :class="{ active: activeId === p.id }"
                @click="selectLine(p.id)"
              >{{ t(`products.items.${p.id}.name`) }}</button>
              <!-- 展开的型号子菜单：仅当前产品线显示 -->
              <div v-if="activeId === p.id && models.length" class="sub-list">
                <button
                  v-for="(m, i) in models"
                  :key="modelLabel(m)"
                  type="button"
                  class="sub-item"
                  :class="{ active: activeModelIndex === i }"
                  @click="selectModel(i)"
                >
                  <span class="sub-arrow">›</span>
                  {{ typeof m.name === 'string' ? m.name : tv(m.name) }}
                  <small v-if="m.sub">{{ tv(m.sub) }}</small>
                </button>
              </div>
            </template>
          </aside>

          <div class="product-detail card">
            <div class="product-scene">
              <img
                v-if="active().image"
                :src="active().image"
                :alt="t(`products.items.${activeId}.name`)"
                loading="lazy"
              />
              <div v-else class="scene-placeholder" aria-hidden="true">
                <span>YINKAI</span>
              </div>
            </div>

            <h2>{{ t(`products.items.${activeId}.name`) }}</h2>

            <h3 class="sub">{{ t('products.scene') }}</h3>
            <p class="dim">{{ t(`products.items.${activeId}.scene`) }}</p>

            <h3 class="sub">{{ t('products.advantages') }}</h3>
            <ul class="adv-list">
              <li v-for="(a, i) in advantages()" :key="i">{{ a }}</li>
            </ul>

            <h3 class="sub">{{ t('products.modelsTitle') }}</h3>
            <!-- 型号卡片网格 -->
            <div v-if="activeModelIndex == null" class="model-grid">
              <button
                v-for="(m, i) in models"
                :key="modelLabel(m)"
                type="button"
                class="card model-card"
                @click="selectModel(i)"
              >
                <img :src="m.image" :alt="modelLabel(m)" loading="lazy" />
                <strong>{{ typeof m.name === 'string' ? m.name : tv(m.name) }}</strong>
                <span v-if="m.sub" class="dim">{{ tv(m.sub) }}</span>
              </button>
            </div>

            <!-- 单型号参数详情 -->
            <div v-else class="model-detail">
              <button type="button" class="back-btn" @click="activeModelIndex = null">
                ← {{ t('products.backToModels') }}
              </button>
              <h4 class="model-title">{{ modelLabel(currentModel) }}</h4>
              <div v-if="currentModel.rows.length" class="model-block">
                <el-table :data="currentModel.rows" class="params-table" size="small">
                  <el-table-column width="45%">
                    <template #default="{ row }">{{ paramLabelOf(row.k) }}</template>
                  </el-table-column>
                  <el-table-column>
                    <template #default="{ row }">{{ tv(row.v) }}</template>
                  </el-table-column>
                </el-table>
              </div>
              <p v-else class="dim">{{ t('products.todo') }}</p>
            </div>

            <RouterLink to="/contact" class="inquire-btn">
              {{ t('products.inquire') }} →
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.product-layout {
  display: grid;
  grid-template-columns: 18rem 1fr;
  gap: var(--space-6);
  align-items: start;
}
.product-nav { display: grid; gap: var(--space-2); position: sticky; top: 5.5rem; }
.nav-item {
  text-align: left;
  background: transparent;
  border: 1px solid var(--color-line);
  color: var(--color-text-dim);
  font-size: var(--font-md);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s;
}
.nav-item:hover { color: var(--color-text); border-color: var(--color-primary); }
.nav-item.active {
  color: var(--color-primary);
  border-color: var(--color-primary);
  background: rgba(0, 196, 140, 0.08);
}
.product-detail { padding: var(--space-6); }
.product-scene {
  border-radius: var(--radius-sm);
  overflow: hidden;
  margin: 0 auto var(--space-5);
  aspect-ratio: 3 / 2;
  max-width: 48.5rem; /* 870px @18px root：不超过图片原生尺寸，避免拉伸发虚 */
  display: grid;
  place-items: center;
  background:
    radial-gradient(40rem 14rem at 70% -20%, rgba(0, 168, 120, 0.08), transparent),
    var(--bg-2);
}
.product-scene img { max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; }
.scene-placeholder {
  display: grid;
  place-items: center;
  height: 100%;
  color: var(--color-text-faint);
  font-size: var(--font-2xl);
  letter-spacing: 0.4em;
}
.product-detail h2 { font-size: var(--font-xl); margin-bottom: var(--space-4); }
.sub {
  font-size: var(--font-lg);
  color: var(--color-primary);
  margin: var(--space-5) 0 var(--space-2);
}
.adv-list { padding-left: 0; }
.adv-list li {
  position: relative;
  padding-left: var(--space-5);
  margin-bottom: var(--space-2);
  color: var(--color-text-dim);
}
.adv-list li::before {
  content: '';
  position: absolute;
  left: 0; top: 0.7em;
  width: 0.5rem; height: 0.5rem;
  border-radius: 50%;
  background: var(--color-primary);
}
.params-table { margin-bottom: var(--space-5); }
.model-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  gap: var(--space-5);
}
.model-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-5);
  cursor: pointer;
  font: inherit;
  color: inherit;
}
.model-card img {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: contain;
  margin-bottom: var(--space-2);
}
.model-card strong { font-size: var(--font-md); color: var(--color-text); }
.model-card span { font-size: var(--font-sm); }
.model-detail { margin-top: var(--space-2); }
.back-btn {
  background: none;
  border: none;
  color: var(--color-primary);
  font-size: var(--font-md);
  cursor: pointer;
  padding: 0;
  margin-bottom: var(--space-4);
}
.model-title { font-size: var(--font-lg); margin-bottom: var(--space-4); color: var(--color-text); }
.sub-list { display: grid; gap: var(--space-1); margin: calc(var(--space-1) * -1) 0 var(--space-2) var(--space-2); }
.sub-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  text-align: left;
  background: none;
  border: none;
  color: var(--color-text-dim);
  font-size: var(--font-sm);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s;
}
.sub-item small { color: var(--color-text-faint); font-size: var(--font-xs); }
.sub-item:hover { color: var(--color-primary); }
.sub-item.active { color: var(--color-primary); background: rgba(0, 168, 120, 0.08); }
.sub-arrow { color: var(--color-primary); }
.inquire-btn {
  display: inline-block;
  color: #04120c;
  font-weight: 600;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  padding: 0.7rem 1.8rem;
  border-radius: 2rem;
}
@media (max-width: 62em) {
  .product-layout { grid-template-columns: 1fr; }
  .product-nav { position: static; grid-template-columns: 1fr 1fr; display: grid; }
}
@media (max-width: 48em) {
  .product-nav { grid-template-columns: 1fr; }
}
</style>
