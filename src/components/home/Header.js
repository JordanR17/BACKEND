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
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-5xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="text-gray-600">
                  Anunciando nuestra próxima expansión.{' '}
                  <a href="#" className="font-semibold text-indigo-600">
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
                    to="/servicios/logistica"
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
                    to="/servicios/infraestructura"
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

            {/* Fondo decorativo */}
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg
                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9089FC" />
                    <stop offset={1} stopColor="#FF80B5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
