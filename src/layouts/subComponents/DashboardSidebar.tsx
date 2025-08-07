"use client";
import {
  AddPropertySvg,
  MyPropertiesSvg,
  // MyFavouritesSvg,
  // ReviewsSvg,
  IdentityDockSvg,
  ReviewsSvg,
  // DashboardSvg,
} from "@/components/SVG";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { JSX, useState, useEffect } from "react";

// SidebarItem interface
interface SidebarItem {
  href: string;
  label: string;
  icon?: JSX.Element;
}

// SidebarSection interface
interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

// Sidebar component
const Sidebar = () => {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const [activePath, setActivePath] = useState<string>("");

  // Update activePath when the component mounts
  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);



  const manageListingSection: SidebarSection = {
    title: "Manage listing",
    items: [
      // Добавляем пункт Create только если email совпадает
      ...(userEmail === process.env.NEXT_PUBLIC_ACCESS!
        ? [
            {
              href: "/dashboard/manage",
              label: "Manage",
            },
          ]
        : []),
      {
        href: "/dashboard/add-new-property",
        label: "Add new property",
        icon: <AddPropertySvg />,
      },
      {
        href: "/dashboard/property",
        label: "My properties",
        icon: <MyPropertiesSvg />,
      },
  
      {
        href: "/dashboard/review",
        label: "Reviews",
        icon: <ReviewsSvg />,
      },
    ],
  };

  const manageAccountSection: SidebarSection = {
    title: "Manage account",
    items: [
      {
        href: "/dashboard/my-profile",
        label: "My profile",
        icon: <IdentityDockSvg />,
      },
    ],
  };

  // Sidebar render function with active class logic
  const renderSection = (section: SidebarSection) => (
    <div className="tp-dashboard-sidebar-content pb-70" key={section.title}>
      <h4 className="tp-dashboard-sidebar-title">{section.title}</h4>
      {section.items.map((item, index) => (
        <div className="tp-dashboard-sidebar-item" key={index}>
          <Link
            href={item.href}
            className={activePath === item.href ? "active" : ""}
            onClick={() => setActivePath(item.href)}
          >
            <span>{item.icon}</span> {item.label}
          </Link>
        </div>
      ))}
    </div>
  );

  return (
    <div className="tp-dashboard-sidebar d-none d-xxl-block">
      <div className="tp-dashboard-sidebar-wrap">
        {/* {renderSection(mainSection)} */}
        {renderSection(manageListingSection)}
        {renderSection(manageAccountSection)}
      </div>
    </div>
  );
};

export default Sidebar;
