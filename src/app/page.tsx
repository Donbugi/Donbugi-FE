"use client";

import { AppProvider } from "@/lib/app-context";
import { MainApp } from "@/components/main-app";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#ede0ff] via-[#f5f0ff] to-[#d8f7ef] flex justify-center items-start">
      <AppProvider>
        <MainApp />
      </AppProvider>
    </main>
  );
}
