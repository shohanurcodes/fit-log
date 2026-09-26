
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
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-2 px-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 sm:gap-3"
        >
          <Image
            src="/logo.png"
            alt="FitLog Logo"
            width={38}
            height={38}
            priority
            className="h-8 w-8 object-contain sm:h-9 sm:w-9"
          />

          <span className="text-base font-bold tracking-wide text-white sm:text-xl">
            FITLOG
          </span>
        </Link>

        {/* Navigation - Hidden on mobile */}
        <div className="hidden items-center gap-1 sm:flex sm:gap-2">
          <Link
            href="/"
            className={`rounded-full px-2.5 py-1.5 text-[10px] font-semibold uppercase transition sm:px-4 sm:py-2 sm:text-sm ${
              pathname === "/"
                ? "bg-[#ccff00] text-black"
                : "text-white/60 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-2.5 py-1.5 text-[10px] font-semibold uppercase transition sm:px-4 sm:py-2 sm:text-sm ${
              pathname === "/my-plan"
                ? "bg-[#ccff00] text-black"
                : "text-white/60 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Counters */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-2.5 py-1.5 text-[9px] font-bold uppercase text-black sm:px-3 sm:py-2 sm:text-xs"
          >
            Plan <span className="ml-0.5 sm:ml-1">{todayPlan.length}</span>
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-white/30 px-2.5 py-1.5 text-[9px] font-bold uppercase text-white sm:px-3 sm:py-2 sm:text-xs"
          >
            Saved{" "}
            <span className="ml-0.5 sm:ml-1">{savedWorkouts.length}</span>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
