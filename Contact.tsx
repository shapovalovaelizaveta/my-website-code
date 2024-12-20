import React, { useState } from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="bg-blue-50">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Контакты</h2>
            <div className="space-y-6">
              <a
                href="https://wa.me/380967313737"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600"
              >
                <Phone className="w-6 h-6" />
                <span>+380967313737 (WhatsApp)</span>
              </a>
              
              <a
                href="https://www.instagram.com/shapovalova_healing/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600"
              >
                <Instagram className="w-6 h-6" />
                <span>@shapovalova_healing</span>
              </a>
              
              <a
                href="mailto:eshapovalova.gnm@gmail.com"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600"
              >
                <Mail className="w-6 h-6" />
                <span>eshapovalova.gnm@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-6">Напишите мне</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}