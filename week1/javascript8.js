let x = 95;
let y = 'hello';
let z = 350;
let v = true;
console.log("the value of x is " + x);
console.log("the value of y is " + y);
console.log("the value of z is " + z);
console.log("the value of v is " + v);
console.log("the type of x is number");
console.log("the type of y is string");
console.log("the type of z is number");
console.log("the type of v is boolean");
let typeX = typeof (x);
let typeY = typeof (y);
let typeZ = typeof (z);
let typeV = typeof (v);
console.log(typeX);
console.log(typeY);
console.log(typeZ);
console.log(typeV);
if ((typeX == typeY) || (typeX == typeZ) || (typeX == typeV)) {
    console.log("X has SAME TYPE");
} else if ((typeY == typeZ) || (typeY == typeV)) {
    console.log("Y has SAME TYPE");
} else if (typeZ == typeV) {
    console.log("Z and V have the SAME TYPE");
} else {
    console.log("NO SIMILAR TYPES");
}