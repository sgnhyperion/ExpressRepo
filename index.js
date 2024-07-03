const express = require("express");

const app = express();
app.use(express.json());
app.use(middleware);

let courses = [
  { id: 1, name: "java" },
  { id: 2, name: "javascript" },
  { id: 3, name: "python" },
];

app.post("/courses", (req, res) => {
  let singleCourse = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(singleCourse);
  res.send(singleCourse);
});

app.put("/courses/:id", (req, res) => {
    if(!courses[req.params.id - 1]){
        res.status(404).send("Course not found");
    } else{
        let course = {
            id : Number(req.params.id),
            name : req.body.name
        }
        courses[req.params.id - 1] = course;
        res.send(course);
    }
});

app.delete("/courses/:id", (req, res) => {
    if(!courses[req.params.id - 1]){
        res.status(404).send("Course not found");
    } else{
        courses.splice(req.params.id - 1, 1);
    }
    res.send(courses);
});

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

function middleware(req, res, next){
    const method = req.method;
    const ip = req.ip;
    const hostname = req.hostname;
    const date = new Date();

    console.log(`Method: ${method}`);
    console.log(`IP: ${ip}`);
    console.log(`localhost: ${hostname}`);
    console.log(`Date: ${date}`);
    next();
}

const port = 3000;

app.listen(3000, () => console.log("Listening on port 3000..."));

