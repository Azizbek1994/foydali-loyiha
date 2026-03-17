
import React, { useState } from 'react';
import { StorageService } from '../../services/storage';
import { Test } from '../../types';
import { ChevronRight, Calculator, Languages, Book } from 'lucide-react';
import { title } from 'process';

interface SubjectsViewProps {
  onStartTest: (test: Test) => void;
}

export const SubjectsView: React.FC<SubjectsViewProps> = ({ onStartTest }) => {
  const [selectedSubject, setSelectedSubject] = useState<'matematika' | 'ingliz_tili' | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<number | string | null>(null);

  const tests = StorageService.getTests();

  const handleGradeSelect = (grade: number | string) => {
    setSelectedGrade(grade);
  };

  const startTopicTest = (test: Test) => {
    onStartTest(test);
  };

  if (selectedSubject && selectedGrade) {
    const gradeTests = tests.filter(t => {
    const gradeValue = typeof 
    selectedGrade ==='string' ? parseInt(selectedGrade) : selectedGrade;
      return t.subject === selectedSubject && t.grade === gradeValue;
     });
    
    return (
      <div className="space-y-6 animate-fadeIn">
        <button 
          onClick={() => setSelectedGrade(null)}
          className="text-indigo-600 font-bold hover:underline flex items-center gap-1"
        >
          &larr; Sinfni o'zgartirish
        </button>
        <h2 className="text-2xl font-bold text-slate-800 capitalize">
          {selectedSubject.replace('_', ' ')} - {selectedGrade}-sinf mavzulari
        </h2>
        
        <div className="grid gap-4">
          {gradeTests.length > 0 ? (
            gradeTests.map(test => (
              <button
                key={test.id}
                onClick={() => startTopicTest(test)}
                className="flex items-center justify-between p-5 bg-slate-50 rounded-xl hover:bg-indigo-50 hover:border-indigo-200 border border-transparent transition group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-lg text-indigo-600 shadow-sm">
                    <Book size={20} />
                  </div>
                  <span className="font-bold text-slate-700">{test.topic}</span>
                </div>
                <div className="flex items-center gap-2 text-indigo-600 font-medium group-hover:translate-x-1 transition-transform">
                  Testni boshlash <ChevronRight size={18} />
                </div>
              </button>
            ))
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <p className="text-slate-500 font-medium">Bu sinf uchun testlar hali qo'shilmagan.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (selectedSubject) {
    return (
      <div className="space-y-6 animate-fadeIn">
        <button 
          onClick={() => setSelectedSubject(null)}
          className="text-indigo-600 font-bold hover:underline flex items-center gap-1"
        >
          &larr; Fanni o'zgartirish
        </button>
        <h2 className="text-2xl font-bold text-slate-800 capitalize">
          {selectedSubject.replace('_', ' ')}: Sinfni tanlang
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['1-sinf', '2-sinf', '3-sinf', '4-sinf','Muammoni hal qilish','Tanqidiy Fikirlash', 'Birinchi bosqich testlari','Ikkinchi bosqich testlari'].map(grade => (
            <button
              key={grade.toString()}
              onClick={() => handleGradeSelect(grade)}
              className="aspect-square flex flex-col items-center justify-center gap-4 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-indigo-50 hover:border-indigo-200 hover:shadow-lg transition group"
            >
              <span className="text-5xl font-black text-slate-300 group-hover:text-indigo-200 transition">{grade}</span>
              <span className="font-bold text-slate-700">{grade}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-black text-slate-800 mb-4">O'rganishni boshlang</h2>
        <p className="text-slate-500">O'zingizga ma'qul bo'lgan fanni tanlang va bilimlaringizni sinab ko'ring.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <button
          onClick={() => setSelectedSubject('matematika')}
          className="p-8 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-3xl hover:shadow-2xl hover:shadow-indigo-200 transition transform hover:-translate-y-2 group"
        >
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
            <Calculator size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-2">Matematika</h3>
          <p className="text-indigo-100 mb-6">Mantiqiy fikrlash va hisoblash qobiliyatingizni oshiring.</p>
          <div className="flex items-center gap-2 font-bold bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition">
            Boshlash <ChevronRight size={18} />
          </div>
        </button>

        <button
          onClick={() => setSelectedSubject('ingliz_tili')}
          className="p-8 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-3xl hover:shadow-2xl hover:shadow-emerald-200 transition transform hover:-translate-y-2 group"
        >
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
            <Languages size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-2">Ingliz tili</h3>
          <p className="text-emerald-100 mb-6">Chet tilini oson va qiziqarli tarzda o'rganing.</p>
          <div className="flex items-center gap-2 font-bold bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition">
            Boshlash <ChevronRight size={18} />
          </div>
        </button>
      </div>
    </div>
  );
};
