import { getWorkouts } from "@/lib/api";
import WorkoutCard from "./WorkoutCard";

const WorkoutLibrary = async () => {
  const workouts = await getWorkouts();

  return (
    <section id="library" className="bg-[#111111] px-4 py-16">
      
      <div className="mx-auto max-w-7xl">

        <p className="text-sm font-bold tracking-[0.2em] text-[#ccff00]">
          THE LIBRARY
        </p>

        <h2 className="mt-2 text-3xl font-black uppercase text-white">
          Choose Your Workout
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkoutLibrary;