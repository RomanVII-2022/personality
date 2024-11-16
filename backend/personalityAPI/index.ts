import dotenv from "dotenv";
dotenv.config();
import appConfig from "./application/application";
import db from "./models";

const app = appConfig();

db.sequelize.authenticate().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
