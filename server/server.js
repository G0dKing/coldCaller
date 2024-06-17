// server.js - coldcaller.io
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const rateLimit = require('express-rate-limit');

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = express();
app.use(cors());
app.use(express.json());

const limiter = rateLimit({
    windowMs: 15 * 60 * 100,
    limit: 100,
});
app.use(limiter);

app.use(
  express.static(path.join(__dirname, "..", "client", "dist"), {
    maxAge: "1d",
  })
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"), {
    cacheControl: true,
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server Status: LIVE ( http://${HOST}:${PORT} )`);
});
