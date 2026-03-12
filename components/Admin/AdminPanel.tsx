
import React, { useState } from 'react';
import { User, Test, Question, Feedback } from '../../types';
import { StorageService } from '../../services/storage';
import { Users, FilePlus, MessageSquare, Save, Plus, Trash2, Image as ImageIcon, Search } from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'users' | 'tests' | 'feedback'>('users');
  
  const users = StorageService.getUsers();
  const feedbacks = StorageService.getFeedback();
  const tests = StorageService.getTests();

  // Test Creation State
  const [newTest, setNewTest] = useState<Partial<Test>>({
    subject: 'matematika',
    grade: 1,
    topic: '',
    questions: []
  });
  const [currentQ, setCurrentQ] = useState<Partial<Question>>({
    text: '',
    options: ['', '', '', ''],
    correctAnswer: 0
  });

  const handleAddQuestion = () => {
    if (!currentQ.text || currentQ.options?.some(o => !o)) return;
    const q: Question = {
      id: Date.now().toString(),
      text: currentQ.text!,
      imageUrl: currentQ.imageUrl,
      options: currentQ.options as string[],
      correctAnswer: currentQ.correctAnswer || 0
    };
    setNewTest(prev => ({ ...prev, questions: [...(prev.questions || []), q] }));
    setCurrentQ({ text: '', options: ['', '', '', ''], correctAnswer: 0 });
  };

  const handleSaveTest = () => {
    if (!newTest.topic || !newTest.questions?.length) return;
    StorageService.saveTest({
      ...newTest,
      id: Date.now().toString(),
    } as Test);
    setNewTest({ subject: 'matematika', grade: 1, topic: '', questions: [] });
    alert("Test muvaffaqiyatli saqlandi!");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black text-slate-800">Boshqaruv Paneli</h1>
      </div>

      <div className="flex gap-4 border-b border-slate-200">
        {[
          { id: 'users', label: 'Foydalanuvchilar', icon: <Users size={18} /> },
          { id: 'tests', label: 'Test Yaratish', icon: <FilePlus size={18} /> },
          { id: 'feedback', label: 'Takliflar', icon: <MessageSquare size={18} /> },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-4 font-bold transition-all border-b-2 ${
              activeTab === tab.id
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 min-h-[500px]">
        {activeTab === 'users' && (
          <div className="p-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-slate-500 text-sm uppercase tracking-wider border-b border-slate-100">
                  <th className="px-4 py-4 font-black">Ism Familiya</th>
                  <th className="px-4 py-4 font-black">Telefon</th>
                  <th className="px-4 py-4 font-black">Maxfiy Kod</th>
                  <th className="px-4 py-4 font-black">Rol</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {users.map(u => (
                  <tr key={u.id} className="hover:bg-slate-50 transition">
                    <td className="px-4 py-4 font-bold text-slate-700">{u.firstName} {u.lastName}</td>
                    <td className="px-4 py-4 text-slate-600">{u.phone}</td>
                    <td className="px-4 py-4"><span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-md font-mono font-bold text-sm">{u.secretCode}</span></td>
                    <td className="px-4 py-4 text-sm"><span className={`px-3 py-1 rounded-full font-bold ${u.role === 'admin' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'}`}>{u.role}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'feedback' && (
          <div className="p-6 space-y-4">
            {feedbacks.length > 0 ? (
              feedbacks.map(f => (
                <div key={f.id} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-800">{f.userName}</h4>
                    <span className="text-xs text-slate-400">{new Date(f.timestamp).toLocaleString()}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{f.content}</p>
                </div>
              ))
            ) : (
              <p className="text-center py-20 text-slate-400 font-medium">Hozircha xabarlar yo'q.</p>
            )}
          </div>
        )}

        {activeTab === 'tests' && (
          <div className="p-8 space-y-10">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-700">Fan</label>
                <select 
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500"
                  value={newTest.subject}
                  onChange={(e) => setNewTest({...newTest, subject: e.target.value as any})}
                >
                  <option value="matematika">Matematika</option>
                  <option value="ingliz_tili">Ingliz tili</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-700">Sinf</label>
                <select 
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500"
                  value={newTest.grade}
                  onChange={(e) => setNewTest({...newTest, grade: parseInt(e.target.value)})}
                >
                  {[1, 2, 3, 4].map(g => <option key={g} value={g}>{g}-sinf</option>)}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-700">Mavzu nomi</label>
                <input 
                  type="text"
                  placeholder="Mavzuni kiriting..."
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500"
                  value={newTest.topic}
                  onChange={(e) => setNewTest({...newTest, topic: e.target.value})}
                />
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-6">
              <h3 className="font-black text-slate-800 flex items-center gap-2">
                <Plus size={20} className="text-indigo-600" /> Yangi savol qo'shish
              </h3>
              
              <div className="space-y-4">
                <textarea 
                  placeholder="Savol matni..."
                  className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 resize-none"
                  value={currentQ.text}
                  onChange={(e) => setCurrentQ({...currentQ, text: e.target.value})}
                />
                
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="Rasm manzili (ixtiyoriy)..."
                    className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl"
                    value={currentQ.imageUrl || ''}
                    onChange={(e) => setCurrentQ({...currentQ, imageUrl: e.target.value})}
                  />
                  <ImageIcon size={18} className="absolute left-3 top-2.5 text-slate-400" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {currentQ.options?.map((opt, i) => (
                    <div key={i} className="flex gap-2">
                      <div className="w-10 h-10 shrink-0 bg-white border border-slate-200 rounded-lg flex items-center justify-center font-bold text-slate-400">
                        {String.fromCharCode(65 + i)}
                      </div>
                      <input 
                        type="text"
                        placeholder={`Variant ${i+1}`}
                        className="flex-1 px-4 py-2 border border-slate-200 rounded-xl"
                        value={opt}
                        onChange={(e) => {
                          const updated = [...(currentQ.options || [])];
                          updated[i] = e.target.value;
                          setCurrentQ({...currentQ, options: updated});
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-slate-700">To'g'ri javob:</span>
                  <div className="flex gap-2">
                    {[0, 1, 2, 3].map(i => (
                      <button
                        key={i}
                        onClick={() => setCurrentQ({...currentQ, correctAnswer: i})}
                        className={`w-10 h-10 rounded-lg font-bold border-2 transition ${
                          currentQ.correctAnswer === i ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-200 text-slate-400'
                        }`}
                      >
                        {String.fromCharCode(65 + i)}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleAddQuestion}
                  className="px-6 py-2 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-900 transition"
                >
                  Savolni ro'yxatga qo'shish
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-black text-slate-800">Qo'shilgan savollar ({newTest.questions?.length})</h3>
              <div className="space-y-3">
                {newTest.questions?.map((q, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded flex items-center justify-center text-xs font-bold">{i+1}</span>
                      <p className="font-medium text-slate-700 truncate max-w-md">{q.text}</p>
                    </div>
                    <button 
                      onClick={() => setNewTest({...newTest, questions: newTest.questions?.filter((_, idx) => idx !== i)})}
                      className="text-red-400 hover:text-red-600 transition p-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleSaveTest}
              disabled={!newTest.topic || !newTest.questions?.length}
              className="w-full py-4 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Save size={20} /> Testni to'liq saqlash
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
