const express = require("express");

const app = express();

const port = 8080;

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

app.listen(port, () => {
  console.log(`app listen to port ${port} successfully!`);
});
