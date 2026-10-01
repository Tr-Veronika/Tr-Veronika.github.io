/* =========================================================
   ПЕРЕВОД САЙТА: RU / EN

   Здесь находятся ВСЕ тексты, которые переключаются между
   русским и английским языками.

   Чтобы изменить текст:
   1. Найди нужный ключ.
   2. Измени значение в ru.
   3. Измени значение с тем же ключом в en.

   Не меняй названия ключей без изменения data-i18n в HTML.
========================================================= */

const translations = {
    ru: {
        "nav.about": "Обо мне",
        "nav.skills": "Навыки",
        "nav.projects": "Проекты",
        "nav.contact": "Контакты",

        "hero.nameFirst": "Вероника",
        "hero.nameLast": "Трушева",
        "hero.eyebrow": "QA ENGINEER",
        "hero.description": "Тестирую веб и мобильные приложения, API и backend-системы. Ищу не только баги, но и причины их возникновения.",
        "hero.projects": "Смотреть проекты",
        "hero.contact": "Связаться",
        "hero.years": "лет",
        "hero.location": "локация",
        "hero.specialization": "специализация",

        "about.eyebrow": "ОБО МНЕ",
        "about.title": "Люблю разбираться,<br><span>как всё работает</span>",
        "about.text1": "Для меня тестирование — это не только про поиск багов, но и способ снижать стоимость ошибок, сокращать петлю возврата и помогать команде быстрее выпускать качественный продукт.",
        "about.text2": "Чем раньше команда находит проблему, тем дешевле её исправить. Поэтому я стараюсь подключаться ещё на этапе требований, а тестирование рассматриваю как часть всего процесса разработки, а не финальную проверку перед релизом.",
        "about.text2_1": "Тестирую UI, REST/SOAP API и backend, работаю с SQL, логами, метриками и трассировками. Ищу не только сам дефект, но и его причину и влияние на систему.",
        "about.text3": "*А ещё люблю котов. Иногда они помогают мне тестировать интерфейс.",
        "about.fact1": "Functional · Regression · Smoke · Exploratory",
        "about.fact2": "REST · SOAP · Postman · Swagger",
        "about.fact3": "DB · Logs · Kafka · Jaeger",
        "about.fact4": "Pytest · Requests · Test Automation",

        "education.eyebrow": "ОБРАЗОВАНИЕ",
        "education.title": "Образование и квалификация",
        "education.degreeTitle": "Программная инженерия",
        "education.degreeText": "09.03.04 · Диплом бакалавра",
        "education.aiTitle": "Аналитик прикладного ИИ",
        "education.aiText": "Диплом о проф. переподготовке",
        "education.adminTitle": "Администратор ИКТ-систем",
        "education.adminText": "Диплом о проф. переподготовке",
        "education.qaTitle": "QA Engineer",
        "education.qaText": "Обучение в QA Studio",

        "skills.eyebrow": "СТЕК",
        "skills.title": "Инструменты,<br><span>с которыми работаю</span>",
        "skills.testing": "Testing",
        "skills.api": "API",
        "skills.databases": "Databases",
        "skills.monitoring": "Monitoring",
        "skills.dev": "Dev & Infra",
        "skills.tools": "Tools",
        "skills.programming": "Programming",
        "skills.testingText": "Тестирование функциональности, пользовательских сценариев и интеграций.",
        "skills.apiText": "Тестирование взаимодействия клиентских и серверных систем.",
        "skills.dbText": "Работа с данными и проверка backend-логики.",
        "skills.monitoringText": "Анализ логов, ошибок, метрик и взаимодействия сервисов.",
        "skills.devText": "Работаю с окружениями, CI/CD, брокером сообщений и mock-сервисами.",
        "skills.toolsText": "Инструменты командной работы и анализа продукта.",
        "skills.pythonText": "Использую Python для небольших скриптов и автоматизации задач.",

        "cat.eyebrow": "QA CAT REPORT",
        "cat.title": "Нашла что-то<br><span>подозрительное</span>",
        "cat.system": "Система",
        "cat.bugs": "Баги",
        "cat.cats": "Коты",

        "cat.bugReport": "BUG REPORT",
        "cat.bugTitle": "Bug #001 — Кот обнаружен",
        "cat.expected": "Ожидалось",
        "cat.expectedValue": "Максимум один кот",
        "cat.actual": "Фактически",
        "cat.actualValue": "Количество котов продолжает расти",
        "cat.priority": "Приоритет",
        "cat.priorityValue": "Критический 🐈",
        
        "projects.eyebrow": "ИЗБРАННЫЕ РАБОТЫ",
        "projects.titleFirst": "Проекты,",
        "projects.titleSecond": "которые я тестировала",
        "project.caseStudy": "CASE STUDY",
        "project.view": "VIEW PROJECT ↗",
        "project.project": "PROJECT",
        "project.pokemon.title": "Pokemon Battle",
        "project.pokemon.text": "Тестирование веб-приложения, API и пользовательских сценариев.",
        "project.rating.title": "Rating Microservice",
        "project.rating.text": "Исследование взаимодействия микросервисов и поиск проблем в работе API.",
        "project.telegram.title": "Telegram Bot",
        "project.telegram.text": "Проект на Python с обработкой пользовательских сценариев и работой с данными.",
        "project.auth.title": "Authorization & Registration",
        "project.auth.text": "Чек-лист позитивных и негативных сценариев, валидация полей, обязательные поля и граничные значения.",
        "project.trainers.title": "Trainers API",
        "project.trainers.text": "Проверка POST-запроса: обязательные параметры, типы и значения данных, HTTP-ответы и обработка позитивных и негативных сценариев.",

        "contact.eyebrow": "СВЯЗАТЬСЯ",
        "contact.title": "Нашли баг?<br><span>Или, может быть, QA инженера в команду?</span>",
        "contact.text": "Буду рада обсудить проект, вакансию, сотрудничество или стажировку.",
        "contact.meow": "Meow-mail is always open.",

        "footer.made": "Сделано с любопытством & 🐾",
        "footer.top": "НАВЕРХ ↑"
    },

    en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.nameFirst": "Veronika",
    "hero.nameLast": "Trusheva",
    "hero.eyebrow": "QA ENGINEER",
    "hero.description": "I test web and mobile applications, APIs, and backend systems. I look beyond finding bugs to understand why they occur.",
    "hero.projects": "View projects",
    "hero.contact": "Get in touch",
    "hero.years": "years",
    "hero.location": "location",
    "hero.specialization": "specialization",

    "about.eyebrow": "ABOUT ME",
    "about.title": "I like figuring out<br><span>how things work</span>",
    "about.text1": "To me, testing is not just about finding bugs, but also a way to reduce the cost of errors, shorten feedback loops, and help the team deliver a quality product faster.",
    "about.text2": "The earlier a problem is found, the cheaper it is to fix. That's why I try to get involved as early as the requirements stage and see testing as part of the entire development process, not just a final check before release.",
    "about.text2_1": "I test UI, REST/SOAP APIs, and backend services, working with SQL, logs, metrics, and traces. I look beyond the defect itself to understand its root cause and impact on the system.",
    "about.text3": "*I also love cats. Sometimes they help me test the interface.",
    "about.fact1": "Functional · Regression · Smoke · Exploratory",
    "about.fact2": "REST · SOAP · Postman · Swagger",
    "about.fact3": "DB · Logs · Kafka · Jaeger",
    "about.fact4": "Pytest · Requests · Test Automation",

    "education.eyebrow": "EDUCATION",
    "education.title": "Education & Qualifications",
    "education.degreeTitle": "Software Engineering",
    "education.degreeText": "09.03.04 · Bachelor's Degree",
    "education.aiTitle": "Applied AI Analyst",
    "education.aiText": "Professional Retraining Diploma",
    "education.adminTitle": "ICT Systems Administrator",
    "education.adminText": "Professional Retraining Diploma",
    "education.qaTitle": "QA Engineer",
    "education.qaText": "QA Studio Training",

    "skills.eyebrow": "STACK",
    "skills.title": "Tools<br><span>I work with</span>",
    "skills.testing": "Testing",
    "skills.api": "API",
    "skills.databases": "Databases",
    "skills.monitoring": "Monitoring",
    "skills.dev": "Dev & Infra",
    "skills.tools": "Tools",
    "skills.programming": "Programming",
    "skills.testingText": "Testing functionality, user scenarios, and integrations.",
    "skills.apiText": "Testing interactions between client-side and server-side systems.",
    "skills.dbText": "Working with data and validating backend logic.",
    "skills.monitoringText": "Analyzing logs, errors, metrics, and service interactions.",
    "skills.devText": "Working with environments, CI/CD, message brokers, and mock services.",
    "skills.toolsText": "Tools for team collaboration and product analysis.",
    "skills.pythonText": "Using Python for small scripts and task automation.",

    "cat.eyebrow": "QA CAT REPORT",
    "cat.title": "Found something<br><span>suspicious</span>",
    "cat.system": "System",
    "cat.bugs": "Bugs",
    "cat.cats": "Cats",

    "cat.bugReport": "BUG REPORT",
    "cat.bugTitle": "Bug #001 — Cat detected",
    "cat.expected": "Expected",
    "cat.expectedValue": "One cat max",
    "cat.actual": "Actual",
    "cat.actualValue": "Cat count keeps increasing",
    "cat.priority": "Priority",
    "cat.priorityValue": "Critical 🐈",

    "projects.eyebrow": "FEATURED WORK",
    "projects.titleFirst": "Projects",
    "projects.titleSecond": "I've tested",
    "project.caseStudy": "CASE STUDY",
    "project.view": "VIEW PROJECT ↗",
    "project.project": "PROJECT",

    "project.pokemon.title": "Pokemon Battle",
    "project.pokemon.text": "Testing a web application, API, and user scenarios.",

    "project.rating.title": "Rating Microservice",
    "project.rating.text": "Investigating microservice interactions and identifying issues in API behavior.",

    "project.telegram.title": "Telegram Bot",
    "project.telegram.text": "A Python project with user scenario handling and data management.",

    "project.auth.title": "Authorization & Registration",
    "project.auth.text": "A checklist covering positive and negative scenarios, field validation, required fields, and boundary values.",

    "project.trainers.title": "Trainers API",
    "project.trainers.text": "Testing a POST request: required parameters, data types and values, HTTP responses, and positive and negative scenarios.",

    "contact.eyebrow": "GET IN TOUCH",
    "contact.title": "Found a bug?<br><span>Or maybe a QA Engineer for your team?</span>",
    "contact.text": "I'd be happy to discuss a project, job opportunity, collaboration, or internship.",
    "contact.meow": "Meow-mail is always open.",

    "footer.made": "Made with curiosity & 🐾",
    "footer.top": "BACK TO TOP ↑"
}
};
