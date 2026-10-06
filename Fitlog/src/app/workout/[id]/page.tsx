import { Workout } from "@/types/Workout";
import Image from "next/image";
import { notFound } from "next/navigation";
import Badge from "@/components/shared/Badge";
import AddToPlanButton from "@/components/workoutDetails/AddToPlanButton";
import SaveButton from "@/components/workoutDetails/SaveButton";

interface WorkoutDetailsProps {
    params: Promise<{
        id: string;
    }>;
}

const getWorkouts = async () => {
    try {
        const response = await fetch(
            "https://api.api-store.workers.dev/api/fitlog"
        );

        const data: Workout[] = await response.json();

        return data;
    } catch (error) {
        console.error("Error fetching workouts data:", error);

        return [];
    }
};

const WorkoutDetails = async ({ params }: WorkoutDetailsProps) => {
    const { id } = await params;

    const workoutsData = await getWorkouts();

    const workout = workoutsData.find(
        (workout: Workout) => String(workout.id) === String(id)
    ) as Workout;

    if (!workout) {
        notFound();
    }

    return (
        <main className="bg-black min-h-screen px-5 py-16">
            <div className="max-w-350 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-15">

                    <div className="overflow-hidden rounded-2xl">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            width={800}
                            height={600}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div>
                        <h1 className="text-white text-5xl font-bold">
                            {workout.name}
                        </h1>

                        <p className="text-zinc-400 mt-5 leading-relaxed">
                            {workout.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-5">
                            {workout.muscleGroups.map((muscle) => (
                                <Badge key={muscle}>{muscle}</Badge>
                            ))}
                        </div>

                        <div className="mt-6 rounded-2xl border border-zinc-800 bg-[#12141c] py-2">

                            <div className="flex justify-between  px-5 py-3 border-b border-zinc-800">
                                <span className="text-zinc-500 font-bold">
                                    EQUIPMENT
                                </span>
                                <span className="text-white">
                                    {workout.equipment}
                                </span>
                            </div>

                            <div className="flex justify-between px-5 py-3 border-b border-zinc-800">
                                <span className="text-zinc-500 font-bold">
                                    DIFFICULTY
                                </span>
                                <span className="text-white">
                                    {workout.difficulty}
                                </span>
                            </div>

                            <div className="flex justify-between px-5 py-3 border-b border-zinc-800">
                                <span className="text-zinc-500 font-bold">
                                    SETS
                                </span>
                                <span className="text-white">
                                    {workout.sets}
                                </span>
                            </div>

                            <div className="flex justify-between px-5 py-3 border-b border-zinc-800">
                                <span className="text-zinc-500 font-bold">
                                    REPS
                                </span>
                                <span className="text-white">
                                    {workout.reps}
                                </span>
                            </div>

                            <div className="flex justify-between px-5 py-3 border-b border-zinc-800">
                                <span className="text-zinc-500 font-bold">
                                    DURATION
                                </span>
                                <span className="text-white">
                                    {workout.duration} min
                                </span>
                            </div>

                            <div className="flex justify-between px-5 py-3 border-b border-zinc-800">
                                <span className="text-zinc-500 font-bold">
                                    CALORIES
                                </span>
                                <span className="text-white">
                                    {workout.caloriesBurned} kcal
                                </span>
                            </div>

                            <div className="flex justify-between px-5 py-3">
                                <span className="text-zinc-500 font-bold">
                                    RATING
                                </span>
                                <span className="text-white">
                                    {workout.rating}
                                </span>
                            </div>

                        </div>

                        <div className="mt-8">
                            <h2 className="text-white text-2xl font-bold">
                                Instructions
                            </h2>

                            <ol className="mt-4 space-y-4">
                                {workout.instructions.map((instruction, index) => (
                                    <li
                                        key={index}
                                        className="text-zinc-400"
                                    >
                                        <span className="mr-2">
                                            {index + 1}.
                                        </span>
                                        {instruction}
                                    </li>
                                ))}
                            </ol>
                            <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-3 mt-10">
                                <div className="w-full sm:w-auto">
                                    <AddToPlanButton workout={workout} />
                                </div>
                                <div className="w-full sm:w-auto">
                                    <SaveButton workout={workout} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default WorkoutDetails;

