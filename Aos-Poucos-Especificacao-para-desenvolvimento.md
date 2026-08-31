# Aos Poucos

**Documento de especificação para desenvolvimento**

Aplicativo de alfabetização digital para pessoas idosas. Versão 1.0 do documento — agosto de 2026. Acompanha o protótipo navegável “Aos Poucos.dc.html”.

## 1. Resumo do produto

Aos Poucos ensina uma pessoa idosa a usar o próprio celular por meio de prática guiada em telas de treino, e não por vídeos ou textos explicativos. A pessoa toca numa tela falsa, é conduzida um passo por vez, erra sem consequência e recebe correção imediata em linguagem simples.

O material didático parte de queixas documentadas em cartilhas, cursos e estudos brasileiros sobre inclusão digital de pessoas idosas. As referências estão na seção 15 e ficam visíveis dentro do próprio aplicativo, na aba Fontes.

**Diferença central:** vídeo e cartilha já existem de graça na internet. O que não existe em escala é prática guiada com correção, verificação por outra pessoa e registro de progresso. É isso que o produto entrega e é isso que sustenta a cobrança.

## 2. Público e princípios obrigatórios de design

### 2.1 Público

| **Perfil**                | **Descrição**                                                                    | **Nível de entrada** |
|---------------------------|----------------------------------------------------------------------------------|----------------------|
| Aprendiz iniciante        | Primeiro smartphone ou uso restrito a atender ligação. Em geral 75 anos ou mais. | Nível 1              |
| Aprendiz intermediário    | Já manda mensagem, trava no resto. Em geral 65 a 75 anos.                        | Nível 2              |
| Aprendiz autônomo         | Quer resolver dinheiro, saúde e segurança sozinho. Em geral 60 a 70 anos.        | Nível 3              |
| Familiar pagante          | Filho, filha ou neto. É quem assina e acompanha o progresso. Não é o aprendiz.   | —                    |
| Instrutor                 | Conduz turmas em ONG, unidade de saúde ou centro de convivência.                 | —                    |
| Gestor público ou privado | Compra vagas e precisa de relatório de frequência e certificado.                 | —                    |

As faixas etárias são sugestões de entrada, não travas. O aplicativo deve permitir que a pessoa escolha e troque de nível livremente, e o texto na tela deve dizer isso.

### 2.2 Princípios não negociáveis

- **Uma instrução por tela.** Nunca duas ações simultâneas. Redução de carga cognitiva.

- **Sem cronômetro em nenhum exercício.** Pressão de tempo prejudica desempenho nesta faixa de idade e aumenta abandono.

- **Sem punição por erro.** Errar não retira pontos, não zera progresso, não bloqueia avanço. O erro gera correção, não perda.

- **Sem ranking entre pessoas.** Progresso é comparado apenas com a própria pessoa. Competição desmotiva este público.

- **Alvo de toque mínimo de 48 dp.** Espaçamento mínimo de 8 dp entre alvos.

- **Texto base de 20 sp**, escalável até 200% sem quebra de layout e sem corte de conteúdo.

- **Contraste mínimo de 4,5:1 para texto** e 3:1 para elementos gráficos informativos.

- **Nenhum gesto complexo obrigatório.** Toque simples sempre disponível como alternativa a arrastar, pinçar ou deslizar.

- **Narração em voz alta** de toda instrução, em português do Brasil, acionada por botão visível.

- **Nada é destrutivo.** Nenhuma ação dentro do app pode apagar dados do celular da pessoa ou enviar mensagem real sem confirmação explícita.

## 3. Modelo de receita

A premissa é que quem aprende raramente é quem paga. A pessoa idosa costuma não ter disposição para assinar serviço digital nem cartão vinculado a assinatura recorrente. Por isso a cobrança fica em dois canais, e o aprendiz nunca é confrontado com pagamento.

### 3.1 Canais

| **Canal**            | **Preço**                                            | **Quem paga**                                                                         | **Por que escala**                                                                                                                                          |
|----------------------|------------------------------------------------------|---------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Gratuito             | R\$ 0                                                | Ninguém                                                                               | Porta de entrada e prova do produto. Nível 1 completo e as duas primeiras aulas de cada nível pago.                                                         |
| Plano Família        | R\$ 24,90 por mês                                    | Filho, filha ou neto                                                                  | Uma assinatura por casa. Cresce por indicação dentro da própria família, sem custo de aquisição.                                                            |
| Turma e instituição  | A partir de R\$ 8 por pessoa por mês, contrato anual | Prefeitura, unidade de saúde, centro de convivência, plano de saúde, sindicato, banco | Um contrato traz centenas de vagas de uma só vez. Nenhum custo de aquisição por aluno.                                                                      |
| Formação de monitor  | R\$ 89 por pessoa, avulso                            | O próprio aluno formado ou a instituição                                              | Nível 5 forma quem ensina. Custo marginal próximo de zero e gera mão de obra para as turmas.                                                                |
| Patrocínio de módulo | Negociado por campanha                               | Banco, operadora, seguradora                                                          | Instituições financeiras têm orçamento e incentivo direto para reduzir fraude contra idosos. O patrocínio precisa ser identificado na tela como patrocínio. |
| Relatório agregado   | Negociado                                            | Gestor público, pesquisa acadêmica                                                    | Dados anonimizados e agregados sobre dificuldade digital por região. Exige base legal e anonimização irreversível.                                          |

### 3.2 Limite entre gratuito e pago

- Nível 1 inteiro, as 6 aulas, gratuito para sempre.

- Nas faixas 2 a 5, as duas primeiras aulas de cada nível são amostra gratuita.

- As demais aulas exigem Plano Família ativo ou matrícula em turma de instituição.

- Exercícios de segurança contra golpe ficam **sempre gratuitos**, em qualquer nível. Cobrar por proteção contra fraude é indefensável e destrói a confiança no produto.

- A tela de oferta é endereçada ao familiar, não ao aprendiz. O botão principal é “Enviar para minha filha”, que dispara um convite por link. A cobrança só ocorre se o familiar aceitar.

### 3.3 Economia unitária, ilustrativa

Os números abaixo servem para dimensionar o modelo e precisam ser validados em piloto.

| **Item**                          | **Plano Família** | **Instituição**            |
|-----------------------------------|-------------------|----------------------------|
| Receita por aluno por mês         | R\$ 24,90         | R\$ 8,00                   |
| Custo de infraestrutura por aluno | cerca de R\$ 0,60 | cerca de R\$ 0,60          |
| Tutoria ao vivo em grupo de 12    | cerca de R\$ 4,20 | não incluída no plano base |
| Suporte e conteúdo, rateado       | cerca de R\$ 1,50 | cerca de R\$ 1,00          |
| Margem bruta estimada             | cerca de 75%      | cerca de 80%               |

O único custo verdadeiramente variável é a tutoria humana. Ela deve ser sempre em grupo, com proporção máxima de 1 instrutor para 12 alunos e duração de 30 minutos, para manter a margem previsível.

## 4. Currículo completo: 5 níveis, 30 aulas

Cada aula tem entre 3 e 6 passos e leva de 4 a 10 minutos. Uma aula nunca depende de outra para ser aberta.

### Nível 1 — Primeiros toques

20 pontos por aula. Gratuito.

| **\#** | **Aula**                                  | **Mecânica**        | **Justificativa**                                                    |
|--------|-------------------------------------------|---------------------|----------------------------------------------------------------------|
| 1      | Atender e desligar sem derrubar           | Treino guiado       | Discagem acidental é queixa recorrente na literatura de usabilidade. |
| 2      | Ligar e salvar um contato novo            | Treino guiado       | Guardar número com nome, não decorar dígitos.                        |
| 3      | Destravar a tela e guardar a senha        | Treino guiado       | Entrar no aparelho sem depender de terceiro.                         |
| 4      | Deixar a tela mais fácil de ver           | Treino guiado       | 38,8% relatam dificuldade para ver o que está na tela.               |
| 5      | O que cada desenho quer dizer             | Ligar pares         | Confusão sobre significado dos ícones é queixa documentada.          |
| 6      | Não vou estragar: o que dá e o que não dá | Decisão em situação | 40% declaram receio de danificar o aparelho.                         |

### Nível 2 — Dia a dia

30 pontos por aula. Duas primeiras gratuitas.

| **\#** | **Aula**                                | **Mecânica**        | **Justificativa**                                            |
|--------|-----------------------------------------|---------------------|--------------------------------------------------------------|
| 1      | Mandar mensagem e áudio                 | Treino guiado       | Segurar, falar, soltar. É o passo em que mais gente desiste. |
| 2      | Entender as notificações                | Decisão em situação | Excesso de informação na tela é barreira registrada.         |
| 3      | Digitar sem errar as letras             | Achar na tela       | Erros de digitação em teclado pequeno.                       |
| 4      | Chamada de vídeo com a família          | Treino guiado       | Principal motivação declarada para aprender.                 |
| 5      | Tirar foto e enviar para alguém         | Ordenar os passos   | Do clique até a conversa da pessoa.                          |
| 6      | Wi-Fi e dados móveis: qual estou usando | Decisão em situação | Configurações consideradas complicadas demais.               |

### Nível 3 — Com autonomia

40 pontos por aula. Duas primeiras gratuitas.

| **\#** | **Aula**                               | **Mecânica**          | **Justificativa**                                                    |
|--------|----------------------------------------|-----------------------|----------------------------------------------------------------------|
| 1      | Reconhecer golpes e links falsos       | Decisão em situação   | 61,1% apontam medo de golpe como maior dificuldade. Sempre gratuita. |
| 2      | Senhas: criar, guardar e não perder    | Ordenar os passos     | Sem repetir a mesma senha em tudo.                                   |
| 3      | Marcar consulta no aplicativo de saúde | Treino guiado         | Acesso a serviço público sem fila.                                   |
| 4      | Ligação de golpista: o que responder   | Simulação de conversa | Roteiro de resposta treinado, não improvisado.                       |
| 5      | Encontrar e instalar um aplicativo     | Achar na tela         | Reconhecer o aplicativo verdadeiro na loja.                          |
| 6      | Ditar em vez de digitar                | Ditado por voz        | Contorna de vez a dificuldade com o teclado.                         |

### Nível 4 — Dinheiro e serviços

40 pontos por aula. Duas primeiras gratuitas.

| **\#** | **Aula**                                    | **Mecânica**                | **Justificativa**                                       |
|--------|---------------------------------------------|-----------------------------|---------------------------------------------------------|
| 1      | Pix: conferir nome e CPF antes de confirmar | Conferir antes de confirmar | O passo que evita a maior parte do prejuízo.            |
| 2      | Boleto e código de barras pelo celular      | Treino guiado               | Pagar sem sair de casa.                                 |
| 3      | Comprovante: salvar, achar e enviar         | Ordenar os passos           | Prova de pagamento é o que mais se perde.               |
| 4      | gov.br: entrar e usar sem perder a senha    | Treino guiado               | Porta de entrada de quase todo serviço público.         |
| 5      | Comprar sem cair em site falso              | Decisão em situação         | Preço muito baixo e endereço estranho. Sempre gratuita. |
| 6      | Cobrança que não é sua: como contestar      | Simulação de conversa       | Saber que existe direito e como exercer.                |

### Nível 5 — Ensinar e ajudar

50 pontos por aula. Duas primeiras gratuitas. Habilita a Formação de monitor.

| **\#** | **Aula**                          | **Mecânica**          | **Justificativa**                                      |
|--------|-----------------------------------|-----------------------|--------------------------------------------------------|
| 1      | Ajudar sem tomar o celular da mão | Decisão em situação   | O erro mais comum de quem ensina em família.           |
| 2      | Explicar um passo em três frases  | Ordenar os passos     | Roteiro curto, verbo no início, uma ação por frase.    |
| 3      | Montar um encontro de 40 minutos  | Missão no mundo real  | Plano de aula pronto para aplicar na turma.            |
| 4      | Reconhecer medo e acolher         | Simulação de conversa | Receio e vergonha são as barreiras iniciais relatadas. |
| 5      | Ajudar à distância pelo telefone  | Simulação de conversa | Guiar sem ver a tela da outra pessoa.                  |
| 6      | Virar monitor da turma            | Avaliação final       | Emite certificado de monitor.                          |

## 5. Mecânicas de exercício

São dez tipos. Todo conteúdo novo deve usar um destes tipos, para que o motor não precise mudar quando o currículo crescer. É esta separação que torna o produto escalável: currículo é dado, não código.

| **Tipo**                    | **Como funciona**                                                                                                 | **Entrada do usuário**                     | **Onde já existe no protótipo**          |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------|--------------------------------------------|------------------------------------------|
| Treino guiado               | Tela falsa do aplicativo real. O passo atual é destacado. Toque errado gera correção escrita e falada, sem perda. | Toque, ou pressionar e soltar              | Sim, aula “Mandar mensagem e áudio”      |
| Decisão em situação         | Mostra uma mensagem ou aviso real e pede uma decisão entre duas opções. Depois explica os sinais.                 | Dois botões grandes                        | Sim, “É golpe?” e “Preciso olhar agora?” |
| Achar na tela               | Pergunta onde fica um elemento e aceita o toque na região correta. Aproxima o alvo a cada tentativa.              | Um toque                                   | Não, especificar                         |
| Ordenar os passos           | Quatro passos fora de ordem. A pessoa toca na ordem certa. Sem arrastar.                                          | Toques em sequência                        | Não, especificar                         |
| Ligar pares                 | Ícone à esquerda, significado à direita. Toca num, toca no par.                                                   | Dois toques                                | Não, especificar                         |
| Ditado por voz              | A pessoa aperta e fala. O app compara o texto reconhecido com o esperado, com tolerância alta.                    | Voz                                        | Não, especificar                         |
| Simulação de conversa       | Diálogo com três turnos e escolha de resposta em cada um. Aplica-se a golpe por telefone e a pedido de ajuda.     | Escolha entre 2 ou 3 falas                 | Não, especificar                         |
| Conferir antes de confirmar | Tela de confirmação de Pix com um dado divergente. A pessoa precisa tocar no dado errado antes de confirmar.      | Um toque                                   | Não, especificar                         |
| Missão no mundo real        | Tarefa no celular de verdade, confirmada por familiar ou instrutor. Gera 20 pontos na confirmação.                | Ação fora do app e confirmação de terceiro | Sim, cartão “Missão desta semana”        |
| Revisão espaçada            | Retoma um passo aprendido há 1, 3, 7 e 21 dias, em formato de decisão rápida.                                     | Um ou dois toques                          | Não, especificar                         |

### 5.1 Base pedagógica das mecânicas

- **Demonstração antes da prática.** Todo treino guiado tem o botão “Me mostre como faz”, que executa a sequência sozinho. Modelagem antes da prática independente.

- **Aprendizagem sem erro.** O alvo correto é destacado e o erro é interrompido antes de gerar consequência, para não fixar o passo errado.

- **Prática de recuperação.** As decisões em situação exigem lembrar, não reconhecer, o que consolida melhor.

- **Repetição espaçada.** Revisão em 1, 3, 7 e 21 dias após a conclusão da aula.

- **Autoeficácia.** A progressão começa por uma tarefa que a pessoa conclui com certeza. Sucesso inicial é o principal preditor de continuidade neste público.

- **Gamificação sem competição.** Pontos, selos e sequência de dias comparados apenas com o próprio histórico. Sem placar entre pessoas.

## 6. Pontos, selos e progressão

| **Evento**                      | **Pontos**   | **Regra**                             |
|---------------------------------|--------------|---------------------------------------|
| Concluir aula do Nível 1        | 20           | Uma vez por aula                      |
| Concluir aula dos Níveis 2 e 3  | 30 e 40      | Uma vez por aula                      |
| Concluir aula dos Níveis 4 e 5  | 40 e 50      | Uma vez por aula                      |
| Concluir aula sem nenhum erro   | +10 de bônus | Uma vez por aula                      |
| Acertar situação em Praticar    | 15           | Uma vez por situação, nunca repetível |
| Missão do mundo real confirmada | 20           | Uma por semana                        |
| Revisão espaçada respondida     | 5            | Uma por item por ciclo                |

Repetir uma aula já concluída é sempre permitido e nunca gera pontos novos. A tela deve dizer isso em texto claro, para não parecer falha.

### 6.1 Selos

- Primeira mensagem — concluir a aula de áudio

- Sem pressa — concluir uma aula sem nenhum erro

- Olho vivo — acertar as 3 situações de golpe

- Cem pontos — somar 100 pontos

- Três dias seguidos — abrir o app em 3 dias consecutivos

- Nível completo — um selo por nível concluído, cinco no total

- Monitor formado — concluir o Nível 5 e a avaliação final

A metáfora visual é a caderneta de vacinação: um selo por conquista, guardado e impresso. Foi escolhida por ser familiar e adulta, evitando linguagem infantilizada.

## 7. Mapa de telas

| **Tela**        | **Conteúdo**                                                             | **Estado que a alimenta**      |
|-----------------|--------------------------------------------------------------------------|--------------------------------|
| Aprender        | Seletor de nível, progresso do nível, missão da semana, lista de 6 aulas | nivel, feitas, missao, plano   |
| Detalhe da aula | Título, o que será aprendido, pontuação, fonte, botão de início          | nivel, aula                    |
| Treino guiado   | Tela falsa, barra do instrutor com passo, dica, narração e demonstração  | passo, naChat, gravando, erros |
| Conclusão       | Pontos ganhos, selo novo, resumo dos passos, refazer                     | ganhos, novoSelo               |
| Praticar        | Seletor de conjunto, situação, dois botões, explicação dos sinais        | qset, qi, qResp, qPagos        |
| Caderneta       | Pontos, dias seguidos, progresso geral, 7 selos, plano atual             | pontos, selos, feitas, plano   |
| Planos          | Três faixas de preço com o que cada uma inclui                           | plano                          |
| Oferta          | Aula trancada, o que o plano inclui, convite para o familiar             | aula, convite                  |
| Fontes          | Dados do levantamento, queixas mais registradas, referências             | estático                       |

## 8. Especificação técnica

### 8.1 Stack recomendada

- **Aplicativo do aprendiz:** React Native com Expo, Android primeiro. Android concentra a base deste público no Brasil. iOS na fase 2.

- **Painel do familiar:** aplicação web responsiva, mesma base de código React se possível.

- **Painel do instrutor e do gestor:** aplicação web. Precisa de tabela, exportação e impressão, o que é ruim em tela de celular.

- **Backend:** Node.js com TypeScript, PostgreSQL, Redis para fila de eventos.

- **Conteúdo:** JSON versionado servido por CDN, com cache local. Publicar aula nova não pode exigir nova versão do aplicativo na loja.

- **Narração:** TTS nativo do sistema em pt-BR. Não gravar áudio de locutor para instrução variável, apenas para as boas-vindas.

- **Reconhecimento de voz:** API nativa do Android para a mecânica de ditado, com processamento no aparelho quando disponível.

### 8.2 Modelo de dados

| **Tabela**         | **Campos principais**                                                                   |
|--------------------|-----------------------------------------------------------------------------------------|
| usuario            | id, nome, telefone, data_nascimento, papel, escala_texto, narracao_ativa, criado_em     |
| vinculo_familiar   | id, aprendiz_id, familiar_id, status, permissoes, criado_em                             |
| instituicao        | id, nome, cnpj, tipo, contato, contrato_inicio, contrato_fim, vagas                     |
| turma              | id, instituicao_id, instrutor_id, nome, dia_semana, horario, local                      |
| matricula          | id, turma_id, aprendiz_id, status, presenca_total                                       |
| nivel              | id, ordem, nome, faixa_sugerida, pontos_por_aula, gratuito                              |
| aula               | id, nivel_id, ordem, titulo, subtitulo, mecanica, fonte, gratuita_sempre                |
| versao_aula        | id, aula_id, versao, json_conteudo, publicada_em                                        |
| progresso          | id, usuario_id, aula_id, versao_aula_id, status, erros, concluida_em, pontos_creditados |
| resposta_exercicio | id, usuario_id, aula_id, item_chave, correta, tentativas, respondida_em                 |
| selo               | id, chave, nome, criterio                                                               |
| selo_usuario       | id, usuario_id, selo_id, ganho_em                                                       |
| missao             | id, semana, titulo, descricao, pontos                                                   |
| missao_confirmacao | id, missao_id, aprendiz_id, confirmador_id, status, confirmada_em                       |
| revisao            | id, usuario_id, aula_id, item_chave, proxima_em, ciclo                                  |
| assinatura         | id, pagador_id, aprendiz_id, plano, status, inicio, fim, gateway_id                     |
| convite            | id, aprendiz_id, canal, destino, token, status, expira_em                               |
| tutoria            | id, instrutor_id, inicio, vagas, link                                                   |
| presenca_tutoria   | id, tutoria_id, aprendiz_id, presente                                                   |
| evento             | id, usuario_id, tipo, aula_id, passo, payload_json, criado_em                           |

Regra de integridade obrigatória: pontos só podem ser creditados uma vez por par (usuario_id, aula_id) e uma vez por par (usuario_id, item_chave). O protótipo já implementa essa regra e ela precisa ser garantida no banco, não apenas no cliente.

### 8.3 Endpoints principais

| **Método e rota**          | **Função**                                                 |
|----------------------------|------------------------------------------------------------|
| GET /me                    | Perfil, plano ativo, preferências de acessibilidade        |
| GET /curriculo             | Níveis, aulas e estado de liberação para este usuário      |
| GET /aula/:id              | JSON da versão publicada da aula                           |
| POST /progresso            | Registra conclusão, erros e retorna pontos e selos ganhos  |
| POST /resposta             | Registra resposta de exercício, idempotente por item_chave |
| GET /caderneta             | Pontos, selos, sequência de dias, progresso por nível      |
| POST /convite              | Gera convite para o familiar e devolve link                |
| POST /assinatura/webhook   | Recebe confirmação do gateway de pagamento                 |
| GET /turma/:id/relatorio   | Frequência e progresso da turma, para o instrutor          |
| POST /missao/:id/confirmar | Familiar ou instrutor confirma a missão                    |
| GET /revisoes              | Itens de revisão espaçada vencidos hoje                    |
| POST /evento               | Telemetria de passo, erro e abandono                       |

### 8.4 Formato da aula em JSON

```json
{
  "id": "n2-a1",
  "nivel": 2,
  "titulo": "Mandar mensagem e áudio",
  "mecanica": "treino_guiado",
  "pontos": 30,
  "bonus_sem_erro": 10,
  "fonte": "Borges e colaboradores, Revista Contemporânea, 2025",
  "cenario": "mensagens_lista",
  "passos": [
    {
      "alvo": "conversa_maria",
      "instrucao": "Toque no nome de Maria para abrir a conversa.",
      "dica": "Maria é a primeira da lista, no alto da tela.",
      "erros": {
        "outra_conversa": "Essa é outra conversa. Toque no nome de Maria."
      }
    },
    {
      "alvo": "microfone",
      "gesto": "pressionar",
      "instrucao": "Encoste o dedo no microfone e não solte.",
      "dica": "É o botão redondo azul, no canto de baixo à direita."
    },
    {
      "alvo": "microfone",
      "gesto": "manter",
      "duracao_ms": 2400,
      "instrucao": "Fale sua mensagem. Continue com o dedo apoiado."
    },
    {
      "alvo": "microfone",
      "gesto": "soltar",
      "instrucao": "Agora tire o dedo. A mensagem vai sozinha.",
      "erros": {
        "soltou_cedo": "Você soltou antes de falar. Segure, fale, e só depois solte."
      }
    }
  ],
  "resumo": [
    "Abra a conversa tocando no nome.",
    "Segure o microfone.",
    "Fale com calma.",
    "Solte o dedo."
  ]
}
```

Cada mecânica tem seu próprio esquema, mas todas compartilham os campos id, nivel, titulo, mecanica, pontos, fonte e resumo. O cliente deve ignorar campos desconhecidos, para que conteúdo novo funcione em versões antigas do aplicativo.

### 8.5 Acessibilidade: critérios de aceite

- Todo texto legível com escala do sistema em 200%, sem corte e sem sobreposição.

- Todo alvo interativo com no mínimo 48 dp por 48 dp.

- Contraste verificado por ferramenta automática em todas as telas: 4,5:1 para texto e 3:1 para ícone informativo.

- TalkBack anuncia rótulo, estado e função de todo elemento interativo.

- Nenhuma informação transmitida apenas por cor. Sempre cor mais texto ou cor mais forma.

- Narração disponível em toda instrução, com botão visível e persistente.

- Nenhum limite de tempo em nenhuma tarefa.

- Toque simples sempre disponível como alternativa a qualquer gesto composto.

- Funciona sem conexão para as aulas já baixadas, com fila de sincronização de progresso.

## 9. Papéis e permissões

| **Papel**     | **Pode**                                                                                      | **Não pode**                                           |
|---------------|-----------------------------------------------------------------------------------------------|--------------------------------------------------------|
| Aprendiz      | Fazer aulas, ver caderneta, enviar convite ao familiar, pedir ajuda                           | Assinar, ver dados de outra pessoa, apagar histórico   |
| Familiar      | Assinar, ver progresso do aprendiz vinculado, confirmar missão, receber alerta de inatividade | Alterar respostas, ver conteúdo de conversas simuladas |
| Instrutor     | Ver turma, marcar presença, confirmar missão, imprimir cartilha e certificado                 | Ver dados de aprendiz fora da sua turma                |
| Gestor        | Ver relatório agregado da instituição, exportar frequência                                    | Ver resposta individual de exercício                   |
| Administrador | Publicar versão de aula, gerir instituições e contratos                                       | Acessar dado pessoal sem registro de auditoria         |

Todo vínculo entre aprendiz e familiar exige aceite explícito do aprendiz dentro do aplicativo, com texto simples explicando o que o familiar passa a ver.

## 10. Privacidade e LGPD

- **Dados coletados:** nome, telefone, data de nascimento, progresso de aprendizagem, preferências de acessibilidade. Nada além disso.

- **Não coletar** dado de saúde, dado bancário, conteúdo de mensagens reais, lista de contatos, localização precisa.

- **Base legal:** consentimento para o vínculo familiar; execução de contrato para a assinatura; interesse legítimo apenas para segurança e prevenção de fraude.

- **Compartilhamento com o familiar** limitado a progresso e frequência. Nunca respostas individuais de exercício de golpe, para não expor a pessoa a julgamento.

- **Relatório agregado** para gestor e pesquisa exige anonimização irreversível e mínimo de 20 pessoas por agrupamento.

- **Retenção:** progresso por 5 anos; evento de telemetria por 18 meses; dado de pagamento conforme obrigação fiscal.

- **Direitos do titular** atendidos em até 15 dias, com pedido possível por telefone, não apenas por formulário digital.

- **Consentimento em linguagem simples**, com narração em voz alta e possibilidade de recusar sem perder o acesso gratuito.

## 11. Painel do instrutor e da instituição

É o que a instituição realmente compra. Sem ele, não existe contrato B2B.

- Lista da turma com nome, nível, aulas concluídas e última presença.

- Marcação de presença por encontro, com exportação em planilha.

- Confirmação de missão do mundo real, em lote.

- Cartilha imprimível por aula, em letra grande, para o aluno levar para casa.

- Certificado de conclusão por aluno e por turma, com o selo da instituição.

- Relatório de frequência e de evolução para o gestor, em PDF.

- Alerta de aluno inativo por 14 dias, para o instrutor procurar por telefone.

## 12. Telemetria: o que medir

| **Métrica**                            | **Para que serve**                                       |
|----------------------------------------|----------------------------------------------------------|
| Passo com maior taxa de erro, por aula | Identificar onde a instrução está mal escrita            |
| Abandono por passo                     | Detectar aula longa ou confusa                           |
| Uso do botão de narração               | Dimensionar a dependência de áudio                       |
| Uso do botão “Me mostre como faz”      | Medir se a instrução escrita é suficiente                |
| Escala de texto escolhida              | Validar o tamanho padrão                                 |
| Conversão de convite em assinatura     | Eficácia do canal família                                |
| Retenção em 7, 30 e 90 dias            | Saúde do produto                                         |
| Missões confirmadas por semana         | Engajamento do familiar, principal preditor de renovação |

## 13. Entrega em fases

| **Fase**               | **Escopo**                                                                                                                                  | **Prazo estimado** |
|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| 1\. MVP                | Níveis 1 e 2, mecânicas de treino guiado e decisão em situação, pontos e selos, caderneta, Plano Família com um gateway, painel do familiar | 12 semanas         |
| 2\. Instituição        | Painel do instrutor, turma, presença, certificado, cartilha imprimível, contrato e faturamento B2B                                          | 8 semanas          |
| 3\. Currículo completo | Níveis 3, 4 e 5, mecânicas de achar na tela, ordenar passos, ligar pares, simulação de conversa e conferir antes de confirmar               | 10 semanas         |
| 4\. Escala             | Ditado por voz, revisão espaçada, tutoria ao vivo, iOS, formação de monitor                                                                 | 10 semanas         |

## 14. Critérios de aceite

- Uma pessoa de 70 anos ou mais, sem ajuda, conclui a aula de áudio na primeira tentativa em pelo menos 8 de 10 testes.

- Nenhuma tela reprovada em verificação automática de contraste.

- Escala de texto em 200% sem quebra em nenhuma tela.

- Pontos nunca creditados duas vezes para o mesmo par usuário e aula, verificado por teste de integração.

- Nenhuma cobrança possível sem aceite explícito do familiar pagante.

- Aula publicada sem nova versão na loja, verificado em ambiente de homologação.

- Aplicativo funcional em Android 9 ou superior, em aparelho de 2 GB de memória.

## 15. Referências

**Borges, F. L. da R. e colaboradores.** Elaboração de uma cartilha de orientação sobre o uso de smartphones pelos idosos. Revista Contemporânea, 5(1), e7230, 2025. Origem dos indicadores de 61,1%, 38,8% e 94,4%.

**Câmara.** As dificuldades dos idosos com dispositivos móveis. Revista Ceuma Perspectivas. Excesso de informação, cores, tamanho de ícone e terminologia.

**Anjos, T. P. e Gontijo, L. A..** Recomendações de usabilidade e acessibilidade para interface de telefone celular visando o público idoso. Produção, 25(4), 2015.

**Congresso Internacional de Design da Informação, 2020.** Usuários idosos e sua relação com celulares: revisão bibliográfica sistemática. Discagem acidental, erros de digitação, confusão de ícones.

**CERT.br e NIC.br.** Cartilha de Segurança para Internet e Dicas Rápidas. Base dos exercícios de golpe.

**Instituto Paulista de Geriatria e Gerontologia.** Oficina de Celular e material de inclusão digital para a pessoa idosa. Secretaria de Estado da Saúde de São Paulo.

**Cetic.br e NIC.br.** TIC Domicílios 2023. Indicador de 66% de uso de internet acima de 60 anos.

**Raymundo, T. M..** Pesquisa sobre aceitação de tecnologias por pessoas idosas, UFPR. Indicadores de medo de tecnologia e de danificar o aparelho.

**Liceu de Ofícios, Prefeitura de Curitiba.** Curso de inclusão digital: smartphone para a pessoa idosa.

**Fiocruz.** Portal Saúde da Pessoa Idosa, seção de inclusão digital.

Os títulos, autores e números acima foram levantados em fontes públicas e devem ser conferidos na publicação original antes de qualquer uso comercial ou citação formal.

## 16. O que já existe

O protótipo navegável “Aos Poucos.dc.html” implementa, funcionando de ponta a ponta: a aula de áudio em treino guiado com correção de erro, demonstração automática e narração; dois conjuntos de decisão em situação, golpes e notificações; pontos, bônus por acerto sem erro, sete selos e caderneta; três níveis com 18 aulas mapeadas; missão da semana; limite entre gratuito e pago com tela de oferta endereçada ao familiar; três faixas de preço; e a tela de fontes. Serve como referência visual e de comportamento para a implementação.
