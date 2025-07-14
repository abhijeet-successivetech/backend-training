import express from "express";
import { mockList } from "./mockList.js";

interface Item {
  id: number;
  name:string
  address: string;
  
}

const data: Item[] = mockList;

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
