import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Methods from './components/Methods';
import Requests from './components/Requests';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-blue-600">Елизавета Шаповалова</span>
            </div>
            <div className="hidden sm:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600">Обо мне</a>
              <a href="#methods" className="text-gray-600 hover:text-blue-600">Методы</a>
              <a href="#requests" className="text-gray-600 hover:text-blue-600">Запросы</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Methods />
        <Requests />
        <Contact />
      </main>

      {/* Floating Action Buttons */}
      <a
        href="https://wa.me/380967313737"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button bg-green-500 hover:bg-green-600 right-4 bottom-24"
      >
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>
      
      <a
        href="https://www.instagram.com/shapovalova_healing/"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 right-4 bottom-4"
      >
        <Instagram size={20} />
        <span>Instagram</span>
      </a>
    </div>
  );
}

export default App;