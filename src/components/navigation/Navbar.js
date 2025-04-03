import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Íconos del menú móvil
import logo_prueba_2 from "assets/img/logo_prueba_2.png";
import DotLoader from "react-spinners/DotLoader";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        scrolling
          ? "bg-white/90 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-14">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="mt-1">
            <img src={logo_prueba_2} width={120} height={100} alt="Logo" />
          </Link>

          {/* Menú en pantallas grandes */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative text-lg font-medium text-gray-900 hover:text-gray-600 transition-all
                 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                 before:bg-indigo-500 before:scale-x-0 before:origin-left 
                 hover:before:scale-x-100 hover:before:transition-transform hover:before:duration-300
                 ${isActive ? "before:scale-x-100 text-indigo-600" : "before:scale-x-0"}`
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/bodegas"
              className={({ isActive }) =>
                `relative text-lg font-medium text-gray-900 hover:text-gray-600 transition-all
                 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                 before:bg-indigo-500 before:scale-x-0 before:origin-left 
                 hover:before:scale-x-100 hover:before:transition-transform hover:before:duration-300
                 ${isActive ? "before:scale-x-100 text-indigo-600" : "before:scale-x-0"}`
              }
            >
              Bodegas
            </NavLink>
            <NavLink
              to="/servicios"
              className={({ isActive }) =>
                `relative text-lg font-medium text-gray-900 hover:text-gray-600 transition-all
                 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                 before:bg-indigo-500 before:scale-x-0 before:origin-left 
                 hover:before:scale-x-100 hover:before:transition-transform hover:before:duration-300
                 ${isActive ? "before:scale-x-100 text-indigo-600" : "before:scale-x-0"}`
              }
            >
              Servicios
            </NavLink>
            <NavLink
              to="/nosotros"
              className={({ isActive }) =>
                `relative text-lg font-medium text-gray-900 hover:text-gray-600 transition-all
                 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                 before:bg-indigo-500 before:scale-x-0 before:origin-left 
                 hover:before:scale-x-100 hover:before:transition-transform hover:before:duration-300
                 ${isActive ? "before:scale-x-100 text-indigo-600" : "before:scale-x-0"}`
              }
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                `relative text-lg font-medium text-gray-900 hover:text-gray-600 transition-all
                 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                 before:bg-indigo-500 before:scale-x-0 before:origin-left 
                 hover:before:scale-x-100 hover:before:transition-transform hover:before:duration-300
                 ${isActive ? "before:scale-x-100 text-indigo-600" : "before:scale-x-0"}`
              }
            >
              Contacto
            </NavLink>

            {/* Botón "Iniciar Sesión" */}
            <Link
              to="/login"
              className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white text-sm font-medium shadow-md transition duration-300 hover:scale-105 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
            >
              Iniciar Sesión
              <DotLoader className="ml-2" loading={true} size={18} color="#f2f2f2" />
            </Link>
          </div>

          {/* Botón de menú móvil */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 flex flex-col items-center space-y-4">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Inicio</NavLink>
          <NavLink to="/bodegas" onClick={() => setMenuOpen(false)}>Bodegas</NavLink>
          <NavLink to="/servicios" onClick={() => setMenuOpen(false)}>Servicios</NavLink>
          <NavLink to="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</NavLink>
          <NavLink to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</NavLink>
          <Link
            to="/login"
            className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white text-sm font-medium shadow-md transition duration-300 hover:scale-105 hover:bg-indigo-700"
            onClick={() => setMenuOpen(false)}
          >
            Iniciar Sesión
            <DotLoader className="ml-2" loading={true} size={18} color="#f2f2f2" />
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
