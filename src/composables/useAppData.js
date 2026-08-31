import { computed, onMounted, ref } from 'vue'
import { api, USE_MOCKS } from '../services/api'
import { mockRequest } from '../data/mockData'

export function useAppData() {
  const dashboard = ref(null)
  const levels = ref([])
  const loading = ref(true)
  const error = ref('')

  const completedCount = computed(() => levels.value.flatMap((level) => level.lessons).filter((lesson) => lesson.completed).length)

  async function load() {
    loading.value = true
    error.value = ''
    try {
      const get = USE_MOCKS ? mockRequest : (resource) => resource === 'dashboard' ? api.getDashboard() : api.getLevels()
      ;[dashboard.value, levels.value] = await Promise.all([get('dashboard'), get('levels')])
    } catch (caught) {
      error.value = caught.message || 'Não foi possível carregar seus dados.'
    } finally {
      loading.value = false
    }
  }

  async function completeLesson(lesson) {
    if (lesson.completed) return
    if (!USE_MOCKS) await api.completeLesson(lesson.id)
    lesson.completed = true
    dashboard.value.user.points += 30
    dashboard.value.progress.completedLessons += 1
  }

  async function completeMission() {
    const mission = dashboard.value.mission
    if (!mission || mission.status === 'completed') return false
    if (!USE_MOCKS) await api.completeMission(mission.id)
    mission.status = 'completed'
    dashboard.value.user.points += mission.points
    return true
  }

  function activateFamilyPlan() {
    levels.value.forEach((level) => level.lessons.forEach((lesson) => { lesson.available = true }))
  }

  onMounted(load)
  return { dashboard, levels, loading, error, completedCount, load, completeLesson, completeMission, activateFamilyPlan, usingMocks: USE_MOCKS }
}
