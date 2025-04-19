import { motion } from "motion/react";
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import StyledButton from "../Components/StyledButton"
import Ripped from "../Components/Ripped"
import { ScrollMap } from "../Components/ScrollMap";

const Conatct = () => {
  motion
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return (
    <div className='w-full h-full'>
      <div className="relative mx-auto w-full  bg-[url(https://img.freepik.com/free-photo/female-tourists-are-happy-refreshed-waterfall_1150-5657.jpg?t=st=1744824757~exp=1744828357~hmac=67c1674466f7147b560ba0061c721c326cb2d103bdcc747500203c587b8f94d5&w=1380)] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center ">
        <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
        <div className="px-4 py-20 md:py-30 xl:py-50">
          <h1
            className="relative z-10 mx-auto max-w-4xl text-2xl text-center text-amber-50 md:text-7xl uppercase font-bold font-[Fjalla] dark:text-white text-shadow-2xs text-shadow-black">
            {"Adventure Awaits—Let's Explore Together!"
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
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-[Quicksand] text-shadow-2xs text-shadow-black font-medium text-white">
            Welcome to the gateway of unforgettable journeys! We bring you handpicked travel experiences that combine comfort, thrill, and discovery. Whether you dream of pristine beaches, majestic mountains, or vibrant cities, our expert team curates personalized adventures for every traveler. Dive into the beauty of the world and let us turn your travel dreams into cherished memories. Start your journey today—because the world is waiting for you!
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
              <StyledButton href="/home#Booking" className="" text1="Enjoy" text2="More" />
            </div>
          </motion.div>

        </div>
      </div>
      <Ripped className={''} />
      <div id="contactUs" className="w-full grid xl:flex py-10 md:py-20 justify-center items-center px-5 xl:px-20">
        <div className="w-[100%] xl:w-[50%] p-5 lg:p-10">
          <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h2-img-01.png" className="w-full h-full object-cover" />
        </div>
        <div className="w-[100%] xl:w-[50%] p-5 lg:p-10 text-center lg:text-left ">
          <p className="text-slate-600 text-xs font-[Paprika]">Let's Connect</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[Fjalla] text-[#59815B] uppercase">Feel free to get in <span
            className="text-[#59815B] px-5 "
            style={{ backgroundImage: "url(/tipsBG.png)" }}
          >touch</span></h2>
          <p className=" mt-3 w-[100%] xl:w-[600px]"> Dive into the beauty of the world and let us turn your travel dreams into cherished memories. Start your journey today—because the world is waiting for you!
          </p>
          <div className='w-[100%] xl:w-[600px] h-50 my-3 bg-[#F1F1E8] p-3 rounded-sm'>
            <input type="text" placeholder='Message ...' className='border-none outline-none' />
          </div>
          <div className="flex items-center flex-wrap gap-5 w-full my-3 rounded-sm">

            <div className='w-[150px] bg-[#F1F1E8] p-3'>
              <input type="text" placeholder='Name' className='border-none outline-none' />
            </div>
            <div className='w-[150px] bg-[#F1F1E8] p-3 rounded-sm'>
              <input type="email" placeholder='E-mail' className='border-none outline-none' />
            </div>

            <StyledButton text2={'Send'} text1={'Message'} className={""} href="/about" />
          </div>
        </div>

      </div>
      <span id="location"><ScrollMap /></span>
    </div>
  )
}

export default Conatct
