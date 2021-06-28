import React, { useContext } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { SidebarContext } from "../../context/SidebarContext";

export default function Layout({ children }) {
  const { isSideMenuOpen } = useContext(SidebarContext);

  return (
    <div className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSideMenuOpen ? "overflow-hidden" : ""}`}>
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <main class="h-full overflow-y-auto">
          <div className="container grid px-6 mx-auto">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Dashboard</h2>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
