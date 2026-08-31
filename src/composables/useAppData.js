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

  onMounted(load)
  return { dashboard, levels, loading, error, completedCount, load, completeLesson, usingMocks: USE_MOCKS }
}
