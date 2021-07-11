const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req, res) => {
  res.send('#SecretDevSquad');
});

app.get('/favorite/place', (req, res) => {
    console.log("This is just JS!!");
    res.send("Concord, North Carolina");
});

app.get('/favorite/animal', (req, res) => {
  console.log("This is just JS!!");
  res.send("Dogs");
});

app.get('/favorite/website', (req, res) => {
  console.log("This is just JS!!");
  res.send("www.womenwhocode.com");
});

app.get('/newTitle', (req, res) => {
  console.log("This is just JS!!");
  res.send("Full Stack Dev #SecretDevSquad");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
