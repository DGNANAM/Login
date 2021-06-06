var mongoose = require("mongoose");

var dbUrl =
  "mongodb+srv://Gnanam:Gnanam123@cluster0.al4hg.mongodb.net/Chat_application";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB", dbUrl);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
