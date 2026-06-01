export const ru = {
  common: {
    appName: "Creator Lab",
    signIn: "Войти",
    signUp: "Регистрация",
    backToWelcome: "Вернуться на главную",
  },
  header: {
    ariaLabel: "Основная навигация",
    brandSubtitle: "Платформа для видеопрепродакшна",
    primaryCta: "Начать проект",
    nav: {
      workflow: "Путь проекта",
      features: "Возможности",
      overview: "Зачем это",
    },
    localeLabel: "Язык",
    locales: {
      ru: "RU",
      en: "EN",
    },
  },
  welcome: {
    eyebrow: "Creator Lab",
    title: "Препродакшн, который ощущается частью творческого процесса, а не бюрократией.",
    description:
      "Планируй видео от сценария до шот-листа в одном рабочем пространстве, созданном для сольных креаторов и небольших продакшн-команд.",
    whyEyebrow: "Зачем это нужно",
    whyTitle: "Обычно workflow креатора ломается в тот момент, когда планирование становится детальным.",
    whyDescription:
      "Сценарий живет в одном приложении, референсы в другом, а заметки по кадрам растворяются в документах и чатах. Creator Lab нужен, чтобы собрать ранние production-решения в одну понятную систему.",
    flowEyebrow: "Основной путь",
    flowTitle: "Приложение строится вокруг реального пути от идеи до съемочного дня.",
    features: [
      {
        title: "Workflow от сценария",
        description:
          "Начни с истории, а затем преврати ее в сцены и готовый к съемке shot plan без разрозненных заметок.",
      },
      {
        title: "Планирование кадров без хаоса",
        description:
          "Собирай кадры, движения камеры, локации и практические ограничения в одном месте еще до съемки.",
      },
      {
        title: "Референсы в нужном контексте",
        description:
          "Храни изображения, PDF и ссылки рядом с конкретной сценой или кадром, а не в потерянных папках.",
      },
    ],
    workflow: [
      "Создай проект и задай формат будущего видео.",
      "Напиши сценарий, разбей его на сцены и преврати каждую сцену в shot plan.",
      "Прикрепи визуальные референсы и экспортируй чистый production brief для съемки.",
    ],
    panel: {
      projectLabel: "Проект",
      projectTitle: "Ночной портретный фильм на улице",
      projectDescription: "Вертикальный social cut, атмосферный, 45 сек.",
      sceneLabel: "Сцена 01",
      sceneTitle: "Появление",
      sceneDescription: "Cold open, проходка, городской шум на фоне.",
      shotListLabel: "Шот-лист",
      shotListTitle: "12 запланированных кадров",
      shotListDescription: "Общий план, портретный крупный, handheld inserts.",
      referencesLabel: "Референсы",
      referencesTitle: "8 прикрепленных материалов",
      referencesDescription: "Свет, движение камеры и идеи по кадру.",
      exportLabel: "Экспорт",
      exportTitle: "Shooting brief готов",
      exportDescription: "PDF для подготовки и работы на съемке.",
    },
  },
  auth: {
    signIn: {
      eyebrow: "С возвращением",
      title: "Войти в Creator Lab",
      description: "Здесь позже появится полноценная форма входа и связка с backend-аутентификацией.",
      email: "Email",
      password: "Пароль",
      submit: "Войти",
      alternate: "Еще нет аккаунта?",
      alternateLink: "Создать аккаунт",
    },
    signUp: {
      eyebrow: "Старт работы",
      title: "Создать аккаунт Creator Lab",
      description: "Здесь позже появится полноценная регистрация и создание первого рабочего пространства.",
      name: "Имя",
      email: "Email",
      password: "Пароль",
      submit: "Зарегистрироваться",
      alternate: "Уже есть аккаунт?",
      alternateLink: "Войти",
    },
  },
} as const;
