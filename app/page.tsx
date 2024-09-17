import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
        <div className="p-8 bg-black">
          <Image
            className="light:invert"
            src="https://nextjs.org/icons/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
        </div>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <div className="space-y-4">
            <li>Firstly.</li>
            <li>Secondly.</li>
            <li>Thank you for your time.</li>
          </div>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-none border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://paulzer01.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Build
          </a>
          <a
            className="rounded-none border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-28"
            href="https://paulzer01.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Build
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://en.wikipedia.org/wiki/Learning"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="p-2 bg-black">
            <Image
              className="light:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={8}
              height={8}
            />
          </div>
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://en.wikipedia.org/wiki/Build"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="p-2 bg-black">
            <Image
              className="light:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={8}
              height={8}
            />
          </div>
          Build
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://en.wikipedia.org/wiki/Learning"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="p-2 bg-black">
            <Image
              className="light:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={8}
              height={8}
            />
          </div>
          Learn
        </a>
      </footer>
    </div>
  );
}
