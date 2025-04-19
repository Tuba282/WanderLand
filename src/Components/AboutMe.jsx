import { motion } from "motion/react";
import React from "react";
import StyledButton from "../Components/StyledButton"
import Ripped from "../Components/Ripped"

export function AboutMe() {
    motion
    return (
        <div>
            <div id="AboutJourney" className="relative mx-auto w-full  bg-[url(https://img.freepik.com/free-photo/young-traveler_1150-5655.jpg?t=st=1744741409~exp=1744745009~hmac=929b68573e1a787565cc5c757881052c400b5bebfd08a7f2fc84f83ac00e4ea9&w=1380)] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center ">
                <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
                <div className="px-4 py-20 md:py-30 xl:py-50">
                    <h1
                        className="relative z-10 mx-auto max-w-4xl text-2xl text-center text-amber-50 md:text-7xl uppercase font-bold font-[Fjalla] dark:text-white text-shadow-2xs text-shadow-black">
                        {"Your Gateway to Explore , Dream and Discover!"
                            .split(" ")
                            .map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                        ease: "easeInOut",
                                    }}
                                    className="mr-2 inline-block">
                                    {word}
                                </motion.span>
                            ))}
                    </h1>
                    <motion.p
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.8,
                        }}
                        className="relative z-10 mx-auto max-w-xl py-4 text-center font-medium text-lg font-[Quicksand] text-shadow-2xs text-shadow-black text-white">
                        Welcome to our travel website, your ultimate partner in crafting unforgettable journeys. We believe that traveling is not just about visiting new places; it's about immersing yourself in the beauty, culture, and experiences that make each destination unique.
                    </motion.p>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 1,
                        }}
                        className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
                        <div className="bg-white rounded-xl">
                            <StyledButton href="/about" className="bg-white" text1="Explore More" text2="About us" />
                        </div>
                        <div className="bg-white rounded-xl px-6">
                            <StyledButton href="/contact" className="" text1="Contact" text2="Support" />
                        </div>
                    </motion.div>

                </div>
            </div>
            <Ripped className={''} />
            <div id="aboutMe" className="w-full grid lg:flex justify-center items-center px-5 xl:px-20">
                <div className="w-[100%] lg:w-[40%] p-5 lg:p-10">
                    <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/p1-img-01.png" className="w-full h-full object-cover" />
                </div>
                <div className="w-[100%] lg:w-[60%] p-5 lg:p-10 text-center lg:text-left ">
                    <p className="text-slate-600 text-xs font-[Paprika]">About my Journey</p>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-[Fjalla] text-[#59815B] uppercase">How I Started Traveling</h2>
                    <p className=" mt-3 w-[100%] lg:w-[600px]"> Every journey is a story waiting to be written, a chance to break free from the routine and create unforgettable experiences that stay etched in your heart forever. From grand adventures in bustling cities to quiet retreats in serene countryside settings, the joy of traveling lies not just in the destination, but in the journey itself—a journey that leaves you enriched, inspired, and forever changed.
                    </p>
                    <StyledButton href="/about" className="mt-4 text-[#665044]" text1="Know More" text2="About me" />
                </div>

            </div>
            <div className="w-full grid lg:flex justify-center items-center px-5 xl:px-20">

                <div className=" w-[100%] lg:w-[45%] p-5 lg:p-10 text-center lg:text-left">
                    <p className="text-slate-600 text-xs font-[Paprika]">Embark with others!</p>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-[Fjalla] text-[#59815B] uppercase">Finding your way through</h2>
                    <p className=" mt-3 w-[100%] lg:w-[550px]"> Every journey is a story waiting to be written, a chance to break free from the routine and create unforgettable experiences that stay etched in your heart forever. From grand adventures in bustling cities to quiet retreats in serene countryside settings, the joy of traveling lies not just in the destination, but in the journey itself—a journey that leaves you enriched, inspired, and forever changed.
                    </p>
                    <StyledButton href="/about" className="mt-4 text-[#665044]" text1="Know More" text2="About me" />

                </div>
                <div className=" w-[100%] lg:w-[55%] p-5 lg:p-10">
                    <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/p3-img-04.png" className="w-full h-full object-cover" />

                </div>
            </div>
        </div>
    );
}

