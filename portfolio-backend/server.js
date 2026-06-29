import express from "express";
import cors from "cors";
import router from "./routes.js";
import mongoose from "./model/model.js";

const app = express();

console.log(mongoose.ConnectionStates)

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:10000"],
    methods: ["GET", "DELETE", "OPTIONS", "PUT", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use("/", router);

class App {
  /**
   * Handles constructor
   */
  constructor(port) {
    this.port = Number(port);
  }
  /**
   * Handles db connect
   */
  dbConnect() {
    console.log("Connected to db")
  }
  /**
   * Handles server
   */
  server() {
    app.listen(this.port, this.serverCallback());
  }
  /**
   * Handles server callback
   */
  serverCallback() {
    console.log(`server listening on port http://localhost:${this.port}`);
  }
}

const server = new App(6500);
server.server();
