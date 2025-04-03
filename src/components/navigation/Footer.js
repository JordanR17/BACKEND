import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo_prueba_2 from 'assets/img/logo_prueba_2.png';

const Footer = () => {
  const navigation = {
    services: [
      { name: "Arrendamiento de Bodegas", href: "/contacto" },
      { name: "Espacios de Oficinas", href: "/contacto" },
      { name: "Logística y Distribución", href: "/contacto" },
      { name: "Administrativos", href: "/contacto" },
    ],
    quickLinks: [
      { name: "Inicio", href: "/" },
      { name: "Tipos de bodegas", href: "/bodegas" },
      { name: "Nuestros Servicios", href: "/servicios" },
      { name: "Sobre Nosotros", href: "/nosotros" },
      { name: "Contactanos !!!", href: "/contacto" },
    ],
    legal: [
      { name: "Términos y Condiciones", href: "#" },
      { name: "Política de Privacidad", href: "#" },
    ],
    social: [
      { name: "Facebook", href: "https://www.facebook.com/", icon: faFacebook },
      { name: "Instagram", href: "#", icon: faInstagram },
      { name: "LinkedIn", href: "#", icon: faLinkedin },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Logo y Redes Sociales */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img src={logo_prueba_2} alt="Logo" className="h-20" /> {/* Ajuste de tamaño */}
          <div className="flex gap-5">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 text-2xl"
              >
                <FontAwesomeIcon icon={item.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Servicios y Enlaces rápidos */}
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-3 border-b pb-2 border-gray-700">Servicios</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name} className="hover:text-gray-400">
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 border-b pb-2 border-gray-700">Más Información</h3>
            <ul className="space-y-2">
              {navigation.quickLinks.map((item) => (
                <li key={item.name} className="hover:text-gray-400">
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contacto y Legal */}
        <div className="space-y-5">
          <div>
            <h3 className="text-lg font-semibold mb-3 border-b pb-2 border-gray-700">Contacto</h3>
            <p>📍 San José Parque industrial, Funza, Cundinamarca</p>
            <p>📞 +57 3025176372</p>
            <p>📧 info@parqueindustrial.com</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 border-b pb-2 border-gray-700">Legal</h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name} className="hover:text-gray-400">
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="text-center text-gray-500 mt-10 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Parque Industrial San Jose. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
