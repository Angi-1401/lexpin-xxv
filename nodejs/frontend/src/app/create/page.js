"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { createFarmService } from "@/services/farmService";

export default function CreatePage() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    size: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createFarmService(formData).then(() => {
        router.push("/");
      });
    } catch (error) {
      console.error("Error creating farm:", error);
    }
  };

  return (
    <main>
      <h1>Create Farm</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          id="location"
          name="location"
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
        />
        <input
          id="size"
          name="size"
          type="number"
          placeholder="Size (acres)"
          value={formData.size}
          onChange={(e) => setFormData({ ...formData, size: e.target.value })}
        />
        <button type="submit">Create</button>
      </form>
      <Link href="/">Back to Home</Link>
    </main>
  );
}
