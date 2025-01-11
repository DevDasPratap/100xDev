# What is an ORM?

## Overview
ORM stands for **Object-Relational Mapping**, a programming technique that allows developers to interact with a database using code objects rather than writing raw SQL queries. It bridges the gap between the **object-oriented programming** world and **relational databases**.

### Key Features of ORMs:
1. **Abstraction**: Simplifies database operations by abstracting complex SQL queries into method calls.
2. **Data Modeling**: Allows you to define and manage your database schema using programming language constructs.
3. **CRUD Operations**: Provides built-in methods for Create, Read, Update, and Delete operations.
4. **Migration Management**: Facilitates schema migrations to update the database structure as the application evolves.
5. **Cross-Database Compatibility**: Enables switching between databases (e.g., PostgreSQL, MySQL) with minimal changes to the code.

---

# What is Prisma?

## Overview
Prisma is a modern **ORM** for Node.js and TypeScript. It is designed to simplify database workflows, offering an intuitive and type-safe API to interact with the database.

### Key Features of Prisma:
1. **Type Safety**: Automatically generates TypeScript types for your database schema, ensuring type-safe queries.
2. **Schema-First Approach**: Uses a declarative `prisma.schema` file to define your database schema.
3. **Powerful Query API**: Provides a high-level API for database operations, eliminating the need for raw SQL.
4. **Migration Tools**: Includes Prisma Migrate for version-controlled and predictable database migrations.
5. **Database Introspection**: Automatically generates schema and models from an existing database.
6. **Multi-Database Support**: Works with PostgreSQL, MySQL, SQLite, SQL Server, MongoDB, and more.

### Automated migrations?
DB changes often, you add more column, add new tables, you have to do MIGRATIONS to keeep syncing the DB state.
- Pre ORM days - Manually update then prod DB, dev DB

- There was no longer of the changes made to the DB

---

## How Prisma Works

### Workflow
1. **Define the Schema**:
   - Use the `prisma.schema` file to define the data model, relationships, and database provider.
```prisma
   datasource db {
       provider = "postgresql"
       url      = env("DATABASE_URL")
   }

   generator client {
       provider = "prisma-client-js"
   }

   model User {
       id        Int      @id @default(autoincrement())
       email     String   @unique
       name      String?
       posts     Post[]
   }

   model Post {
       id        Int      @id @default(autoincrement())
       title     String
       content   String
       published Boolean  @default(false)
       authorId  Int
       author    User     @relation(fields: [authorId], references: [id])
   }
```

### Run Migrations:

Use Prisma Migrate to apply schema changes to the database.
```bash
npx prisma migrate dev --name init
```
### Generate the Client:

Generate a type-safe Prisma Client for interacting with the database.
```bash
npx prisma generate
```
### Query the Database:

Use the Prisma Client in your application code to interact with the database.
```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Create a new user
    const user = await prisma.user.create({
        data: {
            email: "john.doe@example.com",
            name: "John Doe",
        },
    });

    console.log(user);
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
```
### Benefits of Using Prisma
- Developer Productivity: Intuitive syntax and type safety accelerate development.
- Less Error-Prone: Type-safe queries minimize runtime errors.
- Easier Maintenance: Schema-first approach simplifies managing and evolving the database.
- Better Performance: Optimized queries for better performance with minimal effort.

### When to Use Prisma?
- When building applications with Node.js/TypeScript.
- When you want to minimize raw SQL usage.
- When you prefer a schema-first approach to database management.
- When you need type safety and auto-completion for database queries.

Prisma simplifies database interaction, making it an excellent choice for modern web development projects. Let me know if you need examples for specific use cases!


> ##  Installation Prisma

* You can use Online databases like neon, aiven, subabase, elephantSQL or run it locally
 
### 1. Using Neon database

 1. Initialize node project
 ```
 npm init -y 
 ```
  2. Add dependencies
  ```
  npm install prisma typescript ts-node @types/node --save-dev
  ```
  3. Init Typescript
  
  ```
	npx tsc --init
	Change `rootDit` to `src`
	Change `outDir` to `dist`
 ```
 4. Initialize Prisma

```
npx prisma init
```
It will generate a folder Prisma with `schema.prisma` in it. All we have to make changes inside it.


### 2. Select Database

Inside `prisma/schema.prisma`

```js
generator  client  {
provider  =  "prisma-client-js"
}

datasource  db  {
provider  =  "postgresql"
url  =  "PASTE_NEON_DB_LINK"
}
```
`provider` is the database name you can change it to `mongodb`
, `mysql`. Its depends upon you that which database you want to use in your project

Add below code to it
```sql
model User {
  id         Int      @id @default(autoincrement())
  username   String   @unique
  password   String
  firstName  String?
  lastName   String
}

model Todo {
  id        String @id @default(uuid())
  title     String
  completed Boolean @default(false)
  description String
  userId    Int
}
```
- > ? is optional field user can either skip or fill it. 
#### 3. Generate migrations
You have created a single schema file. You haven’t yet run the `CREATE TABLE` commands. To run those and create `migration files` , run

``` 
npx prisma migrate dev --name UserisAdded 
```

As you run this command  `User` and `Todo` table will be created you can check it on neon website.

### Let's Revise
1. Create `schema.prisma` file
2. Run a command to generate migration folder. It migrate the SQL database.
3. It generate a Client i.e- User class, Todo class that we can use in our `src/index.ts` file
4. We can now use `User.find({})` in `src/index.ts` file and under the hood this User and Todo create SQL queries.

#### 4. Generate Client

 ```
npx prisma generate 
```

Now your are good to go now you can make changes in your `src/index.ts` file like INSERTING, DELETING, UPDATING and so on. 

## Make Changes in `src/index.ts` file

```js
import  { PrismaClient }  from  "@prisma/client";

const prisma =  new  PrismaClient();

// inserting a user
async  function  insertUser(email:  string, name:  string, password:  string){
	const res =  await prisma.user.create({
	data:  {
		email: email,
		name: name,
		password: password
	},
	select:{
		id:  true,
		password:  true
	},
});
console.log(res);
}

insertUser("Pratap@gmail.com",  "Pratap",  "12345");
// insertUser("Pratap2@gmail.com",  "Pratap2",  "12345");

```

### Run `src/index.ts` file
```
tsc -b
```
OR
```
npx tsc -b
```

It will generate a `index.js` file inside dist folder.

```
node dist/index.js
```
It will result the OUTPUT `ID and PASSWORD`

<hr>