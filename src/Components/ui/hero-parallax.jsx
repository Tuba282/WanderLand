
import React from "react";
import { useScroll, useTransform, useSpring, motion } from "motion/react";
import { Link } from "react-router-dom";

export const HeroParallax = ({
    products
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    motion
    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
    const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
    return (
        <div
            ref={ref}
            id="Journey"
            className="h-[300vh] w-[100%] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] bg-[url(/hero-bg.jpg)] bg-center bg-cover bg-no-repeat [transform-style:preserve-3d]">
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className="">
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.title} />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard product={product} translate={translateXReverse} key={product.title} />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.title} />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div
            className="max-w-7xl flex flex-col xl:flex-row justify-between items-center  relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
            <div className="w-full xl:w-[60%] font-[Quicksand]">
            <h1 className="text-2xl text-amber-50 md:text-7xl uppercase font-bold font-[Fjalla] dark:text-white tracking-tighter">
                Discover the World<br /> One Journey at a Time!
            </h1>
            <p className="max-w-2xl text-amber-50 text-base md:text-xl mt-8 dark:text-neutral-200 tracking-tighter">
                Embark on breathtaking adventures tailored just for you.From serene beaches to towering mountains, we take you places you've dreamed of.Dive into the richness of nature and connect with awe-inspiring landscapes.
            </p>
            </div>
            <div className="w-full xl:w-[30%]">
            <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/logo-img-03.png" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-96 w-[30rem] relative shrink-0">
            <Link href={product.link} className="block group-hover/product:shadow-2xl ">
                <img
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0"
                    alt={product.title} />
            </Link>
            <div
                className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
            <h2
                className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.title}
            </h2>
        </motion.div>
    );
};
