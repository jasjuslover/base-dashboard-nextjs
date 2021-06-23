import React from "react";

export default function Header({ isOpen, setIsOpen }) {
  return (
    <div>
      <header class="w-full items-center bg-white py-2 px-6 hidden sm:flex">
        <div class="w-1/2"></div>
        <div x-data="{ isOpen: false }" class="relative w-1/2 flex justify-end">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            class="relative z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
          >
            <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
          </button>
          {isOpen && (
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              class="h-full w-full fixed inset-0 cursor-default"
            ></button>
          )}
          {isOpen && (
            <div class="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
              <a href="#" class="block px-4 py-2 account-link hover:text-white hover:bg-purple-500">
                Account
              </a>
              <a href="#" class="block px-4 py-2 account-link hover:text-white hover:bg-purple-500">
                Support
              </a>
              <a href="#" class="block px-4 py-2 account-link hover:text-white hover:bg-purple-500">
                Sign Out
              </a>
            </div>
          )}
        </div>
      </header>

      <header class="w-full bg-purple-400 py-5 px-6 sm:hidden">
        <div class="flex items-center justify-between">
          <a href="index.html" class="text-white text-3xl font-semibold uppercase hover:text-gray-300">
            Admin
          </a>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            class="text-white text-3xl focus:outline-none"
          >
            {!isOpen && <i x-show="!isOpen" class="fas fa-bars"></i>}
            {isOpen && <i x-show="isOpen" class="fas fa-times"></i>}
          </button>
        </div>

        <nav class={`flex flex-col pt-4 ${isOpen ? "flex" : "hidden"}`}>
          <a
            href="index.html"
            class="flex items-center active-nav-link text-white py-2 pl-4 nav-item hover:bg-purple-600"
          >
            <i class="fas fa-tachometer-alt mr-3"></i>
            Dashboard
          </a>
          <a
            href="blank.html"
            class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item  hover:bg-purple-600"
          >
            <i class="fas fa-sticky-note mr-3"></i>
            Blank Page
          </a>
          <a href="#" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
            <i class="fas fa-sign-out-alt mr-3"></i>
            Sign Out
          </a>
          <button class="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-purple-300 flex items-center justify-center">
            <i class="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
          </button>
        </nav>
      </header>
    </div>
  );
}
