import React from 'react';

export default function Methods() {
  const methods = [
    "Трансовые техники для доступа к подсознанию",
    "Новая Германская Медицина (ГНМ)",
    "Техника Эмоциональной Свободы (ТЭС)",
    "EMDR",
    "Техника принятия чувства",
    "Работа с убеждениями"
  ];

  const steps = [
    "Анализ конкретного запроса",
    "Поиск корневой причины",
    "Трансформация эмоций",
    "Рекомендации по самостоятельной работе"
  ];

  return (
    <section id="methods" className="bg-blue-50 py-16">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Мои методы</h2>
            <img
              src="https://github.com/shapovalovaelizaveta/my-website-images/blob/main/%D0%9C%D0%BE%D0%B8%20%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B.jpg?raw=true"
              alt="Методы работы"
              className="rounded-lg shadow-xl mb-6 w-full h-[300px] object-cover"
            />
            <div className="grid grid-cols-2 gap-4">
              {methods.map((method, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                  <p className="font-medium text-gray-700">{method}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-600">Как проходит сеанс</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-6">
                Сеанс длится 2–3 часа и включает как диагностику, так и проработку. Иногда запрос решается за один сеанс, иногда требуется несколько встреч. В любом случае каждый сеанс — это очередная ступень, снятие одного эмоционального слоя, приближающее вас к внутреннему равновесию.
              </p>
              
              <h4 className="text-xl font-semibold mb-4">Шаги работы:</h4>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3">
                      {index + 1}
                    </span>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}