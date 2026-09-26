"use client";

import Link from "next/link";
import Image from "next/image";
import { useWorkout } from "@/context/WorkoutContext";

const MyPlanPage = () => {
  const { todayPlan, removeFromPlan } = useWorkout();

  const totalMinutes = todayPlan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = todayPlan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <main className="min-h-screen bg-[#0d0e11] text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-6">

        {/* ================= NAVBAR ================= */}
        <nav className="flex h-[46px] items-center justify-between border border-[#1688d8] bg-[#0d0f13] px-7">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-[12px] font-black tracking-wide"
          >
            <span className="text-[#ccff00]">⚡</span>
            FITLOG
          </Link>

          {/* Center Navigation */}
          <div className="flex items-center gap-8 text-[10px]">
            <Link
              href="/"
              className="text-[#858991] hover:text-white"
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className="rounded-full bg-[#1e2b0c] px-4 py-1.5 font-bold text-[#ccff00]"
            >
              My Plan
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-7 text-[10px]">
            <Link href="/my-plan" className="text-[#858991]">
              Plan
              <span className="ml-2 rounded-full bg-[#ccff00] px-1.5 py-0.5 font-bold text-black">
                {todayPlan.length}
              </span>
            </Link>

            <Link href="/my-plan" className="text-[#858991]">
              Saved
              <span className="ml-2 rounded-full bg-[#25282e] px-1.5 py-0.5 text-[#b8bbc1]">
                0
              </span>
            </Link>
          </div>
        </nav>

        {/* ================= HEADER ================= */}
        <section className="mt-7">
          <h1 className="text-[20px] font-black uppercase">
            MY PLAN
          </h1>

          <p className="mt-1 text-[10px] text-[#777c86]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </section>

        {/* ================= STATS ================= */}
        <div className="mt-4 overflow-hidden rounded-xl border border-[#282b32] bg-[#15171c]">
          <div className="grid grid-cols-3">

            {/* Exercises */}
            <div className="border-r border-[#282b32] px-5 py-4">
              <p className="text-[9px] text-[#777c86]">
                Exercises
              </p>

              <p className="mt-1 text-[25px] font-black text-[#ccff00]">
                {todayPlan.length}
              </p>
            </div>

            {/* Minutes */}
            <div className="border-r border-[#282b32] px-5 py-4">
              <p className="text-[9px] text-[#777c86]">
                Minutes
              </p>

              <p className="mt-1 text-[25px] font-black">
                {totalMinutes}
              </p>
            </div>

            {/* Calories */}
            <div className="px-5 py-4">
              <p className="text-[9px] text-[#777c86]">
                Calories
              </p>

              <p className="mt-1 text-[25px] font-black">
                {totalCalories}
              </p>
            </div>

          </div>
        </div>

        {/* ================= TAB + SORT ================= */}
        <div className="mt-5 flex items-center justify-between">

          {/* Tabs */}
          <div className="flex rounded-lg border border-[#282b32] bg-[#15171c] p-1">

            <button className="rounded-md bg-[#25282e] px-4 py-2 text-[9px] font-bold text-white">
              Today's Plan
            </button>

            <button className="px-4 py-2 text-[9px] font-bold text-[#777c86]">
              Saved
            </button>

          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 text-[9px] text-[#777c86]">
            <span>Sort By</span>

            <button className="rounded-lg border border-[#282b32] bg-[#15171c] px-3 py-2 text-[9px] text-white">
              Duration
              <span className="ml-2 text-[#777c86]">⌄</span>
            </button>
          </div>

        </div>

        {/* ================= WORKOUTS ================= */}
        <div className="mt-4 space-y-3">

          {todayPlan.length === 0 ? (

            /* Empty State */
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-[#282b32] bg-[#15171c] text-center">

              <h2 className="text-[18px] font-black uppercase">
                NOTHING HERE YET
              </h2>

              <p className="mt-2 max-w-md text-[10px] text-[#777c86]">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-5 rounded-full bg-[#ccff00] px-6 py-2.5 text-[10px] font-black text-black"
              >
                Go to workouts
              </Link>

            </div>

          ) : (

            /* Workout Cards */
            todayPlan.map((workout) => (

              <div
                key={workout.id}
                className="flex min-h-[72px] items-center gap-4 rounded-xl border border-[#282b32] bg-[#15171c] px-3 py-2.5"
              >

                {/* Image */}
                <div className="relative h-[52px] w-[90px] shrink-0 overflow-hidden rounded-lg bg-[#25282e]">

                  {workout.image ? (
                    <Image
                      src={workout.image}
                      alt={workout.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-[8px] text-[#777c86]">
                      Image
                    </div>
                  )}

                </div>

                {/* Information */}
                <div className="min-w-0 flex-1">

                  <h3 className="text-[11px] font-black uppercase">
                    {workout.name}
                  </h3>

                  <p className="mt-0.5 text-[9px] text-[#777c86]">
                    {workout.equipment}
                  </p>

                  <div className="mt-1 flex items-center gap-3 text-[8px] text-[#b3b6bd]">

                    <span>
                      <span className="text-[#ccff00]">◷</span>{" "}
                      {workout.duration} min
                    </span>

                    <span>
                      <span className="text-[#ccff00]">♨</span>{" "}
                      {workout.caloriesBurned} kcal
                    </span>

                    <span>
                      <span className="text-[#ccff00]">★</span>{" "}
                      {workout.rating}
                    </span>

                  </div>

                </div>

                {/* Actions */}
                <div className="flex shrink-0 items-center gap-2">

                  <Link
                    href={`/workout/${workout.id}`}
                    className="rounded-full border border-[#30343d] px-4 py-2 text-[8px] font-bold text-white"
                  >
                    View Details
                  </Link>

                  <button
                    type="button"
                    className="rounded-full bg-[#ccff00] px-4 py-2 text-[8px] font-black text-black"
                  >
                    ✓ Mark as Done
                  </button>

                  <button onClick={()=> removeFromPlan(workout.id)}
                    type="button"
                    className="px-1 text-sm text-[#777c86]"
                  >
                    ×
                  </button>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

     
    </main>
  );
};

export default MyPlanPage;