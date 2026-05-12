import express from "express";
import cors from "cors";
import taskRouter from "./routes/tasks.js";
import authRouter from "./routes/auth.js";
import { connectDB } from "./config/db.js";
import session from "express-session";
import MongoStore from "connect-mongo";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", taskRouter);
app.use("/api/auth", authRouter);

app.use(
  session({
    secret: "task-manager-secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/task-manager",
    }),
    cookie: { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 },
  }),
);

const PORT = 7000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
});
