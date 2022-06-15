// === DEPENDENCIES === //
const express = require('express');
const cors = require('cors');
const projects = require("./projects.json");
const about = require("./about.json");
// === INITIALIZE THE EXPRESS APP === //
const app = express();


// === MIDDLEWARE === //
app.use(cors());


//  HOME ROUTE
app.get('/', (req, res) => {
    res.send('Hello World');
});

// RETRIEVING PROJECTS
app.get("/projects", (req, res) => {
    // send projects via JSON
    res.json(projects);
});

// RETRIEVING ABOUT INFO 
app.get("/about", (req, res) => {
    res.json(about);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
