"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { getFarmsService } from "@/services/farmService";

export default function HomePage() {
  const [farmData, setFarmData] = useState([]);

  useEffect(() => {
    getFarmsService().then((data) => {
      setFarmData(data);
    });
  }, []);
  
  return (
    <main>
      <h1>Farms</h1>
      <Link href="/create">Create Farm</Link>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Size (acres)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {farmData.map((farm) => (
            <tr key={farm._id}>
              <td>{farm.name}</td>
              <td>{farm.location}</td>
              <td>{farm.size}</td>
              <td>
                <Link href={`/edit/${farm._id}`}>Edit</Link> |{" "}
                <Link href={`/delete/${farm._id}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
