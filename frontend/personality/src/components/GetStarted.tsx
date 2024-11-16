"use client";

import React from "react";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogDescription,
  AlertDialogTitle,
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
              src={"/bg.jpeg"}
              alt="modal background image"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Carousel setApi={setApi} className="w-full max-w-[417px]">
                <CarouselContent className="">
                  <div className="mx-5">
                    <AlertDialogTitle className="text-white text-2xl font-bold">
                      <hr className="border-t border-gray-300 my-4 w-36 " />
                      1. Where would you choose to live?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      <div className="my-3 p-3 rounded-xl bg-transparent w-[400px] flex justify-between items-center border-2 border-white hover:bg-primary cursor-pointer">
                        <h3 className="text-white">In a mansion</h3>
                        <div className="h-3 w-3 rounded-full border-2 border-white flex justify-center items-center">
                          <div className="h-1 w-1 rounded-full border-2 border-white bg-white"></div>
                        </div>
                      </div>
                      <div className="my-3 p-3 rounded-xl bg-transparent w-[400px] flex justify-between items-center border-2 border-white hover:bg-primary">
                        <h3 className="text-white">In a mansion</h3>
                        <div className="h-3 w-3 rounded-full border-2 border-white flex justify-center items-center">
                          <div className="h-1 w-1 rounded-full border-2 border-white bg-white"></div>
                        </div>
                      </div>
                      <div className="my-3 p-3 rounded-xl bg-transparent w-[400px] flex justify-between items-center border-2 border-white hover:bg-primary">
                        <h3 className="text-white">In a mansion</h3>
                        <div className="h-3 w-3 rounded-full border-2 border-white flex justify-center items-center">
                          <div className="h-1 w-1 rounded-full border-2 border-white bg-white"></div>
                        </div>
                      </div>
                      <div className="my-3 p-3 rounded-xl bg-transparent w-[400px] flex justify-between items-center border-2 border-white hover:bg-primary">
                        <h3 className="text-white">In a mansion</h3>
                        <div className="h-3 w-3 rounded-full border-2 border-white flex justify-center items-center">
                          <div className="h-1 w-1 rounded-full border-2 border-white bg-white"></div>
                        </div>
                      </div>
                    </AlertDialogDescription>
                  </div>
                  <div className="">
                    <AlertDialogTitle className="text-white text-2xl font-bold">
                      <hr className="border-t border-gray-300 my-4 w-36 " />
                      1. Where would you choose to live?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      <div className="my-3 p-3 rounded-xl bg-transparent w-[400px] flex justify-between items-center border-2 border-white hover:bg-primary cursor-pointer">
                        <h3 className="text-white">In a mansion</h3>
                        <div className="h-3 w-3 rounded-full border-2 border-white flex justify-center items-center">
                          <div className="h-1 w-1 rounded-full border-2 border-white bg-white"></div>
                        </div>
                      </div>
                      <div className="my-3 p-3 rounded-xl bg-transparent w-[400px] flex justify-between items-center border-2 border-white hover:bg-primary">
                        <h3 className="text-white">In a mansion</h3>
                        <div className="h-3 w-3 rounded-full border-2 border-white flex justify-center items-center">
                          <div className="h-1 w-1 rounded-full border-2 border-white bg-white"></div>
                        </div>
                      </div>
                      <div className="my-3 p-3 rounded-xl bg-transparent w-[400px] flex justify-between items-center border-2 border-white hover:bg-primary">
                        <h3 className="text-white">In a mansion</h3>
                        <div className="h-3 w-3 rounded-full border-2 border-white flex justify-center items-center">
                          <div className="h-1 w-1 rounded-full border-2 border-white bg-white"></div>
                        </div>
                      </div>
                      <div className="my-3 p-3 rounded-xl bg-transparent w-[400px] flex justify-between items-center border-2 border-white hover:bg-primary">
                        <h3 className="text-white">In a mansion</h3>
                        <div className="h-3 w-3 rounded-full border-2 border-white flex justify-center items-center">
                          <div className="h-1 w-1 rounded-full border-2 border-white bg-white"></div>
                        </div>
                      </div>
                    </AlertDialogDescription>
                  </div>
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
