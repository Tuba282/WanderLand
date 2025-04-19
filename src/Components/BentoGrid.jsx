import React from "react";
import { cn } from "/lib/utils";
import { motion } from "motion/react";
import { FaYoutube } from "react-icons/fa6";
// 

export function FeaturedSec() {
    motion
  const features = [
    {
      title: "Chasing Sunsets Everywhere",
      description:
        "Watch the sun paint the sky as you explore magical destinations worldwide.",
      skeleton: <SkeletonOne img={"https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-3.jpg"}/>,
      className:
        "col-span-1 lg:col-span-4 font-[Quicksand] font-semibold border-b  border-gray-300 lg:border-r dark:border-neutral-400",
    },
    {
      title: "Luxury Meets Exploration",
      description:
        "Pamper yourself in world-class accommodations while exploring awe-inspiring locations.",
      skeleton: <SkeletonTwo />,
      className: " col-span-1 lg:col-span-2 border-b border-gray-300",
    },
    {
      title: "Journeys That Inspire You",
      description:
        "Find motivation and inspiration through heartfelt travel stories and experiences.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  border-gray-300",
    },
    {
      title: "Travel Beyond Boundaries",
      description:
        "Break free from routine and step into a world where adventure has no limits.",
      skeleton: <SkeletonOne img={"https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/land-home-img-4.jpg"}/>,
      className: "col-span-1 lg:col-span-3 border-b border-gray-300o lg:border-none",
    },
  ];
  return (
    <div id="features" className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h2 className='text-3xl md:text-6xl font-bold tracking-tighter uppercase  text-[#665044] text-center font-[]'>Taste Your Way Around the  <span
        className="text-[#59815B] px-5 "
        style={{ backgroundImage: "url(/tipsBG.png)" }}
      >Globe</span>
      </h2>
        <p
          className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Savor exotic cuisines and dishes that redefine your culinary journey.Every journey is an opportunity to connect, discover, and celebrate the joys of life.
        </p>
      </div>
      <div className="relative ">
        <div
          className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-gray-300">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({
  children
}) => {
  return (
    <p
      className=" max-w-5xl mx-auto text-left tracking-tight text-[#59815b] dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({
  children
}) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-700 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}>
      {children}
    </p>
  );
};

export const SkeletonOne = ( {img}) => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div
        className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <img
            src={img}
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm" />
        </div>
      </div>
      <div
        className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div
        className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <a
      href="https://www.youtube.com/watch?v=3SsK-cxlj_w&ab_channel=touropia"
      target="__blank"
      className="relative flex gap-10  h-full group/image">
      <div
        className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
          {/* TODO */}
          <FaYoutube className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
          <img
            src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h5-img-01.jpg"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200" />
        </div>
      </div>
    </a>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://thumbs.dreamstime.com/b/happy-travel-woman-vacation-concept-funny-traveler-enjoy-her-trip-ready-to-adventure-happy-travel-woman-vacation-concept-118679424.jpg",
    "https://img.freepik.com/free-photo/young-asian-female-traveler-with-backpack-traveling-ayutthaya-province-thailand_1150-18180.jpg?semt=ais_hybrid&w=740",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://img.freepik.com/free-photo/young-asian-backpacker-female-wearing-hat-smiling-while-has-trip-historic-site-she-sitting-grass-relaxing-use-camera-take-photo-with-happy_1150-48682.jpg?semt=ais_hybrid&w=740",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1682091907070-4985a6fbe6d2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsJTIwdGlwc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://www.mckinsey.com/~/media/mckinsey/industries/travel%20logistics%20and%20infrastructure/our%20insights/us%20summer%20travel%202022/thumb-us-summer.jpg",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div
      className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden">
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0" />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.reverse().map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden">
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0" />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row -ml-20">
        {images.reverse().map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden">
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0" />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden">
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0" />
          </motion.div>
        ))}
      </div>
      <div
        className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
      <div
        className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" />
    </div>
  );
};

