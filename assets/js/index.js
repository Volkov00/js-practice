"use strict";
// Task 1 =====================================================
function sum(n) {
  let accum = 0;
  for (let i = 1; i <= n; i++) {
    accum += i;
  }
  return accum;
}
console.log(sum(5));

// Task 2 =====================================================

class Student {
  constructor(name, surname, isMale, contactInfo, facultet) {
    this.name = name;
    this.surname = surname;
    this.isMale = isMale;
    this.contactInfo = contactInfo;
    this.facultet = facultet;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("Only Text");
    }
    this._name = name;
  }
  get surname() {
    return this._surname;
  }
  set surname(surname) {
    if (typeof surname !== "string") {
      throw new TypeError("Only Text");
    }
    this._surname = surname;
  }
  get isMale() {
    return this._isMale;
  }
  set isMale(isMale) {
    if (typeof isMale !== "boolean") {
      throw new TypeError("Only boolean");
    }
    this._isMale = isMale;
  }
  get contactInfo() {
    return this._contactInfo;
  }
  set contactInfo(contactInfo) {
    if (typeof contactInfo !== "string") {
      throw new TypeError("Only Text");
    }
    this._contactInfo = contactInfo;
  }
  get facultet() {
    return this._facultet;
  }
  set facultet(facultet) {
    if (!facultet instanceof FaculAndDeportament) {
      throw new Error("not from here");
    }
    this._facultet = facultet;
  }
  studenFullInfo() {
    console.log(
      `Name: ${this.name}\n Surname: ${this.surname}\n gender: ${
        this.isMale ? "male" : "female"
      }\n Information: ${this.contactInfo}\n Facultet: ${
        this.facultet.facultet
      }\n Deportament: ${this.facultet.deportament}`
    );
  }
}

class FaculAndDeportament {
  constructor(facultet, deportament) {
    this.facultet = facultet;
    this.deportament = deportament;
  }
  get facultet() {
    return this._facultet;
  }
  set facultet(facultet) {
    if (typeof facultet !== "string") {
      throw new TypeError("Only Text");
    }
    this._facultet = this.facultet;
  }
  get deportament() {
    return this._deportament;
  }
  set deportament(deportament) {
    if (typeof deportament !== "string") {
      throw new TypeError("Only Text");
    }
    this._deportament = deportament;
  }
}
const universityInformation = new FaculAndDeportament(
  "Юридический",
  "административного и уголовного права"
);
let student = new Student(
  "Oswald",
  "Cobald",
  true,
  "No Information",
  universityInformation
);
console.log(student.studenFullInfo());

// Task 3 ============================================================>
// 3.1
function randomNumber(min, max) {
  let myArr = [];
  for (let i = 0; i <= 25; i++) {
    myArr.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return myArr;
}
const randomArr = randomNumber(0, 5);
console.log(randomArr);

// 3.2

function indexArr(arr) {
  let newIndexArr = [];
  arr.forEach(function (item, index) {
    if (index % 2 === 0) {
      newIndexArr.push(item);
    }
  });
  return newIndexArr;
}
console.log(indexArr(randomArr));

// 3.3

function itemArr(myAr) {
  let newItemArr = [];
  myAr.forEach(function (item) {
    if (item % 2 === 0) {
      newItemArr.push(item);
    }
  });
  return newItemArr;
}

console.log(itemArr(randomArr));

// 3.4

function itemZero(zero) {
  let newItemZero = [];
  zero.forEach(function (item, index) {
    if (item === 0) {
      newItemZero.push(index);
    }
  });
  return newItemZero;
}

// 3.5
let finalZeroIndex = itemZero(randomArr);
console.log(finalZeroIndex);
console.log(finalZeroIndex.length);

// Task 4 ==============================================>

class Book {
  constructor(author, title, year, publishInOffice) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.publishInOffice = publishInOffice;
  }
  get author() {
    return this._author;
  }
  set author(author) {
    if (typeof author !== "string") {
      throw new TypeError("Only Text");
    }
    this._author = author;
  }
  get title() {
    return this.title;
  }
  set title(title) {
    if (typeof title !== "string") {
      throw new TypeError("Only Text");
    }
    this._title = title;
  }
  get year() {
    return this._year;
  }
  set year(year) {
    if (typeof year !== "number") {
      throw new TypeError("only number");
    }
    this._year = year;
  }
  get publishInOffice() {
    return this._publishInOffice;
  }
  set publishInOffice(publishInOffice) {
    if (typeof publishInOffice !== "string") {
      throw new TypeError("Only string");
    }
    this._publishInOffice = publishInOffice;
  }
}

class Ebook extends Book {
  constructor(author, title, year, publishInOffice, format, eNumber) {
    super(author, title, year, publishInOffice);
    this.format = format;
    this.eNumber = eNumber;
  }
  get format() {
    return this._format;
  }
  set format(format) {
    if (typeof format !== "string") {
      throw new TypeError("Only string");
    }
    this._format = format;
  }
  get eNumber() {
    return this._eNumber;
  }
  set eNumber(eNumber) {
    if (typeof eNumber !== "number") {
      throw new TypeError("Only Number");
    }
    this._eNumber = eNumber;
  }
}

const book = new Book("Фрэнк Гербер", "Дюна", 1965, "Chilton Books");
const ebook = new Ebook(
  "Фрэнк Гербер",
  "Дюна",
  1965,
  "Chilton Books",
  "FB2",
  5457231
);
console.log(book);
console.log(ebook);

// Task 5===================================================>

function fizzbuzz(n) {
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i + "fizzbuzz");
    }
    if (i % 3 === 0) {
      console.log(i + "fizz");
    }
    if (i % 5 === 0) {
      console.log(i + "buzz");
    } else {
      console.log(i);
    }
  }
  return n;
}
fizzbuzz(15);

//=============================================================>
