/* =========================================================
   ОСНОВНОЙ JAVASCRIPT САЙТА

   Здесь находится логика:
   - переключение RU / EN;
   - сохранение выбранного языка;
   - мобильное меню.

   Сами тексты находятся отдельно в translations.js.
========================================================= */

function setLanguage(lang) {
    // Проверяем, что такой язык действительно существует.
    if (!translations[lang]) {
        lang = "ru";
    }

    // Обновляем lang у HTML — полезно для браузера и accessibility.
    document.documentElement.lang = lang;

    // Меняем все элементы, у которых есть data-i18n="ключ".
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;

        if (translations[lang][key] !== undefined) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Меняем подпись переключателя языка.
    const languageSwitch = document.getElementById("langSwitch");

    if (languageSwitch) {
        languageSwitch.innerHTML = lang === "ru"
            ? "RU <span>/</span> EN"
            : "EN <span>/</span> RU";
    }

    // Запоминаем язык, чтобы при следующем открытии сайта
    // автоматически показать последний выбранный вариант.
    localStorage.setItem("portfolio-language", lang);
}


document.addEventListener("DOMContentLoaded", () => {
    // По умолчанию открываем русский язык.
    const savedLanguage = localStorage.getItem("portfolio-language") || "ru";
    setLanguage(savedLanguage);

    // Переключение RU ↔ EN.
    document.getElementById("langSwitch")?.addEventListener("click", () => {
        const currentLanguage = document.documentElement.lang;
        const nextLanguage = currentLanguage === "ru" ? "en" : "ru";

        setLanguage(nextLanguage);
    });

    // Открытие/закрытие мобильного меню.
    document.getElementById("menuBtn")?.addEventListener("click", () => {
        document.getElementById("nav")?.classList.toggle("navigation--open");
    });

    // После перехода по пункту мобильного меню закрываем его.
    document.querySelectorAll(".navigation a").forEach((link) => {
        link.addEventListener("click", () => {
            document.getElementById("nav")?.classList.remove("navigation--open");
        });
    });
});
