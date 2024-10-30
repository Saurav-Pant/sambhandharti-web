"use client";

import AdminLogin from "@/components/AdminLogin";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PasswordCheck() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/admin/verify");
        const data = await response.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated) {
    return (
      <div className="min-h-screen p-8">
        <div className="flex justify-between items-start mb-8">
          <div className="space-y-4">
            <Link href="/Admin/AdminUpload">
              <Button variant="outline">
                <div className="flex flex-col gap-y-2 gap-x-2">
                  <span>Upload Media</span>
                </div>
              </Button>
            </Link>

            <Link href="/Admin/PaymentDetails">
              <Button variant="outline">
                <div className="flex flex-col gap-y-2 gap-x-2">
                  <span>View Payment Details</span>
                </div>
              </Button>
            </Link>

            <Link href="/Admin/VolunteersDetails">
              <Button variant="outline">
                <div className="flex flex-col gap-y-2 gap-x-2">
                  <span>Update Volunteers Details</span>
                </div>
              </Button>
            </Link>

            <Link href="/Admin/Givers">
              <Button variant="outline">
                <div className="flex flex-col gap-y-2 gap-x-2">
                  <span>View Who Wants to pay</span>
                </div>
              </Button>
            </Link>

            <Link href="/Admin/VolunteerRequest">
              <Button variant="outline">
                <div className="flex flex-col gap-y-2 gap-x-2">
                  <span>View Who Wants to be a Volunteer</span>
                </div>
              </Button>
            </Link>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-8">Welcome, Admin!</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 sm:space-y-2">
                <li>Upload new media content</li>
                <li>Review recent payments</li>
                <li>Update volunteer information</li>
                <li>Check who wants to pay</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <p>No recent activity to display.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Use the buttons on the top left for quick navigation</li>
                <li>Remember to log out when you're done</li>
                <li>Check the payment details regularly</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <>
      <AdminLogin />
    </>
  );
}
