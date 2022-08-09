// // No 1..

// // function no1(input) {
// //   if (input <= 0) {
// //     return console.log("input tidak boleh 0 atau kurang");
// //   }

// //   let step = 1;
// //   for (let i = 1; i <= input; i++) {
// //     step *= i;
// //   }
// //   console.log(step);
// // }

// // no1(4);
// // no1(8);
// // no1(0);
// // no1(-1);

// // No 2..

// // function no2(str) {
// //   if (!typeof str === "string" || str.length === 0) {
// //     return console.log("input tidak valid");
// //   }
// //   let res = "";
// //   for (let i = str.length - 1; i >= 0; i--) {
// //     res += str[i];
// //   }

// //   console.log(res);
// // }

// // no2("abcde");
// // no2(123);
// // no2("MERN Eduwork");
// // no2("");

// // No 3..

// // function printDigitValue(par) {
// //   let num = "";
// //   for (let i = 0; i < par.length; i++) {
// //     if (!isNaN(par[i])) {
// //       num += par[i];
// //     }
// //   }

// //   for (let i = 0; i < num.length; i++) {
// //     console.log(num[i] + "0".repeat(num.length - i - 1));
// //   }
// // }

// // printDigitValue("9.86-A5.321");

// // No 4..

// // let a = 4;
// // let b = 7;
// // console.log(a, b);
// // [a, b] = [b, a];
// // console.log(a, b);

// // No 5..

// // function spell(par) {
// //   if (par < 0 || par > 100) {
// //     return console.log("Silahkan masukan input 1-100");
// //   }
// //   const angka = [
// //     "Nol",
// //     "satu",
// //     "dua",
// //     "tiga",
// //     "empat",
// //     "lima",
// //     "enam",
// //     "tujuh",
// //     "delapan",
// //     "sembilan",
// //   ];
// //   let belas = "belas";
// //   let puluh = "puluh";

// //   if (par === "0") {
// //     console.log(angka[0]);
// //   } else if (par.length === 2 && par[0] === "1") {
// //     if (par[1] === "1") {
// //       return console.log("se" + belas);
// //     }
// //     console.log(angka[par[1]] + " " + belas);
// //   } else {
// //     console.log(angka[par[0]] + " " + puluh + " " + angka[par[1]]);
// //   }
// // }

// // spell("0");
// // spell("1");
// // spell("11");
// // spell("15");
// // spell("23");
// // spell("61");
// // spell("99");
// // spell("111");

// // No 6 & 7..

// // let data = [1, 4, 7, 9, 12];
// // let low = 2;
// // let high = 15;

// // function shortData(data, low, high) {
// //   let temp = [];
// //   for (let i = 0; i < data.length; i++) {
// //     if (data[i] >= low && data[i] <= high) {
// //       temp.push(data[i]);
// //     }
// //   }
// //   console.log(temp);
// //   console.log(temp.length);
// // }

// // shortData(data, low, high);

// // No 8..

// // for (var i = 1; i < 15 + 1; i++) {
// //   if (i % 15 == 0) console.log("EduWork");
// //   else if (i % 3 == 0) console.log("Edu");
// //   else if (i % 5 == 0) console.log("Work");
// //   else console.log(i);
// // }

// // No 9..

// function lowHigh(par) {
//   let low = par[0];
//   let high = par[0];
//   for (let i = 1; i < par.length; i++) {
//     if (low > par[i]) {
//       low = par[i];
//     }
//     if (high < par[i]) {
//       high = par[i];
//     }
//   }
//   console.log(`Low : ${low}, High : ${high}`);
// }

// lowHigh([4, 2, 6, 88, 3, 11]);

// // No 10..

// // function kabisat(par) {
// //   par % 4 === 0
// //     ? console.log(par + " adalah tahun Kabisat")
// //     : console.log(par + " bukan tahun Kabisat");
// // }

// // kabisat(2001);
// // kabisat(2004);
