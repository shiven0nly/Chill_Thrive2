// LoginPage.jsx
'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { HeroHeader } from '@/components/Header';
import { ArrowLeft } from 'lucide-react';

export default function LoginPage({ setCurrentPage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setCurrentPage('Hero'); // or dashboard after login
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Same subtle blue radial background as Hero & Booking */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 translate-x-1/3 translate-y-1/2 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl" />
      </div>

      <HeroHeader setCurrentPage={setCurrentPage} />

      <main className="py-16 px-6 flex items-center justify-center min-h-screen">
        <div className="mx-auto max-w-md w-full">
          {/* Main Card */}
          <div className="relative bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 shadow-xl p-8">
            {/* Back Arrow - Top Left */}
            <button
              onClick={() => setCurrentPage('Hero')}
              className="absolute top-6 left-6 p-2 rounded-full hover:bg-slate-100 transition"
              aria-label="Go back"
            >
              <ArrowLeft className="size-6 text-slate-600" />
            </button>

            <div className="text-center mb-8 pt-4">
              <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>
              <p className="text-slate-600 mt-2">Log in to book your recovery session</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 bg-white border-slate-300 hover:border-slate-400 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-slate-700">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 bg-white border-slate-300 hover:border-slate-400 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-600"
                />
              </div>
    <div className='flex justify-center items-center'>
              <Button
                type="submit"
                size="lg"
                className="cursor-pointer transition-all bg-blue-500 text-white py-2 rounded-lg
border-blue-600 w-[200px]
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:bg-blue-500"
              >
                Log In
              </Button>
              </div>
            </form>

            {/* Signup Option */}
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-600">
                New to Chill Thrive?{' '}
                <button
                  onClick={() => setCurrentPage('Signup')} // Create SignupPage later if needed
                  className="font-semibold text-cyan-700 hover:text-cyan-800 underline transition cursor-pointer"
                >
                  Create an account
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}