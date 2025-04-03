import { Typewriter } from 'react-simple-typewriter';
import parque_img_1 from 'assets/img/parque_sanjose_1.png.jpg';
import parque_img_2 from 'assets/img/parque_sanjose_2.jpg';
import parque_img_3 from 'assets/img/parque_sanjose_3.jpg';

const incentives = [
  {
    name: 'Infraestructura Moderna',
    imageSrc: parque_img_3,
    description: 'Amplias instalaciones diseñadas para la eficiencia y comodidad de las empresas.',
  },
  {
    name: 'Seguridad 24/7',
    imageSrc: parque_img_2,
    description: 'Vigilancia permanente con tecnología avanzada para tu tranquilidad.',
  },
  {
    name: 'Ubicación Estratégica',
    imageSrc: parque_img_1,
    description: 'Acceso directo a rutas comerciales clave para una logística eficiente.',
  },
];

export default function Incentives() {
  return (
    <div className="relative bg-gray-100 py-24 sm:py-32 overflow-hidden">
      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl text-center mx-auto">
          {/* Animación Typewriter */}
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent sm:text-5xl">
            <Typewriter
              words={['Conoce nuestro Parque Industrial', 'Un Espacio para Crecer', 'Innovación y Seguridad 24/7']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </h2>
        </div>

        {/* Tarjetas organizadas correctamente */}
        <div className="relative z-10 mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {incentives.map((incentive, index) => (
            <div
              key={incentive.name}
              className="flex flex-col overflow-hidden rounded-2xl shadow-lg hover:shadow-purple-500/50 transition-transform hover:scale-105 bg-white w-full max-w-sm animate-fade-in opacity-100"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative w-full h-56">
                <img className="absolute inset-0 w-full h-full object-cover rounded-t-2xl" src={incentive.imageSrc} alt={incentive.name} />
                <div className="absolute inset-0 bg-black/30 rounded-t-2xl"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-indigo-700">{incentive.name}</h3>
                <p className="mt-2 text-gray-600">{incentive.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
