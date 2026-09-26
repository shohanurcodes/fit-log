"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Clock3, Flame, Star, Check, X, ChevronDown } from "lucide-react";
import { toast } from "react-toastify";
import { useWorkout } from "@/context/WorkoutContext";

const MyPlanPage = () => {
  const {
    todayPlan,
    savedWorkouts,
    removeFromPlan,
    removeFromSaved,
  } = useWorkout();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const totalMinutes = todayPlan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = todayPlan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const currentWorkouts =
    activeTab === "plan" ? todayPlan : savedWorkouts;

  const handleMarkAsDone = (id: number) => {
    const workout = todayPlan.find((item) => item.id === id);

    removeFromPlan(id);

    if (workout) {
      toast.success(`${workout.name} marked as done.`);
    }
  };

  const handleRemove = (id: number) => {
    if (activeTab === "plan") {
      removeFromPlan(id);
      toast.success("Workout removed from today's plan.");
    } else {
      removeFromSaved(id);
      toast.success("Workout removed from saved.");
    }
  };

  return (
    <main className="min-h-screen bg-[#0d0e10] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-7">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#ccff00]">
            Training Dashboard
          </p>

          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl">
                My Plan
              </h1>

              <p className="mt-3 max-w-xl text-xs leading-5 text-[#777c86] sm:text-sm">
                Manage your workouts and keep today's training organized.
              </p>
            </div>

            <Link
              href="/"
              className="w-fit rounded-full border border-[#30343c] px-4 py-2 text-[10px] font-bold uppercase tracking-wide text-[#b5bac4] transition hover:border-[#ccff00] hover:text-[#ccff00]"
            >
              Browse Workouts
            </Link>
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-7 grid grid-cols-3 gap-2 sm:gap-3">

          <div className="rounded-xl border border-[#24272e] bg-[#14161a] px-3 py-4 sm:px-5">
            <p className="text-[9px] font-bold uppercase tracking-wider text-[#666b75]">
              Exercises
            </p>

            <p className="mt-1 text-2xl font-black text-white sm:text-3xl">
              {todayPlan.length}
            </p>
          </div>

          <div className="rounded-xl border border-[#24272e] bg-[#14161a] px-3 py-4 sm:px-5">
            <p className="text-[9px] font-bold uppercase tracking-wider text-[#666b75]">
              Minutes
            </p>

            <p className="mt-1 text-2xl font-black text-white sm:text-3xl">
              {totalMinutes}
            </p>
          </div>

          <div className="rounded-xl border border-[#24272e] bg-[#14161a] px-3 py-4 sm:px-5">
            <p className="text-[9px] font-bold uppercase tracking-wider text-[#666b75]">
              Calories
            </p>

            <p className="mt-1 text-2xl font-black text-white sm:text-3xl">
              {totalCalories}
            </p>
          </div>

        </div>

        {/* Tabs + Sort */}
        <div className="mb-5 flex items-center justify-between gap-3">

          {/* Tabs */}
          <div className="flex rounded-lg border border-[#24272e] bg-[#14161a] p-1">

            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className={`rounded-md px-3 py-2 text-[10px] font-bold uppercase tracking-wide transition sm:px-4 ${
                activeTab === "plan"
                  ? "bg-[#25282e] text-white shadow-sm"
                  : "text-[#666b75] hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-3 py-2 text-[10px] font-bold uppercase tracking-wide transition sm:px-4 ${
                activeTab === "saved"
                  ? "bg-[#25282e] text-white shadow-sm"
                  : "text-[#666b75] hover:text-white"
              }`}
            >
              Saved
            </button>

          </div>

          {/* Sort */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-[#24272e] bg-[#14161a] px-3 py-2 text-[10px] text-[#777c86] transition hover:border-[#3a3e47] hover:text-white"
          >
            <span>Sort By</span>

            <span className="font-medium text-white">
              Duration
            </span>

            <ChevronDown size={12} />
          </button>

        </div>

        {/* Workout List */}
        {currentWorkouts.length === 0 ? (
          <div className="rounded-2xl border border-[#24272e] bg-[#14161a] px-6 py-16 text-center">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#30343c] bg-[#191b20]">
              <span className="text-xl text-[#666b75]">
                +
              </span>
            </div>

            <h2 className="mt-5 text-lg font-black uppercase">
              {activeTab === "plan"
                ? "Your plan is empty"
                : "No saved workouts"}
            </h2>

            <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-[#666b75]">
              {activeTab === "plan"
                ? "Add workouts from the library to build your today's plan."
                : "Save workouts from the library and they will appear here."}
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex rounded-full bg-[#ccff00] px-5 py-2.5 text-[10px] font-black uppercase tracking-wide text-black transition hover:bg-[#b8e600]"
            >
              Browse Workouts
            </Link>

          </div>
        ) : (
          <div className="space-y-3">

            {currentWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="group overflow-hidden rounded-xl border border-[#24272e] bg-[#14161a] transition hover:border-[#343841]"
              >
                <div className="flex min-h-[110px]">

                  {/* Image */}
                  <div className="relative w-[115px] shrink-0 sm:w-[145px]">
                    <Image
                      src={workout.image}
                      alt={workout.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Main Content */}
                  <div className="flex min-w-0 flex-1 items-center justify-between gap-4 px-4 py-3 sm:px-5">

                    {/* Workout Information */}
                    <div className="min-w-0">

                      <p className="mb-1 text-[8px] font-bold uppercase tracking-[0.15em] text-[#ccff00]">
                        {workout.difficulty}
                      </p>

                      <h2 className="truncate text-sm font-black uppercase tracking-wide text-white sm:text-base">
                        {workout.name}
                      </h2>

                      <p className="mt-0.5 truncate text-[10px] text-[#777c86]">
                        {workout.equipment}
                      </p>

                      {/* Stats */}
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-[9px] text-[#777c86]">

                        <span className="flex items-center gap-1">
                          <Clock3
                            size={11}
                            className="text-[#ccff00]"
                          />
                          {workout.duration} min
                        </span>

                        <span className="flex items-center gap-1">
                          <Flame
                            size={11}
                            className="text-[#ccff00]"
                          />
                          {workout.caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-1">
                          <Star
                            size={11}
                            className="text-[#ccff00]"
                          />
                          {workout.rating}
                        </span>

                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex shrink-0 items-center gap-2">

                      <Link
                        href={`/workout/${workout.id}`}
                        className="hidden rounded-full border border-[#30343c] px-3 py-2 text-[9px] font-bold uppercase tracking-wide text-[#b5bac4] transition hover:border-white hover:text-white sm:block"
                      >
                        View Details
                      </Link>

                      {activeTab === "plan" && (
                        <button
                          type="button"
                          onClick={() => handleMarkAsDone(workout.id)}
                          className="flex items-center gap-1.5 rounded-full bg-[#ccff00] px-3 py-2 text-[9px] font-black uppercase tracking-wide text-black transition hover:bg-[#b8e600]"
                        >
                          <Check size={11} strokeWidth={3} />
                          <span className="hidden sm:inline">
                            Mark as Done
                          </span>
                          <span className="sm:hidden">
                            Done
                          </span>
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => handleRemove(workout.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-[#666b75] transition hover:bg-[#202228] hover:text-white"
                        aria-label={`Remove ${workout.name}`}
                      >
                        <X size={13} />
                      </button>

                    </div>

                  </div>
                </div>

                {/* Mobile Details Link */}
                <div className="border-t border-[#202228] px-4 py-2 sm:hidden">
                  <Link
                    href={`/workout/${workout.id}`}
                    className="text-[9px] font-bold uppercase tracking-wide text-[#777c86] hover:text-white"
                  >
                    View Details →
                  </Link>
                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
};

export default MyPlanPage;