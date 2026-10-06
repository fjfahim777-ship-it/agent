"use client";
import { Workout } from "@/types/Workout";
import React, { createContext, ReactNode, useState } from "react";

interface IWorkoutContext {
    planWorkouts: Workout[];
    setPlanWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;
    savedWorkouts: Workout[];
    setSavedWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;
}

export const WorkoutContext = createContext<IWorkoutContext>({
    planWorkouts: [],
    setPlanWorkouts: () => { },
    savedWorkouts: [],
    setSavedWorkouts: () => { },
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
    const [planWorkouts, setPlanWorkouts] = useState<Workout[]>([]);
    const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);

    const sharedData = {
        planWorkouts,
        setPlanWorkouts,
        savedWorkouts,
        setSavedWorkouts,
    };

    return (
        <WorkoutContext.Provider value={sharedData}>
            {children}
        </WorkoutContext.Provider>
    );

};

export default WorkoutProvider;