const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Listening on port ${port}`));
