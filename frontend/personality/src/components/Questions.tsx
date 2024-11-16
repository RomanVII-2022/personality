import fetcher from "@/services/fetcher";
import { QuestionType } from "@/types/questionType";
import React from "react";
import useSWR from "swr";
import { AlertDialogDescription, AlertDialogTitle } from "./ui/alert-dialog";

function Questions() {
  const { data } = useSWR<{ data: QuestionType[] }>(
    "/api/all/questions",
    fetcher
  );
  return (
    <>
      {data?.data.map((question, index) => (
        <div key={question.id}>
          <div className="mx-5">
            <AlertDialogTitle className="text-white text-2xl font-bold">
              <hr className="border-t border-gray-300 my-4 w-36 " />
              {index + 1}. {question.question}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {question.answers.map((answer) => (
                <div
                  key={answer.id}
                  className="my-3 p-3 rounded-xl bg-transparent w-[400px] flex justify-between items-center border-2 border-white hover:bg-primary cursor-pointer"
                >
                  <h3 className="text-white">{answer.answer}</h3>
                  <div className="h-3 w-3 rounded-full border-2 border-white flex justify-center items-center">
                    <div className="h-1 w-1 rounded-full border-2 border-white bg-white"></div>
                  </div>
                </div>
              ))}
            </AlertDialogDescription>
          </div>
        </div>
      ))}
    </>
  );
}

export default Questions;