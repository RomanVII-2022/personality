import { create } from "zustand";

type AnswerType = {
  questionId: number;
  answerId: number;
  category: string;
};

type QuestionStoreType = {
  answers: AnswerType[];
  updateAnswers: (newAnswer: AnswerType) => void;
  clearAnswers: () => void;
};

export const useQuestionStore = create<QuestionStoreType>((set) => ({
  answers: [],
  updateAnswers: (updatedAnswer: AnswerType) =>
    set((state) => {
      const answerIndex = state.answers.findIndex(
        (answer) => answer.questionId === updatedAnswer.questionId
      );

      if (answerIndex !== -1) {
        const updatedAnswers = [...state.answers];
        updatedAnswers[answerIndex] = updatedAnswer;
        return { answers: updatedAnswers };
      } else {
        return { answers: [...state.answers, updatedAnswer] };
      }
    }),
  clearAnswers: () =>
    set(() => ({
      answers: [],
    })),
}));
