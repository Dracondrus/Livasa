'use client';


import DashboardPropertyItem from "./components/DashboardPropertyItem";
import DashboardLayout from "@/layouts/DashboardLayout";

import { useEffect, useState } from "react";
import { IUser } from "../components/GetValues";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardProperty() {
  const router = useRouter();
  const { data: session, status } = useSession(); // добавим статус

  const [user, setUser] = useState<IUser | null>(null);
console.log(user)
  useEffect(() => {
    if (status === "loading") return; // ждём, пока session загрузится

    if (!session) {
      router.push("/sign-up");
    } else {
      // получаем данные пользователя только один раз
      fetch(`/api/users/${session.user.id}`)
        .then(async (res) => {
          if (!res.ok) {
            const text = await res.text();
            throw new Error(`Ошибка ${res.status}: ${text}`);
          }
          return res.json();
        })
        .then((data) => {
          setUser(data);
        })
        .catch((err) => {
          console.error('Ошибка при получении пользователя:', err);
        });
    }
  }, [session, status, router]);

  return (
    <DashboardLayout>
      {/* Отображение user properties */}

      {/* Пример списка через propertyData */}
    <div className="">
  <div    style={{
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
 
  }}>
    {user?.properties && user.properties.length > 0 ? (
      user.properties.map(property => (
        <DashboardPropertyItem property={property} key={property.id} />
      ))
    ) : (
      <div className="text-center w-100 py-5">
        <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          Maybe it’s time to make some money 😉
        </p>
      </div>
    )}
  </div>
</div>
    </DashboardLayout>
  );
}
