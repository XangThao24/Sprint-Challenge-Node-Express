const express = require("express");
const app = express();
const cors = require("cors");

const port = 5555;

app.get("/", (req, res) => {
  res.send("Hello There");
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
