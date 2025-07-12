import express from "express";
import cors from "cors";
const app = express();
app.use(cors())
app.use(express.json());
const port = 3000;

app.get("/api/member", (req, res) => {
  const members = [
    { id: 1, title: "member 1", name: "John", age: 20 },
    { id: 2, title: "member 2 ", name: "Jane", age: 25 },
    { id: 3, title: "member 3", name: "Bob", age: 30 },
  ];

  res.json(members);
});
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
