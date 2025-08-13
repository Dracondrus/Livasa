

'use client'

import PropertyLayout from "@/components/Layout/PropertyLayout";
import { useParams } from "next/navigation";

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  
  return <PropertyLayout>

    Lorem ipsum dolor <br />
    {id}
  </PropertyLayout>;
}






