import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-4 py-2 flex items-center justify-between">
      <div className="text-xl font-semibold text-gray-800">💌 Angorani</div>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
          홈
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">
          소개
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
