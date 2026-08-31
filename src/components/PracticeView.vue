<script setup>
import { computed, ref } from 'vue'
import { practiceItems } from '../data/mockData'

const index = ref(0)
const response = ref(null)
const points = ref(0)
const item = computed(() => practiceItems[index.value])

function answer(value) {
  if (response.value !== null) return
  response.value = value
  if (value === item.value.answer) points.value += 15
}

function next() {
  index.value = (index.value + 1) % practiceItems.length
  response.value = null
}
</script>

<template>
  <main class="view practice-view">
    <section class="welcome">
      <p class="eyebrow">Treino de segurança</p>
      <h1>Reconheça mensagens suspeitas</h1>
      <p>Leia com calma. Você pode tentar quantas vezes quiser.</p>
    </section>
    <div class="quiz-progress"><span>Situação {{ index + 1 }} de {{ practiceItems.length }}</span><strong>+{{ points }} pontos</strong></div>
    <article class="message-card">
      <div class="message-avatar">{{ item.sender.charAt(0) }}</div>
      <div><div class="message-meta"><strong>{{ item.sender }}</strong><time>{{ item.time }}</time></div><p>{{ item.text }}</p></div>
    </article>
    <section class="quiz-question">
      <h2>{{ item.question }}</h2>
      <div class="answer-grid">
        <button type="button" class="button button-primary" :disabled="response !== null" @click="answer(true)">Sim, parece segura</button>
        <button type="button" class="button button-outline" :disabled="response !== null" @click="answer(false)">Não, pode ser golpe</button>
      </div>
    </section>
    <div v-if="response !== null" class="feedback" :class="response === item.answer ? 'success' : 'warning'" role="status">
      <strong>{{ response === item.answer ? 'Muito bem!' : 'Vamos olhar mais uma vez.' }}</strong>
      <p>{{ item.feedback }}</p>
      <button type="button" class="button button-dark" @click="next">Próxima situação</button>
    </div>
  </main>
</template>
