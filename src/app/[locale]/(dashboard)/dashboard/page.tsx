'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DashboardInsights from "./components/DashboardInsights"
import DashboardLayout from "@/layouts/DashboardLayout"
import StatsCardGrid from "./components/StatsCardGrid"

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem(process.env.NEXT_PUBLIC_GET_PASSWORD!); // Или другой способ хранения авторизации

    if (!token) {
      router.push('/login'); // редирект на login
    }
  }, []);

  return (
    <DashboardLayout>
      <StatsCardGrid />
      <DashboardInsights />
    </DashboardLayout>
  );
}
