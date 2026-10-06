"use client";
import { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import { Workout } from "@/types/Workout";
import Image from "next/image";
import Link from "next/link";
import Button1 from "@/components/shared/Button-1";
import Button2 from "@/components/shared/Button-2";
import { toast } from "react-toastify";

interface PlanWorkoutCardProps {
    workout: Workout;
    isSaved: boolean;
}

const PlanWorkoutCard = ({ workout, isSaved }: PlanWorkoutCardProps) => {
    const {
        planWorkouts,
        setPlanWorkouts,
        savedWorkouts,
        setSavedWorkouts
    } = useContext(WorkoutContext);

    const handleMarkAsDone = () => {
        setPlanWorkouts(
            planWorkouts.filter((item) => item.id !== workout.id)
        );
        toast.success("Workout marked as done");
    };

    const handleRemove = () => {

        if (isSaved) {
            setSavedWorkouts(
                savedWorkouts.filter((item) => item.id !== workout.id)
            );
            toast.success("Removed from saved");
            return;
        }

        setPlanWorkouts(
            planWorkouts.filter((item) => item.id !== workout.id)
        );
        toast.success("Removed from today's plan");
    };

    return (
        <div className="border border-zinc-800 rounded-2xl p-5 mt-6 bg-[#12141c] flex flex-wrap gap-4">
            <div className="relative w-full h-64 sm:w-32 sm:h-24 shrink-0 overflow-hidden rounded-xl">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                />
            </div>

            <div>
                <h3 className="text-white text-lg font-bold">
                    {workout.name}
                </h3>

                <p className="text-zinc-400 text-sm mt-1">
                    {workout.equipment}
                </p>

                <div className="flex gap-4 mt-3 text-zinc-400 text-sm">
                    <span>⏱ {workout.duration} min</span>
                    <span>🔥 {workout.caloriesBurned} kcal</span>
                    <span>☆ {workout.rating}</span>
                </div>
            </div>
            <div className="flex items-center gap-3 ml-auto max-sm:ml-0 max-sm:mt-2 max-sm:w-full max-sm:justify-center md:ml-0 md:w-full md:justify-center lg:ml-auto lg:w-auto lg:justify-start">
                {!isSaved && (
                    <>
                        <Link href={`/workout/${workout.id}`}>
                            <Button2 className="px-6 py-4 text-sm max-sm:px-3.5 max-sm:py-2.5 max-sm:text-xs">
                                View Details
                            </Button2>
                        </Link>

                        <Button1
                            onClick={handleMarkAsDone}
                            className="px-6 py-4 text-sm max-sm:px-3.5 max-sm:py-2.5 max-sm:text-xs"
                        >
                            ✓ Mark as Done
                        </Button1>
                    </>
                )}

                {isSaved ? (
                    <button
                        onClick={handleRemove}
                        className="border border-zinc-700 text-white px-5 py-3 rounded-2xl font-medium hover:bg-red-500 transition max-sm:w-90"
                    >
                        Remove
                    </button>
                ) : (
                    <button
                        onClick={handleRemove}
                        className="w-8 h-8 text-zinc-500 flex items-center justify-center hover:text-white text-xl cursor-pointer max-sm:w-6 max-sm:h-6 max-sm:text-lg"
                    >
                        X
                    </button>
                )}
            </div>
        </div >
    );
};

export default PlanWorkoutCard;