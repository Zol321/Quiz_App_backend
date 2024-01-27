//try martahgui console.log oo hii uri iin passwordig solin catch hii
 
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://olonbayarzolboo:BeR9GDncTgqtPCx6@zol.vxipedb.mongodb.net/?retryWrites=true&w=majority";
  const  connect =  async () => {
    try {
      await mongoose.connect (uri);
        console.log("Database is succesfully running");
    } catch ( err) {
      console.log("There is an error connecting to my database");
      console.log(err)
    }
  };


module.exports = connect;
