import dotenv from "dotenv";
dotenv.config();
import appConfig from "./application/application";

const app = appConfig();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
