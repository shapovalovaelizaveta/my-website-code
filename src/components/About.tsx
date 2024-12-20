import React from 'react';

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://github.com/shapovalovaelizaveta/my-website-images/blob/main/%D0%A1%D0%B5%D0%BC%D0%B5%D0%B9%D0%BD%D0%BE%D0%B5%20%D1%84%D0%BE%D1%82%D0%BE.jpg?raw=true"
            alt="Семейное фото"
            className="rounded-lg shadow-xl w-full h-[500px] object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Обо мне</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Психосоматика — это не только наука, но и философия жизни, которой я живу. Она проявляется во всем: в отношениях с близкими, в заботе о детях, в моем собственном здоровье, а с некоторого момента и в помощи другим людям. Я научилась слушать своё тело, замечать эмоциональные сигналы и помогать другим делать то же самое. Моя цель — поддержать вас на пути к исцелению и помочь увидеть, что каждый симптом — это не враг, а послание от вашего организма, которое можно понять и использовать для внутреннего роста, для восстановления душевного равновесия.
          </p>
        </div>
      </div>
    </section>
  );
}