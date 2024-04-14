const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// console.log(app);
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });