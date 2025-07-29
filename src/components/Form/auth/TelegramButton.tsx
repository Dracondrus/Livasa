"use client";

import { LoginButton } from "@telegram-auth/react";

export default function TelegramLoginButton() {
  const handleAuth = async (data: any) => {
    // 1. Отправляем данные на сервер для проверки
    const params = new URLSearchParams(data).toString();
    const res = await fetch(`/api/telegram-auth?${params}`);
    const result = await res.json();

    // 2. Сохраняем данные в localStorage
    if (res.ok && result.user) {
      localStorage.setItem("telegramUser", JSON.stringify(result.user));

    } else {
      alert("Ошибка авторизации");
    }
  };

  return (
    <LoginButton
      botUsername={"Livasa_bot"}
      authCallbackUrl="" // можно оставить пустым
      buttonSize="large"
      cornerRadius={1}
      showAvatar={true}
      lang="ru"
      onAuthCallback={handleAuth}
    />
  );
}
