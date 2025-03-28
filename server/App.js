// Import Express
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Users array to store user data
let users = [];

// Create a user (POST /users)
app.post('/users', (req, res) => {
    const { name, email, username } = req.body;
    const newUser = {
        id: users.length + 1, // Assign unique ID
        name,
        email,
        username
    };
    users.push(newUser);
    res.status(201).json({ message: 'User created successfully', user: newUser });
});

// Get all users (GET /users)
app.get('/users', (req, res) => {
    res.json(users);
});

// Get a specific user (GET /users/:id)
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});

// Update a specific user (PUT /users/:id)
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const { name, email, username } = req.body;
    user.name = name || user.name;
    user.email = email || user.email;
    user.username = username || user.username;

    res.json({ message: 'User updated successfully', user });
});

// Delete a specific user (DELETE /users/:id)
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(u => u.id !== userId);
    res.json({ message: 'User deleted successfully' });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));