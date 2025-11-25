const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));


let tasks = [
    {
        id: uuidv4(),
        title: "Coding",
        description: "My First Coding!"
    },
    {
        id: uuidv4(),
        title: "Gym",
        description: "Health is Wealth!"
    }
];



// all tasks
app.get('/tasks', (req, res) => {
    res.render('index.ejs', { tasks });
});

// create new task
app.get('/tasks/new', (req, res) => {
    res.render('create.ejs');
});

// create task
app.post('/tasks', (req, res) => {
    let { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send("Title and description are required!");
    }

    let id = uuidv4();
    tasks.push({ id, title, description });
    res.redirect('/tasks');
});

// view task 
app.get('/tasks/:id', (req, res) => {
    let { id } = req.params;
    let task = tasks.find(t => t.id === id);

    if (!task) return res.status(404).send("Task not found");

    res.render("view.ejs", { task });
});

// edit form
app.get('/tasks/:id/edit', (req, res) => {
    let { id } = req.params;
    let task = tasks.find(t => t.id === id);

    if (!task) return res.status(404).send("Task not found");

    res.render("edit.ejs", { task });
});

// update task
app.put('/tasks/:id', (req, res) => {
    let { id } = req.params;
    let { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send("Title and description are required!");
    }

    let task = tasks.find(t => t.id === id);
    if (!task) return res.status(404).send("Task not found");

    task.title = title;
    task.description = description;

    res.redirect('/tasks');
});

// DELETE task
app.delete('/tasks/:id', (req, res) => {
    let { id } = req.params;
    let originalLength = tasks.length;
    tasks = tasks.filter(t => t.id !== id);

    if (tasks.length === originalLength) {
        return res.status(404).send("Task not found");
    }

    res.redirect('/tasks');
});


app.listen(port, () => {
    console.log(`Server is working on port ${port}`);
});
