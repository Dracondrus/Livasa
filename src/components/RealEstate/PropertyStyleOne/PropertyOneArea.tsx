'use client'

import { IUser } from "@/app/[locale]/(dashboard)/dashboard/components/GetValues";
import PropertySingleCard from "@/components/Common/PropertySingleCard";
import { useEffect, useState } from "react";

export default function PropertyOneArea() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("/api/properties/get");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data: IUser[] = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <div>One moment — quality takes time.</div>;
  
  return (
<div>
    <select name="" id="">
        <option value="">All</option>
    </select>
 <select name="" id="">
        <option value="">All</option>
    </select>
     <select name="" id="">
        <option value="">All</option>
    </select>
         <select name="" id="">
        <option value="">type price</option>
    </select>
    <br />
    <br />

        <div className="row g-3">
        
      {users.map((user) =>
        user.properties
          .filter((p) => p.permission === "approved")
          .map((property) => (
            <div className="col-6 col-md-4 col-lg-3" key={property.id}>
              <PropertySingleCard  property={property} />
            </div>
          ))
      )}
  
    </div>
</div>
  );
}
