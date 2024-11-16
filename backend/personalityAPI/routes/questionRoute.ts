import express from "express";
import QuestionController from "../controllers/questionController";

const questionRouter = express.Router();
const questionController = new QuestionController();

questionRouter.get("/all/questions", questionController.getAllQuestions);

export default questionRouter;
