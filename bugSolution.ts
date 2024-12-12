function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Type Assertion (Not recommended for production without vetting)
// console.log(greeter(user as string)); 

// Solution 2: String Concatenation (More robust)
let userName = user.join(" ");
console.log(greeter(userName)); // Correct usage