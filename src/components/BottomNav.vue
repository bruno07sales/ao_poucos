<script setup>
defineProps({ active: { type: String, required: true } })
defineEmits(['navigate'])

const items = [
  { id: 'home', icon: '⌂', label: 'Aprender' },
  { id: 'practice', icon: '✓', label: 'Praticar' },
  { id: 'notebook', icon: '★', label: 'Caderneta' },
]
</script>

<template>
  <nav class="bottom-nav" aria-label="Navegação principal">
    <button v-for="item in items" :key="item.id" type="button" :class="{ active: active === item.id }" @click="$emit('navigate', item.id)">
      <span class="nav-icon" aria-hidden="true">{{ item.icon }}</span>
      <span>{{ item.label }}</span>
    </button>
  </nav>
</template>
