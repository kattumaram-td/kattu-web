import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-amber-50 shadow p-4">
      <nav className="flex gap-4">
        <Link to="/" className="text-gray-700 hover:text-gray-900 font-semibold">Home</Link>
        <Link to="/sobre" className="text-gray-700 hover:text-gray-900 font-semibold">Sobre</Link>
        <Link to="/contato" className="text-gray-700 hover:text-gray-900 font-semibold">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;