import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`/workout/${workout.id}`} className="block">
      <div className="overflow-hidden rounded-2xl border border-[#282b32] bg-[#15171c]">

        {/* Image */}
        <div className="relative h-[163px] w-full">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-5 pb-4 pt-5">

          {/* Muscle Groups */}
          <div className="flex gap-2">
            {workout.muscleGroups.slice(0, 2).map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-extrabold uppercase leading-none text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="mt-4 text-[17px] font-black uppercase tracking-wide text-white">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="mt-1 text-xs text-[#8d929d]">
            {workout.equipment}
          </p>

          {/* Divider */}
          <div className="my-3 h-px bg-[#24272e]" />

          {/* Stats */}
          <div className="flex items-center gap-4 text-xs text-[#8d929d]">

            <div className="flex items-center gap-1.5">
              <Clock3 size={13} strokeWidth={1.8} />
              <span>{workout.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Flame size={13} strokeWidth={1.8} />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Star size={13} strokeWidth={1.8} />
              <span>{workout.rating}</span>
            </div>

          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;