import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
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
            <li>Thank you.</li>
          </div>
        </ol>
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
      </footer>
    </div>
  );
}
