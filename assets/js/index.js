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
); // в переменную записывает клас и передаем эту переменную студенту уже с параметрами.

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
  arr.forEach(function (item,index) {
    if (index % 2 === 0) {
      newIndexArr.push(item);
    }
  });
  return newIndexArr;
}
console.log(indexArr(randomArr));


// 3.3

function itemArr (myAr){
  let newItemArr = [];
  myAr.forEach(function(item){
    if(item %2 === 0){
      newItemArr.push(item);
    }
  })
  return newItemArr;
}

console.log(itemArr(randomArr));

// 3.4

function itemZero (zero){
  let newItemZero = [];
  zero.forEach(function(item,index){
    if(item === 0){
      newItemZero.push(index);
    }
  })
  return newItemZero;
}


// 3.5
let finalZeroIndex = itemZero(randomArr);
console.log(finalZeroIndex);
console.log(finalZeroIndex.length);

// Task 4 ==============================================>

class Book {
  constructor(author, year,publishingOffice){
    this.author = author;
    this.year = year;
    this.publishingOffice = publishingOffice;
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
}