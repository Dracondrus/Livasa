'use client';

import DashboardLayout from "@/layouts/DashboardLayout";
import { useEffect, useState } from "react";
import { IUser } from "../components/GetValues";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardPropertyItem2 from "../property/components/DashboardPropertyItem2";

export default function DashboardProperty() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (status === "loading") return; // wait until session is loaded

    if (!session) {
      router.push("/sign-up");
    } else {
      // fetch user data once
      fetch(`/api/users/${session.user.id}`)
        .then(async (res) => {
          if (!res.ok) {
            const text = await res.text();
            throw new Error(`Error ${res.status}: ${text}`);
          }
          return res.json();
        })
        .then((data) => {
          setUser(data);
        })
        .catch((err) => {
          console.error("Error fetching user:", err);
        });
    }
  }, [session, status, router]);

  return (
    <DashboardLayout>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {!user?.properties || user.properties.length === 0 ? (
          <div className="text-center w-100 py-5">
            <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              You don&apos;t have any real estate yet, I think it&apos;s time to create some. 😉
            </p>
          </div>
        ) : (() => {
          const rejectedProps = user.properties.filter(
            (p) => p.permission === "rejected"
          );

          if (rejectedProps.length === 0) {
            return (
              <div className="text-center w-100 py-5">
                <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  There are no rejected listings yet
                </p>
              </div>
            );
          }

          return rejectedProps.map((property) => (
            <DashboardPropertyItem2 property={property} key={property.id} />
          ));
        })()}
      </div>
    </DashboardLayout>
  );
}
