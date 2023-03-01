const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

const languages = [
  "JavaScript",
  "JavaScript1",
  "JavaScript2",
  "JavaScript3",
  "JavaScript4",
  "JavaScript5",
  "TypeScript",
  "Java",
  "Kotlin",
  "Python",
  "Go",
];


app.get("/languages", (req, res) => {
  console.log(req.query.keyword);
  // const recommendLanguage = languages.find(e => e.includes(req.query.keyword))
  const recommendLanguage = []
  languages.map((language) => {
    if (language.includes(req.query.keyword.slice(0)) && req.query.keyword !== "") recommendLanguage.push(language);
  });
  console.log(recommendLanguage);
  res.send(recommendLanguage);
});

app.listen(5000, () => {
  console.log(`server start!! port 5000`);
});