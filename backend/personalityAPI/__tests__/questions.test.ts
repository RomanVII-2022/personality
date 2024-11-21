import { Request, Response, NextFunction } from "express-serve-static-core";
import QuestionController from "../controllers/questionController";
import db from "../models";
import { getRandomQuestions } from "../utils/shuffleList";

jest.mock("../models", () => ({
  Question: {
    findAll: jest.fn(),
  },
}));

jest.mock("../utils/shuffleList", () => ({
  getRandomQuestions: jest.fn(),
}));

describe("getAllQuestions", () => {
  it("should return an array of five questions", async () => {
    const mockQuestions = [
      { id: 1, question: "Question 1", answers: [] },
      { id: 2, question: "Question 2", answers: [] },
      { id: 3, question: "Question 3", answers: [] },
      { id: 4, question: "Question 4", answers: [] },
      { id: 5, question: "Question 5", answers: [] },
      { id: 6, question: "Question 6", answers: [] },
      { id: 7, question: "Question 7", answers: [] },
      { id: 8, question: "Question 8", answers: [] },
    ];

    const mockFiveQuestions = mockQuestions.slice(0, 5);

    // Mock database call
    (db.Question.findAll as jest.Mock).mockResolvedValue(mockQuestions);

    // Mock utility function
    (getRandomQuestions as jest.Mock).mockReturnValue(mockFiveQuestions);

    // Mock Express request, response, and next
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    const next = jest.fn();

    const controller = new QuestionController();
    await controller.getAllQuestions(req, res, next);

    // Assertions
    expect(db.Question.findAll).toHaveBeenCalledWith({ include: "answers" });
    expect(getRandomQuestions).toHaveBeenCalledWith(mockQuestions);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      data: mockFiveQuestions,
    });
    expect(next).not.toHaveBeenCalled(); // Ensure no errors were passed to next
  });

  it("should call the next function with an error if an exception occurs", async () => {
    // Mock an error thrown by the database call
    const mockError = new Error("Database error");
    (db.Question.findAll as jest.Mock).mockRejectedValue(mockError);

    // Mock Express request, response, and next
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    const next = jest.fn();

    const controller = new QuestionController();
    await controller.getAllQuestions(req, res, next);

    // Assertions
    expect(db.Question.findAll).toHaveBeenCalledWith({ include: "answers" });
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith(mockError); // Ensure the error is passed to next
  });
});
