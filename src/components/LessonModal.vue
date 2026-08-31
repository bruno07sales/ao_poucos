<script setup>
defineProps({ lesson: { type: Object, required: true }, level: { type: Object, required: true } })
defineEmits(['close', 'complete', 'open-plan'])
</script>

<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <section class="lesson-modal" role="dialog" aria-modal="true" aria-labelledby="lesson-title">
      <button class="modal-close" type="button" aria-label="Fechar" @click="$emit('close')">×</button>
      <p class="eyebrow">Nível {{ level.number }} · Aula {{ lesson.number }}</p>
      <h1 id="lesson-title">{{ lesson.title }}</h1>
      <p>{{ lesson.subtitle }}</p>
      <div v-if="!lesson.available" class="locked-message"><strong>Esta aula faz parte do Plano Família.</strong><span>As duas primeiras aulas deste nível continuam gratuitas.</span></div>
      <div v-else class="lesson-steps">
        <h2>Nesta aula você vai</h2>
        <div><span>1</span><p>Ver uma demonstração clara e sem pressa.</p></div>
        <div><span>2</span><p>Praticar cada gesto no seu ritmo.</p></div>
        <div><span>3</span><p>Repetir até se sentir seguro.</p></div>
      </div>
      <button v-if="lesson.available" type="button" class="button button-primary full" @click="$emit('complete', lesson)">{{ lesson.completed ? 'Aula já concluída' : 'Concluir demonstração' }}</button>
      <button v-else type="button" class="button button-primary full" @click="$emit('open-plan')">Conhecer o Plano Família</button>
    </section>
  </div>
</template>
