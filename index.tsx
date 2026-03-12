
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Test } from './types';
import './style.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export const INITIAL_TESTS: Test[] = [
  {
    id: "m1-1",
    subject: "matematika",
    grade: 1,
    topic: "Mok test-1",
    questions: [
      {
        id: "m1-1",
        text: "Madina 15 ta qo’g’irchoq yasadi. Lobar undan 4 ta kam qo’g’irchoq yasadi. Lobar nechta qo’g’irchoq yasagan?",
        options: ["11", "12", "13", "14", "15"],
        correctAnswer: 0
      },
      {
        id: "m1-1",
        text: "Salima o’z oldiga 3 kun davomida misollar ishlashni maqsad qilib oldi. U birinchi kuni 20 ta, ikkinchi kuni birinchisidan 5 ta ko’p va uchinchi kun ikkinchi kundan 10 ta ko’p misol ishlagan bo’lsa, U 3 kun davomida jami nechta misol ishlagan?",
        options: ["70", "75", "80", "85", "90"],
        correctAnswer: 2
      },
      { id: "m1-1", 
        text: "Quyidagilardan foydalanib ? ning qiymatini toping?", 
        imageUrl: "/1-sinf_images/MOK-TEST-1.png", 
        options: ["11", "12", "13", "14", "15"], 
        correctAnswer: 1 },
      { id: "m1-1", 
        text: "Bilamizki, Amerikada bolalarni maktablarga sariq rangdagi avtobuslar olib boradi. 1 ta maktab avtobusiga 15 ta bola maktabga bora olsa, 3 ta xuddi shunday avtobusga nechta bola maktabga bora oladi?", 
        imageUrl: "/1-sinf_images/MOK-TEST-2.png", 
        options: ["35", "40", "45", "50", "55"], 
        correctAnswer: 3 },
      { id: "m1-1", 
        text: "Sehrli mamlakatda yashovchi aka-ukalar bo'ylari rasmda ko'rsatilgan. Ularning bo’ylari orasidagi farqni toping?", imageUrl: "/1-sinf_images/MOK-TEST-3.png", 
        options: ["20 cm", "30 cm", "40 cm", "50 cm", "60 cm"], 
        correctAnswer: 3 },
      { id: "m1-1", 
        text: "Anvar uyidan maktabga boradigan yo’lning yarmini bosib o'tish uchun 13 daqiqa vaqt sarfladi. Maktabgacha bo'lgan butun masofani bosib o'tishi uchun u qancha vaqt sarflaydi?", 
        options: ["22", "24", "26", "28", "30"], 
        correctAnswer: 2 },
      { id: "m1-1", 
        text: "Soatsoz bugun 9 ta qimmat va undan 2 ta ortiq arzon turdagi soatlarni ta’mirladi. U jami nechta soat ta’mirlagan?", options: ["20", "21", "22", "23", "24"], 
        correctAnswer: 0 },
      { id: "m1-1", 
        text: "Garajda 13 ta mashina bor edi. Ertalab 7 tasi ishlagani chiqib ketdi. Tushlik vaqti yana 2 tasi chiqib ketdi. Hozir garajda nechta mashina qoldi.", 
        options: ["1", "2", "3", "4", "5"], 
        correctAnswer: 3 },
      { id: "m1-1", 
        text: "Rasmdagi ma'lumotlar asosida sharbat narxini toping.", 
        imageUrl: "/1-sinf_images/MOK-TEST-4.png", 
        options: ["1", "2", "3", "4", "5"], 
        correctAnswer: 1 },
      { id: "m1-1", 
        text: "Sobir 7 ta mashina rasmini chizdi. Ukasi undan 3 ta kam mashina rasmini chizdi. Ular jami nechta mashina rasmini chizgan?", 
        options: ["7", "8", "9", "10", "11"], 
        correctAnswer: 4 },
      { id: "m1-1", 
        text: "Og’irlik o’lchov birligini toping.", 
        options: ["kg", "l", "sm", "mm", "dm"], 
        correctAnswer: 0 },
      { id: "m1-1", 
        text: "Avtoturargohda 23 ta Nexia va 9 ta Spark avtomobillari turibdi. Avtoturargohdagi Nexialar Sparklardan nechta ortiq?", options: ["11", "12", "14", "15", "16"], 
        correctAnswer: 2 },
      { id: "m1-1", 
        text: "Ketma-ketlikning keyingi hadini toping. <b>2, 3, 5, 8, ? </b>", 
        options: ["11", "12", "13", "14", "15"], 
        correctAnswer: 1 },
      { id: "m1-1", 
        text: "Rasmdagi uchburchak ichidagi raqamlar yig'indisini toping.", 
        imageUrl: "/1-sinf_images/MOK-TEST-5.png", 
        options: ["19", "20", "21", "22", "23"], 
        correctAnswer: 0 },
      { id: "m1-1", 
        text: "Sinfda 20 ta o’quvchi o’qiydi. Ushbu o’quvchilarning 14 tasida 1 tadan, 4 tasida 2 tadan, 1 tasida 3 ta va yana 1 tasida 5 ta ruchka bor. Ushbu sinfda jami nechta ruchka bor?", 
        options: ["21", "24", "27", "30", "33"], 
        correctAnswer: 3 },
      { id: "m1-1", 
        text: "? ning qiymatini aniqlang?", 
        imageUrl: "/1-sinf_images/MOK-TEST-6.png", 
        options: ["36", "42", "48", "54", "60"], 
        correctAnswer: 1 },
      { id: "m1-1", 
        text: "Javobi 12 ga teng bo’lgan misolni belgilang.", 
        options: ["5+5", "6+7", "10+2", "7+8", "5+4"], 
        correctAnswer: 2 },
      { id: "m1-1", 
        text: "Bir savatda 16 kg,ikkinchisida undan 5 kg ortiq olma bor. Ikkinchi savatda qancha olma bor?", 
        options: ["18 kg", "19 kg", "20 kg", "21 kg", "22 kg"], 
        correctAnswer: 3 },
      { id: "m1-1", 
        text: "Qaysi son tushurib qoldirilgan? <b>11, 12, ... , 14, 15</b>", 
        options: ["16", "12", "14", "13", "16"], 
        correctAnswer: 3 },
      { id: "m1-1", 
        text: "Idishda 22 litr sut bor edi. Tushlikka 7 litr, kechqurun 11 litr sut ishlatildi. Idishda qancha sut qoldi?", 
        options: ["1", "2", "3", "4", "5"], 
        correctAnswer: 3 },
      { id: "m1-1", 
        text: "Qaysi hayvonning inglizcha nomida “o” harfi ishtirok etmaydi?", 
        imageUrl: "/1-sinf_images/MOK-TEST-7.png", 
        options: ["A", "B", "C", "D", "E"], 
        correctAnswer: 1 },
      { id: "m1-1", 
        text: "Quyidagilardan qaysi biri ingliz tilidagi “Happy” kayfiyat turini bildiradi?", 
        imageUrl: "/1-sinf_images/MOK-TEST-8.png", 
        options: ["A", "B", "C", "D", "E"], 
        correctAnswer: 0 },
      { id: "m1-1", 
        text: "Ingliz tiliga tarjima qiling: “Ismingiz nima?”.", 
        options: ["How are you?", "Where are you from?", "What is your name?", "I am 12 years old", "Bilmayman"], 
        correctAnswer: 2 },
      { id: "m1-1", 
        text: "“Men sanay olaman” ingliz tilida qanday yoziladi?", 
        options: ["I can count", "You can count", "We can count", "He can caunt", "Bilmayman"], 
        correctAnswer: 0 },
      { id: "m1-1", 
        text: "Nechta hafta kunining inglizcha nomi S harfi bilan boshlanadi?", 
        options: ["1", "2", "3", "4", "5"], 
        correctAnswer: 2 },
      { id: "m1-1", 
        text: "Choose the color?",
        options: ["Apple", "Cat", "Black", "Pencil", "Hair"], 
        correctAnswer: 2 },
      { id: "m1-1", 
        text: "Quyidagi raqamlarning nechtasining inglizcha nomlanishida e harfi ishtirok etadi?", 
        imageUrl: "/1-sinf_images/MOK-TEST-9.png", 
        options: ["1", "2", "3", "4", "5"], 
        correctAnswer: 2 },
      { id: "m1-1", 
        text: "Choose a job?", 
        options: ["Monday", "Chair", "Teacher", "Pencil", "Dog"], 
        correctAnswer: 2 },
      { id: "m1-1", 
        text: "Savolga javob bering: “How old are you?”.", 
        options: ["I am fine", "I am from Tashkent", "My name is Sardor", "I am 9 years old", "Bilmayman"], 
        correctAnswer: 3 },
      { id: "m1-1", 
        text: "Qaysi harf tushirib qoldirilgan?", 
        imageUrl: "/1-sinf_images/MOK-TEST-10.png", 
        options: ["A", "M", "D", "K", "P"], 
        correctAnswer: 3 }
    ] 
  },
  { id: "m2-2",
    subject: "matematika",
    grade: 1,
    topic: "Mok test-2",
    questions: [
      {
         id: "m2-2", 
         text:"Parkda 15 ta bola o’ynab yuribdi. Agar ulardan 7 tasining boshida shlyapasi bo’lsa, nechta bola shlyapa kiymagan?",
         imageUrl:"/1-sinf_images/Mok test2_1.png", 
         options:["6","7","8","9","10"], 
         correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Quyida berilgan rasmdagi ma’lumotlardan foydalanib daraxtning balandligini toping?",
        imageUrl:"/1-sinf_images/Mok test2_2.png", 
        options:["10 m","15 m","20 m","25 m","30 m"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Shavkat 2 yil oldin 12 yoshda edi. U 3 yildan keyin necha yoshda bo’ladi?",
        imageUrl:"/1-sinf_images/Mok test2_3.png", 
        options:["11","13","15","17","19"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Agar 1ta olmaning vazni 50 gram bo’lsa, 1 ta ananasning og’irligini toping?",
        imageUrl:"/1-sinf_images/Mok test2_4.png", 
        options:["100","130","150","170","190"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"O’rmon oldidagi birinchi ko’lmakda 11 ta va ikkinchi ko’lmakda esa 6 ta qurbaqalar bor edi. Birinchi ko’lmakdan 7 ta qurbaqa ikkinchisiga ko’chib o’tdi. Natijada ikkinchi ko’lmakdagi qurbaqalar soni nechta bo’ldi?",
        imageUrl:"/1-sinf_images/Mok test2_5.png", 
        options:["14","13","12","11","10"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Shokirda Olimga qaraganda 4 marta ko’p qalamlar bor. Agar Olimda 3 ta qalam bo’lsa, Shokirda nechta qalam bor?",imageUrl:"1-sinf_images/Mok test2_6.png", 
        options:["8"," 9","10","11","12"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Sarvarlarning uyida bayram bo’lganligi sababli, Sarvar 5 ta Pepsi, 6 ta Coca-cola va 4 ta Fanta ichimliklarini sotib oldi. U jami nechta ichimlik sotib olgan?",
        imageUrl:"/1-sinf_images/Mok test2_7.png", 
        options:["12","13","14","15","16"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Quyida berilgan rasmdagi to’g’ri chiziqning uzunligini toping?",
        imageUrl:"/1-sinf_images/Mok test2_8.png", 
        options:["5 cm","6 cm","7 cm","8 cm","9 cm"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Asakada joylashgan mashinalar ishlab chiqarish zavodida 1 soatda 5 ta mashina ishlab chiqariladi. Xuddi shunday tezlik bilan ishlaganda 5 soatda nechta mashina ishlab chiqariladi?",
        imageUrl:"/1-sinf_images/Mok test2_9.png", 
        options:["22","23","247","25","26"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Charos bir nechta olma sotib oldi. U 3 ta olmani dugonasiga berdi. Qolgan olmalarni 2 ta sumkaga solib o'yganidan keyin har bir sumkada 6 tadan olma qolgan bo’lsa, Charos nechta olma sotib olgan edi?",
        imageUrl:"/1-sinf_images/Mok test2_10.png", 
        options:["12","13","14","15","16"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"? ning qiymatini toping.",
        imageUrl:"/1-sinf_images/Mok test2_11.png", 
        options:["22","24","45","77","86"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Uchta do’st Sardor, Farrux va Barkamol bugun futbol o’ynadi. Sardor 3 ta gol urdi, Farrux Sardordan ikki marta ko’p gol urdi, Barkamol esa Farruxdan 1 ta kam gol urgan bo’lsa, Barkamol nechta gol urganini toping?",
        imageUrl:"/1-sinf_images/Mok test2_12.png", 
        options:["1","2","3","4","5"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"? ning qiymatini toping?",
        imageUrl:"/1-sinf_images/Mok test2_13.png", 
        options:["13","15","17","19","21"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Kamola shirinliklar do’konidan bir quti shirinlik sotib oldi. Qutidan 14 ta qizil rangdagi va 8 ta yashil rangdagi shirinliklar chiqdi. Qutida jami nechta shirinliklar bo’lgan?",
        imageUrl:"/1-sinf_images/Mok test2_14.png", 
        options:["22","23","24","25","26"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Quyidagilardan nechtasining javobi 7 dan kichik?",
        imageUrl:"/1-sinf_images/Mok test2_15.png", 
        options:["1","2","3","4","5"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Birgalikda Abror va Elbekning yoshi 14 da. Ikki yildan keyin ularning umumiy yoshi nechada bo'ladi?",
        imageUrl:"/1-sinf_images/Mok test2_16.png", 
        options:["15","16","17","18","19"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Quyidagilardan nechtasi noto’g’ri?",
        imageUrl:"/1-sinf_images/Mok test2_17.png", 
        options:["1","2","3","4","5"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Mo’tabar buvi hovlida turib, 1 ta iti, 1 ta mushugi va barcha tovuqlarini chaqiradi. Birozdan so‘ng, uning tomoniga 20 ta oyoq yugurib keladi. Buvi nechta tovuqqa ega?",
        imageUrl:"/1-sinf_images/Mok test2_18.png", 
        options:["5","6","7","8","9"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Quyidagilardan nechtasi to’g’ri?",
        imageUrl:"/1-sinf_images/Mok test2_19.png", 
        options:["1","2","3","4","5"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"A shaharda 23 ta, B sharda esa 51 ta odam bor. B shahardan A shaharga nechta odam borsa, ikkala shaharda odamlar soni teng bo’ladi?",
        imageUrl:"/1-sinf_images/Mok test2_20.png", 
        options:["13","14","15","16","17"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"<b>INGLIZ TILI</b> How many of the following sentences are correctly formed? (Quyidagi gaplardan nechtasi to’g’ri tuzilgan?)",
        imageUrl:"/1-sinf_images/Mok test2_21.png", 
        options:["2","3","4"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Moslashtiring.",
        imageUrl:"/1-sinf_images/Mok test2_22.png", 
        options:["1-e, 2-a, 3-d, 4-c, 5-b","1-e, 2-a, 3-c, 4-b, 5-d","1-e, 2-a, 3-d, 4-b, 5-c"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"How many of the following sentences are correctly formed? (Quyidagi gaplardan nechtasi to’g’ri tuzilgan?)",imageUrl:"1-sinf_images/Mok test2_23.png", 
        options:["2","3","4"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Moslashtiring.",
        imageUrl:"/1-sinf_images/Mok test2_24.png", 
        options:["1-a, 2-e, 3-d, 4-c, 5-b","1-a, 2-e, 3-d, 4-b, 5-c","1-a, 2-e, 3-b, 4-d, 5-c"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Quyidagi gaplardan qaysilari noto’g’ri tuzilgan?",
        imageUrl:"/1-sinf_images/Mok test2_25.png", 
        options:["3, 4, 6","1, 2, 5","3, 5, 6"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Quyidagilardan qaysi biri “under” prepositionini ifodalaydi?",
        imageUrl:"/1-sinf_images/Mok test2_26.png", 
        options:["A","B","C"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Possessiveslarni o’z jufti bilan moslashtiring.",
        imageUrl:"/1-sinf_images/Mok test2_27.png", 
        options:["1-c, 2-a, 3-e, 4-d, 5-b","1-c, 2-a, 3-e, 4-b, 5-d","1-c, 2-b, 3-e, 4-d, 5-a"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Qaysi bayroqning rangi noto’g’ri yozilgan?",
        imageUrl:"/1-sinf_images/Mok test2_28.png", 
        options:["birinchi bayroq","ikkinchi bayroq","uchinchi bayroq","to'rtinchi bayroq","beshinchi bayroq"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Quyidagi gaplardan nechtasi noto’g’ri tuzilgan?",
        imageUrl:"/1-sinf_images/Mok test2_29.png", 
        options:["3","4","5"], 
        correctAnswer:2 },
      {
        id: "m2-2", 
        text:"Qaysi fasl nomi noto’g’ri yozilgan?",
        imageUrl:"/1-sinf_images/Mok test2_30.png", 
        options:["A","B","C","D"], 
        correctAnswer:2 },
      ]
  },
  {
    id: "m3-3",
    subject: "matematika",
    grade: 1,
    topic: "Mok test-3",
    questions: [
      {
        id: "m3-3", 
        text:"To'g'ri javobni toping:",
        imageUrl:"/1-sinf_images/Mok test-3_1.png", 
        options:["2","5","3"], 
        correctAnswer:1 },
      {
        
        id: "m3-3", 
        text:"To'g'ri javobni toping:",
        imageUrl:"/1-sinf_images/Mok test-3_2.png", 
        options:["1","2","3"], 
        correctAnswer:1 },
      {
        id: "m3-3", 
        text:"To'g'ri javobni toping:",
        imageUrl:"/1-sinf_images/Mok test-3_3.png", 
        options:["42","48","44"], 
        correctAnswer:0 },
      {
        id: "m3-3", 
        text:"Qaysi bulutchadagi sonlar 5 dan katta?",
        imageUrl:"/1-sinf_images/Mok test-3_4.png", 
        options:["A","B","C"], 
        correctAnswer:2 },
      {
        id: "m3-3", 
        text:"Ayirish jadvaliga ko'ra ? o'rnidagi sonni toping. ",
        imageUrl:"/1-sinf_images/Mok test-3_5.png", 
        options:["45","56","35","30"], 
        correctAnswer:2 },
      {
        id: "m3-3", 
        text:"Jo'ra boboning bog`ida 30 ta gullari bor. Har kuni bog`da gular  soni 2 tadan ko`paymoqda. Necha kundan so`ng gular soni 42 taga  yetadi?",
        imageUrl:"/1-sinf_images/Mok test-3_6.png", 
        options:["4","5","6","7"], 
        correctAnswer:2 },
      {id: "m3-3", 
        text:"To'g'ri javobni toping:",
        imageUrl:"1-sinf_images/Mok test-3_7.png", 
        options:["13,12","11,12","12,14"], 
        correctAnswer:2 },
      {id: "m3-3", 
        text:"Qonuniyatni aniqlab ? o'rnidagi sooni toping.",
        imageUrl:"/1-sinf_images/Mok test-3_8.png", 
        options:["22","24","26","28","30"], 
        correctAnswer:2 },
      {
        id: "m3-3", 
        text:"Asror har 2 daqiqada 3 bet kitob o'qiydi. U 24 daqiqada necha bet kitob o'qiydi?", 
        options:["12","20","36","60"], 
        correctAnswer:2 },
      {id: "m3-3", 
        text:"1,0,3 raqamlaridan foydalaninb, takrorlamasdan nechta 2 xonali  son tuzish mumkin?", 
        options:["2","3","4","5"], 
        correctAnswer:2 },
      {
        id: "m3-3", 
        text:"Qaysi son uchburchak, kvadrat va aylananing ichida joylashgan?",
        imageUrl:"/1-sinf_images/Mok test-3_9.png", 
        options:["1","4","5","9","12"], 
        correctAnswer:2 },
      {
        id: "m3-3", 
        text:"Bo'sh Qo'shish jadvaliga ko'ra ? o'rnidagi sonni toping:",
        imageUrl:"/1-sinf_images/Mok test-3_10.png", 
        options:["14","16","18"], 
        correctAnswer:2 },
      {
        id: "m3-3", 
        text:"Rasmda ichida qora nuqtalari bor bo'lganto'rtta figura tasvirlangan. Shu figuralarning nechtasida roppa-rosa uchta nuqta bor? ",
        imageUrl:"/1-sinf_images/Mok test-3_11.png", 
        options:["0","1","2","3","4"], 
        correctAnswer:2 },
      {
        id: "m3-3", 
        text:"Bobur bir xil o'lchamdagi kichik uchburchaklaryordamida katta uchburchak yig'moqchi. Buninguchun unga yana nechta kichik uchburchaklar kerak bo'ladi?",
        imageUrl:"/1-sinf_images/Mok test-3_12.png", 
        options:["3","4","5","6","7"], 
        correctAnswer:2 },
      {
        id: "m3-3", 
        text:"Ramazon akasidan 5 yosh kichik. Ramazon 10 yil avval 25 yoshda edi. Hozir akasi necha yoshda ?", 
        options:["38","40","43","48"], 
        correctAnswer:2 },
      {
        id: "m3-3", 
        text:"_ Quyidagi sonlar qatorida nechta son bor?",
        imageUrl:"/1-sinf_images/Mok test-3_13.png", 
        options:["30","22","27","28"], 
        correctAnswer:2 },
      {
        id: "m3-3", 
        text:"aprel haftaning 5-aprel haftaning Dushanba kuni bo`lsa, shu yili 14-aprel haftaning qaysi kuni bo'ladi?",
        imageUrl:"/1-sinf_images/Mok test-3_14.png",
        options:["Juma","Payshanba","Chorshanba","Dushanba"], 
        correctAnswer:2 },
      {
        id: "m3-3", 
        text:"? o'rnidagi sonni toping.",
        imageUrl:"/1-sinf_images/Mok test-3_15.png", 
        options:["5","7","10","12","20"], 
        correctAnswer:2 },
      {
        id: "m3-3", 
        text:"Uchta mino Zohid uch xil figuradan minoralar qurdi. Uchta minoraning balandligi rasmda ko'rsatilgan.  <br><b>4-minora balandligini toping.</b>",
        imageUrl:"/1-sinf_images/Mok test-3_16.png", 
        options:["12","13","14","16"], 
        correctAnswer:2 },
      {
        id: "m3-3", 
        text:"Har bir bo'sh akvariumlarda 4 tadan son yozilgan. Variantlardan qaysi bir akvariumdagi raqamlar yig'indisi eng kichik?",
        imageUrl:"/1-sinf_images/Mok test-3_17.png", 
        options:["A","B","C","D"], 
        correctAnswer:2 },
    ]
  }, 
  {
  id: "m4-4",
    subject: "matematika",
    grade: 1,
    topic: "Mantiqiy Masala",
    questions: [
      {
        id: "m4-4", 
        text:"Bitta qutida 10 dona konfet bor. Bir yashikka esa 2 dona quti joylashgan. Yashiklar soni 5 ta bo'lsa, jami nechta konfet bor?", 
        options:["10","200","100","150"], 
        correctAnswer:2 },
      {
        id: "m4-4", 
        text:"Oshxonaga 90 kg kartoshka keltirildi. Agar bir kunda 25 kg dan ishlatilsa, 3 kundan keyin necha kilogramm kartoshka qoladi?", 
        options:["20","40","15","25"], 
        correctAnswer:2 },
      {
        id: "m4-4", 
        text:"Oilada uchta qiz bor - Oygul, Zebo va Malika. Oygul Malikadan katta emas, Zebo esa Oyguldan katta emas. Oilada kimning yoshi eng kichik?",
        imageUrl:"/1-sinf_images/Mantiqiy masala-1.png", 
        options:["Oygul","Zebo","Malika","Aniqlab bo'lmaydi"], 
        correctAnswer:2 },
      {
        id: "m4-4", 
        text:"Maktab kutubxonasidagi birinchi javonda 180 ta, ikkinchisida undan 76 ta kam, uchinchisida esa birinchi va ikkinchi javonda qancha bo'lsa, shuncha kitob bor.<b>Uchala javonda nechta kitob bor?</b>",
        imageUrl:"/1-sinf_images/Mantiqiy masala-2.png", 
        options:["280","284","568","506"], 
        correctAnswer:2 },
      {
        id: "m4-4", 
        text:"Uchburchakning perimetri 48 mm, ikkita tomonining uzunligi 17 mm dan bo'lsa, uchinchi tomoni necha millimetr?", 
        options:["25","17","14","21"], 
        correctAnswer:2 },
      {
        id: "m4-4", 
        text:"Nomalum kesma uzunligi necha cm?",
        imageUrl:"/1-sinf_images/Mantiqiy masala-4.png", 
        options:["10","30","40","20"], 
        correctAnswer:2 },
      {
        id: "m4-4", 
        text:"Qonuniyatni aniqlab nomalumni toping.",
        imageUrl:"/1-sinf_images/Mantiqiy masala-3.png", 
        options:["18","19","20","17"], 
        correctAnswer:2 },
      {
        id: "m4-4", 
        text:"2 ta oʻramda 24 m sim bor. Shunday 5 ta oʻramda qancha sim bo'ladi?", 
        options:["120","20","60","30"], 
        correctAnswer:2 },
      {
        id: "m4-4", 
        text:"Qonuniyatni aniqlab? belgisi o'rnidagi sonni toping.",
        imageUrl:"/1-sinf_images/Mantiqiy masala-5.png", 
        options:["44","54","64"], 
        correctAnswer:2 },
      {
        id: "m4-4", 
        text:"Qo'shish jadvaliga ko'ra ? o'rnidagi sonni toping.",
        imageUrl:"/1-sinf_images/Mantiqiy masala-6.png", 
        options:["64","74","84"], 
        correctAnswer:2 },
      {
        id: "m4-4", 
        text:"Nomalum yig'indini toping.",
        imageUrl:"/1-sinf_images/Mantiqiy masala-7.png", 
        options:["5","6","2","10"], 
        correctAnswer:2 },
      {
        id: "m4-4", 
        text:"Qonuniyatni aniqlab ? belgilari o'rnidagi sonlarni toping.",
        imageUrl:"/1-sinf_images/Mantiqiy masala-8.png", 
        options:["78, 76, 74, 72","10, 13, 16, 19","50, 52, 54, 56"], 
        correctAnswer:2 },
      {
        id: "m4-4", 
        text:"Qo'shish jadvaliga ko'ra? o'rnidagi sonni toping.",
        imageUrl:"/1-sinf_images/Mantiqiy masala-9.png", 
        options:["36","63","72"], 
        correctAnswer:2 },
      {
        id: "m4-4", 
        text:"Qo'shish jadvaliga ko'ra ? o'rnidagi sonni toping.",
        imageUrl:"/1-sinf_images/Mantiqiy masala-10.png", 
        options:["19","18","17"], 
        correctAnswer:2 },
      {
        id: "m4-4", 
        text:"Mushukning qorni och u ham baliqni ham ovqatini yeyishi uchun ? o'rnida tushirib qoldirilgan yo'lning qismini toping.",
        imageUrl:"/1-sinf_images/Mantiqiy masala-11.png", 
        options:["A","B","C","D","E"], 
        correctAnswer:2 },
    ]
  }, 
   {
    id: "m5-5",
    subject: "matematika",
    grade: 2,
    topic: "Sonlar va Raqamlar Sanoq va Tartib sonlar farqi",
    questions: [
      {
        id: "m5-5", 
        text:"Sonni o'qing! 25", 
        options:["yigirma besh","yigirma to'rt","qirq ikki","ellik ikki"], 
        correctAnswer:0 },
      {
        id: "m5-5", 
        text:"Sonni raqam bilan yozing: To'rt yuz uch", 
        options:["404","406","407","403"], 
        correctAnswer:3 },
      {
        id: "m5-5", 
        text:"Sonny o'qing! 792", 
        options:["yetti yur to‘qson uch ","yetti yur to‘qson to'rt ","yetti yur to‘qson ikki ","yetti yur to‘qson bir "], 
        correctAnswer:2 },
      {
        id: "m5-5", 
        text:"Sonni raqam bilan yozing: Ikki ming besh yuz sakson yetti", 
        options:["2587","2556","2577","2568"], 
        correctAnswer:0 },
      {
        id: "m5-5", 
        text:"Sony o'qing: 3545838", 
        options:["uch million besh yuz qirqbesh ming sakkiz yuz o'ttiz olti","uch million besh yuz qirq besh ming sakkiz yuz qirq sakkiz","uch million besh yuz qirq besh ming sakkiz yuz o'ttiz sakkiz ","uch million besh yuz qirq besh ming sakkiz yuz o'ttiz to'rt"], 
        correctAnswer:2 },
      {
        id: "m5-5", 
        text:"Yozuvlardan qaysi biri o'ttiz uch ming oltmish besh sonini ifodalaydi?", 
        options:["3365","33065","33650","T.J.Y"], 
        correctAnswer:1 },
      {
        id: "m5-5", 
        text:"Ulardan qaysi biri raqam emas", 
        options:["5","0","7","10"], 
        correctAnswer:3 },
      {
        id: "m5-5", 
        text:"Eng kichik raqam qaysi", 
        options:["0","3","1","8"], 
        correctAnswer:0 },
      {
        id: "m5-5", 
        text:"Son o'qidagi sonlar o'rniga harflar qo'yilgan. Ushbu qiymatlardan D + F ga mos qiymatni toping.", 
        imageUrl:"/images/photo_2026-01-20_21-50-10.jpg", 
        options:["16","12","5","11"], 
        correctAnswer:1 },
      {
        id: "m5-5", 
        text:"Son o'qidagi sonlar o'rniga harflar qo'yilgan. Ushbu qiymatlardan L + M - N ga mos qiymatni topping",
        imageUrl:"/images/photo_2.jpg", 
        options:["8","12","4","16"], 
        correctAnswer:1 },
      {
        id: "m5-5", 
        text:"Son nurida 423 sonidan oldin kelgan 3 ta sonni yozing:", 
        options:["422,423,424","421,422,423","423,424,425","420,421,422"], 
        correctAnswer:3 },
      {
        
        id: "m5-5", 
        text:" Barcha raqamlari turli bo'lgan 5 xonali son yozilgan javobni toping.", 
        options:["57125","20327","68042","4785"], 
        correctAnswer:2 },
      {
        id: "m5-5", 
        text:"Quyidagi sonni yozishda nechta raqam ishtirok etgan: 2022", 
        options:["4","3","2","5"], 
        correctAnswer:2 },
      {
        id: "m5-5", 
        text:" Quyidagi sonni yozishda necha xil raqam ishtirok etgan: 2022", 
        options:["4","3","2","5"], 
        correctAnswer:2 },
      {
        id: "m5-5", 
        text:" 'ABUBAKR' ismini yozishda necha xil harfdan foydalanilgan?", 
        options:["7","6","5","8"], 
        correctAnswer:2 },
      {
        id: "m5-5", 
        text:"Bir xonali sanoq sonlari nechta?", 
        options:["10","9","90","8"], 
        correctAnswer:1 },
      {
        id: "m5-5", 
        text:"Ikki xonali sanoq sonlari nechta?", 
        options:["99","89","90","91"], 
        correctAnswer:2 },
      {
        id: "m5-5",
        text:"Uch xonali barcha sonlar besh xonali barcha sonlardan necha marta kam?", 
        options:["10 marta","100 marta","1000 marta","20 marta"], 
        correctAnswer:1 },
      {
        id: "m5-5", 
        text:"Eng kichik to'rt xonali son qaysi?", 
        options:["1234","1000","1023","1200"], 
        correctAnswer:1 },
      {
        id: "m5-5", 
        text:"Eng kichik barcha raqami har xil uch xonali sonni toping?", 
        options:["123","125","234","102"], 
        correctAnswer:3 },
      {
        id: "m5-5", 
        text:"Barcha raqamlar yig'indisini toping?", 
        options:["45","55","36","50"], 
        correctAnswer:0 },
      {
        id: "m5-5", 
        text:" Barcha raqamlar ko'paytmasini toping.?", 
        options:["362880","45","0","55"], 
        correctAnswer:2 },
      {
        id: "m5-5", 
        text:"Barcha raqami turli 12 xonali sonlar nechta?", 
        options:[" 900 000 000 000 ta","90 000 000 000 ta","9 000 000 000 ta","Bunday son yo'q"], 
        correctAnswer:3 },
      {
        id: "m5-5", 
        text:" 9 nımanı bildirdi?", 
        options:["Raqamni","Sonni","Ham raqam ham sonni","Barcha javoblar to'g'ri"], 
        correctAnswer:2 },
      {
        id: "m5-5", 
        text:"Son o'qidagi barcha noma'lum sonlarning yig'indisini toping?", 
        imageUrl:"/images/photo_3.jpg", 
        options:["285","280","275","270"], 
        correctAnswer:2 },
      {
        id: "m5-5", 
        text:" Quyidagilardan qaysi biri tartib son?", 
        options:["5 ta daftar","6 ta olma","7-kurs","Barcha javoblar to'g'ri"], 
        correctAnswer:2 },
      {
        id: "m5-5", 
        text:"Quyidagilardan qaysi biri tartib son?", 
        options:["5 ta daftar","6-kitob","7 kg","Barcha javoblar to'g'ri"], 
        correctAnswer:1 },
      {
        id: "m5-5", 
        text:"Quyidagilardan qaysi biri tartib son? ", 
        options:["besh","yigirma ikki","o'ninchi","o'ttiz besh kg"], 
        correctAnswer:2 },
      {
        id: "m5-5", 
        text:"Quyidagilardan qaysi biri tartib son?", 
        options:["yigirma ikkinchi","100","1","87"], 
        correctAnswer:0 },
      {
        id: "m5-5", 
        text:"Quyidagilardan qaysi biri tartib son emas?", 
        options:["o'n uchinchi","yigirma ikkinchi","bir yuz ikki","8-stol"], 
        correctAnswer:2 },
      {
        id: "m5-5", 
        text:"Quyidagi jumladan 22-harfni belgilang. 'URIOSITY is the engine of success'", 
        options:["o","s","a","e"], 
        correctAnswer:1 },
      {
        id: "m5-5", 
        text:"Agar yuqoridan hisoblasak, Laylo 4-qavatda yashaydi. Uy 9 qavatli bo'lsa, Laylo nechanchi qavatda yashaydi?", 
        options:[" 5-qavatda","6-qavatda","4-qavatda","7-qavatda"], 
        correctAnswer:1 },
      {
        id: "m5-5", 
        text:"Harflarga mos sonlar to'g'ri ko'rsatilgan javobni belgilang.",
        imageUrl:"/images/photo_4.jpg", 
        options:["A=3, E=22","B=3, C=17","D=21, E=22","A=17, B=3"], 
        correctAnswer:0 },
      {
        id: "m5-5", 
        text:"Nargizaning (N) joyi nechanchi o'rindiqda?",
        imageUrl:"/images/photo_5.jpg",
        options:["24","25","26","27"], 
        correctAnswer:1 },
      {
        id: "m5-5", 
        text:"Majlislar xonasida Aziza, Botir, Sobir, Doniyor va Ezoza o'tirgan o'rindiqlar raqami berkitilgan. Berkitilgan o'rindiqlar tartib sonlari yig'indisini toping.",
        imageUrl:"/images/photo_6.jpg", 
        options:["87","85","88","89"], 
        correctAnswer:0 },
      {
        id: "m5-5", 
        text:" 'Barcha natural sondan keyingi natural son mavjud.' Ushbu tasdiq to'g'rimi?", 
        options:["To‘g‘ri","Noto'g'ri"], 
        correctAnswer:1 },
      {
        id: "m5-5", 
        text:"'Barcha natural sondan oldingi natural son mavjud.' Ushbu tasdiq to'g'rimi?", 
        options:["To‘g‘ri","Noto'g'ri"], 
        correctAnswer:1 },
      {
        id: "m5-5", 
        text:"Ketma-ketlikning tushirib qoldirilgan sonlarini toping. 42,__,__,60,66,72", 
        options:["44, 46","48, 54","52, 58","46, 54"], 
        correctAnswer:1 },
      {
        id: "m5-5", 
        text:"Ketma-ketlikning tushirib qoldirilgan sonlarini toping. 24,30,__,42,__,54", 
        options:["34, 40","48, 54","36, 48","34, 50"], 
        correctAnswer:2 },
      {
        id: "m5-5", 
        text:"Ketma-ketlikning tushirib qoldirilgan sonlarini toping.36,__,54,63,72,81,__,", 
        options:["45, 90","42, 87","44, 89","45, 87"], 
        correctAnswer:0 },
      {
        id: "m5-5", 
        text:"Har ikkala shakldagi sanoq cho'plarining soni baravar bo'lishi uchun ikkinchi shakldagi nechta cho'pni birinchi shaklga olib o'tish kerak?", 
        imageUrl:"/images/photo_7.jpg", 
        options:["6","5","3","2"], 
        correctAnswer:2 },
      {
        id: "m5-5", 
        text:"Ketma-ketlikning tushirib qoldirilgan sonlarini toping. 21,28,__,42,49,__,63", 
        options:["35, 50","35, 56","29, 56","35, 58"], 
        correctAnswer:1 },
      {
        id: "m5-5", 
        text:" Ketma-ketlikning tushirib qoldirilgan sonini toping. __,56,63,70,77", 
        options:["49","53","50","51"], 
        correctAnswer:0 },
      {
        id: "m5-5", 
        text:"Ketma-ketlikning tushirib qoldirilgan sonlarini toping. 56,__,70,__,84,91", 
        options:["63, 80","57,71"," 63, 77","61, 73"], 
        correctAnswer:2 },
      {
        id: "m5-5", 
        text:"Ketma-ketlikning tushirib qoldirilgan sonni toping. 45,54,63,72,__,90", 
        options:["79","81","73","80"], 
        correctAnswer:1 },
      {
        id: "m5-5", 
        text:"Ketma-ketlikning tushirib qoldirilgan sonlarini toping. 22,27,__,37,42,__,52", 
        options:["32, 47","35, 56","28, 43","34, 35"], 
        correctAnswer:0 },
      {
        id: "m5-5", 
        text:"Ketma-ketlikning keyingi sonini toping. 12,18,24,30,36,42,__,", 
        options:["43","45","48","44"], 
        correctAnswer:2 },
      {
        id: "m5-5", 
        text:"1,2,3,4,__,__,__,__,9,10,11 ushbu ketma-ketlikda tushirib qoldirilgan sonlar yig'indisini toping.", 
        options:["26","21","35","30"], 
        correctAnswer:0 },
      {
        id: "m5-5", 
        text:"Ketma-ketlikdagi harflarning qiymatlaridan H + B ning qiymati nimaga teng bo'ladi?", 
        imageUrl:"/images/photo_8.jpg", 
        options:["100","104","110","116"], 
        correctAnswer:3 }
    ]
  },
   {
    id: "m6-6",
    subject: "matematika",
    grade: 2,
    topic: "Sonning xona birliklari",
    questions: [
      {
        id: "m6-6",
        text:"Sonni xona qo'shiluvchilari yig'indisi ko'rinishida yozing: 895", 
        options:["800+9+5","80+90+5","800+90+5","8+9+5"], 
        correctAnswer:2 },
      {
        id: "m6-6",
        text:"5 ta o'nlik, 3 ta yuzlik va 8 ta birlikdan iborat sonni raqamlarda ifodalang.", 
        options:["358","538","583","385"], 
        correctAnswer:0 },
      {
        id: "m6-6",
        text:" Qaysi javobda sonlarni xona qo'shiluvchilari yig'indisi ko'rinishida tasvirlanishi noto'g'ri bo'lgan?",
        options:["175=100+70+5","419=40+10+9","284=200+80+4","863=800+60+3"], 
        correctAnswer:1 },
      {
        id: "m6-6",
        text:"Rasmda qaysi son ifodalangan?",
        imageUrl:"/images/xona birligi 1.jpg", 
        options:["337","373","435","3033"],
        correctAnswer:0 },
      {
        id: "m6-6",
        text:"Rasmda qaysi son ifodalangan?",
        imageUrl:"/images/xona birligi 2.jpg",
        options:["3514","369","3624","3614"], 
        correctAnswer:3 },
      {
        id: "m6-6",
        text:"Rasmda qaysi son ifodalangan?",
        imageUrl:"/images/xona birligi 3.jpg", 
        options:["5450","5405","545","5305"], 
        correctAnswer:1 },
      {
        id: "m6-6",
        text:"Rasmda qaysi son ifodalangan?",
        imageUrl:"/images/xona birligi 4.jpg", 
        options:["443","4403","4330","4430"], 
        correctAnswer:3 },
      {
        id: "m6-6",
        text:"8 soni qaysi xonaga mansub? 862", 
        options:["birlar xonasiga","o'nlar xonasiga","yuzlar xonasiga","To'g'ri javob yo'q"], 
        correctAnswer:2 },
      {
        id: "m6-6",
        text:"O'nlar xonasidagi raqamni toping. 408", 
        options:["4","0","8","To'g'ri javob yo'q"],
        correctAnswer:1 },
      {
        id: "m6-6",
        text:"Rasmda qaysi son ifodalangan?",
        imageUrl:"/images/xona birligi 5.jpg", 
        options:["1750","1605","1715","1705"], 
        correctAnswer:3 },
      {
        id: "m6-6",
        text:" Birlar xonasida qaysi raqam joylashgan? 396", 
        options:["3","9","6","To'g'ri javob yo'q"], 
        correctAnswer:2 },
      {
        id: "m6-6",
        text:" 5 raqami qaysi xonaga mansub? 9 563", 
        options:["birlar xonasiga","o'nlar xonasiga","yuzlar xonasiga","minglar xonasiga"], 
        correctAnswer:2 },
      {
        id: "m6-6",
        text:"7 raqami qaysi xonaga mansub? 5 627", 
        options:["birlar xonasiga","o'nlar xonasiga","yuzlar xonasiga"," minglar xonasiga"],
        correctAnswer:0 },
      {
        id: "m6-6",
        text:"7 raqami qaysi xonaga mansub? 71 584", 
        options:["birlar xonasiga","yuzlar xonasiga","minglar xonasiga","o'n minglar xonasiga"],
        correctAnswer:3 },
      {
        id: "m6-6",
        text:" 0 raqami qaysi xonaga mansub? 20 495",
        options:["birlar xonasiga","o'nlar xonasiga","yuzlar xonasiga"," minglar xonasiga"], 
        correctAnswer:3 },
      {
        id: "m6-6",
        text:"Minglar xonasida qaysi raqam joylashgan? 164 084", 
        options:["6","4","0","To'g'ri javob yo'q"],
        correctAnswer:1 },
      {
        id: "m6-6",
        text:"Tagiga chizilgan raqamlarning qaysi biri 80 ni ifodalaydi?", 
        options:["<u>8</u>04","3<u>8</u>","<u>8</u>70","To'g'ri javob yo'q"],
        correctAnswer:3 },
      {
        id: "m6-6",
        text:" Tagiga chizilgan raqamlarning qaysi biri 30 ni ifodalaydi?",
        options:["6<u>3</u>","<u>3</u>8","<u>3</u>14"," To'g'ri javob yo'q"], 
        correctAnswer:1 },
      {
        id: "m6-6",
        text:"Tagiga chizilgan raqamlarning qaysi biri 60 ni ifodalaydi?", 
        options:["2<u>6</u>84","508<u>6</u>","82<u>6</u>4"," To'g'ri javob yo'q"],
        correctAnswer:2 },
      {
        id: "m6-6",
        text:"Tagiga chizilgan raqamning qiymatini toping? 94<u>8</u>", 
        options:["8","80","800","To'g'ri javob yo'q"], 
        correctAnswer:0 },
      {
        id: "m6-6",
        text:"Tushurib qoldirilgan sonlarni yozing. Ikki yuz yigirma yetti=___yuzlik + ___o'nlik + ___birlik ",
        options:["2,2,7","2,20,7","3,2,7","To'g'ri javob yo'q"],
        correctAnswer:0 },
      {
        id: "m6-6",
        text:"Tushurib qoldirilgan sonlarni yozing. Yetti yuz to'qson to'qqiz = __yuzlik +___o'nlik +___birlik ",
         options:["7,7,9","7,90,9","7,9,9","To'g'ri javob yo'q"],
          correctAnswer:2 },
      {
        id: "m6-6",
        text:"Quyidagi sonni raqamlar bilan yozing. 4 yuzlik + 3 o'nlik + 6 birlik", 
        options:["4036","436","463","To'g'ri javob yo'q"],
         correctAnswer:1 },
      {
        id: "m6-6",
        text:"Quyidagi sonni raqamlar bilan yozing. 4 minglik + 4 yuzlik + 7 o'nlik + 9 birlik", 
        options:["4479","4749","4779","To'g'ri javob yo'q"],
         correctAnswer:0 },
      {
        id: "m6-6",
        text:"Yeching: 2 ta minglik = ________ta birlik", 
        options:["200","2000","20000","To'g'ri javob yo'q"],
         correctAnswer:1 },
      {
        id: "m6-6",
        text:"Yeching: 1 ta minglik = ________ta birlik", 
        options:["100","1000","10000","To'g'ri javob yo'q"],
         correctAnswer:1 },
      {
        id: "m6-6",
        text:"Yeching: 1 ta o'nlik = ______ta birlik", 
        options:["10","100","1000","To'g'ri javob yo'q"],
         correctAnswer:0 },
      {
        id: "m6-6",
        text:"Yeching: ________ta minglik = 20 ta yuzlik",
         options:["20","2","200","To'g'ri javob yo'q"], 
         correctAnswer:1 },
      {
        id: "m6-6",
        text:" Yeching:    8000+800+30+3=", 
        options:["8833","88033","88303","To'g'ri javob yo'q"], 
        correctAnswer:0 },
      {
        id: "m6-6",
        text:"Yeching:  800+40+9=? ", 
        options:["849","498","948","To'g'ri javob yo'q"], 
        correctAnswer:0 },
      {
        id: "m6-6",
        text:" Aziza bir son yozdiki, son 6 ta yuzlik, yuzliklardan 3 marta kam birlikka ega. Shuningdek, sonda birlik va yuzliklarning birgalikdagi soni nechta bo'lsa shuncha o'nlik,o'nliklar sonidan 3 ta kam minglik mavjud. Aziza yozgan sonni toping.", 
        options:["3693","6393","5683","5682"],
         correctAnswer:3 },
      {
        id: "m6-6",
        text:"Yeching: 200 + 6 = ?", 
        options:["266","266","206","To'g'ri javob yo'q"], 
        correctAnswer:2 },
      {
        id: "m6-6",
        text:"Sonlarni standart ko'rinishda yozing. 8000 + 700+50+1=", 
        options:["7851","8715","8751","To'g'ri javob yo'q"],
         correctAnswer:2 },
      {
        id: "m6-6",
        text:" Sonlarni standart ko'rinishda yozing. 400+40+2 =",
         options:["414","442","424","To'g'ri javob yo'q"],
          correctAnswer:1 },
      {
        id: "m6-6",
        text:" Sonlarni standart ko'rinishda yozing. 5000+400+40+ 6 =",
         options:["5446","5046","4546","To'g'ri javob yo'q"],
          correctAnswer:0 },
      {
        id: "m6-6",
        text:"345 790 sonida o'n minglar xonasidagi sonni 3 taga orttiring.",
         options:["346 090","348 790","645 790","375 790"],
          correctAnswer:3 },
      {
        id: "m6-6",
        text:"150 780 sonida yuzlar xonasidagi sonni 4 taga kamaytiring", 
        options:["150 380","110 780","150 740","154 780"],
         correctAnswer:0 },
      {
        id: "m6-6",
        text:"327 221 056 sonida bir millionlar xonasidagi sonni 1 taga orttiring.", 
        options:["327 231 056","327 321 056","337 221 056","328 221 056"],
         correctAnswer:3 },
      {
        id: "m6-6",
        text:"Sonning xona birliklari bo'yicha yoyilmasini yozing. 2 037 =", 
        options:["200+30+7","2000+30+7","2000+300+7","To'g'ri javob yo'q"], 
        correctAnswer:1 },
      {
         id: "m6-6"
         ,text:" 4 ta o'nlik va o'nliklar sonidan 5 ta ko'p birlikga ega sonni toping",
          options:["49","55","45","To'g'ri javob yo'q"],
           correctAnswer:0 },
      {
        id: "m6-6",
        text:"4 ta yuzlik, yuzliklardan 4 ta ko'p o'nlik, va o'nliklardan 2 ta kam birlikka ega bo'lgan sonni toping.",
         options:["548","442","486","To'g'ri javob yo'q"],
          correctAnswer:2 },
      {
        id: "m6-6",
        text:"1 ta yuzlik, yuzliklardan 8 ta ko'p o'nlikka ega, va birlikka ega bo'lmagan sonni toping.?", 
        options:["180","190","280","To'g'ri javob yo'q"],
         correctAnswer:1 },
      {
        id: "m6-6",
        text:"7 ta minglik, mingliklardan 6 ta kam yuzlik, yuzliklardan 5 ta ko'p o'nlikka ega, va birlikka ega bo'lmagan sonni toping.",
         options:["7160","7650","8340","To'g'ri javob yo'q"], 
         correctAnswer:0 },
      {
        id: "m6-6",
        text:"Maria shunday son yozdiki, sonning yuzlar xonasida 4 va birlar xonasida 2 raqami bor shu sonni toping.",
         options:["5426","4652","4265","5462"],
          correctAnswer:3 },
      {
        id: "m6-6",
        text:"Qiymati 3 ta yuzlikka teng javobni ko'rsating.", 
        options:[" 3 ta birlik","30 ta birlik","30 ta o'nlik","300 ta o'nlik"],
         correctAnswer:2 },
      {
        id: "m6-6",
        text:"Aziz 3 ta karta yordamida 3 xonali sonlar hosil qilmoqda. U hosil qilishi mumkin bo'lgan sonlar nechta?",
        imageUrl:"/images/xona birligi 6.jpg",
         options:["4","3","6","5"],
          correctAnswer:2 },
      {
        id: "m6-6",
        text:"Rasmda qizil rangda belgilangan sonni toping.",
        imageUrl:"/images/xona birligi 7.jpg",
        options:["1357 "," 3571","3751","1570"], 
        correctAnswer:1 },
      {
        id: "m6-6",
        text:" Men to'rt xonali 2500 dan katta va 3000 dan kichik bo'lgan sonman. Mening o'nlar xonamda 6 raqami bor. Yuzlar xonamdagi raqam o'nlar xonamdagi raqamdan kichik. Mening birlar xonamda 0 raqami bor. Meni toping.", 
        options:["2670","2760","2460","2560"],
         correctAnswer:3 },
      {
        id: "m6-6",
        text:"Men to'rt xonali sonman. Mening birlar va yuzlar xonamdagi raqamlar bir xil. Men 8000 dan kattaroq va 9000 dan kichikroqman. O'nlar xonamda 4 raqami bor. Yuzlar xonamdagi raqam o'nlar xonamdagi raqamdan 2 ga ko'p. Meni toping.",
         options:["8646","8644","8546 ","8600"],
          correctAnswer:0 },
      {
        id: "m6-6",
        text:"Ra'noda 3 xil rangdagi kartalarning har biridan 9 tadan bor. Kartalarga 1-9 gacha raqamlar tuzilgan. Ra'no shu kartalar yordamida 9 ta uch xonali son tuzdi. Kartalarni sonning xona birliklari bo'yicha ma'lum tartibda joylashtirdi. Quyida 7 ta u tuzgan son berilgan. Ikkita son ko'rsatilmagan. Quyidagi sonlardan qaysi biri u tuzgan son bo'lishi mumkin emas?",
        imageUrl:"/images/xona birliklari 8.jpg",
         options:["312","856","892","316"], 
         correctAnswer:2 },
      {
        id: "m6-6",
        text:" Ra'noda 3 xil rangdagi kartalarning har biridan 9 tadan bor. Kartalarga 1-9 gacha raqamlar tuzilgan. Ra'no shu kartalar yordamida 9 ta uch xonali son tuzdi. Kartalarni sonning xona birliklari bo'yicha ma'lum tartibda joylashtirdi. Quyida 7 ta u tuzgan son berilgan. Ikkita son ko'rsatilmagan. Nodira Ra'no tuzgan keyingi sonni topmoqchi. Nodira keyingi uch xonali sonni kamida necha marta urinishda aniq topishi mumkin?",
        imageUrl:"/images/xona birliklari 8.jpg", 
        options:["10","8","6","4"], 
        correctAnswer:1 },
      {
        id: "m6-6",
        text:"Quyida 4 ta son yozilgan: 263, 613, 216, 609. Aziza bu sonlarning har biridan 10 ta ko'p va 10 ta kam, 100 ta ko'p va 100 ta kam bo'lgan sonlarni yozib chiqdi. Keyin bir sondagi 6 raqami barcha hisob-kitoblardan so'ng o'zgarishsiz qolganini sezdi. Qaysi sonda 6 raqami har doim o'zgarishsiz qolgan?",
        options:["263","613","216","609"], 
        correctAnswer:2 },
      {
        id: "m6-6",
        text:"Quyida uzunlik o'lchov birligi keltirilgan. Unda har bir oraliq bir xil uzunlikka ega. Qizil chiziqlarga mos keluvchi sonlar qatorini toping.",
        imageUrl:"/images/xona birliklari 9.jpg", 
        options:["180, 280, 350, 420","150, 290, 360, 420","150, 260, 370, 430","150, 290, 380, 440"],
        correctAnswer:1 },
      {
        id: "m6-6",
        text:"Quyida uzunlik o'lchov birligi keltirilgan. Unda har bir oraliq bir xil uzunlikka ega.Qizil chiziqlarga mos keluvchi sonlar qatorini toping.",
        imageUrl:"/images/xona birliklari 10.jpg", 
        options:["570, 640, 710, 830","570, 650, 720, 860","580, 620, 750, 830","570, 680, 750, 830"], 
        correctAnswer:2 }
    ]
  },
  {
    id: "m7-7",
    subject: "matematika",
    grade: 2,
    topic: "Sonlarni qo‘shish",
    questions: [
      {
        id: "m7-7", 
        text:"Bir to‘p gazlamadan 50 m qirqib olingandan so‘ng 40 m gazlama qoldi. Dastlab to‘pda necha metr gazlama bo‘lgan?", 
        options:["10","80","90","140"], 
        correctAnswer:2 },
      {
        id: "m7-7", 
        text:". Sonlarni qo’shing. 746+819=____", 
        options:["1565","1545","1465","1445"], 
        correctAnswer:0 },
      {
        id: "m7-7", 
        text:"Sonlarni qo’shing. 476+578=____", 
        options:["1054","1540","1154","1554"], 
        correctAnswer:0 },
      {
        id: "m7-7", 
        text:" Bo‘sh qutining massasi 3 kg. Uning ichiga 12 kg olma va 2 kg nok joylandi. Quti bilan birga mevalarning massasi qancha?", 
        options:["5 kg","15 kg","14 kg","17 kg"], 
        correctAnswer:3 },
      {
        id: "m7-7", 
        text:"Do‘konga keltirilgan 38 paket un sotilgandan keyin yana 52 paket un qoldi. Hamma un necha paket edi?", 
        options:["810","80","85","90"], 
        correctAnswer:3 },
      {
        id: "m7-7", 
        text:"Jadvalni to’ldiring. qoida: 46 ni qo’shing.",
        imageUrl:"/images/qo'shish-1.png", 
        options:["112, 245, 307","102, 245, 297","112, 240, 305","102, 240, 295"],
        correctAnswer:0 },
      {
        id: "m7-7", 
        text:"Jadvalni to’ldiring. qoida: 246 ni qo’shing.",
        imageUrl:"/images/qo'shish-2.png",
         options:["444, 916, 940","444, 926, 941","434, 926, 931","434, 916, 930"], 
         correctAnswer:1 },
      {
        id: "m7-7", 
        text:"Sonlarni qo’shing. 7 + 24 + 130 = ____", 
        options:["161","151","162","152"], 
        correctAnswer:0 },
      {
        id: "m7-7", 
        text:"Bir yirik xalqaro konferensiyaga qatnashish uchun ro’yxatdan o’tgan britaniyaliklar soni 482 ta bo’lib, boshqa mamlakatlardan ham 329 ta ro’yxatdan o’tgan. Jami nechta odam konferensiyaga qatnashish uchun ro’yxatdan o’tgan?", 
        options:["821","811","153","152"], 
        correctAnswer:1 },
      {
        id: "m7-7", 
        text:"30 va 20 sonlarining yig‘indisi 50 ga teng. Yig‘indi birinchi qo‘shiluvchidan nechta ortiq.", 
        options:["20","30","10","40"], 
        correctAnswer:0 },
      {
        id: "m7-7", 
        text:"Janet divanning ustida 805 marta sakradi, Mixayel esa 121 marta sakradi. Keyin divan sinib ketdi. U ikkovi divanning ustida jami necha marta sakragan.", 
        options:["826","936","926","836"], 
        correctAnswer:2 },
      {
        id: "m7-7", 
        text:"Monroye qishlog’ida 504 ta uy bor edi. Quruvchilar yana 444 ta yangi uy qurdilar. Hozir Monroye qishlog’ida jami nechta uy bor.", 
        options:["946","944","948","950"],
         correctAnswer:2 },
      {
        id: "m7-7", 
        text:"Bir qandolatchi 89 ta shkoladli keks, 9 315 ta vanillali keks va 7 ta yong’oqli keks sotdi. Qandolatchi jami nechta keks sotgan?", 
        options:["9 404","9 421","9 411","9 414"], 
        correctAnswer:2 },
      {
        id: "m7-7", 
        text:"Restoran ehtiyojlari uchun 7 457 banka pamidor sousi, 140 banka qo’ziqorin sousi va 9 banka sarimsoq piyoz sousiga buyurtma berdi. Restoran jami necha banka sousga buyurtma bergan?", 
        options:["7 604","7 616","7 606","7 614"], 
        correctAnswer:2 },
      {
        id: "m7-7", 
        text:"O’tgan yili Monika pullarini turli xayriya ishlariga sarfladi. U £792 ni o’rta maktabga, £7 ni universitetga, £8 438 ni tibbiy tadqiqotlarga va £23 ni oziq-ovqat bankiga sarfladi. Monika jami qancha mablag’ni xayriya maqsadlarida sarfladi.", options:["8 260","9 260","9 266","8 266"],
         correctAnswer:1 },
      {
        id: "m7-7", 
        text:"Tasviriy san’at o’qituvchisi, Jenniferga bir qancha tugmalar kerak bo’ldi. U maxsus do’konga borib 6 ta qizil, 2 300 ta ko’k, 409 ta qora va 16 ta kumushrang tugmalardan sotib oldi. Jennifer jami nechta tugma sotib olgan?", 
        options:["2 731","2 732","2 721","2 722"], 
        correctAnswer:0 },
      {
        id: "m7-7", 
        text:"Tushirib qoldirilgan raqamlarni toping.",
        imageUrl:"/images/qo'shish-4.png",
         options:["6, 2, 3","6, 1, 1","3, 1, 6","3, 1, 1"], 
         correctAnswer:1 },
      {
        id: "m7-7", 
        text:"Tushirib qoldirilgan raqamlarni toping.",
        imageUrl:"/images/qo'shish-5.png", 
        options:["2, 2, 2, 9, 4","2, 3, 2, 8, 4","3, 2, 2, 9, 5","2, 3, 2, 9, 4"], 
        correctAnswer:0 },
      {
        id: "m7-7", 
        text:"Rasm asosida jami mato uzunligini toping.",
        imageUrl:"/images/sonlarni qo'shish-5.png", 
        options:["70","75","42","37"], 
        correctAnswer:0 },
      {
        id: "m7-7", 
        text:"Tenglikni to’g’ri qiladigan sonni toping. 741 + ____ = 542 + 740", 
        options:["542","541","551","552"], 
        correctAnswer:1 },
      {
        id: "m7-7", 
        text:"Uyni ta’mirlash uchun birinchi kuni 24 ta, ikkinchi kuni birinchi kundagidan 6 ta ortiq, uchinchi kuni birinchi va ikkinchi kuni birgalikda qancha bo‘lsa, shuncha taxta keltirildi. Uch kunda jami nechta taxta keltirilgan?", 
        options:["138","75","60","108"], 
        correctAnswer:3 },
      {
        id: "m7-7", 
        text:"Sonlarni qo’shing. 11 + 5 + 6 + 946 = _____", 
        options:["978","967","968","977"], 
        correctAnswer:2 },
      {
        id: "m7-7", 
        text:"Nigora do‘kondan 8 ta chiziqli daftar va undan 5 ta ortiq katak daftar sotib oldi. Nigora hammasi bo‘lib nechta daftar sotib olgan?", 
        options:["12 ta","13 ta","20 ta","21 ta"], 
        correctAnswer:3 },
      {
        id: "m7-7", 
        text:"Sonlarni qo’shing. 415 + 1 + 261 + 84 =____", 
        options:["751","761","763","753"], 
        correctAnswer:1 },
      {
        id: "m7-7", 
        text:"Edmons bolalar bog’chasida rasm darsi mashg’ulotlarida yanvar oyida 712 ta, fevral oyida 1 ta va mart oyida 98 ta rasm chizildi. Dars mashg’ulotlarida jami nechta rasm chizilgan?",
         options:["811","801","812","802"], 
        correctAnswer:0 },
      {
        id: "m7-7", 
        text:"233-maktabda rasm darsi mashg’ulotlarida sentyabr oyida 59 ta, oktyabr oyida 800 ta va noyabr oyida 4 ta rasm chizildi. Dars mashg’ulotlarida jami nechta rasm chizilgan?", 
        options:["873","863","853","843"], 
        correctAnswer:1 },
      {
        id: "m7-7", 
        text:"Vitney o’zining barcha dinazavr o’yinchoqlarini sanab chiqdi. Uning stegsarus o’yinchog’i 1 ta, traysretops o’yinchog’i 835 ta va tirannazavr o’yinchog’i esa 55 ta ekanligi ma’lum bo’ldi. Vitneyning ja’mi nechta o’yincho’g’i bor?", 
        options:["891","890","881","880"],
         correctAnswer:0 },
      {
        id: "m7-7", 
        text:"Reggis bolalar bog’chasida rasm darsi mashg’ulotlarida yanvar oyida 932 ta, fevral oyida 52 ta va mart oyida 4 ta rasm bo’yaldi. Dars mashg’ulotlarida jami nechta rasm bo’yalgan?", 
        options:["978","988","986","876"], 
        correctAnswer:1 },
      {
        id: "m7-7", 
        text:"Gulnora bilan Dilnoza yo‘lkaning ikki boshidan bir-birlariga qarab yurdilar. Ular uchrashguncha Gulnora 43 m, Dilnoza undan 4 m ortiq yurdi. Yo‘lkaning uzunligi qancha?", 
        options:["38 m","48 m","80 m","90 m"], 
        correctAnswer:3 },
      {
        id: "m7-7", 
        text:"Namunada keltirilgan kataklarni to’ldiring.",
        imageUrl:"/images/qo'shish-3.png", 
        options:["6, 60, 660, 6600","6, 60, 600, 6000","60, 6, 600, 6000","6, 600, 600, 6000"], 
        correctAnswer:1 },
      {
        id: "m7-7", 
        text:"Bitta yo’lda joylashgan uchta mahalla mavjud. Birinchi mahalla bilan ikkinchi mahalla orasidagi masofa 270 km, ikkinchi mahalla bilan uchinchisi orasi esa undan 20 km ortiq. Birinchi mahalla bilan uchinchi mahalla orasi necha kilometr?", 
        options:["500 m","460 m","560 m","290 m"], 
        correctAnswer:2 },
      {
        id: "m7-7", 
        text:"Namunada keltirilgan kataklarni to’ldiring",
        imageUrl:"/images/qo'shish-7.png", 
        options:["4, 40, 400","4, 40, 440000","4, 40, 400000","4, 4, 400"], 
        correctAnswer:2 },
      {
        id: "m7-7", 
        text:"Do‘konda bir kunda 200 kg shakar sotildi. Shundan keyin do‘konda sotilganidan 100 kg ortiq shakar qoldi. Dastlab do‘konda necha kilogram shakar bo‘lgan?", 
        options:["500 kg","600 kg","300 kg","400 kg"], 
        correctAnswer:0 },
      {
        id: "m7-7", 
        text:"Sonlarni qo’shing. 3 872 + 4 846 = _____", 
        options:["8 726","8 728","8 718","8 716"],
         correctAnswer:2 },
      {
        id: "m7-7", 
        text:"Sonlarni qo’shing. 2 699 + 7 106 = _______", 
        options:["9 825","9 805","9 815","9 835"],
         correctAnswer:1 },
      {
        id: "m7-7", 
        text:"Sonlarni qo’shing. 986 + 6 445 = ______", 
        options:["7 431","7 421","7 432","7 422"],
         correctAnswer:0 },
      {
        id: "m7-7", 
        text:"Bog‘dagi bir tup olxo‘ridan 38 kg, ikkinchisidan esa undan 9 kg ko‘p hosil olindi. Hammasi bo‘lib necha kilogramm olxo‘ri terib olingan?",
        imageUrl:"/images/qo'shish-8.png", 
        options:["70 kg","80 kg","75 kg","85 kg"], 
        correctAnswer:3 },
      {
        id: "m7-7", 
        text:"Jadvalni to’ldiring. qoida: 2664 ni qo’shing",
        imageUrl:"/images/qo'shish-9.png",
         options:["7396, 9599, 7990","7396, 7947, 9599","7386, 7947, 9699","7386, 7955, 8090"], 
        correctAnswer:1 },
      {
        id: "m7-7", 
        text:"Jadvalni to’ldiring. qoida: 4084 ni qo’shing.",
        imageUrl:"/images/qo'shish-10.png", 
        options:["4125, 8282, 9243","4125, 8281, 9242","4124, 8282, 9243","4124, 8282, 9242"], 
        correctAnswer:0 },
      {
        id: "m7-7", 
        text:"Jadvalni to’ldiring. qoida: 545 ni qo’shing.",
        imageUrl:"/images/qo'shish-11.png", 
        options:["1623, 6797, 6822","1633, 6787, 6802","1633, 6797, 6812","1623, 6787, 6832"], 
        correctAnswer:2 },
      {
        id: "m7-7", 
        text:"Fermer xo’jaligi 1 346 sentiner bug’doy hosili olishni reja qilgan edi. Ob-havoning ushbu mavsumda yaxshi kelgani munosabati bilan kutilganidan 958 sentiner ko’proq hosil olindi. Fermer necha sentiner hosil olgan?", 
        options:["2 304","2 300","2 403","2 400"], 
        correctAnswer:0 },
      {
        id: "m7-7", 
        text:"O’tgan yili Nyuberg’s aeroportida 2224 ta yo’lovchi o’z vaqtida qo’ngan. Ammo 5223 ta yo’lovchi kechikish bilan qo’ngan. O’tgan yili Nyuberg’s aeroportida jami nechta yo’lovchi qo’ngan?",
         options:["7 437","5 223","7 447","5233"], 
        correctAnswer:2 },
      {
        id: "m7-7", 
        text:"Bir telefon kompaniyasi Birlashgan Qirollikda 3922 ta va boshqa mamlakatlarda 4 773 ta mijozga ega. Kompaniyaning jami nechta mijozi bor?", 
        options:["8 795","8 695","8 705","8 605"], 
        correctAnswer:1 },
      {
        id: "m7-7", 
        text:"Xazina qidiruvchi qimmatbaho toshlar solib ko’milgan sandiqni topib oldi. Sandiq ochganida 7 318 ta olmos va 1 809 ta yoqut borligini bildi. Sandiqda jami nechta qimmatbaho tosh bor?", 
        options:["9 127","9 137","9 027","9 037"], 
        correctAnswer:0 },
      {
        id: "m7-7", 
        text:"Noma’lum qo’shiluvchini toping. 6 161 + ____ = 6 167", 
        options:["16","9","6","19"], 
        correctAnswer:2 },
      {
        id: "m7-7", 
        text:"Bozorga 387 kg pomidor va undan 76 kg ortiq bodring keltirildi. Bozorga hammasi bo‘lib qancha pomidor va bodring keltirilgan?", 
        options:["700 kg","2750 kg1","800 kg","850 kg"], 
        correctAnswer:3 },
      {
        id: "m7-7", 
        text:". Sonlarni qo’shing. 9 355 + 197 + 12 = ______", 
        options:["9 564","9 566","9 554","9 56"],
         correctAnswer:0 },
      {
        id: "m7-7", 
        text:"Sonlarni qo’shing. 42 + 2 679 + 6 = _______", 
        options:["2 727","2 737","2 728","2 738"], 
        correctAnswer:0 },
      {
        id: "m7-7", 
        text:"Birinchi qopda 37 kg, ikkinchi qopda undan 8 kg ortiq, uchinchi qopda esa ikkinchidagidan 3 kg ortiq kartoshka bor. Uchinchi qopda necha kilogramm kartoshka bor?", 
        options:["32 kg","45 kg","48 kg","130 kg"], 
        correctAnswer:2 },
      {
        id: "m7-7", 
        text:"Tomorqadan 194 kg piyoz, undan 76 kg ortiq sabzi, sabzidan 158 kg ortiq kartoshka kovlab olindi. Jami necha kilogramm sabzavot kovlab olingan?", 
        options:["882 kg","892 kg","902 kg","912 kg"], 
        correctAnswer:1 }
    ]
  },
  {
    id: "m8-8",
    subject: "matematika",
    grade: 2,
    topic: "Sonlarni ayirish",
    questions: [

    ]
  },
  {
    id: "m9-9",
    subject: "matematika",
    grade: 3,
    topic: "Ko’paytirishga kirish va ko’paytirish ko’nikmasini shakllantirish",
    questions: [
      {
        id: "m9-9", 
        text:"Bir guldastada 5 ta chinnigul, ikkinchi guldastada esa undan 3 marta ortiq chinnigul bor. Ikkinchi guldastada nechta chinnigul bor?", options:["5 ta","8 ta","10 ta","15 ta"], 
        correctAnswer:3 },
      {
        id: "m9-9", 
        text:"Har kuni 2 tadan sotib olinsa, bir haftada nechta non olib kelinadi?",
        imageUrl:"/images/ko'paytirish-1.png", 
        options:["14","12","13","16"], 
        correctAnswer:0 },
      {
        id: "m9-9", 
        text:"Sinf xonasining 3 ta derazasi bor. Har qaysi derazada 3 tadan gultuvak turibdi. Derazalardagi hamma gultuvaklar nechta?", 
        options:["3","6","9","12"], 
        correctAnswer:2 },
      {
        id: "m9-9", 
        text:"Har birida 5 tadan shar bo’lgan 4 ta guruhda nechta shar bo’ladi?",
        imageUrl:"/images/ko'paytirish-2.png", 
        options:["20","15","9","5"], 
        correctAnswer:0 },
      {
        id: "m9-9", 
        text:"3 ta sariq koptokcha massasi nechta qizil koptokcha massasiga teng?",
        imageUrl:"/images/ko'paytirish-3.png", 
        options:["5","6","9","10"], 
        correctAnswer:1 },
      {
        id: "m9-9", 
        text:"Xokkey o‘yini 6:6 hisob bilan yakunlandi. O’yinda darvozalarga jami necha marta to’p kiritilgan?", 
        options:["6","8","10","12"], 
        correctAnswer:3 },
      {
        id: "m9-9", 
        text:"Ayollar xalatiga 4 m gazlama ketadi. 9 ta shunday xalatga necha metr gazlama ketadi?", 
        options:["36","31","13","11"], 
        correctAnswer:0 },
      {
        id: "m9-9", 
        text:"Har birida 7 tadan kvadrat bo’lgan 2 ta guruhda nechta kvadrat bo’ladi?",
        imageUrl:"/images/ko'paytirish-4.png", 
        options:["10","15","14","11"], 
        correctAnswer:2 },
      {
        id: "m9-9", 
        text:"Jami konfetlar nechta?",
        imageUrl:"/images/ko'paytirish-5.png", 
        options:["8","12","12","20"], 
        correctAnswer:3 },
      {
        id: "m9-9", 
        text:"Rasmni qaysi ifoda orqali tushuntirish mumkin?",
        imageUrl:"/images/ko'paytirish-6.png", 
        options:["5 · 4","3 · 5","3 · 4","6 · 4"], 
        correctAnswer:0 },
      {
        id: "m9-9", 
        text:"Rasmda nechta olma tasvirlangan?",
        imageUrl:"/images/ko'paytirish-7.png", 
        options:["12","6","9","16"], 
        correctAnswer:0 },
      {
        id: "m9-9", 
        text:"Gulzordan Shahnoza 7 ta, Dilnoza undan 3 marta ko‘p gul uzdi. Gulzordan hammasi bo‘lib nechta gul uzilgan?", 
        options:["21","25","28","35"], 
        correctAnswer:2 },
      {
        id: "m9-9", 
        text:"Rasmda jami nechta baliq tasvirlangan?",
        imageUrl:"/images/ko'paytirish-8.png", 
        options:["18","20","24","28"], 
        correctAnswer:0 },
      {
        id: "m9-9", 
        text:"Rasmni qaysi ifoda orqali tushuntirish mumkin?",
        imageUrl:"/images/ko'paytirish-9.png", 
        options:["5 · 6","5 · 7","6 · 7","6 · 6"], 
        correctAnswer:0 },
      {
        id: "m9-9", 
        text:" Ko’paytirish to’g’ri bajarilgan javobni toping. 6 · 1 = ___, 2 · 2 = ___, 7 · 2 = ___", 
        options:["6, 2, 7","1, 2, 2","6, 4, 14","6, 4, 13"], 
        correctAnswer:2 },
      {
        id: "m9-9", 
        text:"Hisoblang. 5 · 3 = □",
        imageUrl:"/images/ko'paytirish-10.png", 
        options:["12","16","15","21"], 
        correctAnswer:2 },
      {
        id: "m9-9", 
        text:"Yig’indini ko’paytma shaklida ifodalang. 10+10+10=30",
        imageUrl:"/images/ko'paytirish-11.png", 
        options:["10 · 3 = 30","3 · 9 = 27","10 + 20 = 30","40 - 10 = 30"], 
        correctAnswer:0 },
      {
        id: "m9-9", 
        text:"Yig’indini ko’paytma shaklida ifodalang. 4+4+4+4+4=20",
        imageUrl:"/images/ko'paytirish-12.png", 
        options:["4 · 4 = 20","4 · 5 = 20","4 + 16 = 20","24 - 4 = 20"], 
        correctAnswer:1 },
      {
        id: "m9-9", 
        text:"Taqqoslang 4 + 4 ? 4 · 2",
        imageUrl:"/images/ko'paytirish-13.png", 
        options:[">","<","=","T.J.Y"], 
        correctAnswer:2 },
      {
        id: "m9-9", 
        text:"Ko’paytirish to’g’ri bajarilgan javobni toping. 1 · 2 = ___, 2 · 0 = ___, 3 · 5 = ___", 
        options:["2, 0, 15","2, 2, 15","1, 2, 3","2, 1, 15"], 
        correctAnswer:0 },
      {
        id: "m9-9", 
        text:"Ko’paytirish to’g’ri bajarilgan javobni toping. 7 · 3 = ___, 6 · 3 = ___, 3 · 9 = ___", 
        options:["21, 18, 27","73, 63, 39","21, 12, 27","21, 18, 21"], 
        correctAnswer:0 },
      {
        id: "m9-9", 
        text:"Ko’paytirish to’g’ri bajarilgan javobni toping. 5 · 4 = ___, 1 · 4 = ___, 2 · 4 = ___", 
        options:["20, 4, 8","24, 4, 4","54, 14, 24","20, 4, 9"], 
        correctAnswer:0 },
      {
        id: "m9-9", 
        text:"Ko’paytirish to’g’ri bajarilgan javobni toping. 4 · 7 = ___, 5 · 7 = ___, 10 · 5 = ___", 
        options:["47, 57, 105","28, 4, 4","28, 35, 50","28, 35, 52"], 
        correctAnswer:2 },
      {
        id: "m9-9", 
        text:"To’plamda nechta element bor?",
        imageUrl:"/images/ko'paytirish-14.png", 
        options:["4 · 8","3 · 4","3 · 8","3 · 5"], 
        correctAnswer:0 },
      {
        id: "m9-9", 
        text:"To’plamda nechta element bor?",
        imageUrl:"/images/ko'paytirish-15.png", 
        options:["2 · 8","4 · 6","2 · 6","3 · 6"], 
        correctAnswer:1 },
      {
        id: "m9-9", 
        text:"Ifodani to’ldiruvchi sonni toping. □ · 5 = 15 ",
        imageUrl:"/images/ko'paytirish-16.png", 
        options:["5","3","4","6"], 
        correctAnswer:1 },
      {
        id: "m9-9", 
        text:"Ifodani to’ldiruvchi sonni toping. □ · 7 = 35",
        imageUrl:"/images/ko'paytirish-17.png", 
        options:["5","3","4","6"], 
        correctAnswer:0 },
      {
        id: "m9-9", 
        text:"Do‘kondan 4 quti chinni idishlar sotib olindi. Har bir qutida 1 ta choynak va 6 ta piyola bor. Jami nechta chinni idish sotib olingan?", 
        options:["20","24","28","35"], 
        correctAnswer:2 },
      {
        id: "m9-9", 
        text:"Sinfdagi 18 nafar qiz va 17 nafar o‘g‘il bolaning har biriga 10 tadan daftar berildi. O‘quvchilarga jami nechta daftar berilgan?", 
        options:["350","10","180","170"], 
        correctAnswer:0 },
      {
        id: "m9-9", 
        text:"Rasm asosida so’roq o’rnidagi qiymatni toping.",
        imageUrl:"/images/ko'paytirish-18.png", 
        options:["68","64","76","72"], 
        correctAnswer:3 },
      {
        id: "m9-9", 
        text:"Ifodani to’ldiruvchi sonni toping.",
        imageUrl:"/images/ko'paytirish-19.png", 
        options:["5","3","6","4"], 
        correctAnswer:0 },
      {
        id: "m9-9", 
        text:"Rasmga mos keluvchi ifodani toping.",
        imageUrl:"/images/ko'paytirish-20.png", 
        options:["10 · 9 = 90","10 · 10 = 100","8 · 10 = 80","110 - 10 = 100"], 
        correctAnswer:1 },
      {
        id: "m9-9", 
        text:"Bog‘ning har bir qatorida 16 tadan daraxt bor. Ulardan 12 tupi gilos, qolganlari olxo‘ri daraxti. Agar shunday qator 10 ta bo‘lsa,bog‘da necha tup olxo‘ri daraxti bor?", 
        options:["40","160","120","80"], 
        correctAnswer:0 },
      {
        id: "m9-9", 
        text:"Ko’paytirish to’g’ri bajarilgan javobni toping. 5 · 9 = ___, 2 · 5 = ___, 6 · 9 = ___", 
        options:["59, 25, 69","50, 10, 50","45, 10, 54","45, 10, 52"], 
        correctAnswer:2 },
      {
        id: "m9-9", 
        text:"Jadvalni to’ldiring.",
        imageUrl:"/images/ko'paytirish-21.png", 
        options:["7, 32, 64","70, 84, 88","0, 32, 64","0, 32, 60"], 
        correctAnswer:2 },
      {
        id: "m9-9", 
        text:"Tokzordan 3 ta savatga husayni va 2 ta yashikka toifi uzildi. Har bir savatdagi husayni 6 kg, har bir yashikdagi toifi 8 kg. Hammasi bo‘lib necha kilogramm uzum uzilgan?", 
        options:["14 kg","19 kg","30 kg","34 kg"], 
        correctAnswer:3 },
      {
        id: "m9-9", 
        text:"Quyidagi amallarni qaysi biri 80 dan kichik?", 
        options:["12 · 7","10 · 7","9 · 9","10 · 9"], 
        correctAnswer:1 },
      {
        id: "m9-9", 
        text:"Shuhrat uydan maktabga borguncha 500 m yo‘l yuradi. U maktabga borib kelish uchun ikki kunda necha kilometr yo‘l yuradi?", 
        options:["2","4","1","3"], 
        correctAnswer:0 },
      {
        id: "m9-9", 
        text:"Kutubxonaga 9 ta hikoya, undan 6 ta ortiq ertak kitob keltirildi. Kutubxonaga hammasi bo‘lib nechta kitob keltirilgan?", 
        options:["24","26","20","15"], 
        correctAnswer:0 },
      {
        id: "m9-9", 
        text:"Jadvalni to’ldiring.",
        imageUrl:"/images/ko'paytirish-22.png", 
        options:["72, 84, 112","62, 74, 72","612, 127, 716","72, 84, 114"], 
        correctAnswer:0 },
      {
        id: "m9-9", 
        text:"Quyidagi amallarni qaysi biri 81 dan katta?", 
        options:["27 · 3","13 · 6","12 · 7","12 · 5"], 
        correctAnswer:2 },
      {
        id: "m9-9", 
        text:"Tikuvchi 6 ta paltoga 5 tadan va 9 ta kastumga 4 tadan tugma qadadi. Tikuvchi hammasi bo‘lib nechta tugma qadagan?", 
        options:["30","36","84","66"], 
        correctAnswer:3 },
      {
        id: "m9-9", 
        text:"Quyidagi amallarni qaysi biri 75 ga teng?", 
        options:["15 · 6","15 · 5","37 · 3","15 · 6"], 
        correctAnswer:1 },
      {
        id: "m9-9", 
        text:"Taomga 4 dona piyoz, piyozga qaraganda 2 dona ko‘p sabzi, sabzidan 4 marta ko‘p kartoshka solindi. Taomga qancha kartoshka solingan?", 
        options:["16","30","34","24"], 
        correctAnswer:3 },
      {
        id: "m9-9", 
        text:"Quyidagi amallarni qaysilari 60 dan kichik? 1) 9 · 6  2) 8 · 7  3) 7 · 10  4) 9 · 7", 
        options:["1; 3; 4","1; 2","2; 3; 4","2; 3"], 
        correctAnswer:1 },
      {
        id: "m9-9", 
        text:"Gulnozaga o‘rtog‘i ikkita disk sovg‘a qildi. Birinchi diskda 3 ta multfilm, ikkinchi diskda esa undan 3 marta ko‘p multfilm yozilgan. Ikkala diskda nechta multfilm yozilgan?", 
        options:["12","9","6","10"], 
        correctAnswer:0 },
      {
        id: "m9-9", 
        text:"Mashinada har biri 13 kg dan bo‘lgan 6 yashik uzum bor edi. Do‘konga 4 yashik uzum tushirildi. Mashinada necha kilogramm uzum qoldi?", options:["96 kg","78 kg","52 kg","26 kg"], 
        correctAnswer:3 },
      {
        id: "m9-9", 
        text:"Bitta usta bir kunda 7 ta stul yig‘adi. 3 ta usta 6 kunda nechta stul yig‘adi?", 
        options:["56 ta","84 ta","126 ta","42 ta"], 
        correctAnswer:2 },
      {
        id: "m9-9", 
        text:"Do‘konga har birida 6 kg dan bo‘lgan 14 quti konfet keltirildi. Bir haftada 11 quti konfet sotildi. Sotilmagan necha kilogramm konfet qoldi?", 
        options:["66 kg","18 kg","84 kg","150 kg"], 
        correctAnswer:1 },
      {
        id: "m9-9", 
        text:"Aziza va Gulnoza bir xil kitobni o’qishni boshlashdi. Aziza birinchi kuni kitobning 8 betini, ikkinchi kuni birinchi kundagidan 3 bet ortiq o‘qidi. Gulnoza birinchi kuni kitobning 8 betini, ikkinchi kuni birinchi kundagidan 3 marta ortiq bet o‘qidi. Shu ikki kunda Gulnoza Azizadan necha bet ko’p kitob o‘qigan?", 
        options:["Ular teng miqdorda o’qishgan","11","13","18"], 
        correctAnswer:2 },
    ]
  },
  {
    id: "m10-10",
    subject: "matematika",
    grade: 3,
    topic: "Ko’paytmani topish",
    questions: [
      {
        id: "m10-10", 
        text:"Narsalar sonini ko’paytirish orqali hisoblang",
        imageUrl:"/images/Ko’paytmani topish-1.png", 
        options:["4 × 3 = 12","4 × 4 = 16","3 × 3 = 9"], 
        correctAnswer:0 },
      {
        id: "m10-10", 
        text:"Ushbu tenglikda 66 nimani bildiradi? 2 × 33 = 66", 
        options:["bo’linma","ko’paytma","ko’paytuvchi","bo’linuvchi"], 
        correctAnswer:1 },
      {
        id: "m10-10", 
        text:"Narsalar sonini ko’paytirish orqali hisoblang. 3 ta guruhning har birida 4 kishi bo’lsa, jami necha kishi bor?", 
        options:["4 × 2 = 8","4 × 3 = 12","3 × 3 = 9"], 
        correctAnswer:1 },
      {
        id: "m10-10", 
        text:"Yig’indisi va ko’paytmasi teng bo’lgan uchta sonni toping.", 
        options:["2, 2, 2","2, 3,","3, 3, 3","1, 2, 3"], 
        correctAnswer:3 },
      {
        id: "m10-10", 
        text:"Qaysi ko’paytirish xato bajarilgan?", 
        options:["4 × 30 =120","3 × 30 = 90","5 × 20 = 100","90 × 3 = 180"], 
        correctAnswer:3 },
      {
        id: "m10-10", 
        text:"Birinchi ko‘paytuvchi 6, ikkinchi ko‘paytuvchi 7, ko‘paytmani toping.", 
        options:["36","32","42","49"], 
        correctAnswer:2 },
      {
        id: "m10-10", 
        text:"Qaysi ko’paytirish xato bajarilgan?", 
        options:["70 × 5 = 350","80 000 × 9 =720 000","100 000 × 8 = 80 000","3 000 × 7 = 21 000"], 
        correctAnswer:2 },
      {
        id: "m10-10", 
        text:"Bo’sh kataklarni to’ldiring",
        imageUrl:"/images/Ko’paytmani topish-2.png", 
        options:["15, 150, 1500, 15000","15, 150, 150, 1500","150, 1500, 15, 15 000"], 
        correctAnswer:0 },
      {
        id: "m10-10", 
        text:"Bo’sh kataklarni to’ldiring",
        imageUrl:"/1-sinf_images/images/Ko’paytmani topish-3.png", 
        options:["2, 20, 2000","2, 2, 200,","2, 2, 2"], 
        correctAnswer:2 },
      {
        id: "m10-10", 
        text:"Jadvalni to’ldiring. qoida: 7 ga ko’paytiring.",
        imageUrl:"/images/Ko’paytmani topish-4.png", 
        options:["14, 35, 63","28, 35, 63","14, 28, 35"], 
        correctAnswer:2 },
      {
        id: "m10-10", 
        text:"Maktabning hikoya yozish kursida 5 ta o’quvchi bor. O’tgan yili har bir o’quvchi 7 tadan hikoya yozishdi. Jami nechta hikoya yozilgan?", 
        options:["35","30","12"], 
        correctAnswer:0 },
      {
        id: "m10-10", 
        text:"Jadvalni to’ldiring. qoida: 3 ga ko’paytiring.",
        imageUrl:"/images/Ko’paytmani topish-5.png", 
        options:["0, 18, 24, 30","0, 18, 21, 30","1, 18, 27, 30"], 
        correctAnswer:0 },
      {
        id: "m10-10", 
        text:"Masalalarni yeching Taqinchoqlar kompaniyasi 2 ta zumrad brasletni ishlab chiqardi. Har bir taqinchoqni tayyorlash uchun 4 ta zumraddan foydalanildi. Kompaniya jami nechta zumraddan foydalangan?", 
        options:["6","8","4"], 
        correctAnswer:1 },
      {
        id: "m10-10", 
        text:"To’g’ri to’rtburchakning eni 9 cm, bo’yi esa enidan 3 marta uzunroq. Shu to’g’ri to’rtburchakning perimetrini toping.", 
        options:["24 cm","27 cm","36 cm","72 cm"], 
        correctAnswer:3 },
      {
        id: "m10-10", 
        text:"Raqamlari turli eng kichik uch xonali sonni eng katta bir xonali songa ko’paytirish natijasini toping.", 
        options:["1107","1089","1080","918"], 
        correctAnswer:3 },
      {
        id: "m10-10", 
        text:"Ko’paytmasi 270 bo’lgan sonlarni tanlang: 3, 7, 9, 10, 14, 23, 30", 
        options:["9 va 30","7 va 30","3, 9 va 10","a va c javoblar"], 
        correctAnswer:3 },
      {
        id: "m10-10", 
        text:"Oziq-ovqat do’konidagi non sumkalarning har birida 2 tadan non bor. Sinfdoshlar bilan o’tkaziladigan bazmga 14 ta non sotib olish uchun, Dayton nechta non sumkasini sotib olishi kerak?", 
        options:["6","7","12","21"], 
        correctAnswer:1 },
      {
        id: "m10-10", 
        text:". Beki hovuz atrofini piyoda 6 minutda aylanib o’tdi. Beki 48 minutda hovuzni necha marta aylanib o’tishi mumkin?", 
        options:["6","7","8","9"], 
        correctAnswer:2 },
      {
        id: "m10-10", 
        text:"Namuna asosida ko‘paytmani toping",
        imageUrl:"/images/Ko’paytmani topish-6.png", 
        options:["16","32","64","40"], 
        correctAnswer:2 },
      {
        id: "m10-10", 
        text:"Quyidagilardan qaysi ifoda 6 · 7098 ko’paytmaning qiymatiga teng?", 
        options:["6∙7000+6∙900+6∙8","6∙7000+6∙90+6∙8","6∙70+6∙90+6∙8","6∙70+6∙98"], 
        correctAnswer:1 },
      {
        id: "m10-10", 
        text:"Erika 2 ta qutida ruchkalar sotib oldi. Har bir qutida 43 tadan ruchka bo’lsa, erika nechta ruchka sotib olgan?", 
        options:["83","86","84","82"], 
        correctAnswer:1 },
      {
        id: "m10-10", 
        text:"Zoy 2 ta yoqutli taqinchoq tayyorladi. U har bir taqinchoq uchun 12 ta yoqutdan foydalangan bo’lsa, jami nechta yoqutdan foydalangan?", options:["24","22","20","21"], 
        correctAnswer:0 },
      {
        id: "m10-10", 
        text:"Ko’paytirishni bajaring. 230 × 3 = ___", 
        options:["609","660","690","960"], 
        correctAnswer:2 },
      {
        id: "m10-10", 
        text:"Kutubxonaga 9 ta hikoya, undan 6 marta ko‘p ertak kitob keltirildi. Kutubxonaga hammasi bo‘lib nechta kitob keltirilgan?", 
        options:["54","58","63","66"], 
        correctAnswer:2 },
      {
        id: "m10-10", 
        text:"Avtomobil katta ko’chadan 3 soat 90 km/h tezlik bilan, so’ng esa 2 soat tosh ko’chadan 50 km/h tezlik bilan yurdi. Avtomobil qancha masofani bosib o’tdi?", 
        options:["270 km","300 km","350 km","370 km"], 
        correctAnswer:3 },
      {
        id: "m10-10", 
        text:"Ko’paytirishni bajaring. 627 × 4 = ___", 
        options:["2 518","2 508","2 506","2 516"], 
        correctAnswer:1 },
      {
        id: "m10-10", 
        text:"Ko’paytirishni bajaring. 817 × 7 = ___", 
        options:["5 719","5 729","5 709","5 729"], 
        correctAnswer:0 },
      {
        id: "m10-10", 
        text:"Nonvoy 4 xil turdagi non pishiradi. Just Sip Avayl kafesi har bir turdagi nondan 221 tadan buyurtma berdi. Nonvoy jami qancha buyurtma oldi?", 
        options:["884","888","874","864"], 
        correctAnswer:0 },
      {
        id: "m10-10", 
        text:"Ushbu aa · a = 176 ko’paytmada 2 xonali songa bir xonali son ko’paytirilmoqda. Agar hamma a harfi bilan belgilangan raqamlar bir xil bo’lsa, o’sha raqamni toping ", 
        options:["2","3","6","4"], 
        correctAnswer:3 },
      {
        id: "m10-10", 
        text:"Shifoxona 3 quti paxta shimg’ichlariga buyurtma berdi. Har bir qutida 313 ta paxtali shimgichlar bo’lsa, jami nechta shimg’ichga buyurtma berilgan?", 
        options:["949","939","936","929"], 
        correctAnswer:1 },
      {
        id: "m10-10", 
        text:"Ikki bir xil sonning ko’paytmasiga teng bo’lgan sonlar to’la kvadratlar deyiladi. Masalan, 144 to’la kvadrat, chunki 12 sonini 12 ga ko’paytirsa 144 ga teng chiqadi. 2 dan 20 gacha nechta to’la kvadrat mavjud?", 
        options:["0","1","2","3"], 
        correctAnswer:3 },
      {
        id: "m10-10", 
        text:"Ko’paytirishni bajaring. 4 × 5 × 8 = __", 
        options:["80","160","140","70"], 
        correctAnswer:1 },
      {
        id: "m10-10", 
        text:"Ko’paytirishni bajaring. 5 × 6 × 5 = ___", 
        options:["150","160","140","170"], 
        correctAnswer:0 },
      {
        id: "m10-10", 
        text:". Ko’paytirishni bajaring. 1 × 1 × 5 × 5 = ___", 
        options:["24","26","25","23"], 
        correctAnswer:2 },
      {
        id: "m10-10", 
        text:"Yozgi ta’til vaqtida 12 ta o’quvchi fermer xo’jaligiga 10 kun davomida meva terishga yordamlashdi. Har bir o’quvchi 1 kunda 150 kg dan meva terdi. O’quvchiga terilgan har bir kilogramm meva uchun 400 so’mdan pul berildi. 12 ta o’quvchiga 1 kunda necha so’m to’landi?", 
        options:["720 000","7 200 000","480 000","960 000"], 
        correctAnswer:0 },
      {
        id: "m10-10", 
        text:"Bir aeroportda 5 ta samalyot bor. Har bir samalyotda 5 ta qator bo’lib, har bir qatorda 3 tadan o’rindiq mavjud. Aeroport bir vaqtda qancha yo’lovchiga xizmat ko’rsatishi mumkin.", 
        options:["60","75","45","65"], 
        correctAnswer:1 },
      {
        id: "m10-10", 
        text:"Dustin har bir o’rgan maysazori uchun £4 dan pul ishlaydi. U har kuni 2 ta maysazorni o’radi. Agar dustin 3 kun maysazorlarni o’rsa, qancha pul ishlab topadi?", 
        options:["24","21","28","14"], 
        correctAnswer:0 },
      {
        id: "m10-10", 
        text:"G’isht ishlab chiqaruvchi korxona g’ishtlarni eniga 5 ta, bo’yiga 6 ta va balandligiga 10 tadan qilib birlashtirmoqda. Har bir birlashmada nechta g’isht bo’ladi?", 
        options:["320","300","350","330"], 
        correctAnswer:1 },
      {
        id: "m10-10", 
        text:". Qandolat do’koni har bir shokolad bo’lagi uchun £1 narx qo’ydi. Idishdagi shokolad eniga 3 ta va bo’yiga 2 bo’lakga bo’linadi. 4 ta shunday idishdagi shokolad qanchaga sotiladi (£)?", 
        options:["24","48","12","42"], 
        correctAnswer:0 },
      {
        id: "m10-10", 
        text:"Ko’paytirishni bajaring. 83 × 18 = ___", 
        options:["1 584","1 494","1 484","1 394"], 
        correctAnswer:1 },
      {
        id: "m10-10", 
        text:"Ko’paytirishni bajaring. 33 × 87 = ___", 
        options:["2 871","2 861","2 874","2 781"], 
        correctAnswer:0 },
      {
        id: "m10-10", 
        text:"Ko’paytirishni bajaring. 50 × 63 = __", 
        options:["3 250","3 150","3 140","3 250"], 
        correctAnswer:1 },
      {
        id: "m10-10", 
        text:"O‘lchamlari 24 m, 30 m va 450 dm bo‘lgan to‘g‘ri burchakli parallelepipedning hajmini toping.", 
        options:["32400 m<sup>3</sup>","33400 m<sup>3</sup>","31400 m<sup>3</sup>","22400 m<sup>3</sup>"], 
        correctAnswer:0 },
      {
        id: "m10-10", 
        text:"Qaysi ko’paytirish xato bajarilgan?", 
        options:["28 × 12 =326","95 × 62 = 5 890","18 × 57 = 1 026","93 × 19 = 1 767"], 
        correctAnswer:0 },
      {
        id: "m10-10", 
        text:"Ikki son ko‘paytmasidan 72 soni hosil qilindi. Buni necha usulda amalga oshirish mumkin? (4*18 va 18*4 bitta usul deb qaraladi)", 
        options:["4","5","6","8"], 
        correctAnswer:2 },
      {
        id: "m10-10", 
        text:"Komilbek yangi uy sotib oldi. U o’z ismini uyning tomiga rasmda ko’rsatilgani kabi yozdirdi. Unli harflarning bir donasini o’rnatish 750 000 so’mdan, undosh harflarni bir donasini o’rnatish 900 000 so’mdan tushdi. Bino ustiga KOMILBEK deb yozdirish uchun jami qancha xarajat qilingan?",
        imageUrl:"/images/Ko’paytmani topish-7.png", 
        options:["6 450 000 so’m","6 500 000 so’m","6 650 000 so’m","6 750 000 so’m"], 
        correctAnswer:3 },
      {
        id: "m10-10", 
        text:"To’g’ri to’rtburchakning perimetri 36 ga, bo’yi 10 ga teng, uning yuzini toping", 
        options:["80","84","70","78"], 
        correctAnswer:0 },
    ],
  },
  {
    id: "m11-11",
    subject: "matematika",
    grade: 3,
    topic: "Bo’lish tushunchasi va bo’lish ko’nikmasini shakillantirish",
    questions: [
      {
        id: "m11-11", 
        text:"Modellash bo'yicha jumlani to'ldiring. 8 ta kvadratni _ tadan qilib guruhlab chiqilgan, natijada _ta kvadratlar guruhi hosil bo'lgan.",
        imageUrl:"/images/Bo'lish tushunchasi-1.png", 
        options:["2,3","4,2","4,4"," 4,3"], 
        correctAnswer:1 },
      {
        id: "m11-11", 
        text:"Oshxonada 181 paxta yog'i bor edi. Uni ikki bidonga teng qilib quyildi. Har bir bidonga necha litr paxta yog'i quyilgan?", 
        options:["16 <i>l</i>","14 <i>l</i>","10 <i>l</i>","9 <i>l</i>"], 
        correctAnswer:3 },
      {
        id: "m11-11", 
        text:"Modellash bo'yicha jumlani to'ldiring. 25 ta kvadratni ____tadan qilib guruhlab chiqilgan, natijada ___ta kvadratlar guruhi hosil bo'lgan.",
        imageUrl:"/images/Bo'lish tushunchasi-2.png", 
        options:["5,5","4,5","5,6","4,6"], 
        correctAnswer:0 },
      {
        id: "m11-11", 
        text:"1 ta sariq koptokcha massasi nechta qizil koptokcha massasiga teng?",
        imageUrl:"/images/Bo'lish tushunchasi-3.png", 
        options:["1","2","3","4"], 
        correctAnswer:1 },
      {
        id: "m11-11", 
        text:"Bolalar bog'chasi uchun 20 ta qoʻgʻirchoq olib kelindi. Ular 4 ta guruhga baravar qilib taqsimlandi. Har bir guruhga nechtadan qo'g'irchoq berildi?", 
        options:["5 ta","8 ta","10 ta","16 ta"], 
        correctAnswer:0 },
      {
        id: "m11-11", 
        text:" Rasmga ko'ra bo'lish amalini yozing.",
        imageUrl:"/images/Bo'lish tushunchasi-4.png", 
        options:["5 × 10 = 50","50 : 10 = 5","45 : 9 = 5 ","45 : 5 = 9"], 
        correctAnswer:1 },
      {
        id: "m11-11", 
        text:"Qovunning massasi 6 kg, handalakning massasi undan 4 kg kam. Qovunning massasi handalaknikidan necha marta ortiq?", 
        options:["1","2","3","4"], 
        correctAnswer:2 },
      {
        id: "m11-11", 
        text:"Rasmga ko'ra bo'lish amalini yozing.",
        imageUrl:"/images/Bo'lish tushunchasi-5.png", 
        options:["2 × 10 = 20","20 : 4 = 5","20 : 2 = 10","20 : 5 = 4"], 
        correctAnswer:2 },
      {
        id: "m11-11", 
        text:"Har ikki tenglikni qanoatlantiruvchi sonni toping 4 × __=28  ; 28 : 4 =___",
        imageUrl:"/images/Bo'lish tushunchasi-6.png", 
        options:["7","6","4","5"], 
        correctAnswer:0 },
      {
        id: "m11-11", 
        text:"8 bilan 5 ni ko'paytmasini 4 marta kamaytiring", 
        options:["7","8","9","10"], 
        correctAnswer:3 },
      {
        id: "m11-11", 
        text:"Rasimga ko'ra bo'lish amalini yozing.",
        imageUrl:"/images/Bo'lish tushunchasi-7.png", 
        options:["12 : 4 = 3","10 : 2 = 5","10 : 2 = 8","12 : 5 = 7"], 
        correctAnswer:1 },
      {
        id: "m11-11", 
        text:"Rasimga ko'ra bo'lish amalini yozing",
        imageUrl:"/images/Bo'lish tushunchasi-8.png", 
        options:["45 : 5 = 9","27 : 3 = 9","36 : 4 = 9","9 × 5 = 45"], 
        correctAnswer:0 },
      {
        id: "m11-11", 
        text:"Agar 24 · 37 = 888 bo’lsa, 888 : 24 = ____ni toping.", 
        options:["24","36","37","13"], 
        correctAnswer:2 },
      {
        id: "m11-11", 
        text:"Agar 124 · 31 = 3 844 bo’lsa, 3 844 : 124 = ____ni toping.", 
        options:["124","31","32","93"], 
        correctAnswer:1 },
      {
        id: "m11-11", 
        text:"Bo’lishlar to’g’ri bajarilgan javobni toping. 14 : 2 = ___ ,30 : 3 = ___ ,15 : 3 = ___", 
        options:["7, 10, 5","13, 27, 12","3, 0, 3","12, 27, 12"], 
        correctAnswer:0 },
      {
        id: "m11-11", 
        text:"Bo’lishlar to’g’ri bajarilgan javobni toping. 27 : 3 = ___, 24 : 3 = ___, 40 : 4 = ___", 
        options:["9, 8, 10","10, 9, 11","11, 8, 10","24, 21, 36"], 
        correctAnswer:0 },
      {
        id: "m11-11", 
        text:"19 kg olma va 17 kg nokni har bir xaltaga 4 kgdan qilib joylandi. Nechta xalta kerakbo‘lgan?", 
        options:["6 ta","7 ta","8 ta","9 ta"], 
        correctAnswer:3 },
      {
        id: "m11-11", 
        text:"Bo’lishlar to’g’ri bajarilgan javobni toping.15 : 5 = ___, 45 : 5 = ___, 25 : 5 = ___", 
        options:["3, 9, 5","5, 2, 9","4, 9, 5","10, 40, 20"], 
        correctAnswer:0 },
      {
        id: "m11-11", 
        text:"Bo’lishlar to’g’ri bajarilgan javobni toping.12 : 6 = ___, 36 : 6 = ___, 48 : 6 = ___", 
        options:["2, 30, 8","6, 30, 42","2, 6, 8","2, 30, 42"], 
        correctAnswer:2 },
      {
        id: "m11-11", 
        text:"Bir tup limondan 26 ta, ikkinchi tupdan 16 ta limon uzildi. Hamma limonlar 7 ta qog‘oz xaltaga baravardan solindi. Har bir xaltaga nechtadan limon solingan?", 
        options:["17 ta","35 ta","3 ta","6 ta"], 
        correctAnswer:3 },
      {
        id: "m11-11", 
        text:"Nodirning bobosi 72 yoshda. Nodirning yoshi bobosinikidan 8 marta kichik. Nodir necha yoshda?", 
        options:["64","8","80","9"], 
        correctAnswer:3 },
      {
        id: "m11-11", 
        text:"Bo’lishlar to’g’ri bajarilgan javobni toping. 48 : 8 = ___, 32 : 8 = ___, 90 : 9 = ___", 
        options:["6, 4, 10","5, 3, 9","4, 2, 8","40, 24, 81"], 
        correctAnswer:0 },
      {
        id: "m11-11", 
        text:"Musobaqada 26 nafar o‘g‘il bola va 10 nafar qiz bola qatnashmoqda. Ular 9 nafardan bo‘lib guruhlarga bo‘linishdi. Bolalar nechta guruhga bo‘linishgan?", 
        options:["27 ta","4 ta","17 ta","1 ta"], 
        correctAnswer:1 },
      {
        id: "m11-11", 
        text:"Omborda 27 ta belkurak, undan 3 marta kam xaskash bor. Omborda hammasi bo‘lib nechta ish asbobi bor?", 
        options:["51 ta","24 ta","9 ta","36 ta"], 
        correctAnswer:3 },
      {
        id: "m11-11", 
        text:"Bo’lishlar to’g’ri bajarilgan javobni toping.40 : 10 = ___, 90 : 10 = ___, 30 : 10 = ___", 
        options:["2, 3, 9","3, 4, 9","4, 9, 3","36, 81, 20"], 
        correctAnswer:2 },
      {
        id: "m11-11", 
        text:"Barno 9 yoshda, buvisi 63 yoshda. Buvisining yoshi Barnonikidan necha marta ortiq?", 
        options:["54","6","8","7"], 
        correctAnswer:3 },
      {
        id: "m11-11", 
        text:"Bo’lishlar to’g’ri bajarilgan javobni toping.33 : 11 = ___, 121 : 11 = ___, 66 : 11 = ___", 
        options:["2, 11, 3","3, 11, 6","11, 6, 3","22, 110, 55"], 
        correctAnswer:1 },
      {
        id: "m11-11", 
        text:"Bo’lishlar to’g’ri bajarilgan javobni toping.84 : 12 = ___, 72 : 12 = ___, 420 : 2 = ___", 
        options:["6, 4, 210","7, 6, 210","4, 6, 210","72, 60, 418"], 
        correctAnswer:1 },
      {
        id: "m11-11", 
        text:"Ustaxonada 30 ta stul va stullardan 5 marta kam stollar tayyorlandi. Hammasi bo‘lib nechta stol va stul tayyorlangan?", 
        options:["6 ta","24 ta","35 ta","36 ta"], 
        correctAnswer:3 },
      {
        id: "m11-11", 
        text:"Do‘konga 246 kg un keltirildi va paketlarga 2 kg dan solib chiqildi. Keltirilgan un nechta paketga solingan?", 
        options:["121 ta","122 ta","123 ta","124 ta"], 
        correctAnswer:2 },
      {
        id: "m11-11", 
        text:"Bog‘ barpo qilish uchun 96 tup olma ko‘chatini olib kelishdi. Har bir qatorga 8 tadan ko‘chat ekildi. Ko‘chatlar necha qatorga ekilgan?", 
        options:["11","12","13","14"], 
        correctAnswer:1 },
      {
        id: "m11-11", 
        text:"Ustaxonada 6 kunda 72 ta eshik yasaldi. Har kuni bir xil miqdorda eshik tayyorlangan bo‘lsa, bir kunda nechtadan eshik yasalgan?", 
        options:["10 ta","11 ta","12 ta","13 ta"], 
        correctAnswer:2 },
      {
        id: "m11-11", 
        text:"Polizdan uzilgan bodringlarni 72 kilogrami 8 kg dan qilib, 54 kilogrami 6 kg dan qilib yashiklarga joylandi. Bodringlar jami nechta yashikka joylangan?", 
        options:["36 ta","6 ta","9 ta","18 ta"], 
        correctAnswer:3 },
      {
        id: "m11-11", 
        text:"To’g’ri to’rtburchakning noma’lum tomoni uzunligini toping. Yuzi 42 ga va bir tomon 7 ga teng.",
        imageUrl:"/images/Bo'lish tushunchasi-9.png", 
        options:["5 m","6 m","8 cm","6 cm"], 
        correctAnswer:1 },
      {
        id: "m11-11", 
        text:"45 kg pomidor 15 ta bir xil bankaga solib tuzlandi. 96 kg pomidorni tuzlash uchun nechta shunday banka kerak bo‘ladi?", 
        options:["40 ta","16 ta","4 ta","32 ta"], 
        correctAnswer:3 },
      {
        id: "m11-11", 
        text:"Termometr bilan havo harorati sutka davomida o’lchanganda, u ertalab +180 C, tushda +250 C, kechqurun + 210 C va kechasi +120 C ni ko’rsatdi. Sutkalik o’rtacha haroratni aniqlang.", 
        options:["18<sup>0</sup>C","20<sup>0</sup>C","22<sup>0</sup>C","19<sup>0</sup>C"], 
        correctAnswer:3 },
      {
        id: "m11-11", 
        text:"Toshkentdan Jizzaxgacha bo‘lgan 213 km masofani «Spark» avtomobili 3 soatda bosib o‘tdi. U 1 soatda o‘rtacha necha kilometr yo‘l yurgan?", 
        options:["71 km","72 km","73 km","74 km"], 
        correctAnswer:0 },
      {
        id: "m11-11", 
        text:"Birinchi olcha daraxtidan 48 kg, ikkinchi daraxtdan esa undan 36 kg kam olcha terib olindi. Birinchi tupdagi olcha ikkinchi tupdan terilgan olchadan necha marta ortiq?", 
        options:["12","3","5","4"], 
        correctAnswer:3 },
      {
        id: "m11-11", 
        text:"Do‘konda birinchi kuni 25 kg, ikkinchi kuni birinchi kundagidan 20 kg ortiq konfet sotildi. Agar har bir qutida 5 kg dan konfet bo‘lsa, ikki kunda necha quti sotilgan?", 
        options:["70 quti","65 quti","14 quti","12 quti"], 
        correctAnswer:2 },
      {
        id: "m11-11", 
        text:"Otliq bir xil tezlik bilan 65 km yurdi. U buloqqacha 3 soat, buloqdan so‘ng yana 2 soat yurdi. Otliq buloqdan so‘ng necha kilometr yurgan?", 
        options:["13 km","52 km","39 km","26 km"], 
        correctAnswer:3 },
    ]
  },
  {
    id: "m12-12",
    subject: "matematika",
    grade: 3,
    topic: "Bo’linmani topish",
    questions: [
      {
        id: "m12-12", 
        text:"Bo’linmaning to’g’riligi qanday tekshiriladi?", 
        options:["bo’linma bo’luvchiga ko’paytiriladi","bo’linma bo’luvchiga bo’linadi","bo’linma bo’luvchiga qo’shiladi","bo’linma bo’luvchiga ayriladi"], 
        correctAnswer:0 },
      {
        id: "m12-12", 
        text:"Bo’lishni bajaring. 20 : 5 = ___", 
        options:["4","5","3","6"], 
        correctAnswer:0 },
      {
        id: "m12-12", 
        text:"Bo’lishni bajaring. 70 : 10 = ___", 
        options:["9","10","7","8"], 
        correctAnswer:2 },
      {
        id: "m12-12", 
        text:"To’g’ri bajarilgan amalni toping.", 
        options:["90 : 10 = 8","6 : 2 = 3","5 : 5 = 2","12 : 3 = 9"], 
        correctAnswer:1 },
      {
        id: "m12-12", 
        text:"To’g’ri bajarilgan amallarni toping. 1. 12 : 2 = 6;  2. 30 : 10 = 3", 
        options:["1","2","1 va 2","hech biri"], 
        correctAnswer:2 },
      {
        id: "m12-12", 
        text:"To’g’ri bajarilgan amallarni toping.1. 40 : 8 = 5;   2. 28 : 4 = 8;  3. 27 : 3 = 9;  4. 30 : 3 = 10", 
        options:["1, 2, 3","1, 3, 4","1 va 3","1 va 4"], 
        correctAnswer:1 },
      {
        id: "m12-12", 
        text:"Ushbu ko’paytma to’g’ri bo’lishi uchun kataklarga joylanishi lozim bo’lgan raqamlar yig’indisini toping.",
        imageUrl:"/images/bo'lunmani topish-1.png", 
        options:["10","6","5","3"], 
        correctAnswer:3 },
      {
        id: "m12-12", 
        text:"Quyidagi amallarni qaysi biri 9 dan katta?", 
        options:["27 : 9","54 : 6","40 : 4","28 : 4"], 
        correctAnswer:2 },
      {
        id: "m12-12", 
        text:"Qaysi son 14 ga bo‘linmaydi?", 
        options:["70","42","28","24"], 
        correctAnswer:3 },
      {
        id: "m12-12", 
        text:"Rasmdan foydalanib so’roq o’rnidagi sonni toping.",
        imageUrl:"/images/bo'lunmani topish-2.png", 
        options:["82 ta","40 ta","21 ta","63 ta"], 
        correctAnswer:3 },
      {
        id: "m12-12", 
        text:"Quyidagi amalni tekshiring? 60 : 6 = 12", 
        options:["to’g’ri","xato","bilmayman","to’g’ri javob yo’q"], 
        correctAnswer:1 },
      {
        id: "m12-12", 
        text:"Toshkent va Bekobod shaharlari orasidagi masofa 144 km. Yengil mashina bu yo‘lni72 km/soat tezlik bilan bosib o‘tadi. Yengil mashina bu masofani qancha vaqtda bosib o’tgan?", 
        options:["4 soat","3 soat","2 soat","5 soat"], 
        correctAnswer:2 },
      {
        id: "m12-12", 
        text:"Quyidagi amallarni qaysi biri 4 dan kichik?", 
        options:["16 : 4","18 : 3","24 : 8","8 : 2"], 
        correctAnswer:2 },
      {
        id: "m12-12", 
        text:"Kvadratning perimetri 96 dm bo’lsa, uning tomonini toping.", 
        options:["23 dm","24 cm","24 dm","36 dm"], 
        correctAnswer:2 },
      {
        id: "m12-12", 
        text:"Noma’lum sonlarni toping. __ : 4 = 2, 8 : __ = 1, 18 : __= 6", 
        options:["8, 8, 3","8, 8, 4","8, 7, 6","8, 7, 2"], 
        correctAnswer:0 },
      {
        id: "m12-12", 
        text:"2023-yil fevral oyi 28 kundan iborat bo’lgan. 2023-yil fevral oyidagi kunlar soni bir haftadagi kunlar sonining necha barobariga teng?", 
        options:["4 marta","7 marta","21 marta","35 marta"], 
        correctAnswer:0 },
      {
        id: "m12-12", 
        text:"Noma’lum sonlarni toping. __ : 3 = 1, 30 : __ = 3, 48 : __= 6", 
        options:["3, 8, 8","4, 9, 8","3, 10, 8","4, 8, 8"], 
        correctAnswer:2 },
      {
        id: "m12-12", 
        text:"70 sonini bir necha marta orttirib, 630 hosil qilindi. 70 soni necha marta orttirilgan?", 
        options:["7","8","9","10"], 
        correctAnswer:2 },
      {
        id: "m12-12", 
        text:"To’g’ri bajarilgan amallarni toping. 1. 144 : 12 = 12 2. 11 : 11 = 1", 
        options:["1","2","1 va 2","hammasi xato"], 
        correctAnswer:2 },
      {
        id: "m12-12", 
        text:"Samolyot 6 soatda 4500 km masofani uchib o`tishi uchun qanday tezlik bilan yurishi kerak?", 
        options:["900 km/soat","750 km/soat","800 km/soat","850 km/soat"], 
        correctAnswer:1 },
      {
        id: "m12-12", 
        text:"Qaysi ifoda 1 ga teng?", 
        options:["6 : 2","4 : 4","10 : 5","8 : 2"], 
        correctAnswer:1 },
      {
        id: "m12-12", 
        text:"Bir kilometr bir metrdan ming marta katta bo`lsa, 50 kilometr 50 metrdan necha marta katta bo`ladi.", 
        options:["50000","5000","1000","500"], 
        correctAnswer:2 },
      {
        id: "m12-12", 
        text:"Qaysi ifoda 3 ga teng?  1. 36 : 9, 2. 27 : 9, 3. 18 : 6, 4. 40 : 20", 
        options:["1, 2","2, 3","2, 3, 4","1, 2, 4"], 
        correctAnswer:1 },
      {
        id: "m12-12", 
        text:"Qaysi ifoda 8 ga teng?", 
        options:["70 : 7","8 : 4","24 : 3","16 : 4"], 
        correctAnswer:2 },
      {
        id: "m12-12", 
        text:"To’g’ri tenglikni toping. 1. 49 : 7 = 80 : 10, 2. 8 : 2 = 48 : 12", 
        options:["1","2","1 va 2","ikkalasi ham xato"], 
        correctAnswer:1 },
      {
        id: "m12-12", 
        text:"Jadvalni to’ldiring.",
        imageUrl:"/images/bo'lunmani topish-3.png", 
        options:["5,56,196,7","5,56,194,7","5,54,196,7","5, 54, 194, 7"], 
        correctAnswer:0 },
      {
        id: "m12-12", 
        text:"Nol bilan tugovchi sonlarni bo’ling. 490:7", 
        options:["71","80","70","81"], 
        correctAnswer:2 },
      {
        id: "m12-12", 
        text:"Nol bilan tugovchi sonlarni bo’ling. 5400:6", 
        options:["90","900","901","91"], 
        correctAnswer:1 },
      {
        id: "m12-12", 
        text:"Nol bilan tugovchi sonlarni bo’ling. 4000:2", 
        options:["2000","200","2001","201"], 
        correctAnswer:0 },
      {
        id: "m12-12", 
        text:"1200 va 400 sonlarining bo’linmasini 200 ta orttiring.", 
        options:["600","203","700","800"], 
        correctAnswer:1 },
      {
        id: "m12-12", 
        text:"Bo’sh katakdagi sonlarni toping.",
        imageUrl:"/images/bo'lunmani topish-4.png", 
        options:["1,10,100,10000","1,10,100,1000","1,10,1000,10000","1, 1, 1, 1"], 
        correctAnswer:1 },
      {
        id: "m12-12", 
        text:"Jadvalni to’ldiring. Qoida 5 ga bo’lish.",
        imageUrl:"/images/bo'lunmani topish-5.png", 
        options:["1,2,4","1,2,3","5,2,3","1, 3, 4"], 
        correctAnswer:1 },
      {
        id: "m12-12", 
        text:"Jadvalni to’ldiring. Qoida 8 ga bo’lish.",
        imageUrl:"/images/bo'lunmani topish-6.png", 
        options:["6,7,8","5,7,8","5,6,8","5, 6, 7"], 
        correctAnswer:2 },
      {
        id: "m12-12", 
        text:"48 kg shakarning yarmi 3 kg li, qolgani 4 kg li paketlarga solindi. Shakar nechta paketga solingan?", 
        options:["11 ta","12 ta","13 ta","14 ta"], 
        correctAnswer:3 },
      {
        id: "m12-12", 
        text:"Lila 7 ta poyezd yasash uchun 70 ta vagondan foydalandi. Har bir poyezddagi vagonlar soni bir xil. Har bir poyezdda nechtadan vagon bor?", 
        options:["10","12","7","9"], 
        correctAnswer:0 },
      {
        id: "m12-12", 
        text:"306 soni 674 730 sonidan necha marta kichik?", 
        options:["2 025","225","2 205","2 250"], 
        correctAnswer:2 },
      {
        id: "m12-12", 
        text:"Ikki raqami 4 bo’lgan uch xonali son 9 ga va 2 ga bo’linadi, ammo 5 ga bo’linmaydi. Shunday sonlarni toping.", 
        options:["144 va 414","441 va 414","414 va 404","424 va 440"], 
        correctAnswer:0 },
      {
        id: "m12-12", 
        text:"Paradda 14 ta raqqos 7 ta qatorga teng taqsimlanib raqsga tushdi. Har bir qatorda nechtadan raqqos bo’lgan?", 
        options:["2","3","7","5"], 
        correctAnswer:0 },
      {
        id: "m12-12", 
        text:"Regan darama klubi uchrashuviga 40 ta shkoladli kulcha olib bordi. Agar kulchalarni 4 ta klub a’zosi teng bo’lishib olgan bo’lsa, har bir a’zo nechtadan kulcha yegan.", 
        options:["10","8","12","9"], 
        correctAnswer:0 },
      {
        id: "m12-12", 
        text:"Do‘konga har biri 50 kg dan bo‘lgan 10 ta qopda shakar keltirildi. Hamma shakar 100 ta paketga solib chiqildi. Har bir paketga necha kilogrammdan shakar solingan?", 
        options:["4 kg","40 kg","500 g","5 kg"], 
        correctAnswer:3 },
      {
        id: "m12-12", 
        text:"Kaylada Toshkent shahrining 50 ta fotosurati bor edi. Agar u suratlarni 10 ta do’stiga bir xil miqdorda bergan bo’lsa, har bir do’sti nechtadan surat olgan?", 
        options:["4","5","8","9"], 
        correctAnswer:1 },
      {
        id: "m12-12", 
        text:"Biror sonni 2 ga bo’lsak, bo’linma berilgan sondan 14ga farq qiladi. Berilgan sonning ikkilanganini toping.", 
        options:["7","14","28","9"], 
        correctAnswer:3 },
      {
        id: "m12-12", 
        text:"35 soni o’zining birlar xonasidagi raqamga bo’linadi. 35:5=7. Ammo 38 bunday xususiyatga ega emas. 38 soni 8 ga bo’linmaydi. 30 dan katta va 50 dan kichik, shunday xususiyatga ega sonlar nechta?", 
        options:["8","9","10","11"], 
        correctAnswer:2 },
      {
        id: "m12-12", 
        text:"Oralaridagi masofa 200 km bo'lgan A va B punktlardan bir vaqtning o'zida ikki turist bir-biriga qarab yo'lga chiqdi. Birinchisi avtobusda tezligi 40 km/soat, ikkinchisi avtomobilda. Agar ular 2 soatdan keyin uchrashsa, avtomobilning tezligini toping.", 
        options:["58 km/soat","55 km/soat","65 km/soat","60 km/soat"], 
        correctAnswer:3 },
      {
        id: "m12-12", 
        text:"Bo’linuvchi 8 marta orttirilsa, bo’linma qanday o’zgaradi?", 
        options:["8 marta ortadi","8 marta kamayadi","o’zgarmaydi","4 marta ortadi"], 
        correctAnswer:0 },
      {
        id: "m12-12", 
        text:"Bo’luvchi 12 marta orttirilsa, bo’linma qanday o’zgaradi?", 
        options:["12 marta ortadi","12 marta kamayadi","o’zgarmaydi","6 marta ortadi"], 
        correctAnswer:1 },
      {
        id: "m12-12", 
        text:"Bo’linuvchi 4 marta ortdi, bo’luvchi esa 12 marta ortdi. Bo’linma qanday o’zgaradi?", 
        options:["48 marta ortadi","48 marta kamayadi","3 marta ortadi","3 marta kamayadi"], 
        correctAnswer:3 },
      {
        id: "m12-12", 
        text:"Bo’linuvchi 4 marta ortdi, bo’luvchi esa 12 marta kamaydi. Bo’linma qanday o’zgaradi?", 
        options:["48 marta ortadi","48 marta kamayadi","3 marta ortadi","3 marta kamayadi"], 
        correctAnswer:0 },
      {
        id: "m12-12", 
        text:"Bo’linuvchi bo’linmadan 6 marta katta. Bo’linma esa bo’luvchidan 12 marta katta. Bo’linuvchini toping.", 
        options:["72","648","108","432"], 
        correctAnswer:3 },
      {
        id: "m12-12", 
        text:"Bo’luvchi bo’linuvchidan 14 marta, bo’linmadan 2 marta kichikroq. Bo’linuvchini toping.", 
        options:["56","49","28","98"], 
        correctAnswer:3 },
    ]
  },
  {
    id: "m13-13",
    subject: "matematika",
    grade: 3,
    topic: "Qoldiqli bo’lish",
    questions: [
      {
        id: "m13-13", 
        text:"Jadvalni to’ldiring.",
        imageUrl:"/images/Qoldiqli bo’lish-1.png", 
        options:["1, 8, 1, 6","1, 7, 0, 8","1, 7, 0, 6","1, 5, 0, 8"], 
        correctAnswer:2 },
      {
        id: "m13-13", 
        text:"Jadvalni to’ldiring.",
        imageUrl:"/images/Qoldiqli bo’lish-2.png", 
        options:["4, 0, 2, 3","4, 0, 3, 3","3, 0, 3, 3","3, 0, 4, 3"], 
        correctAnswer:1 },
      {
        id: "m13-13", 
        text:"Bo’lishni bajaring: 84 : 3", 
        options:["14","26","28","30"], 
        correctAnswer:2 },
      {
        id: "m13-13", 
        text:"Rahim, Nodir va Nozim 272 ta yong’oqni teng bo’lib olishmoqchi. Agar hamma do’st teng yong’oq olishgan bo’lsa, nechta yong’oq qoladi?", 
        options:["90","91","6","6"], 
        correctAnswer:3 },
      {
        id: "m13-13", 
        text:"Bo’lishni bajaring: 92 : 7", 
        options:["14","13 (1 qold.)","12 (8qold.)","9 (8qold.)"], 
        correctAnswer:1 },
      {
        id: "m13-13", 
        text:"Qoldiqli bo’lishni bajaring. 507:4", 
        options:["140 (5q)","130 (4q)","126 (3q)","150 (2q)"], 
        correctAnswer:2 },
      {
        id: "m13-13", 
        text:"312:19 ni qoldiqli bo’lish shaklida yozing.", 
        options:["312=19∙16+18","312=19∙16+9","312=19∙17-11","312=19∙16+8"], 
        correctAnswer:3 },
      {
        id: "m13-13", 
        text:"Shaharchaga yangi maydon qurish uchun 97 ta g’isht kerak. Agar har bir blokda 9 tadan g’isht bo’lsa, nechta g’isht blogi sotib olinishi kerak?", 
        options:["10","11","12","13"], 
        correctAnswer:1 },
      {
        id: "m13-13", 
        text:"243 ni qandaydir songa bo’lganda bo’linma 15 ga, qoldiq 3 ga teng chiqdi. Bo’luvchi nechaga teng?", 
        options:["17","16","18","19"], 
        correctAnswer:1 },
      {
        id: "m13-13", 
        text:"4 ga bo’lganda bo’linma 7 ga, qoldiq 3 ga teng chiqadigan sonni toping.", 
        options:["31","28","14","25"], 
        correctAnswer:0 },
      {
        id: "m13-13", 
        text:"To`liqsiz bo`linma 21ga , bo`luvchi 89 ga , qoldiq 13 ga teng bo`lsa, bo`linuvchini toping.", 
        options:["1882","1800","1982","1782"], 
        correctAnswer:0 },
      {
        id: "m13-13", 
        text:"Shunday sonni topingki, uni 17 ga bo‘lganda, 88 hosil bo‘lib, 11 qoldiq qolsin", 
        options:["1 480","1 511","1 507","2 511"], 
        correctAnswer:2 },
      {
        id: "m13-13", 
        text:"Tenglamani yeching:1840 : x = 102 (Qoldiq 4)", 
        options:["15","16","17","18"], 
        correctAnswer:3 },
      {
        id: "m13-13", 
        text:"Quyidagi sonlardan 5 ga qoldiqsiz bo’linadigan sonlarni toping  74, 405, 5 041, 958", 
        options:["405","74","958","5041"], 
        correctAnswer:0 },
      {
        id: "m13-13", 
        text:"7 ta yong‘oqni 3 o‘rtoq teng taqsimlab olishmoqchi bo‘lishdi. Bolalarning har biriga nechtadan yong‘oq tegadi?", 
        options:["4","1","2","3"], 
        correctAnswer:2 },
      {
        id: "m13-13", 
        text:"18 dona anor 4 ta likopchaga bir xilda qo‘yilishi kerak. Bitta likopchaga necha dona anor to‘g‘ri keladi? Necha donasi qoldiq sifatida ortib qoladi? (javoblarning ketma – ketligi muhim.)", 
        options:["4, 2","2, 4","5, 2","2, 5"], 
        correctAnswer:0 },
      {
        id: "m13-13", 
        text:"Uzunliklari 12 cm va 5 cm bo‘lgan ikkita kesma berilgan. Birinchi kesma uzunligi ikkinchi kesma uzunligiga bo‘linganda necha santimetrli kesma qoldiq sifatida qoladi?", 
        options:["7 cm","ortib qolmaydi","1 cm","2 cm"], 
        correctAnswer:3 },
      {
        id: "m13-13", 
        text:"Tarozining birinchi pallasida 3 ta bir xil handalak bor. Ikkinchi pallasiga shunday 1 ta handalak va 12 ta bir xil shaftolini qo‘ysak, tarozi pallalari tenglashadi. 1 ta handalak massasi nechta shaftolining massasiga teng?", 
        options:["11 ta","6 ta","3 ta","aniqlab bo’lmaydi"], 
        correctAnswer:1 },
      {
        id: "m13-13", 
        text:"100 kg uzum har bir yashikka 8 kg dan qilib joylansa, nechta yashik to’ladi? Necha kilogramm uzum ortib qoladi? (javoblarning ketma – ketligi muhim.)", 
        options:["11 ta, 12 kg","13 ta, 4 kg","12 ta, 4 kg","13 ta, 12 kg"], 
        correctAnswer:2 },
      {
        id: "m13-13", 
        text:"Gulzordan uzilgan 48 ta gulni 5 ta guldonga teng miqdorda taqsimlab solish kerak. Har bir guldonga necha donadan gul solinadi? Nechta gul qoldiq sifatida ortib qoladi?", 
        options:["9, 3","10, 2","3, 9","2, 10"], 
        correctAnswer:0 },
      {
        id: "m13-13", 
        text:"Agar a soni 5 ga bo’lganda 3 qoldiq qolsa, 2·a ni 5 ga bo’lgandagi qoldiqni toping.", 
        options:["3","1","6","4"], 
        correctAnswer:1 },
      {
        id: "m13-13", 
        text:"Qaysi tenglik qoldiqli bo’lishini ifodalaydi.", 
        options:["29 = 6 · 5 – 1","29 = 5 · 5 + 4","29 = 4 · 5 + 9","33 = 10 · 3 + 5"], 
        correctAnswer:1 },
      {
        id: "m13-13", 
        text:"2 ga bo‘linganda 1 qoldiq, 3 ga bo‘linganda 2 qoldiq, 4 ga bo‘linganda 3 qoldiq, 7 ga esa butun bo‘linadigan sonni toping.", 
        options:["131","49","35","109"], 
        correctAnswer:2 },
      {
        id: "m13-13", 
        text:"Birinchi daraxtdan 45 kg, ikkinchisidan 54 kg xurmo terib olindi. Xurmolar 8 ta yashikka bir xilda qilib joylandi. Necha kilogramm xurmo ortib qoldi?", 
        options:["ortmaydi","1 kg","2 kg","3 kg"], 
        correctAnswer:3 },
      {
        id: "m13-13", 
        text:"Tomonlari 9 cm va 5 cm bo‘lgan to‘g‘ri to‘rtburchakdan tomoni 3 scm bo‘lgan nechta kvadrat qirqib olish mumkin?", 
        options:["3","4","5","6"], 
        correctAnswer:0 },
      {
        id: "m13-13", 
        text:"Bozordan sotib olingan mandarinlar sanalganda 52 ta ekanligi ma’lum bo‘ldi. Ular 6 ta likopchaga teng taqsimlab chiqildi. Har bir likopchaga nechtadan mandarin qo‘yilgan?", 
        options:["7","8","9","10"], 
        correctAnswer:1 },
      {
        id: "m13-13", 
        text:"Berilgan sonlarning qaysi birini 15ga bo`lish natijasida eng kichik qoldiq chiqadi?", 
        options:["159","1544","543","241"], 
        correctAnswer:3 },
      {
        id: "m13-13", 
        text:"Savatdagi shirin kulchalar 8 nafar bolaga 4 tadan berilgandan keyin 3 ta qoldi. Savatda jami nechta shirin kulcha bor edi?", 
        options:["32","33","34","35"], 
        correctAnswer:3 },
      {
        id: "m13-13", 
        text:"3 ta xonaning har birida bittadan qandil bor. Har bir qandilga 5 tadan lampochka qo‘yilgan. Agar qandillardagi 2 ta lampochka kuygan bo‘lsa, yaroqli lampochkalar nechta?", 
        options:["17","15","14","13"], 
        correctAnswer:3 },
      {
        id: "m13-13", 
        text:"Yig’ilgan 770 t bug‘doy hosilini temiryo‘l orqali un zavodiga tashish kerak. Har bir yuk vagoniga 60 t bug‘doy sig‘adi. Hosilni zavodga tashish uchun nechta yuk vagoni kerak bo‘ladi?", 
        options:["15","14","13","12"], 
        correctAnswer:2 },
      {
        id: "m13-13", 
        text:"a sonni 7 ga bo’lganda 3 qoldiq qoldi, b sonni 7 ga bo’lganda ham 3 qoldiq qoldi. a va b sonlar yig’indisini 7 ga bo’lganda qanday qoldiq qoladi?", 
        options:["6","0","3","5"], 
        correctAnswer:0 },
      {
        id: "m13-13", 
        text:"39 ni bo’lganda, qoldiq 9 chiqadigan barcha natural sonlarning yig’indisini toping.", 
        options:["55","45","50","48"], 
        correctAnswer:0 },
      {
        id: "m13-13", 
        text:"Samolyotda 145 yo‘lovchi uchun o‘rindiq bor. Samolyotning 4 ta reysiga 514 ta chipta sotildi. Bu reyslarga yana nechta chipta sotish mumkin?", 
        options:["56","76","66","74"], 
        correctAnswer:2 },
      {
        id: "m13-13", 
        text:"Bitta choyshab tikishga 6 m mato sarflanadi. 200 m matodan nechta choyshab tikish mumkin?", 
        options:["33","66","44","55"], 
        correctAnswer:0 },
      {
        id: "m13-13", 
        text:"Qutidagi 10 kilogramm choy 150 grammdan qilib qadoqlandi. Qadoqlangandan so‘ng qutida qancha choy qoladi?", 
        options:["100 g","50 g","30 g","ortmaydi"], 
        correctAnswer:0 },
      {
        id: "m13-13", 
        text:"Shirinning 5000 so‘m puli bor. U bu puliga narxi 450 so‘m bo‘lgan muzqaymoqdan ko‘pi bilan nechta sotib olishi mumkin?", options:["11 ta","10 ta","12 ta","13 ta"], 
        correctAnswer:0 },
      {
        id: "m13-13", 
        text:"32 ta atirgul va 21 ta chinnigulni 5 ta guldonga bir xilda solish kerak. Har bir guldonga nechta atirgul va nechta chinnigul to‘g‘ri keladi?", 
        options:["6, 4","4, 6","5, 7","7, 5"], 
        correctAnswer:0 },
      {
        id: "m13-13", 
        text:"Maktab ma’muriyati har bir bitiruvchi o‘quvchiga sovg‘a qilish uchun 370 dona gul xarid qildi. Har bir o‘quvchiga 3 donadan gul berildi va 1 dona gul ortib qoldi. Maktab bitiruvchi o‘quvchilarining soni qancha?", 
        options:["124 ta","123 ta","122 ta","121 ta"], 
        correctAnswer:1 },
      {
        id: "m13-13", 
        text:"Botir buvisining tavallud kuniga guldasta sovg‘a qilish uchun gul bozoridan 55 dona gul xarid qildi. Guldasta uchun Botir sotuvchiga 10 000 so‘m pul berdi. Sotuvchi esa unga 100 so‘m qaytardi. Bir dona gul narxi qancha?", 
        options:["bunday bo’lmaydi","200 so’m","190 so’m","180 so’m"], 
        correctAnswer:3 },
      {
        id: "m13-13", 
        text:"Bog‘chaga mashinada 200 litr sut keltirildi. Sutni quyib olish uchun sig‘imi 16 litr bo‘lgan bidonlardan nechtasi kerak bo‘ladi?", 
        options:["13 ta","14 ta","12 ta","11 ta"], 
        correctAnswer:0 },
      {
        id: "m13-13", 
        text:"Zavod omboridagi 15 t 750 kg paxta 155 kg dan qilib toylandi. Necha dona paxta toyi hosil bo‘ldi?", 
        options:["101","100","102","104"], 
        correctAnswer:0 },
      {
        id: "m13-13", 
        text:"Quyidagi ifodalardan qaysi biri qoldiqli bo’lishni ifodalaydi?", 
        options:["250 = 25 · 10","457 = 10 · 45 + 7","526 = 20 · 25 + 26","249 = 5 · 50 – 1"], 
        correctAnswer:1 },
      {
        id: "m13-13", 
        text:"Bugun chorshanba bo’lsa, 23 kundan keyin qaysi kun keladi?", 
        options:["payshanba","juma","shanba","yakshanba"], 
        correctAnswer:1 },
      {
        id: "m13-13", 
        text:"Bugun chorshanba bo’lsa, 200 kundan keyin qaysi kun keladi?", 
        options:["payshanba","juma","shanba","yakshanba"], 
        correctAnswer:3 },
      {
        id: "m13-13", 
        text:"Hozir soat 12:40 bo’lsa, 50 soatdan keyin soat necha bo’ladi?", 
        options:["10:40","12:40","14:40","16:40"], 
        correctAnswer:2 },
      {
        id: "m13-13", 
        text:"Hozir soat 12:40 bo’lsa, 100 soatdan keyin soat necha bo’ladi?", 
        options:["10:40","12:40","14:40","16:40"], 
        correctAnswer:3 },
      {
        id: "m13-13", 
        text:"Qandaydir sonni 6, 10 va 15 ga bo‘lgandagi qoldiqlar hisoblandi. Agar bu qoldiqlarning yig‘indisi 28 ga teng emasligi ma`lum bo‘lsa, yig‘indi eng ko‘pi bilan nechaga teng bo‘lishi mumkin?", 
        options:["27","26","25","24"], 
        correctAnswer:2 },
      {
        id: "m13-13", 
        text:"“Mantimamo” markali lampochka 24 999 soat ishlaydi. Agar u dushanba kunidan boshlab har kuni to'liq 2 soat davomida ishlatilsa, u haftaning qaysi kunida ishlamay qoladi?", 
        options:["payshanba","juma","shanba","yakshanba"], 
        correctAnswer:2 },
      {
        id: "m13-13", 
        text:"Ikki sonning farqi 26 ga teng. Agar katta sonni kichigiga bo’lsak bo’linmada 2, qoldiqda esa 1 chiqadi. Shu sonlarni kattasini toping?", 
        options:["25","51","26","27"], 
        correctAnswer:1 },
    ]
  },
  {
    id: "m14-14",
    subject: "matematika",
    grade: 3,
    topic: "Amallarni bajarish tartibi (qavslarni qo’yish)",
    questions: [
      {
        id: "m14-14", 
        text:"Quyidagilarning qaysi biri to’g’ri?1) 13 – 4 = 9; 3) 7 + 3 = 10; 2) 6 + 9 = 14; 4) 11 – 4 = 8", 
        options:["1 va 2","1 va 3","faqat 1","2 va 4"], 
        correctAnswer:1 },
      {
        id: "m14-14", 
        text:"6 ni 3 ga bo’lib 2 ni qo’shing.", 
        options:["20","4","0","6"], 
        correctAnswer:1 },
      {
        id: "m14-14", 
        text:"18 ni 3 ga bo’lib 4 ni qo’shing.", 
        options:["24","10","0","4"], 
        correctAnswer:1 },
      {
        id: "m14-14", 
        text:"Tenglikni to’g’ri qiluvchi amalni belgilang. 18 ? 9 + 5 = 7", 
        options:["+","-",":","×"], 
        correctAnswer:2 },
      {
        id: "m14-14", 
        text:"Belgilardan to’g’risini tanlang. 9 ? (45 : 9) = 14", 
        options:["+","-",":","×"], 
        correctAnswer:0 },
      {
        id: "m14-14", 
        text:"Amallarni bajaring: 630 : 9 + 70 · 3", 
        options:["560","280","250","500"], 
        correctAnswer:1 },
      {
        id: "m14-14", 
        text:"Amallarni bajaring: 400 · 2 – 40 · 9", 
        options:["460","560","540","440"], 
        correctAnswer:3 },
      {
        id: "m14-14", 
        text:"Amallarni bajaring: 566 – (681 – 524)", 
        options:["409","509","519","419"], 
        correctAnswer:0 },
      {
        id: "m14-14", 
        text:"Amallarni bajaring: 510 – 3 • 8", 
        options:["484","494","486","496"], 
        correctAnswer:2 },
      {
        id: "m14-14", 
        text:"Hisoblang: 120 + 180 : 2 · 5", 
        options:["138","570","1050","750"], 
        correctAnswer:1 },
      {
        id: "m14-14", 
        text:"Hisoblang: 120 + 180 : (2 · 5)", 
        options:["138","570","1050","750"], 
        correctAnswer:0 },
      {
        id: "m14-14", 
        text:"Hisoblang: (120 + 180) : 2 · 5", 
        options:["138","570","1050","750"], 
        correctAnswer:3 },
      {
        id: "m14-14", 
        text:"Hisoblang: 750 – (450 – 250) : 5", 
        options:["250","350","710","10"], 
        correctAnswer:2 },
      {
        id: "m14-14",
        text:"Hisoblang: (750 – 450 – 250) : 5", 
        options:["250","350","710","10"], 
        correctAnswer:3 },
      {
        id: "m14-14", 
        text:"<b>Qavslarni shunday qo‘yingki, natijada to‘g‘ri tengliklar hosil bo‘lsin (24 - 29)</b><br>100 – 24 : 2 = 38 ", 
        options:["100 – 24 : 2","100 – (24 : 2)","(100 – 24) : 2"], 
        correctAnswer:2 },
      {
        id: "m14-14", 
        text:"300 + 20 · 3 : 10 = 36", 
        options:["300 + (20 · 3) : 10","300 + 20 · (3 : 10)","(300 + 20) · 3 : 10","(300 + 20 · 3) : 10"], 
        correctAnswer:3 },
      {
        id: "m14-14", 
        text:"360 : 6 + 3 = 40", 
        options:["360 : (6 + 3)","360 : 6 + 3","(360 : 6) + 3"], 
        correctAnswer:0 },
      {
        id: "m14-14", 
        text:"420 : 10 – 4 : 2 = 35", 
        options:["420 : (10 – 4) : 2","(420 : 10 – 4) : 2","420 : (10 – 4 : 2)","420 : 10 – 4 : 2"], 
        correctAnswer:0 },
      {
        id: "m14-14", 
        text:"32 · 2 – 2 = 0", 
        options:["(32 · 2) – 2","32 · (2 – 2)","32 · 2 – 2"], 
        correctAnswer:1 },
      {
        id: "m14-14", 
        text:"4 · 120 – 120 : 6 = 0", 
        options:["4 · (120 – 120) : 6","(4 · 120 – 120) : 6","4 · (120 – 120 : 6)","4 · 120 – 120 : 6"], 
        correctAnswer:0 }, 
      {
        id: "m14-14", 
        text:"<b>Qavslar qanday qo’yilganda ifodadagi tenglik to’g’ri bo’ladi? (21 - 24)</b> <br>40 · 8 – 6 : 2 = 200", 
        options:["40 · (8 – 6) : 2","40 · (8 – 6 : 2)","(40 · 8 – 6) : 2","40 · 8 – 6 : 2"], 
        correctAnswer:1 },
      {
        id: "m14-14", 
        text:"40 · 8 – 6 : 2 = 317", 
        options:["40 · (8 – 6) : 2","40 · (8 – 6 : 2)","(40 · 8 – 6) : 2","40 · 8 – 6 : 2"], 
        correctAnswer:3 },
      {
        id: "m14-14", 
        text:"40 · 8 – 6 : 2 = 157", 
        options:["40 · (8 – 6) : 2","40 · (8 – 6 : 2)","(40 · 8 – 6) : 2","40 · 8 – 6 : 2"], 
        correctAnswer:2 },
      {
        id: "m14-14", 
        text:"40 · 8 – 6 : 2 = 40", 
        options:["40 · (8 – 6) : 2","40 · (8 – 6 : 2)","(40 · 8 – 6) : 2","40 · 8 – 6 : 2"], 
        correctAnswer:0 },
      {
        id: "m14-14", 
        text:"Quyidagi misolni hisoblash jarayonida qaysi amal ikkinchi o’rinda hisoblanadi:73 957 · 7 – (600 000 + 640 000 : 8 000)", 
        options:["qo’shish","ayirish","ko’paytirish","bo’lish"], 
        correctAnswer:0 },
      {
        id: "m14-14", 
        text:"Quyidagi misolni hisoblash jarayonida ko’paytirish amali nechanchi o’rinda bajariladi: (221 721 + 78 279) : 600 + 402 234 · 9", 
        options:["1-o’rinda","2-o’rinda","3-o’rinda","4-o’rinda"], 
        correctAnswer:2 },
      {
        id: "m14-14", 
        text:"<b>Amallar tartibiga rioya qilgan holatda bajarilsa, hamda natijalarga mos harflar ham o’sha tartibda terilsa, qanday so’z hosil bo’ladi? (27-32)</b><br>2835 + (1657 + 7860) + (845 – 39 · 7)",
        imageUrl:"/images/Amallarni bajarish tartibi-1.png", 
        options:["NOZIM","ZOMUN","OZMIN","ZOMIN"], 
        correctAnswer:3 },
      {
        id: "m14-14", 
        text:"Amallar tartibiga rioya qilgan holatda bajarilsa, hamda natijalarga mos harflar ham o’sha tartibda terilsa, qanday so’z hosil bo’ladi? (27 · 3 + 319) : 2 + (418 – (217 – 600 : 20)) + 67 · 7",
        imageUrl:"/images/Amallarni bajarish tartibi-2.png", 
        options:["SAMRIShSOY","SARMIShSOY","SARSIShMOY","SARShIMSOY"], 
        correctAnswer:1 },
      {
        id: "m14-14", 
        text:"246 + ((608 – 518) · 7 – 283) – (5 · (124 – 38) – 62)",
        imageUrl:"/images/Amallarni bajarish tartibi-3.png", 
        options:["MADYANAK","MDAAYNAK","MAYNADAK","MAYDANAK"], 
        correctAnswer:3 },
      {
        id: "m14-14", 
        text:"7352 + (62 · 7 + 92 · 9) + (891 - 297)",
        imageUrl:"/images/Amallarni bajarish tartibi-4.png", 
        options:["GUGURT","OTANUR","NUROTA","NORTAU"], 
        correctAnswer:2 },
      {
        id: "m14-14", 
        text:"78 + 9 · (921 – 827) + (681 – 645) : 9 – 147",
        imageUrl:"/images/Amallarni bajarish tartibi-5.png", 
        options:["QAMRABO","MARHABO","QMARABO","QAMARBO"], 
        correctAnswer:0 },
      {
        id: "m14-14", 
        text:"9904 – 4539 – (78009 – 77928 + 1578) – 3679",
        imageUrl:"/images/Amallarni bajarish tartibi-6.png", 
        options:["LUTUB","LBUUT","BULUT","BLUUT"], 
        correctAnswer:3 },
    ]
  },
  {
    id: "m15-15",
    subject: "matematika",
    grade: 3,
    topic: "Rim raqamlari",
    questions: [
      {
      id: "m15-15", 
      text:"17 sonini rim raqamlari bilan yozing", 
      options:["XIX","XVIII","XVII","XVI"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Quyidagi rim raqami qaysi sonni bildiradi? <b>LXXXIX</b>", 
      options:["89","91","99","79"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Quyidagi rim raqami qaysi sonni bildiradi? <b>XXIX</b>", 
      options:["39","31","29","38"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Quyidagi rim raqami qaysi sonni bildiradi? <b>XCVII</b>",
      options:["117","79","47","97"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Quyidagi rim raqami qaysi sonni bildiradi? <b>MDCXLIV</b>",
      options:["1666","15144","1644","6544"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Quyidagi rim raqami qaysi sonni bildiradi? <b>MXCVII</b>",
      options:["1117","1097","1247","917"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Quyidagi rim raqami qaysi sonni bildiradi? <b>XCIV</b>",
      options:["116","49","44","94"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"53 sonini rim raqamlari bilan yozing",
      options:["LIX","LIII","XXXXIII","LIV"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"170 sonini rim raqamlari bilan yozing",
      options:["CLXX","CLXV","CXL","CLIV"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Quyidagi rim raqami qaysi sonni bildiradi? <b>XLIV</b>",
      options:["64","54","56","44"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Quyidagi rim raqami qaysi sonni bildiradi? <b>LXIX</b>",
      options:["64","69","71","67"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"441 sonini rim raqamlari yordamida yozing",
      options:["CDXLI","CDLI","CDLXI","CCCXLI"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Binoga u qurilgan yil rim raqamida yozilgan. Bino nechanchi yili qurilgan?",
      imageUrl:"/images/Rim raqamlari-1.png", 
      options:["1989","1859","1969","1959"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Quyidagi rim raqami qaysi sonni bildiradi? <b>CCXXXVI</b> ",
      options:["235","241","236","237"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Quyidagi rim raqami qaysi sonni bildiradi? <b>CCXCIII</b>",
      options:["293","263","313","323"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"754 sonini rim raqamlari bilan yozing",
      options:["DCCXXXIV","DCCLV","DCCLIV","CDXXIX"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"499 sonini rim raqamlari bilan yozing",
      options:["DXCIX","CDXXIX","CDXCIX","CDXXXIX"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Quyidagi rim raqami qaysi sonni bildiradi? <b>DCCCLXXI</b>",
      options:["861","871","869","879"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Quyidagi rim raqami qaysi sonni bildiradi? <b>DCCXLII</b>",
      options:["742","741","752","723"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Quyidagi rim raqami qaysi sonni bildiradi?  <b>DLXI</b>",
      options:["516","491","569","561"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Quyidagi sonni rim raqamlari bilan yozing:  3 479",
      options:["MMMDLXXIX","MMMCDLXIX","MMMCDLXXIX","MMCDLXXIX"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Amallarni bajaring: <b>XII + XXIX</b>",
      options:["XLI","XXXIX","XLII","XXIII"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Amallarni bajaring: <b>CIX – XLIX</b>",
      options:["XL","LX","LXII","LIX"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Amallarni bajaring: <b>XCVI + XIII – XX</b>",
      options:["LXXXIX","LXXX","XCI","XXIII"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Buyuk matematik olim al-Xorazmiy 783- yilda Xorazmda tug‘ilgan. U tug’ilgan yil rim raqamlarida qanday yoziladi?",
      options:["DCCLVVVIII","DCCLXXIII","DCCLXXXII","DCCLXXXIII"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Mashhur olim Abu Rayxon Beruniy 973- yilda Xorazmda tug‘ilgan. U tug’ilgan yil rim raqamlarida qanday yoziladi?",
      options:["CMLXXIV","MCLXXIII","CMLXXIII","CMLXXXIII"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Binoga u qurilgan yil rim raqamida yozilgan. Bino nechanchi yili qurilgan?",
      imageUrl:"/images/Rim raqamlari-2.png", 
      options:["1736","1834","1846","1836"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Taqqoslang: <b>XCIX ⎕ CIV</b>",
      options:[">","<","=","T.J.Y"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Taqqoslang: <b>MCDXL ⎕ MCDL</b>",
      options:[">","<","=","T.J.Y"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Taqqoslang: <b>MMXX ⎕ MMXIX</b>", 
      options:[">","<","=","T.J.Y"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Ko’paytmani toping. <b>XI · XLV =</b>",
      options:["CDLV","CDXCV","CDLXXXV"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Ko’paytmani toping. <b>IX · LV =</b>",
      options:["CDLV","CDXCV","CDLXXXV"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Noto’g’ri bajarilgan tenglikni toping.",
      options:["X+V=XV","XXXV : VII = VI","XC : V = XVIII"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Noto’g’ri bajarilgan tenglikni toping.",
      options:["X+VII=XVII","XXXV : VII = V","XXXV : VII = V"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Sonlarni o’sish tartibida joylashtiring:<b> X, IX, XIX, IV, XL</b>",
      options:["IV, IX, X, XIX, XL","X, IX, XIX, IV, XL","IV, X, IX, XIX, XL"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Eng katta sonni toping: <b>XVI, XXI, VIII, XIX</b>",
      options:["XVI","XXI","XIX"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Hisoblang:<b> XVII · XII – MD : XXX · (XL – XXXVI)</b>",
      options:["12","204","154","4"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Hisoblang: <b>XCIX + (XXII + IX) · XV – CX : XI</b>",
      options:["554","201","454","544"], 
      correctAnswer:3 
      },
      {
      id: "m15-15", 
      text:"Quyida 1 dan 89 gacha to'g'ri chiziqlar yordamida yozilishi mumkin bo’lgan Rim raqamlari keltirilgan. Harflar L, X va V har biriga ikkita chiziq kerak, lekin ‘I’ da faqat bitta chiziq bilan yozish mumkin. Ikki xonali sonlarni hosil qilish uchun 10 likni bildiruvchi sonlardan keyin birliklarni joylashtiriladi. Masalan. 74 - LXXIV. Bir sondan ikkinchisiga o`tayotganda ushbu ikki ketma-ket sonni yozishda foydalaniluvchi chiziqlar soni eng ko’pida qanchaga o’zgaradi?",
      imageUrl:"/images/Rim raqamlari-3.png", 
      options:["2","3","4","5"], 
      correctAnswer:3 
      },
    ]
  },
  {
     id: "m16-16",
    subject: "matematika",
    grade: 3,
    topic: "Oddiy kasrlar xossalari. To‘g‘ri va noto‘g‘ri kasrlar.",
    questions: [
      {
      id: "m16-16", 
      text:"Yarim, chorak va nimchoraklarni kasrlar ko‘rinishida belgilangan qatorni toping.", 
      imageUrl:"/images/kasr1.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"Rasmdagi kasrlarni rasmda berilgan tartib bilan yozing.", 
      imageUrl:"/images/kasr2.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kars3.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr4.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr5.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr6.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr7.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr8.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr9.png",
      options:["A","B","C"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr10.png",
      options:["A","B","C"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"Sem o‘z xonasining devorini teng qismlarga ajratdi va quyida ko‘rsatilgandek uch xil rangga bo‘yadi: yashil (y), ko‘k (k), sariq (s). U devorning yarmini qaysi bo‘yoq rangi bilan qoplagan? ", 
      imageUrl:"/images/kasr11.png",
      options:["Yashil","Ko‘k","Hech biriga","Sariq"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr12.png",
      options:["1","2","3","4"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"24 nafar o‘quvchining 13 nafari a’lochi va 8 nafari yaxshi baholarga o‘qiydi. Sinfdagi a’lo va yaxshi baholarga o‘qiydigan o‘quvchilarning jami o‘quvchilar soniga nisbatan ulushini toping?", 
      imageUrl:"/images/kasr13.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr14.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr15.png",
      options:["1","2","3","4"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"Bir xil maxrajli ikki kasrdan qaysi birining surati kichik bo‘lsa, o‘sha kasr ... bo‘ladi.", 
      imageUrl:"",
      options:["Kichik","Katta","To‘g‘ri kasr","Noto‘g‘ri kasr."], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr17.png",
      options:["A","B","C","D","E"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr18.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr19.png",
      options:["6","7","8","2"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr20.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"Quyidagi kasrlardan nechtasi noto‘g‘ri kasr ekanligini aniqlang:", 
      imageUrl:"/images/kasr21.png",
      options:["2 ta","3 ta","4 ta","5 ta"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"Quyidagi kasrlardan nechtasining qiymati 1 ga teng?", 
      imageUrl:"/images/kasr22.png",
      options:["5 ta","4 ta","3 ta","2 ta"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"Quyidagi kasrlardan nechtasining qiymati 1 dan katta?", 
      imageUrl:"/images/kasr23.png",
      options:["5 ta","4 ta","3 ta","2 ta"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"Maxraji 11 ga teng bo‘lgan va suratida natural sonlar bo‘lgan to‘g‘ri kasrlar nechta?", 
      imageUrl:"",
      options:["9 ta","cheksiz ko‘p","11 ta","10 ta"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"Surati 13 ga teng bo‘lgan va maxrajida natural sonlar bo‘lgan noto‘g‘ri kasrlar nechta?", 
      imageUrl:"",
      options:["12 ta","cheksiz ko‘p","13 ta","11 ta"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr26.png",
      options:["8","7","9","10"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr27.png",
      options:["300 minut","240 minut","210 minut","270 minut"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr28.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr29.png",
      options:["A","B","C","D","E"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr30.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr31.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr32.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr33.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr34.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"To‘g‘ri kasrning butun qismi nimaga teng?", 
      imageUrl:"",
      options:["1","2","0","suratiga"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr35.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"Noto‘g‘ri kasr qiymati haqida nima deyish mumkin?", 
      imageUrl:"",
      options:["1 dan katta","1 dan kichik emas","1 ga teng","0 ga teng."], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr38.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr39.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr40.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr41.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr42.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr43.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr44.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr45.png",
      options:["18","19","20","21","22"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr46.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr47.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr48.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr49.png",
      options:["32","34","33","24"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr50.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
       {
      id: "m16-16", 
      text:"", 
      imageUrl:"/images/kasr51.png",
      options:["A","B","C","D"], 
      correctAnswer:3 
      },
  
    ] 
  },
   {
    id: "m17-17",
    subject: "matematika",
    grade: 3,
    topic: "Sonlarni taqqoslash.",
    questions: [
      {
        id: "m17-17",
        text: "Taqqoslang: 4 ta yuzlar ⎕ 44 ta o’nlar",
        imageUrl:"",
        options: [">", "<", "="],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Jadvalda odamlarning metrodan foydalanishi bo’yicha raqamlar keltirilgan. Metrodan qaysi kuni eng kam odam foydalanadi.",
        imageUrl:"/images/taqqoslash1.png",
        options: ["Shanba", "Seshanba", "Yakshanba", "Dushanba"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Taqqoslang: 8 ta yuzlar ⎕ 88 ta o’nlar",
        imageUrl:"",
        options: [">", "<", "="],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Qaysi javobdagi tengsizlik xato?",
        imageUrl:"",
        options: ["505 < 550", "660 < 606", "989 > 899", "1023 < 1234"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Qaysi javobdagi tengsizlik xato?",
        imageUrl:"",
        options: ["1234 < 4321", "1009 < 1010", "1001 < 989", "4231 > 4132"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "So’roq o’rniga qo’yish mumkin bo’lgan sonni toping: 3007<?",
        imageUrl:"",
        options: ["3005", "3006", "3007", "3009"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Jadvalda 4 kun davomida sotilgan biletlar soni kunlik ko’rsatilgan. Qaysi kuni eng ko’p bilet sotilgan?",
        imageUrl:"/images/taqqoslash2.png",
        options: ["Shanba", "Yakshanba", "Dushanba", "Seshanba"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Taqqoslang: 3 ta o’nlar va 2 ta birlar ⎕ 2 ta o’nlar va 3 ta birlar",
        imageUrl:"",
        options: [">", "<", "="],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Agar quyidagi sonlarni kamayish tartibida joylab chiqilsa, birinchi o’rinda qaysi son yoziladi. 2 927, 617, 7 295, 667",
        imageUrl:"",
        options: ["2 927", "667", "617", "7 295"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Jadvalda 4 kun davomida sotilgan sabzavotlar miqdori kunlik ko’rsatilgan. Qaysi kuni eng ko’p sabzavot sotilgan?",
        imageUrl:"/images/taqqoslash3.png",
        options: ["Seshanba", "Payshanba", "Payshanba", "Juma"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Qaysi belgi qo’yilsa ifoda to’g’ri bo’ladi? 9 + (1 + 19) ⎕ 19 + 10",
        imageUrl:"",
        options: [">", "=", "<"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Qaysi belgi qo’yilsa ifoda to’g’ri bo’ladi? 15 – 3 ⎕ 14 + 5 + 2",
        imageUrl:"",
        options: [">", "=", "<"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Qaysi belgi qo’yilsa ifoda to’g’ri bo’ladi? 10 + (13 – 7) ⎕ 13 + 20",
        imageUrl:"",
        options: [">", "<", "="],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Sonlarni kаmayish tartibida joylashtiring.",
        imageUrl:"/images/taqqoslash4.png",
        options: ["23,33,41,49,78", "78,41,49,33,23", "78,49,41,33,23"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Sonlarni kamayish tartibida joylashtiring.",
        imageUrl:"/images/taqqoslash5.png",
        options: ["3366,7044,7092,7837", "7837,7092,7044,3366", "7837,7044,7092,3366"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Agar quyidagi sonlarni o’sish tartibida joylab chiqilsa, uchinchi o’rinda qaysi son yoziladi. 17 436, 11 478, 15 477, 17 477, 44 720",
        imageUrl:"",
        options: ["17 436", "11 478", "17 477", "44 720"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Agar quyidagi sonlarni o’sish tartibida joylab chiqilsa, to’rtinchi o’rinda qaysi son yoziladi. 17 436, 11 478, 15 477, 17 477, 44 720",
        imageUrl:"",
        options: ["17 436", "11 478", "17 477", "44 720"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Ifoda to’g’ri bo’lishi uchun katakchaga quyidagi sonlardan qaysi birini yozish mumkin? 7 < ⎕ – 1",
        imageUrl:"",
        options: ["7", "10", "8", "6"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Ifoda to’g’ri bo’lishi uchun katakchaga quyidagi sonlardan qaysi birini yozish mumkin? ? – 5 < 11",
        imageUrl:"",
        options: ["17", "14", "18", "16"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Ifoda to’g’ri bo’lishi uchun katakchaga quyidagi sonlardan qaysi birini yozish mumkin? 612 – ? > 418",
        imageUrl:"",
        options: ["191", "195", "207", "194"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Ifoda to’g’ri bo’lishi uchun katakchaga quyidagi sonlardan qaysi birini yozish mumkin? ? + 85 > 25 + 85",
        imageUrl:"",
        options: ["23", "21", "26", "25"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Qaysi holatda hisoblashni amalga oshirmay taqqoslash mumkin?",
        imageUrl:"",
        options: ["820·8⎕746·9", "234·5⎕243·6", "728·4⎕532·8", "316·4 ⎕ 128·9"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Qaysi belgi qo’yilsa ifoda to’g’ri bo’ladi? <br> 88+(73-42) ⎕ 73+(88-42)",
        imageUrl:"",
        options: [">", "<", "="],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Taqqoslang: 129 – (17 – 14) ⎕ 115 – 17",
        imageUrl:"",
        options: [">", "<", "="],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Taqqoslang: 50 000 · 13 000 ⎕ 50 000 · 9 000",
        imageUrl:"",
        options: [">", "<", "="],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Taqqoslang: 20 160 : 840 ⎕ 8 400 : 350",
        imageUrl:"",
        options: [">", "<", "="],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Ifoda to’g’ri bo’lishi uchun katakchaga quyidagi sonlardan qaysi birini yozish mumkin? 612 – ⎕ > 342",
        imageUrl:"",
        options: ["271", "304", "268"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Ifoda to’g’ri bo’lishi uchun katakchaga quyidagi sonlardan qaysi birini yozish mumkin? 9 612 – ⎕ > 1763",
        imageUrl:"",
        options: ["7 849", "7 921", "7 812"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Tengsizlikni qanoatlantiruvchi 1 xonali sonlar nechta? 12 – t < 7",
        imageUrl:"",
        options: ["4 ta", "5 ta", "6 ta", "7 ta"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Tengsizlikni qanoatlantiruvchi 1 xonali sonlar nechta? 5 + m > 14",
        imageUrl:"",
        options: ["3 ta", "2 ta", "1 ta", "0 ta"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Tengsizlikni qanoatlantiruvchi 1 xonali sonlar nechta? 9 – x > 2",
        imageUrl:"",
        options: ["4 ta", "5 ta", "6 ta", "7 ta"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Tengsizlikni qanoatlantiruvchi 1 xonali sonlar nechta? 4 < x < 10",
        options: ["4 ta", "5 ta", "6 ta", "7 ta"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Sinfdagi 4 ta o’quvchi bo’ylarini solishtirib chiqishdi. Hosilbek Shomildan baland ammo Jamshiddan pastroq edi. Asadbek esa Hosilbekdan 5 cm, Jamshiddan 15 cm pastroq. Sinfdagi eng uzun bola kim?",
        imageUrl:"",
        options: ["Jamshid", "Hosilbek", "Shomil"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Agar birinchi va ikkinchi gaplar to’g’ri bo’lsa, uchinchi gap to’g’ri, xato yoki aniqlab bo’lmasligini toping. 1) Sohibjon Loladan uzunroq. 2) Lola Jahongirdan bo’yi pastroq. 3) Jahongir Sohibjondan uzunroq.",
        imageUrl:"",
        options: ["To’g’ri", "Xato", "Aniqlab bo’lmaydi"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "“Salimaning yoshi Ra’noning yoshidan katta emas” Ushbu jumladan quyidagi qaysi gapni aniq aytish mumkin?",
        imageUrl:"",
        options: ["Salima Ra’nodan kichik", "Ra’noning yoshi Salimadan katta", "Ra’noning yoshi Salimadan 2 yoshga kattaroq", "Ra’noning yoshi Salimadan kichik emas."],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Agar Akmal Sobirdan baland bo‘lsa, Karim esa Zokirdan pastroq Akmaldan balandroq bo‘lsa, ularning eng past bo‘ylisi kim?",
        imageUrl:"",
        options: ["Sobir", "Akmal", "Karim", "Zokir"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "I. Dushanba kuni havo harorati seshanbaga nisbatan pastroq edi. II. Chorshanba kuni havo harorati seshanbaga qaraganda pastroq edi. III. Dushanba kuni havo harorati chorshanba kungidan yuqori edi. Agar birinchi ikkita bayonot to‘g‘ri bo‘lsa, uchinchisi",
        imageUrl:"",
        options: ["to‘g‘ri", "xato", "aniqlab bo‘lmaydi"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Quyidagi rasmda 14 ta osmono’par minoralar ko’rsatilgan. Minora balandligi uning pastki qismidan eng baland nuqtasigacha, shu jumladan har qanday bayroq ustunlari yoki antennalar ham qo’shib o'lchanadi. Agar minoralar balandliklari bo’yicha eng pastdan eng balandgacha o’sish tartibida ro'yxat tuzilsa, qaysi minora ro'yxatda 10-o'rinni egallaydi?",
        imageUrl:"/images/taqqoslash8.png",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1
      },
      {
        id: "m17-17",
        text: "Sinfdagi 5 ta o’quvchi bo’ylarini solishtirib chiqishdi. Hosilbek Shomildan baland ammo Jamshiddan pastroq edi. Asadbek esa Jalildan 15 cm, Jamshiddan 12 cm pastroq. Sinfdagi eng uzun bola kim.",
        imageUrl:"",
        options: ["Jamshid", "Hosilbek", "Jalil"],
        correctAnswer: 1
      },
       {
        id: "m17-17",
        text: "Chingizxon, Temur, Aleksandr va Napaleonlarning har biri o’z lashkarlariga ega. Agar Chingizxon va Temur birgalikda Aleksandr va Napaleonga qarshi jang qilsa, ularni osonlik bilan yutushi mumkin. Ammo, Chingizxon va Napaleon birgalikda Temur va Aleksandrga qarshi jang qilsa, jangning natijasi durrang bo’ladi. Agar Napaleon Aleksandrga qarshi jang qilsa mag’lub bo’ladi. Qaysi sarkarda eng kuchli qo’shinga ega?",
        imageUrl:"",
        options: ["Chingizxon", "Temur", "Napaleon", "Aleksandr"],
        correctAnswer: 1
      },
    ]
  },
   {
    id: "m18-18",
    subject: "matematika",
    grade: 4,
    topic: "Yaxlitlash va miqdorlarni tahmin qilish.",
    questions: [
      {
        id: "m18-18",
        text: "Sonni o’nlik ko’rinishda yaxlitlang: 56.",
        imageUrl:"",
        options: ["60", "50", "56", "55"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "37 sonini eng yaqin o’nlarda yaxlitlang",
        imageUrl:"",
        options: ["20", "30", "40", "50"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Qaysi yaxlitlash noto’g’ri bajarilgan?",
        imageUrl:"",
        options: ["8340≈8000", "8 340≈8 300", "7 048≈7 000", "529≈600"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Tarixiy obidalarni tomosha qilgani 217 ta o‘quvchi bordi. Quyidagi taqribiy qiymatlardan qaysi biri aniqroq?",
        imageUrl:"",
        options: ["210 ta", "220 ta", "200 ta", "230 ta"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Masjidning gumbaziga yashil va ko’k rangli naqshinkor oyna bo’laklari qo’yilgan bo’lib, yashil bo’laklar 9 872 ta va ko’k bo’laklar 2 596 ta. Gumbazdagi oyna bo’laklari soni nechta (javobni minglarda yaxlitlang)",
        imageUrl:"",
        options: ["13 000", "3 000", "12 000", "9 000"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Sonni yuzlik ko’rinishda yaxlitlang: 268",
        imageUrl:"",
        options: ["250", "200", "300", "270"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Quyidagi pulni butun dollarlarda yaxlitlang: 7,42$.",
        imageUrl:"",
        options: ["8$", "7$", "7,5$", "7,4$"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Quyidagi pulni butun dollarlarda yaxlitlang: 7,71$.",
        imageUrl:"",
        options: ["7$", "7.5$", "8$", "9$"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Jahongir quyidagi mahsulotlarni sotib olmoqchi: tishpastasi - $3.99, non - $2.45, sut - $2.69, olma - $3.10, guruch - $4.89. U hamma mahsulotlar narxini bir dollargacha yaxlitladi va hammasini qo’shib chiqdi. Uning umumiy xaridi qancha bo’ladi?",
        imageUrl:"",
        options: ["$15.00", "$16.00", "$17.00", "$18.00"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Quyidagi pulni butun dollarlarda yaxlitlang: 9.72$.",
        imageUrl:"",
        options: ["10$", "9.5$", "9$", "8$"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "$1841 ni eng yaqin 100 dollarda yaxlitlang.",
        imageUrl:"",
        options: ["$1850", "$1800", "$1900", "$1940"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Son 6 va 7 raqamlaridan tashkil topgan. Agar bu sonni o’nlik ko’rinishida yaxlitlansa, u 70 ga teng bo’ladi. Bu sonni toping.",
        imageUrl:"",
        options: ["70", "76", "67", "77"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Son 7, 5 va 3 raqamlaridan tashkil topgan. Agar bu sonni yuzlik ko’rinishida yaxlitlansa, u 700 ga teng bo’ladi. Bu son nechiga teng?",
        imageUrl:"",
        options: ["753", "735", "573", "752"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Son 2, 5 va 9 raqamlaridan tashkil topgan. Agar bu sonni yuzlik ko’rinishida yaxlitlansa, u 600 ga teng bo’ladi. Bu son nechiga teng?",
        imageUrl:"",
        options: ["592", "295", "529", "259"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Son 3, 9 va 1 raqamlaridan tashkil topgan. Agar bu sonni yuzlik ko’rinishida yaxlitlansa, u 200 ga teng bo’ladi. Bu son nechiga teng?",
        imageUrl:"",
        options: ["391", "139", "193", "913"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Sonni eng yaqin o’n minglarda yaxlitlang: 329 373",
        imageUrl:"",
        options: ["330 000", "329 000", "320 000", "329 400"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Quyidagi 7, 3, 4, 6 raqmlaridan foydalanib 4 xonali son tuzildi. Ushbu son yuzlarda yaxlitlanganda 7500 hosil bo’ldi. Raqamlardan quyidagi qaysi son tuzilgan?",
        imageUrl:"",
        options: ["7346", "7436", "7463", "7634"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Qaysi belgi amalga to’g’ri keladi? Tezroq bajarish uchun yaxlitlab ishlang.78 – 21 _?_ 41 + 33",
        imageUrl:"",
        options: [">", "<", "="],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Qaysi belgi amalga to’g’ri keladi? Tezroq bajarish uchun yaxlitlab ishlang.765 – 280 _?_ 224 + 539",
        imageUrl:"",
        options: [">", "<", "="],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Qaysi belgi amalga to’g’ri keladi? Tezroq bajarish uchun yaxlitlab ishlang.3 594 + 8 474 _?_ 5 549 + 4 360",
        imageUrl:"",
        options: [">", "<", "="],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Qaysi belgi amalga to’g’ri keladi? Tezroq bajarish uchun yaxlitlab ishlang.8 916 – 1 754 _?_ 6 892 + 2 274",
        imageUrl:"",
        options: [">", "<", "="],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Qaysi yig’indi yaxlitlansa 900 ga teng bo’ladi?",
        imageUrl:"",
        options: ["322+387", "458+521B", "614+298", "903+79"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Qaysi yig’indi yaxlitlansa 15 000 ga teng bo’ladi?",
        imageUrl:"",
        options: ["9 258 + 5 671", "6 823 + 5 871", "9 869 + 8 828", "8 861 + 8 828"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Orolda 23 ta yovvoyi va 29 ta xonaki otlar bor. Jami bo’lib orolda nechta ot bor? Yaxlitlangan to’g’ri javobni tanlang.",
        imageUrl:"",
        options: ["90", "50", "40", "60"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Xazina izlovchi ko’milgan sandiq topib oldi. Sandiqni ochib ko’rsa ichida 25 ta olmos va 94 ta yoqut bor ekan. U jami bo’lib nechta qimmatli tosh topgan? Yaxlitlangan to’g’ri javobni toping.",
        imageUrl:"",
        options: ["12", "120", "110", "130"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Sonlarni avval yuzlikda yaxlitlab keyin ayirmani bajaring. 842 – 93 = _?_",
        imageUrl:"",
        options: ["600", "700", "800", "850"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Sonlarni avval minglikda yaxlitlab keyin ayirmani bajaring. 6 187 – 1 763 = _?_",
        imageUrl:"",
        options: ["4 000", "5 000", "3 000", "4 500"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Qaysi belgi amalga to’g’ri keladi? Tezroq bajarish uchun yaxlitlab ishlang. 76 _?_ 192 : 4",
        imageUrl:"",
        options: ["<", ">", "="],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Qaysi belgi amalga to’g’ri keladi? Tezroq bajarish uchun yaxlitlab ishlang. 12 _?_ 284 : 8",
        imageUrl:"",
        options: ["<", ">", "="],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Qaysi belgi amalga to’g’ri keladi? Tezroq bajarish uchun yaxlitlab ishlang. 8 945 : 5 _?_ 3 323",
        imageUrl:"",
        options: ["<", ">", "="],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "800 ga eng yaqin sonni yozish uchun so’roq o’rniga qanday raqam qo’yish kerak?",
        imageUrl:"/images/yaxlitlash2.png",
        options: ["6", "7", "8", "9"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "700 ga eng yaqin sonni yozish uchun so’roq o’rniga qanday raqam qo’yish kerak?",
        imageUrl:"/images/yaxlitlash1.png",
        options: ["6", "7", "8", "9"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Sonlarni o’nlar xonasigacha yaxlitlashlar to’g’ri bajarilgan qatorni toping.",
        imageUrl:"",
        options: ["123≈120, 267≈270, 413≈410", "183≈190, 257≈260, 423≈420", "924≈920, 565≈560, 613≈610", "123≈120, 267≈270, 403≈410"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Qaysi sonda yuzlar xonasigacha yaxlitlash to’g’ri bajarilmagan?",
        imageUrl:"",
        options: ["1060≈1100", "7225≈7200", "4680≈4600", "1007≈1000"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "1000 soniga eng yaqin bo’lgan sonni toping.",
        imageUrl:"",
        options: ["1039", "1100", "980", "899"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Qaysi sonda minglar xonasigacha yaxlitlash to’g’ri bajarilmagan?",
        imageUrl:"",
        options: ["3509≈3000", "3499≈3000", "4655≈5000", "2706≈3000"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Qaysi sonda o’nlar xonasigacha yaxlitlash to’g’ri bajarilmagan?",
        imageUrl:"",
        options: ["3509≈3510", "3499≈3500", "4655≈4650", "2706≈2710"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Dunyodagi eng baland cho’qqi Everst cho’qqisi bo’lib, u 8848 metr. Ushbu cho’qqi balandligini eng yaqin yuzlarda yaxlitlang.",
        imageUrl:"",
        options: ["8800", "8900", "8850", "9000"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Bitta telefonning og’irligi qancha bo’lishi mumkin?",
        imageUrl:"",
        options: ["2 g", "200 g", "4 kg", "35 kg"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Komil 10 qavatli uy tomiga 3 m li bayroq o’rnatdi. Bayroq yerdan qancha balandda bo’lishi mumkin?",
        imageUrl:"",
        options: ["40 m", "10 m", "1 km", "200 m"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Odam o’zi bilan teng massadagi yukni bemalol ko’tara olishi mumkin. Katta yoshli odam qancha yuk ko’tara oladi?",
        imageUrl:"",
        options: ["250 kg", "15 kg", "80 kg", "2000 kg"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Odamdagi qon tomirlarining umumiy uzunligi o’zining balandligidan 49 mln marta uzun. O’rtacha odamning qon tomirlari qancha bo’lishi mumkin?",
        imageUrl:"",
        options: ["96 ming km", "24 ming km", "200 ming km", "5 ming km"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Koptokning og’irligi qancha bo’lishi mumkin?",
        imageUrl:"",
        options: ["15 g", "200 g", "4 kg", "100 kg"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "Alinta va Tau ikkalasi ham 8 840 000 sonini yaxlitlashmoqda. Alinta bu sonni millionlarda yaxlitladi. Tau yuz minglarda yaxlitladi. Ularning javoblari o'rtasida qanday farq bor?",
        imageUrl:"",
        options: ["200 000", "50 000", "100 000", "150 000"],
        correctAnswer: 1
      },
       {
        id: "m18-18",
        text: "",
        imageUrl:"",
        options: ["C", "B", "D", "E"],
        correctAnswer: 1
      },
    ]
  },
   {
    id: "m19-19",
    subject: "matematika",
    grade: 3,
    topic: "Tengliklar va tenglamalarni yechish",
    questions: [
      {
        id: "m19-19",
        text: "Quyidagi keltirilganlardan tenglikni toping.",
        imageUrl:"",
        options: ["5 – (4 : 1)", "2 879 · 10 = 28 790", "72 + 3 : 3", "152 – 27 +12"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Quyidagi keltirilganlardan tenglikni toping.",
        imageUrl:"",
        options: ["15 · (4 - 1)", "2 879 · 10 -13 460", "72 : 3 = 24", "27:3+4"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Ushbu ifoda tenglikmi? 6 × 6 × 5 : (1 + 4)",
        imageUrl:"",
        options: ["ha", "yo'q"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Ushbu ifoda tenglikmi? 10 + 6 : (2 + 4) = 11",
        imageUrl:"",
        options: ["ha", "yo'q"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Noma’lum sonni toping t – 5 = 2",
        imageUrl:"",
        options: ["6", "3", "5", "7"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Noma’lum sonni toping g – 3 = 65",
        imageUrl:"",
        options: ["66", "67", "68", "62"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Noma’lum sonni toping 57 – s = 6",
        imageUrl:"",
        options: ["63", "51", "52", "54"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Noma’lum sonni toping s + 532 = 591",
        imageUrl:"",
        options: ["60", "61", "62", "59"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Noma’lum sonni toping k = 2 · 3",
        imageUrl:"",
        options: ["6", "5", "4", "7"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Noma’lum sonni toping 3c = 21",
        imageUrl:"",
        options: ["6", "5", "4", "7"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Noma’lum sonni toping   v = 10 · 13",
        imageUrl:"",
        options: ["130", "23", "120", "28"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Noma’lum sonni toping 3f = 39",
        imageUrl:"",
        options: ["12", "13", "14", "26"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Noma’lum sonni toping 36 : h = 4",
        imageUrl:"",
        options: ["6", "8", "9", "12"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Noma’lum sonni toping   j : 12 = 3",
        imageUrl:"",
        options: ["4", "24", "15", "36"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Noma’lum sonni toping 3z = 30",
        imageUrl:"",
        options: ["10", "8", "9", "11"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Noma’lum sonni toping d = 42 : 14",
        imageUrl:"",
        options: ["4", "3", "14", "13"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "b dan 260 ga ko’p bo’lgan ifodani toping",
        imageUrl:"",
        options: ["b - 260", "b + 260", "b · 260", "b : 260"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "p ga 17 qo’shilgan ifodani toping",
        imageUrl:"",
        options: ["p - 17", "p + 17", "p ·17", "p : 17"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "z va 132 sonlari ko’paytmasini toping",
        imageUrl:"",
        options: ["z - 132", "b + 132", "z ·132", "z : 132"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "94 va b sonlari bo’linmasini toping",
        imageUrl:"",
        options: ["94 - b", "94 + b", "b ·94", "94 : b"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Haylida d dona DVD disklari bor edi. Uning onasi unga yana 40 sotib oldi. Haylida hozir necha disk bor?",
        imageUrl:"",
        options: ["d + 40", "40 : d", "d – 40", "40 · d"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Franklinda 67 ta saqich bor. Vanda esa Franklindan g ta kamroq. Vanda nechta saqich bor?",
        imageUrl:"",
        options: ["g + 67", "67 : g", "67 – g", "67 · g"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Roza 13ta qadoqda yong’oqli shkolad sotib oldi. Har bir qadoqda g tadan shkolad bor. Roza jami nechta shkolad sotib olgan.",
        imageUrl:"",
        options: ["13g", "13 : g", "13 + g", "13 – g"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Nikolda c dona CD disk bor edi. U musobaqada yana 14 ta yutib oldi. Hozir Nikolda nechta disk bor?",
        imageUrl:"",
        options: ["14c", "14", "14 + c", "14 – c"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Kelsida 53 ta marmar tosh bor edi. Kelsi va Roger barcha marmar toshlarini birlashtirishganda, ularda 92 ta tosh bo’ldi. Qaysi tenglama orqali Rogerdagi toshlar sonini topish mumkin?",
        imageUrl:"",
        options: ["53 + m = 92", "m + 92 = 53", "53 + 92 = m", "m – 92 = 53"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Bruk qandolat do’konidan 46 ta saqich sotib oldi. Uning do’sti Kira ham bir nechta sotib oldi. Ular barcha saqichlarni birgalikda sanashgan edi, 90 ta chiqdi. Qaysi tenglama orqali Kira sotib olgan saqichlar sonini topish mumkin?",
        imageUrl:"",
        options: ["w – 90 = 46", "90 – w = 46", "w – 46 = 90", "46 + w = 90"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Anna bir nechta bidon (bo’yoqdon) sotib oldi. U 30 tani chizish uchun ishlatgan edi, 24 ta qoldi. Qaysi tenglama yechilsa, Annaning nechta bidon sotib olgan topiladi.",
        imageUrl:"",
        options: ["c – 30 = 24", "30 – 24 = c", "30 : c = 24", "30 – c = 24"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Winton 18 pachka pechenye sotib oldi. Jami pechenyelar soni 738 edi. Qaysi tenglama orqali har bir pachkada nechtadan pechenye borligini topish mumkin.",
        imageUrl:"",
        options: ["c + 18 = 738", "18 × c = 738", "738 - c = 18", "c : 18 = 738"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Tenglamani yeching x + 25 = 52",
        imageUrl:"",
        options: ["27", "28", "37", "77"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Tenglamani yeching x – 25 = 52",
        imageUrl:"",
        options: ["27", "28", "37", "77"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Tenglamani yeching (42 + x) + 30 = 100",
        imageUrl:"",
        options: ["27", "28", "37", "38"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Tenglamani yeching 90 – (x + 20) = 60",
        imageUrl:"",
        options: ["20", "130", "10", "170"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Tenglamani yeching 100 – (x – 10) = 80",
        imageUrl:"",
        options: ["20", "30", "10", "170"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Xat tashuvchi 35 ta xatni tarqatishi kerak edi. U bir necha xatni tarqatganidan keyin unda 20 ta xat qoldi. Xat tashuvchi nechta xat tarqatgan?",
        imageUrl:"",
        options: ["20", "15", "10", "55"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Tenglamani yeching 4 • x = 32",
        imageUrl:"",
        options: ["10", "7", "9", "8"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Tenglamani yeching (7 002 – x) – 160 = 5 348",
        imageUrl:"",
        options: ["1484", "1494", "1504", "1514"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Tenglamani yeching x•11 – 30 = 36",
        imageUrl:"",
        options: ["6", "1", "5", "2"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Tenglamani yeching 90 : x = 18",
        imageUrl:"",
        options: ["6", "1", "5", "2"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Tenglamani yeching x : 4 – 60 = 120",
        imageUrl:"",
        options: ["720", "45", "360", "90"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Tenglamani yeching 90 – 60 : x = 87",
        imageUrl:"",
        options: ["20", "30", "15", "10"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Tenglamani yeching 18 : x + 16 = 18",
        imageUrl:"",
        options: ["2", "3", "9", "10"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Tenglamani yeching 50 – 4•x = 14",
        imageUrl:"",
        options: ["35", "36", "8", "9"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Tenglamani yeching 780 : (x – 7) = 78",
        imageUrl:"",
        options: ["3", "17", "15", "29"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Tenglamani yeching x : 20 = 4 800 : 48",
        imageUrl:"",
        options: ["2000", "3000", "1500", "1000"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Tenglamani yeching x : 14 – 6 045 = 5 533",
        imageUrl:"",
        options: ["162 092", "827", "828", "162 093"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Tenglamani yeching 30 336 : x + 537 = 921",
        imageUrl:"",
        options: ["78", "89", "79", "88"],
        correctAnswer: 1
      },
      {
        id: "m19-19",
        text: "Tenglamani yeching x · 36 = 4 968 · 7",
        imageUrl:"",
        options: ["956", "966", "906", "916"],
        correctAnswer: 1
      },
     
    ]
  },
   {
    id: "m20-20",
    subject: "matematika",
    grade: 3,
    topic: "Grafikda ma’lumotlarni aks ettirilishi",
    questions: [
      {
        id: "m20-20",
        text: "Aylana joylashgan nuqta X o’qida qaysi nuqtaga to’g’ri keladi?",
        imageUrl:"/images/grafik1.png",
        options: ["8", "6", "1", "4"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Yurakning joylashgan koordinatasini toping.",
        imageUrl:"/images/grafik2.png",
        options: ["(2, 1)", "(6, 4)", "(3,7)", "(7, 3)"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Yuqoridan yulduzchaning o’rnini toping",
        imageUrl:"/images/grafik2.png",
        options: ["(2, 1)", "(6, 4)", "(3,7)", "(7, 3)"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Yuqoridan uchburchakning o’rnini toping",
        imageUrl:"/images/grafik2.png",
        options: ["(2, 1)", "(6, 4)", "(6,9)", "(9, 6)"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Quyidagi koordinatalar sistemasidan uchburchakning o’rnini toping",
        imageUrl:"/images/grafik5.png",
        options: ["(6, 1)", "(5, 3)", "(7,6)", "(1, 2)"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Yuqoridan yulduzchaning o’rnini toping",
        imageUrl:"/images/grafik5.png",
        options: ["(1, 6)", "(5, 3)", "(7,6)", "(1, 2)"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "A nuqtning koordinatasini toping",
        imageUrl:"/images/grafik7.png",
        options: ["(5, 1)", "(5, 3)", "(4, 1)", "(1, 5)"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "(8, 2) nuqtada qaysi harf turibdi?",
        imageUrl:"/images/grafik7.png",
        options: ["B", "H", "C", "F"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "(7, 7) nuqtada qaysi harf turibdi?",
        imageUrl:"/images/grafik7.png",
        options: ["B", "H", "C", "F"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "(6, 3) nuqtada qaysi harf turibdi?",
        imageUrl:"/images/grafik7.png",
        options: ["G", "H", "C", "F"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "(2, 8) nuqtada qaysi harf turibdi?",
        imageUrl:"/images/grafik7.png",
        options: ["B", "H", "C", "F"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Xaritada joylarning belgilari berilgan. Mebel dokoni (furniture store) qayerda joylashgan?",
        imageUrl:"/images/grafik12.png",
        options: ["(3, 5)", "(4, 2)", "(3,2)", "(2, 4)"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Yuqoridagi xaritadan pochta offisi (post office) qayerda joylashganligini toping.",
        imageUrl:"/images/grafik12.png",
        options: ["(3, 5)", "(4, 2)", "(3,2)", "(2, 4)"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Xaritadagi (4, 6) nuqtada nima joylashgan?",
        imageUrl:"/images/grafik14.png",
        options: ["Bank", "Car dealership", "Flower shop", "Dry cleaners"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Kutubxona (Library) qayerda joylashgan",
        imageUrl:"/images/grafik15.png",
        options: ["(6, 3)", "(3, 6)", "(7,7)", "(1, 4)"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Yuqoridagi xaritadan sexrli dokon (magic shop) qayerda?",
        imageUrl:"/images/grafik15.png",
        options: ["(6, 3)", "(3, 6)", "(7,7)", "(1, 4)"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Xaritada (3, 2) nuqtada nima joylashgan?",
        imageUrl:"/images/grafik17.png",
        options: ["Office supply store", "Train station", "Hotel", "Theatre"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Temiryo’l bekati (train station)dan mebel dokoni (furniture store)gacha qancha masofa bor ?",
        imageUrl:"/images/grafik18.png",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Kanselyariya dokoni (office supply stori)dan mebel dokoni (furniture store)gacha qancha masofa bor ?",
        imageUrl:"/images/grafik18.png",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Shifoxona (hospital)dan sexrli dokon (magic shop)gacha qancha masofa bor?",
        imageUrl:"/images/grafik20.png",
        options: ["6", "3", "4", "5"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Shifoxona (hospital)dan rassomchilik dokoni (art supply store)gacha qancha masofa bor?",
        imageUrl:"/images/grafik20.png",
        options: ["6", "3", "4", "5"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Quyidagi grafikda Amerika (AQSH)tarixidagi urushlarning davomiyligi keltirilgan savollarga javob bering. <b>1-jahon urushi necha yil davom etgan?</b>",
        imageUrl:"/images/grafik21.png",
        options: ["6", "8", "4", "5"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Quyidagi grafikda Amerika (AQSH)tarixidagi urushlarning davomiyligi keltirilgan savollarga javob bering. <b>Qaysi urush eng ko’p davom etgan?</b>",
        imageUrl:"/images/grafik21.png",
        options: ["2-jahon urushi", "1-jahon urushi", "fuqarolik urushi", "1 va 2-jahon urushlari"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text:  "Quyidagi grafikda Amerika (AQSH)tarixidagi urushlarning davomiyligi keltirilgan savollarga javob bering. <b>Fuqarolik urushi 1-jahon urushidan necha yil ko’p davom etgan?</b>",
        imageUrl:"/images/grafik21.png",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Quyidagi grafikda bir nechta turistning nechta davlatga borganligi ko’rsatilgan.<b>Spencer nechta davlatga tashrif buyurgan?</b>",
        imageUrl:"/images/grafik25.png",
        options: ["5", "25", "20", "15"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Quyidagi grafikda bir nechta turistning nechta davlatga borganligi ko’rsatilgan.<b>Kim eng ko’p sayohat qilgan?</b>",
        imageUrl:"/images/grafik25.png",
        options: ["Ying", "Jenny", "Shelby", "Spencer"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Quyidagi grafikda bir nechta turistning nechta davlatga borganligi ko’rsatilgan.<b>Shelby Yingdan qancha ko’p davlatga borgan?</b>",
        imageUrl:"/images/grafik25.png",
        options: ["5", "10", "20", "15"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Rassomchillik ko’rgazmasiga ko’plab rasssomlar tashrif buyurishdi. Ba’zi rassomlar 10 tadan kam san’at asari bilan, ba’zilari 10-20 orasidagi ishlari bilan va eng ko’p asari borlar 91-100 ta ishi bilan ishtirok etishdi. Ammo hech bir rassom 41-50 ta sonli ishlari bilan ishtirok etishmadi. <b>Nechta rassomning ishlari soni 51-60 oralig’ida edi?</b>",
        imageUrl:"/images/grafik28.png",
        options: ["50", "40", "60", "20"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Rassomchillik ko’rgazmasiga ko’plab rasssomlar tashrif buyurishdi. Ba’zi rassomlar 10 tadan kam san’at asari bilan, ba’zilari 10-20 orasidagi ishlari bilan va eng ko’p asari borlar 91-100 ta ishi bilan ishtirok etishdi. Ammo hech bir rassom 41-50 ta sonli ishlari bilan ishtirok etishmadi. <b>Ko’rgazmadagi nechta rassomda 11-40 oralig’ida san’at asari bor edi?</b>",
        imageUrl:"/images/grafik28.png",
        options: ["20", "40", "50", "60"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Rassomchillik ko’rgazmasiga ko’plab rasssomlar tashrif buyurishdi. Ba’zi rassomlar 10 tadan kam san’at asari bilan, ba’zilari 10-20 orasidagi ishlari bilan va eng ko’p asari borlar 91-100 ta ishi bilan ishtirok etishdi. Ammo hech bir rassom 41-50 ta sonli ishlari bilan ishtirok etishmadi. <b>80 ta rassomda bir xil miqdorda ishlari bor. Ularning ishlari soni nechta bo’lishi mumkin?</b>",
        imageUrl:"/images/grafik28.png",
        options: ["50", "65", "60", "20"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Bankning 6 ta kassasi bo’lib, hozir 3-kassa ishlamayapdi. Qolgan kassalarda odamlar navbatda turishibdi. Bankda nechta odam kassalar oldida navbatda turibdi?",
        imageUrl:"/images/grafik31.png",
        options: ["30", "35", "34", "36"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Qaysi kassada 2 ta odam navbatda turibdi?",
        imageUrl:"/images/grafik32.png",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Quyida bir nechta o’yinchilarning olgan ochkolari va ularning soni bo’yicha diogramma tuzilgan. Misol uchun 0-9 orasida ochko olgan o’yinchilar soni 5 ta. Oxirgi ustunning balandligini toping.",
        imageUrl:"/images/grafik33.png",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Jadvaldagi ma’lumotlardan foydalanib, ustunli diogramma tuzilgan. 3-ustun balandligini toping.",
        imageUrl:"/images/grafik34.png",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Quyida bir nechta o’yinchilarning olgan ochkolari va ularning soni bo’yicha diogramma tuzilgan. Misol uchun 10-14 orasida ochko olgan o’yinchilar soni 1 ta. 1-va 2-ustunlar balandliklarini toping.",
        imageUrl:"/images/grafik35.png",
        options: ["2, 3", "4, 1", "4, 2", "5, 0"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Quyidagi jadvalda qish faslida bolalarning qaysi mashg’ulotlar bilan band bo’lishi keltirilgan. Bitta qor parchasi 2 ta bolani bildiradi. <b>Nechta bola qorbo’ron (making snowballs) o’ynamoqda?</b>",
        imageUrl:"/images/grafik36.png",
        options: ["16", "8", "18", "9"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Quyidagi jadvalda qish faslida bolalarning qaysi mashg’ulotlar bilan band bo’lishi keltirilgan. Bitta qor parchasi 2 ta bolani bildiradi. <b>Qorbobo yasayotgan bolalar nechta (making snowmen)?</b>",
        imageUrl:"/images/grafik36.png",
        options: ["1", "8", "2", "9"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Azamat imtihonga tayyorlanish uchun kitoblar o’qimoqda. U aprel oyida nechta kitob o’qidi?",
        imageUrl:"/images/grafik38.png",
        options: ["6", "8", "2", "9"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Bir nechta talaba olma terayapdi. Tyler 30 ta, Christoph 5 ta, Hilda 10 ta, Oliver 50 ta va Lance 45 ta olma terdi. Ularni terga olmalari bo’yicha quyidagicha jadval tayyorlandi. O’sha jadvalda Hildaning qatorida nechta belgi turishi kerak?",
        imageUrl:"/images/grafik39.png",
        options: ["1", "6", "2", "4"],
        correctAnswer: 1
      },
       {
        id: "m20-20",
        text: "Jesika ko’rgan filmlari soni grafikda ko’rsatilgan. U qaysi oyda 20 ta film tamosha qilgan?",
        imageUrl:"/images/grafik40.png",
        options: ["July", "August", "October", "November"],
        correctAnswer: 1
      },
    ]
  },
  {
    id: "m21-21",
    subject: "matematika",
    grade: 3,
    topic: "Vaqtga doir misollar",
    questions: [
      {
        id: "m21-21",
        text: "Soat nechani ko’rsatmoqda?",
        imageUrl:"/images/vaqt1.png",
        options: ["to’rt yarim", "besh yarim", "beshdan o’n besh minut o’tdi", "uchdan yigirma besh minut o’tdi"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Soat nechani ko’rsatmoqda?",
        imageUrl:"/images/vaqt2.png",
        options: ["11:20", "3:55", "11:30", "4:05"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Qaysi soat oltidan o’ttiz uch minut o’tganini ko’rsatmoqda?",
        imageUrl:"/images/vaqt3.png",
        options: ["A", "B", "C", "hech biri"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Soatga qarab vaqtni ko’rsating",
        imageUrl:"/images/vaqt4.png",
        options: ["A", "B", "C", "hech biri"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "To’g’ri javobni toping.",
        imageUrl:"/images/vaqt5.png",
        options: ["A", "B", "C", "hech biri"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "To’g’ri javobni toping",
        imageUrl:"/images/vaqt6.png",
        options: ["A", "B", "C", "hech biri"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Soat nechani ko’rsatmoqda?",
        imageUrl:"/images/vaqt7.png",
        options: ["16:30", "3:30", "5:20", "16:25"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Soat nechani ko’rsatmoqda?",
        imageUrl:"/images/vaqt8.png",
        options: ["16:50", "4:30", "5:20", "16:25"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Soat nechani ko’rsatmoqda?",
        imageUrl:"/images/vaqt9.png",
        options: ["02:07", "01:10", "13:15", "21:05"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "G’olib ertalab uyg’onganida soat quyidagi vaqtni ko’rsatdi. U 24 soatlik hisobda nechada uyg’ongan?",
        imageUrl:"/images/vaqt10.png",
        options: ["21:00", "06:00", "9:00", "18:00"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Abdumalik aka ishdan kech qaytdi. Qorong’u tushgan edi.  Soatiga qaraganda vaqt quyidagicha edi. Abdumalik aka  uyiga kelganda soat 24 soatli vaqt bo’yicha nechada edi?",
        imageUrl:"/images/vaqt11.png",
        options: ["09:45", "09:50", "21:45", "21:50"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Doniyor bugun suzishga  bormoqchi. U ertalab kelganida suzish basseyni hali ochilmagan ekan. Soat esa quyidagi vaqtni ko’rsatmoqda edi. U qays vaqtda  basseynga borgan?",
        imageUrl:"/images/vaqt12.png",
        options: ["19:45", "19:30", "07:35", "07:30"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Alijon qish kunlari oilasi bilan kun isishini kutishdi, keyin bog’ga aylanish uchun borishdi. Ular soat nechada bog’ga borishgan?",
        imageUrl:"/images/vaqt13.png",
        options: ["12:45", "12:30", "00:45", "00:30"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Vaqtni raqam bilan yozing: yettidan yarim soat o’tdi.",
        imageUrl:"",
        options: ["7:45", "07:30", "07:50", "19:20"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Vaqtni raqam bilan yozing: besh minut kam uch.",
        imageUrl:"",
        options: ["2:55", "03:05", "03:55", "15:20"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Vaqtni raqam bilan yozing: birdan chorak soat o’tdi",
        imageUrl:"",
        options: ["1:45", "01:15", "01:20", "1:30"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Vaqtni raqam bilan yozing: yetti minut kam olti.",
        imageUrl:"",
        options: ["5:53", "06:07", "06:53", "05:07"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Soatga qarab hozirgi vaqtni toping, o’n besh minutdan keyin soat necha bo’ladi?",
        imageUrl:"/images/vaqt18.png",
        options: ["20:30", "10:20", "10:30", "10:40"],
        correctAnswer: 1
      },
     {
        id: "m21-21",
        text: "Soatga qarab hozirgi vaqtni toping, 40 minutdan keyin soat necha bo’ladi?",
        imageUrl:"/images/vaqt19.png",
        options: ["11:45", "12:45", "12:15", "12:25"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Hozir soat 11 dan chorak soat o’tdi. 1 soatdan keyin vaqt necha bo’ladi?",
        imageUrl:"",
        options: ["12:45", "12:15", "12:00", "13:05"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Komila matematika imtihonida qatnashmoqda. U test yechishni 10:30 da boshladi va  11:30 da tugatdi. U test yeshish uchun qancha vaqt sarflagan?",
        imageUrl:"",
        options: ["1 h", "1 h 20 min", "50 min", "1 h 10 min"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Iso qalam ishlab chiqaradigan korxonaga sayohatga bordi. Sayohat 9:40 da boshlandi va 10:30 da tugadi. U qancha vaqt korxonada bo’lgan?",
        imageUrl:"",
        options: ["1 h", "1 h 20 min", "50 min", "1 h 10 min"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Karim bazm qilmoqda. Uning birinchi mehmoni soat 1:50 da yetib keldi. Ular  ovqatlanishdi, o’yin o’ynab, hazil mutoyibalar qilishdi. Keyin mehmonlar ketishni boshlashdi. Oxirgi mehmoni 5:35 da ketdi. Bazm qancha vaqt davom etgan?",
        imageUrl:"",
        options: ["4 h", "3 h 30 min", "3 h 45 min", "4 h 10 min"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Yahyoning pionina darsi kunduzi 3:55 da boshlanib, 4:45 da tugaydi. Uning mashg’uloti qancha vaqt davom etadi?",
        imageUrl:"",
        options: ["1 h", "50 min", "1 h 5 min", "55 min"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Quyida iyun oyining kalendari keltirilgan. Kalendarda 1-iyun seshanbaga to’g’ri kelmoqda. 12-iyun qaysi kunga to’g’ri keladi?",
        imageUrl:"/images/vaqt25.png",
        options: ["Yakshanba", "Dushanba", "Shanba", "Payshanba"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Kalendardan 12-sentyabr qaysi kunga to’g’ri kelishini toping",
        imageUrl:"/images/vaqt26.png",
        options: ["Yakshanba", "Dushanba", "Shanba", "Payshanba"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Fevral oyidagi 3-chorshanba qaysi sanaga to’g’ri keladi?",
        imageUrl:"/images/vaqt27.png",
        options: ["17-fevral", "3-fevral", "13-fevral", "10-fevral"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Yanvar oyidagi 2-shanba qaysi sanaga to’g’ri keladi?",
        imageUrl:"/images/vaqt28.png",
        options: ["5-yanvar", "11-yanvar", "12-yanvar", "19-yanvar"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Quyidagilaradan qaysi biri noto’g’ri?",
        imageUrl:"",
        options: ["76 min = 1 h 16 min", "2 hafta = 20 160 min", "mart oyida 720 soat bor", "7 200 s = 2 h"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Hisoblang. 8 h 46 min + 3 h 59 min",
        imageUrl:"",
        options: ["12 h 5 min", "12 h 45 min", "11 h 5 min", "11 h 45 min"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Hisoblang. 45 h 18 min – 37 h 38 min",
        imageUrl:"",
        options: ["7 h 40 min", "7 h 80 min", "8 h 20 min", "8 h 40 min"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Hisoblang. 7 h 58 min 37 s – 1 h 25 min 31 s",
        imageUrl:"",
        options: ["5 h 33 min 6 s", "9 h 24 min 8 s", "6 h 23 min 8 s", "6 h 33 min 6 s"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Hisoblang. 4 h 17 min 42 s + 1 h 16 mi 17 s",
        imageUrl:"",
        options: ["5 h 34 min", "5 h 33 min 59 s", "6 h 33 min 59 s", "6 h 34 min"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "1 soat necha minut?",
        imageUrl:"",
        options: ["30", "60", "100", "160"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "1 asr necha yil?",
        imageUrl:"",
        options: ["30", "60", "100", "160"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "4 soat necha minut?",
        imageUrl:"",
        options: ["120", "240", "400", "640"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "1947-yil nechanchi asrga to’g’ri keladi?",
        imageUrl:"",
        options: ["20-asr", "19-asr", "18-asr", "50-asr"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "2020-yil nechanchi ming yillik deyiladi.",
        imageUrl:"",
        options: ["1-ming yillik", "3-ming yillik", "2-ming yillik", "4-ming yillik"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Tushirib qoldirilgan vaqtni toping.",
        imageUrl:"/images/vaqt39.png",
        options: ["12:00", "13:00", "11:00", "10:00"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Tushirib qoldirilgan vaqtni toping.",
        imageUrl:"/images/vaqt40.png",
        options: ["2:00", "3:00", "1:00", "3:30"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Tushirib qoldirilgan vaqtni toping.",
        imageUrl:"/images/vaqt41.png",
        options: ["6:00", "4:00", "7:00", "8:30"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Tushirib qoldirilgan vaqtni toping.",
        imageUrl:"/images/vaqt42.png",
        options: ["10:30", "10:00", "09:30", "8:30"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Chorak soat nimaga teng;",
        imageUrl:"",
        options: ["30 min", "15 min", "10 min", "25 min"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "30 minut necha soat?",
        imageUrl:"",
        options: ["chorak soat", "1 soat", "yarim soat", "2 soat"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "24 soatlik vaqt yozilgan 23:30 ni 12 soatlikda yozing.",
        imageUrl:"",
        options: ["11:30", "10:30", "09:30", "8:30"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "24 soatlik vaqt yozilgan 17:10 ni 12 soatlikda yozing.",
        imageUrl:"",
        options: ["17:10", "5:10", "4:10", "7:10"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Tushdan keyingi 1:17 vaqtini 24soatlik vaqt ko’rinishida yozing:",
        imageUrl:"",
        options: ["17:10", "13:27", "12:17", "13:17"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Tushdan keyingi 2:42 vaqtini 24 soatlik vaqt ko’rinishida yozing:",
        imageUrl:"",
        options: ["14:52", "15:42", "14:42", "13:42"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Futbol musobaqasi o’yinlar jadvali berilgan. Savollarga javob bering. (a.m. – tushdan oldin, p.m.- tushdan keyin) <b>8:50 da qaysi jamoalar o’yini boshlanadi?</b>",
        imageUrl:"/images/vaqt49.png",
        options: ["“Xitoy” va “Avstraliya”", "“Italiya” va “Germaniya”", "“Braziliya” va “Meksika”", "“Argentina” va “Eron”"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Futbol musobaqasi o’yinlar jadvali berilgan. Savollarga javob bering. (a.m. – tushdan oldin, p.m.- tushdan keyin) <b>“Italiya va Germaniya” va “Xitoy va Avstraliya” jamoalari o’yinlari orasida qancha  vaqt bor?</b>",
        imageUrl:"/images/vaqt49.png",
        options: ["1 h 40 min", "2 h", "1 h 20min", "2 h 10 min"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Poyezd Toshkentdan soat nechada yo’lga chiqib, Termizga soat nechada yetib kelishi rasmda ko’rsatilgan. Agar poyezd ertalab yo’lga chiqib kechga yetib borgan bo’lsa, u vaqt yo’l yurgan?",
        imageUrl:"/images/vaqt51.png",
        options: ["13 h 50 min", "12 h 20 min", "13 h 40 min", "13 h 20 min"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Do’kon soat nechada ochilishi, smenalar almashish vaqti va nechada yopilishi haqidagi ma’lumotlar quyidagi rasmda ko’rsatilgan. Do’konda 1-smena va 2-smena orasida qancha vaqt tanaffus bo’ladi?",
        imageUrl:"/images/vaqt52.png",
        options: ["2 h", "1 h", "1 h 30 min", "30 min"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Poyezd Termizga 18:24 da yetib keldi. Mahmud elektron tablodagi raqamlar yig’indisi 15 ga teng ekaniga ahamiyat berdi. Tablodagi raqamlarning eng katta yig’indisi nechaga teng bo’lishi memkin?",
        imageUrl:"",
        options: ["26", "24", "20", "19"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Hisoblang. 5 d + 234 h",
        imageUrl:"",
        options: ["284 h", "734 h", "354 h", "14 d"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Hisoblang. 3 d 42 min + 6 h 18 min",
        imageUrl:"",
        options: ["3 d 7 h", "9 d 1 h", "9 d 60 min", "3 d 6 h"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Hisoblang. 6 h 42 min : 67 + 4 ꞏ (357 min – 2 h 15 min)",
        imageUrl:"",
        options: ["10 h", "894 min", "15 h", "890 min"],
        correctAnswer: 1
      },
      {
        id: "m21-21",
        text: "Bahrom soat 5:00 da baliq xo’jaligiga baliq olish uchun ketadi. U baliqni 6:30 da do’konga olib boradi. Do’kon soat 7:00 da ochiladi va 14:00 gacha ishlaydi. 14:00 da do’kon yopiladi va Bahrom xarajatlar va daromadni hisoblash uchun yana bir soat qolib ketadi. Ahromning ish kuni qancha vaqt davom etadi?",
        imageUrl:"",
        options: ["7 h", "8 h", "9 h", "10 h"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "m22-22",
    subject: "matematika",
    grade: 3,
    topic: "Geometrik o’lchovlar (hisoblashlar)",
    questions: [
      {
        id: "m22-22",
        text: "To’g’ri to’rtburchak perimetrini toping.",
        imageUrl:"/images/geometrik1.png",
        options: ["20", "12", "24", "18"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "To’g’ri to’rtburchak perimetrini toping.",
        imageUrl:"/images/geometrik2.png",
        options: ["20", "26", "24", "30"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Kvadratning perimetrini toping.",
        imageUrl:"/images/geometrik3.png",
        options: ["36", "12", "24", "48"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Kvadratning perimetrini toping.",
        imageUrl:"/images/geometrik4.png",
        options: ["121", "33", "44", "48"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Berilgan shaklning perimetrini toping.",
        imageUrl:"/images/geometrik5.png",
        options: ["10", "6", "9", "8"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Berilgan shaklning perimetrini toping.",
        imageUrl:"/images/geometrik6.png",
        options: ["16", "20", "22", "24"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Berilgan shaklning perimetrini toping.",
        imageUrl:"/images/geometrik7.png",
        options: ["18", "20", "22", "24"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Berilgan shaklning perimetrini toping. Shaklning barcha tomonlari teng.",
        imageUrl:"/images/geometrik8.png",
        options: ["35", "20", "40", "25"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Berilgan shaklning perimetrini toping.",
        imageUrl:"/images/geometrik9.png",
        options: ["26", "20", "22", "24"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Berilgan shaklning perimetrini toping.",
        imageUrl:"/images/geometrik10.png",
        options: ["38", "40", "42", "44"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Berilgan shaklning perimetrini toping.",
        imageUrl:"/images/geometrik11.png",
        options: ["48", "50", "52", "54"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Berilgan shaklning perimetrini toping.",
        imageUrl:"/images/geometrik12.png",
        options: ["56", "50", "52", "54"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Uchburchakning perimetri 17 birlikka teng. Uning noma’lum tomonini toping.",
        imageUrl:"/images/geometrik13.png",
        options: ["5", "6", "4", "3"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Uchburchakning perimetri 18 birlikka teng. Uning noma’lum tomonini toping.",
        imageUrl:"/images/geometrik14.png",
        options: ["5", "6", "4", "3"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Berilgan shaklning perimetri 50 cm ga teng. Uning noma’lum tomoni uzunligini toping.",
        imageUrl:"/images/geometrik15.png",
        options: ["5 cm", "7 cm", "10 cm", "9 cm"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Berilgan shaklning perimetri 42 m ga teng. Uning noma’lum tomoni uzunligini toping.",
        imageUrl:"/images/geometrik16.png",
        options: ["12 m", "11 m", "13 m", "14 m"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Shaklning yuzini toping. (Shaklda nechta kvadratchalar bor?)",
        imageUrl:"/images/geometrik17.png",
        options: ["19 cm<sup>2</sup>", "18 cm<sup>2</sup>", "17 cm<sup>2</sup>", "20 cm<sup>2</sup>"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Shaklning yuzini toping.",
        imageUrl:"/images/geometrik18.png",
        options: ["16 cm<sup>2</sup>", "18 cm<sup>2</sup>", "17 cm<sup>2</sup>", "15 cm<sup>2</sup>"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Shaklning yuzini toping.",
        imageUrl:"/images/geometrik19.png",
        options: ["16 cm<sup>2</sup>", "18 cm<sup>2</sup>", "17 cm<sup>2</sup>", "15 cm<sup>2</sup>"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Shaklning yuzini toping.",
        imageUrl:"/images/geometrik20.png",
        options: ["6 cm<sup>2</sup>", "8 cm<sup>2</sup>", "7 cm<sup>2</sup>", "9 cm<sup>2</sup>"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Qaysi shaklning yuzi 4 kvadrat birlikka teng?",
        imageUrl:"/images/geometrik21.png",
        options: ["birinchi", "ikkinchi", "ikkisi ham teng", "teng emas"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Qaysi shaklning yuzi 6 kvadrat birlikka teng?",
        imageUrl:"/images/geometrik22.png",
        options: ["birinchi", "ikkinchi", "ikkisi ham teng", "teng emas"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Qaysi shaklning yuzi 9 kvadrat birlikka teng?",
        imageUrl:"/images/geometrik23.png",
        options: ["birinchi", "ikkinchi", "ikkisi ham teng", "teng emas"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Qaysi shaklning yuzi 10 kvadrat birlikka teng?",
        imageUrl:"/images/geometrik24.png",
        options: ["birinchi", "ikkinchi", "uchinchi", "teng emas"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Qaysi shaklning yuzi 12 kvadrat birlikka teng?",
        imageUrl:"/images/geometrik25.png",
        options: ["birinchi", "ikkinchi", "uchinchi", "teng emas"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Yuzlari teng bo’lgan ikki shaklni tanlang.",
        imageUrl:"/images/geometrik26.png",
        options: ["1, 2-shakllar", "1, 3-shakllar", "2, 3-shakllar"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Yuzlari teng bo’lgan ikki shaklni tanlang.",
        imageUrl:"/images/geometrik27.png",
        options: ["1, 2-shakllar", "1, 3-shakllar", "2, 3-shakllar"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Yuzlari teng bo’lgan ikki shaklni tanlang.",
        imageUrl:"/images/geometrik28.png",
        options: ["1, 2-shakllar", "1, 3-shakllar", "2, 3-shakllar"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Yuzlari teng bo’lgan ikki shaklni tanlang.",
        imageUrl:"/images/geometrik29.png",
        options: ["1, 2-shakllar", "1, 3-shakllar", "2, 3-shakllar"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Yuzlari teng bo’lgan ikki shaklni tanlang.",
        imageUrl:"/images/geometrik30.png",
        options: ["1, 2-shakllar", "1, 3-shakllar", "2, 3-shakllar"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "To’g’ri to’rtburchakning yuzini toping.",
        imageUrl:"/images/geometrik31.png",
        options: ["16 m<sup>2</sup>", "32 m<sup>2</sup>", "30 m<sup>2</sup>", "60 m<sup>2</sup>"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "To’g’ri to’rtburchakning yuzini toping.",
        imageUrl:"/images/geometrik32.png",
        options: ["15 cm<sup>2</sup>", "30 cm<sup>2</sup>", "20 cm<sup>2</sup>", "25 cm<sup>2</sup>"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "To’g’ri to’rtburchakning yuzini toping.",
        imageUrl:"/images/geometrik33.png",
        options: ["15 cm<sup>2</sup>", "7 cm<sup>2</sup>", "10 cm<sup>2</sup>", "10 cm<sup>2</sup>"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "To’g’ri to’rtburchakning yuzini toping.",
        imageUrl:"/images/geometrik34.png",
        options: ["15 cm<sup>2</sup>", "30 cm<sup>2</sup>", "20 cm<sup>2</sup>", "25 cm<sup>2</sup>"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "To’g’ri to’rtburchakning noma’lum tomoni uzunligini toping.",
        imageUrl:"/images/geometrik35.png",
        options: ["5 cm", "10 cm", "20 cm", "8 cm"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "To’g’ri to’rtburchakning noma’lum tomoni uzunligini toping.",
        imageUrl:"/images/geometrik36.png",
        options: ["5 m", "6 m", "8 cm", "6 cm"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "To’g’ri to’rtburchakning noma’lum tomoni uzunligini toping.",
        imageUrl:"/images/geometrik37.png",
        options: ["5 m", "6 m", "8 cm", "6 cm"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "To’g’ri to’rtburchakning noma’lum tomoni uzunligini toping.",
        imageUrl:"/images/geometrik38.png",
        options: ["5 m", "6 m", "8 cm", "6 cm"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Rasmda ko‘rsatilgan shakllarning yuzini va perimetrini toping. Bundagi kataklarning 2 tasi 1 cm yoki 1 tasi 5 mm deb hisoblanadi.<b>1-shaklning perimetri va yuzini toping.</b>",
        imageUrl:"/images/geometrik39.png",
        options: ["P=90 mm, S=350 mm<sup>2</sup>", "P=90 mm, S=450 mm<sup>2</sup>", "P=18 cm, S=14 cm<sup>2</sup>"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Rasmda ko‘rsatilgan shakllarning yuzini va perimetrini toping. Bundagi kataklarning 2 tasi 1 cm yoki 1 tasi 5 mm deb hisoblanadi.<b>2-shaklning perimetri va yuzini toping.</b>",
        imageUrl:"/images/geometrik39.png",
        options: ["P=70 mm, S=225 mm<sup>2</sup>", "P=60 mm, S=225 mm<sup>2</sup>", "P=12 cm, S=9 cm<sup>2</sup>"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Rasmda ko‘rsatilgan shakllarning yuzini va perimetrini toping. Bundagi kataklarning 2 tasi 1 cm yoki 1 tasi 5 mm deb hisoblanadi.<b>3-shaklning perimetri va yuzini toping.</b>",
        imageUrl:"/images/geometrik39.png",
        options: ["P=100 mm, S=1400 mm<sup>2</sup>", "P=24 cm, S=32 cm<sup>2</sup>", "P=12 cm, S=8 cm<sup>2</sup>"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Rasmda ko‘rsatilgan shakllarning yuzini va perimetrini toping. Bundagi kataklarning 2 tasi 1 cm yoki 1 tasi 5 mm deb hisoblanadi.<b>4-shaklning perimetri va yuzini toping.</b>",
        imageUrl:"/images/geometrik39.png",
        options: ["P=120 mm, S=1400 mm<sup>2</sup>", "P=24 cm, S=32 cm<sup>2</sup>", "P=14 cm, S=8 cm<sup>2</sup>"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Rasmda ko‘rsatilgan shakllarning yuzini va perimetrini toping. Bundagi kataklarning 2 tasi 1 cm yoki 1 tasi 5 mm deb hisoblanadi.<b>5-shaklning perimetri va yuzini toping.</b>",
        imageUrl:"/images/geometrik39.png",
        options: ["P=80 mm, S=300 mm<sup>2</sup>", "P=10 cm, S=4 cm<sup>2</sup>", "P=8 cm, S=8 cm<sup>2</sup>"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Berilgan shaklning hajmini toping.",
        imageUrl:"/images/geometrik44.png",
        options: ["7m<sup>3</sup>", "9m<sup>3</sup>", "8cm<sup>3</sup>", "10cm<sup>3</sup>"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Berilgan shaklning hajmini toping.",
        imageUrl:"/images/geometrik45.png",
        options: ["13m<sup>3</sup>", "12m<sup>3</sup>", "11cm<sup>3</sup>", "10cm<sup>3</sup>"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Berilgan shaklning hajmini toping.",
        imageUrl:"/images/geometrik46.png",
        options: ["7m<sup>3</sup>", "9m<sup>3</sup>", "8cm<sup>3</sup>", "10cm<sup>3</sup>"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Berilgan shaklning hajmini toping.",
        imageUrl:"/images/geometrik47.png",
        options: ["60m<sup>3</sup>", "48m<sup>3</sup>", "72cm<sup>3</sup>", "45cm<sup>3</sup>"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Berilgan shaklning hajmini toping.",
        imageUrl:"/images/geometrik48.png",
        options: ["60m<sup>3</sup>", "48m<sup>3</sup>", "32m<sup>3</sup>", "36m<sup>3</sup>"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Berilgan shaklning hajmini toping.",
        imageUrl:"/images/geometrik49.png",
        options: ["60m<sup>3</sup>", "48m<sup>3</sup>", "72m<sup>3</sup>", "36m<sup>3</sup>"],
        correctAnswer: 1
      },
      {
        id: "m22-22",
        text: "Berilgan shaklning hajmini toping.",
        imageUrl:"/images/geometrik50.png",
        options: ["300dm<sup>3</sup>", "320dm<sup>3</sup>", "360dm<sup>3</sup>", "240dm<sup>3</sup>"],
        correctAnswer: 1
      },
    ]
  },
  {
    id: "m23-23",
    subject: "matematika",
    grade: 3,
    topic: "To‘g‘ri to‘rtburchak va kvadrat",
    questions: [
      {
        id: "m23-23",
        text: "Tomonlari 5 cm va 4 cm bo‘lgan to‘g‘ri to‘rtburchakning perimetrini toping.",
        imageUrl:"",
        options: ["18 cm", "20 cm", "40 cm", "48 cm"],
        correctAnswer: 1
      },
      {
        id: "m23-23",
        text: "Bo‘yi 8 m, eni 5 m bo‘lgan to‘g‘ri to‘rtburchakning yuzini toping.",
        imageUrl:"/images/togritortburchak1.png",
        options: ["40 m<sup>2</sup>", "13 m<sup>2</sup>", "26 m<sup>2</sup>", "48 m<sup>2</sup>"],
        correctAnswer: 1
      },
      {
        id: "m23-23",
        text: "Eni 26 cm, bo‘yi 20 cm bo‘lgan to‘g‘ri to‘rtburchakning perimetrini toping.",
        imageUrl:"",
        options: ["92 cm", "46 cm", "6 cm", "12 cm"],
        correctAnswer: 1
      },
      {
        id: "m23-23",
        text: "Tomoni 6 cm bo'lgan kvadratning perimetrini toping.",
        imageUrl: "",
        options: ["24 cm", "20 cm", "22 cm", "26 cm"],
        correctAnswer: 1
      },
      {
        id: "m23-23",
        text: "Tomoni a = 3 cm va b = 5 cm bo'lgan to'g'ri to'rtburchakning perimetri va yuzini toping.",
        imageUrl: "",
        options: ["P=16 cm, S=15 cm<sup>2</sup>", "P=8 cm, S=15 cm<sup>2</sup>", "P=15 cm, S=8 cm<sup>2</sup>", "P=15 cm, S=16 cm<sup>2</sup>"],
        correctAnswer: 1
      },
      {
        id: "m23-23",
        text: "Yuzi 72 cm<sup>2</sup> bo'lgan to'g'ri to'rtburchakning eni va bo'yi quyidagilarning qaysi biriga teng bo'la olmaydi?",
        imageUrl: "",
        options: ["42 cm va 2 cm", "8 cm va 9 cm", "24 cm va 3 cm", "18 cm va 4 cm"],
        correctAnswer: 1
      },
      {
        id: "m23-23",
        text: "To'g'ri to'rtburchak shaklidagi ekin maydonining bo'yi 840 m, eni bo'yidan 60 m kam. Ekin maydonining perimetrini toping.",
        imageUrl: "",
        options: ["3240 m", "3200 m", "3000 m", "3248 m"],
        correctAnswer: 1
      },
      {
        id: "m23-23",
        text: "Tomoni a = 4 cm bo'lgan kvadratning perimetri va yuzini toping.",
        imageUrl: "",
        options: ["P=16 cm, S=16 cm<sup>2</sup>", "P=16 cm, S=8 cm<sup>2</sup>", "P=8 cm, S=16 cm<sup>2</sup>", "P=8 cm, S=8 cm<sup>2</sup>"],
        correctAnswer: 1
      },
      {
        id: "m23-23",
        text: "Kvadrat tomonining uzunligi 26 dm ga teng. Kvadratning perimetrini toping.",
        imageUrl: "",
        options: ["104 dm", "108 dm", "24 dm<sup>2</sup>", "36 dm<sup>3</sup>"],
        correctAnswer: 1
      },
      {
        id: "m23-23",
        text: "Futbol maydoni o'lchamlariga ko'ra (90m va 40m) uning yuzini hisoblang.",
        imageUrl: "/images/togritortburchak4.png",
        options: ["3600 m<sup>2</sup>", "260 m<sup>2</sup>", "130 m", "360 m<sup>2</sup>"],
        correctAnswer: 1
      },
      {
        id: "m23-23",
        text: "Stolning bo'yi 1 m 40 cm, eni 80 cm. Stolning yuzi necha kvadrat detsimetrga teng?",
        imageUrl: "",
        options: ["1102", "1120", "112", "11200"],
        correctAnswer: 1
      },
      {
        id: "m23-23",
        text: "Tomoni 3 cm 5 mm bo'lgan kvadrat perimetrini toping.",
        imageUrl: "",
        options: ["14 cm", "12 cm", "6 cm", "7 cm"],
        correctAnswer: 1
      },
        
      {
        id: "m23-23",
        text: "Uy eshiklaridan birining boʻyi 2 m 40 cm, eni 80 cm, ikkinchi eshikning boʻyi 1 m 60 cm, eni 70 cm ga teng. Qaysi eshikning yuzi katta va qanchaga katta?",
        imageUrl: "",
        options: ["birinchi eshik 800 cm<sup>2</sup> ga", "birinchi eshik 1000 cm<sup>2</sup> ga", "ikkinchi eshik 800 cm<sup>2</sup> ga", "ikkinchi eshik 1000 cm<sup>2</sup> ga"],
        correctAnswer: 0
      },
      {
        id: "m23-23",
        text: "Boks ringi atrofi 4 qavat arqon bilan o'ralgan. Agar ring tomoni 6 m bo'lgan kvadrat shaklda bo'lsa, uni oʻrash uchun necha m arqon kerak bo'ladi?",
        imageUrl: "/images/togritortburchak14.png",
        options: ["24 m", "48 m", "96 m", "120 m"],
        correctAnswer: 2
      },
      {
        id: "m23-23",
        text: "To'g'ri to'rtburchakning bo'yi 12 cm, eni esa undan 3 marta qisqa. To'g'ri to'rtburchakning perimetrini toping.",
        imageUrl: "",
        options: ["30 cm", "42 cm", "32 cm", "40 cm"],
        correctAnswer: 2
      },
      {
        id: "m23-23",
        text: "Kvadratning perimetri 16 cm ga teng. Kvadratning tomonini toping.",
        imageUrl: "",
        options: ["2 cm", "16 cm<sup>2</sup>", "8 cm", "4 cm"],
        correctAnswer: 3
      },
      {
        id: "m23-23",
        text: "Perimetri 64 cm boʻlgan kvadratning tomoni necha santimetr bo'ladi?",
        imageUrl: "",
        options: ["16", "32", "8", "4"],
        correctAnswer: 0
      },
      {
        id: "m23-23",
        text: "Boʻyi 8 m, yuzi 40 m<sup>2</sup> boʻlgan to'g'ri to'rtburchakning enini toping.",
        imageUrl: "/images/togritortburchak18.png",
        options: ["16 m", "8 m", "12 m", "5 m"],
        correctAnswer: 3
      },
      {
        id: "m23-23",
        text: "Uzunligi 864 mm boʻlgan sim buklanib, kvadrat shakliga keltirildi. Hosil boʻlgan shaklning tomoni necha millimetrga teng?",
        imageUrl: "",
        options: ["54", "108", "432", "216"],
        correctAnswer: 3
      },
      {
        id: "m23-23",
        text: "To'g'ri to'rtburchakning yuzi 60 dm<sup>2</sup>. Uning bir tomonining uzunligi 5 dm ga teng. Ikkinchi tomonini uzunligini toping.",
        imageUrl: "",
        options: ["12 dm", "15 dm", "9 dm", "13 dm"],
        correctAnswer: 0
      },
      {
        id: "m23-23",
        text: "Kvadratning perimetri 28 cm ga teng. Kvadrat tomonining uzunligi qanday?",
        imageUrl: "",
        options: ["4 cm", "7 cm", "6 cm", "14 cm"],
        correctAnswer: 1
      },
      {
        id: "m23-23",
        text: "Eni 5 m, yuzi 40 m<sup>2</sup> boʻlgan to'g'ri to'rtburchakning bo'yini toping.",
        imageUrl: "/images/togritortburchak22.png",
        options: ["16 m", "8 m", "12 m", "5 m"],
        correctAnswer: 1
      },
      {
        id: "m23-23",
        text: "To'g'ri to'rtburchakning perimetri 14 cm, boʻyi 4 cm. Enini toping.",
        imageUrl: "",
        options: ["3 cm", "5 cm", "7 cm", "10 cm"],
        correctAnswer: 0
      },
      {
        id: "m23-23",
        text: "To'g'ri to'rtburchakning perimetri 36 dm, eni 12 cm. Boʻyini toping.",
        imageUrl: "",
        options: ["168 cm", "6 cm", "12 cm", "174 cm"],
        correctAnswer: 0
      },
      {
        id: "m23-23",
        text: "To'g'ri to'rtburchak shaklidagi hovli haqidagi ma'lumotlardan foydalanib, uning binodan tashqari bo'lagining yuzini toping.",
        imageUrl: "/images/togritortburchak25.png",
        options: ["1200 m<sup>2</sup>", "98 m<sup>2</sup>", "62 m<sup>2</sup>", "1120 m<sup>2</sup>"],
        correctAnswer: 3
      },
      {
        id: "m23-23",
        text: "Boʻyi 20 cm, eni 15 cm boʻlgan to'g'ri to'rtburchak shaklidagi rangli qog'ozdan tomoni 11 cm boʻlgan kvadrat kesib olindi. Qolgan rangli qog'ozning yuzini toping. (cm<sup>2</sup>)",
        imageUrl: "",
        options: ["121", "179", "169", "120"],
        correctAnswer: 1
      },
      {
        id: "m23-23",
        text: "Kvadratning perimetri 36 ga teng, uning yuzini toping.",
        imageUrl: "",
        options: ["32", "84", "81", "324"],
        correctAnswer: 2
      },
      {
        id: "m23-23",
        text: "To'g'ri to'rtburchakning perimetri 36 ga, boʻyi 10 ga teng, uning yuzini toping.",
        imageUrl: "",
        options: ["80", "24", "70", "74"],
        correctAnswer: 0
      },
      {
        id: "m23-23",
        text: "Kvadratning tomoni 3 marta orttirilsa, yuzi necha marta ortadi?",
        imageUrl: "",
        options: ["3 marta kamayadi", "1 marta", "9 marta", "3 marta"],
        correctAnswer: 2
      },
      {
        id: "m23-23",
        text: "To'g'ri to'rtburchakning yuzi 36 ga, boʻyi 9 ga teng, uning perimetrini toping.",
        imageUrl: "",
        options: ["32", "24", "26", "34"],
        correctAnswer: 2
      },
      {
        id: "m23-23",
        text: "To'g'ri to'rtburchakning perimetri 28 cm, uning yuzi 40 cm<sup>2</sup> ga teng. Toʻgʻri to'rtburchakning tomonlarini toping.",
        imageUrl: "",
        options: ["5 cm va 8 cm", "6 cm va 8 cm", "4 cm va 10 cm", "2 cm va 12 cm"],
        correctAnswer: 2
      },
      {
        id: "m23-23",
        text: "To'g'ri to'rtburchakning perimetri 32 ga teng. Agar qo'shni tomonlar ayirmasi 2 ga teng bo'lsa, to'g'ri to'rtburchak tomonlarini toping.",
        imageUrl: "",
        options: ["9; 11", "10; 8", "7; 9", "14; 18"],
        correctAnswer: 2
      },
      {
        id: "m23-23",
        text: "Rasmdagi ABCD to'g'ri to'rtburchak perimetri 18 m. CD=3 m, KC=4 m boʻlsa, BK kesma uzunligini toping.",
        imageUrl: "/images/togritortburchak33.png",
        options: ["4 m", "6 m", "7 m", "2 m"],
        correctAnswer: 3
      },
      {
        id: "m23-23",
        text: "To'g'ri to'rtburchakning boʻyi 12 cm va eni 20 cm ga teng. Perimetri shu to'g'ri to'rtburchakning perimetriga teng bo'lgan kvadratning yuzi nechaga teng bo'ladi?",
        imageUrl: "",
        options: ["64 cm<sup>2</sup>", "256 cm<sup>2</sup>", "128 cm<sup>2</sup>", "512 cm<sup>2</sup>"],
        correctAnswer: 1
      },
      {
        id: "m23-23",
        text: "To'g'ri to'rtburchak shaklidagi yer maydonining eni 10 m va boʻyi undan 4 m uzun. Perimetri shu to'rtburchakning perimetriga teng bo'lgan kvadratning yuzi nechaga teng bo'ladi?",
        imageUrl: "",
        options: ["144 m<sup>2</sup>", "48 m<sup>2</sup>", "100 m<sup>2</sup>", "50 m<sup>2</sup>"],
        correctAnswer: 0
      },
      {
        id: "m23-23",
        text: "Kvadratning tomoni 15 cm ga teng. Yuzi shu kvadratning yuziga teng bo'lgan to'g'ri to'rtburchakning bo'yi 9 cm bo'lsa, to'g'ri to'rtburchakning perimetrini toping.",
        imageUrl: "",
        options: ["60 cm", "30 cm", "34 cm", "68 cm"],
        correctAnswer: 3
      },
      {
        id: "m23-23",
        text: "Tomonlari 7 m va 28 m bo`lgan to`g`ri to'rtburchakning yuzi qandaydir kvadratning yuziga teng. Kvadratning perimetrini toping.",
        imageUrl: "",
        options: ["48 m", "56 m", "64 m", "80 m"],
        correctAnswer: 1
      },
      {
        id: "m23-23",
        text: "To'g'ri to'rtburchakning bo'yi eng kichik ikki xonali son, eni esa 7 ga boʻlinadigan eng kichik ikki xonali son, perimetri shu to'g'ri to'rtburchak perimetriga teng bo'lgan kvadratning yuzini toping.",
        imageUrl: "",
        options: ["144", "140", "36", "72"],
        correctAnswer: 0
      },
      {
        id: "m23-23",
        text: "To'g'ri to'rtburchakning boʻyi 16 dm, yuzi 64 dm<sup>2</sup>. Perimetri shu toʻgʻri to'rtburchakning perimetriga teng kvadratning yuzini toping.",
        imageUrl: "",
        options: ["40 dm<sup>2</sup>", "20 dm<sup>2</sup>", "100 dm<sup>2</sup>", "256 dm<sup>2</sup>"],
        correctAnswer: 2
      },
      {
        id: "m23-23",
        text: "To'g'ri to'rtburchakning tomonlari 22 dm va 18 dm. Perimetri to'g'ri to'rtburchakning perimetriga teng bo'lgan kvadrat tomonini toping.",
        imageUrl: "",
        options: ["20 dm", "80 dm", "40 dm", "10 dm"],
        correctAnswer: 0
      },
      {
        id: "m23-23",
        text: "Kvadratning yuzi 36 dm<sup>2</sup>. Unga tengdosh boʻlgan to'g'ri to'rtburchakning kichik tomoni 4 dm ga teng bo'lsa, uning perimetri nechaga teng?",
        imageUrl: "",
        options: ["22 dm", "24 dm", "26 dm", "28 dm"],
        correctAnswer: 2
      },
      {
        id: "m23-23",
        text: "To'g'ri to'rtburchakning tomonlari 4 va 16 ga teng. Yuzi shu to'rtburchakning yuziga teng bo'lgan kvadratning perimetrini toping.",
        imageUrl: "",
        options: ["32", "36", "28", "30"],
        correctAnswer: 0
      },
      {
        id: "m23-23",
        text: "Dehqon 1 gektar maydondan 4 tonna bug'doy hosil oladi. Dehqonning yeri to'g'ri to'rtburchak shaklida bo'lib eni 800 m, boʻyi 1500 m ga teng. Dehqon ushbu maydonning hammasiga bug'doy eksa qancha hosil oladi?",
        imageUrl: "",
        options: ["48 t", "4800 t", "480 t", "4800 kg"],
        correctAnswer: 2
      },
      {
        id: "m23-23",
        text: "To'g'ri to'rtburchakning yuzasi 48 ga teng. Agar to'g'ri to'rtburchakning tomonlari butun sonlar bo'lsa, uning perimetrining necha xil qiymati bor?",
        imageUrl: "",
        options: ["6", "7", "5", "8"],
        correctAnswer: 2
      },
      {
        id: "m23-23",
        text: "To'g'ri to'rtburchakning yuzi 12 cm<sup>2</sup> ga teng. Uning tomonlari butun sonlar. Quyidagilardan qaysi biri uning perimetri bo'lishi mumkin?",
        imageUrl: "",
        options: ["20 cm", "26 cm", "28 cm", "32 cm"],
        correctAnswer: 1
      },
    ]
  },
  {
    id: "m24-24",
    subject: "matematika",
    grade: 3,
    topic: "Geometrik shakllar sonini topish.",
    questions: [
      
      {
        id: "m24-24",
        text: "Ikkita nuqtadan nechta turli to'g'ri chiziq o'tkazish mumkin?",
        imageUrl: "/images/geometrikshakillar2.png",
        options: ["1 ta", "2 ta", "cheksiz ko'p", "3 ta"],
        correctAnswer: 0
      },
      {
        id: "m24-24",
        text: "Quyidagi chizmada nechta kesma berilgan?",
        imageUrl: "",
        options: ["3 ta", "5 ta", "6 ta", "7 ta"],
        correctAnswer: 2
      },
      {
        id: "m24-24",
        text: "To'g'ri chiziqdan 7 ta nuqta ixtiyoriy tartibda o'zaro ustma ust tushmaydigan qilib olindi. Natijada bu to'g'ri chiziqda nechta kesma hosil bo'ladi?",
        imageUrl: "",
        options: ["14 ta", "21 ta", "42 ta", "28 ta"],
        correctAnswer: 1
      },
      {
        id: "m24-24",
        text: "Aylanada 5 ta nuqta olingan. Bu nuqtalar orqali nechta kesma o'tkazish mumkin?",
        imageUrl: "",
        options: ["5 ta", "10 ta", "15 ta", "20 ta"],
        correctAnswer: 1
      },
      {
        id: "m24-24",
        text: "Sinfdoshlar bitiruv kechasida o'zaro rasm almashdilar. Agar sinfdagi o'quvchilar soni 25 ta bo'lsa, u holda jami o'zaro rasm almashishlar soni nechta bo'lgan?",
        imageUrl: "",
        options: ["600 ta", "300 ta", "25 ta", "50 ta"],
        correctAnswer: 0
      },
      {
        id: "m24-24",
        text: "Muhammadning uyida kichik ziyofat bo'lib o'tdi. Unda 12 ta odam yig'ilgan edi. Agar ular hammasi bir-biri bilan salomlashib chiqishsa, jami salomlashishlar soni nechta bo'ladi?",
        imageUrl: "",
        options: ["66", "72", "24", "144"],
        correctAnswer: 0
      },
      {
        id: "m24-24",
        text: "Futbol musobaqasida har bir guruhda 4 tadan jamoa bor. Har bir guruhdagi jamoalar bir birlari bilan bir martadan o'ynasalar u holda har bir guruhda nechtadan o'yin o'tkaziladi?",
        imageUrl: "",
        options: ["6 ta", "9 ta", "12 ta", "15 ta"],
        correctAnswer: 0
      },
      {
        id: "m24-24",
        text: "Shahmat musobaqasida 16 ta ishtirokchi ishtirok etmoqda. Har bir o'yinchi boshqa o'yinchilar bilan bir martadan o'ynaydi. Bu musobaqani o'tkazish jarayonida nechta o'yin o'ynalgan?",
        imageUrl: "",
        options: ["80 ta", "100 ta", "120 ta", "140 ta"],
        correctAnswer: 2
      },
      {
        id: "m24-24",
        text: "Rasmda nechta uchburchak bor?",
        imageUrl: "/images/geometrikshakillar9.png",
        options: ["3", "4", "5", "6"],
        correctAnswer: 3
      },
      {
        id: "m24-24",
        text: "Rasmda nechta uchburchak bor?",
        imageUrl: "/images/geometrikshakillar10.png",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2
      },
      {
        id: "m24-24",
        text: "Rasmda nechta uchburchak bor?",
        imageUrl: "/images/geometrikshakillar11.png",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2
      },
      {
        id: "m24-24",
        text: "Rasmda nechta uchburchak bor?",
        imageUrl: "/images/geometrikshakillar12.png",
        options: ["8 ta", "6 ta", "9 ta", "10 ta"],
        correctAnswer: 0
      },
      {
        id: "m24-24",
        text: "Rasmda nechta uchburchak bor?",
        imageUrl: "/images/geometrikshakillar13.png",
        options: ["8 ta", "6 ta", "9 ta", "10 ta"],
        correctAnswer: 3
      },
      {
        id: "m24-24",
        text: "Rasmda nechta uchburchak bor?",
        imageUrl: "/images/geometrikshakillar14.png",
        options: ["11", "12", "13", "14"],
        correctAnswer: 1
      },
      {
        id: "m24-24",
        text: "Ushbu shakldan to'rtburchaklar va uchburchaklar sonini aniqlang",
        imageUrl: "/images/geometrikshakillar15.png",
        options: ["6 ta to'rtburchak, 4 ta uchburchak", "4 ta to'rtburchak, 6 ta uchburchak", "5 ta to'rtburchak, 5 ta uchburchak", "4 ta to'rtburchak, 5 ta uchburchak"],
        correctAnswer: 0
      },
      {
        id: "m24-24",
        text: "Rasmda ko'rsatilgan shaklda nechta uchburchak mavjud?",
        imageUrl: "/images/geometrikshakillar16.png",
        options: ["8 ta", "6 ta", "9 ta", "10 ta"],
        correctAnswer: 2
      },
      {
        id: "m24-24",
        text: "Shaklda nechta uchburchak bor",
        imageUrl: "/images/geometrikshakillar17.png",
        options: ["20", "24", "12", "18"],
        correctAnswer: 0
      },
      {
        id: "m24-24",
        text: "Rasmda nechta uchburchak bor (Bir nechta kichik uchburchaklar birgalikda kattaroq uchburchni hosil qilishi mumkin)?",
        imageUrl: "/images/geometrikshakillar18.png",
        options: ["13", "14", "15", "16"],
        correctAnswer: 2
      },
      {
        id: "m24-24",
        text: "Rasmdagi shaklda nechta qavariq beshburchak bor?",
        imageUrl: "/images/geometrikshakillar19.png",
        options: ["1 ta", "2 ta", "3 ta", "0 ta"],
        correctAnswer: 1
      },
      {
        id: "m24-24",
        text: "Rasmdagi shaklda nechta to'rtburchak bor?",
        imageUrl: "/images/geometrikshakillar20.png",
        options: ["8 ta", "6 ta", "9 ta", "10 ta"],
        correctAnswer: 2
      },
      {
        id: "m24-24",
        text: "Ushbu shaklda nechta uchburchak va to'rtburchak borligini aniqlang.",
        imageUrl: "/images/geometrikshakillar21.png",
        options: ["7 ta uchburchak va 12 ta to'rtburchak", "6 ta uchburchak va 3 ta to'rtburchak", "12 ta uchurchak va 7 ta to'rtburchak", "3 ta uchburchak va 6 ta to'rtburchak"],
        correctAnswer: 2
      },
      {
        id: "m24-24",
        text: "Rasmda nechta uchburchak tasvirlangan?",
        imageUrl: "/images/geometrikshakillar22.png",
        options: ["6", "12", "14", "16"],
        correctAnswer: 2
      },
      {
        id: "m24-24",
        text: "Ushbu shaklda nechta to'rtburchak bor?",
        imageUrl: "/images/geometrikshakillar23.png",
        options: ["6", "8", "3", "10"],
        correctAnswer: 0
      },
      {
        id: "m24-24",
        text: "Shaklda nechta to'g'ri to'rtburchak bor?",
        imageUrl: "/images/geometrikshakillar24.png",
        options: ["4", "5", "8", "9"],
        correctAnswer: 3
      },
      {
        id: "m24-24",
        text: "Shaklda nechta kvadrat bor?",
        imageUrl: "/images/geometrikshakillar25.png",
        options: ["4", "5", "8", "9"],
        correctAnswer: 1
      },
      {
        id: "m24-24",
        text: "Ushbu shaklda nechta to'g'ri to'rtburchak bor?",
        imageUrl: "/images/geometrikshakillar26.png",
        options: ["6", "18", "12", "20"],
        correctAnswer: 1
      },
      {
        id: "m24-24",
        text: "Ushbu shaklda nechta to'g'ri to'rtburchak bor?",
        imageUrl: "/images/geometrikshakillar27.png",
        options: ["15", "90", "96", "94"],
        correctAnswer: 1
      },
      {
        id: "m24-24",
        text: "Ushbu shaklda nechta to'g'ri to'rtburchak bor?",
        imageUrl: "/images/geometrikshakillar28.png",
        options: ["36", "9", "27", "12"],
        correctAnswer: 0
      },
      {
        id: "m24-24",
        text: "Ushbu shakl kvadratchalardan tashkil topgan. Shaklda jami nechta kvadrat bor?",
        imageUrl: "/images/geometrikshakillar29.png",
        options: ["10", "9", "12", "14"],
        correctAnswer: 3
      },
      {
        id: "m24-24",
        text: "Ushbu shakl kvadratchalardan tashkil topgan. Shaklda jami nechta kvadrat bor?",
        imageUrl: "/images/geometrikshakillar30.png",
        options: ["16", "30", "27", "25"],
        correctAnswer: 1
      },
      {
        id: "m24-24",
        text: "Chizmada 12 ta kichik kvadratlarni ko'rish mumkin. Chizmada jami nechta kvadrat tasvirlangan?",
        imageUrl: "/images/geometrikshakillar31.png",
        options: ["12", "20", "22", "24"],
        correctAnswer: 1
      },
      {
        id: "m24-24",
        text: "Ushbu shaklda nechta to'g'ri to'rtburchak bor?",
        imageUrl: "/images/geometrikshakillar32.png",
        options: ["25", "125", "180", "225"],
        correctAnswer: 3
      },
      {
        id: "m24-24",
        text: "Ushbu shakl kvadratchalardan tashkil topgan. Shaklda jami nechta kvadrat bor?",
        imageUrl: "/images/geometrikshakillar33.png",
        options: ["45", "55", "36", "25"],
        correctAnswer: 1
      },
      {
        id: "m24-24",
        text: "To'g'ri chiziqda 5 ta ustma - ust tushmaydigan nuqta olindi. Natijada nechta nur hosil bo'ladi?",
        imageUrl: "",
        options: ["10 ta", "8 ta", "5 ta", "11 ta"],
        correctAnswer: 0
      },
      {
        id: "m24-24",
        text: "Rasmda nechta kvadrat tasvirlangan?",
        imageUrl: "/images/geometrikshakillar34.png",
        options: ["10 ta", "14 ta", "6 ta", "5 ta"],
        correctAnswer: 0
      },
      {
        id: "m24-24",
        text: "Laura katta rasmni shaklning 2x2 kvadrat qismini bo`yamoqchi. Unda nechta imkoniyat bor?",
        imageUrl: "/images/geometrikshakillar36.png",
        options: ["5", "6", "7", "8"],
        correctAnswer: 3
      },
      {
        id: "m24-24",
        text: "Rasmdagi shaklda nechta kvadrat bor?",
        imageUrl: "/images/geometrikshakillar37.png",
        options: ["10", "12", "13", "15"],
        correctAnswer: 2
      },
      {
        id: "m24-24",
        text: "Shaklda nechta to'g'ri to'rtburchak bor?",
        imageUrl: "/images/geometrikshakillar38.png",
        options: ["16", "90", "96", "94"],
        correctAnswer: 2
      },
      {
        id: "m24-24",
        text: "Chizmada tomonlari qora rangda nechta kvadrat bor?",
        imageUrl: "/images/geometrikshakillar39.png",
        options: ["41", "38", "39", "36"],
        correctAnswer: 2
      },
      {
        id: "m24-24",
        text: "Quyidagi rasmda o'n ikki nuqta belgilangan. Ushbu nuqtalardan to'rttasini birlashtirib ko'pi bilan nechta kvadrat hosil qilish mumkin?",
        imageUrl: "/images/geometrikshakillar40.png",
        options: ["6", "7", "9", "11"],
        correctAnswer: 3
      },
  ]
  },
  {
    id: "m25-25",
    subject: "matematika",
    grade: 3,
    topic: "Harakatga doir masalalar",
    questions: [
    {
      id: "m25-25",
      text: "Toychoq 20 m/min tezlik bilan yurdi. Toychoq 10 minutda qancha masofani bosib o'tdi?",
      imageUrl: "",
      options: ["2 m", "10 m", "30 m", "200 m"],
      correctAnswer: 3
    },
    {
      id: "m25-25",
      text: "Agar samolyot 540 km/h tezlik bilan uchsa, u 3 soatda qancha masofani uchib o'tadi?",
      imageUrl: "",
      options: ["537 km", "1620 km", "180 km", "543 km"],
      correctAnswer: 1
    },
    {
      id: "m25-25",
      text: "Velosipedchi 48 km masofani soatiga bir xil tezlik bilan yurib, 4 soatda bosib o'tdi. Velosipedchi bir soatda necha kilometr yo'l bosgan?",
      imageUrl: "",
      options: ["10 km", "12 km", "44 km", "14 km"],
      correctAnswer: 1
    },
    {
      id: "m25-25",
      text: "Samolyot 10 minutda 110 km masofani uchib o'tadi. Samolyot har bir minutda necha kilometr masofani uchib o'tadi?",
      imageUrl: "",
      options: ["120 km", "10 km", "100 km", "11 km"],
      correctAnswer: 3
    },
    {
      id: "m25-25",
      text: "Odilbekning uyidan maktabgacha boʻlgan masofa 1 035 metr boʻlib, u bu masofani minutiga bir xil masofa bilan yurib, 15 minutda bosib o'tdi. Odilbek 1 minutda necha metr yo'l yurgan?",
      imageUrl: "",
      options: ["63 m", "67 m", "69 m", "65 m"],
      correctAnswer: 2
    },
    {
      id: "m25-25",
      text: "Xalqaro yuk avtomobili 1 800 km masofani soatiga bir xil tezlik bilan yurib, 18 soatda bosib o'tdi. Avtomobil 1 soatda necha kilometr yo'l bosib o'tgan?",
      imageUrl: "",
      options: ["100 km", "10 km", "1000 km", "250 km"],
      correctAnswer: 0
    },
    {
      id: "m25-25",
      text: "Toshkent va Bekobod shaharlari orasidagi masofa 144 km. Avtobus bu masofani 3 soatda bosib o'tadi. Avtobusning tezligi qancha?",
      imageUrl: "",
      options: ["48 km/h", "42 km/h", "46 km/h", "52 km/h"],
      correctAnswer: 0
    },
    {
      id: "m25-25",
      text: "Yo'lovchi avtobusda 90 km yo'l yurdi. Agar avtobus 45 km/h tezlik bilan yursa, yo'lovchi necha soat yo'lda boʻlgan?",
      imageUrl: "",
      options: ["45 soat", "1 soat", "2 soat", "135 soat"],
      correctAnswer: 2
    },
    {
      id: "m25-25",
      text: "Toshkent va Samarqand shaharlari orasidagi masofa 300 km ga teng. Agar poyezd 60 km/h tezlik bilan yursa, u bu masofani qancha vaqtda bosib o'tadi?",
      imageUrl: "",
      options: ["5 soat", "4 soat", "24 soat", "3 soat"],
      correctAnswer: 0
    },
    {
      id: "m25-25",
      text: "Sayohatchilar adir bo'ylab 24 km yo'l yurishdi. Agar ular 4 km/h tezlik bilan yurishgan bo'lsa, bu masofani qancha vaqtda bosib o'tishgan?",
      imageUrl: "",
      options: ["7 soat", "6 soat", "5 soat", "4 soat"],
      correctAnswer: 1
    },
    {
      id: "m25-25",
      text: "Yer Quyosh atrofida 30 km/s tezlik bilan aylanadi. 1 minut davomida Yer qancha masofani bosib o'tadi (km)?",
      imageUrl: "",
      options: ["300", "1800", "18000", "3000"],
      correctAnswer: 1
    },
    {
      id: "m25-25",
      text: "Samolyot 5100 km masofani 510 km/h tezlik bilan uchib o'tdi. Samoliyot necha soat uchgan?",
      imageUrl: "",
      options: ["10 soat", "6 soat", "7 soat", "8 soat"],
      correctAnswer: 0
    },
    {
      id: "m25-25",
      text: "Toshbaqa 1 minutda 50 cm yo'l bosadi. U 100 m masofani qancha soatda oʻtadi?",
      imageUrl: "",
      options: ["2 soat", "3 soat", "2 soat 20 minut", "3 soat 20 minut"],
      correctAnswer: 3
    },
    {
      id: "m25-25",
      text: "Bir yo'lovchi 30 minutda 2500 m, ikkinchi yo'lovchi esa 15 minutda 1500 m yurdi. Qaysi yo'lovchi tezroq yurgan?",
      imageUrl: "",
      options: ["Birinchisi", "Ikkinchisi", "ikkisi bir xil tezlikda yurgan", "2-si ikki marta tez yurgan"],
      correctAnswer: 1
    },
    {
      id: "m25-25",
      text: "Toshkent va Bekobod shaharlari orasidagi masofa 144 km. Avtobus bu masofani 3 soatda bosib o'tadi. Yengil mashina esa bu yo'lni 72 km/h tezlik bilan bosib o'tadi. Qaysi mashinaning tezligi katta va qancha katta?",
      imageUrl: "",
      options: ["Avtobus, 24 km/h", "Yengil mashina, 18 km/h", "Yengil mashina, 21 km/h", "Yengil mashina, 24 km/h"],
      correctAnswer: 3
    },
    {
      id: "m25-25",
      text: "Samandar Apton shahridan chiqib bir xil tezlikda (30 km) 2 soatda yetib keldi. U Brandon shahriga (45 km) yetib borishi uchun yana necha soat sarflaydi?",
      imageUrl: "/images/harakat16.png",
      options: ["5", "4", "3", "2"],
      correctAnswer: 2
    },
    {
      id: "m25-25",
      text: "Mashina tushgacha 2 soat yurdi, tushdan keyin esa shunday tezlik bilan yana 4 soat yurdi. U hammasi bo`lib 300 km yo`l yurdi. Mashina tushdan keyin necha kilometr yurgan?",
      imageUrl: "",
      options: ["100", "150", "200", "250"],
      correctAnswer: 2
    },
    {
      id: "m25-25",
      text: "Mashina tushgacha 1 soat yurdi, tushdan keyin esa shunday tezlik bilan yana 5 soat yurdi. U hammasi bo`lib 300 km yo'l yurdi. Mashina tushdan keyin necha kilometr yurgan?",
      imageUrl: "",
      options: ["100", "150", "200", "250"],
      correctAnswer: 3
    },
    {
      id: "m25-25",
      text: "Vertolyot 4 soat 200 km/h tezlik bilan, 2 soat 230 km/h tezlik bilan uchdi. Vertolyot shu vaqt ichida qanday masofani uchib o'tdi?",
      imageUrl: "",
      options: ["460 km", "340 km", "1260 km", "800 km"],
      correctAnswer: 2
    },
    {
      id: "m25-25",
      text: "Sayyohlar 65 km/h tezlik bilan 2 soat poyezdda, keyin esa 40 km/h tezlik bilan 3 soat avtobusda yurdilar. Shu vaqt ichida ular qancha masofani o'tganlar?",
      imageUrl: "",
      options: ["250 km", "130 km", "120 km", "10 km"],
      correctAnswer: 0
    },
    {
      id: "m25-25",
      text: "Velosipedchi 3 soatda 75 km yo'l bosadi. Velosipedchi shu tezlik bilan 125 km masofani necha soatda bosib o'tadi?",
      imageUrl: "",
      options: ["4", "6", "5", "7"],
      correctAnswer: 2
    },
    {
      id: "m25-25",
      text: "Alisher 10 km/h tezlik bilan 6 soat yurdi. Sheralining tezligi Alishernikidan 2 km/h ga katta. Sherali shu masofani qancha vaqtda bosib o'tadi?",
      imageUrl: "",
      options: ["3", "4", "5", "6"],
      correctAnswer: 2
    },
    {
      id: "m25-25",
      text: "Anvar Samarqanddan Toshkentga tezligi 100 km/h bo'lgan yengil avtomobilda 3 soatda keldi. Samarqandga qaytishda tezligi 75 km/h bo'lgan avtobusda qaytdi. Anvar necha soatda qaytib keladi?",
      imageUrl: "",
      options: ["3", "4", "2", "5"],
      correctAnswer: 1
    },
    {
      id: "m25-25",
      text: "Poyezd birinchi soatda 76 km, ikkinchi soatda 90 km, uchinchi soatda esa 80 km yurdi. Poyezdning shu uch soatdagi o'rtacha tezligi qancha? (km/h)",
      imageUrl: "",
      options: ["82", "76", "80", "84"],
      correctAnswer: 0
    },
    {
      id: "m25-25",
      text: "Yuk mashinasi 2 soatda yengil avtomobil 1 soatda bosib o'tgan yo'ldan 20 km ko'p yo'l bosadi. Agar yengil avtomobil tezligi 60 km/h bo'lsa, yuk mashinasining tezligi yengil avtomobilnikidan qanchaga kamroq?",
      imageUrl: "",
      options: ["20 km/h", "30 km/h", "40 km/h", "50 km/h"],
      correctAnswer: 0
    },
    {
      id: "m25-25",
      text: "Oralaridagi masofa 90 km boʻlgan ikki shahardan bir vaqtda bir-biriga qarab ikki velosipedchi yoʻlga chiqdi. Bir velosipedchining tezligi 8 km/h, ikkinchisining tezligi 10 km/h. Ular necha soatdan keyin uchrashadilar?",
      imageUrl: "",
      options: ["6 soat", "5 soat", "4 soat", "3 soat"],
      correctAnswer: 1
    },
    {
      id: "m25-25",
      text: "Ertalab soat 8:00 da ikkita shahardan bir-biri tomon ikkita avtomashina yoʻlga chiqdi. Ular soat 11:00 da uchrashishdi. Agar mashinalardan biri 60 km/h, ikkinchisi esa 70 km/h tezlik bilan yurgan bo'lsa, ikki shahar oralig'idagi masofani toping.",
      imageUrl: "",
      options: ["30 km", "210 km", "180 km", "390 km"],
      correctAnswer: 3
    },
    {
      id: "m25-25",
      text: "Ikki shahardan bir vaqtda bir-biriga qarab ikki poyezd yoʻlga chiqdi va 4 soatdan keyin uchrashdilar. Birinchi poyezdning tezligi 50 km/h ikkinchisiniki 70 km/h. Ikki shahar orasidagi masofani toping.",
      imageUrl: "",
      options: ["200 km", "480 km", "280 km", "80 km"],
      correctAnswer: 1
    },
    {
      id: "m25-25",
      text: "Ikki qishloqdan bir vaqtda bir-biriga qarab ikki piyoda yoʻlga chiqdi va 3 soatdan keyin uchrashdi. Ulardan biri 3 km/h tezlik bilan, ikkinchisi 4 km/h tezlik bilan yurdi. Qishloqlar orasidagi masofa qancha?",
      imageUrl: "/images/harakat29.png",
      options: ["3 km", "12 km", "21 km", "9 km"],
      correctAnswer: 2
    },
    {
      id: "m25-25",
      text: "Oralaridagi masofa 21 km boʻlgan ikki qishloqdan bir vaqtda bir-biriga qarab ikki piyoda yoʻlga chiqdi. Ulardan biri 3 km/h tezlik bilan, ikkinchisi 4 km/h tezlik bilan yurdi. Ular necha soatdan keyin uchrashadilar?",
      imageUrl: "/images/harakat30.png",
      options: ["3 soat", "2 soat", "7 soat", "6 soat"],
      correctAnswer: 0
    },
    {
      id: "m25-25",
      text: "Oralaridagi masofa 21 km boʻlgan ikki qishloqdan bir vaqtda bir-biriga qarab ikki piyoda yo'lga chiqdi va 3 soatdan keyin uchrashdilar. Piyodalardan birining tezligi 3 km/h. Ikkinchisining tezligini aniqlang.",
      imageUrl: "/images/harakat31.png",
      options: ["6 km/h", "5 km/h", "4 km/h", "3 km/h"],
      correctAnswer: 2
    },
    {
      id: "m25-25",
      text: "Ikki poyezd bir vaqtda bir-biriga qarab yoʻlga chiqdi. Birinchi poyezd 70 km/h ikkinchisi 64 km/h tezlik bilan yurdi. Ikkinchi poyezd uchrashguncha 192 km yo'lni bosib o'tdi. Birinchi poyezd uchrashguncha qanday masofani bosib o'tgan?",
      imageUrl: "",
      options: ["140 km", "210 km", "402 km", "aniqlab bo'lmaydi"],
      correctAnswer: 1
    },
    {
      id: "m25-25",
      text: "Ikkita poyezd bir vaqtda bir-biriga qarab yo'lga chiqdi. 1 poyezdning tezligi 65 km/h, 2- poyezdning tezligi 70 km/h. Agar uchrashguncha 2-poyezd 280 km yurgan bo'lsa, 1- poyezd qancha yo'l yurgan?",
      imageUrl: "",
      options: ["340 km", "220 km", "300 km", "260 km"],
      correctAnswer: 3
    },
    {
      id: "m25-25",
      text: "Orasidagi masofa 384 km boʻlgan ikki mashina bir vaqtda bir tomonga harakat qilmoqda. 12 soatdan keyin orqadagi mashina oldingi mashinaga yetib oldi. Keyingi mashinaning tezligi oldingi mashinaning tezligidan qancha ortiq? (km/h)",
      imageUrl: "",
      options: ["32", "30", "37", "34"],
      correctAnswer: 0
    },
    {
      id: "m25-25",
      text: "Bir vaqtda A va B shaharlardan bir-biriga qarab yo'lovchi va yuk poyezdi yoʻlga tushdi. Yo'lovchi poyezdining tezligi 60 km/h, yuk poyezdiniki esa 40 km/h ga teng. Poyezdlar 3 soatdan keyin uchrashdi. Uchrashgandan qancha vaqt o'tganidan keyin yo'lovchi poyezdi B shaharga yetib keladi?",
      imageUrl: "",
      options: ["3 soat 30 minut", "3 soat", "2 soat", "4 soat"],
      correctAnswer: 2
    },
    {
      id: "m25-25",
      text: "Harakat boshlangandan 2 soat o'tgach, motosiklchi velosipedchini quvib yetdi. Motosiklchining tezligi 42 km/h, velosipedchiniki 12 km/h bo'lsa, harakat boshlanishidan oldin ular orasidagi masofa qancha bo'lgan?",
      imageUrl: "",
      options: ["48 km", "84 km", "108 km", "60 km"],
      correctAnswer: 3
    },
    {
      id: "m25-25",
      text: "Oralaridagi masofa 200 km boʻlgan A va B punktlardan bir vaqtning o'zida ikki sayyoh bir-biriga qarab yo'lga chiqdi. Birinchisi avtobusda tezligi 40 km/h, ikkinchisi avtomobilda. Agar ular 2 soatdan keyin uchrashgan bo'lishsa, avtomobilning tezligini toping.",
      imageUrl: "",
      options: ["70 km/h", "60 km/h", "100 km/h", "50 km/h"],
      correctAnswer: 1
    },
    {
      id: "m25-25",
      text: "Ovchi it oldidan 120 m naridagi tulkini quva ketdi. Tulki 1 munitda 320 m, ovchi it esa 1 munitda 350 m yugursa, it tulkini necha minutda quvib yetadi?",
      imageUrl: "",
      options: ["6 minut", "8 minut", "2 minut", "4 minut"],
      correctAnswer: 3
    },
    {
      id: "m25-25",
      text: "Toshbaqa va shilliqqurt qarama-qarshi tomonga harakat qilyapti. Agar toshbaqaning tezligi 22 sm/min, shilliqqurtning tezligi 14 sm/min boʻlsa, 2 minutdan keyin ular orasidagi masofa qancha bo'ladi?",
      imageUrl: "",
      options: ["72 sm", "28 sm", "44 sm", "80 sm"],
      correctAnswer: 0
    },
    {
      id: "m25-25",
      text: "Ikki mashina bir biriga qarab 65 km/h va 90 km/h tezlikda harakatlanmoqda. 4 soatda ular necha km yaqinlashadilar?",
      imageUrl: "",
      options: ["620 km", "100 km", "520 km", "200 km"],
      correctAnswer: 0
    },
    {
      id: "m25-25",
      text: "Ikki mashina qarama-qarshi yoʻnalishda 58 km/h va 104 km/h tezlikda harakatlanmoqda. 3 soatdan keyin ular orasidagi masofa necha kilometrga teng bo'ladi?",
      imageUrl: "",
      options: ["486 km", "138 km", "180 km", "554 km"],
      correctAnswer: 0
    },
    {
      id: "m25-25",
      text: "Temiryo'l stansiyasidan bir vaqtda qarama-qarshi yo'nalishda ikkita yuk poyezdi yo'lga chiqdi. Agar birinchi poyezd 50 km/h va ikkinchi poyezd 40 km/h tezlik bilan harakat qilsa, 3 soatdan keyin ular orasidagi masofa qancha bo'ladi?",
      imageUrl: "",
      options: ["90 km", "180 km", "270 km", "300 km"],
      correctAnswer: 2
    },
    {
      id: "m25-25",
      text: "Yo'lovchi va yuk poyezdi bir-biriga qarab yo'lga chiqdi. Oralaridagi masofa 230 km. Yuk poyezdining tezligi 50 km/h, yo'lovchi poyezdiniki esa undan 15 km/h ko'p. Necha soatdan so'ng ular uchrashishadi?",
      imageUrl: "",
      options: ["1 soat", "2 soat", "1.5 soat", "2.5 soat"],
      correctAnswer: 1
    },
    {
      id: "m25-25",
      text: "Mototsiklchi va velosipedchi bir tomonga qarab harakat qilishmoqda. Velosipedchining tezligi 12 km/h, mototsiklchiniki 30 km/h va ular orasidagi masofa 72 km bo'lsa, necha soatdan keyin mototsiklchi velosipedchini quvib yetadi?",
      imageUrl: "",
      options: ["3", "4", "5", "2"],
      correctAnswer: 1
    },
    {
      id: "m25-25",
      text: "A va B shaharlar orasidagi masofa 188 km. Bir vaqtning o'zida bir-biriga qarab A shahardan velosipedchi, B shahardan motosiklchi yo'lga tushdi va ular A shahardan 48 km masofada uchrashdi. Agar velosipedchining tezligi 12 km/h bo'lsa, motosiklchining tezligini toping. (km/h)",
      imageUrl: "",
      options: ["45", "42", "30", "35"],
      correctAnswer: 3
    },
    {
      id: "m25-25",
      text: "A va B shaharlar orasidagi masofa 520 km. Bu shaharlardan bir vaqtda bir-biriga qarab ikkita avtomobil yo'lga chiqdi. Birinchisining tezligi 75 km/h ikkinchisining tezligi 80 km/h. 2 soatdan so'ng ular orasidagi masofa necha kilometr bo'ladi?",
      imageUrl: "",
      options: ["210 km", "148 km", "190 km", "200 km"],
      correctAnswer: 0
    },
    {
      id: "m25-25",
      text: "Orasidagi masofa 350 km bo'lgan ikki shahardan bir vaqtning o'zida bir-biriga qarab ikkita avtomobil yo'lga chiqdi. Birinchi avtomobil tezligi 65 km/h, ikkinchisiniki esa 75 km/h. Qancha vaqtdan so'ng ular orasidagi masofa 70 km ga teng bo'ladi?",
      imageUrl: "",
      options: ["2 soat", "2.5 soat", "2 soat 20 minut", "3 soat"],
      correctAnswer: 0
    },
    {
      id: "m25-25",
      text: "Oralaridagi masofa 300 km bo'lgan A va B punktlardan bir vaqtning o'zida ikki turist bir-biriga qarab yo'lga chiqdi. Birinchisi avtobusda tezligi 60 km/h, ikkinchisi avtomobilda. Agar ular 2 soatdan keyin uchrashsa, avtomobilning tezligini toping.",
      imageUrl: "",
      options: ["68 km/h", "85 km/h", "95 km/h", "90 km/h"],
      correctAnswer: 3
    },
    {
      id: "m25-25",
      text: "Temiryo'l stansiyasidan bir vaqtda qarama-qarshi yo'nalishda ikkita yuk poyezdi yo'lga chiqdi. Agar birinchi poyezd 50 km/h va ikkinchi poyezd 60 km/h tezlik bilan harakat qilsa, 3 soatdan keyin ular orasidagi masofa qancha km bo'ladi?",
      imageUrl: "",
      options: ["110", "280", "330", "300"],
      correctAnswer: 2
    },
    {
      id: "m25-25",
      text: "Stansiyadan 50 km/h tezlik bilan yuk poyezdi jo'nadi. 3 soat o'tgach shu stansiyadan uning ketidan 80 km/h tezlik bilan elektropoyezd jo'nadi. Elektropoyezd jo'naganidan necha soat keyin yuk poyezdini quvib yetadi?",
      imageUrl: "",
      options: ["3 soat", "4 soat", "5 soat", "6 soat"],
      correctAnswer: 2
    },
   ]
  },
  {
    id: "m26-26",
    subject: "matematika",
    grade: 3,
    topic: "Harakatga doir masalalar(2-qism)",
    questions: [
  {
    id: "m26-26",
    text: "Daryo oqimining tezligi 2 km/h. Qayiqning tezligi 8 km/h. Qayiqning oqim bo'ylab va oqimga qarshi tezliklarini toping.",
    imageUrl: "",
    options: ["8 km/h, 10 km/h", "6 km/h, 10 km/h", "6 km/h, 12 km/h", "4 km/h, 16 km/h"],
    correctAnswer: 1
  },
  {
    id: "m26-26",
    text: "Katerning daryo oqimi bo'ylab va oqimga qarshi tezliklari yig'indisi 30 km/h. Katerning turg'un suvdagi tezligi (km/h) ni toping.",
    imageUrl: "",
    options: ["15", "16", "10", "18"],
    correctAnswer: 0
  },
  {
    id: "m26-26",
    text: "Qayiqning oqim bo'yicha tezligi 15 km/h, oqimning tezligi qayiq tezligidan 11 km/h kam. Qayiqning oqimga qarshi tezligini toping. (km/h)",
    imageUrl: "",
    options: ["23", "13", "2", "11"],
    correctAnswer: 3
  },
  {
    id: "m26-26",
    text: "Daryo bo'yida joylashgan ikki qishloq orasidagi masofa 36 km. Daryo oqimining tezligi 3 km/h. Motorli qayiqning turg'un suvdagi tezligi 15 km/h bo'lsa, bu qayiq bir qishloqdan ikkinchisiga borib va qaytib kelish uchun necha soat sarflaydi?",
    imageUrl: "",
    options: ["4 soat 30 min", "5 soat", "6 soat", "5 soat 25 min"],
    correctAnswer: 1
  },
  {
    id: "m26-26",
    text: "Velosipedchi uyidan manzilga 6 km/h tezlik bilan harakatlanib, 12 soatda yetib keldi. Agar u qaytishda tezligini 2 km/h ga oshirsa, bu yerdan qancha vaqtda qaytib boradi?",
    imageUrl: "",
    options: ["9 soat", "8 soat", "10 soat", "7 soat"],
    correctAnswer: 0
  },
  {
    id: "m26-26",
    text: "Yuk poyezdi 480 km yo'lning yarmini 6 soatda bosib o'tdi. Yuk poyezdi butun yo'lni 11 soatda bosib o'tishi uchun qolgan yo'lda tezligini qanday o'zgartirishi kerak?",
    imageUrl: "",
    options: ["9", "6", "5", "7", "8"],
    correctAnswer: 4
  },
  {
    id: "m26-26",
    text: "Sayyohlar kun bo'yi 22 km yo'l yurishdi. Ular 3 soat 4 km/h tezlik bilan yurishdi. Qolgan yo'lni 5 km/h tezlik bilan o'tishdi. Sayyohlar necha soat yo'lda bo'lishgan?",
    imageUrl: "",
    options: ["3 soat", "5 soat", "4 soat", "6 soat"],
    correctAnswer: 1
  },
  {
    id: "m26-26",
    text: "A shahar C va B shaharlar orasida joylashgan. Bir vaqtda mototsiklchi, velosipedchi va piyoda harakatlanishni boshlashdi. Mototsiklchi A shahardan C shaharga 28 km/h tezlik bilan, velosipedchi A shahardan B shaharga 10 km/h tezlik bilan, piyoda esa B shahardan A shaharga 5 km/h tezlik bilan yo'l oldi. A va B shaharlar orasidagi masofa 120 km. Velosipedchi va piyoda uchrashgan vaqtda mototsiklchi C shaharga yetib keldi. A dan C gacha masofani toping.",
    imageUrl: "",
    options: ["224 km", "220 km", "186 km", "180 km"],
    correctAnswer: 0
  },
  {
    id: "m26-26",
    text: "Uchta toshbaqa - Andi, Bandi va Kandi - 30 m masofaga yugurish bo'yicha musobaqa o'ynashmoqda. Ular bir paytda musobaqani boshlashdi. Andi marraga kelganda Bandiga marragacha 10 m qolgan edi, Kandi esa Bandidan 4 m oldinda edi. Kandi marraga yetib kelganda Bandidan marragacha qancha masofa qoladi?",
    imageUrl: "",
    options: ["2 m", "3 m", "4 m", "5 m"],
    correctAnswer: 3
  },
  {
    id: "m26-26",
    text: "Agar samolyot 540 km/h tezlik bilan uchsa, u 2 soat 20 minutda qancha masofani uchib o'tadi?",
    imageUrl: "",
    options: ["1260 km", "1080 km", "1170 km", "1800 km"],
    correctAnswer: 0
  },
  {
    id: "m26-26",
    text: "Poyezdning tezligi 60 km/h. U 90 km masofani qancha vaqtda o`tadi?",
    imageUrl: "",
    options: ["1 soat 30 minut", "1 soat 50 minut", "1 soat 5 minut", "30 minut"],
    correctAnswer: 0
  },
  {
    id: "m26-26",
    text: "\"Neksiya\" avtomobilining tezligi 150 km/h. U 180 km masofani qancha vaqtda o`tadi?",
    imageUrl: "",
    options: ["1 soat 12 minut", "1 soat 20 minut", "1 soat 10 minut", "130 minut"],
    correctAnswer: 0
  },
  {
    id: "m26-26",
    text: "Yo'lovchi va yuk poyezdi bir biriga tomon harakatlanmoqda. Ular orasidagi masofa 275 km. Yuk poyezdining tezligi 50 km/h. Yo'lovchi poyezdining tezligi yuk poyezdining tezligidan 10 km/h ga ortiq. Ular qancha vaqtdan keyin uchrashadi?",
    imageUrl: "",
    options: ["2 soat 30 minut", "2 soat", "3 soat 30 minut", "3 soat"],
    correctAnswer: 0
  },
  {
    id: "m26-26",
    text: "Styuart va Maykl uchrashishni kelishib oldilar. Ular bir-birlaridan 8 kilometr uzoqlikda yashaydilar. Maykl velosipedida soatiga 20 kilometr tezlikda, xuddi shu vaqtda Styuart uyidan 12 km/h tezlikda yugurib bir biriga tomon harakatlanishdi. Ular qancha vaqtdan keyin uchrashadilar?",
    imageUrl: "",
    options: ["15 daqiqa", "16 daqiqa", "20 daqiqa", "30 daqiqa"],
    correctAnswer: 0
  },
  {
    id: "m26-26",
    text: "Aiden va Bek 360 metr uzunlikdagi dumaloq yo'lda bir vaqtning o'zida va bir nuqtada yo'lga chiqishdi. Ular qarama-qarshi yo'nalishda va mos ravishda soatiga 10 kilometr va soatiga 8 kilometr tezlikda harakat qilishadi. Ular necha soniyadan keyin uchrashishadi?",
    imageUrl: "",
    options: ["48 s", "60 s", "72 s", "96 s", "100 s"],
    correctAnswer: 2
  },
  {
    id: "m26-26",
    text: "Sharifa 6 km/h tezlikda yuguradi, Laylo esa 5 km/h tezlikda. Ular poyga qilish uchun aylana shaklidagi yugurish yo'lagida joylashdilar, bunda Sharifa start chizig'idan joy oldi, Laylo esa undan 200 metr oldinga joylashdi. Poyga yo'lagi bir aylanishi uzunligi 500 metr. Sharifa Layloga birinchi yetib olganida ular start chizig'idan qanday masofa uzoqlikda bo'ladilar?",
    imageUrl: "",
    options: ["100", "200", "250", "300"],
    correctAnswer: 1
  },
  {
    id: "m26-26",
    text: "Samarqanddan Toshkentgacha 300 km, Andijondan Toshkentgacha 360 km. Toshkent Samarqand va Andijon orasida joylashgan. Samarqanddan Andijonga va Toshkentdan Andijonga taksi yo'lga chiqdi. Agar Toshkentdan yo'lga chiqqan taksining tezligi 60 km/h bo'lsa va ular Andijonga teng yetib kelishgan bo'lsa, u holda Samarqanddan yo'lga chiqqan taksining tezligini toping.",
    imageUrl: "",
    options: ["100 km/h", "110 km/h", "120 km/h", "130 km/h"],
    correctAnswer: 1
  },
  {
    id: "m26-26",
    text: "Uzunligi 400 m bo'lgan poyezd uzunligi 500 m bo'lgan tunneldan 25 s da o'tib ketdi. Poyezdning tezligini toping (m/s).",
    imageUrl: "",
    options: ["50", "45", "36", "40"],
    correctAnswer: 2
  },
  {
    id: "m26-26",
    text: "Poyezd uzunligi 500 m bo'lgan ko'prikdan 1 minutda, svetofor yonidan shu tezlikda 20 sekundda o'tadi. Poyezdning uzunligini toping.",
    imageUrl: "",
    options: ["200", "150", "250", "175"],
    correctAnswer: 2
  },
  {
    id: "m26-26",
    text: "Men soatiga 36 km tezlik bilan yuradigan poyezdda ketmoqdaman. Mening derazam oldidan qarshi tomonidan uzunligi 75 m bo'lgan tezyurar poyezd 3 sekundda o'tib ketdi. Qarshimdan kelayotgan poyezdning tezligi qancha?",
    imageUrl: "",
    options: ["44 km/h", "60 km/h", "25 km/h", "54 km/h"],
    correctAnswer: 3
  },
  {
    id: "m26-26",
    text: "Hozir mashinaning hisoblagichi 12 921 km ni ko`rsatmoqda. 2 soatdan so`ng hisoblagich har ikki yo`nalishlarda bir xil yoziladigan sonni ko`rsatdi. Shu 2 soat mashina qanday tezlik bilan yurgan bo`lishi mumkin?",
    imageUrl: "",
    options: ["95 km/h", "85 km/h", "75 km/h", "55 km/h"],
    correctAnswer: 3
  },
  {
    id: "m26-26",
    text: "Maktab o'quvchilarini sayohatga olib chiqqan avtobus birinchi 120 km masofani 60 km/h tezlikda o'tdi. Keyin katta magistralda 2 marta 15 daqiqalik to'xtab olishni ham qo'shib hisoblaganda 5 soat yo'l yurildi. Oxirida shahar ichidagi 20 km masofani 40 km/h tezlikda bosib o'tishga to'g'ri keldi. Agar avtobus manzilga 12:00 da yetib borgan bo'lsa, sayohat boshlangan vaqtni toping.",
    imageUrl: "",
    options: ["4:00", "4:15", "4:30", "5:00"],
    correctAnswer: 2
  },
  {
    id: "m26-26",
    text: "Bog' teng kvadratlarga bo`lingan. Chaqqon va imillagan chig`anoqlar, 'S' burchakdan boshlab, bog`ning devori bo`ylab, har-xil yo`nalishda, sudralmoqda. Imillagan chig`anoq soatiga 1 metr tezlik bilan sudralmoqda, chaqqoni esa soatiga 2 metr tezlikda harakatlanmoqda. Qaysi nuqtada chig`anoqlar uchrashadi?",
    imageUrl: "/images/2harakat23.png",
    options: ["A", "B", "C", "D", "E"],
    correctAnswer: 1
  },
  {
    id: "m26-26",
    text: "X va Y shaharlari o'rtasidagi temir yo'l liniyasida poyezdlar faqat ikkita yo'l bo'lgan qismlarda qarama-qarshi yo'nalishda harakatlanishi mumkin. Poyezdlar doimiy tezlikda X dan Y ga borish uchun 180 daqiqa va Y dan X ga borish uchun 60 daqiqa vaqt sarflaydi. Yo'lda bir vaqtda X dan chiqqan poyezd va Y dan chiqqan poyezd to'qnashib ketmasligi kerak. Quyidagi yo'llardan qaysi birida poyezdlar bir chiziqli yo'lda to'qnashib ketmaydi?",
    imageUrl: "/images/2harakat24.png",
    options: ["1", "2", "3", "4"],
    correctAnswer: 0
  },
  {
    id: "m26-26",
    text: "Samolyot Toshkentdan Andijonga 30 minut 800 km/h tezlik bilan, Andijondan Xorazmga esa 1 soat 30 minut 720 km/h tezlik bilan uchdi. Samolyotning o'rtacha tezligini toping. (km/h)",
    imageUrl: "",
    options: ["720", "740", "750", "800"],
    correctAnswer: 1
  },
  {
    id: "m26-26",
    text: "Avtomobil katta ko'chadan 3 soat 90 km/h tezlik bilan, so'ng esa 2 soat tosh ko'chadan 50 km/h tezlik bilan yurdi. Avtomobilning o'rtacha tezligini toping. (km/h)",
    imageUrl: "",
    options: ["69", "54", "70", "74"],
    correctAnswer: 3
  },
  {
    id: "m26-26",
    text: "Velosiped 12 km/h tezlik bilan 4 soat, 18 km/h tezlik bilan 2 soat yurdi. Velosipedning butun yo'ldagi o'rtacha tezligini toping. (km/h)",
    imageUrl: "",
    options: ["16", "14", "15", "17"],
    correctAnswer: 1
  },
  {
    id: "m26-26",
    text: "Avtomobil katta ko'chadan 3 soat 90 km/h tezlik bilan, so'ng esa 2 soat tosh ko'chadan 40 km/h tezlik bilan yurdi. Avtomobilning o'rtacha tezligini toping. (km/h)",
    imageUrl: "",
    options: ["65", "50", "80", "70"],
    correctAnswer: 3
  },
  {
    id: "m26-26",
    text: "Poyezd 63 km/h tezlik bilan 3 soat, 77 km/h tezlik bilan 4 soat yurdi. Poyezdning butun yo'ldagi o'rtacha tezligini toping. (km/h)",
    imageUrl: "",
    options: ["65", "55", "71", "70"],
    correctAnswer: 2
  },
  {
    id: "m26-26",
    text: "Mansur uyidan 4 km uzoqdagi yo'l bilan boriladigan daryoga velosipedda bordi. U daryoga borish uchun 9 daqiqa vaqt sarfladi. Uyga qaytishida u uzunligi 3 kilometr bo'lgan qisqa yo'ldan borishga qaror qildi. Qisqa yo'ldan u uyiga 6 daqiqada yetib keldi. Mansurning daryoga borib qaytgandagi o'rtacha tezligi soatiga necha kilometrni tashkil etgan?",
    imageUrl: "/images/2harakat30.png",
    options: ["27 km/h", "84 m/s", "81 m/s", "28 km/h"],
    correctAnswer: 3
  },
  {
    id: "m26-26",
    text: "<<Nasaf>> tezyurar poyezdi Toshkentdan Samarqandgacha 3 soat 95 km/h tezlik bilan, Samarqanddan Qarshigacha esa 2 soat 90 km/h tezlik bilan yurdi. «Nasaf>> poyezdining o'rtacha tezligini aniqlang. (km/h)",
    imageUrl: "",
    options: ["92", "90", "95", "93"],
    correctAnswer: 3
  },
  {
    id: "m26-26",
    text: "Saidaning uyidan buvisining uyigacha 1800 metr. U buvisining uyiga har minutda 60 metr tezlik bilan bordi. Qaytishda esa mashinada har minutda 300 metr tezlikda keldi. Saidaning borish va kelishdagi o'rtacha tezligini toping.",
    imageUrl: "/images/2harakat32.png",
    options: ["180 metr/min.", "160 metr/min.", "100 metr/min.", "90 metr/min"],
    correctAnswer: 2
  },
  {
    id: "m26-26",
    text: "Akmal o'z uyidan maktabga soatiga 6 km (km/h) piyoda bordi. U orqaga 2 km/h tezlikda qaytdi. Uning borish va kelish yo'lidagi o'rtacha tezligini toping.",
    imageUrl: "",
    options: ["3 km/h", "4 km/h", "5 km/h", "6 km/h", "3.5 km/h"],
    correctAnswer: 0
  }
  ]
  },
  {
    id: "m27-27",
    subject: "matematika",
    grade: 3,
    topic: "Kasr tushunchasi va kasrlarni taqqoslash",
    questions: [
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi1.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi2.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi3.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi4.png",
        options: ["uchdan bir", "oltidan besh", "beshdan uch", "to‘rtdan bir."],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi5.png",
        options: ["uchdan bir", "oltidan besh", "beshdan uch", "to‘rtdan bir."],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi6.png",
        options: ["uchdan bir", "oltidan besh", "beshdan uch", "to‘rtdan bir."],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi7.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi8.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi9.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi10.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi11.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "Uchdan bir soatda necha minut bor?",
        imageUrl: "",
        options: ["30", "20", "25", "15"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "Uchdan ikki soatda necha minut bor?",
        imageUrl: "",
        options: ["30", "40", "25", "20"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "Aziza 320 betlik kitobning sakkizdan uch qismini o‘qidi. U kitobning necha betini o‘qigan?",
        imageUrl: "",
        options: ["120", "140", "200", "160"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "Aziza 320 betlik kitobning sakkizdan uch qismini o‘qidi. U kitobning necha betini hali o‘qimagan?",
        imageUrl: "",
        options: ["120", "140", "200", "160"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi16.png",
        options: ["105", "95", "100", "1650"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi17.png",
        options: ["835", "905", "840", "845"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi18.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi19.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "Rasmdagi tortning massasi 2450 g bo‘lib, u rasmda ko‘rsatilgandek ikki bo‘lakka bo‘lindi. Tortning katta bo‘lagi massasini aniqlang.",
        imageUrl: "/images/kasrtushunchasi20.png",
        options: ["1960 g", "735 g", "1470 g", "1715 g"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi21.png",
        options: ["<", ">", "="],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi22.png",
        options: ["<", ">", "="],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi23.png",
        options: ["<", ">", "="],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi24.png",
        options: ["<", ">", "="],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi25.png",
        options: ["<", ">", "="],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi26.png",
        options: ["<", ">", "="],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "Ozoda xola 20 ta quymoq pishirdi. Aziza quymoqlarning o‘ndan uch qismini, Nargiza o‘ndan to‘rt qismini, Dilnoza o‘ndan bir qismini yedi. Qancha quymoq qoldi?",
        imageUrl: "",
        options: ["4", "6", "8", "5"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi28.png",
        options: ["105", "210", "240", "180"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi29.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi30.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi31.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi32.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi33.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi34.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi35.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi36.png",
        options: ["<", ">", "="],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi37.png",
        options: ["<", ">", "="],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi38.png",
        options: ["<", ">", "="],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi39.png",
        options: ["<", ">", "="],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi40.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi41.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi42.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m27-27",
        text: "",
        imageUrl: "/images/kasrtushunchasi43.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
    ]
  },
  {
    id: "m28-28",
    subject: "matematika",
    grade: 3,
    topic: "Teng kasrlar, kasrlarni qo’shish va ayirish",
    questions: [
      {
        id: "m28-28",
        text: "Ikki kasr teng. 1-kasrning suratidagi sonni toping.",
        imageUrl: "/images/tengkasrlar1.png",
        options: ["3", "2", "1", "6"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "Rasmning bo’yalgan qismi ikki kasr yordamida yozilgan. 1-kasr maxraji va 2-kasr suratini toping.",
        imageUrl: "/images/tengkasrlar2.png",
        options: ["10, 4", "10, 2", "2, 5", "10, 5"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "Rasmning bo’yalgan qismi kasr yordamida yozilgan. Kasrni maxrajini toping",
        imageUrl: "/images/tengkasrlar3.png",
        options: ["3", "2", "1", "6"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar4.png",
        options: [">", "<", "="],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar5.png",
        options: ["A", "B va C", "A va B", "C"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar6.png",
        options: ["A", "B va C", "A va B", "C"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar7.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar8.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar9.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar10.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar11.png",
        options: ["10", "2", "8", "6"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar12.png",
        options: ["5", "2", "4", "6"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar13.png",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar14.png",
        options: ["8", "2", "3", "4"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar15.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar16.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar17.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar18.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar19.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar20.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar21.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar22.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar23.png",
        options: ["3", "2", "1", "4"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar24.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar25.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar26.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar27.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar28.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar29.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar30.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar31.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar32.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar33.png",
        options: [">", "<", "="],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar34.png",
        options: [">", "<", "="],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar35.png",
        options: [">", "<", "="],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar36.png",
        options: [">", "<", "="],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar37.png",
        options: [">", "<", "="],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar38.png",
        options: [">", "<", "="],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar39.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar40.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar41.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar42.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar43.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar44.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar45.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "Agar 1 kg pistaning 1/5 qismini yog‘ tashkil qilsa, 20 kg pista yog‘i olish uchun necha kilogramm pista kerak bo‘ladi?",
        imageUrl: "",
        options: ["4", "100", "80", "15"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar47.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar48.png",
        options: ["25", "20", "30", "40"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar49.png",
        options: ["20", "100", "80", "90"],
        correctAnswer: 1
      },
       {
        id: "m28-28",
        text: "",
        imageUrl: "/images/tengkasrlar50.png",
        options: ["52", "48", "65", "156"],
        correctAnswer: 1
      },
    ]
  },
   {
    id: "m29-29",
    subject: "matematika",
    grade: 3,
    topic: "To’g’ri, noto’g’ri va butun qismli kasrlar",
    questions: [
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri1.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri2.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri3.png",
        options: ["2 ta", "3 ta", "4 ta", "5 ta"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri4.png",
        options: ["5 ta", "4 ta", "3 ta", "2 ta"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri5.png",
        options: ["5 ta", "4 ta", "3 ta", "2 ta"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "Maxraji 11 ga teng bo‘lgan va suratida natural sonlar bo’lgan to’g’ri kasrlar nechta?",
        imageUrl: "",
        options: ["9 ta", "cheksiz ko’p", "11 ta", "10 ta"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "Surati 11 ga teng bo‘lgan va maxrajida natural sonlar bo’lgan noto’g’ri kasrlar nechta?",
        imageUrl: "",
        options: ["9 ta", "cheksiz ko’p", "11 ta", "10 ta"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri8.png",
        options: ["8", "7", "9", "10"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri9.png",
        options: ["300 minut", "240 minut", "210 minut", "270 minut"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri10.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri11.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri12.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri13.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri14.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri15.png",
        options: ["11", "101", "1001", "15"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri16.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri17.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri18.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri19.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "To’g’ri kasrning butun qismi nimaga teng?",
        imageUrl: "",
        options: ["1", "2", "0", "suratiga"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri21.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri22.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri23.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri24.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "Noto‘g‘ri kasr qiymati haqida nima deyish mumkin?",
        imageUrl: "",
        options: ["1 dan katta", "1 dan kichik emas", "1 ga teng", "0 ga teng."],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "Bir xil maxrajli ikki kasrdan qaysi birining surati kichik bo‘lsa, o‘sha kasr ... bo‘ladi.",
        imageUrl: "",
        options: ["Kichik", "Katta", "To‘g‘ri kasr", "Noto‘g‘ri kasr."],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri27.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri28.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri29.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri30.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri31.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri32.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri33.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri34.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri35.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri36.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri37.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri38.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri39.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri40.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri41.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri42.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri43.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "public/images/togrinotogri44.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
      {
        id: "m29-29",
        text: "",
        imageUrl: "/images/togrinotogri45.png",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
    ]
  },
  {
    id: "m30-30",
    subject: "matematika",
    grade: 3,
    topic: "Pulga doir masalalar",
    questions: [
  {
    id: "m30-30",
    text: "1. Rasmda qancha pul ko’rsatilgan?",
    options: [
      "47 tiyin",
      "37 tiyin",
      "45 tiyin",
      "35 tiyin"
    ],
    correctAnswer: 0
  },
  {
    id: "m30-30",
    text: "2. Alisada 2 ta 5 so’mlik qog’oz pul, 1 ta 2 so’mlik tanga va 4 ta o’n tiyinlik tanga, 1ta ikki tiyinlik va 4 ta bir tiyinlik tangasi bor. Uning qancha puli bor?",
    options: [
      "58 tiyin",
      "12.46 so’m",
      "13.46 so’m",
      "158 tiyin"
    ],
    correctAnswer: 1
  },
  {
    id: "m30-30",
    text: "3. Bitta ruchka 350 so’m. Ushbu pullar ruchka sotib olish uchun yetarlimi?",
    options: [
      "Yetarli",
      "yetarli emas",
      "5 so’m yetmaydi",
      "5 so’m yetmaydi"
    ],
    correctAnswer: 1
  },
  {
    id: "m30-30",
    text: "4. Aka-ukaning pullari rasmda ko’rsatilgan. Akaning puli ukanikidan qancha ko’p?\nUkaning puli Akaning puli",
    options: [
      "715 so’m",
      "725 so’m",
      "705 so’m",
      "695 so’m"
    ],
    correctAnswer: 0
  },
  {
    id: "m30-30",
    text: "5. Bozorda 20 000 so’mdan 9 ta shaxmat taxtasi va 30 000 so’mdan 5 ta sumka sotib olmoqchisiz. Ortib qolgan pulga yana nima sotib olish mumkin?",
    options: [
      "2 ta sumka",
      "2 ta shaxmat",
      "1 ta shaxmat va bitta sumka",
      "Hech birini sotib olib bo’lmaydi"
    ],
    correctAnswer: 1
  },
  {
    id: "m30-30",
    text: "6. Bitta 12 varoqli daftar 250 so’m turadi. 7 ta shunday daftar xarid qilsangiz sotuvchi sizga qancha qaytim qaytadi?",
    options: [
      "25 so’m",
      "50 so’m",
      "40 so’m",
      "pul yetarli emas"
    ],
    correctAnswer: 1
  },
  {
    id: "m30-30",
    text: "7. Qaysi pul ko’proq va qanchaga?\n1. 2.",
    options: [
      "1-pul 168 200 so’m",
      "1-pul 167 200 so’m",
      "2-pul 168 200 so’m",
      "2-pul 167 200 so’m"
    ],
    correctAnswer: 0
  },
  {
    id: "m30-30",
    text: "8. Agar ushbu pulni 10 000 so’mliklar bilan maydalansa, nechta 10 000 so’mlik pul kerak.",
    options: [
      "32",
      "30",
      "320",
      "120"
    ],
    correctAnswer: 0
  },
  {
    id: "m30-30",
    text: "9. Dilnozada 21 ta 100 so’mlik, 33 ta 50 so’mlik va bir nechta 25 so’mlik bor. Agar uning jami puli 4 775 so’m bo’lsa, Dilnozada nechta 25 so’mlik bo’lgan?",
    options: [
      "39",
      "41",
      "42",
      "43"
    ],
    correctAnswer: 1
  },
  {
    id: "m30-30",
    text: "10. Komilbek yangi uy sotib oldi. U o’z ismini uyning tomiga rasmda ko’rsatilgani kabi yozdirdi.\nUnli harflarning bir donasini o’rnatish 750 000 so’mdan, undosh harflarning bir donasini o’rnatish 900 000 so’mdan tushdi. Bino ustiga KOMILBEK deb yozdirish uchun jami qancha xarajat qilingan?",
    options: [
      "6 450 000 so’m",
      "6 500 000 so’m",
      "6 650 000 so’m",
      "6 750 000 so’m"
    ],
    correctAnswer: 3
  },
  {
    id: "m30-30",
    text: "11. Akbarshohga dadasi 50 000 so’m, Onasi 10 000 so’m va akasi 5 000 so’m pul berdi. Akbarshoh barcha puliga muzqaymoq (5000 so’mdan) va shar (3000 so’mdan) sotib oldi. U sotib olgan sharlar soni quyidagilardan qaysi biri bo’lishi mumkin?",
    options: [
      "9",
      "12",
      "13",
      "15"
    ],
    correctAnswer: 3
  },
  {
    id: "m30-30",
    text: "Rasmda berilgan ma’lumotlar asosida savolllarga javob bering. (12-13)\n12. Ziyoda supermarketda A rasmda berilgan haridlarni amalga oshirdi. U sotib olgan mahsulotlari uchun qancha pul to’laydi?",
    options: [
      "290 000 so’m",
      "200 000 so’m",
      "300 000 so’m",
      "390 000 so’m"
    ],
    correctAnswer: 0
  },
  {
    id: "m30-30",
    text: "13. Zafar “Karzinka” supermarketidan rasmdagi narxlarda B haridni amalga oshirdi. U kassada haridlari uchun qancha pul to’lagan?",
    options: [
      "300 000 so’m",
      "355 000 so’m",
      "200 000 so’m",
      "255 000 so’m"
    ],
    correctAnswer: 3
  },
  {
    id: "m30-30",
    text: "14. 50 000 so’m pulni maydalash(almashtirish) kerak. Sizda 3 ta o’n ming so’mlik va 12 ta besh ming so’mlik va 8 ta ikki ming so’mlik bor. Qanday eng kam sondagi pul (banknota) bilan 50 000 so’mni maydalash mumkin?",
    options: [
      "7 ta",
      "6 ta",
      "10 ta",
      "9 ta"
    ],
    correctAnswer: 0
  },
  {
    id: "m30-30",
    text: "15. 20 000 so’m pulni 1000 so’mlik, 2000 so’mlik, 5000 so’mlik va 10000 so’mliklar bilan jami necha xil usulda maydalash (almashtirish) mumkin?",
    options: [
      "10",
      "20",
      "30",
      "40"
    ],
    correctAnswer: 3
  },
  {
    id: "m30-30",
    text: "16. Alisher do’kondan 1 kilogrami 15 mingdan bo’lgan 2 kg pomidor va donasi 2 ming bo’lgan 7 ta kofe oldi. Xarid uchun u sotuvchiga 50 ming so’m pul berdi. Agar do’konda 1000 so’mlik, 2000 so’mlik, 5 000 so’mlik qaytimlardan yetarlicha bo’lsa, Alisherga necha xil usulda qaytim qaytish mumkin?",
    options: [
      "3 xil",
      "4 xil",
      "5 xil",
      "6 xil"
    ],
    correctAnswer: 2
  },
  {
    id: "m30-30",
    text: "17. Zohidjonda 5 ta 2000 so’mlik, 4 ta 5 ming so’mlik va 10 ming so’mliklarda jami 50 ming so’m puli bor. Unda nechta 10 ming so’mlik pul bor?",
    options: [
      "4 ta",
      "1 ta",
      "3 ta",
      "2 ta"
    ],
    correctAnswer: 3
  },
  {
    id: "m30-30",
    text: "18. Zohirshoh va Asqar birgalikda pul to’plab koptok olishmoqchi. Ular olmoqchi bo’lgan koptokning narxi 100 ming so’m. Agar Zohirshoh 5 ta 2 ming so’mlik, 6 ta 5 ming so’mlik va 1 ta 20 ming so’mlik qo’shgan bo’lsa, Asqar esa yetmayotgan pullarning hammasini 10 ming so’mlikda qo’shgan bo’lsa, Asqar nechta pul bergan?",
    options: [
      "1 ta",
      "2 ta",
      "3 ta",
      "4 ta"
    ],
    correctAnswer: 3
  },
  {
    id: "m30-30",
    text: "19. 100 000 so’m pulni maydalash(almashtirish) kerak. Sizda 1 ta ellik ming so’mlik va 50 ta ming so’mlik va 2 ta o’n ming so’mlik va 5 ta besh ming so’mlik bor. Qanday eng kam sondagi pul (banknota) bilan 100 000 so’mni maydalash mumkin.",
    options: [
      "17 ta",
      "51 ta",
      "13 ta",
      "57 ta"
    ],
    correctAnswer: 2
  },
  {
    id: "m30-30",
    text: "20. 100 000 so’m pulni maydalash(almashtirish) kerak. Sizda 1 ta ellik ming so’mlik va 50 ta ming so’mlik va 3 ta o’n ming so’mlik va 5 ta besh ming so’mlik bor. Qanday eng ko’p sondagi pul (banknota) bilan 100 000 so’mni maydalash mumkin.",
    options: [
      "57 ta",
      "51 ta",
      "8 ta",
      "13 ta"
    ],
    correctAnswer: 0
  },
  {
    id: "m30-30",
    text: "21. 100 000 so’m pulni maydalash (almashtirish) kerak. Sizda 1 ta ellik ming so’mlik va 50 ta ming so’mlik va 2 ta o’n ming so’mlik va 7 ta besh ming so’mlik bor. Qanday eng ko’p sondagi pul (banknota) bilan 100 000 so’mni maydalash mumkin.",
    options: [
      "57 ta",
      "51 ta",
      "13 ta",
      "58"
    ],
    correctAnswer: 3
  },
  {
    id: "m30-30",
    text: "22. Xaridor 4 000 so‘mdan 2 kg kartoshka va 1 600 so‘mga lavlagi sotib oldi. U sotuvchiga 10 000 so‘m berdi. Xaridor qancha qaytim olishi kerak?",
    options: [
      "600 so’m",
      "2 000 so’m",
      "4 400 so’m",
      "400 so’m"
    ],
    correctAnswer: 3
  },
  {
    id: "m30-30",
    text: "23. Do’konda quyidagi e’lon osilgan: “Ikkita ko’ylakni uchta ko’ylak narxida sotib olsangiz uchinchi ko’ylakni sizga sovg’a qilamiz.” Agar bitta ko’ylakning narxi 355 000 so’m bo’lsa, qancha pul tejaladi?",
    options: [
      "710 000 so’m",
      "300 000 so’m",
      "355 000 so’m",
      "tejalmaydi"
    ],
    correctAnswer: 3
  },
  {
    id: "m30-30",
    text: "24. Avtobusda yo’lkira haqi 1400 so’m. Sardor haftaning besh kunida maktabga avtobusda borib keladi, kechki payt esa mashg’ulotga ikkita avtobusda boradi va qaytishda ham huddi shu avtobuslarga chiqadi. U yo’l haqini ikki xil usulda to’lashi mumkin. 1) har bir to’lovni alohida amalga oshirish, 2) 6000 so’mdan umumiy kunlik chipta sotib olish. U 1 haftada 2-usuldan foydalanganda qancha pul tejaydi?",
    options: [
      "10 000 so’m",
      "12 000 so’m",
      "16 800 so’m",
      "18 800 so’m"
    ],
    correctAnswer: 1
  },
  {
    id: "m30-30",
    text: "25. Jahonda 5 so’mlik va 10 so’mlik pullari bor. Unda jami 13 ta pul (qog’oz) bor. Quyidagilardan qaysi biri undagi pul miqdoriga teng bo’la olmaydi?",
    options: [
      "80",
      "60",
      "70",
      "115"
    ],
    correctAnswer: 1
  },
  {
    id: "m30-30",
    text: "26. Sizda 3 ta ikki yuz so’mlik, 7 ta besh yuz so’mlik, 3 ta ming so’mlik pullar bor. Quyidagi tovarlarni qaysilarini qaytim qaytmaydigan qilib olishingiz mumkin.\nSumka – 7 000 so’m Rangli qalam – 4 900 so’m Kley – 2 600 so’m\nKitob – 3 700 so’m Rangli qog’oz – 4 800 so’m Plamastor – 6 800 so’m",
    options: [
      "Sumka, Rangli qog’oz",
      "Kitob, Plamastor",
      "Kitob, Rangli qalam, Kley",
      "Kitob, Kley"
    ],
    correctAnswer: 2
  },
  {
    id: "m30-30",
    text: "27. Pullarni kamayish tartibida yozing. £0.84, £0.57, £0.11, £0.29",
    options: [
      "£0.84, £0.57, £0.29, £0.11",
      "£0.84, £0.57, £0.11, £0.29",
      "£0.11, £0.29, £0.57, £0.84",
      "£0.11, £0.57, £0.29, £0.84"
    ],
    correctAnswer: 0
  },
  {
    id: "m30-30",
    text: "28. Pullarni o’sish tartibida yozing. £2.96, £2.36, £2.59",
    options: [
      "£2.96, £2.36, £2.59",
      "£2.96, £2.59, £2.36",
      "£2.36, £2.59, £2.96"
    ],
    correctAnswer: 2
  },
  {
    id: "m30-30",
    text: "29. Pullarni o’sish tartibida yozing. £3.64, £3.98, £3.15",
    options: [
      "£3.64, £3.98, £3.15",
      "£3.15, £3.64, £3.98",
      "£3.98, £3.64, £3.15"
    ],
    correctAnswer: 1
  },
  {
    id: "m30-30",
    text: "30. Ayiring £8.95 – £7.71 = ?",
    options: [
      "£1.24",
      "£2.24",
      "£1.14"
    ],
    correctAnswer: 0
  },
  {
    id: "m30-30",
    text: "31. Ayiring £7.58 – £5.44 = ?",
    options: [
      "£2.24",
      "£2.14",
      "£1.14"
    ],
    correctAnswer: 1
  },
  {
    id: "m30-30",
    text: "32. Qo’shing £75 + £5.44 = ?",
    options: [
      "£80.44",
      "£6.19",
      "£804.40"
    ],
    correctAnswer: 0
  },
  {
    id: "m30-30",
    text: "33. Vondraning 2 ta ishi bor. U gazeta yetkazib berishdan £7.09, kuchukni aylantirib yurishdan £6.49 mablag’ ishlab topdi. U jami qancha pul ishlab topdi?",
    options: [
      "£13.68",
      "£14.58",
      "£13.58"
    ],
    correctAnswer: 2
  },
  {
    id: "m30-30",
    text: "34. Karimda 50 000 so’m pul bor. U do’kondan o’yinchoq sotib olishni xohlaydi. Quyida bir nechta o’yinchoqlar narxi ko’rsatilgan jadval berilgan.\nO’yinchoq nomi Bitta o’yinchoq narxi\nAyiqcha 17 000\nKema 12 000\nMashina 8 000\nVertalyot 15 000\nDo’konda har bir o’yinchoq turidan xohlagancha olishi mumkin. Aziz do’kondan 5 ta o’yinchoq sotib oldi. Sotuvchi unga ma’lum miqdorda qaytim qaytdi. Karim qaysi o’yinchoq turidan aniq sotib olgan?",
    options: [
      "Ayiqcha",
      "Kema",
      "Mashina",
      "Vertalyot"
    ],
    correctAnswer: 2
  },
  {
    id: "m30-30",
    text: "35. Lia £630.00 ga yoqutli taqinchoq, £369.00ga zumrad taqinchoq sotib oldi. U jami qancha pul sarflagan.",
    options: [
      "£989.00",
      "£999.00",
      "£998.00",
      "£898.00"
    ],
    correctAnswer: 1
  },
  {
    id: "m30-30",
    text: "36. Josh va Regan maktabga xayriya uchun mablag’ ajratishga qaror qilishdi. Josh £99.42, Regan £31.58 mablag’ni xayriya qildi. Jami qancha pul xayriya qilingan?",
    options: [
      "£133.20",
      "£131.20",
      "£129.80",
      "£131.00"
    ],
    correctAnswer: 3
  },
  {
    id: "m30-30",
    text: "37. Alan kim oshdi savdosida kumush ko'zani 80 funt sterlingga sotib oldi. Bir yil o'tgach, antiqa kumush narxi ko'tarildi va u uni kim oshdi savdosida sotishga qaror qildi, buning uchun u 100 funt oldi. U darhol qaroridan pushaymon bo'ldi va xaridorga murojaat qildi, va uni yana qaytarib sotib oldi. Lekin u 110 funt to'lashi kerak edi. Yana bir yil o'tgach, unga pul kerak bo'ldi, shuning uchun ko`zani sotuvchiga 120 funtga sotdi.\nU umuman ko'zadan qancha foyda ko'rdi?",
    options: [
      "10 funt",
      "20 funt",
      "30 funt",
      "40 funt",
      "50 funt"
    ],
    correctAnswer: 2
  },
  {
    id: "m30-30",
    text: "38. Akmal bankdagi hamma pullarini naqt pul ko’rinishida olmoqchi. Unga berilayotgan har bir qog’oz pulning og’irligi 10 g. U 1mln pulini 1000 so’mlik, 50 mln pulini 100 ming so’mlik va qolgan pullarini 200 ming so’mlikda oldi. Agar u bankdan 20 kg pul olib chiqqan bo’lsa, uning bankda qancha puli bo’lgan?",
    options: [
      "181 mln",
      "201 mln",
      "121 mln",
      "151 mln"
    ],
    correctAnswer: 3
  },
  {
    id: "m30-30",
    text: "39. Do‘konda bir xil bo‘yoqdan 3 yoki undan ko‘p banka sotib olinsa, sotib olingan o’sha rangdagi har bir banka bo‘yoq narxi 1/5 qismiga kamaytirilishi e’lon qilindi. Agar oila A bo’yoqdan 4 banka va C bo‘yoqdan 2 banka sotib olsa, jami qancha so‘m mablag‘ sarflaydi?",
    options: [
      "110 000",
      "100 000",
      "98 000",
      "88 000"
    ],
    correctAnswer: 2
  },
  {
    id: "m30-30",
    text: "40. Sizga ombordagi yukni eng maqbul tarzda jo’natish topshirildi. Omborda 87 t yuk bor. Birinchi yuk mashina 1 martada 10 t gacha yukni tashishi mumkin va har qatnashiga 100 000 so’mdan pul oladi. Ikkinchi yuk mashina esa 1 martada 8 t gacha yukni tashishi mumkin va har qatnashiga 80 000 so’mdan pul oladi. Qaysi mashinada yukni arzonroq tashish mumkin?",
    options: [
      "1-mashina",
      "2-mashina",
      "1-si 50 ming arzon",
      "ikkisida bir xil"
    ],
    correctAnswer: 1
  },
  {
    id: "m30-30",
    text: "41. Bahromda 72 000 so’m pul bor edi. U pulining 1\n4 qismiga kartoshka va qolgan puliga banan sotib oldi. 1 kg kartoshkaning narxi 3 000 so‘m va 1 kg bananning narxi 9 000 so‘m bo‘lsa, u jami necha kilogramm kartoshka va banan sotib olgan?",
    options: [
      "9",
      "16",
      "6",
      "12"
    ],
    correctAnswer: 3
  },
  {
    id: "m30-30",
    text: "42. Maktab o‘qituvchisi chorak yakunlanishi munosabati bilan 35 ta o‘quvchisining har biriga bittadan shokolad bermoqchi. Supermarketda shokoladning bir donasi 7500 so’m turadi. Shuningdek, chegirma bilan 3 donalik shokolad to‘plamini 21 000 so’m, 5 donalik to‘plamni 33 000 so’m ga va 12 talik to‘plamni esa 72 000 so’mga sotib olish mumkin. O‘qituvchi shokoladlar uchun eng kamida qancha pul sarflaydi?",
    options: [
      "243 000 so’m",
      "228 000 so’m",
      "217 500 so’m",
      "216 000 so’m"
    ],
    correctAnswer: 3
  },
  {
    id: "m30-30",
    text: "43. Malika kitob sotib olish uchun do’konga bordi. U birinchi kitobga o’zidagi bor pulning yarmini va yana 1000 so’m to’ladi, 2-kitobga qolgan pulini yarmini va yana 2000 so’m to’ladi. 3-kitobga esa qolgan pulini yarmini va yana 3000 so’m to’ladi. Keyin Malikada pul qolmadi. Dastlab Malikada qancha pul bo’lgan?",
    options: [
      "45000",
      "36000",
      "34000",
      "33000"
    ],
    correctAnswer: 2
  },
  {
    id: "m30-30",
    text: "44. Bir kuni ayyor Xo’ja Nasriddin ochko’z boyga saboq bermoqchi bo’libdi. U boyga har safar ko’prikdan o’tganida uning tangalarini ikki baravar ko’paytirib berishni va’da qildi. Lekin shunday shart qo’ydi, ko’prik oxirida bor unga 24 tanga berishi kerak. Boy rozi bo’ldi va uchinchi o’tishdan keyin u butunlay plsiz qoldi. Boyning tangalari avval qancha edi?",
    options: [
      "72 tanga",
      "18 tanga",
      "8 tanga",
      "21 tanga"
    ],
    correctAnswer: 3
  },
  {
    id: "m30-30",
    text: "45. Umrzoqning hamyonida 5000, 10000, 20000 va 50000 so’mlik banknotlar aralashmasida 400000 so’m puli bor edi. Uning dadasi hamyonni ochdi va har bir qog’oz pulni keyingi kattaroq banknotga almashtirib berdi. Shunday qilib, har bir 5000 so’mlik banknot o‘rniga 10000 so’mlik, har bir 10000 so’mlik banknot o‘rniga 20000 so’mlik, har bir 20000 so’mlik banknot o’rniga 50000 so’mlik va har bir 50000 so’mlik banknot o’rniga 100000 so’mlikni almashtirdi. Endi Umrzoqda 900000 so’m pul bo’ldi. Ushbu yangi summaning 50000 so’mlik banknotlarda qanchasi bor?",
    options: [
      "500000",
      "300000",
      "200000",
      "100000"
    ],
     correctAnswer: 1
   },
  ]
 },
  {
    id: "eq1-1",
    subject: "ingliz_tili",
    grade: 3,
    topic: "Alphabet",
    questions: [
      {
        id: "eq1",
        text: "Which letter comes after 'A'?",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1
      },
    ]
  },
];
