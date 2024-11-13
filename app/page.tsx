"use client";

import Typewriter from "@components/typewriter";
import Header from "@components/header";
import { ThemeToggle } from "@components/theme-toggle";

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
    <div className="flex flex-col items-center justify-center min-h-screen pb-20 gap-16 sm:py-20 font-[family-name:var(--font-geist-mono)] dark:text-white bg-white dark:bg-gray-900">
      <ThemeToggle />
      <main className="flex flex-col items-center justify-center gap-16 w-full">
        <div className="w-full flex items-center justify-center">
          <Typewriter texts={texts} infinite />
        </div>

        {/* Rising sun effect */}
        <div className="relative h-14 overflow-hidden border-b border-gray-300 dark:border-white w-full flex items-center justify-center">
          <div className="absolute w-28 h-28 rounded-full bg-gray-700 dark:bg-white transition-colors duration-300 top-0" />
        </div>
        <Header />
      </main>
    </div>
  );
};

export default Home;
