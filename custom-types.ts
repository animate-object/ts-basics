#!/usr/bin/env deno run
import { Point, point } from './basic-types.ts'

// Type Declarations, for defining your own types
type Unit = 1;
// ⛔ const two: Unit = 2;


// Type operators : Union and Intersection

// Union
type Ternary = -1 | 0 | 1;

// a common use of unions is to define known sets
// of string (we'll see some real world examples later)
type Colors =
  | "Red"
  | "Orange"
  | "Yellow"
  | "Green"
  | "Blue"
  | "Indigo"
  | "Violet";

type PokemonVersions =
  | "Green"
  | "Red"
  | "Yellow"
  | "Blue"
  | "Gold"
  | "Silver"
  | "Crystal";

// Intersection -- 'merging' types

type ChromaticPokemonVersions = Colors & PokemonVersions;
// for individual properties, intersection is 'exclusive'
// 'Green' | 'Red' | 'Yellow' | 'Blue'
const pokemonRed: ChromaticPokemonVersions = 'Red'
// ⛔ const pokemonPurple: ChromaticPokemonVersions = 'Purple'




// for structured types, intersection 'merges' properties
type Example = 
  { prop1: 'a' | 'b' | 'c', prop2: string } & 
  { prop1: 'b' | 'c' | 'd', prop3: number}

const ex: Example = { prop1: 'b', prop2: 'hello', prop3: 144 }












// note, intersections that have no members get a special type
// never, for impossible values!
type Friends = "Sundar"| "Sergey"| "Larry";
type Enemies = "Bill"| "Steve"| "Paul";
type Frenemies = Friends & Enemies;

















// Interfaces
// interfaces are the building blocks of a typescript project
// - type safety for structured data
// - highly composable

interface RGB {
  r: number;
  g: number;
  b: number;
}

// simple type inheritence
interface RGBa extends RGB {
  a: number;
}

// note, (nearly?) equivalent example with intersection type
// type RGBa = RGB & { a: number }

const translucentRed: RGBa = {
  r: 255,
  g: 10,
  b: 10,
  a: 0.5,
};

// composing interfaces and types
// to describe the shape of data
interface Pixel {
  position: Point;
  on: boolean;
}

type ColoredPixel = Pixel & { color: RGBa };

const redPixel: ColoredPixel = {
  position: point(50, 50),
  on: true,
  color: { r: 255, b: 0, g: 0, a: 0.9 },
};
