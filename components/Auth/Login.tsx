
import React, { useState } from 'react';
import { User } from '../../types';
import { StorageService } from '../../services/storage';
import { KeyRound, Phone, LogIn } from 'lucide-react';

interface LoginProps {
  onLogin: (user: User) => void;
  onToggleRegister: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin, onToggleRegister }) => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const users = StorageService.getUsers();
    const user = users.find(u => u.phone === phone && u.secretCode === code);

    if (user) {
      onLogin(user);
    } else {
      setError("Telefon raqam yoki maxfiy kod noto'g'ri.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        <h1 className="text-3xl font-bold text-slate-800 text-center mb-2">Xush kelibsiz</h1>
        <p className="text-slate-500 text-center mb-8">Tizimga kirish uchun ma'lumotlarni kiriting</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Phone size={16} /> Telefon raqam
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="+998 90 123 45 67"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <KeyRound size={16} /> Maxfiy kod
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="******"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition transform hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <LogIn size={20} /> Kirish
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-500">
            Hisobingiz yo'qmi?{' '}
            <button
              onClick={onToggleRegister}
              className="text-indigo-600 font-bold hover:underline"
            >
              Ro'yxatdan o'tish
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
