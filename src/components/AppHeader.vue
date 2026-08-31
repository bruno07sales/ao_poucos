<script setup>
defineProps({ points: { type: Number, default: 0 }, fontScale: { type: Number, default: 0 } })
defineEmits(['change-font', 'navigate-home'])
</script>

<template>
  <header class="app-header">
    <button class="brand" type="button" aria-label="Ir para o início" @click="$emit('navigate-home')">
      <span class="brand-mark">A</span>
      <span>Aos Poucos</span>
    </button>
    <div class="header-actions">
      <div class="points" aria-label="Pontuação"><strong>{{ points }}</strong><span>pontos</span></div>
      <button class="font-button" type="button" aria-label="Mudar tamanho do texto" @click="$emit('change-font')">
        {{ fontScale === 0 ? 'A+' : fontScale === 1 ? 'A++' : 'A' }}
      </button>
    </div>
  </header>
</template>
