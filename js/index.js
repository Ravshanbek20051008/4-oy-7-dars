// function turli3taranglar(rang1, rang2, rang3) {
//   let rang = [];
//   rang.push(rang1);
//   rang.push(rang2);
//   rang.push(rang3);
//   return rang;
// }
// console.log(turli3taranglar("qizil", "sarq", "qora"));
// 2-masala
// function turli3tasonlar(son1, son2, son3) {
//   let sonlar = [];
//   sonlar.push(son1);
//   sonlar.push(son2);
//   sonlar.push(son3);
//   return sonlar;
// }
// console.log(turli3tasonlar("1", "23", "20"));
// 3-masala
// function turli3tasonlar(son1, son2, son3, son4, son5) {
//   let sonlar = [];
//   sonlar.push(son1);
//   sonlar.push(son2);
//   sonlar.push(son3);
//   sonlar.push(son4);
//   sonlar.push(son5);
//   return [sonlar[0], sonlar[sonlar.length - 1]];
// }
// console.log(turli3tasonlar("1", "23", "20", "12", "18"));
// 4-masala
// function turli3tasonlar(son1, son2, son3, son4, son5) {
//   let sonlar = [son1, son2, son3, son4, son5];
//   sonlar.splice(2, 1, 50);
//   return sonlar;
// }
// console.log(turli3tasonlar(1, 23, 20, 12, 18));
// // 5-masala
// function turli3tasonlar(son1, son2, son3, son4, son5) {
//   let sonlar = [son1, son2, son3, son4, son5];
//   sonlar.push(17);
//   return sonlar;
// }
// console.log(turli3tasonlar(1, 23, 20, 12, 18));
// 6-masla
// function turli3tasonlar(son1, son2, son3, son4, son5) {
//   let sonlar = [son1, son2, son3, son4, son5];
//   sonlar.pop();
//   return sonlar;
// }
// console.log(turli3tasonlar(1, 23, 20, 12, 18));
// 7-masala
// function turli3tasonlar(son1, son2, son3, son4, son5) {
//   let sonlar = [son1, son2, son3, son4, son5];
//   return sonlar.length;
// }
// console.log(turli3tasonlar(1, 23, 20, 12, 18));
// 8-masala
// function turli3tasonlar(son1, son2, son3, son4, son5) {
//   let sonlar = [son1, son2, son3, son4, son5];
//   sonlar.unshift(100);
//   return sonlar;
// }
// console.log(turli3tasonlar(1, 23, 20, 12, 18));
// 9-masala
// function turli3tasonlar(son1, son2, son3, son4, son5) {
//   let sonlar = [son1, son2, son3, son4, son5];
//   sonlar.shift();
//   return sonlar;
// }
// console.log(turli3tasonlar(1, 23, 20, 12, 18));

// 10-masala
// function turli3tasonlarmevalar(sonlar, mevalar) {
//   let sonlar = [son1, son2, son3, son4, son5];
//   let mevalar = [meva1, meva2, meva3, meva4, meva5];
//   return sonlar;
// }
// console.log(turli3tasonlarmevalar(1, 23, 20, 12, 18));
// console.log(turli3tasonlarmevalar(["olma", "orik", "shaftoli", "tut"]));
// 11-masala
// function turli3tasonlar(son1, son2, son3, son4, son5) {
//   let sonlar = [son1, son2, son3, son4, son5];
//   return sonlar;
// }
// console.log(turli3tasonlar(sonlar[(1, 23, 20, 12, 18)], sonlar.includes(12)));

// 12-masala
// ishlay olmadim bunday narsa kormadik
// 13-masala
// function turli3tasonlar(son1, son2, son3, son4, son5) {
//   let sonlar = [son1, son2, son3, son4, son5];
//   let index = sonlar.indexOf(23);
//   return index;
// }
// console.log(turli3tasonlar(1, 23, 20, 12, 18));
// 14-masala
// function turli3tasonlar(son1, son2, son3, son4, son5) {
//   let sonlar = [son1, son2, son3, son4, son5];
//   let index = sonlar.indexOf(23);
//   sonlar.splice(index, 1);
//   return sonlar;
// }
// console.log(turli3tasonlar(1, 23, 20, 12, 18));
// // 15-masala
// function turli3tasonlar(son1, son2, son3, son4, son5) {
//   let sonlar = [son1, son2, son3, son4, son5];
//   sonlar.pop();
//   sonlar.pop();
//   return sonlar;
// }
// console.log(turli3tasonlar(1, 23, 20, 12, 18));
// 16-masala
// function turli3tasonlar(son1, son2, son3, son4, son5) {
//   let sonlar = [son1, son2, son3, son4, son5];
//   sonlar.push(0);
//   sonlar.push(10);
//   return sonlar;
// }
// console.log(turli3tasonlar(1, 23, 20, 12, 18));
// 17-masala
// function turli3tasonlar(son1, son2, son3, son4, son5) {
//   let sonlar = [son1, son2, son3, son4, son5];
//   sonlar.splice(0, 1, son5);
//   sonlar.splice(4, 1, son1);
//   return sonlar;
// }
// console.log(turli3tasonlar(1, 23, 20, 12, 18));
// 18-masala
// function turli3tasonlar(son1, son2, son3, son4, son5) {
//   let sonlar = [son1, son2, son3, son4, son5];
//   sonlar.splice(0);
//   return sonlar;
// }
// console.log(turli3tasonlar(1, 23, 20, 12, 18));
// 19-masala
// function turli3tasonlar(son1, son2, son3, son4, son5) {
//   let sonlar = [son1, son2, son3, son4, son5];
//   let yangi = sonlar;
//   return yangi;
// }
// console.log(turli3tasonlar(1, 23, 20, 12, 18));
// 20-masala
// function turli3tasonlar(sonlar) {
//   let yangi = [];
//   for (let i = 0; i < sonlar.length; i++) {
//     yangi = push(sonlar[i]);
//     yangi = push(sonlar[i]);
//   }
//   return yangi;
// }
// console.log(turli3tasonlar(1, 23, 20, 12, 18));
// 21-masala
// function turli3tasonlar(sonlar) {
//   //   let max;
//   //   let min;
//   //   if (son1 > son2) {
//   //     max = son1;
//   //   } else {
//   //     min = son2;
//   //   }
//   //   if (max < son3) {
//   //     max = son3;
//   //   } else {
//   //     min = son3;
//   //   }
//   return Math.max(...sonlar);
// }
// const sonlar = [1, 2, 3];
// const engkatta = turli3tasonlar(sonlar);
// console.log(engkatta);
// 22-masala
// let son1 = +prompt("son1");
// let son2 = +prompt("son1");
// let son3 = +prompt("son1");
// function turli3tasonlar(sonlar) {
//   return Math.min(...sonlar);
// }
// const sonlar = [son1, son2, son3];
// const engkichik = turli3tasonlar(sonlar);
// console.log(engkichik);
// 23-masala
// function turli3tasonlar(sonlar) {
//   let yangi = 0;
//   for (let i = 0; i < sonlar.length; i++) {
//     yangi += sonlar[i];
//   }
//   return yangi / sonlar.length;
// }
// const sonlar = [15, 18, 20, 12, 10];
// console.log(turli3tasonlar(sonlar));
// 24-masala
// function turli3tasonlar(sonlar) {
//   let teskariSonlar = [];
//   for (let i = sonlar.length - 1; i >= 0; i--) {
//     teskariSonlar.push(sonlar[i]);
//   }
//   return teskariSonlar;
// }

// const sonlar = [15, 18, 20, 12, 10];
// console.log(turli3tasonlar(sonlar));
// // 25-masala
// function faqatmusbatsonlar(sonlar) {
//   let musbat = [];
//   for (let i = 0; i < sonlar.length; i++) {
//     if (sonlar[i] >= 0) {
//       musbat.push(sonlar[i]);
//     }
//   }
//   return musbat;
// }
// const sonlar = [-20, 15, 18, 12, -10];
// console.log(faqatmusbatsonlar(sonlar));
// 26-masala
// function hammaelementni2ga_kop(sonlar) {
//   let kopaytirish = [];
//   for (let i = 0; i < sonlar.length; i++) {
//     kopaytirish.push(sonlar[i] * 2);
//   }
//   return kopaytirish;
// }
// const sonlar = [2, 12, 4, 6];
// console.log(hammaelementni2ga_kop(sonlar));
// 27-masala
// function hammaelementni2ga_kop(sonlar) {
//   let kopaytirish = [];
//   for (let i = 0; i < sonlar.length; i++) {
//     kopaytirish.push(sonlar[i] ** 2);
//   }
//   return kopaytirish;
// }
// const sonlar = [2, 12, 4, 6];
// console.log(hammaelementni2ga_kop(sonlar));
// 28-masala
// function elementniOchirish(sonlar, element) {
//   sonlar.splice(1);

//   return sonlar;
// }

// // Misol uchun:
// const sonlar = [2, 12, 4, 6, 12];
// console.log(elementniOchirish(sonlar, 12));
// 29-masal
// function elementningboryoqligi(mevalar, meva) {
//   return mevalar.includes(meva);
// }
// const mevalar = ["olma", "nok", "shaftoli", "orik", "anjir", "hurmo"];
// console.log(elementningboryoqligi(mevalar, "nok"));

// 30-masala
// function unikalelement(sonlar, element) {
//     if
//   return sonlar.includes(element);
// }
// sonlar = [1, 3, 4, 5, 97, 56, 23, 1, 3, 5];
// console.log(unikalelement(sonlar));
// 31-masala
// function yigindilar(sonlar, element) {
//   let yigindi = 0;
//   for (let i = 0; i < sonlar.length; i++) {
//     yigindi += sonlar[i];
//   }
//   return yigindi;
// }
// const sonlar = [1, 3, 4, 5, 9];
// console.log(yigindilar(sonlar));
// 32-masala
// function kattakichik(sonlar) {
//   let katta = sonlar[0];
//   let kichik = sonlar[0];
//   for (let i = 0; i < sonlar.length; i++) {
//     if (katta < sonlar[i]) {
//       katta = sonlar[i];
//     } else if (kichik > sonlar[i]) {
//       kichik = sonlar[i];
//     }
//   }
//   return [katta, kichik];
// }
// const sonlar = [1, 3, 5, 23, 54, 5678, 11];
// console.log(kattakichik(sonlar));
// chatgpt4odan sorab qildim ozim oxirigabora olmadim lekin tushunib oldim
// 33-masala
// function massivbirlashtirish(son, meva) {
//   son = sonlar;
//   meva = mevalar;
//   return { meva, son };
// }
// const sonlar = [1, 3, 5, 23, 54, 11];
// const mevalar = ["olma", "nok", "shaftoli", "orik", "anjir", "hurmo"];
// console.log(massivbirlashtirish(sonlar, mevalar));
// 34-masala
// function hammaelementni2ga_kop(sonlar) {
//   let kopaytirish = [];
//   for (let i = 0; i < sonlar.length; i++) {
//     kopaytirish.push(sonlar[i] + 2);
//   }
//   return kopaytirish;
// }
// const sonlar = [2, 12, 4, 6];
// console.log(hammaelementni2ga_kop(sonlar));
// 35-masala
// ishlolmadim

// massivga doir masalal16tali
// 1-masala
// function elementqoshish(sonlar) {
//   sonlar.push    (2);
//   return sonlar;
// }
// const sonlar = [1, 44, 22, 43, 87, 56, 34];
// console.log(elementqoshish(sonlar));
// 2-masala
// function elementolibtashlash(mamlakatlar) {
//   mamlakatlar.pop();
//   return mamlakatlar;
// }
// const mamlakatlar = ["Uzbekistan", "Germany", "Rassiya", "italiya"];
// console.log(elementolibtashlash(mamlakatlar));
// 3-masala
// function boshidanelementolish(dengizlar) {
//   dengizlar.shift();
//   return dengizlar;
// }

// const dengizlar = ["orol d", "qizil d", "Kaspiy ", "tinch"];
// console.log(boshidanelementolish(dengizlar));
// 4-masala
// function boshigaelementqosh(viloyatlar) {
//   viloyatlar.unshift("Toshkent");
//   return viloyatlar;
// }
// const viloyatlar = ["Andijon", "Farg'ona", "Buxoro", "Xorazm"];
// console.log(boshigaelementqosh(viloyatlar));
// 5-masala
// function tekshiruv(kunlar) {
//   return kunlar.includes("yakshanba");
// }
// const kunlar = [
//   "dushanba",
//   "seshanba",
//   "chorshanba",
//   "payshanba",
//   "juma",
//   "shanba",
// ];
// console.log(tekshiruv(kunlar));
// 6-masala
// function tekshiruv(kunlar) {
//   return kunlar.indexOf("yakshanba");
// }
// const kunlar = [
//   "dushanba",
//   "seshanba",
//   "chorshanba",
//   "payshanba",
//   "juma",
//   "shanba",
//   "yakshanba",
// ];
// console.log(tekshiruv(kunlar));
// 7-masala
// function oxirgiindex(mashina) {
//   return mashina.lastIndexOf("BMW");
// }

// const mashina = [
//   "BMW",
//   "Mercedes",
//   "Audi",
//   "Honda",
//   "lambargini",
//   "ferarri",
//   "BMW",
//   "koinigsek",
// ];
// console.log(oxirgiindex(mashina));

// 8-masala
// function masulsonniochirish(sonlar) {
//   sonlar.splice(1, 2, 6, 0);
//   return sonlar;
// }
// const sonlar = [1, 3, 4, 5, 9];
// console.log(masulsonniochirish(sonlar));
// // 9-masala
// function oxirigaqoshish(unverlar) {
//   unverlar.push("MIT");
//   return unverlar;
// }
// const unverlar = ["Diplomatiya", "FARDU", "ADU"];
// console.log(oxirigaqoshish(unverlar));
// // 10-masala
// function oxirigaqoshish(unverlar) {
//   unverlar.pop();
//   return unverlar;
// }
// const unverlar = ["Diplomatiya", "FARDU", "ADU", "MIT"];
// console.log(oxirigaqoshish(unverlar));
// 11-masala
// function oxirgiindex(mashina) {
// mashina.shift();
//   return mashina;
// }

// const mashina = [
//   "BMW",
//   "Mercedes",
//   "Audi",
//   "Honda",
//   "lambargini",
//   "ferarri",
//   "BMW",
//   "koinigsek",
// ];
// console.log(oxirgiindex(mashina));
// 12-masala
// function tekshiruv(kunlar) {
//   kunlar.unshift("dushanba");
//   return kunlar;
// }
// const kunlar = [
//   "seshanba",
//   "chorshanba",
//   "payshanba",
//   "juma",
//   "shanba",
//   "yakshanba",
// ];
// console.log(tekshiruv(kunlar));
// 13-masala
// function oquvchilartekshiruvi(sinf) {
//   return sinf   .includes("Anvar");
// }
// const sinf = ["Anvar", "Dilshod", "Dilshoda", "Temurjn", "Polat"];
// console.log(oquvchilartekshiruvi(sinf));
// 14-masala
// function oquvchilartekshiruvi(sinf) {
//   return sinf.indexOf("Anvar");
// }
// const sinf = ["Anvar", "Dilshod", "Dilshoda", "Temurjn", "Polat"];
// console.log(oquvchilartekshiruvi(sinf));
// 15-masala
// function talabalar(gurux) {
//   return gurux.lastIndexOf("Anvar");
// }

// const gurux = ["Anvar", "Dilshod", "Dilshoda", "Temurjn", "Anvar", "Polat"];
// console.log(talabalar(gurux));
// 16-masala
function talabalar(gurux) {
  return gurux.splice(0, 1);
}

const gurux = ["Anvar", "Dilshod", "Dilshoda", "Temurjn", "Anvar", "Polat"];
console.log(talabalar(gurux));
