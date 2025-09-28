@dp.message(F.web_app_data)
async def get_webapp(msg: Message):
    plan = msg.web_app_data.data
    await msg.answer(f"Ты выбрал тариф: {plan}")
