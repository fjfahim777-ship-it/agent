import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/assets/banner.png";
import { oswald, inter } from "@/app/fonts";

const Hero = () => {
    return (
        <section className="bg-black w-full px-5 py-6 ">
            <div
                className="w-full border border-zinc-800 rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8"
                style={{ backgroundColor: "#15171D" }}
            >
                <div className="flex flex-col items-start max-w-xl">
                    <span className={`${inter.className} text-lime-400 font-bold text-xs tracking-widest uppercase mb-4`}>
                        WORKOUT LIBRARY
                    </span>
                    <h1 className={`${oswald.className} text-white text-4xl md:text-[60px] font-black tracking-tight leading-none mb-6`}>
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h1>
                    <p className={`${inter.className} text-zinc-400 text-base md:text-[18px] mb-8 leading-relaxed max-w-lg`}>
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br /> into today's plan, and watch the week's work add up.
                    </p>
                    <Link
                        href="#library"
                        className="bg-lime-400 text-black font-bold px-3 py-3 sm:px-3 sm:py-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 mx-auto sm:mx-0"
                    >
                        BROWSE WORKOUTS
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 12h14m-6-6 6 6-6 6"
                            />
                        </svg>
                    </Link>
                </div>

                <div className="w-full lg:w-auto flex justify-center">
                    <Image
                        src={logo}
                        alt="Hero banner"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;