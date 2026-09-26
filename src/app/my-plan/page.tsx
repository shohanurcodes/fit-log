import Link from "next/link";

const MyPlanPage = () => {
  return (
    <main className="min-h-screen bg-[#0d0e11] px-4 py-10 text-white">
      <div className="mx-auto max-w-7xl">

        <div>
          <p className="text-sm font-bold tracking-widest text-[#ccff00]">
            FITLOG
          </p>

          <h1 className="mt-2 text-4xl font-black uppercase">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-[#8d929d]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#282b32] bg-[#15171c] p-5">
            <p className="text-sm text-[#8d929d]">Exercises</p>
            <h2 className="mt-2 text-3xl font-black">0</h2>
          </div>

          <div className="rounded-2xl border border-[#282b32] bg-[#15171c] p-5">
            <p className="text-sm text-[#8d929d]">Minutes</p>
            <h2 className="mt-2 text-3xl font-black">0</h2>
          </div>

          <div className="rounded-2xl border border-[#282b32] bg-[#15171c] p-5">
            <p className="text-sm text-[#8d929d]">Calories</p>
            <h2 className="mt-2 text-3xl font-black">0</h2>
          </div>
        </div>

        <div className="mt-10 flex gap-3">
          <button className="rounded-full bg-[#ccff00] px-5 py-2 text-sm font-bold text-black">
            Today's Plan
          </button>

          <button className="rounded-full border border-[#282b32] px-5 py-2 text-sm font-bold text-white">
            Saved
          </button>
        </div>

        <div className="mt-10 flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-[#282b32] bg-[#15171c] text-center">
          <h2 className="text-2xl font-black uppercase">
            NOTHING HERE YET
          </h2>

          <p className="mt-2 max-w-md text-sm text-[#8d929d]">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="mt-6 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black text-black"
          >
            Go to workouts
          </Link>
        </div>

      </div>
    </main>
  );
};

export default MyPlanPage;