"use client"
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const DonationRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('/api/DonateTemp');
        if (!response.ok) {
          throw new Error('Failed to fetch requests');
        }
        const data = await response.json();
        setRequests(data);
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        Error: {error}
      </div>
    );
  }

  function formatDate(dateString:any) {
    return new Date(dateString).toLocaleString();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Donation Requests</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {requests.map((request:any) => (
        <Card className="relative overflow-hidden border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm" key={request.id}>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-100 dark:bg-orange-900/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl font-semibold">{request.name}</span>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span className="text-sm">{request.email}</span>
              </div>

              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span className="text-sm">{request.phone}</span>
              </div>

              <div className="flex items-center space-x-2 text-gray-600">
                <MessageSquare className="h-4 w-4" />
                <span className="text-sm">{request.message}</span>
              </div>

              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{formatDate(request.createdAt)}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DonationRequests;
