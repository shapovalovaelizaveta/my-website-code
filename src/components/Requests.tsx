import React from 'react';

export default function Requests() {
  const requests = [
    "Хронические заболевания",
    "Аллергии и аутоиммунные заболевания",
    "Проблемы с весом",
    "Кожные заболевания",
    "Головные боли и мигрени",
    "Проблемы с пищеварением",
    "Боли в спине и суставах",
    "Проблемы со сном",
    "Тревожность и панические атаки",
    "Хроническая усталость"
  ];

  return (
    <section id="requests" className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">С какими запросами я работаю</h2>
        <img
          src="https://github.com/shapovalovaelizaveta/my-website-images/blob/main/%D0%97%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D1%8B.jpeg?raw=true"
          alt="Запросы"
          className="rounded-lg shadow-xl mx-auto mb-8 max-w-2xl"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {requests.map((request, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-lg font-medium text-gray-700">{request}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Если вы готовы услышать своё тело, понять его сигналы и освободиться от причин, которые мешают вам быть здоровым, я приглашаю вас записаться на встречу. Этот шаг станет началом вашего пути к гармонии и исцелению.
        </p>
      </div>
    </section>
  );
}