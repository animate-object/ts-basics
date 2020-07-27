#!/usr/bin/env deno run



/**
 * 
 * TYPES!
 * 
 */













/**
 * Why types ?
 *
 * - as applications grow, individual knowledge decreases
 * - types encode intent
 * - offload cognitive burden from the programmer to the compiler
 * - downstream impacts:
 *      - eliminate a class of bugs
 *      - improve refactor speed and confidence
 *      - document intent
 */






/**
 * Why typescript ?
 *
 * - great interplay with javascript and related platforms
 * - terse and expressive type system (e.g. compared to Java)
 * - well adopted/supported
 *
 */












/**
 * The rest of this presentation:
 *
 * - Typescript 101:
 *      - a quick review of the basic building blocks
 * - Typescript 201:
 *      - a few features from the 'advanced' section of
 *        the manual that I've found useful
 *        in ~2.5 years of TS dev
 * 
 */






// the semantics of the basic types are largely
// influenced by javascript

// Strings::
const fullName: string = "alex" + "prinsen";
console.log(`My name is ${fullName}`);








// Numbers::
// there's a single numeric type that behaves like
// javscripts numbers (effectively a float)
const age: number = 27.5;
console.log(`I'm ${Math.round(age)} years old`);










// Booleans::
const rightHanded: boolean = true;
console.log(`I'm ${rightHanded ? "right" : "left"} handed`);









// Objects::
const extra: object = { eyeColor: "blue", hairColor: "brown" };
console.log(extra);










// Arrays::
// define arrays with brackets, e.g. type[] OR generic Array<type>
const favoriteMovies: string[] = [
  "Shrek 1",
  "Shrek 2",
  "Shrek 3",
  "Shrek 4",
  "Shrek 5",
];

favoriteMovies.push("The Godfather, Part II");
// ⛔ favoriteMovies.push(123);

favoriteMovies.forEach((movie) => console.log(`Movie: ${movie}`));











// Tuples::
export type Point = [number, number];
const myFirstPoint: Point = [124, 853];
// ⛔ 
const anotherPoint: Point = ["a", undefined];









// Functions::
export const point = function (x: number, y: number): Point {
  return [x, y];
};

// ex: right to left evaluation of errors
// ⛔ const noPoint = point(undefined, "four");









const distance = (a: Point, b: Point): number =>
  Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);

const origin = point(0, 0);

const pythagoreanTriples: Point[] = [point(3, 4), point(5, 12), point(8, 15)];

pythagoreanTriples.forEach((triple) => {
  console.log(`my hypoteneuse is ${distance(origin, triple)} units long`);
});







// Enums
enum PosixSignal {
  Hangup = 1,
  Interrupt = 2,
  Quit = 3,
  IllegalInstruction = 4,
  Trap = 5,
  Abort = 6,
  // . . .
}

// enum keys can be any type and you can even mix types
// (but you probably shouldn't)
enum FelineCoatPatterns {
  Tabby = "tabby",
  TortoiseShell = "tortoise-shell",
  BiColor = "bicolor",
  Tuxedo = "tuxedo",
}

Object.keys(FelineCoatPatterns).map((k) => {
  console.log(`Cat pattern: ${k}`);
});
