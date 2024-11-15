import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="m-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      <div className="bg-gradient-to-r from-orange-500 to-orange-100 rounded-lg flex gap-4 p-2 items-center">
        <div>
          <Image
            src={"/net.svg"}
            alt="complete the test icon"
            width={100}
            height={100}
          />
        </div>
        <div>
          <h2 className="text-lg font-bold">Complete the Test</h2>
          <p>
            Be yourself and answer honestly to find out your personality type.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-orange-500 to-orange-100 rounded-lg flex gap-4 p-2 items-center">
        <div>
          <Image
            src={"/cube.svg"}
            alt="complete the test icon"
            width={100}
            height={100}
          />
        </div>
        <div>
          <h2 className="text-lg font-bold">View Detailed Results</h2>
          <p>
            Learn how your personality type influences many areas of your life.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-orange-500 to-orange-100 rounded-lg flex gap-4 p-2 items-center">
        <div>
          <Image
            src={"/unlock.svg"}
            alt="complete the test icon"
            width={100}
            height={100}
          />
        </div>
        <div>
          <h2 className="text-lg font-bold">Unlock Your Potential</h2>
          <p>
            Grow into the person you want to be with your optional Premium
            Suite.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
