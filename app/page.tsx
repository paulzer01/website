"use client";

import Typewriter from "@components/typewriter";
import Header from "@components/header";

const Home: React.FC = () => {
  const date = new Date();

  const texts = [
    new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(date),
    new Intl.DateTimeFormat("es", { dateStyle: "long" }).format(date),
    new Intl.DateTimeFormat("ko", { dateStyle: "long" }).format(date),
    new Intl.DateTimeFormat("fr", { dateStyle: "long" }).format(date),
    new Intl.DateTimeFormat("vi", { dateStyle: "long" }).format(date),
    new Intl.DateTimeFormat("zh", { dateStyle: "long" }).format(date),
    new Intl.DateTimeFormat("ja", { dateStyle: "long" }).format(date),
    new Intl.DateTimeFormat("de", { dateStyle: "long" }).format(date),
    new Intl.DateTimeFormat("it", { dateStyle: "long" }).format(date),
    new Intl.DateTimeFormat("id", { dateStyle: "long" }).format(date),
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)]">
      <main className="flex flex-col items-center justify-center gap-16 w-full">
        <div className="p-8 w-full flex items-center justify-center">
          <Typewriter texts={texts} infinite />
        </div>
        <Header />
      </main>
    </div>
  );
};

export default Home;
