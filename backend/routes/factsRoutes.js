const Router = require("express");
const { createFact, deleteFact, updateFact, getfacts } = require("../controller/factController");
const factsRoute = Router();

factsRoute.post("/facts", createFact);
factsRoute.get("/facts", getfacts);
// factsRoute.post("/facts/:userId", getfacts);
factsRoute.delete('/facts/:factId', deleteFact)
factsRoute.put("/facts/:factId",updateFact )

module.exports = factsRoute;
