import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[calc(100vh-152px)] items-center justify-center bg-[#0d0e10] px-4 py-16 text-white">
      <div className="w-full max-w-lg text-center">

        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ccff00]">
          FitLog
        </p>

        <h1 className="mt-4 text-7xl font-black leading-none tracking-tight sm:text-8xl">
          404
        </h1>

        <h2 className="mt-5 text-xl font-black uppercase sm:text-2xl">
          Workout Not Found
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#777c86]">
          The page or workout you&apos;re looking for doesn&apos;t exist.
          Head back to the workout library and find something to train.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex rounded-full bg-[#ccff00] px-6 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#b8e600]"
        >
          Back to Workout Library
        </Link>

      </div>
    </main>
  );
};

export default NotFound;