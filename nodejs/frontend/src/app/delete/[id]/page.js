"use client";

import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { getFarmByIdService, deleteFarmService } from "@/services/farmService";

export default function DeletePage({ params }) {
  const router = useRouter();

  const { id } = use(params);

  useEffect(() => {
    getFarmByIdService(id);
  }, [id]);

  const handleDelete = () => {
    deleteFarmService(id).then(() => {
      router.push("/");
    });
  };

  return (
    <main>
      <h1>Delete Farm</h1>
      <p>Are you sure you want to delete this farm?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
      <Link href="/">No, Go Back</Link>
    </main>
  );
}
