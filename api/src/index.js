import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import sequelize from "./config/database.js";
import apiRoute from "./routes/apiRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
dotenv.config();

// API Routes
app.use('/api', apiRoute);

// DB Connection Check & Server Running PORT
const port = process.env.PORT;
sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
});
