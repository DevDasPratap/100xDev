# Prisma Commands and Usage

Prisma is an open-source database toolkit that simplifies database access for developers. It provides a type-safe query builder and supports various relational and non-relational databases. Below is a comprehensive guide to Prisma commands and usage:

---

## Installation

To get started with Prisma, install the necessary dependencies:

```bash
npm install prisma --save-dev
npm install @prisma/client
```

---

## Initializing Prisma

To set up Prisma in your project:

```bash
npx prisma init
```

This creates a `prisma` directory with the following files:
- **schema.prisma**: Defines your database schema.
- **.env**: Stores environment variables like the database connection URL.

---

## Prisma CLI Commands

### 1. **Generate Prisma Client**
Generates the Prisma Client based on the schema.
```bash
npx prisma generate
```
Run this command after making changes to the `schema.prisma` file.

### 2. **Format Prisma Schema**
Formats the `schema.prisma` file.
```bash
npx prisma format
```

### 3. **Migrate Database**

#### Create a Migration
```bash
npx prisma migrate dev --name <migration-name>
```
This command applies pending migrations to your database and creates new migration files.

#### Deploy Migrations to Production
```bash
npx prisma migrate deploy
```
Applies all migrations in a production environment.

#### Reset the Database
```bash
npx prisma migrate reset
```
Drops the database, recreates it, and applies all migrations.

### 4. **Seed Database**
Runs the seed script defined in `package.json`.
```bash
npx prisma db seed
```

### 5. **Database Pull**
Pulls the database schema into the `schema.prisma` file.
```bash
npx prisma db pull
```

### 6. **Database Push**
Pushes the `schema.prisma` file to the database without creating a migration file.
```bash
npx prisma db push
```

### 7. **Studio**
Launches Prisma Studio, a GUI to manage your database.
```bash
npx prisma studio
```

### 8. **Introspection**
Generates Prisma schema from an existing database.
```bash
npx prisma introspect
```

---

## Prisma Schema Overview

The `schema.prisma` file is the core of Prisma. It consists of three main components:

1. **Data Source**
Specifies the database connection.
```prisma
datasource db {
  provider = "postgresql" // Database provider
  url      = env("DATABASE_URL")
}
```

2. **Generator**
Defines the Prisma Client settings.
```prisma
generator client {
  provider = "prisma-client-js"
}
```

3. **Model**
Defines your database tables and their relationships.
```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  posts     Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

---

## Using Prisma Client

### 1. Import Prisma Client

```javascript
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
```

### 2. Query Examples

#### Create
```javascript
const newUser = await prisma.user.create({
  data: {
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
});
```

#### Read
```javascript
const users = await prisma.user.findMany();
```

#### Update
```javascript
const updatedUser = await prisma.user.update({
  where: { id: 1 },
  data: { name: 'Jane Doe' },
});
```

#### Delete
```javascript
const deletedUser = await prisma.user.delete({
  where: { id: 1 },
});
```

---

## Best Practices

1. **Use Environment Variables:** Store sensitive information like database URLs in the `.env` file.
2. **Regenerate Client:** Run `npx prisma generate` after making changes to `schema.prisma`.
3. **Use Migrations:** Always prefer migrations over direct database changes.
4. **Test Changes Locally:** Use a local database or a staging environment for testing schema changes.

---

This document provides a solid foundation for working with Prisma. Refer to the [official Prisma documentation](https://www.prisma.io/docs) for advanced usage and updates.

