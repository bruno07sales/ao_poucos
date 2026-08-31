<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import BottomNav from './components/BottomNav.vue'
import HomeView from './components/HomeView.vue'
import PracticeView from './components/PracticeView.vue'
import NotebookView from './components/NotebookView.vue'
import LessonModal from './components/LessonModal.vue'
import { useAppData } from './composables/useAppData'

const { dashboard, levels, loading, error, load, completeLesson, usingMocks } = useAppData()
const activeView = ref('home')
const fontScale = ref(0)
const selectedLesson = ref(null)

function openLesson(payload) { selectedLesson.value = payload }
async function finishLesson(lesson) {
  await completeLesson(lesson)
  selectedLesson.value = null
}
</script>

<template>
  <div class="app-shell" :class="`font-scale-${fontScale}`">
    <AppHeader :points="dashboard?.user.points" :font-scale="fontScale" @change-font="fontScale = (fontScale + 1) % 3" @navigate-home="activeView = 'home'" />

    <div v-if="loading" class="state-screen" aria-live="polite">
      <div class="loader"></div><strong>Preparando suas aulas…</strong>
    </div>
    <div v-else-if="error" class="state-screen error-state">
      <strong>Não conseguimos carregar suas aulas.</strong><p>{{ error }}</p><button class="button button-primary" type="button" @click="load">Tentar novamente</button>
    </div>
    <template v-else>
      <HomeView v-if="activeView === 'home'" :dashboard="dashboard" :levels="levels" @open-lesson="openLesson" />
      <PracticeView v-else-if="activeView === 'practice'" />
      <NotebookView v-else :dashboard="dashboard" />
      <BottomNav :active="activeView" @navigate="activeView = $event" />
      <LessonModal v-if="selectedLesson" :lesson="selectedLesson.lesson" :level="selectedLesson.level" @close="selectedLesson = null" @complete="finishLesson" />
    </template>

    <span v-if="usingMocks" class="dev-badge" title="Configure VITE_API_URL para conectar o backend">dados de demonstração</span>
  </div>
</template>
