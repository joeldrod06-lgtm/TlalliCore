<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  labels: {
    type: Array,
    required: true,
  },
  values: {
    type: Array,
    required: true,
  },
  footer: {
    type: String,
    default: '',
  },
  tone: {
    type: String,
    default: 'primary',
  },
  suffix: {
    type: String,
    default: '',
  },
})

const width = 280
const height = 160
const padding = 18

const maxValue = computed(() => Math.max(...props.values))
const minValue = computed(() => Math.min(...props.values))
const range = computed(() => Math.max(maxValue.value - minValue.value, 1))

const points = computed(() =>
  props.values
    .map((value, index) => {
      const x = padding + (index * (width - padding * 2)) / Math.max(props.values.length - 1, 1)
      const normalized = (value - minValue.value) / range.value
      const y = height - padding - normalized * (height - padding * 2)
      return `${x},${y}`
    })
    .join(' ')
)

const bars = computed(() =>
  props.values.map((value, index) => {
    const barWidth = 28
    const gap = (width - padding * 2 - barWidth * props.values.length) / Math.max(props.values.length - 1, 1)
    const x = padding + index * (barWidth + gap)
    const normalized = (value - minValue.value) / range.value
    const barHeight = 28 + normalized * (height - padding * 2 - 28)
    const y = height - padding - barHeight

    return { x, y, width: barWidth, height: barHeight }
  })
)

const summaryValue = computed(() => props.values[props.values.length - 1])
const isBar = computed(() => props.tone === 'bar')
</script>

<template>
  <div class="chart-card" :class="`tone-${tone}`">
    <div class="chart-head">
      <div>
        <strong>{{ title }}</strong>
        <small>{{ subtitle }}</small>
      </div>
      <span class="chart-summary">{{ summaryValue }}{{ suffix }}</span>
    </div>

    <svg v-if="!isBar" class="chart-svg" :viewBox="`0 0 ${width} ${height}`" preserveAspectRatio="none">
      <line x1="18" y1="20" x2="262" y2="20" class="chart-grid" />
      <line x1="18" y1="80" x2="262" y2="80" class="chart-grid" />
      <line x1="18" y1="142" x2="262" y2="142" class="chart-grid" />
      <polyline :points="points" class="chart-line" />
      <circle
        v-for="(point, index) in points.split(' ')"
        :key="`${title}-${labels[index]}`"
        :cx="point.split(',')[0]"
        :cy="point.split(',')[1]"
        r="4"
        class="chart-dot"
      />
    </svg>

    <svg v-else class="chart-svg" :viewBox="`0 0 ${width} ${height}`" preserveAspectRatio="none">
      <line x1="18" y1="20" x2="262" y2="20" class="chart-grid" />
      <line x1="18" y1="80" x2="262" y2="80" class="chart-grid" />
      <line x1="18" y1="142" x2="262" y2="142" class="chart-grid" />
      <rect
        v-for="(bar, index) in bars"
        :key="`${title}-${labels[index]}`"
        :x="bar.x"
        :y="bar.y"
        :width="bar.width"
        :height="bar.height"
        rx="8"
        class="chart-bar"
      />
    </svg>

    <div class="chart-labels">
      <span v-for="label in labels" :key="`${title}-${label}`">{{ label }}</span>
    </div>

    <p class="chart-footer">{{ footer }}</p>
  </div>
</template>
