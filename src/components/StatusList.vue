<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="status-list">
    <div v-for="item in items" :key="item.zone" class="status-item">
      <div>
        <strong>{{ item.zone }}</strong>
        <p>{{ item.note }}</p>
      </div>
      <span :class="['status-badge', item.tone]">{{ item.status }}</span>
    </div>
  </div>
</template>
