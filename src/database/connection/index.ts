import mongoose from "mongoose";
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../../.env") });

const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ytbky.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.set("debug", true);
try {
  mongoose.connect(url);
} catch (err) {
  mongoose.createConnection(url);
}

export class Connection {
  static start() {
    mongoose.connection
      .once("open", () => console.log("MongoDB connection success"))
      .on("error", (error) => {
        throw error;
      });
  }
}
