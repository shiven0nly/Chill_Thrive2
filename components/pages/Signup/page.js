// SignupPage.jsx
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HeroHeader } from "@/components/Header";
import { ArrowLeft } from "lucide-react";

export default function SignupPage({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentPage("Hero"); // Redirect to home after signup
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Same subtle blue background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 translate-x-1/3 translate-y-1/2 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl" />
      </div>

      <HeroHeader setCurrentPage={setCurrentPage} />

      <main className="py-20 px-6 flex items-center justify-center min-h-screen">
        <div className="mx-auto max-w-md w-full">
          {/* Main Card */}
          <div className="relative bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 shadow-2xl p-10">
            {/* Back Arrow */}
            <button
              onClick={() => setCurrentPage("Hero")}
              className="absolute top-6 left-6 p-2 rounded-full hover:bg-slate-100 transition"
              aria-label="Go back"
            >
              <ArrowLeft className="size-6 text-slate-600" />
            </button>

            <div className="text-center mb-10 pt-4">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Create Account</h1>
              <p className="text-slate-600">Join Chill Thrive and start recovering stronger</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-700 font-medium">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-700 font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-slate-700 font-medium">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="h-12"
                />
              </div>
        <div className="flex justify-center items-center">
              <Button
                type="submit"
                size="lg"
                className="cursor-pointer transition-all bg-blue-500 text-white py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:bg-blue-500"
              >
                Create Account
              </Button>
</div>
            </form>

            {/* Login Link */}
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-600 cursor-pointer">
                Already have an account?{" "}
                <button
                  onClick={() => setCurrentPage("Login")}
                  className="font-semibold text-cyan-700 hover:text-cyan-800 underline transition cursor-pointer"
                >
                  Log in
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}