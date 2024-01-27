const router = require("./routes/routes");
const express = require("express");
const connect = require('./database/db');
const factsRoute = require("./routes/factsRoutes");
const cors = require('cors')

const app = express();
const port = 8080;
app.use(cors())
app.use(express.json());
app.use(router);
app.use(factsRoute)
connect()

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
