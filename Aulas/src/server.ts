import express,{Request,Response,NextFunction} from "express";
import "express-async-errors"
import { router } from "./routes";
import "reflect-metadata";
import "./database/index";

const app = express();
const port = 3000;
app.use(express.json());
app.use(router);
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: "internal Server Error",
    });
  }
)
app.listen(port, () => {
return console.log(`Express is listening at http://localhost:${port}`);
});
