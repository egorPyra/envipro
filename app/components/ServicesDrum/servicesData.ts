
export type ServiceCard = {
  id: string
  title: string
  cover: string
  images: string[]
  text: string
  secondaryText?: string
  coverHeight?: "hero" | "default"
}

export const services: ServiceCard[] = [
  {
    id: "welcome",
    title: "Добро пожаловать в ЭнвиПро",
    cover: "/bg-main-mobile.jpg",
    images: ["/bg-main-mobile.jpg", "/Logo_ENVI_rus.svg"],
    text: "Мы объединяем инженерную практику и экологическую экспертизу, чтобы проекты запускались спокойно и без лишних рисков.",
    secondaryText: "Нажмите на карточку, чтобы открыть детали.",
    coverHeight: "hero",
  },
  {
    id: 'monitoring',
    title: 'Экологический мониторинг',
    cover: '/ecoMonitoring.jpg',
    images: ['/ecoMonitoring.jpg', '/forest.jpg'],
    text: 'Проводим регулярные выезды, фиксируем фоновые и проектные показатели, формируем понятные отчеты для команды и заказчика.',
    secondaryText: 'Методика адаптируется под площадку и сезонные факторы.',
  },
  {
    id: 'lab',
    title: 'Лабораторная аналитика',
    cover: '/envilab.webp',
    images: ['/envilab.webp', '/formula.jpg'],
    text: 'Лабораторные исследования воды, почвы и воздуха с корректной интерпретацией результатов под задачи проекта.',
  },
  {
    id: 'engineering',
    title: 'Инженерно-экологические изыскания',
    cover: '/engineer.jpg',
    images: ['/engineer.jpg', '/calc.jpg'],
    text: 'Оцениваем ограничения площадки, риски и требования нормативной базы до начала ключевых этапов работ.',
    secondaryText: 'Это снижает количество доработок в дальнейшем.',
  },
  {
    id: 'maps',
    title: 'Картография и визуализация',
    cover: '/bgMap.svg',
    images: ['/bgMap.svg', '/MapBalls.png'],
    text: 'Подготавливаем карты, схемы и визуальные материалы, чтобы статус проекта был понятен технической и управленческой команде.',
  },
  {
    id: 'protection',
    title: 'Природоохранные решения',
    cover: '/ecology.jpg',
    images: ['/ecology.jpg', '/earth.jpg'],
    text: 'Проектируем практические меры по снижению воздействия и сохранению природных компонентов территории.',
  },
  {
    id: 'reporting',
    title: 'Документация и сопровождение',
    cover: '/ppa.jpg',
    images: ['/ppa.jpg', '/ServiceBlock/documentationRight.jpg'],
    text: 'Готовим пакет экологической документации и сопровождаем согласования в рабочем ритме проекта.',
  },
  {
    id: 'audit',
    title: 'Производственный аудит',
    cover: '/plasma.jpg',
    images: ['/plasma.jpg', '/ecoShadow.jpg'],
    text: 'Анализируем текущие процессы, показываем точки оптимизации и формируем реалистичный план внедрения.',
  },
  {
    id: 'team',
    title: 'Экспертная команда',
    cover: '/avatarTeamSection.jpg',
    images: ['/avatarTeamSection.jpg', '/bgTeam.jpg'],
    text: 'Над задачами работают специалисты по изысканиям, аналитике и проектной документации в едином контуре.',
  },
  {
    id: 'history',
    title: 'Полевой опыт',
    cover: '/forest.jpg',
    images: ['/forest.jpg', '/ServiceBlock/geoRight.jpg'],
    text: 'Используем практический опыт с разных площадок, чтобы находить решения без лишней сложности.',
  },
  {
    id: 'support',
    title: 'Проектная поддержка',
    cover: '/ServiceBlock/saveRight.jpg',
    images: ['/ServiceBlock/saveRight.jpg', '/mainLogo.svg'],
    text: 'Остаемся рядом с командой на всех стадиях: от старта до сдачи и последующего мониторинга.',
  },
];
