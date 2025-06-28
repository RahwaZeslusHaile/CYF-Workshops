let confession = `
My secret is that I really like cake.
Sometimes I sneak into the fridge at night and steal my housemate's cake
`;

const secret = "cake";
confession = confession.replaceAll(secret,'x'.repeat(secret.length));
console.log(confession)
/*
My xxxx is that I really like cake.
Sometimes I sneak into the fridge at night and steal my housemate's cake
`;
*/

/*
My secret is that I really like xxxx.
Sometimes I sneak into the fridge at night and steal my housemate's xxxx
`;
*/

// a) How many function calls are there in this file?
//two
// b) Explain what the expression confession.replaceAll(secret,'x'.repeat(secret.length)); is doing
// the secret variable will be replaced by the value cake 
  //.replaceAll() method is replacing the value cake by x and .repeat() method will multiply the value x by the length of secret which is four
// c) How many inputs do we pass to replaceAll when we call it? How can you tell?
  //two ,the one which going to be replaced and the other one is the value
// d) How any inputs do we pass to repeat when we call it?  How can you tell?
   //one
// e) What kind of statement is on line 7?
   // assignment