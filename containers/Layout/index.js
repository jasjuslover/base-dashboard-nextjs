import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/sidebar";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar />

      <div class="w-full flex flex-col h-screen overflow-y-hidden">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />

        <div class="w-full overflow-x-hidden border-t flex flex-col">
          <main class="w-full flex-grow p-6">{children}</main>

          <footer class="w-full bg-white text-right p-4">WIT 2021</footer>
        </div>
      </div>
    </div>
  );
}
