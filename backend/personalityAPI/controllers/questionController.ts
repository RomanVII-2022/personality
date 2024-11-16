import { Request, Response, NextFunction } from "express-serve-static-core";
import db from "../models";
import { getRandomQuestions } from "../utils/shuffleList";

class QuestionController {
  getAllQuestions = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const allQuestions = await db.Question.findAll({ include: "answers" });
      const fiveRandomQuestions = getRandomQuestions(allQuestions);
      response.status(200).json({
        data: fiveRandomQuestions,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default QuestionController;
