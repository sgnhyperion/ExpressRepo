const express = require("express");

const app = express();
app.use(express.json());

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
            id : req.params.id,
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

app.listen(3000, () => console.log("Listening on port 3000..."));
