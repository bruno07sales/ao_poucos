<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  dashboard: { type: Object, required: true },
  levels: { type: Array, required: true },
  missionBusy: { type: Boolean, default: false },
})
const emit = defineEmits(['open-lesson', 'complete-mission'])
const selected = ref(1)
const level = computed(() => props.levels[selected.value - 1])
const done = computed(() => level.value.lessons.filter((lesson) => lesson.completed).length)
</script>

<template>
  <main class="view home-view">
    <section class="welcome">
      <p class="eyebrow">Sua jornada</p>
      <h1>Bom dia, {{ dashboard.user.name }}.</h1>
      <p>{{ dashboard.progress.completedLessons }} de {{ dashboard.progress.totalLessons }} aulas concluídas. Vá no seu ritmo.</p>
    </section>

    <section class="level-section" aria-labelledby="level-title">
      <p id="level-title" class="section-label">Escolha o nível</p>
      <div class="level-tabs" role="tablist">
        <button v-for="item in levels" :key="item.id" type="button" role="tab" :aria-selected="selected === item.number" :class="{ active: selected === item.number }" @click="selected = item.number">
          {{ item.number }}
        </button>
      </div>

      <article class="level-card">
        <div class="level-card-heading"><h2>Nível {{ level.number }} · {{ level.name }}</h2><span>{{ done }} de 6</span></div>
        <p>{{ level.description }}</p>
        <div class="progress-track" :aria-label="`${done} de 6 aulas concluídas`"><span :style="{ width: `${done / 6 * 100}%` }"></span></div>
      </article>
    </section>

    <article class="mission-card">
      <p class="eyebrow">Missão desta semana</p>
      <h2>{{ dashboard.mission.title }}</h2>
      <p>{{ dashboard.mission.description }}</p>
      <button type="button" class="button button-light" :disabled="dashboard.mission.status === 'completed' || missionBusy" @click="emit('complete-mission')">
        {{ missionBusy ? 'Confirmando…' : dashboard.mission.status === 'completed' ? 'Missão concluída ✓' : 'Já fiz' }}
      </button>
    </article>

    <section class="lessons-section" aria-labelledby="lessons-title">
      <p id="lessons-title" class="section-label">Aulas deste nível</p>
      <div class="lesson-list">
        <button v-for="lesson in level.lessons" :key="lesson.id" type="button" class="lesson-card" @click="emit('open-lesson', { lesson, level })">
          <span class="lesson-number">{{ lesson.number }}</span>
          <span class="lesson-copy"><strong>{{ lesson.title }}</strong><small>{{ lesson.subtitle }}</small></span>
          <span v-if="lesson.completed" class="status done" aria-label="Concluída">✓</span>
          <span v-else-if="!lesson.available" class="status locked" aria-label="Aula do plano Família">Plano</span>
          <span v-else-if="lesson.interactive" class="status ready">Pronta</span>
          <span v-else class="chevron" aria-hidden="true">›</span>
        </button>
      </div>
    </section>
  </main>
</template>
