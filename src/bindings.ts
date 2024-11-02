const addon = require("../build/youtube");

export interface MyObject {
  greet(str: string): string; 
}

export var MyObject: {
  new(name: string): MyObject;
} = addon.MyObject;