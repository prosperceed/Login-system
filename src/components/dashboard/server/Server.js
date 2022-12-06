import express from "express";
import bcrypt from "bcrypt";

const app = express();

const port = 3000;

app.get(
  ("/",
  (req, res) => {
    app.send("Hello word");
  })
);

app.listen(() => {
  console.log(`app listen to port ${port} successfully!`);
});
