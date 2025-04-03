import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function Header() {
  const handleType = (count) => {
    console.log(count);
  };
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <main>
    {/* Fondo decorativo en la parte superior */}
    <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-2xl opacity-30">
      <svg
        className="relative left-1/2 h-[20rem] max-w-none -translate-x-1/2 sm:h-[40rem]"
        viewBox="0 0 1200 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="gradient-superior"
            x1="1200"
            x2="-100"
            y1="0"
            y2="500"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6366F1" stopOpacity="0.3" /> {/* Azul indigo más sutil */}
            <stop offset={1} stopColor="#A5B4FC" stopOpacity="0.2" /> {/* Azul claro más difuso */}
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient-superior)"
          d="M0 400 Q600 -50 1200 400 L1200 0 L0 0 Z"
        />
      </svg>
    </div>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-5xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="text-gray-600">
                  Anunciando nuestra próxima expansión.{' '}
                  <a href="/nosotros" className="font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Leer más <span aria-hidden="true">&rarr;</span>
                  </a>
                </span>
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-4xl font-semibold tracking-tight pb-8 sm:text-7xl">
                Te apoyamos en <br />
                <span className="block min-h-[50px] text-indigo-600">
                  <Typewriter
                    words={[
                      'Impulsar tu negocio',
                      'Optimizar tu logística',
                      'Crecer con nosotros!'
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={120}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>

              {/* Descripción agregada */}
              <p className="text-lg text-gray-700 leading-relaxed sm:px-20">
                Nuestro parque industrial ofrece infraestructura moderna y soluciones estratégicas
                para potenciar el crecimiento de empresas y emprendimientos. Ubicado en una zona
                estratégica, brindamos seguridad, conectividad y apoyo logístico de primer nivel.
              </p>

              {/* Menú con subrayado animado */}
              <ul className="mt-6 flex flex-wrap justify-center gap-6 text-lg font-medium">
                <li className="relative">
                  <Link
                    to="/servicios"
                    className="relative text-gray-900 hover:text-gray-600 transition-all duration-300 
                    before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                    before:bg-indigo-500 before:scale-x-0 before:origin-left 
                    hover:before:scale-x-100 hover:before:transition-transform hover:before:duration-300"
                  >
                    Logística
                  </Link>
                </li>
                <li className="relative">
                  <Link
                    to="/servicios"
                    className="relative text-gray-900 hover:text-gray-600 transition-all duration-300 
                    before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                    before:bg-indigo-500 before:scale-x-0 before:origin-left 
                    hover:before:scale-x-100 hover:before:transition-transform hover:before:duration-300"
                  >
                    Infraestructura
                  </Link>
                </li>
              </ul>

              {/* Botones */}
              <div className="mt-8 flex flex-wrap justify-center gap-x-4">
                <a
                  href="#"
                  className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
                >
                  Explorar más
                  <span className="text-indigo-200 ml-1" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
                <a
                  href="#"
                  className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Contáctanos
                  <span className="text-gray-400 ml-1" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>

            {/* Fondo decorativo en la parte inferior */}
            <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-2xl opacity-30">
              <svg
                className="relative left-1/2 h-[20rem] max-w-none -translate-x-1/2 sm:h-[40rem]"
                viewBox="0 0 1200 700"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="gradient-inferior"
                    x1="1200"
                    x2="-100"
                    y1="0"
                    y2="500"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#6366F1" stopOpacity="0.3" /> {/* Azul indigo más sutil */}
                    <stop offset={1} stopColor="#A5B4FC" stopOpacity="0.2" /> {/* Azul claro más difuso */}
                  </linearGradient>
                </defs>
                <path
                  fill="url(#gradient-inferior)"
                  d="M0 300 Q600 750 1200 300 L1200 700 L0 700 Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
