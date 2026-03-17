import React, { useState, useEffect } from 'react';
import { 
  Users, BookOpen, MessageSquare, Plus, Trash2, Edit, 
  CheckCircle, XCircle, LayoutDashboard, GraduationCap, Save, X
} from 'lucide-react';
import { StorageService } from '../../services/storage';
import { User, Test, Feedback, Teacher } from '../../types';

export const AdminPanel: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'courses' | 'teachers' | 'tests' | 'feedback'>('courses');
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [isAddingTeacher, setIsAddingTeacher] = useState(false);
  
  // Yangi o'qituvchi uchun forma holati
  const [newTeacher, setNewTeacher] = useState<Teacher>({
    name: '',
    subject: '',
    telegram: '',
    phone: '',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  } );

  useEffect(() => {
    setFeedbacks(StorageService.getFeedback());
    setTeachers(StorageService.getTeachers());
  }, []);

  const handleSaveTeacher = (e: React.FormEvent) => {
    e.preventDefault();
    StorageService.saveTeacher(newTeacher);
    setTeachers(StorageService.getTeachers());
    setIsAddingTeacher(false);
    setNewTeacher({ name: '', subject: '', telegram: '', phone: '', imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' } );
  };

  const handleDeleteTeacher = (phone: string) => {
    if(window.confirm("Haqiqatdan ham ushbu o'qituvchini o'chirmoqchimisiz?")) {
      StorageService.deleteTeacher(phone);
      setTeachers(StorageService.getTeachers());
    }
  };

  const handleDeleteFeedback = (id: string) => {
    const updated = feedbacks.filter(f => f.id !== id);
    setFeedbacks(updated);
    localStorage.setItem('edulearn_feedback', JSON.stringify(updated));
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-20">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <LayoutDashboard className="text-indigo-600" /> Admin Boshqaruv Paneli
          </h1>
          <p className="text-slate-500 text-sm">Tizim ma'lumotlarini shu yerdan boshqarishingiz mumkin</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          { id: 'courses', label: 'Kurslar', icon: BookOpen },
          { id: 'teachers', label: 'O\'qituvchilar', icon: GraduationCap },
          { id: 'tests', label: 'Testlar Bazasi', icon: CheckCircle },
          { id: 'feedback', label: 'Arizalar va Fikrlar', icon: MessageSquare },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id as any)}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
              activeSubTab === tab.id 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
            }`}
          >
            <tab.icon size={18} /> {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 min-h-[50vh] p-6">
        {activeSubTab === 'teachers' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">O'qituvchilar Ro'yxati</h2>
              <button 
                onClick={() => setIsAddingTeacher(true)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold hover:bg-green-600 transition"
              >
                <Plus size={18} /> Yangi o'qituvchi qo'shish
              </button>
            </div>

            {isAddingTeacher && (
              <form onSubmit={handleSaveTeacher} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 animate-in slide-in-from-top-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text" placeholder="Ism Familiya" required
                    className="px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={newTeacher.name} onChange={e => setNewTeacher({...newTeacher, name: e.target.value})}
                  />
                  <input
                    type="text" placeholder="Mutaxassisligi (masalan: Matematika)" required
                    className="px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={newTeacher.subject} onChange={e => setNewTeacher({...newTeacher, subject: e.target.value})}
                  />
                  <input
                    type="text" placeholder="Telegram link (https://t.me/... )" required
                    className="px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={newTeacher.telegram} onChange={e => setNewTeacher({...newTeacher, telegram: e.target.value})}
                  />
                  <input
                    type="text" placeholder="Telefon raqam" required
                    className="px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={newTeacher.phone} onChange={e => setNewTeacher({...newTeacher, phone: e.target.value})}
                  />
                </div>
                <div className="flex gap-2 justify-end">
                  <button type="button" onClick={() => setIsAddingTeacher(false)} className="px-4 py-2 text-slate-600 font-bold">Bekor qilish</button>
                  <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2">
                    <Save size={18} /> Saqlash
                  </button>
                </div>
              </form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachers.map((t) => (
                <div key={t.phone} className="p-4 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition group">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={t.imageUrl} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100" />
                    <div>
                      <h3 className="font-bold text-slate-800">{t.name}</h3>
                      <p className="text-xs text-indigo-600 font-bold uppercase">{t.subject}</p>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm text-slate-500 mb-4">
                    <p className="flex items-center gap-2"><MessageSquare size={14}/> {t.telegram}</p>
                    <p className="flex items-center gap-2"><Plus size={14}/> {t.phone}</p>
                  </div>
                  <div className="flex gap-2 border-t pt-4">
                    <button className="flex-1 flex items-center justify-center gap-1 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition text-sm font-bold">
                      <Edit size={16}/> Tahrirlash
                    </button>
                    <button 
                      onClick={() => handleDeleteTeacher(t.phone)}
                      className="flex-1 flex items-center justify-center gap-1 py-2 text-red-600 hover:bg-red-50 rounded-lg transition text-sm font-bold"
                    >
                      <Trash2 size={16}/> O'chirish
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSubTab === 'feedback' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800">Foydalanuvchilarning Taklif va Shikoyatlari</h2>
            {feedbacks.length === 0 ? (
              <div className="text-center py-12 text-slate-400">Hozircha hech qanday xabar yo'q</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="py-4 font-bold text-slate-600">Foydalanuvchi</th>
                      <th className="py-4 font-bold text-slate-600">Xabar</th>
                      <th className="py-4 font-bold text-slate-600 text-right">Amallar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feedbacks.map((f) => (
                      <tr key={f.id} className="border-b border-slate-50 hover:bg-slate-50 transition">
                        <td className="py-4 font-medium text-slate-800">{f.userName}</td>
                        <td className="py-4 text-slate-600 max-w-md">{f.content}</td>
                        <td className="py-4 text-right">
                          <button 
                            onClick={() => handleDeleteFeedback(f.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {(activeSubTab === 'courses' || activeSubTab === 'tests') && (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <Plus size={48} className="mb-4 opacity-20" />
            <p>Ushbu bo'lim ustida ish olib borilmoqda...</p>
          </div>
        )}
      </div>
    </div>
  );
};
