'use client';

import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-secondary">
      <header className="bg-primary text-white py-8 text-center">
        <h1 className="text-4xl font-bold">Humbeo</h1>
        <p className="text-lg mt-2">Cocina Vegetariana/Vegana</p>
        <a href="#reservations" className="mt-4 px-6 py-2 bg-accent text-white rounded-full inline-block hover:bg-opacity-80 transition">
          Reserva Ahora
        </a>
      </header>

      <section id="about" className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
        <p className="max-w-xl mx-auto">
          En Humbeo, Colombia, te invitamos a un viaje culinario donde la tierra se transforma en sabor. Somos un oasis vegetariano y vegano que celebra la frescura y la autenticidad de los ingredientes colombianos. Cada plato es una obra de arte, elaborada con pasión para deleitar tu paladar y nutrir tu cuerpo. Descubre un ambiente cálido y acogedor, perfecto para compartir momentos especiales o simplemente disfrutar de una comida deliciosa y consciente. Ven a Humbeo y redescubre el placer de comer bien. ¡Te esperamos con delicias que inspiran!
        </p>
      </section>

      <section id="menu" className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-4">Destacados del Menú</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="max-w-sm">
            <img className="w-full h-64 object-cover rounded-lg shadow-lg" src="https://source.unsplash.com/featured/?vegetarian,meal" alt="Menu Highlight 1" />
            <h3 className="text-xl font-semibold mt-4">Plato Estrella 1</h3>
          </div>
          <div className="max-w-sm">
            <img className="w-full h-64 object-cover rounded-lg shadow-lg" src="https://source.unsplash.com/featured/?vegan,cuisine" alt="Menu Highlight 2" />
            <h3 className="text-xl font-semibold mt-4">Plato Estrella 2</h3>
          </div>
        </div>
      </section>

      <section id="ambiance" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Ambiente</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <img className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-lg" src="https://source.unsplash.com/featured/?restaurant,interior" alt="Ambiance 1" />
          <img className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-lg" src="https://source.unsplash.com/featured/?restaurant,decor" alt="Ambiance 2" />
          <img className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-lg" src="https://source.unsplash.com/featured/?restaurant,people" alt="Ambiance 3" />
        </div>
      </section>

      <section id="reservations" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Reservaciones</h2>
        <p className="mb-2">Teléfono: <a href="tel:3123827363" className="text-accent hover:underline">3123827363</a></p>
        <p>Dirección: carrera 78 87-3, Bogotá</p>
      </section>

      <footer className="bg-secondary text-white py-8 text-center">
        <div className="mb-4">
          <p>Horas de Operación:</p>
          <p>Lunes a Viernes: 10:00 AM - 9:00 PM</p>
          <p>Sábado y Domingo: 11:00 AM - 10:00 PM</p>
        </div>
        <div>
          <p>Encuéntranos en:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-primary transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12.1C22 6.5 17.5 2 12 2S2 6.5 2 12.1c0 5 3.7 9.1 8.5 9.9v-7H8v-3h2.5V9.2c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.5H14.7c-1.3 0-1.7.8-1.7 1.6v2h3l-.5 3h-2.5v7c4.8-.8 8.5-4.9 8.5-9.9z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-primary transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.1.1 1.8.2 2.2.3.5.1.9.3 1.3.7.4.4.6.8.7 1.3.1.4.2 1 .3 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.1-.2 1.8-.3 2.2-.1.5-.3.9-.7 1.3-.4.4-.8.6-1.3.7-.4.1-1 .2-2.2.3-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.1-.1-1.8-.2-2.2-.3-.5-.1-.9-.3-1.3-.7-.4-.4-.6-.8-.7-1.3-.1-.4-.2-1-.3-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.1.2-1.8.3-2.2.1-.5.3-.9.7-1.3.4-.4.8-.6 1.3-.7.4-.1 1-.2 2.2-.3 1.3-.1 1.7-.1 4.9-.1m0-2.2c-3.3 0-3.7 0-5 .1-1.2.1-2.1.3-2.8.5-.9.2-1.7.5-2.4 1.2-.7.7-1 1.5-1.2 2.4-.3.7-.4 1.6-.5 2.8-.1 1.3-.1 1.7-.1 5s0 3.7.1 5c.1 1.2.3 2.1.5 2.8.2.9.5 1.7 1.2 2.4.7.7 1.5 1 2.4 1.2.7.3 1.6.4 2.8.5 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.2-.1 2.1-.3 2.8-.5.9-.2 1.7-.5 2.4-1.2.7-.7 1-1.5 1.2-2.4.3-.7.4-1.6.5-2.8.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.2-.3-2.1-.5-2.8-.2-.9-.5-1.7-1.2-2.4-.7-.7-1.5-1-2.4-1.2-.7-.3-1.6-.4-2.8-.5-1.3-.1-1.7-.1-5-.1z" />
                <path d="M12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.3a4.2 4.2 0 1 1 0-8.3 4.2 4.2 0 0 1 0 8.3z" />
                <circle cx="18.4" cy="5.6" r="1.4" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primary transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23 3a10.9 10.9 0 0 1-3.1.9 5.4 5.4 0 0 0 2.4-3 10.9 10.9 0 0 1-3.4 1.3 5.4 5.4 0 0 0-9.2 4.9A15.3 15.3 0 0 1 1.7 2.8a5.4 5.4 0 0 0 1.7 7.2 5.4 5.4 0 0 1-2.4-.7v.1a5.4 5.4 0 0 0 4.3 5.3 5.5 5.5 0 0 1-2.4.1 5.4 5.4 0 0 0 5 3.7A10.9 10.9 0 0 1 0 20a15.4 15.4 0 0 0 8.3 2.4c10 0 15.5-8.3 15.5-15.5v-.7A11 11 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;