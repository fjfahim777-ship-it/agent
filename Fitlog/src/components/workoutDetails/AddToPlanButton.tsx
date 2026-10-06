"use client";
import { Workout } from "@/types/Workout";
import { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import Button from "@/components/shared/Button-1";
import { toast } from "react-toastify";
import Image from "next/image";
import addicon from "@/assets/add-icon.png"

interface AddToPlanButtonProps {
    workout: Workout;
}

const AddToPlanButton = ({ workout }: AddToPlanButtonProps) => {
    const { planWorkouts, setPlanWorkouts } = useContext(WorkoutContext);
    const handleAddToPlan = () => {
        const alreadyAdded = planWorkouts.some(
            (item) => item.id === workout.id
        );
        if (alreadyAdded) {
            toast.info("Already added to today's plan");
            return;
        }

        setPlanWorkouts([...planWorkouts, workout]);
        toast.success("Added to today's plan");
    };
    return (
        <Button
            onClick={handleAddToPlan}
            disabled={planWorkouts.length >= 5} className="mx-auto lg:mx-0"> <Image src={addicon} alt="Add" width={18} height={18} /> Add to today's plan
        </Button>
    );
};

export default AddToPlanButton;