import Image from "next/image";
import React from "react";

function HeroBody() {
  return (
    <>
      <div className="bg-primary grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4 justify-items-center items-center">
        <div className="max-w-80">
          <h1 className="text-4xl font-extrabold">
            Personality tests, down to a science
          </h1>
          <hr className="border-t border-gray-300 my-4 w-36" />
          <h3 className="text-2xl font-semibold">
            Accurate, insightful personality assessments for individuals and
            work teams
          </h3>
        </div>
        <Image
          src={"/creative.svg"}
          alt="creative girl with personality"
          width={400}
          height={400}
        />
        <div className="space-y-2">
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/victor-mwai-03b34a215/">
              <Image
                src={"/linkedin.png"}
                alt="linkedin logo"
                width={20}
                height={20}
              />
            </a>
            <p>Linkedin</p>
          </div>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/victor-mwai-03b34a215/">
              <Image
                src={"/insta.png"}
                alt="linkedin logo"
                width={20}
                height={20}
              />
            </a>
            <p>Instagram</p>
          </div>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/victor-mwai-03b34a215/">
              <Image
                src={"/twitter.png"}
                alt="linkedin logo"
                width={20}
                height={20}
              />
            </a>
            <p>X</p>
          </div>
        </div>
      </div>

      {/* <div className="bg-primary flex items-center justify-around">
        <div className="max-w-80">
          <h1 className="text-4xl font-extrabold">
            Personality tests, down to a science
          </h1>
          <hr className="border-t border-gray-300 my-4 w-36" />
          <h3 className="text-2xl font-semibold">
            Accurate, insightful personality assessments for individuals and
            work teams
          </h3>
        </div>
        <Image
          src={"/creative.svg"}
          alt="creative girl with personality"
          width={400}
          height={400}
        />
        <div className="space-y-2">
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/victor-mwai-03b34a215/">
              <Image
                src={"/linkedin.png"}
                alt="linkedin logo"
                width={20}
                height={20}
              />
            </a>
            <p>Linkedin</p>
          </div>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/victor-mwai-03b34a215/">
              <Image
                src={"/insta.png"}
                alt="linkedin logo"
                width={20}
                height={20}
              />
            </a>
            <p>Instagram</p>
          </div>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/victor-mwai-03b34a215/">
              <Image
                src={"/twitter.png"}
                alt="linkedin logo"
                width={20}
                height={20}
              />
            </a>
            <p>X</p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default HeroBody;
