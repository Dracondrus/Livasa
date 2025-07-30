"use client";

import { LoginButton } from "@telegram-auth/react";

export default function TelegramLoginButton() {
  const handleAuth: NonNullable<
    React.ComponentProps<typeof LoginButton>["onAuthCallback"]
  > = async (data) => {
    const params = new URLSearchParams(
      Object.entries(data).map(([key, value]) => [key, String(value)])
    ).toString();

    const res = await fetch(`/api/telegram-auth?${params}`);
    const result = await res.json();

    if (res.ok && result.user) {
      localStorage.setItem("telegramUser", JSON.stringify(result.user));
    } else {
      alert("Ошибка авторизации");
    }
  };

  return (
    <LoginButton
      botUsername="Livasa_bot"
      authCallbackUrl="https://livasa.vercel.app/api/telegram-auth"
      buttonSize="large"
      cornerRadius={1}
      showAvatar={true}
      lang="ru"
      onAuthCallback={handleAuth}
    />
  );
}
