type AnswerType = {
  questionId: number;
  answerId: number;
  category: string;
};

export function countAndDetermineCategory(answers: AnswerType[]) {
  let introvertCount = 0;
  let extrovertCount = 0;

  answers.forEach((answer) => {
    if (answer.category.toLowerCase() === "introvert") {
      introvertCount++;
    } else if (answer.category.toLowerCase() === "extrovert") {
      extrovertCount++;
    }
  });

  return introvertCount > extrovertCount ? "introvert" : "extrovert";
}
