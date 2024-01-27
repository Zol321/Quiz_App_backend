const factModel = require("../database/schema/factModel");

const createFact = async (req, res) => {
  const body = req.body;
  try {
    const fact = await factModel.create(body);
    res.status(200).send(fact);
  } catch (e) {
    console.log(e);
  }
};

const getfacts = async (ree, res) => {
  try {
    const fact = await factModel.find();
    res.status(200).send(fact);
  } catch (e) {
    console.log(e);
  }
}

const updateFact = async (req, res) => {
  const factId = req.params.factId;
  const updateData = req.body;
  try {
    const updatedFact = await factModel.findByIdAndUpdate(factId, updateData, {
      new: true,
    });
    if (!updatedFact) {
      return res.status(404).send("Fact updated");
    }
    res.status(200).send(updatedFact);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const deleteFact = async (req, res) => {
  const factId = req.params.factId;
  try {
    const result = await factModel.findByIdAndDelete(factId);
    console.log(result);
    res.status(200).send(`Email is Deleted`);
  } catch (error) {
    console.log(error);
  }
};

const likeFact = async (req, res) => {
  const factId = req.params.factId;
  try {
    const updatedFact = await factModel.findByIdAndUpdate(
      factId,
      { $inc: { likes: 1 } },
      { new: true }
    );
    if (!updatedFact) {
      return res.status(404).send("Fact not found");
    }
    res.status(200).send(updatedFact);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const dislikeFact = async (req, res) => {
  const factId = req.params.factId;
  try {
    const updatedFact = await factModel.findByIdAndUpdate(
      factId,
      { $inc: { dislikes: 1 } },
      { new: true }
    );
    if (!updatedFact) {
      return res.status(404).send("Fact not found");
    }
    res.status(200).send(updatedFact);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};



module.exports = { createFact, deleteFact, updateFact, likeFact, dislikeFact, getfacts }; 






// ${result._id}
