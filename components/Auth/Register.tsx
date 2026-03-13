import React, { useState } from 'react';
import { User } from '../../types';
import { StorageService } from '../../services/storage';
import { UserPlus, User as UserIcon, Phone, CheckCircle2, Lock, Eye, EyeOff } from 'lucide-react';

interface RegisterProps {
  onRegistered: () => void;
  onToggleLogin: () => void;
}

export const Register: React.FC<RegisterProps> = ({ onRegistered, onToggleLogin }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Parol uzunligini tekshirish
    if (password.length < 6) {
      setError("Parol kamida 6 ta belgidan iborat bo'lishi kerak.");
      return;
    }

    // Parollar mosligini tekshirish
    if (password !== confirmPassword) {
      setError("Parollar bir-biriga mos kelmadi.");
      return;
    }

    // Telefon raqami bandligini tekshirish
    const users = StorageService.getUsers();
    if (users.find(u => u.phone === phone)) {
      setError("Ushbu telefon raqami allaqachon ro'yxatdan o'tgan.");
      return;
    }

    const newUser: User = {
      id: Date.now().toString(),
      firstName,
      lastName,
      phone,
      secretCode: password, // Endi foydalanuvchi o'zi kiritgan parol
      role: 'student',
      sessionId: null // Sessiya nazorati uchun
    };

    StorageService.addUser(newUser);
    setIsRegistered(true);
  };

  if (isRegistered) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100 text-center">
          <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Muvaffaqiyatli ro'yxatdan o'tdingiz!</h2>
          <p className="text-slate-500 mb-8">Endi o'zingiz o'rnatgan parol orqali tizimga kirishingiz mumkin.</p>
          <button
            onClick={onRegistered}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition"
          >
            Tizimga kirish
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <UserIcon size={16} /> Ism
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="Ism"
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
                placeholder="Familiya"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
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

          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Lock size={16} /> Parol o'rnatish
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="Kamida 6 ta belgi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Lock size={16} /> Parolni tasdiqlang
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Parolni qayta kiriting"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition flex items-center justify-center gap-2 mt-4"
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