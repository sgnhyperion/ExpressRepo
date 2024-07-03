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

// app.put('/courses', (req, res) => {
//     courses[0].name = 'java1';
// });

// console.log(courses);

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => console.log("Listening on port 3000..."));
