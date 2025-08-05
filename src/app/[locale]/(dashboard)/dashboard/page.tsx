'use client';

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import DashboardInsights from "./components/DashboardInsights";
import DashboardLayout from "@/layouts/DashboardLayout";
import StatsCardGrid from "./components/StatsCardGrid";

export default function Dashboard() {
  const { data:session,status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated" || !session) {
      router.push("/sign-up");
    }
  }, [status, router]);



  if (status === "authenticated") {
    return (
      <DashboardLayout>
        <StatsCardGrid />
        <DashboardInsights />
      </DashboardLayout>
    );
  }

  return null;
}
