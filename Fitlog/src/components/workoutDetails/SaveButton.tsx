"use client";
import { Workout } from "@/types/Workout";
import { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import Button2 from "@/components/shared/Button-2";
import SaveIcon from "@/assets/save-icon.png"
import Image from "next/image";
import { toast } from "react-toastify";

interface SaveButtonProps {
    workout: Workout;
}

const SaveButton = ({ workout }: SaveButtonProps) => {
    const { savedWorkouts, setSavedWorkouts } = useContext(WorkoutContext);
    const handleSave = () => {
        const alreadySaved = savedWorkouts.some(
            (item) => item.id === workout.id
        );
        if (alreadySaved) {
            toast.info("Already saved");
            return;
        }
        setSavedWorkouts([...savedWorkouts, workout]);
        toast.success("Saved for later");
    };
    return (
        <Button2 onClick={handleSave} className="w-52 mx-auto lg:mx-0">
            <Image
                src={SaveIcon}
                alt="Save"
                width={20}
                height={20}
                className="brightness-0 invert"
            />
            Save for later
        </Button2>
    );
};

export default SaveButton;