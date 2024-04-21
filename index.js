const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const src = require('src');
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/home", (req, res) => {
  res.json();
});

app.listen(PORT, () => {
    src.run();
    console.log(`Server listening on ${PORT}`);
  });