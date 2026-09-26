"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
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

export const WorkoutProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [todayPlan, setTodayPlan] = useState<Workout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);

  // Add workout to today's plan
  const addToPlan = (workout: Workout) => {
    const alreadyExists = todayPlan.some(
      (item) => item.id === workout.id
    );

    if (alreadyExists) {
      toast.warning("Workout is already in today's plan.");
      return;
    }

    setTodayPlan((prev) => [...prev, workout]);

    toast.success("Workout added to today's plan.");
  };

  // Save workout for later
  const saveWorkout = (workout: Workout) => {
    const alreadyExists = savedWorkouts.some(
      (item) => item.id === workout.id
    );

    if (alreadyExists) {
      toast.warning("Workout is already saved.");
      return;
    }

    setSavedWorkouts((prev) => [...prev, workout]);

    toast.success("Workout saved for later.");
  };

  // Remove workout from today's plan
  const removeFromPlan = (id: number) => {
    setTodayPlan((prev) =>
      prev.filter((workout) => workout.id !== id)
    );
  };

  // Remove workout from saved
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