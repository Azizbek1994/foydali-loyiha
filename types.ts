export interface User {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  secretCode: string;
  role: 'student' | 'admin';
  sessionId?: string | null; // Sessiya nazorati uchun qo'shilgan qator
}

export interface Question {
  id: string;
  text: string;
  imageUrl?: string;
  options: string[];
  correctAnswer: number;
}

export interface Test {
  id: string;
  subject: 'matematika' | 'ingliz_tili';
  grade: number;
  topic: string;
  questions: Question[];
}

export interface TestResult {
  userId: string;
  testId: string;
  score: number;
  totalQuestions: number;
  timestamp: number;
}

export interface Feedback {
  id: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: number;
}

export interface Teacher {
  name: string;
  subject: string;
  telegram: string;
  phone: string;
  imageUrl: string;
}
