In today's lecture, Harkirat delves into advanced TypeScript utility types such as **`Pick`**, **`Partial`**, **`Readonly`**, **`Record`**, **`Exclude`** and the **`Map`** type, providing insights into their practical applications. Additionally, the lecture covered type inference in Zod, a TypeScript-first schema declaration and validation library, highlighting how these advanced features can enhance type safety and developer productivity in TypeScript projects.

Before diving into an advanced TypeScript API, it's important to have a solid understanding of the basics of TypeScript, especially when it comes to using it in a Node.js environment. Here's an elaboration on the prerequisites and a recap of the setup procedure for a TypeScript project.

### Prerequisites

To be prepared for the advanced TypeScript API module, you should:

1. **Understand Basic TypeScript Classes**: Familiarity with how classes are defined and used in TypeScript, including constructors, properties, methods, and inheritance.
2. **Understand Interfaces and Types**: Know how to define and use interfaces and types to enforce the structure of objects and function parameters.
3. **Experience with TypeScript in Node.js**: Have experience setting up a simple Node.js application with TypeScript and understand how to run and compile TypeScript code.

The following code snippet is a test to check your understanding:

```tsx
interface User {
	name: string;
	age: number;
}

function sumOfAge(user1: User, user2: User) {
  return user1.age + user2.age;
};

// Example usage
const result = sumOfAge({
	name: "harkirat",
	age: 20
}, {
	name: "raman",
	age: 21
});
console.log(result); // Output: 41
```

In this example, you should understand the following concepts:

- **Interface `User`**: Defines the structure for a user object with `name` and `age` properties.
- **Function `sumOfAge`**: Takes two `User` objects as parameters and returns the sum of their ages.
- **Example Usage**: Demonstrates how to call `sumOfAge` with two user objects and logs the result.

(Note: The original output comment `// Output: 9` seems to be a typo. The correct output should be `41` based on the provided ages.)

### Recap Setup Procedure

To start a TypeScript project locally, follow these steps:

1. **Initialize TypeScript**:
Run `npx tsc --init` in your project directory to create a `tsconfig.json` file, which is the configuration file for TypeScript.
2. **Configure `tsconfig.json`**:
Edit the `tsconfig.json` file to specify the root directory and the output directory for the compiled JavaScript files.
    
    ```json
    {
      "compilerOptions": {
        "rootDir": "./src",
        "outDir": "./dist",
        // ... other options
      }
    }
    ```
    
    - `"rootDir": "./src"`: Tells TypeScript to look for `.ts` files in the `src` directory.
    - `"outDir": "./dist"`: Compiled `.js` files will be output to the `dist` directory.

---

## Advanced TypeScript Utility Types

### 1. `Pick`

The `Pick` utility type in TypeScript is a powerful feature that allows you to construct new types by selecting a subset of properties from an existing type. This can be particularly useful when you need to work with only certain fields of a complex type, enhancing type safety and code readability without redundancy.

#### Understanding `Pick`

The `Pick` utility type is part of TypeScript's mapped types, which enable you to create new types based on the keys of an existing type. The syntax for `Pick` is as follows:

```tsx
Pick<Type, Keys>
```

- `Type`: The original type you want to pick properties from.
- `Keys`: The keys (property names) you want to pick from the `Type`, separated by `|` (the union operator).

#### Example Usage of `Pick`

Consider an interface `User` that represents a user in your application:

```tsx
interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}
```

Suppose you're creating a function to display a user profile, but you only need the `name` and `email` properties for this purpose. You can use `Pick` to create a new type, `UserProfile`, that includes only these properties:

```tsx
// Creating a new type with only `name` and `email` properties from `User`
type UserProfile = Pick<User, 'name' | 'email'>;

// Function that accepts a UserProfile type
const displayUserProfile = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};
```

In this example, `UserProfile` is a new type that has only the `name` and `email` properties from the original `User` interface. The `displayUserProfile` function then uses this `UserProfile` type for its parameter, ensuring that it can only receive objects that have `name` and `email` properties.

---

### 2. `Partial`

The `Partial` utility type in TypeScript is used to create a new type by making all properties of an existing type optional. This is particularly useful when you want to update a subset of an object's properties without needing to provide the entire object.

#### Understanding `Partial`

The `Partial` utility type takes a single type argument and produces a type with all the properties of the provided type set to optional. Here's the syntax for using `Partial`:

```tsx
Partial<Type>
```

- `Type`: The original type you want to convert to a type with optional properties.

#### Example Usage of `Partial`

Let's say you have a `User` interface representing a user in your application:

```tsx
interface User {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};
```

If you're creating a function to update a user, you might only want to update their `name`, `age`, or `email`, and not all properties at once. You can use `Pick` to select these properties and then apply `Partial` to make them optional:

```tsx
// Selecting 'name', 'age', and 'email' properties from User
type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

// Making the selected properties optional
type UpdatePropsOptional = Partial<UpdateProps>

// Function that accepts an object with optional 'name', 'age', and 'email' properties
function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database to update the user
}

// Example usage of updateUser
updateUser({ name: "Alice" }); // Only updating the name
updateUser({ age: "30", email: "alice@example.com" }); // Updating age and email
updateUser({}); // No updates, but still a valid call
```

---

### 3. `Readonly`

The `Readonly` utility type in TypeScript is used to make all properties of a given type read-only. This means that once an object of this type is created, its properties cannot be reassigned. It's particularly useful for defining configuration objects, constants, or any other data structure that should not be modified after initialization.

#### Understanding `Readonly`

The `Readonly` utility type takes a type `T` and returns a type with all properties of `T` set as read-only. Here's the basic syntax:

```tsx
Readonly<Type>
```

- `Type`: The original type you want to convert to a read-only version.

#### Example Usage of `Readonly`

Consider an interface `Config` that represents configuration settings for an application:

```tsx
interface Config {
  endpoint: string;
  apiKey: string;
}
```

To ensure that a `Config` object cannot be modified after it's created, you can use the `Readonly` utility type:

```tsx
const config: Readonly<Config> = {
  endpoint: 'https://api.example.com',
  apiKey: 'abcdef123456',
};

// Attempting to modify the object will result in a TypeScript error
// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.
```

---

### 4. `Record` & `Map`

#### `Record`

The `Record<K, T>` utility type is used to construct a type with a set of properties `K` of a given type `T`. It provides a cleaner and more concise syntax for typing objects when you know the shape of the values but not the keys in advance.

```tsx
interface User {
  id: string;
```