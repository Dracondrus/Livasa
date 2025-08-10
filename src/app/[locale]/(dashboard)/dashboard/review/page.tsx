'use client';



import DashboardLayout from "@/layouts/DashboardLayout";

import { useEffect, useState } from "react";
import { IUser } from "../components/GetValues";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardPropertyItem2 from "../property/components/DashboardPropertyItem2";

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
<div
  style={{
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  }}
>
  {(!user?.properties || user.properties.length === 0) ? (
    <div className="text-center w-100 py-5">
      <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        You don't have any real estate yet, I think it's time to create some. 😉
      </p>
    </div>
  ) : (
    (() => {
      const rejectedProps = user.properties.filter(p => p.permission =="rejected");

      if (rejectedProps.length === 0) {
        return (
          <div className="text-center w-100 py-5">
            <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Пока нет отклонённых объявлений
            </p>
          </div>
        );
      }

      return rejectedProps.map(property => (
        <DashboardPropertyItem2 property={property} key={property.id} />
      ));
    })()
  )}
</div>

    </DashboardLayout>
  );
}
