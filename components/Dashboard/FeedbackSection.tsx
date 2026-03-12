
import React, { useState } from 'react';
import { User, Feedback } from '../../types';
import { StorageService } from '../../services/storage';
import { MessageSquare, Send, ThumbsUp } from 'lucide-react';

interface FeedbackSectionProps {
  user: User;
}

export const FeedbackSection: React.FC<FeedbackSectionProps> = ({ user }) => {
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    const newFeedback: Feedback = {
      id: Date.now().toString(),
      userId: user.id,
      userName: `${user.firstName} ${user.lastName}`,
      content,
      timestamp: Date.now()
    };

    StorageService.saveFeedback(newFeedback);
    setSubmitted(true);
    setContent('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-10 py-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-black text-slate-800">Taklif va Shikoyatlar</h2>
        <p className="text-slate-500">
          Bizning tizimimizni yaxshilashda sizning fikringiz muhim. 
          Har qanday taklif yoki shikoyatingizni bu yerda qoldirishingiz mumkin.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <textarea
            required
            rows={6}
            className="w-full p-6 bg-slate-50 border border-slate-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none text-slate-700"
            placeholder="Fikringizni yozing..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="absolute bottom-6 right-6 flex items-center gap-2 text-slate-400 text-xs font-medium">
            <MessageSquare size={14} />
            <span>Xabaringiz xavfsiz</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition flex items-center justify-center gap-2 shadow-lg shadow-indigo-100"
        >
          <Send size={20} /> Xabarni yuborish
        </button>
      </form>

      {submitted && (
        <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-emerald-700 font-bold animate-bounce">
          <ThumbsUp size={20} />
          <span>Fikringiz uchun rahmat! Administratorlarimiz buni albatta ko'rib chiqadi.</span>
        </div>
      )}
    </div>
  );
};
