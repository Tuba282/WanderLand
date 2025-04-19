
import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react'
import { useLoaderData, useLocation, Link } from 'react-router-dom';
import StyledButton from "../Components/StyledButton"
import Ripped from "../Components/Ripped"
import { FaVanShuttle } from "react-icons/fa6";
import { FaMapSigns } from "react-icons/fa";
import { GrMap } from "react-icons/gr";
import { GiCampingTent } from "react-icons/gi";
import { IoBonfireOutline } from "react-icons/io5";
import { TbPaperBag } from "react-icons/tb";
import SwiperSlider from '../Components/SwiperSlider';
import { FeaturedSec } from '../Components/BentoGrid';
import { ReviewCard } from '../Components/ReviewCard';

const Blogs = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  motion

  const { comments, images } = useLoaderData();

  const [pagination, setPagination] = useState({ start: 0, end: 9 }); // State for pagination

  const handlePagination = (start, end) => {
    setPagination({ start, end }); // Update start and end indices
  };





  return (
    <div>
      <div id="ourStory" className="relative mx-auto w-full  bg-[url(https://img.freepik.com/free-photo/blank-diary-personal-accessories-coffee-cup-world-map_23-2147856128.jpg?t=st=1744833929~exp=1744837529~hmac=fb1248b2aa6395d291437159579224f260d6e4680c21d31f15666f02048ddfe3&w=1380)] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center ">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
        <div className="px-4 py-20 md:py-30 xl:py-50">
          <h1
            className="relative z-10 mx-auto max-w-4xl text-2xl text-center text-amber-50 md:text-7xl uppercase font-bold font-[Fjalla] dark:text-white text-shadow-2xs text-shadow-black">
            {"Journey Through Stories and Experiences!"
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
            Dive into a world of inspiring travel blogs that fuel your wanderlust! Our collection of stories, tips, and insights from passionate travelers around the globe will help you explore new destinations with ease. From hidden gems to popular spots, discover unique perspectives that transform ordinary vacations into extraordinary adventures.
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
      <h2 className='text-3xl md:text-6xl font-bold tracking-tighter uppercase  text-[#665044] text-center font-[]'>Get to Know Our <span
        className="text-[#59815B] px-5 "
        style={{ backgroundImage: "url(/tipsBG.png)" }}
      >Story</span>
      </h2>
      <p className="w-full lg:w-[700px] my-7 text-center mx-auto font-[Quicksand]">Dive into a world of inspiring travel blogs that fuel your wanderlust! Our collection of stories, tips, and insights from passionate travelers around the globe will help you explore new destinations with ease. From hidden gems to popular spots, discover unique perspectives that transform ordinary vacations into extraordinary adventures.</p>
      <div className='relative w-full min-h-14 my-5 flex justify-center gap-15 items-center flex-wrap'>

        <span className='relative flex justify-center items-center flex-col'>
          <FaVanShuttle className='py-1 border-b-2 text-8xl hover:text-[#f2f1ea] text-[#59815B] transition delay-100 duration-300' />

          <h3 className='font-[Fjalla] tracking-tight uppercase text-2xl rounded p-2 my-1 hover:text-[#f2f1ea] text-[#59815B] transition delay-100 duration-300 hover:bg-[#59815B] font-semibold'>Destination</h3>
        </span>
        <span className='relative flex justify-center items-center flex-col'>
          <FaMapSigns className='py-1 border-b-2 text-8xl hover:text-[#f2f1ea] text-[#59815B] transition delay-100 duration-300' />

          <h3 className='font-[Fjalla] tracking-tight uppercase text-2xl rounded p-2 my-1 hover:text-[#f2f1ea] text-[#59815B] transition delay-100 duration-300 hover:bg-[#59815B] font-semibold'>Popular</h3>
        </span>
        <span className='relative flex justify-center items-center flex-col'>
          <GrMap className='py-1 border-b-2 text-8xl hover:text-[#f2f1ea] text-[#59815B] transition delay-100 duration-300' />

          <h3 className='font-[Fjalla] tracking-tight uppercase text-2xl rounded p-2 my-1 hover:text-[#f2f1ea] text-[#59815B] transition delay-100 duration-300 hover:bg-[#59815B] font-semibold'>Beaches</h3>
        </span>
        <span className='relative flex justify-center items-center flex-col'>
          <GiCampingTent className='py-1 border-b-2 text-8xl hover:text-[#f2f1ea] text-[#59815B] transition delay-100 duration-300' />

          <h3 className='font-[Fjalla] tracking-tight uppercase text-2xl rounded p-2 my-1 hover:text-[#f2f1ea] text-[#59815B] transition delay-100 duration-300 hover:bg-[#59815B] font-semibold'>Friendly</h3>
        </span>
        <span className='relative flex justify-center items-center flex-col'>
          <IoBonfireOutline className='py-1 border-b-2 text-8xl hover:text-[#f2f1ea] text-[#59815B] transition delay-100 duration-300' />

          <h3 className='font-[Fjalla] tracking-tight uppercase text-2xl rounded p-2 my-1 hover:text-[#f2f1ea] text-[#59815B] transition delay-100 duration-300 hover:bg-[#59815B] font-semibold'>Camping</h3>
        </span>
        <span className='relative flex justify-center items-center flex-col'>
          <TbPaperBag className='py-1 border-b-2 text-8xl hover:text-[#f2f1ea] text-[#59815B] transition delay-100 duration-300' />

          <h3 className='font-[Fjalla] tracking-tight uppercase text-2xl rounded p-2 my-1 hover:text-[#f2f1ea] text-[#59815B] transition delay-100 duration-300 hover:bg-[#59815B] font-semibold'>Low Budget</h3>
        </span>




      </div>
      <SwiperSlider />
      <FeaturedSec id="features"/>
      <h2 className='text-3xl md:text-6xl font-bold tracking-tighter uppercase  text-[#665044] text-center font-[]'>What Our Clients <span
        className="text-[#59815B] px-5 "
        style={{ backgroundImage: "url(/tipsBG.png)" }}
      >Say!</span>
      </h2>
      <div id="reviews" className="flex flex-wrap gap-20 p-5 md:p-20 sm:p-10 lg:p-30">
        {comments.slice(pagination.start, pagination.end).map((comment, ind) => (
          <ReviewCard
            key={`${ind}-comment`}
            {...comment}
            {...images[ind + pagination.start]}
          />
        ))}
      </div>

      <div className="flex items-center justify-center border-t border-gray-200 px-4 py-3 sm:px-6">
        <div className="w-full md:w-[200px] flex items-center justify-center text-[#59815b] font-[Quicksand]">
          <span
            onClick={() => handlePagination(0, 9)}
            className="text-md font-semibold hover:bg-[#59815b] hover:text-white cursor-pointer py-3 px-4 border-2 border-slate-200 rounded-l"
          >
            1
          </span>
          <span
            onClick={() => handlePagination(9, 18)}
            className="text-md font-semibold hover:bg-[#59815b] hover:text-white cursor-pointer py-3 px-4 border-2 border-slate-200"
          >
            2
          </span>
          <span
            onClick={() => handlePagination(18, 27)}
            className="text-md font-semibold hover:bg-[#59815b] hover:text-white cursor-pointer py-3 px-4 border-2 border-slate-200"
          >
            3
          </span>
          <span
            onClick={() => handlePagination(27, 36)}
            className="text-md font-semibold hover:bg-[#59815b] hover:text-white cursor-pointer py-3 px-4 border-2 border-slate-200"
          >
            4
          </span>
          <span
            onClick={() => handlePagination(36, 45)}
            className="text-md font-semibold hover:bg-[#59815b] hover:text-white cursor-pointer py-3 px-4 border-2 border-slate-200 rounded-r"
          >
            5
          </span>
        </div>
      </div>
    </div>
  )
}

export default Blogs

// eslint-disable-next-line
export const blogsLoader = async () => {
  try {
    const commentsResponse = await fetch("https://jsonplaceholder.typicode.com/comments");
    const imagesResponse = await fetch("/fakerAPI.json");

    if (!commentsResponse.ok) {
      console.log(("Failed to fetch comment data"));

      if (!imagesResponse.ok) {
        console.log("Failed to fetch image data");
      }
    }

    const comments = await commentsResponse.json();
    const images = await imagesResponse.json();

    // Return combined data
    return { comments, images };
  } catch (error) {
    console.error("Error loading data:", error);
    throw error; // This will be handled by `errorElement`
  }
};