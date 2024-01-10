import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.static("./public"));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser({ extends: true, limit: "16kb" }));

// Importing routes
import userRoute from "./routes/user.routes.js";

// Routes declaring
app.use("/api/v1/user", userRoute);

export { app };
