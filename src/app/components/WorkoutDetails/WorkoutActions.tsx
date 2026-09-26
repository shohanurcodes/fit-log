"use client";

import { Bookmark, CalendarPlus } from "lucide-react";
import { useWorkout } from "@/context/WorkoutContext";
import { Workout } from "@/types/workout";

interface WorkoutActionsProps {
  workout: Workout;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const { addToPlan, saveWorkout } = useWorkout();

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => addToPlan(workout)}
        className="flex items-center gap-2 rounded-full bg-[#ccff00] px-5 py-3 text-xs font-bold uppercase text-black transition hover:bg-[#b8e600]"
      >
        <CalendarPlus size={14} />
        Add to today&apos;s plan
      </button>

      <button
        type="button"
        onClick={() => saveWorkout(workout)}
        className="flex items-center gap-2 rounded-full border border-[#30343c] bg-transparent px-5 py-3 text-xs font-bold uppercase text-white transition hover:bg-[#181a1f]"
      >
        <Bookmark size={14} />
        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;