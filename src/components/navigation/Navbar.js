import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo_prueba_2 from "assets/img/logo_prueba_2.png";
import DotLoader from "react-spinners/DotLoader";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full py-2 top-0 fixed z-50 transition-all duration-300 ${
        scrolling ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between md:px-14 px-2">
          <Link to="/" className="mt-1">
            <img src={logo_prueba_2} width={120} height={100} alt="Logo" />
          </Link>
          <div className="flex-shrink-0 space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative text-base font-medium text-gray-900 hover:text-gray-600 transition-all duration-300 
                before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                before:bg-indigo-500 before:scale-x-0 before:origin-left 
                hover:before:scale-x-100 hover:before:transition-transform hover:before:duration-300 
                ${isActive ? "before:scale-x-100" : "before:scale-x-0"}`
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/bodegas"
              className={({ isActive }) =>
                `relative text-base font-medium text-gray-900 hover:text-gray-600 transition-all duration-300 
                before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                before:bg-indigo-500 before:scale-x-0 before:origin-left 
                hover:before:scale-x-100 hover:before:transition-transform hover:before:duration-300 
                ${isActive ? "before:scale-x-100" : "before:scale-x-0"}`
              }
            >
              Bodegas
            </NavLink>
            <NavLink
              to="/servicios"
              className={({ isActive }) =>
                `relative text-base font-medium text-gray-900 hover:text-gray-600 transition-all duration-300 
                before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                before:bg-indigo-500 before:scale-x-0 before:origin-left 
                hover:before:scale-x-100 hover:before:transition-transform hover:before:duration-300 
                ${isActive ? "before:scale-x-100" : "before:scale-x-0"}`
              }
            >
              Servicios
            </NavLink>
            <NavLink
              to="/nosotros"
              className={({ isActive }) =>
                `relative text-base font-medium text-gray-900 hover:text-gray-600 transition-all duration-300 
                before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                before:bg-indigo-500 before:scale-x-0 before:origin-left 
                hover:before:scale-x-100 hover:before:transition-transform hover:before:duration-300 
                ${isActive ? "before:scale-x-100" : "before:scale-x-0"}`
              }
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                `relative text-base font-medium text-gray-900 hover:text-gray-600 transition-all duration-300 
                before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                before:bg-indigo-500 before:scale-x-0 before:origin-left 
                hover:before:scale-x-100 hover:before:transition-transform hover:before:duration-300 
                ${isActive ? "before:scale-x-100" : "before:scale-x-0"}`
              }
            >
              Contacto
            </NavLink>
            <Link
              to="/contacto"
              className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white text-sm font-medium shadow-md transition duration-300 hover:scale-105 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
            >
              Iniciar Sesión
              <DotLoader className="ml-2" loading={true} size={18} color="#f2f2f2" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);
