export interface AnswerType {
  id: number;
  answer: string;
  questionId: number;
  category: string;
  createdAt: string;
  updateAt: string;
}

export interface QuestionType {
  id: number;
  question: string;
  createdAt: string;
  updateAt: string;
  answers: AnswerType[];
}
