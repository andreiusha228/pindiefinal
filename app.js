const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const apiRouter = require('./routes/apiRouter');
const connectToDataBase = require('./database/connect');
const pagesRouter = require('./routes/pages');
const cors = require('./middlewares/cors.js')

const PORT = 3001;

const app = express();
connectToDataBase();

app.use(
    cors,
    cookieParser(),
    bodyParser.json(),
    pagesRouter,
    apiRouter,
    express.static(path.join(__dirname, "public")), 
);

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
});

