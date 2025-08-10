'use client';

import DashboardLayout from "@/layouts/DashboardLayout";
import { useSession } from "next-auth/react";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { Tabs, Spin } from "antd";
import Users from "./components/Users";
import Properties from "./components/Properties";
import Ads from "./components/Ads";

export default function DashboardReview() {
  const { data: session, status } = useSession();
  const [isAllowed, setIsAllowed] = useState<boolean | null>(null);
  const [selectedTab, setSelectedTab] = useState("Users");

  useEffect(() => {
    if (status === "loading") return;
    if (session?.user.email === process.env.NEXT_PUBLIC_ACCESS) {
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
    }
  }, [session, status]);

  if (isAllowed === false) {
    notFound();
  }

  if (isAllowed === null) {
    return (
      <div style={{ textAlign: "center", paddingTop: 50 }}>
        <Spin size="large" />
      </div>
    );
  }

  const renderComponent = () => {
    switch (selectedTab) {
      case "Users":
        return <Users />;
      case "Properties":
        return <Properties />;
      case "Ads":
        return <Ads />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="tp-dashboard-new-property">
        <h1 style={{ fontSize: "24px", marginBottom: "24px" }}>Manage</h1>

        <Tabs
          defaultActiveKey="Users"
          onChange={(key) => setSelectedTab(key)}
          tabBarGutter={30}
          type="line"
          items={[
            { label: "Users", key: "Users" },
            { label: "Properties", key: "Properties" },
            { label: "Ads", key: "Ads" },
          ]}
        />

        <div style={{ marginTop: "20px" }}>{renderComponent()}</div>
      </div>
    </DashboardLayout>
  );
}
