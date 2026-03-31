<script setup>
import PanelCard from './PanelCard.vue'

defineProps({
  eyebrow: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  lead: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <PanelCard :eyebrow="eyebrow" :title="title">
    <div class="insight-highlight">
      <span>Recomendacion</span>
      <strong>{{ lead }}</strong>
    </div>

    <ul class="insight-list">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </PanelCard>
</template>
