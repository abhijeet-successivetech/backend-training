import express from "express";
import logger from "./middleware/logger.js";
import routes from "./routes/index.js";
import dotenv from "dotenv";
import ErrorHandler from "./middleware/errorHandler.js";
import { customHeaderMiddleware } from "./middleware/customHeader.js";
import { rateLimiterMiddleware } from "./middleware/rateLimiter.js";
import { dbConnect } from "./config/databaseConfig.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(express.json());
app.set("trust-proxy", true);
app.use(cookieParser());

dbConnect();

const PORT = 8008;

app.use(logger);
app.use(customHeaderMiddleware("X-header-custom", "This is custom header"));
app.use(rateLimiterMiddleware(3, 3));
app.use("/api/v1/", routes);

app.use(ErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
