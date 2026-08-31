export const dashboard = {
  user: { id: 'usr_01', name: 'Cida', points: 120, streak: 3 },
  progress: { completedLessons: 3, totalLessons: 30, stamps: 2 },
  mission: {
    id: 'mission_audio',
    title: 'Mande um áudio de verdade para alguém',
    description: 'No seu celular mesmo. Vale 20 pontos quando alguém da família confirmar.',
    points: 20,
    status: 'open',
  },
}

const lessonNames = [
  ['Atender e desligar sem derrubar', 'Ligar e salvar um contato novo', 'Destravar a tela e guardar a senha', 'Deixar a tela mais fácil de ver', 'O que cada desenho quer dizer', 'Não vou estragar: o que dá e o que não dá'],
  ['Mandar mensagem e áudio', 'Entender as notificações', 'Digitar sem errar as letras', 'Chamada de vídeo com a família', 'Tirar foto e enviar para alguém', 'Wi-Fi e dados móveis'],
  ['Reconhecer golpes e links falsos', 'Senhas: criar, guardar e não perder', 'Marcar consulta no aplicativo de saúde', 'Pix com segurança', 'Encontrar e instalar um aplicativo', 'Pedir ajuda sem perder a autonomia'],
  ['Usar mapas e chegar a um lugar', 'Comprar passagem e acompanhar viagem', 'Entrar no gov.br', 'Comprar sem cair em site falso', 'Contestar uma cobrança', 'Organizar documentos no celular'],
  ['Ajudar sem tomar o celular da mão', 'Explicar um passo em três frases', 'Montar um encontro de 40 minutos', 'Reconhecer medo e acolher', 'Ajudar à distância', 'Virar monitor da turma'],
]

const levelMeta = [
  ['Primeiros toques', 'O aparelho na mão, sem medo de estragar nada. Só o essencial do dia.'],
  ['Dia a dia', 'Conversar, ver a família e resolver o que aparece na tela todos os dias.'],
  ['Com autonomia', 'Dinheiro, saúde e segurança pelo celular, com o pé no chão.'],
  ['Vida conectada', 'Serviços, viagens e compras com mais independência.'],
  ['Ensinar e ajudar', 'Passe adiante o que aprendeu, com paciência e método.'],
]

export const levels = levelMeta.map(([name, description], levelIndex) => ({
  id: `level_${levelIndex + 1}`,
  number: levelIndex + 1,
  name,
  description,
  lessons: lessonNames[levelIndex].map((title, lessonIndex) => ({
    id: `lesson_${levelIndex + 1}_${lessonIndex + 1}`,
    number: lessonIndex + 1,
    title,
    subtitle: lessonIndex < 2 ? 'Pronta para praticar agora' : 'Aprenda no seu ritmo, um passo por vez',
    completed: levelIndex === 0 && lessonIndex < 3,
    available: levelIndex === 0 || lessonIndex < 2,
    interactive: (levelIndex === 1 && lessonIndex < 2) || (levelIndex === 2 && lessonIndex === 0),
  })),
}))

export const practiceItems = [
  {
    id: 'quiz_1', sender: 'Filho', time: '10:42',
    text: 'Mãe, troquei de número. Preciso que faça um Pix agora, depois explico.',
    question: 'Esta mensagem parece segura?', answer: false,
    feedback: 'Cuidado: urgência, dinheiro e número novo juntos são sinais comuns de golpe.',
  },
  {
    id: 'quiz_2', sender: 'Posto de saúde', time: '14:10',
    text: 'Sua consulta de amanhã às 9h está confirmada. Não responda a esta mensagem.',
    question: 'Esta mensagem parece segura?', answer: true,
    feedback: 'Parece um aviso normal: não pede senha, código, pagamento nem clique.',
  },
  {
    id: 'quiz_3', sender: 'Banco urgente', time: '18:26',
    text: 'Sua conta será bloqueada. Informe sua senha no link para evitar o bloqueio.',
    question: 'Esta mensagem parece segura?', answer: false,
    feedback: 'Bancos não pedem sua senha por mensagem. Abra o aplicativo oficial ou ligue para o banco.',
  },
]

export async function mockRequest(resource) {
  await new Promise((resolve) => setTimeout(resolve, 350))
  if (resource === 'dashboard') return structuredClone(dashboard)
  if (resource === 'levels') return structuredClone(levels)
  throw new Error(`Mock não encontrado: ${resource}`)
}
