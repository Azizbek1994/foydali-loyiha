
import React, { useState, useEffect } from 'react';
import { User, Test, TestResult } from './types';
import { StorageService } from './services/storage';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';
import { Dashboard } from './components/Dashboard/Dashboard';
import { AdminPanel } from './components/Admin/AdminPanel';
import { TestEnvironment } from './components/Test/TestEnvironment';
import { LogOut, LayoutDashboard, User as UserIcon } from 'lucide-react';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [view, setView] = useState<'login' | 'register' | 'dashboard' | 'admin' | 'test'>('login');
  const [activeTest, setActiveTest] = useState<Test | null>(null);

  useEffect(() => {
    const session = localStorage.getItem('current_user_session');
    if (session) {
      const user = JSON.parse(session);
      setCurrentUser(user);
      setView(user.role === 'admin' ? 'admin' : 'dashboard');
    }
  }, []);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('current_user_session', JSON.stringify(user));
    setView(user.role === 'admin' ? 'admin' : 'dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('current_user_session');
    setView('login');
  };

  const startTest = (test: Test) => {
    setActiveTest(test);
    setView('test');
  };

  const finishTest = (result: TestResult) => {
    StorageService.saveResult(result);
    setActiveTest(null);
    setView('dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      {currentUser && (
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-xl text-indigo-600">
              <LayoutDashboard size={24} />
              <span>EduLearn Pro</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-slate-600">
                <UserIcon size={18} />
                <span>{currentUser.firstName} {currentUser.lastName}</span>
              </div>
              {currentUser.role === 'admin' && view !== 'admin' && (
                <button 
                  onClick={() => setView('admin')}
                  className="px-4 py-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition text-sm font-medium"
                >
                  Admin Paneli
                </button>
              )}
              {view === 'admin' && (
                <button 
                  onClick={() => setView('dashboard')}
                  className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition text-sm font-medium"
                >
                  Foydalanuvchi Ko'rinishi
                </button>
              )}
              <button 
                onClick={handleLogout}
                className="p-2 text-slate-400 hover:text-red-500 transition"
                title="Chiqish"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </header>
      )}

      <main className="flex-1 w-full max-w-7xl mx-auto p-4">
        {view === 'login' && (
          <Login onLogin={handleLogin} onToggleRegister={() => setView('register')} />
        )}
        {view === 'register' && (
          <Register 
            onRegistered={() => setView('login')} 
            onToggleLogin={() => setView('login')} 
          />
        )}
        {view === 'dashboard' && currentUser && (
          <Dashboard currentUser={currentUser} onStartTest={startTest} />
        )}
        {view === 'admin' && currentUser?.role === 'admin' && (
          <AdminPanel />
        )}
        {view === 'test' && currentUser && activeTest && (
          <TestEnvironment 
            test={activeTest} 
            userId={currentUser.id} 
            onFinish={finishTest} 
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-10">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} EduLearn Pro. Barcha huquqlar himoyalangan.
        </div>
      </footer>
    </div>
  );
};

export default App;
