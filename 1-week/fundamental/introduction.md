# 📚 Weekly Learning: JavaScript Foundations

---

### 🔍 Why Language?
Language is used to communicate with a computer to perform specific tasks. 🖥️

More specifically:
- Our computers have **RAM** and **HDD/SSD** for storing and running processes.
- RAM doesn’t understand high-level languages, so we use **compilers** to convert high-level code into low-level code (binary: 0’s and 1’s) as that’s what computers understand.

---

### 🛠️ Interpreted vs Compiled Languages
- **Compiled Languages**: Compile the entire program first, then produce output. ⚡
- **Interpreted Languages**: Execute code line by line. 📝

Examples:
- **C++**: For its static nature and strict code enforcement.
- **JavaScript**: For its dynamic nature (fast and flexible). To enforce stricter coding, we can use **TypeScript**. ✨

---

### 🌟 Introduction to JavaScript (JS)
JavaScript is a **single-threaded, interpreted language** used to create web applications and complex progressive applications. 🌐

---

## 🔑 Simple Primitives

1. **Variables** (let, var, const)
   - A container that holds data. 🛢️
     ```javascript
     let a = 10; // a is a variable
     ```

2. **Data Types** (string, number, boolean)
   - Different types to suit application requirements:
     - **String**: `"example"`
     - **Number**: `234`
     - **Boolean**: `true`, `false`

3. **Conditions**
   - Execute code based on specific conditions. 🧐
     - Use `if/else if/else` for conditions:
       ```javascript
       if (condition) {
         // code
       } else {
         // code
       }
       ```

4. **Loops**
   - Execute a specific block of code several times. 🔁
     - Use `for` or `while` loops:
       ```javascript
       for (let i = 0; i < 10; i++) {
         console.log(i);
       }
       ```

---

## 🧩 Complex Primitives

1. **Arrays**
   - A dynamic data structure to store multiple values. 📚
     ```javascript
     let arr = ["sai", 23, false];
     ```

2. **Objects**
   - A structure to store multiple key-value pairs. 🗂️
     ```javascript
     let obj = {
       name: "raj",
       age: 20,
       gender: "male"
     };
     ```

3. **Functions**
   - A block of code designed to perform a specific task. 🛠️

     - **Callback**: A function calling another function.
     - **Recursion**: A function calling itself.

     Example:
     ```javascript
     function greet(name) {
       console.log(`Hello, ${name}!`);
     }
     greet("World");
     ```

4. **Built-in Functions**
   - **setTimeout**: Executes code after a delay. ⏱️
   - **setInterval**: Executes code at regular intervals. 🔄
   - **clearTimeout**: Clears a timeout to stop its execution. ❌

---

## 🚀 Conclusion
These are the basics to get started with JavaScript. Happy coding! 😊
