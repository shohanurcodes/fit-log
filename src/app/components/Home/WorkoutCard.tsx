import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block h-full"
    >
      <div className="h-full overflow-hidden rounded-2xl border border-[#282b32] bg-[#15171c] transition duration-200 hover:-translate-y-1 hover:border-[#3a3e47]">

        {/* Image */}
        <div className="relative h-[170px] w-full overflow-hidden bg-[#202329]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex min-h-[175px] flex-col px-4 pb-4 pt-4">

          {/* Muscle Groups */}
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.slice(0, 2).map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#ccff00] px-2.5 py-1 text-[9px] font-black uppercase leading-none text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="mt-3 line-clamp-1 text-[15px] font-black uppercase tracking-wide text-white">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="mt-1 line-clamp-1 text-[11px] text-[#8d929d]">
            {workout.equipment}
          </p>

          {/* Divider */}
          <div className="my-3 h-px bg-[#24272e]" />

          {/* Stats */}
          <div className="mt-auto flex items-center gap-3 text-[10px] text-[#8d929d]">

            {/* Duration */}
            <div className="flex items-center gap-1">
              <Clock3
                size={12}
                strokeWidth={1.8}
              />
              <span>{workout.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1">
              <Flame
                size={12}
                strokeWidth={1.8}
              />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <Star
                size={12}
                strokeWidth={1.8}
              />
              <span>{workout.rating}</span>
            </div>

          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;