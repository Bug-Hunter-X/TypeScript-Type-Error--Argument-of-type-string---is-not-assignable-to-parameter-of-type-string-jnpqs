# TypeScript Type Error: Argument of type string[] is not assignable to parameter of type string
This example demonstrates a common TypeScript error that arises when passing an array of strings to a function expecting a single string argument. The error message is clear: the function `greeter` expects a string, but it receives an array of strings instead.

## Bug
The `bug.ts` file contains a function `greeter` that takes a single string argument and returns a greeting. However, when we call `greeter` with an array `user`, TypeScript throws an error because the function's parameter type doesn't match the argument's type.

## Solution
The solution in `bugSolution.ts` addresses the type mismatch in two ways:

1. **Type Assertion:** We use a type assertion `(user as string)` to tell TypeScript to treat `user` as a single string. However, this may mask potential errors if the array's contents are unexpected.  Not recommended for production code unless thoroughly vetted.
2. **String Concatenation:** We iterate through the user array and concatenate the names to form a single string before passing it to the greeter function. This approach handles multiple names while ensuring the function receives a correctly typed argument.