import { MyObject } from "./bindings";

const obj = new MyObject("The dev logger");
obj.greet("boba");
console.log("sum is: ", obj.add(1, 2));