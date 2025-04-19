import React from 'react'
import StyledButton from "./StyledButton"
import { IoPricetags } from "react-icons/io5";

const Tips = () => {
    return (
        <div id='Tips' className='w-full h-full my-30'>
            <h2 className='text-3xl md:text-6xl font-bold tracking-tighter uppercase  text-[#665044] text-center font-[]'>Travel essentials <span
                className="text-[#59815B] px-5 "
                style={{ backgroundImage: "url(/tipsBG.png)" }}
            >Tips</span>
            </h2>
            <div className=" p-10 text-gray-600 body-font">
                <div className="container mx-auto flex  xl:px-50 px-5 py-24 md:flex-row flex-col items-center justify-center">
                    <div className=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-[#59815B] font-[Fjalla] uppercase">Moving trough: the everyday urban jungle of your city
                        </h2>
                        <p className="mb-8 leading-relaxed">From grand adventures in bustling cities to quiet retreats in serene countryside settings, the joy of traveling lies not just in the destination, but in the journey itself—a journey that leaves you enriched, inspired, and forever changed.</p>
                        <div className="flex justify-center">
                        <StyledButton href="/about" className={""} text1="Read More" text2="Go to" />
                        </div>
                    </div>
                    <div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-01.jpg" />
                        <span style={{ 'clipPath': 'polygon(0% 0%, 90% 0, 100% 50%, 90% 99%, 0% 100%)' }} className='absolute top-5 -left-5 flex items-center gap-3  font-[Paprika] text-sm bg-[#F2F1E7] px-4 py-1 '><IoPricetags className='text-[#59815B]' /> Travel Tips</span>
                    </div>
                </div>
            </div>
            <div className=" p-10 text-gray-600 body-font">
                <div className="container mx-auto xl:px-50 px-5 flex py-24 md:flex-row flex-col items-center">
                    <div className="relative xl:max-w-lg xl:w-full lg:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-02.jpg" />
                        <span style={{ 'clipPath': 'polygon(0% 0%, 90% 0, 100% 50%, 90% 99%, 0% 100%)' }} className='absolute top-5 -left-5 flex items-center gap-3  font-[Paprika] text-sm bg-[#F2F1E7] px-4 py-1 '><IoPricetags className='text-[#59815B]' /> Travel Tips</span>
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-[#59815B] font-[Fjalla] uppercase">Top Hiking Trails in the Peruvian Amazon Rain Forest
                        </h2>
                        <p className="mb-8 leading-relaxed"> Travel is also about the little things—the laughter shared with fellow travelers, the excitement of uncovering hidden gems, and the peace that comes with witnessing the tranquil beauty of nature. It teaches you patience, adaptability, and gratitude, offering a new perspective on life and the world around you. </p>
                        <div className="flex justify-center">
                            <StyledButton href="/about" className={""} text1="Read More" text2="Go to" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Tips
