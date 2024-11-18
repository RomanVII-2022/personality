"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import Image from "next/image";
import { Carousel, CarouselApi, CarouselContent } from "./ui/carousel";
import Questions from "./Questions";
import { useQuestionStore } from "@/store/questionStore";
import { countAndDetermineCategory } from "@/utilities/finalResult";
import Result from "./Result";

function GetStarted() {
  const [api, setApi] = React.useState<CarouselApi>();
  const storeAnswers = useQuestionStore((state) => state.answers);
  const clearAnswers = useQuestionStore((state) => state.clearAnswers);
  const [showResult, setShowResult] = useState(false);
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    const category = countAndDetermineCategory(storeAnswers);
    setCategory(category);
    setShowResult(true);
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-100 group hover:from-primary hover:to-primary"
            onClick={() => {
              setShowResult(false);
              clearAnswers();
            }}
          >
            <p className="font-bold text-black">Get started</p>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-[800px] max-w-none">
          <div className="relative w-[750px] h-[400px]">
            <Image
              src={"/bg2.jpg"}
              alt="modal background image"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Carousel setApi={setApi} className="w-full max-w-[417px]">
                <CarouselContent>
                  {showResult ? <Result category={category} /> : <Questions />}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            {!showResult && (
              <>
                <Button onClick={() => api?.scrollPrev()}>Prev</Button>
                {storeAnswers.length === 5 ? (
                  <Button onClick={handleSubmit}>Submit</Button>
                ) : (
                  <Button
                    onClick={() => {
                      api?.scrollNext();
                    }}
                  >
                    Next
                  </Button>
                )}
              </>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default GetStarted;
