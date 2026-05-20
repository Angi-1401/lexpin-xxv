"use client";

import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { getFarmByIdService, updateFarmService } from "@/services/farmService";

export default function EditPage({ params }) {
  const router = useRouter();

  const { id } = use(params);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    size: "",
  });

  useEffect(() => {
    getFarmByIdService(id).then((data) => {
      setFormData({
        name: data.name,
        location: data.location,
        size: data.size,
      });
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFarmService(id, formData).then(() => {
      router.push("/");
    });
  };

  return (
    <main>
      <h1>Edit Farm</h1>
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
        <button type="submit">Edit</button>
      </form>
      <Link href="/">Back to Home</Link>
    </main>
  );
}
