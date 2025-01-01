# Deploying npm Packages and Introduction to Monorepos

## Deploying npm Packages

### Steps to Deploy an npm Package
mkdir common, cd common, npm init -y, npx tsc --init
1. **Initialize the Package**
   ```bash
   mkdir common
   cd common
   npm init -y
   npx tsc --init
   ```

2. **Update `tsconfig.json`**
   Update the following configurations in your `tsconfig.json`:
   ```json
   {
       "rootDir": "./src",
       "outDir": "./dist",
       "declaration": true
   }
   ```
   **Why set `declaration` to true?**
   - When publishing a package to npm, we do not push the `.ts` files. Instead, we push the compiled `.js` files.
   - The `declaration` option generates `.d.ts` files, which provide type information for consumers of the package.
   - Thus, TypeScript files (`.ts`) compile into JavaScript files (`.js`) along with type declaration files (`.d.ts`).

3. **Prepare for Publishing**
   - Sign up or log in to [npmjs.org](https://www.npmjs.com/).
   - Run `npm login` in your terminal to authenticate.
   - Update the `name` field in `package.json` to include your namespace (e.g., `@your-namespace/common`).
   - Set the `main` field in `package.json` to point to the output file (e.g., `dist/index.js`).

4. **Exclude Source Files**
   - Create a `.npmignore` file and add `src/` to ensure source files are not published to npm.

5. **Build the Package**
   - Place all necessary files in the `src/` folder.
   - Run `tsc -b` to compile the TypeScript code and generate the output in the `dist/` folder.

6. **Publish the Package**
   - Publish the package to npm with the following command:
     ```bash
     npm publish --access public
     ```

---

## Introduction to Monorepos

### What is a Monorepo?
Before monorepos, developers would push individual packages to npm and use them in their projects. With monorepos, multiple packages can exist within a single repository, enabling local usage without needing to publish them to npm.

### Advantages of Monorepos
1. **Code Sharing and Reuse**
   - Monorepos allow you to easily share and reuse code across multiple projects in the same repository.

2. **Faster Development**
   - For minor changes, there's no need to publish the package to npm. You can directly use it in your project.

3. **Simplified Dependency Management**
   - Update dependencies across all projects in one place.

4. **Atomic Commits**
   - Make changes across multiple projects in a single commit, useful for breaking changes.

5. **Improved Collaboration**
   - Teams can work on different projects within the same repository, facilitating better collaboration.

6. **Unified Build and Test Environment**
   - Centralized build, testing, and deployment processes.

### Using Local Packages in a Monorepo
If you want to use code from another package or folder in the same monorepo:
1. Mention the package/folder in the `dependencies` section of `package.json` (e.g., `"@your-namespace/common": "file:../common"`).
2. Use the package in your code as usual.

---

## Tools for Managing Monorepos

### [Lerna](https://lerna.js.org/)
Lerna is a popular tool for managing monorepos. It helps with:
- Linking packages together.
- Managing dependencies.
- Publishing updates to npm.

#### Installation and Setup
```bash
npx lerna init
```
- This initializes a monorepo with a `packages` folder for your individual packages.
- Add packages as subfolders inside `packages/`.

#### Useful Commands
- **Bootstrap packages:**
  ```bash
  npx lerna bootstrap
  ```
  This links local dependencies together and installs external dependencies.

- **Run scripts in all packages:**
  ```bash
  npx lerna run <script-name>
  ```

- **Publish packages:**
  ```bash
  npx lerna publish
  ```

### [Turbo](https://turbo.build/)
Turbo is another tool for managing monorepos with a focus on speed and caching.

#### Key Features
- Smart task scheduling.
- Built-in caching for faster builds and tests.
- Incremental builds for large codebases.

#### Installation and Setup
```bash
npm install turbo --save-dev
```
- Add a `turbo.json` configuration file to define your build pipelines.

#### Example `turbo.json`
```json
{
  "pipeline": {
    "build": {
      "outputs": ["dist/**"]
    },
    "test": {}
  }
}
```

#### Running Commands
- **Run a task:**
  ```bash
  npx turbo run build
  ```

---

By using these tools and techniques, you can efficiently manage npm packages and build scalable monorepos for your projects.
