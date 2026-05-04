import Navbar from "./Navbar";
import Header from "./Header";
import { useState } from "react"

export default function Layout({ children }) {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4 max-w-md mx-auto w-full">
        {children}
      </main>
      <Navbar />
    </div>
  );
}
