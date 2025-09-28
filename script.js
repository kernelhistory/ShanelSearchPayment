function buySub(plan) {
  // Передаём боту, какой тариф выбрал юзер
  Telegram.WebApp.sendData(plan);
}
