import React from "react";
import { AlertDialogDescription, AlertDialogTitle } from "./ui/alert-dialog";

function Result({ category }: { category: string }) {
  if (category === "introvert") {
    return (
      <div className="mx-5">
        <AlertDialogTitle className="text-white text-4xl font-bold">
          {`You're an Introvert`}
          <hr className="border-t border-gray-300 my-4 w-36 " />
        </AlertDialogTitle>
        <AlertDialogDescription className="text-white text-1xl font-bold">
          You feel comfortable and energized when you spend time alone or with a
          small group of close friends. You often enjoy quiet activities like
          reading or thinking.
        </AlertDialogDescription>
      </div>
    );
  }

  return (
    <div className="mx-5">
      <AlertDialogTitle className="text-white text-4xl font-bold">
        {`You're an Entrovert`}
        <hr className="border-t border-gray-300 my-4 w-36 " />
      </AlertDialogTitle>
      <AlertDialogDescription className="text-white text-1xl font-bold">
        You feel more energized and happy when you are around other people. You
        usually enjoy socializing, talking, and doing group activities.
      </AlertDialogDescription>
    </div>
  );
}

export default Result;
