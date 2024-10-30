"use client"

import AdminLogin from '@/components/AdminLogin';
import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const VolunteerDetails = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/admin/verify");
        const data = await response.json();
        setIsAuthenticated(data.authenticated);
      } catch (error) {
        console.error("Authentication check failed:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     fetchVolunteers();
  //   }
  // }, [isAuthenticated]);

  // const fetchVolunteers = async () => {
  //   try {
  //     const response = await fetch("/api/admin/volunteers");
  //     const data = await response.json();
  //     setVolunteers(data);
  //   } catch (error) {
  //     console.error("Failed to fetch volunteers:", error);
  //   }
  // };

  const volunteers = [
    {
      id: "V001",
      name: "John Doe",
      email: "john.doe@example.com",
      hours: 15
    },
    {
      id: "V002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      hours: 20
    },
    {
      id: "V003",
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      hours: 12
    }
  ];


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Volunteer Details</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Hours</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {volunteers.map((volunteer) => (
            <TableRow key={volunteer.id}>
              <TableCell>{volunteer.id}</TableCell>
              <TableCell>{volunteer.name}</TableCell>
              <TableCell>{volunteer.email}</TableCell>
              <TableCell>{volunteer.hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default VolunteerDetails
