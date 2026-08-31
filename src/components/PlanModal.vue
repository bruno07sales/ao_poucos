<script setup>
defineProps({ active: { type: Boolean, default: false } })
defineEmits(['close', 'activate'])
</script>

<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <section class="lesson-modal plan-modal" role="dialog" aria-modal="true" aria-labelledby="plan-title">
      <button class="modal-close" type="button" aria-label="Fechar" @click="$emit('close')">×</button>
      <p class="eyebrow">Plano Família</p>
      <h1 id="plan-title">Aprender com apoio, sem perder a autonomia.</h1>
      <p>Libere os cinco níveis e acompanhe todas as 30 aulas.</p>

      <div class="plan-price"><strong>R$ 24,90</strong><span>por mês para a família</span></div>
      <ul class="plan-benefits">
        <li>Todos os níveis e aulas liberados</li>
        <li>Missões confirmadas pela família</li>
        <li>Relatório de progresso</li>
        <li>Uma tutoria por vídeo a cada mês</li>
      </ul>

      <div v-if="active" class="plan-active" role="status">Plano Família ativo nesta demonstração.</div>
      <button v-else type="button" class="button button-primary full" @click="$emit('activate')">Ativar na demonstração</button>
      <button type="button" class="button button-quiet full" @click="$emit('close')">{{ active ? 'Continuar aprendendo' : 'Agora não' }}</button>
    </section>
  </div>
</template>
