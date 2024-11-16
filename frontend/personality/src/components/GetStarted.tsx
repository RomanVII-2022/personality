"use client";

import React from "react";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Questions from "./Questions";

function GetStarted() {
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-100 group hover:from-primary hover:to-primary"
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
                  <Questions />
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
            <Button onClick={() => api?.scrollNext()}>Button</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default GetStarted;
