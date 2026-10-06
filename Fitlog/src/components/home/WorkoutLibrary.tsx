import WorkoutCard from "./WorkoutCard";
import { Workout } from "@/types/Workout";


const WorkoutLibrary = async () => {
    const response = await fetch(
        "https://api.api-store.workers.dev/api/fitlog"
    );

    const workouts: Workout[] = await response.json();

    return (
        <section id="library" className="bg-black px-5 py-16">
            <h2 className="text-white text-4xl font-bold">
                THE LIBRARY
            </h2>

            <p className="text-zinc-400 mt-2">
                Twelve lifts covering every major muscle group.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {workouts.map((workout) => (
                    <WorkoutCard key={workout.id} workout={workout} />
                ))}
            </div>
        </section>
    );
};

export default WorkoutLibrary;