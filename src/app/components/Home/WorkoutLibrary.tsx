import { getWorkouts } from "@/lib/api";
import WorkoutCard from "./WorkoutCard";

const WorkoutLibrary = async () => {
  const workouts = await getWorkouts();

  return (
    <section
      id="library"
      className="bg-[#111111] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold tracking-[0.2em] text-[#ccff00] sm:text-sm">
          THE LIBRARY
        </p>

        <h2 className="mt-2 text-3xl font-black uppercase leading-none text-white sm:text-4xl">
          Choose Your Workout
        </h2>

        <p className="mt-3 text-sm text-[#8d929d]">
          Twelve lifts covering every major muscle group.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutLibrary;