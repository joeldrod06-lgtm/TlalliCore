<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  trend: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article class="kpi-card">
    <p>{{ label }}</p>
    <strong>{{ value }}</strong>
    <span>{{ trend }}</span>
  </article>
</template>
