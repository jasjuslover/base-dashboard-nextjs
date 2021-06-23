export default function Sidebar() {
  return (
    <aside class="relative bg-purple-400 h-screen w-64 hidden sm:block shadow-xl">
      <div class="p-6">
        <a href="index.html" class="text-white text-3xl font-semibold uppercase hover:text-gray-300">
          Admin
        </a>
      </div>
      <nav class="text-white text-base font-semibold pt-3">
        <a
          href="index.html"
          class="flex items-center active-nav-link text-white py-4 pl-6 nav-item  hover:bg-purple-600"
        >
          <i class="fas fa-tachometer-alt mr-3"></i>
          Dashboard
        </a>
        <a
          href="blank.html"
          class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item  hover:bg-purple-600"
        >
          <i class="fas fa-sticky-note mr-3"></i>
          Blank Page
        </a>
      </nav>
    </aside>
  );
}
