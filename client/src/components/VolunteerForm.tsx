"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LucideHeartHandshake, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoadingSpinner from "@/components/LoadingSpinner";
import ShimmerButton from "./ui/shimmer-button";

export default function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      college: formData.get("college"),
      RegistrationDuration: formData.get("RegistrationDuration"),
      Address: formData.get("Address") || "",
    };

    try {
        const response = await fetch("/api/Volunteertemp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log("Response:", result); 

        if (!response.ok) {
            throw new Error(result.error || "Something went wrong");
        }

        setSubmitted(true);
    } catch (error: any) {
        console.error("Full error:", error);
        setError(error.message);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 mt-3">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <LucideHeartHandshake className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </motion.div>
          </CardTitle>
          <CardDescription className="text-center text-gray-600">
            Please fill out the form below
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div>
                <Label htmlFor="college">College/Working</Label>
                <Input
                  id="college"
                  name="college"
                  type="text"
                  placeholder="Enter your current status"
                  required
                />
              </div>
              <div>
                <Label htmlFor="RegistrationDuration">Registration duration</Label>
                <Input
                  id="RegistrationDuration"
                  name="RegistrationDuration"
                  type="number"
                  placeholder="Enter duration in weeks"
                  required
                />
              </div>
              <div>
                <Label htmlFor="Address">Address</Label>
                <Textarea
                  id="Address"
                  name="Address"
                  placeholder="Enter your current address"
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <ShimmerButton
                shimmerColor="#ff0000"
                shimmerSize="0.05em"
                shimmerDuration="2s"
                borderRadius="5px"
                background="rgba(249, 115, 32, 0.8)"
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? <LoadingSpinner /> : "Submit Details"}
              </ShimmerButton>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4"
            >
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <Send className="w-5 h-5" />
                <span className="font-medium">
                  Form Submitted Successfully!
                </span>
              </div>
              <p className="text-gray-600">
                Thank you for providing your details.
              </p>
            </motion.div>
          )}
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-500">
          Your generosity makes a difference. Thank you for your support!
        </CardFooter>
      </Card>
    </div>
  );
}
