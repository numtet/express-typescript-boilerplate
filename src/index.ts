import express, { NextFunction } from "express";

const app = express();
const router = express.Router();

app.use((req: express.Request, res: express.Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.get(
  "/",
  async (req: express.Request, res: express.Response): Promise<void> => {
    res.send("hello worldworld");
  }
);

app.use("/", router);

app.listen(3000, () => {
  console.log("listening on port 3000");
});

export default app;
