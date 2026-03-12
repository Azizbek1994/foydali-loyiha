
import React, { useState } from 'react';
import { User } from '../../types';
import { StorageService } from '../../services/storage';
import { UserPlus, User as UserIcon, Phone, CheckCircle2 } from 'lucide-react';

interface RegisterProps {
  onRegistered: () => void;
  onToggleLogin: () => void;
}

export const Register: React.FC<RegisterProps> = ({ onRegistered, onToggleLogin }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [secretCode, setSecretCode] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const newUser: User = {
      id: Date.now().toString(),
      firstName,
      lastName,
      phone,
      secretCode: code,
      role: 'student'
    };

    StorageService.addUser(newUser);
    setSecretCode(code);
  };

  if (secretCode) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100 text-center">
          <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Muvaffaqiyatli ro'yxatdan o'tdingiz!</h2>
          <p className="text-slate-500 mb-6">Sizning maxfiy kirish kodingiz:</p>
          <div className="bg-slate-100 py-4 rounded-xl text-4xl font-mono font-bold text-indigo-600 tracking-widest mb-8">
            {secretCode}
          </div>
          <p className="text-sm text-red-500 font-medium mb-8">
            Diqqat! Ushbu kodni eslab qoling yoki saqlab oling.
          </p>
          <button
            onClick={onRegistered}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition"
          >
            Tushunarli, Kirish qismiga o'tish
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        <h1 className="text-3xl font-bold text-slate-800 text-center mb-2">Ro'yxatdan o'tish</h1>
        <p className="text-slate-500 text-center mb-8">Platformaga a'zo bo'lish uchun to'ldiring</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <UserIcon size={16} /> Ism
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Ismingizni kiriting"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <UserIcon size={16} /> Familiya
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Familiyangizni kiriting"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

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

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition flex items-center justify-center gap-2"
          >
            <UserPlus size={20} /> Ro'yxatdan o'tish
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-500">
            Hisobingiz bormi?{' '}
            <button
              onClick={onToggleLogin}
              className="text-indigo-600 font-bold hover:underline"
            >
              Tizimga kirish
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
