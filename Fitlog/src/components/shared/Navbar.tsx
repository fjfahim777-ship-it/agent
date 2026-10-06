"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import { usePathname } from "next/navigation";


const Navbar = () => {
    const pathname = usePathname();

    const isWorkoutsActive =
        pathname === "/" || pathname.startsWith("/workout");

    const isMyPlanActive = pathname === "/my-plan";

    const { planWorkouts, savedWorkouts } = useContext(WorkoutContext);
    return (
        <div className="navbar relative bg-black text-white px-3 md:px-6 shadow-sm border-b border-zinc-800">
            <div className="navbar-start gap-1.5">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost md:hidden text-lime-400 hover:bg-zinc-800 px-2 py-2"
                    >
                        <svg
                            aria-label="Menu"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>

                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-zinc-900 text-white rounded-box z-1 mt-3 w-30 p-2 shadow border border-zinc-800"
                    >
                        <li>
                            <Link href="/" onClick={() =>
                                document.activeElement instanceof HTMLElement &&
                                document.activeElement.blur()
                            }
                                className={
                                    isWorkoutsActive
                                        ? "bg-zinc-900 text-lime-400 px-3 py-2 rounded-full text-sm justify-center font-medium border border-lime-400/20"
                                        : "text-zinc-400 border border-transparent justify-center"
                                }>Workouts</Link>
                        </li>
                        <li>
                            <Link href="/my-plan"
                                onClick={() =>
                                    document.activeElement instanceof HTMLElement &&
                                    document.activeElement.blur()
                                } className={
                                    isMyPlanActive
                                        ? "bg-zinc-900 text-lime-400 px-3 py-2 rounded-full text-sm font-medium border border-lime-400/20 justify-center"
                                        : "text-zinc-400 border border-transparent justify-center"
                                }>My Plan</Link>
                        </li>
                    </ul>
                </div>

                <Link href="/" className="flex items-center gap-2">
                    <Image src={logo} alt="FitLog logo" className="w-4 md:w-6" />
                    <span className="font-bold tracking-wider text-sm md:text-base">FITLOG</span>
                </Link>
            </div>

            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    <li>
                        <Link
                            href="/"
                            className={
                                isWorkoutsActive
                                    ? "bg-zinc-900 text-lime-400 px-4 py-2 rounded-full text-sm font-medium border border-lime-400/20 hover:bg-zinc-800"
                                    : "text-zinc-400 border border-transparent hover:text-white transition text-sm font-medium px-4 py-2"
                            }
                        >
                            Workouts
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/my-plan"
                            className={
                                isMyPlanActive
                                    ? "bg-zinc-900 text-lime-400 px-4 py-2 rounded-full text-sm font-medium border border-lime-400/20 hover:bg-zinc-800"
                                    : "text-zinc-400 border border-transparent hover:text-white transition text-sm font-medium px-4 py-2"
                            }
                        >
                            My Plan
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="navbar-end flex items-center space-x-2 md:space-x-6 text-sm">
                <Link href="/my-plan" className="flex items-center space-x-2">
                    <span className="text-zinc-300">Plan</span>
                    <span className="bg-lime-400 text-black font-bold w-5 md:w-6 h-5 md:h-6 rounded-full flex items-center justify-center text-xs">
                        {planWorkouts.length}
                    </span>
                </Link>

                <Link href="/my-plan?tab=saved" className="flex items-center space-x-2">
                    <span className="text-zinc-300">Saved</span>
                    <span className="border border-zinc-700 text-zinc-300 font-bold w-5 md:w-6 h-5 md:h-6 rounded-full flex items-center justify-center text-xs">
                        {savedWorkouts.length}
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;