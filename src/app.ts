import express, { Request, Response, NextFunction } from "express";
import logger from "./middleware/logger.js";
import routes from "./routes/index.js";
import dotenv from "dotenv";
import ErrorHandler from "./middleware/errorHandler.js";
dotenv.config();

interface Item {
  id: number;
  name: string;
  address: string;
}
const app = express();
app.use(express.json());
app.set("trust-proxy", true);



const PORT = 8008;

app.use(logger);  
app.use(routes);





app.use(ErrorHandler);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
