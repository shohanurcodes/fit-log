import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkout } from "@/lib/api";
import WorkoutActions from "@/app/components/WorkoutDetails/WorkoutActions";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailsPage = async ({
  params,
}: WorkoutDetailsPageProps) => {
  const { id } = await params;

  let workout;

  try {
    workout = await getWorkout(id);
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0d0e10] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-[320px] overflow-hidden rounded-xl sm:h-[420px] lg:h-[520px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl font-black uppercase leading-tight tracking-wide text-white sm:text-4xl">
              {workout.name}
            </h1>

            <p className="mt-2 text-sm leading-6 text-[#8d929d]">
              {workout.description}
            </p>

            {/* Muscle groups */}
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

            {/* Specs */}
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

            {/* Instructions */}
            <div className="mt-5">
              <h2 className="text-sm font-black uppercase tracking-wide text-white">
                Instructions
              </h2>

              <ol className="mt-3 space-y-2.5">
                {workout.instructions.slice(0, 4).map(
                  (instruction, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-xs leading-5 text-[#8d929d]"
                    >
                      <span className="min-w-[14px] text-[#666b75]">
                        {index + 1}.
                      </span>

                      <span>{instruction}</span>
                    </li>
                  )
                )}
              </ol>
            </div>

            {/* Actions */}
            <WorkoutActions workout={workout} />
          </div>
        </div>
      </div>
    </main>
  );
};

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