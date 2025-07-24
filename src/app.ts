import express from "express";
import { LoggerMiddleware } from "./middleware/logger.js";
import routes from "./routes/index.js";
import dotenv from "dotenv";
import { ErrorHandler } from "./middleware/errorHandler.js";
import { CustomHeaderMiddleware } from "./middleware/customHeader.js";
import { RateLimiterMiddleware } from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.set("trust-proxy", true);
const logger = new LoggerMiddleware();
const errHandler = new ErrorHandler();
const limit = new RateLimiterMiddleware();
const customHeader = new CustomHeaderMiddleware();
const PORT = 8008;

app.use(logger.logRequest);
app.use(customHeader.setHeader("X-header-custom", "This is custom header"));
app.use(limit.rateLimiter(3,6));
app.use("/api/v1/", routes);

app.use(errHandler.handle);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
