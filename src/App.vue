<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import BottomNav from './components/BottomNav.vue'
import HomeView from './components/HomeView.vue'
import PracticeView from './components/PracticeView.vue'
import NotebookView from './components/NotebookView.vue'
import LessonModal from './components/LessonModal.vue'
import PlanModal from './components/PlanModal.vue'
import { useAppData } from './composables/useAppData'

const { dashboard, levels, loading, error, load, completeLesson, completeMission, activateFamilyPlan, usingMocks } = useAppData()
const activeView = ref('home')
const fontScale = ref(0)
const selectedLesson = ref(null)
const planOpen = ref(false)
const planActive = ref(false)
const missionBusy = ref(false)
const toast = ref('')
let toastTimer

function notify(message) {
  toast.value = message
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { toast.value = '' }, 3200)
}

function openLesson(payload) { selectedLesson.value = payload }
async function finishLesson(lesson) {
  const wasCompleted = lesson.completed
  try {
    await completeLesson(lesson)
    selectedLesson.value = null
    notify(wasCompleted ? 'Esta aula já estava concluída.' : 'Aula concluída. Você ganhou 30 pontos!')
  } catch (caught) {
    notify(caught.message || 'Não foi possível concluir a aula.')
  }
}

async function finishMission() {
  missionBusy.value = true
  try {
    const completed = await completeMission()
    notify(completed ? 'Missão concluída. 20 pontos adicionados!' : 'Esta missão já foi concluída.')
  } catch (caught) {
    notify(caught.message || 'Não foi possível concluir a missão.')
  } finally {
    missionBusy.value = false
  }
}

function openPlan() {
  selectedLesson.value = null
  planOpen.value = true
}

function activatePlan() {
  activateFamilyPlan()
  planActive.value = true
  notify('Plano Família ativado na demonstração. Todas as aulas foram liberadas!')
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
      <HomeView v-if="activeView === 'home'" :dashboard="dashboard" :levels="levels" :mission-busy="missionBusy" @open-lesson="openLesson" @complete-mission="finishMission" />
      <PracticeView v-else-if="activeView === 'practice'" />
      <NotebookView v-else :dashboard="dashboard" />
      <BottomNav :active="activeView" @navigate="activeView = $event" />
      <LessonModal v-if="selectedLesson" :lesson="selectedLesson.lesson" :level="selectedLesson.level" @close="selectedLesson = null" @complete="finishLesson" @open-plan="openPlan" />
      <PlanModal v-if="planOpen" :active="planActive" @close="planOpen = false" @activate="activatePlan" />
    </template>

    <span v-if="usingMocks" class="dev-badge" title="Configure VITE_API_URL para conectar o backend">dados de demonstração</span>
    <div v-if="toast" class="app-toast" role="status" aria-live="polite">{{ toast }}</div>
  </div>
</template>
