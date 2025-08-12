"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserProfileForm() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Ждем пока загрузится сессия
    if (status === "unauthenticated") {
      router.push("/sign-up");
    }
  }, []);

  return (
    <div className="tp-dashboard-profile-information pb-50">
    
    </div>
  );
}
