# Typescript Introduction

- Strongly Typed Languages vs Loosely Typed Languages
- This has been discussed in the first week as well.
- Production Level code needs more strict type checking
- Why?

1. Less Runtime Errors
2. Stricter Codebase
3. Easy to catch errors at compile time

- People realised Javascript is a powerful language but lacks the strictness provided by types
- Thus, Typescript was introduced as a new language to add types to Javascript

##### What is Typescript?

- TypeScript is a programming language developed and maintained by Microsoft.
- Strict syntactical superset of JavaScript and adds optional static typing to the language.

##### How does the Typescript code run?

- Never runs in the browser
- Javascript is the runtime language and browser understands Javascript
- Typescript is something that gets transpiled down to Javascript
- When transpiling is done, you get type checking. If there is an error, the conversion to JS file fails.

##### **TSC is the official typescript compiler that you can use to convert TS code to Javascript**

##### First TS Code

- Install Ts by `npm install -g typescript`
- Create a new node project(Refer Code/Week-9.2)
- Create a new TS file with `.ts` extension like `a.ts`.
- Write a js code something like this

```ts
const x: number = 1;
console.log(x);
```

- If you look at it, you can see that we added a `:number` after defining the `x` variable.
  This is basically the type checking done on the x variable.

- Now, browser does not understand `.ts` extension. It understands `JS`. So, we need to transpile it down to Javascript code which can be done by using the official typescript compiler - `tsc` and can be done using `tsc -b`.
- This `tsc -b` will convert the ts file to a js file if there are no type errors in the file.
- This new js file will be a more strict file with type checking

- Now lets say you want to assign the `x` variable a string as:-

```ts
const x: number = 'gibberish';
console.log(x);
```

- And when you transpile it down to js, the compiler will throw an error.
- It will throw the error saying -> `Type string is not assignable to type number`.

##### Types in Typescript

- number, string, boolean, null, undefined.

##### Things to Learn : How to give types to arguments of a function

- This can be understood via the code below ->

```ts
function greetUser(name: string) {
  console.log(`Hello ${name}`);
}
greetUser("Aman");
```

##### Things to Learn : How to assign a return type to a function

- This can be understood via the code below ->

```ts
function sum(a: number, b: number): number {
  return a + b;
}
```

- You can see that `function <function_name>(): number` sets the return type of the function

##### Things to Learn : Type Inference

- Lets say you have a code as following:-

```ts
function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(2, 3));
```

It defines that the function will take two arguments and return a number. Although, if we remove the number from the function return type as :-

```ts
function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(2, 3));
```

You will see that typescript will show us that our defined function will return a type of number. It was able to automatically infer the type of return the function will be doing. This intelligence of the compiler is called as `Type Inference`.

##### Things to Learn : Defining a type to an input function

- This can be understood via the code below ->

```ts
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("hi there");
})
```

- Here you can see, in the `delayedCall` function we are passing in a function to which we are assigning a type to an input function as :- `() => void`
- Type `() => void` shows that the function returns nothing/void
- If the function would return, say a number, we would add a type as `() => number`

##### The tsconfig file

- target: specifies the ECMAScript target version to which the TypeScript compiler will compile the TypeScript code.
- rootDir: Where should the compiler look for .ts files.
- outDir: Where should the compiler look to spit out the .js files.

##### INTERFACE -> Very Important

- How can you assign types to Object?
- User Example ->

```ts
const user = {
	firstName: "harkirat",
	lastName: "singh",
	email: "email@gmail.com".
	age: 21,
}
```

- To assign a type to the user object, you can use interfaces
- Code Example ->

```ts
interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}
```

- Let's say we go and look into this code -

```ts
const a: number = 21;
console.log(a);

function greetUser(user: {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}) {
  console.log(`Hello ${user.firstName} - ${user.lastName}`);
}
greetUser({
  firstName: "harkirat",
  lastName: "singh",
  email: "email@gmail.com",
  age: 21,
});

function isLegal2(user: {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

isLegal2({
  firstName: "harkirat",
  lastName: "singh",
  email: "email@gmail.com",
  age: 21,
});

```

- You will see how this violates the DRY rule.
- This is somewhere where the Interfaces can be helpful
- Updated code post the use of interface would look like this ->

```ts
const a: number = 21;
console.log(a);

interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}
const userJson = {
  firstName: "harkirat",
  lastName: "singh",
  email: "email@gmail.com",
  age: 21,
};
function greetUser(user: User) {
  console.log(`Hello ${user.firstName} - ${user.lastName}`);
}
greetUser(userJson);

function isLegal2(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

isLegal2(userJson);

```

##### Implementing Interfaces

- Interfaces have a special property.
- You can implement interfaces as a class.
- Can look something similar like a language `Java`
- Code Example-

```ts
interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}
```

##### TYPES - ANOTHER IMPORTANT THING

- Interview question is - **What is the difference between types & interfaces?**
- very similar to interfaces , types let you aggregate data together.
- Code Example-

```ts
type User = {
	firstName: string;
	lastName: string;
	age: number
}

```

- When given a choice, we use interfaces over Types.
- But types lets you do some other functionalities like

1. Union

- Let’s say you want to print the id of a user, which can be a number or a string.
- This can be done using types as follows -

```ts
type GreetArg = number | string;

function greet(id: GreetArg){

}
greet(1)
greet('1')
```

2. Intersection

- What if you want to create a type that has every property of multiple types/ interfaces
- This can be done using code like this -

```ts
type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer"
};
```

##### Arrays in TS

- As simple as adding `[]` annotation next to the type
- Question : Given an array of positive integers as input, return the maximum value in the array.
  Code Example -

```ts
function maxValue(arr: number[]) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(maxValue([1, 2, 3]));
```

- Question 2 -> Given a list of users, filter out the users that are legal (greater than 18 years of age)

```ts
interface User {
	firstName: string;
	lastName: string;
	age: number;
}
function filteredUsers(users: User[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));
```

## Interfaces

What are interfaces
How can you assign types to objects? For example, a user object that looks like this - 

```ts
const user = {
	firstName: "pratap",
	lastName: "das",
	email: "email@gmail.com".
	age: 25,
}
```
To assign a type to the user object, you can use interfaces

```ts
interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}
```

Assignment #1 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.
```ts
interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}

function isLegal(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}
```

Assignment #2 - Create a React component that takes todos as an input and renders them
Select typescript when initialising the react project using npm create vite@latest

```ts
// Todo.tsx
interface TodoType {
  title: string;
  description: string;
  done: boolean;
}

interface TodoInput {
  todo: TodoType;
}

function Todo({ todo }: TodoInput) {
  return <div>
    <h1>{todo.title}</h1>
    <h2>{todo.description}</h2>
    
  </div>
}
```

 Implementing interfaces

Interfaces have another special property. You can implement interfaces as a class.
Let’s say you have an personinterface - 

```ts
interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}
```
You can create a class which implements this interface.

```ts
class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}
```

This is useful since now you can create multiple variants of a person (Manager, CEO …)

Summary
You can use interfaces to aggregate data
You can use interfaces to implement classes from

Abstract classes let you do something similar (not TS related)

```ts
abstract class Shape {
  abstract name: string;

  abstract calculateArea(): number;

  describe(): void {
    console.log(`This shape is a ${this.name} with an area of ${this.calculateArea()} units squared.`);
  }
}
```
Rectangle and Circle classes
```ts
class Rectangle extends Shape {
  name = "Rectangle";

  constructor(public width: number, public height: number) {
    super();
  }

  // Implement the abstract method
  calculateArea(): number {
    return this.width * this.height;
  }
}

// Another subclass implementing the abstract class
class Circle extends Shape {
  name = "Circle";

  constructor(public radius: number) {
    super();
  }

  // Implement the abstract method
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
```

Types
What are types?
Very similar to interfaces , types let you aggregate data together.
```ts
type User = {
	firstName: string;
	lastName: string;
	age: number
}
```
But they let you do a few other things.
 
1. Unions
Let’s say you want to print the id of a user, which can be a number or a string.
💡
You can not do this using interfaces
type StringOrNumber = string | number;
```ts
function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}
printId(101); // ID: 101
printId("202"); // ID: 202
```

2. Intersection
What if you want to create a type that has every property of multiple types/ interfaces
💡
You can not do this using interfaces
```ts
type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer"

}
```

Arrays
If you want to access arrays in typescript, it’s as simple as adding a [] annotation next to the type
Example 1 
Given an array of positive integers as input, return the maximum value in the array
Solution
```ts
function maxValue(arr: number[]) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(maxValue([1, 2, 3]));
```
 
Example 2 
Given a list of users, filter out the users that are legal (greater than 18 years of age)
```ts
interface User {
	firstName: string;
	lastName: string;
	age: number;
}
```
Solution
```ts
interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));
```

Enums
Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.
Example Game 
Let’s say you have a game where you have to perform an action based on weather the user has pressed the up arrow key, down arrow key, left arrow key or right arrow key.
```ts
function doSomething(keyPressed) {
	// do something.
}
```
What should the type of keyPressed be?
Should it be a string? (UP , DOWN , LEFT, RIGHT) ?
Should it be numbers? (1, 2, 3, 4) ?

The best thing to use in such a case is an enum.
```ts
enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Up)
```
This makes code slightly cleaner to read out. 
💡
The final value stored at runtime is still a number (0, 1, 2, 3). 
 
 What values do you see at runtime for Direction.UP ?
Try logging Direction.Up on screen
```ts
enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Up)
console.log(Direction.Up)
```
This tells you that by default, enums get values as 0 , 1, 2...
How to change values?
```ts
enum Direction {
    Up = 1,
    Down, // becomes 2 by default
    Left, // becomes 3
    Right // becomes 4
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Down)
```
Solution
Can also be strings
```ts
enum Direction {
    Up = "UP",
    Down = "Down",
    Left = "Left",
    Right = 'Right'
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Down)
```
 Common usecase in express
```ts
enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/', (req, res) => {
    if (!req.query.userId) {
			res.status(ResponseStatus.Error).json({})
    }
    // and so on...
		res.status(ResponseStatus.Success).json({});
})
```


Generics
Generics are a language independent concept (exist in C++ as well)
Let’s learn it via an example
 
Problem Statement
Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.
How would you solve this problem?
Solution
```ts
function getFirstElement(arr: (string | number)[]) {
    return arr[0];
}

const el = getFirstElement([1, 2, 3]);
```
What is the problem in this approach?
User can send different types of values in inputs, without any type errors

```ts
function getFirstElement(arr: (string | number)[]) {
    return arr[0];
}

const el = getFirstElement([1, 2, '3']);

Typescript isn’t able to infer the right type of the return type
function getFirstElement(arr: (string | number)[]) {
    return arr[0];
}

const el = getFirstElement(["pratapdas", "pdas"]);
console.log(el.toLowerCase())
```
Solution - Generics
Generics enable you to create components that work with any data type while still providing compile-time type safety.
Simple example - 
```ts
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

``` 
Solution to original problem
Can you modify the code of the original problem now to include generics in it?
```ts
function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["pratapdas", "pdas"]);
console.log(el.toLowerCase())
```
Did the issues go away?
User can send different types of values in inputs, without any type errors

```ts
function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement<string>(["pratapdas", 2]);
console.log(el.toLowerCase())

Typescript isn’t able to infer the right type of the return type
function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["pratapdas", "pdas"]);
console.log(el.toLowerCase())
```

Exporting and importing modules
TypeScript follows the ES6 module system, using import and export statements to share code between different files. Here's a brief overview of how this works:
1. Constant exports
```ts
math.ts
export function add(x: number, y: number): number {
    return x + y;
}

export function subtract(x: number, y: number): number {
    return x - y;
}

main.ts
import { add } from "./math"

add(1, 2)
```
2. Default exports

```ts
export default class Calculator {
    add(x: number, y: number): number {
        return x + y;
    }
}

calculator.ts 
 
import Calculator from './Calculator';

const calc = new Calculator();
console.log(calc.add(10, 5));
```