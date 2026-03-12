import { TEACHERS } from '../../constants.tsx';
import React from 'react';

import { Send, Phone, User as UserIcon, Calendar, CheckCircle } from 'lucide-react';


interface CourseInfoProps {
  type: 'oflayn' | 'onlayn';
}

export const CourseInfo: React.FC<CourseInfoProps> = ({ type }) => {

  // ARIZA TOPSHIRISH FUNKSIYASI
  const handleApply = () => {
    const name = prompt("Ismingizni kiriting:");
    const phone = prompt("Telefon raqamingizni kiriting:");

    if (name && phone) {
      // Yangi ariza ob'ekti
      const newApplication = {
        id: Date.now(),
        studentName: name,
        courseName: type === 'onlayn' ? "Fullstack Web Development" : "English IELTS Intensive", // Misol uchun
        type: type.toUpperCase(), // 'ONLINE' yoki 'OFFLINE'
        date: new Date().toISOString().split('T')[0], // Bugungi sana: 2025-02-05
        status: 'Yangi'
      };

      // 1. Avvalgi bor arizalarni olamiz
      const existingApps = JSON.parse(localStorage.getItem('course_applications') || '[]');
      
      // 2. Yangisini qo'shamiz
      const updatedApps = [...existingApps, newApplication];
      
      // 3. Qaytadan saqlaymiz
      localStorage.setItem('course_applications', JSON.stringify(updatedApps));

      alert("Arizangiz qabul qilindi! Admin panelda ko'rishingiz mumkin.");
    } else {
      alert("Iltimos, ism va telefonni kiriting!");
    }
  };

  return (
    <div className="space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl font-black text-slate-800 capitalize">{type} Kurslarimiz Haqida</h2>
        <p className="text-slate-600 text-lg">
          Bizning {type} kurslarimiz yuqori sifatli ta'lim va professional o'qituvchilar tomonidan olib boriladi.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {TEACHERS.map((teacher, index) => (
          <div key={index} className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition">
            <div className="w-full md:w-40 h-40 shrink-0">
              <img src={teacher.imageUrl} alt={teacher.name} className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-black rounded-full uppercase mb-2">
                  {teacher.subject} O'qituvchisi
                </span>
                <h3 className="text-xl font-bold text-slate-800">{teacher.name}</h3>
                <p><b>Telegram:</b></p>
                <h3 className="text-xl font-bold text-slate-800">{teacher.telegram}</h3>
                <p><b>Telefon:</b></p>
                <h3 className="text-xl font-bold text-slate-800">{teacher.phone}</h3>
              </div>
              <div className="pt-2">
                <button className="w-full py-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition" onClick={() =>window.location.href='https://t.me/Mountain19940809'}>
                  Bog'lanish
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ARIZA TOPSHIRISH BLOKI */}
      <div className="bg-indigo-600 rounded-3xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-lg text-center md:text-left">
            <h3 className="text-2xl font-bold">Kursga yozilish uchun ariza qoldiring</h3>
            <p className="text-indigo-100">Bizning administratorlarimiz siz bilan tez orada bog'lanishadi.</p>
          </div>
          <button 
            onClick={handleApply} // TUGMA ISHLAYDI
            className="px-10 py-4 bg-white text-indigo-600 font-black rounded-2xl hover:bg-indigo-50 transition shadow-xl shrink-0"
          >
            Ariza topshirish
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: <Calendar />, title: "Moslashuvchan vaqt", desc: "Darslar sizga qulay bo'lgan vaqtda tashkil etiladi." },
          { icon: <CheckCircle />, title: "Sertifikat", desc: "Kursni muvaffaqiyatli tamomlaganlarga maxsus sertifikat beriladi." },
          { icon: <UserIcon />, title: "Mentor yordami", desc: "Har bir darsda tushunmagan savollaringizga mentor yordam beradi." }
        ].map((feat, i) => (
          <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
              {feat.icon}
            </div>
            <h4 className="font-bold text-slate-800 mb-2">{feat.title}</h4>
            <p className="text-sm text-slate-500">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};