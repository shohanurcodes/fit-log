"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Workout } from "@/types/workout";

interface WorkoutContextType {
  todayPlan: Workout[];
  savedWorkouts: Workout[];
  addToPlan: (workout: Workout) => void;
  saveWorkout: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(
  undefined
);

export const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<Workout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);

  const addToPlan = (workout: Workout) => {
    setTodayPlan((prev) => [...prev, workout]);
  };

  const saveWorkout = (workout: Workout) => {
    setSavedWorkouts((prev) => [...prev, workout]);
  };

  const removeFromPlan = (id: number) => {
    setTodayPlan((prev) => prev.filter((workout) => workout.id !== id));
  };

  const removeFromSaved = (id: number) => {
    setSavedWorkouts((prev) =>
      prev.filter((workout) => workout.id !== id)
    );
  };

  return (
    <WorkoutContext.Provider
      value={{
        todayPlan,
        savedWorkouts,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "useWorkout must be used inside WorkoutProvider"
    );
  }

  return context;
};