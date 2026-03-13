import { User, TestResult, Test, Feedback } from '../types';
import { INITIAL_TESTS } from '..';

const KEYS = {
  USERS: 'edulearn_users',
  RESULTS: 'edulearn_results',
  TESTS: 'edulearn_tests',
  FEEDBACK: 'edulearn_feedback'
};

export const StorageService = {
  getUsers: (): User[] => {
    const data = localStorage.getItem(KEYS.USERS);
    const users = data ? JSON.parse(data) : [];
    // Ensure admin exists
    if (!users.find((u: User) => u.phone === 'admin')) {
      const admin: User = {
        id: 'admin',
        firstName: 'Tizim',
        lastName: 'Admini',
        phone: 'admin',
        secretCode: '123456',
        role: 'admin'
      };
      const updated = [...users, admin];
      localStorage.setItem(KEYS.USERS, JSON.stringify(updated));
      return updated;
    }
    return users;
  },

  addUser: (user: User) => {
    const users = StorageService.getUsers();
    localStorage.setItem(KEYS.USERS, JSON.stringify([...users, user]));
  },

  // Yangi qo'shilgan funksiya: Foydalanuvchi ma'lumotlarini (masalan, sessionId) yangilash uchun
  updateUser: (updatedUser: User) => {
    const users = StorageService.getUsers();
    const updatedUsers = users.map(u => u.id === updatedUser.id ? updatedUser : u);
    localStorage.setItem(KEYS.USERS, JSON.stringify(updatedUsers));
  },

  getTests: (): Test[] => {
    const data = localStorage.getItem(KEYS.TESTS);
    return data ? JSON.parse(data) : INITIAL_TESTS;
  },

  saveTest: (test: Test) => {
    const tests = StorageService.getTests();
    const existingIndex = tests.findIndex(t => t.id === test.id);
    if (existingIndex > -1) {
      tests[existingIndex] = test;
      localStorage.setItem(KEYS.TESTS, JSON.stringify(tests));
    } else {
      localStorage.setItem(KEYS.TESTS, JSON.stringify([...tests, test]));
    }
  },

  getResults: (): TestResult[] => {
    const data = localStorage.getItem(KEYS.RESULTS);
    return data ? JSON.parse(data) : [];
  },

  saveResult: (result: TestResult) => {
    const results = StorageService.getResults();
    localStorage.setItem(KEYS.RESULTS, JSON.stringify([...results, result]));
  },

  getFeedback: (): Feedback[] => {
    const data = localStorage.getItem(KEYS.FEEDBACK);
    return data ? JSON.parse(data) : [];
  },

  saveFeedback: (feedback: Feedback) => {
    const items = StorageService.getFeedback();
    localStorage.setItem(KEYS.FEEDBACK, JSON.stringify([...items, feedback]));
  }
};
