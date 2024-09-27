"use client";

// import Image from "next/image";
import Typewriter from "./typewriter";

const Home: React.FC = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center sm:items-start w-full">
        <div className="p-8 w-full flex items-center justify-center">
          {/* TODO: Something else */}
          <Typewriter text="Welcome to the digital garden" infinite />
        </div>
        {/* <div className="p-8 w-full flex items-center justify-center">
          <Image
            width={400}
            height={300}
            src={"/flowers.webp"}
            alt="Field of Flowers"
            className="w-full h-auto"
          />
        </div> */}
      </main>
    </div>
  );
};

export default Home;
