
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Annie Music Bot is running.");
});

app.listen(PORT, () => {
  console.log(`Dummy server is listening on port ${PORT}`);
});
