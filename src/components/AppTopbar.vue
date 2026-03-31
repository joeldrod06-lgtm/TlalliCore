<script setup>
defineProps({
  searchPlaceholder: {
    type: String,
    default: '',
  },
})

defineEmits(['toggle-sidebar'])
</script>

<template>
  <header class="topbar">
    <div class="topbar-left">
      <button class="menu-toggle" aria-label="Abrir menu" @click="$emit('toggle-sidebar')">Menu</button>
      <div class="search-box">
        <span class="search-icon">Buscar</span>
        <input type="text" :placeholder="searchPlaceholder" />
      </div>
    </div>
  </header>
</template>
