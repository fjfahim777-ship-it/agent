import { Workout } from "@/types/Workout";
import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/shared/Badge";

interface IWorkoutCardProps {
    workout: Workout;
}

const WorkoutCard = ({ workout }: IWorkoutCardProps) => {
    return (
        <Link
            href={`/workout/${workout.id}`} className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
            <div className="relative h-64 overflow-hidden rounded-2xl">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover object-[center_20%]"
                />
            </div>

            <div className="p-7">
                <div className="flex flex-wrap gap-2 my-3">
                    {workout.muscleGroups.map((muscle) => (
                        <Badge key={muscle}>{muscle}</Badge>
                    ))}
                </div>
                <h3 className="text-white text-xl font-extrabold uppercase">
                    {workout.name}
                </h3>
                <p className="text-zinc-400 text-sm mt-1">
                    {workout.equipment}
                </p>
                <div className="border-t border-zinc-800 my-4"></div>
                <div className="flex items-center justify-start gap-4 mb-2.5 text-sm text-zinc-400">
                    <span>⏱ {workout.duration} min</span>
                    <span>🔥 {workout.caloriesBurned} kcal</span>
                    <span>☆ {workout.rating}</span>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;