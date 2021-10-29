const teamItems = [
  {
    photoLink: 'https://avatars.githubusercontent.com/u/77212359?v=4',
    teamItemName: 'Владислав Неманихин',
    teamPosition: 'Team Lead',
    gitLink: 'https://github.com/Vlad-Nemanikhin',
    emailLink: 'vladnemanihin15@gmail.com',
    linkedinLink: 'https://linkedin.com',
    telNumber: '+380666699988',
    mainDuties:
      'Разметка и стилизация футера. Полученние ID жанров фильмов, их преобразование в полноценный текстовый контент (с сохранением в localstorage) и отображение необходимых жанров на каждой карточке фильма индивидуально. Общая организация работы всей команды, включая ведение репозитория, принятие реквестов, мерж отдельных веток в одну, решение конфликтов совместно с владельцами этих веток. Общение с ментором и установление deadline',
    id: 1,
  },
  {
    photoLink: 'https://avatars.githubusercontent.com/u/77548827?v=4',
    teamItemName: 'Валерия Бедулина',
    teamPosition: 'Scrum master',
    gitLink: 'https://github.com/Lera24',
    emailLink: 'bedulinavalera21@gmail.com',
    linkedinLink: 'https://linkedin.com',
    telNumber: '+380955325489',
    mainDuties:
      'Реализация разметки в hendelbars основного модального окна для выбранного фильма. Написание функционала по смене внешнего вида хедера на разных страницах ("домашняя" и "моя библиотека") на JS. Отрисовка макета модального окна с участниками команды в футере. Организация ежедневных stand-upов с фиксацией статусов по каждому направлению. Распределение равномерной нагрузки на каждого участника проекта и контроль за соблюдением deadline',
    id: 2,
  },
  {
    photoLink: 'https://avatars.githubusercontent.com/u/77615583?v=4',
    teamItemName: 'Балабух Николай',
    teamPosition: 'Junior Developer :)',
    gitLink: 'https://github.com/nickbron',
    emailLink: 'nick_bron@ukr.net',
    linkedinLink: 'https://linkedin.com',
    telNumber: '+380509485523',
    mainDuties:
      'Подключение Loader(Spinner) для асинхронных запросов, а также Notiflix для информационных уведомлений. Подключение номера страниц (пагинация) на главной странице. Реализация функционала поднятия страницы на вверх по клику на заданную клавишу.',
    id: 3,
  },
  {
    photoLink: 'https://avatars.githubusercontent.com/u/77894935?v=4',
    teamItemName: 'Вепрецкая Евгения',
    teamPosition: 'Junior Developer :)',
    gitLink: 'https://github.com/Evgeniavep',
    emailLink: 'enychka12@gmail.com',
    linkedinLink: 'https://linkedin.com/in/евгения-вепрецкая-08412821a/',
    telNumber: '+380666699988',
    mainDuties:
      'Создание разметки при помощи hendelbars и стилизация карточек популярных фильмов на главной странице, а также сохраненных на странице "моя библиотека". Реализация функционала смены темной и светлой темы на странице при помощи JS',
    id: 4,
  },
  {
    photoLink: 'https://avatars.githubusercontent.com/u/77636476?v=4',
    teamItemName: 'Граковский Аким',
    teamPosition: 'Junior Developer :)',
    gitLink: 'https://github.com/Akim3351',
    emailLink: 'aakim5586@gmail.com',
    linkedinLink: 'https://linkedin.com',
    telNumber: '+380666699988',
    mainDuties:
      'Разметка и стилизация хедера для 3 вариантов девайсов, включая адаптивные изображения. А также разное наполнение хедера для домашней страницы (со строкой для поиска фильмов) и блока "Моя библиотека" (с клавишами "просмотренные" и "ожидающие очередь")',
    id: 5,
  },
  {
    photoLink: 'https://avatars.githubusercontent.com/u/77733283?v=4',
    teamItemName: 'Запара Денис',
    teamPosition: 'Junior Developer :)',
    gitLink: 'https://github.com/DennyZ24',
    emailLink: 'dzapara24@gmail.com',
    linkedinLink: 'https://linkedin.com',
    telNumber: '+380994483316',
    mainDuties:
      'Функционал сохранения и удаления фильмов в/из категории "просмотренные" и "ожидающие очередь" в localstorage по кликам на клавиши из модального окна выбранного фильма. Отрисовка сохраненных в localstorage карточек фильмов на странице "моя библиотека". Наполнение динамическими данными модального окна одного фильма.',
    id: 6,
  },
  {
    photoLink: 'https://avatars.githubusercontent.com/u/69204457?v=4',
    teamItemName: 'Коваленко Виталий',
    teamPosition: 'Junior Developer :)',
    gitLink: 'https://github.com/kovalenko-23',
    emailLink: 'vitaliikovalenko23@gmail.com',
    linkedinLink: 'https://linkedin.com',
    telNumber: '+380631935259',
    mainDuties:
      'Реализация логики работы с API запросами - создание асинхронных функций для получения информации о популярных фильмах для главной страницы, о фильмах, удовлетворяющим условию поиска в инпуте, а также о выбранном фильме (при открытии модального окна). Преобразование полученных данных, запись их в localstorage, а также для этой же информации динамическая отрисовка разметки по шаблону hendelbars',
    id: 7,
  },
  {
    photoLink: 'https://avatars.githubusercontent.com/u/77807168?v=4',
    teamItemName: 'Коваль Роман',
    teamPosition: 'Junior Developer :)',
    gitLink: 'https://github.com/Roman-Koval',
    emailLink: 'kovalrv83@gmail.com',
    linkedinLink: 'https://www.linkedin.com/in/roman-koval-2b3736203/',
    telNumber: '+380976788677',
    mainDuties:
      'Разметка и стилизация дополнительного модального окна для выбранного члена команды в футере с детальной информацией. Подключение механизма открытия/закрытия модального окна и его корректная работа включая верное позиционирование в паре с основным модальным окном футера, а также библиотеки simplelightbox для смены карточек участников',
    id: 8,
  },
  {
    photoLink: 'https://avatars.githubusercontent.com/u/67787169?v=4',
    teamItemName: 'Медведев Анатолий',
    teamPosition: 'Junior Developer :)',
    gitLink: 'https://github.com/Anatolii-med',
    emailLink: 'med.anatolii@gmail.com',
    linkedinLink: 'https://www.linkedin.com/in/anatolii-medvediev-a81b60180/',
    telNumber: '+380660800906',
    mainDuties:
      'Разметка и стилизация модального окна с членами команды в футере, при помощи методов map и шаблонных строк. Реализация активных ссылок для социальных сетей. Подключение механизма открытия/закрытия модальных окон и реализация функции слайдера для смены карточек участников',
    id: 9,
  },
  {
    photoLink: 'https://avatars.githubusercontent.com/u/77930040?v=4',
    teamItemName: 'Пучкова Ирина',
    teamPosition: 'Junior Developer :)',
    gitLink: 'https://github.com/irynapuchkova',
    emailLink: 'irynapuchkova18@gmail.com',
    linkedinLink: 'https://linkedin.com',
    telNumber: '+380672462682',
    mainDuties:
      'Наполнение проекта базовыми стилями, включая разметку контейнера. Создание и оптимизация спрайта с изображениями типа svg. Определение основных цветов согласно макету и создание для них переменных. Функционал JS по открытию и закрытию модальных окон проекта',
    id: 10,
  },
];

export { teamItems };
