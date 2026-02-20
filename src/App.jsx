import { FiPhoneCall } from "react-icons/fi";
import { GrFormNextLink } from "react-icons/gr";
import { IoIosStar } from "react-icons/io";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { TbBrightnessUp } from "react-icons/tb";
import { MdAir } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoBuildOutline } from "react-icons/io5";
import { IoHammerOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import s1 from "./assets/s1.jpg";
import s2 from "./assets/s2.jpg";
import s3 from "./assets/s3.jpg";
import video from "./assets/video.mp4";
import { useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024; // 1024px coincide con 'lg' de Tailwind
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false); // Cierra el menú si pasamos a escritorio
    };

    handleResize(); // Ejecutar al montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className=" p-2 shadow-sm flex items-center justify-between">
        <div className="flex items-center justify-center md:justify-start gap-4">
          {/* Icono */}
          <MdAir className="text-blue-500 text-5xl shrink-0" />

          {/* Contenedor de Texto con Borde */}
          <div
            className="flex flex-col items-start border-gray-300 
                  /* En móvil: sin borde ni margen extraño */
                  border-none pl-0 
                  /* En escritorio: aparece el borde a la izquierda y espacio */
                  md:border-l md:pl-6"
          >
            <h1 className="text-xl md:text-2xl font-black tracking-tight text-gray-800">
              MOREH AIRE
            </h1>
            <p className="text-xs md:text-sm font-medium text-blue-600 uppercase tracking-widest">
              Aire acondicionado
            </p>
          </div>
        </div>
        <ul className="hidden md:flex">
          <li className="inline-block ml-5 hover:text-sky-400 cursor-pointer">
            {" "}
            <a href="#inicio">Inicio</a>
          </li>
          <li className="inline-block ml-5 hover:text-sky-400 cursor-pointer">
            {" "}
            <a href="#nosotros">Nosotros</a>
          </li>
          <li className="inline-block ml-5 hover:text-sky-400 cursor-pointer">
            {" "}
            <a href="#servicios">Services</a>
          </li>
          <li className="inline-block ml-5 hover:text-sky-400 cursor-pointer ">
            {" "}
            <a href="#galerias">Galerias</a>
          </li>
          <li className="inline-block ml-5 hover:text-sky-400 cursor-pointer">
            <a href="#contacto">Contacto</a>
          </li>
        </ul>

        <span className="hidden md:block mx-15 border-l border-r  border-gray-400 px-10">
          <p className="flex items-center pr-5">
            <FiPhoneCall className="mr-2 text-sky-500 text-3xl" />
            +1 829 373 8714
          </p>
        </span>

        <button
          className="lg:hidden text-sky-600 text-3xl absolute top-6 right-6 z-[60] transition-all duration-300 active:scale-90 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* El contenedor del icono gira levemente al abrirse */}
          <div
            className={`transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}
          >
            {isOpen ? <IoClose /> : <GiHamburgerMenu />}
          </div>
        </button>

       <div
  className={`
    fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 
    bg-white/95 backdrop-blur-xl transition-all duration-700 ease-in-out
    ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
  `}
>
  {/* Cabecera del Menú Móvil */}
  <div className="flex flex-col items-center gap-2 mb-4">
    <MdAir className="text-sky-500 text-6xl animate-pulse" />
    <h2 className="text-gray-800 text-xl font-black tracking-tighter uppercase">
      Moreh Aire
    </h2>
    <p className="text-sky-600 text-[10px] tracking-[0.3em] uppercase font-bold">
      Climatización Profesional
    </p>
  </div>

  {/* Enlaces de Navegación */}
  <nav className="flex flex-col items-center gap-6">
    {[
      { name: "Inicio", href: "#inicio" },
      { name: "Nosotros", href: "#nosotros" },
      { name: "Servicios", href: "#servicios" },
      { name: "Contacto", href: "#contacto" },
    ].map((link, index) => (
      <a
        key={index}
        href={link.href}
        onClick={() => setIsOpen(false)}
        className="text-gray-700 text-2xl font-bold tracking-tight hover:text-sky-500 transition-all duration-300 relative group"
      >
        {link.name}
        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
      </a>
    ))}
  </nav>

  {/* Botón de Acción en el Menú */}
  <a
    href="tel:+18293738714"
    className="mt-6 flex items-center gap-3 bg-sky-500 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-sky-200 active:scale-95 transition-transform"
  >
    <FiPhoneCall /> Llamar Ahora
  </a>

  {/* Footer del Menú */}
  <div className="absolute bottom-10 flex flex-col items-center gap-2">
    <div className="w-10 h-[1px] bg-gray-300"></div>
    <span className="text-gray-400 text-[10px] uppercase tracking-widest font-medium">
      Punta Cana • Verón
    </span>
  </div>
</div>
      </header>

      <main
        id="inicio"
        className="relative w-full h-[500px] md:h-[650px] overflow-hidden shadow-2xl rounded-lg"
      >
        {/* Imagen de fondo */}
        <img
          src={s1}
          alt="Servicio de Aire Acondicionado"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 bg-black/30 md:bg-transparent"></div>

        {/* CONTENEDOR PRINCIPAL: Aquí sucede la magia del orden */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center md:items-start md:pl-[10%] px-6">
          {/* Título */}
          <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter drop-shadow-2xl text-center md:text-left">
            Descubre Nuestro <br />
            <span className="text-blue-400">Servicio de Aire</span> <br />
            Acondicionado
          </h1>

          {/* Párrafo: Ahora siempre debajo del título */}
          <p className="text-white text-lg md:text-xl mt-4 md:mt-6 text-center md:text-left max-w-md">
            Libere los poderes de nuestros profesionales de plomeria
          </p>

          {/* Bloque de Acción: Botón y Estrellas */}
          <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 shadow-lg rounded-4xl transition duration-300 flex items-center whitespace-nowrap">
              Para más información, contáctanos{" "}
              <GrFormNextLink className="inline-block ml-2 text-xl" />
            </button>

            {/* Estrellas: Debajo del botón en móvil, al lado en escritorio */}
            <div className="flex text-white">
              <IoIosStar className="text-yellow-400 text-xl" />
              <IoIosStar className="text-yellow-400 text-xl" />
              <IoIosStar className="text-yellow-400 text-xl" />
              <FaStarHalfAlt className="text-yellow-400 text-xl" />
              <FaRegStar className="text-yellow-400 text-xl" />
            </div>
          </div>
        </div>
      </main>

      <section
        id="nosotros"
        className="p-5 mt-5 mx-4 md:mx-10 flex flex-col md:flex-row justify-between items-start gap-10"
      >
        {/* COLUMNA DE TEXTO */}
        <div className="flex flex-col w-full md:w-1/2">
          {/* Títulos: Siempre arriba */}
          <h2 className="p-2 bg-sky-100 text-sky-500 font-bold w-64 text-center shadow-sm rounded-3xl text-sm">
            Sobre Nuestros Servicios
          </h2>

          <h1 className="text-3xl md:text-4xl mt-4 font-bold text-gray-800 leading-tight">
            Resuelve tus Necesidades <br className="hidden md:block" />
            de plomería con nosotros.
          </h1>

          {/* IMAGEN: En móvil aparece aquí (order-none), en escritorio se oculta */}
          <div className="block md:hidden mt-6">
            <img
              src={s2}
              alt="Servicio de plomeria"
              className="w-full h-auto object-cover rounded-1xl shadow-sm"
            />
          </div>

          {/* Resto del contenido: Párrafo y Lista */}
          <div className="mt-6">
            <p className="text-gray-500 text-base md:text-lg">
              En Moreh Aire, nos enorgullece ofrecer servicios de plomería de
              alta calidad para satisfacer todas tus necesidades. Nuestro equipo
              de expertos está comprometido a brindarte soluciones eficientes.
            </p>

            <ul className="space-y-6 mt-8">
              <li className="flex font-bold items-start text-gray-700">
                <TbBrightnessUp className="text-sky-400 text-3xl mr-3 shrink-0" />
                <span>
                  Nuestra experiencia en plomería nos permite abordar una amplia
                  gama de problemas.
                </span>
              </li>
              <li className="flex font-bold items-start text-gray-700">
                <TbBrightnessUp className="text-sky-400 text-3xl mr-3 shrink-0" />
                <span>
                  Utilizamos tecnología de punta para diagnosticar y resolver
                  problemas rápidamente.
                </span>
              </li>
              <li className="flex font-bold items-start text-gray-700">
                <TbBrightnessUp className="text-sky-400 text-3xl mr-3 shrink-0" />
                <span>
                  Equipo disponible las 24 horas del día, los 7 días de la
                  semana.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* IMAGEN PARA ESCRITORIO: Se oculta en móvil y aparece a la derecha en PC */}
        <div className="hidden md:block w-full md:w-1/2">
          <img
            src={s2}
            alt="Servicio de plomeria"
            className="w-full h-[500px] object-cover rounded-1xl shadow-sm"
          />
        </div>
      </section>

      <section id="servicios" className="bg-sky-50 pb-20 pt-10">
        {/* Encabezados centrados */}
        <div className="flex flex-col items-center px-4 text-center">
          <h2 className="p-2 bg-sky-100 text-sky-500 font-bold w-64 shadow-sm rounded-3xl text-sm mb-6">
            Nuestros Servicios
          </h2>
          <h1 className="text-4xl md:text-5xl font-black text-gray-800">
            Explora Nuestros Servicios
          </h1>
        </div>

        {/* CONTENEDOR DE TARJETAS: El secreto está en 'flex-wrap' y 'justify-center' */}
        <div className="flex flex-wrap justify-center items-stretch mt-12 gap-8 px-6 md:px-20 max-w-7xl mx-auto">
          {/* Tarjeta 1: Mantenimiento */}
          <div className="w-full sm:w-[calc(50%-2rem)] lg:w-1/4 min-w-[300px] bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-gray-100 flex flex-col">
            <div className="bg-sky-50 w-20 h-20 rounded-full flex items-center justify-center m-auto mb-6 shrink-0">
              <IoSettingsOutline className="text-sky-500 text-5xl" />
            </div>
            <h3 className="text-2xl font-black text-gray-800 tracking-tight">
              Mantenimiento
            </h3>
            <p className="text-gray-500 mt-4 text-sm md:text-base leading-relaxed flex-grow">
              Evita fallas y ahorra energía con nuestra limpieza profunda y
              revisión técnica especializada.
            </p>
          </div>

          {/* Tarjeta 2: Instalación */}
          <div className="w-full sm:w-[calc(50%-2rem)] lg:w-1/4 min-w-[300px] bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-gray-100 flex flex-col">
            <div className="bg-sky-50 w-20 h-20 rounded-full flex items-center justify-center m-auto mb-6 shrink-0">
              <IoBuildOutline className="text-sky-500 text-5xl" />
            </div>
            <h3 className="text-2xl font-black text-gray-800 tracking-tight">
              Instalación Profesional
            </h3>
            <p className="text-gray-500 mt-4 text-sm md:text-base leading-relaxed flex-grow">
              Instalamos tus equipos con precisión técnica. Aseguramos la
              ubicación óptima y el sellado perfecto.
            </p>
          </div>

          {/* Tarjeta 3: Reparación */}
          <div className="w-full sm:w-[calc(50%-2rem)] lg:w-1/4 min-w-[300px] bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-gray-100 flex flex-col">
            <div className="bg-sky-50 w-20 h-20 rounded-full flex items-center justify-center m-auto mb-6 shrink-0">
              <IoHammerOutline className="text-sky-500 text-5xl" />
            </div>
            <h3 className="text-2xl font-black text-gray-800 tracking-tight">
              Reparación
            </h3>
            <p className="text-gray-500 mt-4 text-sm md:text-base leading-relaxed flex-grow">
              ¿Tu aire no enfría? Detectamos fallas críticas y reparamos
              componentes con repuestos originales.
            </p>
          </div>
        </div>
      </section>

      <section id="galerias" className="py-16 px-6 md:px-20 bg-white">
        {/* Encabezado */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="p-2 bg-sky-100 text-sky-500 font-bold w-64 text-center shadow-sm rounded-3xl text-sm mb-6">
            Trabajos Recientes
          </h2>
          <h1 className="text-3xl md:text-5xl font-black text-gray-800 text-center">
            Nuestra Experiencia en Acción
          </h1>
        </div>

        {/* Contenedor de Galería */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Item de Trabajo 1 */}
          <div className="group relative overflow-hidden rounded-2xl bg-gray-200 h-80 shadow-md">
            <img
              src={s1}
              alt="Instalación Industrial"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay al pasar el mouse */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-sky-400 text-sm font-bold uppercase">
                Instalación
              </span>
              <h3 className="text-white text-xl font-bold">
                Mantenimiento Ductos Centrales
              </h3>
            </div>
          </div>

          {/* Item de Trabajo 2 (Repite la estructura) */}
          <div className="group relative overflow-hidden rounded-2xl bg-gray-200 h-80 shadow-md">
            <img
              src={s2}
              alt="Reparación Residencial"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-sky-400 text-sm font-bold uppercase">
                Reparación
              </span>
              <h3 className="text-white text-xl font-bold">
                Sistema Inverter Residencial
              </h3>
            </div>
          </div>

          {/* Item de Trabajo 3 */}
          <div className="group relative overflow-hidden rounded-2xl bg-gray-200 h-80 shadow-md">
            <img
              src={s1}
              alt="Mantenimiento"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-sky-400 text-sm font-bold uppercase">
                Preventivo
              </span>
              <h3 className="text-white text-xl font-bold">
                Limpieza Química de Evaporadores
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-50 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Encabezado centrado */}
          <div className="flex flex-col items-center mb-12">
            <h2 className="p-2 bg-sky-100 text-sky-500 font-bold w-64 text-center shadow-sm rounded-3xl text-sm mb-6">
              Reseñas de Clientes
            </h2>
            <h1 className="text-3xl md:text-5xl font-black text-gray-800 text-center mb-4">
              Lo Que Dicen Nuestros Clientes
            </h1>
            <p className="text-gray-600 text-center text-lg max-w-2xl mx-auto">
              La confianza de nuestros clientes es nuestra mejor garantía.
              Conoce sus experiencias con nuestro servicio técnico.
            </p>
          </div>

          {/* Grid de Reseñas Responsivo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tarjeta de Reseña 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-400 mb-4">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p className="text-gray-600 italic">
                  "Excelente servicio. Vinieron el mismo día que los llamé y
                  arreglaron mi aire central en menos de una hora. Muy
                  profesionales."
                </p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-200 rounded-full flex items-center justify-center font-bold text-sky-700">
                  JS
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Juan Sánchez</h4>
                  <span className="text-sm text-gray-400">
                    Cliente Residencial
                  </span>
                </div>
              </div>
            </div>

            {/* Tarjeta de Reseña 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-400 mb-4">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p className="text-gray-600 italic">
                  "El mantenimiento preventivo que realizan es muy minucioso. Mi
                  factura de luz bajó notablemente después de la limpieza.
                  ¡Recomendados!"
                </p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-200 rounded-full flex items-center justify-center font-bold text-sky-700">
                  ML
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">María López</h4>
                  <span className="text-sm text-gray-400">
                    Propietaria de Negocio
                  </span>
                </div>
              </div>
            </div>

            {/* Tarjeta de Reseña 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-400 mb-4">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p className="text-gray-600 italic">
                  "Instalaron tres unidades en mi oficina. Puntuales, limpios y
                  el precio fue muy justo. Se nota que conocen su trabajo."
                </p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-200 rounded-full flex items-center justify-center font-bold text-sky-700">
                  RC
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Ricardo Castillo</h4>
                  <span className="text-sm text-gray-400">
                    Cliente Corporativo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        {/* El Video de fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>

        {/* Capa oscura (Overlay) para que el texto resalte */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Contenido sobre el video */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h2 className="p-2 bg-blue-500/20 backdrop-blur-md text-white border border-white/30 font-bold w-64 shadow-sm rounded-3xl text-sm mb-6">
            Mira Nuestro Trabajo
          </h2>

          <h1 className="text-3xl md:text-6xl font-black text-white max-w-4xl leading-tight drop-shadow-xl">
            Comprometidos con tu Confort <br />
            <span className="text-sky-400">En Cada Instalación</span>
          </h1>

          <p className="text-gray-200 mt-6 text-lg max-w-2xl drop-shadow-md">
            Nuestros técnicos capturados en acción, garantizando que cada
            sistema funcione con la máxima eficiencia.
          </p>
        </div>
      </section>
      <section className="py-16 px-6 max-w-6xl mx-auto">
        {/* Encabezado sencillo */}
        <div className="text-center mb-10">
          <h2 className="text-sky-500 font-bold uppercase tracking-widest text-sm mb-2">
            Contacto
          </h2>
          <h1 className="text-3xl md:text-4xl font-black text-gray-800">
            Obten una Cotización Gratis
          </h1>
          <p className="text-gray-500 mt-2">
            Completa el formulario y te responderemos a la brevedad.
          </p>
        </div>

        {/* Cambiamos a flex-col para que la imagen quede arriba en móvil, y md:flex-row para escritorio */}
        {/* Cambiamos el contenedor a flex-col para móvil y flex-row para escritorio */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          {/* Tu imagen con el estilo exacto que tenías, solo quitamos mr-10 en móvil */}
          <img
            src={s3}
            alt="Imagen de ejemplo"
            className="w-90 h-120 object-cover rounded-lg mb-8 md:mb-4 shadow-sm md:mr-10"
          />

          {/* Tu Formulario */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <h2 className="text-2xl font-bold text-gray-800 md:col-span-2 text-center mb-4">
              Solicitar una Cotización
            </h2>

            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-4 border-b border-gray-400 rounded-lg focus:border-sky-500 outline-none transition-colors"
            />

            <input
              type="text"
              placeholder="Apellido"
              className="w-full p-4 border-b border-gray-400 rounded-lg focus:border-sky-500 outline-none transition-colors"
            />

            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full p-4 border-b border-gray-400 rounded-lg focus:border-sky-500 outline-none transition-colors"
            />

            <select className="w-full p-4 border-b border-gray-400 rounded-lg focus:border-sky-500 outline-none transition-colors bg-white">
              <option>Selecciona un servicio</option>
              <option>Mantenimiento</option>
              <option>Instalación</option>
              <option>Reparación</option>
            </select>

            <textarea
              placeholder="¿En qué podemos ayudarte?"
              rows="4"
              className="w-full p-4 border border-gray-200 rounded-lg focus:border-sky-500 outline-none transition-colors md:col-span-2"
            ></textarea>

            <button className="md:col-span-2 bg-sky-500 text-white font-bold py-4 rounded-lg hover:bg-sky-600 transition-colors shadow-sm">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      <footer
        id="contacto"
        className=" bg-gray-50 text-gray-600 py-16 px-6 md:px-20 border-t border-gray-200"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Columna 1: Logo y Eslogan */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <MdAir className="text-sky-500 text-4xl" />
              <h2 className="text-gray-800 text-2xl font-black tracking-tighter">
                MOREH AIRE
              </h2>
            </div>
            <p className="text-sm leading-relaxed">
              Expertos en climatización y confort. Brindamos soluciones
              eficientes para tu hogar o negocio con técnicos certificados.
            </p>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-6 underline decoration-sky-500 decoration-2 underline-offset-8">
              Servicios
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li className="hover:text-sky-500 cursor-pointer transition-colors">
                Mantenimiento Preventivo
              </li>
              <li className="hover:text-sky-400 cursor-pointer transition-colors">
                Instalación Profesional
              </li>
              <li className="hover:text-sky-400 cursor-pointer transition-colors">
                Reparación de Averías
              </li>
              <li className="hover:text-sky-400 cursor-pointer transition-colors">
                Asesoría Técnica
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-6 underline decoration-sky-500 decoration-2 underline-offset-8">
              Contacto
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-sky-500 mt-1" />
                <span className="text-gray-700">+1 (829) 373-8714</span>
              </li>
              <li className="flex items-start gap-3">
                <MdEmail className="text-sky-500 mt-1 text-lg" />
                <span className="text-gray-700">info@morehaire.com</span>
              </li>
              <li className="flex items-start gap-3">
                <IoLocationSharp className="text-sky-500 mt-1 text-lg" />
                <span className="text-gray-700">
                  Verón, Punta Cana - Dirección de Oficina
                </span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Horarios */}
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-6 underline decoration-sky-500 decoration-2 underline-offset-8">
              Horario
            </h3>
            <div className="text-sm space-y-3">
              <p className="flex justify-between border-b border-gray-200 pb-1">
                <span>Lunes - Viernes:</span>
                <span className="text-gray-900 font-bold">8:00 - 18:00</span>
              </p>
              <p className="flex justify-between border-b border-gray-200 pb-1">
                <span>Sábado:</span>
                <span className="text-gray-900 font-bold">9:00 - 14:00</span>
              </p>
              <p className="flex justify-between text-sky-600 font-black pt-1">
                <span>Emergencias:</span> <span>24/7</span>
              </p>
            </div>
          </div>
        </div>

        {/* Barra inferior de Copyright */}
        <div className="max-w-7xl mx-auto border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-gray-400 uppercase tracking-widest">
          <p>© 2026 MOREH AIRE. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <span className="hover:text-sky-500 cursor-pointer transition-colors">
              Privacidad
            </span>
            <span className="hover:text-sky-500 cursor-pointer transition-colors">
              Términos
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
