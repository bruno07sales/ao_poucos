<script setup>
defineProps({ dashboard: { type: Object, required: true } })
const stamps = [
  { icon: '3', title: 'Três dias seguidos', earned: true },
  { icon: '100', title: 'Cem pontos', earned: true },
  { icon: '✉', title: 'Primeira mensagem', earned: false },
  { icon: '◉', title: 'Olho vivo contra golpes', earned: false },
  { icon: '✓', title: 'Nível 1 completo', earned: false },
  { icon: '☀', title: 'Aprendi com calma', earned: false },
]
</script>

<template>
  <main class="view notebook-view">
    <section class="welcome">
      <p class="eyebrow">Suas conquistas</p>
      <h1>Caderneta de selos</h1>
      <p>Cada passo conta. Aqui fica tudo o que você já conquistou.</p>
    </section>
    <section class="score-card">
      <div><strong>{{ dashboard.user.points }}</strong><span>pontos</span></div>
      <div><strong>{{ dashboard.progress.completedLessons }}</strong><span>aulas</span></div>
      <div><strong>{{ dashboard.progress.stamps }}</strong><span>selos</span></div>
    </section>
    <section class="stamp-grid" aria-label="Selos">
      <article v-for="stamp in stamps" :key="stamp.title" class="stamp-card" :class="{ muted: !stamp.earned }">
        <div class="stamp-icon">{{ stamp.icon }}</div><strong>{{ stamp.title }}</strong><small>{{ stamp.earned ? 'Conquistado' : 'Continue aprendendo' }}</small>
      </article>
    </section>
  </main>
</template>
