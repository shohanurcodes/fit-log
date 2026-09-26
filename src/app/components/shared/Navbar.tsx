
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWorkout } from "@/context/WorkoutContext";

const Navbar = () => {
  const pathname = usePathname();

  const { todayPlan, savedWorkouts } = useWorkout();

  return (
    <nav className="w-full border-b border-white/10 bg-[#111111]">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="FitLog Logo"
            width={38}
            height={38}
            priority
            className="h-9 w-9 object-contain"
          />

          <span className="text-xl font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className={`rounded-full px-5 py-2 text-sm font-semibold uppercase transition ${
              pathname === "/"
                ? "bg-[#ccff00] text-black"
                : "text-white/60 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-5 py-2 text-sm font-semibold uppercase transition ${
              pathname === "/my-plan"
                ? "bg-[#ccff00] text-black"
                : "text-white/60 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Counters */}
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-3 py-2 text-xs font-bold uppercase text-black"
          >
            Plan <span className="ml-1">{todayPlan.length}</span>
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-white/30 px-3 py-2 text-xs font-bold uppercase text-white"
          >
            Saved <span className="ml-1">{savedWorkouts.length}</span>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
