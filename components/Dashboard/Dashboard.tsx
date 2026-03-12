
import React, { useState } from 'react';
import { User, Test } from '../../types';
import { SubjectsView } from './SubjectsView';
import { CourseInfo } from './CourseInfo';
import { FeedbackSection } from './FeedbackSection';
import { BookOpen, MapPin, Globe, MessageSquare } from 'lucide-react';

interface DashboardProps {
  currentUser: User;
  onStartTest: (test: Test) => void;
}

type TabType = 'fanlar' | 'offline' | 'online' | 'feedback';

export const Dashboard: React.FC<DashboardProps> = ({ currentUser, onStartTest }) => {
  const [activeTab, setActiveTab] = useState<TabType>('fanlar');

  const tabs = [
    { id: 'fanlar', label: 'Fanlar', icon: <BookOpen size={20} /> },
    { id: 'offline', label: 'Oflayn Kurslar', icon: <MapPin size={20} /> },
    { id: 'online', label: 'Onlayn Kurslar', icon: <Globe size={20} /> },
    { id: 'feedback', label: 'Taklif va Shikoyatlar', icon: <MessageSquare size={20} /> },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Tab Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`flex items-center justify-center gap-2 p-4 rounded-xl font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 transform scale-105'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-10">
        {activeTab === 'fanlar' && <SubjectsView onStartTest={onStartTest} />}
        {activeTab === 'offline' && <CourseInfo type="oflayn" />}
        {activeTab === 'online' && <CourseInfo type="onlayn" />}
        {activeTab === 'feedback' && <FeedbackSection user={currentUser} />}
      </div>
    </div>
  );
};
