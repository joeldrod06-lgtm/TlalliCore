<script setup>
defineProps({
  brand: {
    type: String,
    required: true,
  },
  descriptor: {
    type: String,
    required: true,
  },
  sections: {
    type: Array,
    required: true,
  },
  mobileOpen: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <aside class="sidebar" :class="{ open: mobileOpen }">
    <div class="sidebar-head">
      <div class="brand-mark">TC</div>
      <div>
        <p class="eyebrow">{{ descriptor }}</p>
        <h1>{{ brand }}</h1>
      </div>
    </div>

    <div class="sidebar-groups">
      <section v-for="section in sections" :key="section.title" class="sidebar-group">
        <p class="sidebar-group-title">{{ section.title }}</p>
        <nav class="sidebar-nav">
          <a
            v-for="item in section.items"
            :key="item.label"
            href="#"
            :class="['nav-link', { active: item.active }]"
          >
            <span class="nav-icon">
              <component :is="item.icon" />
            </span>
            <span class="nav-copy">
              <strong>{{ item.label }}</strong>
              <small>{{ item.meta }}</small>
            </span>
          </a>
        </nav>
      </section>
    </div>
    <div class="sidebar-actions">
      <button class="logout-button" type="button">
        <span class="logout-button-label">Cerrar sesion</span>
        <small>Salir del sistema</small>
      </button>
    </div>
  </aside>
</template>
