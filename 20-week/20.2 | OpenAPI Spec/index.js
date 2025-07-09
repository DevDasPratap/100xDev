import express from 'express';
import swaggerUi from 'swagger-ui-express';
import {openapiSpec} from './openapispec.js';
const app = express();
const port = 3000;

app.use(express.json());

let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
];

app.get('/', (req, res) => {
    res.send('Welcome to the User API');
})

app.get('/users', (req, res) => {
    const { name } = req.query;

    if (name) {
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
        res.json(filteredUsers);
    } else {
        res.json(users);
    }
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpec));
// http://localhost:3000/api-docs/

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// http://localhost:3000/users?name=John Doe,a,http://localhost:3000/users?name=John%20Doe