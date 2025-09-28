let tg = window.Telegram.WebApp;
tg.expand();

function buySub(plan) {
    alert("Кнопка нажата! Тариф: " + plan); // проверка
    tg.sendData(plan); // отправляем данные боту
}

