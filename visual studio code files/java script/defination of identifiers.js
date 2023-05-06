// now about var ,const, let
console.log("below is for let ") 
// let is a block based data entry (identifier)
// let us used for block based data entry for eg

let b=23;
{
  let  b = 5;
  console.log(b);
}
console.log(b);
// as we can see the data inside the block and data outside the block is not same 
console.log("below is for var ")
// now for var 
// var is a scope based data entry (identifier)
// it means that data can be changed in and outof blocj of block
// example for var 
var a=23;
{
    var a=5;
    console.log(a);
}
console.log(a);
// as we can see the value of 'a'has been changed to latest data weather it is inside block or outside block 