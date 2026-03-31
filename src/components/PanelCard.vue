<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  actionLabel: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <article class="panel">
    <div class="panel-head">
      <div>
        <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
        <h3>{{ title }}</h3>
      </div>
      <a v-if="actionLabel" href="#">{{ actionLabel }}</a>
    </div>
    <slot />
  </article>
</template>
