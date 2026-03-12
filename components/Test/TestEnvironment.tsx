
import React, { useState, useEffect, useCallback } from 'react';
import { Test, TestResult } from '../../types';
import { StorageService } from '../../services/storage';
import { Clock, CheckCircle, AlertTriangle, ArrowRight, Trophy } from 'lucide-react';

interface TestEnvironmentProps {
  test: Test;
  userId: string;
  onFinish: (result: TestResult) => void;
}

export const TestEnvironment: React.FC<TestEnvironmentProps> = ({ test, userId, onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(new Array(test.questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(test.questions.length * 2 * 60); // 2 minutes per question
  const [isFinished, setIsFinished] = useState(false);
  const [finalResult, setFinalResult] = useState<TestResult | null>(null);

  const calculateResults = useCallback(() => {
    let score = 0;
    userAnswers.forEach((ans, index) => {
      if (ans === test.questions[index].correctAnswer) {
        score++;
      }
    });

    const result: TestResult = {
      userId,
      testId: test.id,
      score,
      totalQuestions: test.questions.length,
      timestamp: Date.now()
    };
    
    setFinalResult(result);
    setIsFinished(true);
  }, [test, userAnswers, userId]);

  useEffect(() => {
    if (timeLeft <= 0) {
      calculateResults();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, calculateResults]);

  const handleAnswerSelect = (optionIndex: number) => {
    const updated = [...userAnswers];
    updated[currentQuestionIndex] = optionIndex;
    setUserAnswers(updated);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const currentQuestion = test.questions[currentQuestionIndex];

  if (isFinished && finalResult) {
    const allResults = StorageService.getResults().filter(r => r.testId === test.id);
    const betterThan = allResults.filter(r => r.score < finalResult.score).length;
    const rankPercentage = allResults.length > 0 ? Math.round((betterThan / allResults.length) * 100) : 100;

    return (
      <div className="max-w-3xl mx-auto py-10 space-y-8 animate-fadeIn">
        <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-100 text-center space-y-6">
          <div className="w-24 h-24 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-yellow-50">
            <Trophy size={48} />
          </div>
          <h2 className="text-4xl font-black text-slate-800">Test Yakunlandi!</h2>
          
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <span className="block text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">To'g'ri javoblar</span>
              <span className="text-4xl font-black text-indigo-600">{finalResult.score} / {finalResult.totalQuestions}</span>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <span className="block text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Reyting</span>
              <span className="text-4xl font-black text-emerald-600">{rankPercentage}%</span>
            </div>
          </div>

          <p className="text-slate-500">
            Siz ushbu testni yechgan foydalanuvchilarning {rankPercentage}% idan yaxshiroq natija ko'rsatdingiz.
          </p>

          <button
            onClick={() => onFinish(finalResult)}
            className="w-full py-4 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 transition shadow-xl"
          >
            Dashboardga qaytish
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-6 space-y-6">
      {/* Header Info */}
      <div className="flex items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-slate-800">{test.topic}</h2>
          <p className="text-slate-500 text-sm">{currentQuestionIndex + 1} / {test.questions.length} savol</p>
        </div>
        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold text-xl ${
          timeLeft < 60 ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-slate-50 text-slate-700'
        }`}>
          <Clock size={20} />
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-indigo-500 transition-all duration-500" 
          style={{ width: `${((currentQuestionIndex + 1) / test.questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
        <div className="p-8 md:p-12 space-y-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 leading-tight">
              {currentQuestion.text}
            </h3>
            {currentQuestion.imageUrl && (
              <div className="w-full max-h-80 overflow-hidden rounded-2xl border border-slate-100">
                <img src={currentQuestion.imageUrl} alt="Savol rasmi" className="w-full h-full object-contain bg-slate-50" />
              </div>
            )}
          </div>

          <div className="grid gap-4">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswerSelect(idx)}
                className={`p-6 text-left rounded-2xl font-bold border-2 transition transform active:scale-[0.98] ${
                  userAnswers[currentQuestionIndex] === idx
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                    : 'bg-white border-slate-100 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${
                    userAnswers[currentQuestionIndex] === idx ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </div>
                  {option}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <button
            disabled={currentQuestionIndex === 0}
            onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
            className="px-6 py-2 font-bold text-slate-500 hover:text-indigo-600 disabled:opacity-30 transition"
          >
            Oldingisi
          </button>
          
          {currentQuestionIndex === test.questions.length - 1 ? (
            <button
              onClick={calculateResults}
              className="px-8 py-3 bg-indigo-600 text-white font-black rounded-xl hover:bg-indigo-700 transition flex items-center gap-2 shadow-lg shadow-indigo-100"
            >
              Tamomlash <CheckCircle size={20} />
            </button>
          ) : (
            <button
              onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
              className="px-8 py-3 bg-slate-800 text-white font-black rounded-xl hover:bg-slate-900 transition flex items-center gap-2"
            >
              Keyingisi <ArrowRight size={20} />
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 bg-yellow-50 border border-yellow-100 rounded-2xl text-yellow-800 text-sm">
        <AlertTriangle size={18} className="shrink-0" />
        <p>Vaqt tugaganda test avtomatik tarzda yakunlanadi. Barcha savollarga javob berishga harakat qiling!</p>
      </div>
    </div>
  );
};
