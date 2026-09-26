import Image from "next/image";
import { Bookmark, CalendarPlus } from "lucide-react";
import { getWorkout } from "@/lib/api";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailsPage = async ({
  params,
}: WorkoutDetailsPageProps) => {
  const { id } = await params;

  const workout = await getWorkout(id);

  return (
    <main className="min-h-screen bg-[#0d0e10] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Main Details */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* ================= IMAGE ================= */}
          <div className="relative h-[420px] overflow-hidden rounded-xl lg:h-[520px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div>

            {/* Title */}
            <h1 className="text-3xl font-black uppercase leading-tight tracking-wide text-white sm:text-4xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-2 text-sm leading-6 text-[#8d929d]">
              {workout.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups.slice(0, 2).map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* ================= SPECS ================= */}
            <div className="mt-4 overflow-hidden rounded-xl border border-[#282b32] bg-[#15171c]">

              <InfoRow
                label="EQUIPMENT"
                value={workout.equipment}
              />

              <InfoRow
                label="DIFFICULTY"
                value={workout.difficulty}
              />

              <InfoRow
                label="SETS"
                value={String(workout.sets)}
              />

              <InfoRow
                label="REPS"
                value={String(workout.reps)}
              />

              <InfoRow
                label="DURATION"
                value={`${workout.duration} min`}
              />

              <InfoRow
                label="CALORIES"
                value={`${workout.caloriesBurned} kcal`}
              />

              <InfoRow
                label="RATING"
                value={String(workout.rating)}
                last
              />

            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div className="mt-5">

              <h2 className="text-sm font-black uppercase tracking-wide text-white">
                Instructions
              </h2>

              <ol className="mt-3 space-y-2.5">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-xs leading-5 text-[#8d929d]"
                  >
                    <span className="min-w-[14px] text-[#666b75]">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>

            </div>

            {/* ================= BUTTONS ================= */}
            <div className="mt-6 flex flex-wrap gap-3">

              <button
                type="button"
                className="flex items-center gap-2 rounded-md bg-[#ccff00] px-4 py-2.5 text-xs font-bold text-black transition hover:bg-[#b8e600]"
              >
                <CalendarPlus size={14} />
                Add to today&apos;s plan
              </button>

              <button
                type="button"
                className="flex items-center gap-2 rounded-md border border-[#30343c] bg-transparent px-4 py-2.5 text-xs font-medium text-white transition hover:bg-[#181a1f]"
              >
                <Bookmark size={14} />
                Save for later
              </button>

            </div>

          </div>
        </div>

      </div>
    </main>
  );
};


/* ================= INFO ROW ================= */

interface InfoRowProps {
  label: string;
  value: string;
  last?: boolean;
}

const InfoRow = ({
  label,
  value,
  last = false,
}: InfoRowProps) => {
  return (
    <div
      className={`flex items-center justify-between px-3.5 py-2.5 ${
        !last ? "border-b border-[#24272e]" : ""
      }`}
    >
      <span className="text-[9px] font-medium tracking-wider text-[#8d929d]">
        {label}
      </span>

      <span className="text-[10px] font-medium text-white">
        {value}
      </span>
    </div>
  );
};

export default WorkoutDetailsPage;