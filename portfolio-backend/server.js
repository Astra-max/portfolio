import express from "express";
import cors from "cors";
import router from "./routes.js";
import mongoose from "./model/model.js";

const app = express();

console.log(mongoose.ConnectionStates)

app.use(
  cors({
    origin: "http:localhost:3000",
    methods: ["GET", "DELETE", "OPTION", "PUT", "POST"],
    allowedHeaders: "Content-Type: application/json",
  })
);

app.use("/", router)
class App {
  constructor(port) {
    this.port = Number(port);
  }
  dbConnect() {
    console.log("Connected to db")
  }
  server() {
    app.listen(this.port, this.serverCallback());
  }
  serverCallback() {
    console.log(`server listening on port http://localhost:${this.port}`);
  }
}

const server = new App(6500);
server.server();
