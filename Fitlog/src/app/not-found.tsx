import Link from "next/link";
import Button from "@/components/shared/Button-1";

const NotFound = () => {
    return (
        <main className="bg-black min-h-screen flex flex-col items-center justify-center text-center px-5">
            <p className="text-lime-400 text-lg font-bold tracking-widest">
                404
            </p>

            <h1 className="text-white text-4xl font-bold mt-3">
                WORKOUT NOT FOUND
            </h1>

            <p className="text-zinc-400 mt-3 mb-4">
                The workout you're looking for doesn't exist.
            </p>

            <Link href="/">
                <Button>
                    Back to workouts
                </Button>
            </Link>
        </main>
    );
};

export default NotFound;