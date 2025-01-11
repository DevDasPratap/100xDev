# Types of Databases

## SQL vs NoSQL

| Feature                     | SQL                          | NoSQL              |
|-----------------------------|------------------------------|--------------------|
| Schema                     | Strict Schema                | Schemaless         |
| Schema Modification         | Very hard to change schemas, involves migrations | Easier and faster to change |
| Development Speed           | Moderate                    | Faster to produce apps |

---

## SQL Database Relationships

SQL databases are relational, meaning they store data in structured tables that can relate to one another. Common types of relationships include:

- **One-to-One**
- **One-to-Many**
- **Many-to-Many**

### One-to-One
Each record in Table A is associated with exactly one record in Table B.

**Example:**
- **Tables:** `Users` and `Profiles`
- **Relationship:** Each user has exactly one profile.
```sql
CREATE TABLE Users (
    user_id INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL
);

CREATE TABLE Profiles (
    profile_id INT PRIMARY KEY,
    user_id INT UNIQUE,
    bio TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
```

### One-to-Many
One record in Table A is associated with many records in Table B.

**Example:**
- **Tables:** `Authors` and `Books`
- **Relationship:** An author can write multiple books.

```sql
CREATE TABLE Authors (
    author_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE Books (
    book_id INT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES Authors(author_id)
);
```

### Many-to-Many
Many records in Table A are associated with many records in Table B.

**Example:**
- **Tables:** `Students` and `Courses`
- **Relationship:** A student can enroll in multiple courses, and a course can have multiple students.

```sql
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL
);

CREATE TABLE Enrollments (
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);
```
---

## Types of SQL Databases

1. **PostgreSQL**
2. **MySQL**

---

## How to Connect to an SQL Database

### PostgreSQL Connection String Format
```plaintext
postgress://[username]:[password]@[host]/[databasename]
```
**Replace**:

- [username] with your database username.
- [password] with your database password.
- [host] with the database host (e.g. localhost or an IP address/Domain name).
- [databasename] with the name of your database.

### Basic Types of queries:
- Insert
- Update
- Delete
- Get


## Advance : foreign key, joins, indexes

### Foreign Key
A foreign key is a column or group of columns in a table that creates a relationship between two tables. It enforces referential integrity, ensuring the data in the related column exists in the referenced table.

### Example:
- **Tables:** `Orders` and `Customers`
- **Relationship:** Each order belongs to a customer.
```sql
CREATE TABLE Customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);
```

### Joins
Joins are used to retrieve related data from multiple tables based on a condition. Common types of joins include:

#### INNER JOIN
Returns rows where there is a match in both tables.

**Example**: Retrieve all orders with customer names.

```sql
SELECT Orders.order_id, Customers.name, Orders.order_date
FROM Orders
INNER JOIN Customers ON Orders.customer_id = Customers.customer_id;
```

#### LEFT JOIN (or LEFT OUTER JOIN)
Returns all rows from the left table, and matched rows from the right table. Rows with no match in the right table show NULL.

**Example**: Retrieve all customers, even if they have no orders.

```sql
SELECT Customers.customer_id, Customers.name, Orders.order_id
FROM Customers
LEFT JOIN Orders ON Customers.customer_id = Orders.customer_id;
```

#### RIGHT JOIN (or RIGHT OUTER JOIN)
Returns all rows from the right table, and matched rows from the left table. Rows with no match in the left table show NULL.

**Example**: Retrieve all orders, even if they don't have a valid customer.

```sql
SELECT Orders.order_id, Orders.order_date, Customers.name
FROM Orders
RIGHT JOIN Customers ON Orders.customer_id = Customers.customer_id;
```

#### FULL JOIN (or FULL OUTER JOIN)
Returns rows when there is a match in either table. Unmatched rows show NULL.

**Example**: Retrieve all customers and their orders, including unmatched records.

```sql
SELECT Customers.customer_id, Customers.name, Orders.order_id
FROM Customers
FULL OUTER JOIN Orders ON Customers.customer_id = Orders.customer_id;
```

#### CROSS JOIN
Returns the Cartesian product of two tables (all combinations of rows).

**Example**: Get all possible combinations of customers and orders.

```sql
SELECT Customers.name, Orders.order_id
FROM Customers
CROSS JOIN Orders;
```
### Indexes
Indexes are used to improve the speed of data retrieval operations on a database table. They create a data structure that allows for fast searching.

**Types of Indexes:**
- Primary Index: Automatically created for primary keys.
- Unique Index: Ensures all values in a column are unique.
- Composite Index: Created on multiple columns.
- Full-Text Index: Used for text searches.
- Clustered Index: Reorders the rows to match the index.


### How to relate (join) data?

**Steps to Join Data:**

- Identify the Relationship: Determine how the tables relate (e.g., by primary and foreign keys).
- Select the Required Columns: Choose the columns you want to retrieve.
- Write the Join Clause: Use the appropriate join type (`INNER`, `LEFT`, `RIGHT`, etc.) and specify the condition.
**Example**: Retrieve customer names and their order IDs using an `INNER JOIN`:

```sql
SELECT Customers.name, Orders.order_id
FROM Customers
INNER JOIN Orders ON Customers.customer_id = Orders.customer_id;
```

> # Creating a Postgres Database

## 1. Using Neon DB
Make an account on [Neon](https://neon.tech/) and create a fresh project.

1. Initialise TypeScript Project
```
npm init -y
npm tsc --init
```
2. Create `src` and `dist` folder and inside `src` folder create `index.ts` file.

2. Change the `rootDir` and `outDir` in `tsconfig.json` file
```
"rootDir": "./src",
"outDir": "./dist",
```
3. Install the `pg` library and it’s types (because we’re using TS)

```
npm install pg
npm install @types/pg
```

4. Add follwing code to `src/index.ts` 

```js
import { Client } from 'pg';

const client = new Client({
  connectionString: "ADD_NEON_DB_URL"
});


async function createUserTable(){
  await client.connect();
  const result = await client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      name VARCHAR(255),
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log(result);
}

createUserTable();
```

5. Build `ts` file to `js` 
```
tsc -b
```

6. Run `js` file
```
node dist/index.js
```

Table is created Check on neon website




## 2. Install and Run using Docker
- `docker pull postgres`

  - To download the latest PostgreSQL image from Docker Hub:

- `docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres`

  - `--name my-postgres`: Assigns the name “my-postgres” to the container.
  - `-e POSTGRES_PASSWORD=mysecretpassword`: Sets the PostgreSQL superuser password to “mysecretpassword”.
  - `-d`: Runs the container in detached mode (in the background).
  - `-p` 5432:5432: Maps port 5432 on your host machine to port 5432 inside the container (the default PostgreSQL port).

- `docker exec -it my-postgres psql -U postgres`

  - To interact with the container, you can use the `docker exec` command.This command connects you to the PostgreSQL instance running in the container as the “postgres” user

- CTRL + D
- `docker stop my-postgres`
    - To stop the postgres 
- `docker start my-postgres`
    - To start the postgres container
- `docker exec -it my-postgres psql -U postgres`



