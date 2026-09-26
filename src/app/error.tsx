"use client";

import { useEffect } from "react";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[calc(100vh-152px)] items-center justify-center bg-[#0d0e10] px-4">
      <div className="text-center">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#ccff00]">
          FitLog
        </p>

        <h1 className="mt-4 text-3xl font-black uppercase text-white">
          Workout Library Unavailable
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#8d929d]">
          The workout service is temporarily unavailable. Please try again.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 rounded-full bg-[#ccff00] px-6 py-3 text-xs font-black uppercase text-black transition hover:bg-[#b8e600]"
        >
          Try Again
        </button>
      </div>
    </main>
  );
};

export default ErrorPage;