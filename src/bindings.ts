const addon = require("../build/youtube");

export interface MyObject {
  greet(str: string): void; 
  add(a: number, b: number): number;
}

export var MyObject: {
  new(name: string): MyObject;
} = addon.MyObject;