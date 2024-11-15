import Image from "next/image";
import React from "react";
import GetStarted from "./GetStarted";

function HeaderComponent() {
  return (
    <div className="m-3 flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src={"/lg.png"}
          alt="my personality logo"
          width={70}
          height={70}
        />
        <h1 className="text-xl font-bold">My Personality</h1>
      </div>
      <GetStarted />
    </div>
  );
}

export default HeaderComponent;
