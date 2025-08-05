'use client';
import DashboardLayout from "@/layouts/DashboardLayout";
import { useSession } from "next-auth/react";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardReview() {
  const { data: session, status } = useSession();
  const [isAllowed, setIsAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    if (status === "loading") return; // ждём загрузки сессии

    if (session?.user.email === process.env.NEXT_PUBLIC_ACCESS) {
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
    }
  }, [session, status]);

  if (isAllowed === false) {
    notFound(); // вызываем 404
  }

  if (isAllowed === null) {
    return <p></p>; // или можно скелетон, спиннер
  }

  return (
    <DashboardLayout>
      <div className="tp-dashboard-new-property">
        <p>users places ads</p>
        <h1>Manage</h1>
      </div>
    </DashboardLayout>
  );
}
