export type ScrollDrumCard = {
  id: string;
  title: string;
  coverImage: string;
  detailImages: string[];
  text?: string;
  secondaryText?: string;
};

export const scrollDrumData: ScrollDrumCard[] = [
  {
    id: 'monitoring',
    title: 'Экологический мониторинг',
    coverImage: '/ecoMonitoring.jpg',
    detailImages: ['/ecoMonitoring.jpg', '/forest.jpg'],
    text: 'Проводим регулярные выезды, фиксируем фоновые и проектные показатели, формируем понятные отчеты для команды и заказчика.',
    secondaryText: 'Методика адаптируется под площадку и сезонные факторы.',
  },
  {
    id: 'lab',
    title: 'Лабораторная аналитика',
    coverImage: '/envilab.webp',
    detailImages: ['/envilab.webp', '/formula.jpg'],
    text: 'Лабораторные исследования воды, почвы и воздуха с корректной интерпретацией результатов под задачи проекта.',
  },
  {
    id: 'engineering',
    title: 'Инженерно-экологические изыскания',
    coverImage: '/engineer.jpg',
    detailImages: ['/engineer.jpg', '/calc.jpg'],
    text: 'Оцениваем ограничения площадки, риски и требования нормативной базы до начала ключевых этапов работ.',
    secondaryText: 'Это снижает количество доработок в дальнейшем.',
  },
  {
    id: 'maps',
    title: 'Картография и визуализация',
    coverImage: '/bgMap.svg',
    detailImages: ['/bgMap.svg', '/MapBalls.png'],
    text: 'Подготавливаем карты, схемы и визуальные материалы, чтобы статус проекта был понятен технической и управленческой команде.',
  },
  {
    id: 'protection',
    title: 'Природоохранные решения',
    coverImage: '/ecology.jpg',
    detailImages: ['/ecology.jpg', '/earth.jpg'],
    text: 'Проектируем практические меры по снижению воздействия и сохранению природных компонентов территории.',
  },
  {
    id: 'reporting',
    title: 'Документация и сопровождение',
    coverImage: '/ppa.jpg',
    detailImages: ['/ppa.jpg', '/ServiceBlock/documentationRight.jpg'],
    text: 'Готовим пакет экологической документации и сопровождаем согласования в рабочем ритме проекта.',
  },
  {
    id: 'audit',
    title: 'Производственный аудит',
    coverImage: '/plasma.jpg',
    detailImages: ['/plasma.jpg', '/ecoShadow.jpg'],
    text: 'Анализируем текущие процессы, показываем точки оптимизации и формируем реалистичный план внедрения.',
  },
  {
    id: 'team',
    title: 'Экспертная команда',
    coverImage: '/avatarTeamSection.jpg',
    detailImages: ['/avatarTeamSection.jpg', '/bgTeam.jpg'],
    text: 'Над задачами работают специалисты по изысканиям, аналитике и проектной документации в едином контуре.',
  },
  {
    id: 'history',
    title: 'Полевой опыт',
    coverImage: '/forest.jpg',
    detailImages: ['/forest.jpg', '/ServiceBlock/geoRight.jpg'],
    text: 'Используем практический опыт с разных площадок, чтобы находить решения без лишней сложности.',
  },
  {
    id: 'support',
    title: 'Проектная поддержка',
    coverImage: '/ServiceBlock/saveRight.jpg',
    detailImages: ['/ServiceBlock/saveRight.jpg', '/mainLogo.svg'],
    text: 'Остаемся рядом с командой на всех стадиях: от старта до сдачи и последующего мониторинга.',
  },
];
