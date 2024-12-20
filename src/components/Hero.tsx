import React from 'react';

export default function Hero() {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://github.com/shapovalovaelizaveta/my-website-images/blob/main/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%BE%D0%B5%20%D1%84%D0%BE%D1%82%D0%BE.jpg?raw=true")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10"></div>
      
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
          "Любая болезнь - это подарок и возможность восстановить равновесие души."
        </h1>
        
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8 mt-8">
          <img
            src="https://github.com/shapovalovaelizaveta/my-website-images/blob/main/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%BE%D0%B5%20%D1%84%D0%BE%D1%82%D0%BE.jpg?raw=true"
            alt="Елизавета Шаповалова"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
          />
          <p className="text-gray-800 text-lg leading-relaxed">
            Добро пожаловать! Меня зовут Шаповалова Елизавета, и моя специализация — психосоматика. Это направление в психологии помогает найти связь между состоянием души и тела, понять, какие эмоции или внутренние конфликты могут стоять за физическими симптомами и болезнями. Я убеждена, что наше тело — удивительный инструмент, который отражает всё, что мы переживаем, и сигнализирует, когда ему нужно внимание.
          </p>
        </div>
      </div>
    </div>
  );
}