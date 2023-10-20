import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/users.js"

const app = express();
const PORT = 5000;

app.use(bodyParser.json())

app.use("/users", userRouter)

app.use("/", (req, res) => res.send("Welcome to homepage"))

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`)
})