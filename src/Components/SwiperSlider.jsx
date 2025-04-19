import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Keyboard, Navigation, Autoplay, Pagination } from 'swiper/modules';
import StyledButton from '../Components/StyledButton';

export default function SwiperSlider() {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
            offset: 200,    // Offset value (trigger point)
            easing: 'ease-in-out', // Easing function
        });
    }, []);
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Navigation, Autoplay, Pagination]}
                className="mySwiper"
            >
                {blogs.map(({ heading, spanText, text, img }, ind) => (
                    <SwiperSlide key={ind + "blog"}>
                        <div className=' p-5 sm:p-10 lg:p-20 xl:p-30  w-full h-screen hidden  lg:flex justify-center gap-0 items-center   '>
                            <div className=' w-[100%] md:w-[50%] h-full'><img src={`${img}`} className='w-full h-full ml-20 mt-5' /></div>
                            <div className='relative w-[100%] md:w-[50%] h-full  p-20 flex justify-center  flex-col text-jsutify'>
                                <div className='absolute top-0 -left-20 w-full h-full bg-[url(https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h6-rev-slide-shape.png)] bg-center bg-contain bg-no-repeat -z-1'></div>
                                <h2 className="text-3xl md:text-4xl font-bold font-[Fjalla] text-[#59815B] uppercase">{heading}<span
                                    className="bg-[#59815B] text-[#ECEBE1] px-5 "

                                >{spanText}</span></h2>
                                <p className='my-3 w-full lg:w-[70%] font-[Quicksand]'>{text}</p>
                                <StyledButton href="/home#Booking" className="" text1="Enjoy" text2="More" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}


const blogs = [
    {
        heading: "Uncover Hidden ",
        spanText: "Paradises",
        text: "Experience the untouched beauty of nature in secluded destinations waiting to be explored.",
        img: "https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h6-rev-slide1.png"
    },
    {
        heading: "Adventure Awaits Your ",
        spanText: "Soul",
        text: "Embrace thrilling experiences from mountain treks to heart-pounding water sports.",
        img: "https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h6-rev-slide3.png"
    },
    {
        heading: "Cultural Wonders of the ",
        spanText: "World",
        text: "Dive into the vibrant traditions and history that make every place unique.",
        img: "https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h6-rev-slide2.png"
    }
];