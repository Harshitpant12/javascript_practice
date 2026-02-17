import React from "react";
import { Link } from "react-router-dom";
import { BookOpenText, LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col fixed left-0 top-0 bottom-0 z-50">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-100">
        <BookOpenText className="size-6 text-black mr-2" />
        <p>Harshit</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-1">
        <Link
          className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          to={"/"}
        >
          Dashboard
        </Link>
        <Link
          className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          to={"/services"}
        >
          Services
        </Link>
        <Link
          className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          to={"/settings"}
        >
          Settings
        </Link>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-100">
        <button className="flex gap-2 cursor-pointer">
          <LogOut className="size-6" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
