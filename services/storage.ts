import { User, TestResult, Test, Feedback, Teacher } from '../types';
import { INITIAL_TESTS } from '..';

const KEYS = {
  USERS: 'edulearn_users',
  RESULTS: 'edulearn_results',
  TESTS: 'edulearn_tests',
  FEEDBACK: 'edulearn_feedback',
  TEACHERS: 'edulearn_teachers' // Yangi kalit so'z
};

export const StorageService = {
  getUsers: (): User[] => {
    const data = localStorage.getItem(KEYS.USERS);
    const users = data ? JSON.parse(data) : [];
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

  updateUser: (updatedUser: User) => {
    const users = StorageService.getUsers();
    const updatedUsers = users.map(u => u.id === updatedUser.id ? updatedUser : u);
    localStorage.setItem(KEYS.USERS, JSON.stringify(updatedUsers));
  },

  // O'qituvchilar bilan ishlash (Yangi qo'shilgan qismlar)
  getTeachers: (): Teacher[] => {
    const data = localStorage.getItem(KEYS.TEACHERS);
    return data ? JSON.parse(data) : [];
  },

  saveTeacher: (teacher: Teacher) => {
    const teachers = StorageService.getTeachers();
    const existingIndex = teachers.findIndex(t => t.phone === teacher.phone);
    if (existingIndex > -1) {
      const updated = [...teachers];
      updated[existingIndex] = teacher;
      localStorage.setItem(KEYS.TEACHERS, JSON.stringify(updated));
    } else {
      localStorage.setItem(KEYS.TEACHERS, JSON.stringify([...teachers, teacher]));
    }
  },

  deleteTeacher: (phone: string) => {
    const teachers = StorageService.getTeachers();
    const updated = teachers.filter(t => t.phone !== phone);
    localStorage.setItem(KEYS.TEACHERS, JSON.stringify(updated));
  },

  getTests: (): Test[] => {
    const data = localStorage.getItem(KEYS.TESTS);
    return data ? JSON.parse(data) : INITIAL_TESTS;
  },

  saveTest: (test: Test) => {
    const tests = StorageService.getTests();
    const existingIndex = tests.findIndex(t => t.id === test.id);
    if (existingIndex > -1) {
      const updated = [...tests];
      updated[existingIndex] = test;
      localStorage.setItem(KEYS.TESTS, JSON.stringify(updated));
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
